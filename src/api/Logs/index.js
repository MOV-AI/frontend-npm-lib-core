import { webSocketOpen } from "../WebSocket";
import Features from "./../Features";
import Rest from "../Rest/Rest";
import {
  DEFAULT_LEVELS,
  DEFAULT_SERVICE,
  MAX_LOG_LIMIT,
} from "./../Utils/constants";
import IntervalTree from "@flatten-js/interval-tree";

const MAX_FETCH_LOGS = 20000;

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
  return getRequestString(
    label,
    value ? new Number(value / 1000).toFixed(0) : 0,
  );
}

/**
 * Get Logs parameter string
 * @param {LogQueryParam} queryParam : Object to construct query string
 * @returns {string} query parameter string
 */
function getLogsParam(queryParam = {}) {
  return [
    getRequestString("limit", queryParam?.limit),
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

async function getLogs(fromDate, toDate, limit) {
  // console.log("GETLOGS", fromDate, toDate, limit);
  const path =
    "v1/logs/?" +
    getLogsParam({
      limit,
      date: {
        from: fromDate,
        to: toDate,
      },
    });

  const response = await Rest.get({ path });

  const data = response?.data || [];
  const newLogs = data.map(transformLog);
  return newLogs;
  // return (
  //   Features.get("noLogsDedupe")
  //     ? newLogs.concat(oldLogs)
  //     : logsDedupe(oldLogs, newLogs)
  // ).slice(-maximum);
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
    this.maximum = MAX_FETCH_LOGS;
    this.lastInterval = [];
    this.fetchingAbsent = false;
    this.refresh();
  }

  clear() {
    this.tree = new IntervalTree();
    this.update();
  }

  getLastTo() {
    return this.lastInterval.length
      ? this.lastInterval[this.lastInterval.length - 1].timestamp
      : null;
  }

  getLastFrom() {
    return this.lastInterval.length ? this.lastInterval[0].timestamp : null;
  }

  async refresh() {
    this.streaming = Features.get("logStreaming");
    this.clear();

    if (this.streaming) {
      const params = new URLSearchParams();
      const sock = webSocketOpen({ path: "/ws/logs", params });
      sock.onmessage = (msg) => {
        const item = websocketTransform(JSON.parse(msg?.data ?? {}));

        this.pushInterval([transformLog(item, 0, [item], 0.000001)]);

        this.update();
      };

      this.shiftInterval(await getLogs(this.getLastFrom(), null, this.maximum));

      this.update();
    } else this.getLogs();
  }

  async getLogs() {
    try {
      this.pushInterval(await getLogs(this.getLastFrom(), null, this.maximum));

      this.update();
    } catch (e) {
      console.log("Failed getting logs", e);
    }
    setTimeout(() => this.getLogs(), 3000);
  }

  get() {
    let total = [];

    for (const innerInterval of this.tree.iterate())
      total = innerInterval.concat(total);

    return total;
  }

  getAbsentIntervals(fromTime, toTime = this.lastInterval[0]?.timestamp) {
    if (!fromTime) return [];

    let absentStart = fromTime;
    const absentTimes = [];

    for (const innerKey of this.tree.iterate(
      [fromTime, toTime],
      (_value, key) => key,
    )) {
      const { low, high } = innerKey;

      if (absentStart < low) absentTimes.push([absentStart, low]);

      absentStart = high;
    }

    if (absentStart < toTime) absentTimes.push([absentStart, toTime]);

    return absentTimes;
  }

  getKey(interval) {
    return [interval[interval.length - 1].timestamp, interval[0].timestamp];
  }

  setLastInterval(interval) {
    if (this.lastInterval.length)
      this.tree.remove(this.getKey(this.lastInterval), this.lastInterval);

    this.lastInterval = interval.slice(-this.maximum);

    this.tree.insert(this.getKey(this.lastInterval), this.lastInterval);
  }

  shiftInterval(interval) {
    this.setLastInterval(this.lastInterval.concat(interval));
  }

  pushInterval(interval) {
    this.setLastInterval(interval.concat(this.lastInterval));
  }

  getFormattedKey(intervalKey) {
    const [start, end] = intervalKey;
    return [new Date(start).toISOString(), new Date(end).toISOString()];
  }

  putInterval(intervalKey, interval) {
    if (!interval.length) {
      this.tree.insert(intervalKey, []);
      return;
    }

    const [fromDate, toDate] = intervalKey;

    const trueKey = this.getKey(interval);

    const [trueFromDate, trueToDate] = intervalKey;

    // console.log("putInterval", this.getFormattedKey(trueKey), this.getFormattedKey(intervalKey), intervalKey, interval, this.tree);

    for (const innerInterval of this.tree.iterate(trueKey)) {
      const innerKey = this.getKey(innerInterval);
      const [innerFromDate, innerToDate] = innerKey;

      if (innerFromDate === toDate) {
        this.tree.remove(innerKey);
        // console.log("putting inner ", this.getFormattedKey(innerKey)[1], "on top of", this.getFormattedKey(trueKey)[0]);
        this.tree.insert(
          [trueFromDate, innerToDate],
          interval.concat(innerInterval),
        );
        return;
      }

      if (innerToDate === fromDate) {
        this.tree.remove(innerKey);
        // console.log("putting", this.getFormattedKey(trueKey)[1], "on top of inner", this.getFormattedKey(innerKey)[0]);
        this.tree.insert(
          [innerFromDate, trueToDate],
          innerInterval.concat(interval),
        );
        return;
      }
    }

    this.tree.insert(trueKey, interval);
  }

  async fetchAbsent(selectedFromDate, selectedToDate) {
    if (this.fetchingAbsent) return;

    const fromDate = selectedFromDate ? selectedFromDate.getTime() : null;
    const toDate =
      (selectedToDate ? selectedToDate.getTime() : null) || this.getLastTo();

    const absentIntervals = this.getAbsentIntervals(fromDate, toDate);

    if (!absentIntervals.length) return;

    this.fetchingAbsent = true;

    // console.log("ABSENT!", absentIntervals);

    const allAbsent = await Promise.all(
      absentIntervals.map((interval) =>
        getLogs(interval[0], interval[1]).then((logs) => [interval, logs]),
      ),
    );

    // console.log("allAbsent are", allAbsent);
    for (const [key, absent] of allAbsent) this.putInterval(key, absent);

    if (allAbsent.length) this.update();

    this.fetchingAbsent = false;
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

    this.fetchAbsent(selectedFromDate, selectedToDate);

    return this.get().filter(
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
    for (const [sub] of this.subs) sub(this.get());
  }
}

globalThis.Logs = Logs;
