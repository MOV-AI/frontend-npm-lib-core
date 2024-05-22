import Authentication from "../Authentication/Authentication";
const { getToken } = Authentication;

const wsMap = {};

export
function webSocketOpen(config) {
  const {
    path = "",
    host = window.location.hostname,
    port = window.location.port,
    proto = window.location.protocol === "https:" ? "wss" : "ws",
    params = new URLSearchParams(),
  } = typeof config === "string" ? { path: config } : config ?? {};
  const url = proto + "://" + host + ":" + port + path;
  if (wsMap[url])
    return wsMap[url];
  let wsUrl = new URL(url);
  params.set("token", getToken());
  wsUrl.search = params;
  return wsMap[url] = new WebSocket(wsUrl.toString());
}
