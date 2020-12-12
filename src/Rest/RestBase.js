const RestBase = {};

/**
 * Encodes the values of an object
 * @param {Object} data Object to encode
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
 * @param {String} path Relative path
 */
RestBase.getUrl = ({ path, search = {} }) => {
  const host = `${window.location.hostname}:${window.location.port}`;

  const params = new URLSearchParams(RestBase.encodeURI(search));

  return `${
    window.location.protocol
  }//${host}/api/${path}?${params.toString()}`;
};

/**
 * Execute request
 * @param {String} path Relative path
 * @param {String} method Request method
 * @param {Object} body Request payload
 */
RestBase._request = ({
  path,
  method = "GET",
  body = {},
  search,
  customHeaders = {}
}) => {
  const headers = customHeaders;
  const url = RestBase.getUrl({ path, search });
  const skipBody = ["HEAD", "GET"];

  const payload = {
    method,
    headers
  };
  console.log("payload", payload);

  if (!skipBody.includes(method)) payload.body = JSON.stringify(body);

  return fetch(url, payload).then(response => {
    if (!response.ok) {
      return Promise.reject(response);
    }
    return response.json();
  });
};

/**
 * Execute GET request
 * @param {String} path Relative path
 * @param {String} search Search parameters
 */

RestBase.get = ({ path, search, customHeaders = {} }) => {
  return RestBase._request({ path, search, customHeaders });
};

/**
 * Execute POST request
 * @param {String} path Relative path
 * @param {Object} body Request payload
 */
RestBase.post = ({ path, body, customHeaders = {} }) => {
  const method = "POST";

  return RestBase._request({ path, method, body, customHeaders });
};

/**
 * Execute PUT request
 * @param {String} path Relative path
 * @param {Object} body Request payload
 */
RestBase.put = ({ path, body, customHeaders = {} }) => {
  const method = "PUT";

  return RestBase._request({ path, method, body, customHeaders });
};

/**
 * Execute DELETE request
 * @param {String} path Relative path
 */
RestBase.delete = ({ path, body, customHeaders = {} }) => {
  const method = "DELETE";

  return RestBase._request({ path, method, body, customHeaders });
};

/**
 * Upload file to a specific Package
 * @param {String} packageName Package name
 * @param {String} key Key to insert in the package
 * @param {String} value Value of the key
 */
RestBase.upload = ({ packageName, key, value, customHeaders = {} }) => {
  const path = `upload/${packageName}/`;
  const body = new FormData();
  body.append("name", key);
  body.append("data", value);

  return RestBase.post({ path, body, customHeaders });
};

/**
 * Execute remote procedure call
 * @param {String} cbName Callback name
 * @param {String} func Function in the callback
 * @param {Object} args Args to pass to the function
 */
RestBase.cloudFunction = ({ cbName, func = "", args, customHeaders = {} }) => {
  const path = `function/${cbName}/`;
  const body = { func, args };

  return RestBase.post({ path, body, customHeaders }).then(response =>
    response.json()
  );
};

RestBase.validScope = scope => ["global", "fleet"].includes(scope);
RestBase.validKey = key => key.split("@") >= 2;
RestBase.validateVar = (key, scope) => {
  const validators = [
    {
      fn: scope => RestBase.validScope(scope),
      error: "Invalid scope"
    },
    {
      fn: key => RestBase.validKey(key),
      error: "Key format should be <robot name>@<key name>"
    }
  ];

  validators.forEach(obj => {
    if (!obj.fn()) {
      throw new Error(obj.error);
    }
  });
};

RestBase.getVar = ({ key, scope = "global", customHeaders = {} }) => {
  RestBase.validateVar(key, scope);

  const path = `v1/database/${scope}/${key}/`;

  return RestBase.get({ path, customHeaders }).then(response =>
    response.json()
  );
};

RestBase.setVar = ({ key, value, scope = "global", customHeaders = {} }) => {
  RestBase.validateVar(key, scope);

  const path = `v1/database/`;
  const body = { key, scope, value };

  return RestBase.post({ path, body, customHeaders }).then(response =>
    response.json()
  );
};

export default RestBase;
