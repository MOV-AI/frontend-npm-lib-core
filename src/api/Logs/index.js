import { webSocketOpen } from "../WebSocket";
import Features from "./../Features";
import Rest from "../Rest/Rest";
import { DEFAULT_LEVELS, DEFAULT_SERVICE } from "./../Utils/constants";
import Logs from "@tty-pt/logs";

/**
 * Tranform log from the format received from the API to the format
 * required to be rendered
 * @returns {array} Transformed log
 */
function transform(log, _index, _array, isStream) {
  const multiplier = isStream ? 0.000001 : 1000;
  const timestamp = multiplier * log.time;
  const date = new Date(timestamp);
  return {
    ...log,
    timestamp,
    time: date.toLocaleTimeString(),
    date: date.toLocaleDateString(),
    key: log.message + timestamp,
  };
}

function streamTransform(msg) {
  const original = JSON.parse(msg?.data ?? {});
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

export default class MovaiLogs extends Logs {
  static CONSTANTS = {
    DEFAULT_LEVELS,
    DEFAULT_SERVICE,
  };

  constructor() {
    super({
      url: "v1/logs/",
      fetch: async (path) => (await Rest.get({ path }))?.data,
      transform,

      streamUrl: "/ws/logs",
      stream: Features.get("logStreaming"),
      streamOpen: (streamUrl) =>
        webSocketOpen({
          path: streamUrl,
          params: new URLSearchParams(),
        }),
      streamTransform,

      fields: {
        level: { type: "enumeration", default: DEFAULT_LEVELS },
        service: { type: "enumeration", default: DEFAULT_SERVICE },
        tags: { type: "tags" },
        message: { type: "string" },
        robot: { type: "enumeration" },
      },
    });
  }
}

globalThis.Logs = MovaiLogs;
