import { webSocketOpen } from "../WebSocket";
import Features from "./../Features";
import Rest from "../Rest/Rest";
import { DEFAULT_LEVELS, DEFAULT_SERVICE } from "./../Utils/constants";
import IntervalTree from "@flatten-js/interval-tree";

const MAX_FETCH_LOGS = 20000;
const END_TIMES = 8640000000000000;

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
    value ? (new Number(value) / 1000).toFixed(0) : 0,
  );
}

/**
 * Get Logs parameter string
 * @param {LogQueryParam} queryParam : Object to construct query string
 * @returns {string} query parameter string
 */
function getLogsParam(queryParam = {}) {
  return [
    getRequestString("limit", queryParam.limit),
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
  const paramObj = {
    limit: limit || MAX_FETCH_LOGS,
    date: {
      from: fromDate,
      to: toDate,
    },
  };
  const path = "v1/logs/?" + getLogsParam(paramObj);

  const response = await Rest.get({ path });

  const data = response?.data || [];
  const newLogs = data.map(transformLog);
  return newLogs;
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
    this.init(maximum);
  }

  init(maximum = 0) {
    this.subs = new Map();
    this.maximum = maximum;
    this.lastInterval = [];
    this.fetchingAbsent = false;
    this.beginning = -END_TIMES;
    this.subscriptionTree = new IntervalTree();
    this.refresh();
  }

  getLastFrom() {
    return this.lastIntervalKey?.[0] ?? null;
  }

  getLastTo() {
    return this.lastIntervalKey?.[1] ?? null;
  }

  async refresh() {
    this.streaming = Features.get("logStreaming");
    this.tree = new IntervalTree();
    this.update();

    if (this.streaming) {
      const params = new URLSearchParams();
      const sock = webSocketOpen({ path: "/ws/logs", params });
      sock.onmessage = (msg) => {
        const item = websocketTransform(JSON.parse(msg?.data ?? {}));

        this.pushInterval([transformLog(item, 0, [item], 0.000001)], true);

        this.update();
      };

      this.shiftInterval(await getLogs(this.getLastTo(), null, this.maximum));

      this.update();
    } else this.getLogs();
  }

  async getLogs() {
    try {
      this.pushInterval(await getLogs(this.getLastTo(), null, this.maximum));

      this.update();
    } catch (e) {
      console.log("Failed getting logs", e);
    }
    setTimeout(() => this.getLogs(), 3000);
  }

  get() {
    let total = [];
    if (!this.lastInterval.length) return [];

    for (const innerInterval of this.tree.iterate())
      total = innerInterval.concat(total);

    return total;
  }

  getAbsentIntervals(fromTime, toTime = this.lastIntervalKey?.[1]) {
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

  setLastInterval(interval, intervalKey) {
    if (this.lastInterval.length)
      this.tree.remove(this.lastIntervalKey, this.lastInterval);

    this.lastInterval = interval;
    this.lastIntervalKey = intervalKey ?? this.getKey(interval);
    this.tree.insert(this.lastIntervalKey, interval);
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

  // assumes the interval is really absent
  insertAbsent(intervalKey, interval) {
    const [fromDate, toDate] = intervalKey;

    for (const [innerInterval, key] of this.tree.iterate(
      intervalKey,
      (value, key) => [value, key],
    )) {
      this.tree.remove(key);

      if (key.high === fromDate)
        return this.tree.insert(
          [key.low, toDate],
          interval.concat(innerInterval),
        );

      if (key.low === toDate) {
        const possiblyLastKey = [fromDate, key.high];
        const possiblyLast = innerInterval.concat(interval);
        if (innerInterval === this.lastInterval)
          return this.setLastInterval(possiblyLast, possiblyLastKey, false);
        return this.tree.insert(possiblyLastKey, possiblyLast);
      }
    }

    if (intervalKey[1] === this.lastIntervalKey[1])
      this.tree.insert(intervalKey, interval);
  }

  async fetchAbsent(selectedFromDate, selectedToDate) {
    if (this.fetchingAbsent) return;

    const fromDate = selectedFromDate ? selectedFromDate.getTime() : null;
    const toDate =
      (selectedToDate ? selectedToDate.getTime() : null) || this.getLastFrom();

    const absentIntervals = this.getAbsentIntervals(fromDate, toDate);

    if (!absentIntervals.length) return;

    this.fetchingAbsent = true;

    const allAbsent = await Promise.all(
      absentIntervals.map((interval) =>
        getLogs(interval[0], interval[1]).then((logs) => [interval, logs]),
      ),
    );

    for (const [key, absent] of allAbsent) this.insertAbsent(key, absent);

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

  collectIntersections(intervalKey) {
    let [fromDate, toDate] = intervalKey;
    const matches = [];

    for (const [value, key] of this.subscriptionTree.iterate(
      intervalKey,
      (value, key) => [value, key],
    )) {
      this.subscriptionTree.remove(key, value);

      // should work well in all expected situations
      if (key.low < fromDate) {
        if (fromDate < key.high) {
          matches.push([key.low, fromDate, value]);
          matches.push([fromDate, key.high, value + 1]);
        } else if (fromDate === key.high)
          matches.push([key.low, fromDate, value + 1]);
      } else if (toDate < key.high) {
        matches.push([key.low, toDate, value + 1]);
        matches.push([toDate, key.high, value]);
      } else matches.push([key.low, key.high, value + 1]);
    }

    return matches;
  }

  putSubscriptionInterval(intervalKey) {
    let [fromDate, toDate] = intervalKey;
    const matches = this.collectIntersections(intervalKey);

    if (!matches.length)
      return this.subscriptionTree.insert([fromDate, toDate], 1);

    for (const [innerFrom, innerTo, value] of matches)
      this.subscriptionTree.insert([innerFrom, innerTo], value);

    let lastTo = fromDate;
    for (const [innerFrom, innerTo] of matches) {
      if (innerFrom > lastTo)
        this.subscriptionTree.insert([lastTo, innerFrom], 1);
      lastTo = innerTo;
    }

    if (toDate > lastTo) this.subscriptionTree.insert([lastTo, toDate], 1);
  }

  delIntervals(range) {
    let last,
      trim = false;

    for (const [value, key] of this.tree.iterate(range, (value, key) => [
      value,
      key,
    ])) {
      if (!this.subscriptionTree.intersect_any(key))
        this.tree.remove(key, value);
      last = [[key.low, key.high], value];
      trim = true;
    }

    if (!this.tree.isEmpty())
      for (const [value, key] of this.tree.iterate(undefined, (value, key) => [
        value,
        key,
      ]))
        last = [[key.low, key.high], value];

    if (!last) return;

    let [key, value] = last;

    if (key[1] !== this.lastIntervalKey[1]) return;

    if (
      trim &&
      value.length > MAX_FETCH_LOGS &&
      !this.subscriptionTree.intersect_any(key)
    ) {
      value = value.slice(0, MAX_FETCH_LOGS);
      key[0] = value[value.length - 1].timestamp;
    }

    this.setLastInterval(value, key);
  }

  delSubscriptionInterval(intervalKey) {
    for (const [value, key] of this.subscriptionTree.iterate(
      intervalKey,
      (value, key) => [value, key],
    )) {
      this.subscriptionTree.remove(key, value);
      if (value - 1 > 0) this.subscriptionTree.insert(key, value - 1);
      else setTimeout(() => this.delIntervals([key.low, key.high]), 0);
    }
  }

  subscribe(callback, outerQuery = {}) {
    const { selectedFromDate, selectedToDate } = outerQuery;

    this.fetchAbsent(selectedFromDate, selectedToDate);

    const key = [
      selectedFromDate ? selectedFromDate.getTime() : this.beginning,
      (selectedToDate ? selectedToDate.getTime() : null) || END_TIMES,
    ];

    this.putSubscriptionInterval(key);

    this.subs.set(callback, true);
    return () => {
      this.delSubscriptionInterval(key);
      this.subs.delete(callback);
    };
  }

  update() {
    const logs = this.get();

    if (logs.length) this.beginning = logs[logs.length - 1].timestamp;

    if (
      this.beginning !== -END_TIMES &&
      this.subscriptionTree.exist([-END_TIMES, END_TIMES], 1)
    ) {
      this.subscriptionTree.remove([-END_TIMES, END_TIMES], 1);
      this.subscriptionTree.insert([this.beginning, END_TIMES], 1);
    }

    for (const [sub] of this.subs) sub(logs);
  }
}

globalThis.Logs = Logs;
