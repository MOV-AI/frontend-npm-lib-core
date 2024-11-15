import { webSocketOpen } from "../WebSocket";
import Features from "./../Features";
import Rest from "../Rest/Rest";
import {
  DEFAULT_LEVELS,
  DEFAULT_SERVICE,
  MAX_LOG_LIMIT,
} from "./../Utils/constants";

const MAX_FETCH_LOGS = 200000;
let logsDataGlobal = [];

/**
 * Tranform log from the format received from the API to the format
 * required to be rendered
 * @returns {array} Transformed log
 */
function transformLog(log, _index, _data, ts_multiplier = 1000) {
  const timestamp = ts_multiplier * log.time;
  const date = new Date(timestamp);
  return {
    ...log,
    timestamp,
    time: date.toLocaleTimeString(),
    date: date.toLocaleDateString(),
    key: log.message + timestamp,
  };
}

/**
 * Remove duplicates from logs for the second overlaping the
 * current and the last request
 * @returns {array} Concatenated logs without duplicates
 */
export function logsDedupe(oldLogs, data) {
  if (!data.length) return oldLogs;

  // date of the oldest log received in the current request
  const oldDate = data[data.length - 1].timestamp;
  // map to store the old logs of the overlaped second
  let map = {};

  // iter over old logs with last timestamp of the new logs
  // and put in a map
  for (let i = 0; i < oldLogs.length && oldLogs[i].timestamp === oldDate; i++)
    map[oldLogs[i].message] = oldLogs[i];

  // array to store logs from overlap second which had not
  // been sent  before
  let newSecOverlap = [];
  let z;

  // iter over new logs (oldest to latest) with last timestamp,
  // check if present in last map
  //  - if not, push
  for (z = data.length - 1; z >= 0 && data[z].timestamp === oldDate; z--)
    if (!map[data[z].message]) newSecOverlap.push(data[z]);

  // cut new logs up to z, concat with the deduped ones
  // and the old logs up to i
  return data.slice(0, z + 1).concat(newSecOverlap.reverse(), oldLogs);
}

function getRequestList(label, values) {
  return values?.length
    ? label + "=" + values.map((el) => el.label).join()
    : "";
}

function getRequestString(label, value) {
  return value ? label + "=" + value : "";
}

function getRequestDate(label, value) {
  return getRequestString(label, (value ?? 0) / 1000);
}

/**
 * Get Logs parameter string
 * @param {LogQueryParam} queryParam : Object to construct query string
 * @returns {string} query parameter string
 */
function getLogsParam(queryParam = {}) {
  return [
    getRequestString("limit", queryParam?.limit || MAX_LOG_LIMIT),
    getRequestList("level", queryParam.level?.selected),
    getRequestList("services", queryParam.service?.selected),
    getRequestList("tags", queryParam.tag?.selected),
    getRequestString("message", queryParam.searchMessage),
    getRequestDate("fromDate", queryParam.date?.from),
    getRequestDate("toDate", queryParam.date?.to),
    getRequestList("robots", queryParam.robot?.selected),
  ]
    .filter((a) => !!a)
    .join("&");
}

async function getLogs(maximum = 0) {
  const path =
    "v1/logs/?" +
    getLogsParam({
      limit: MAX_FETCH_LOGS,
      date: {
        from: logsDataGlobal.length ? logsDataGlobal[0].timestamp : null,
        to: null,
      },
    });

  const response = await Rest.get({ path });

  const data = response?.data || [];
  const oldLogs = logsDataGlobal || [];
  const newLogs = data.map(transformLog);

  return (logsDataGlobal = (
    Features.get("noLogsDedupe")
      ? newLogs.concat(oldLogs)
      : logsDedupe(oldLogs, newLogs)
  ).slice(-maximum));
}

function noSelection(obj) {
  for (let key in obj) if (obj[key]) return false;
  return true;
}

function matchTags(tags, item) {
  for (const tag in tags)
    if (item[tag] !== undefined) continue;
    else return false;
  return true;
}

let singleton = null;

function websocketTransform(original) {
  const { message } = original;

  let tags = {};
  let realMessage = message;

  if (message.charAt(0) === "[") {
    const braketParts = message.substring(1).split("] ");

    tags = braketParts[0].split("|").reduce((a, item) => {
      const [key, value] = item.split(":");
      return {
        ...a,
        [key]: value,
      };
    }, {});

    realMessage = braketParts[1];
  }

  return {
    ...original,
    message: realMessage,
    ...tags,
  };
}

export default class Logs {
  static CONSTANTS = {
    DEFAULT_LEVELS,
    DEFAULT_SERVICE,
  };

  // change maximum to another number to limit the amount of kept logs
  constructor(maximum = 0) {
    if (singleton) return singleton;

    singleton = this;
    this.subs = new Map();
    this.refresh();
    this.maximum = maximum;
  }

  clear() {
    logsDataGlobal = [];
    this.update();
  }

  refresh() {
    this.streaming = Features.get("logStreaming");
    this.clear();

    if (this.streaming) {
      const params = new URLSearchParams();
      const sock = webSocketOpen({ path: "/ws/logs", params });
      sock.onmessage = (msg) => {
        const item = websocketTransform(JSON.parse(msg?.data ?? {}));
        logsDataGlobal = [transformLog(item, 0, [item], 0.000001)]
          .concat(logsDataGlobal)
          .slice(-maximum);
        this.update();
      };
      getLogs(this.maximum).then(() => this.update());
    } else this.getLogs();
  }

  async getLogs() {
    try {
      await getLogs(this.maximum);
      this.update();
    } catch (e) {
      console.log("Failed getting logs", e);
    }
    setTimeout(() => this.getLogs(), 3000);
  }

  get() {
    return logsDataGlobal;
  }

  filter(query = {}) {
    const {
      levels = DEFAULT_LEVELS,
      service = DEFAULT_SERVICE,
      tags = {},
      robots = {},
      selectedFromDate = null,
      selectedToDate = null,
      message = "",
    } = query;

    return logsDataGlobal.filter(
      (item) =>
        (levels[item.level] || noSelection(levels)) &&
        (service[item.service] || noSelection(service)) &&
        (matchTags(tags, item) || noSelection(tags)) &&
        (item.message || "").includes(message) &&
        (robots[item.robot] || noSelection(robots)) &&
        (!selectedFromDate || item.timestamp >= selectedFromDate) &&
        (!selectedToDate || item.timestamp <= selectedToDate),
    );
  }

  subscribe(callback) {
    this.subs.set(callback, true);
    return () => this.subs.delete(callback);
  }

  update() {
    for (const [sub] of this.subs) sub(logsDataGlobal);
  }
}

globalThis.Logs = Logs;
