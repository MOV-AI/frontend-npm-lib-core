import Features from "../Features";
const RestBase = {};

/**
 * Encodes the values of an object
 * Xparam {object} data - Object to encode
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
 * Xparam {string} path - Relative path
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
 * Xparam {string} path - Relative path
 * Xparam {string} method - Request method
 * Xparam {object} body - Request payload
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
 * Xparam {string} path - Relative path
 * Xparam {string} search - Search parameters
 */

RestBase.get = ({ url, path, search, customHeaders = {} }) => {
  return RestBase._request({ url, path, search, customHeaders });
};

/**
 * Execute POST request
 * Xparam {string} path - Relative path
 * Xparam {object} body - Request payload
 */
RestBase.post = ({ url, path, body, customHeaders = {} }) => {
  const method = "POST";

  return RestBase._request({ url, path, method, body, customHeaders });
};

/**
 * Execute PUT request
 * Xparam {string} path - Relative path
 * Xparam {object} body - Request payload
 */
RestBase.put = ({ url, path, body, customHeaders = {} }) => {
  const method = "PUT";

  return RestBase._request({ url, path, method, body, customHeaders });
};

/**
 * Execute DELETE request
 * Xparam {string} path - Relative path
 */
RestBase.delete = ({ url, path, body, customHeaders = {} }) => {
  const method = "DELETE";

  return RestBase._request({ url, path, method, body, customHeaders });
};

/**
 * Upload file to a specific Package
 * Xparam {string} packageName - Package name
 * Xparam {string} key - Key to insert in the package
 * Xparam {string} value - Value of the key
 */
RestBase.upload = ({ packageName, key, value, customHeaders = {} }) => {
  const path = `v1/upload/${packageName}/`;
  const body = new FormData();
  body.append("name", key);
  body.append("data", value);

  return RestBase.post({ path, body, customHeaders });
};

let currentApp = "";
RestBase.setApp = ({ name }) => { currentApp = name; };

/**
 * Execute remote procedure call
 * Xparam {string} cbName - Callback name (non-mandatory in some situations)
 * Xparam {string} func - Function in the callback
 * Xparam {object} args - Args to pass to the function
 */
RestBase.cloudFunction = ({ cbName, func = "", args, customHeaders = {} }) => {
  const path = Features.get("noAppCallbacks")
    ? `v1/frontend/${currentApp}/`
    : `v1/function/${cbName}/`;
  const body = { func, args };

  return RestBase.post({ path, body, customHeaders });
};

export default RestBase;
