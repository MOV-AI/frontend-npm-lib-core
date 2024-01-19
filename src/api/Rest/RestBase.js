import Authentication from "../Authentication/Authentication";
const { checkLogin, getToken } = Authentication;
const RestBase = {};

/**
 * Encodes the values of an object
 * @param {Object} data - Object to encode
 */
RestBase.encodeURI = data => {
  const output = {};
  for (const [key, value] of Object.entries(data)) {
    output[key] = encodeURIComponent(value);
  }
  return output;
};

/**
 * Get composed url
 * @param {String} path - Relative path
 */
RestBase.getUrl = ({ path, search = {} }) => {
  const protocol = `${window.location.protocol}`;
  const host = `${window.location.host}`;

  const params = new URLSearchParams(RestBase.encodeURI(search)).toString();
  const queryParams = params ? `?${params}` : "";

  return `${protocol}//${host}/api/${path}${queryParams}`;
};

/**
 * Execute request
 * @param {String} path - Relative path
 * @param {String} method - Request method
 * @param {Object} body - Request payload
 */
RestBase._request = ({
  url,
  path,
  method = "GET",
  body = {},
  search,
  customHeaders = {}
}) => {
  const headers = customHeaders;
  const requestUrl = url ? url : RestBase.getUrl({ path, search });
  const skipBody = ["HEAD", "GET"];

  const payload = {
    method,
    headers
  };

  if (!skipBody.includes(method)) payload.body = JSON.stringify(body);

  return fetch(requestUrl, payload).then(response => {
    if (!response.ok) {
      return Promise.reject(response);
    }
    return response.json();
  });
};

/**
 * Execute GET request
 * @param {String} path - Relative path
 * @param {String} search - Search parameters
 */

RestBase.get = ({ url, path, search, customHeaders = {} }) => {
  return RestBase._request({ url, path, search, customHeaders });
};

/**
 * Execute POST request
 * @param {String} path - Relative path
 * @param {Object} body - Request payload
 */
RestBase.post = ({ url, path, body, customHeaders = {} }) => {
  const method = "POST";

  return RestBase._request({ url, path, method, body, customHeaders });
};

/**
 * Execute PUT request
 * @param {String} path - Relative path
 * @param {Object} body - Request payload
 */
RestBase.put = ({ url, path, body, customHeaders = {} }) => {
  const method = "PUT";

  return RestBase._request({ url, path, method, body, customHeaders });
};

/**
 * Execute DELETE request
 * @param {String} path - Relative path
 */
RestBase.delete = ({ url, path, body, customHeaders = {} }) => {
  const method = "DELETE";

  return RestBase._request({ url, path, method, body, customHeaders });
};

/**
 * Upload file to a specific Package
 * @param {String} packageName - Package name
 * @param {String} key - Key to insert in the package
 * @param {String} value - Value of the key
 */
RestBase.upload = ({ packageName, key, value, customHeaders = {} }) => {
  const path = `v1/upload/${packageName}/`;
  const body = new FormData();
  body.append("name", key);
  body.append("data", value);

  return RestBase.post({ path, body, customHeaders });
};

let currentApp = '';
let currentEe = 0;
let features = {
  restLogs: true,
  feCallbacks: true,
};

export
function getFeatures() {
  return features;
}

RestBase.setApp = ({ name, ee }) => {
  currentApp = name;
  currentEe = ee;
  if (name || currentEe >= 241) {
    features.feCallbacks = false;
    features.restLogs = false;
  }
};

/**
 * Execute remote procedure call
 * @param {String} cbName - Callback name (non-mandatory in some situations)
 * @param {String} func - Function in the callback
 * @param {Object} args - Args to pass to the function
 */
RestBase.cloudFunction = ({ cbName, func = "", args, customHeaders = {} }) => {
  const path = features.feCallbacks
    ? `v1/function/${cbName}/`
    : `v1/frontend/${currentApp}/`;
  const body = { func, args };

  return RestBase.post({ path, body, customHeaders });
};

const wsMap = {};
export
async function WSOpen(config) {
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
  if (!(await checkLogin()))
    throw new AuthException("login error");
  let wsUrl = new URL(url);
  params.set("token", getToken());
  wsUrl.search = params;
  return wsMap[url] = new WebSocket(wsUrl.toString());
}
RestBase.open = globalThis.WSOpen = WSOpen;

export default RestBase;
