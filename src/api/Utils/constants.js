// BroadcastChannel events
export const BROADCAST_EVENTS = {
  ISOPEN: "ISOPEN",
  RPL_ISOPEN: "RPL-ISOPEN",
  OPENDOC: "OPENDOC",
  RPL_OPENDOC: "RPL-OPENDOC"
};

// Robot Logger enum
export const LOGGER_STATUS = {
  init: 0,
  running: 1,
  paused: 2,
  terminated: 3
};

export const ALPHANUMERIC_REGEX = /^[\w][0-9A-Za-z-]*(_[0-9A-Za-z-]+)*[_]?$/;

export const REQUEST_STATUS = {
  SUCCESS: 200,
  NOT_FOUND: 404
};

export const REQUEST_ERROR_CODES = {
  NOT_ALLOWED: "Method Not Allowed"
};

export const EMPTY_FUNCTION = () => {
  /** Empty on purpose */
};

export const SERVICE_LIST = [
  { value: "BACKEND", label: "Backend" },
  { value: "SPAWNER", label: "Spawner" },
  { value: "REDIS", label: "Redis" },
  { value: "ROS", label: "Ros" },
  { value: "HAPROXY", label: "ha-proxy" }
];

export const VAR_SCOPES = {
  GLOBAL: "global",
  FLEET: "fleet"
};

export const DEFAULT_ROBOT_TASKS = {
  currentTask: "N/A",
  previousTask: "N/A"
};
