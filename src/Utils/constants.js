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
