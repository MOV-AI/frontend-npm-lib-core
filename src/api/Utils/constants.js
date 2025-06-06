export const MAX_LOG_LIMIT = 10000;
export const GLOBAL_WORKSPACE = "global";

// BroadcastChannel events
export const BROADCAST_EVENTS = {
  ISOPEN: "ISOPEN",
  RPL_ISOPEN: "RPL-ISOPEN",
  OPENDOC: "OPENDOC",
  RPL_OPENDOC: "RPL-OPENDOC",
};

// Robot Logger enum
export const LOGGER_STATUS = {
  init: 0,
  running: 1,
  paused: 2,
  terminated: 3,
};

export const ALPHANUMERIC_REGEX = /^[\w][0-9A-Za-z-]*(_[0-9A-Za-z-]+)*[_]?$/;

export const REQUEST_STATUS = {
  SUCCESS: 200,
  NOT_FOUND: 404,
};

export const REQUEST_ERROR_CODES = {
  NOT_ALLOWED: "Method Not Allowed",
};

export const EMPTY_FUNCTION = () => {
  /** Empty on purpose */
};

export const SERVICE_LIST = [
  { value: "backend", label: "Backend" },
  { value: "spawner", label: "Spawner" },
  { value: "redis", label: "Redis" },
  { value: "ros", label: "Ros" },
  { value: "haproxy", label: "ha-proxy" },
];

export const SERVICE_LABEL = {
  backend: "Backend",
  spawner: "Spawner",
  redis: "Redis",
  ros: "Ros",
  haproxy: "ha-proxy",
};

export const VAR_SCOPES = {
  GLOBAL: "global",
  FLEET: "fleet",
};

export const DEFAULT_ROBOT_TASKS = {
  currentTask: "N/A",
  previousTask: "N/A",
};

export const WS_EVENT_TYPES = {
  SET: "set",
  HSET: "hset",
  DEL: "del",
  HDEL: "hdel",
  EXP: "expire",
};

export const DEL_WS_EVENTS = [WS_EVENT_TYPES.DEL, WS_EVENT_TYPES.HDEL];
export const SET_WS_EVENTS = [WS_EVENT_TYPES.SET, WS_EVENT_TYPES.HSET];

export const TIME_TO_OFFLINE = 5000;
export const HEARTBEAT_TIMEOUT = 2000;
