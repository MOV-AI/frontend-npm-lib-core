import AuthWebSocket from "../AuthWebSocket/AuthWebSocket";
import Authentication, {
  AuthException
} from "../Authentication/Authentication";
const { getToken, checkLogin } = Authentication;

const WSSUB_STATES = {
  NOT_INIT: 0,
  INIT: 1,
  CONNECTING: 2,
  OPEN: 3,
  CLOSED: 4
};

const CONNECTION = {
  online: 0,
  offline: 1
};

const DEFAULT_METHOD = () => {
  /** Empty on purpose */
};

/**
 * WSSub - class to handle redis subscribers using authenticated websockets
 */
class WSSub {
  constructor() {
    const isHttps = window.location.protocol === "https:";
    this.host = `${window.location.hostname}:${window.location.port}`;
    this.url = `${isHttps ? "wss" : "ws"}://${this.host}/ws/subscriber`;
    this.REST_API = `${window.location.protocol}//${this.host}/api/v1/`;
    this.RECONN_TIMEOUT = 3000;
    this.RECONN_VALIDATION_TIMEOUT = 5000;
    this.RESEND_TIMEOUT = 1000;
    this.RETRIES = 3;
    this.NORMAL_CLOSE_EVT = 1000;
    
    // supported commands
    this.commands = {
      SUBSCRIBE: "subscribe",
      UNSUBSCRIBE: "unsubscribe",
      LIST: "list",
      EXECUTE: "execute"
    };

    this.onOnline = DEFAULT_METHOD;
    this.onOffline = DEFAULT_METHOD;
    this.connectionState = CONNECTION.online;

    this.websocket = null;
    // map with callbacks related with pattern subscription
    this.sub_callbacks = new Map();
    // map with callbacks related with event subscription
    this.evt_callbacks = new Map();
    // to abort a pending fetch
  }

  fetchTimeout = (url, options, timeout = 5000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => {
          reject(new Error("Timeout"));
        }, timeout)
      )
    ]);
  };

  /**
   * get the connection state
   * https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState
   */
  getState = () => {
    return this.websocket?.socket?.readyState || WebSocket.CLOSED;
  };

  /**
   * initialize the socket instance
   */

  initSocket = () => {
    if (this.websocket) return this;
    this.status = WSSUB_STATES.INIT;

    const { url, onOpen, onClose, onError, onMessage, onAuthError } = this;

    // TODO extend WSSub from AuthWebSocket instead
    this.websocket = new AuthWebSocket({
      url,
      onOpen,
      onClose,
      onError,
      onMessage,
      connectionHandler: onAuthError
    });

    this.connect();
    return this;
  };

  /**
   * connection initialization
   */
  connect = () => {
    this.status = WSSUB_STATES.CONNECTING;
    this.websocket.createSocket();

    return this;
  };

  /**
   * try to reconnect
   */
  reConnect = () => {
    const { CONNECTING, OPEN } = WSSUB_STATES;

    if ([CONNECTING, OPEN].includes(this.status)) return;

    this.status = CONNECTING;

    setTimeout(this.connect, this.RECONN_TIMEOUT);
  };

  /**
   * creates a new pair if does not exits and returns it
   * Xparam {Map} map sub_callbacks or evt_callbacks
   * Xparam {string} pattern is the map key
   *
   * @returns {Array} the value associated with the pattern
   */
  getOrCreate = (map, pattern) => {
    return map.get(pattern) || map.set(pattern, []).get(pattern);
  };

  /**
   * push callback to the map
   * Xparam {Map} sub_callbacks or evt_callbacks
   * Xparam {string} pattern is the map key
   * Xparam {function} callback function to execute
   */
  pushCallback = (map, pattern, callback) => {
    this.getOrCreate(map, pattern).push(callback);

    return this;
  };

  /**
   * add subscriber callback
   * Xparam {function} callback function to execute
   * Xparam {string} pattern pattern to subscribe to
   */
  addSubscriberCallback = (callback, pattern) => {
    if (typeof callback !== "function") return this;

    return this.pushCallback(this.sub_callbacks, pattern, callback);
  };

  /**
   * add event callback
   * Xparam {string} command command to send; event to subscribe
   * Xparam {function} callback function to execute
   * Xparam {string} pattern pattern to subscribe to
   */
  addEventCallback = (command, callback, pattern) => {
    if (typeof callback !== "function") return this;

    const _sufix = pattern ? `/${pattern}` : "";
    const _pattern = `${command}${_sufix}`;

    return this.pushCallback(this.evt_callbacks, _pattern, callback);
  };

  /**
   * sends a message to the server
   * Xparam {any} message to send to the server
   */
  send = (message, retry = 0) => {
    try {
      // do not keep trying to send the message after 3 times
      if (retry >= this.RETRIES) throw new Error("Timeout sending message");
      // stringify the message before sending it
      // try to resend if the connection is not yet open
      this.getState() !== WebSocket.OPEN
        ? setTimeout(this.send, this.RESEND_TIMEOUT, message, retry + 1)
        : this.websocket.send(JSON.stringify(message));
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * execute callbacks subscribed to events or patterns
   * Xparam {string} pattern pattern or event
   * Xparam {boolean} is_command when true callback only executes once
   * Xparam {any} message data to pass to the callback
   */
  dispatch = (pattern, message, is_command = true) => {
    const _map = is_command ? this.evt_callbacks : this.sub_callbacks;
    const _callbacks = _map.get(pattern) || [];

    _callbacks.forEach(cb => {
      setTimeout(cb, 0, message);
    });

    if (is_command) _map.delete(pattern);
  };

  /**
   * format the message to send to the server
   * Xparam {string} event event to send to the server
   * Xparam {string} pattern pattern to send to the server
   */
  fmtMessage = (event, pattern) => ({ event, pattern });

  /**
   * triggered when the socket opens
   */
  onOpen = _evt => {
    this.status = WSSUB_STATES.OPEN;

    // send current subscriptions to the server
    this.reSubscribe();
    this.dispatch("onopen");
  };

  /**
   * triggered when the socket closes
   */
  onClose = evt => {
    this.dispatch("onclose");
    this.status = WSSUB_STATES.CLOSED;

    // reconnect if the connection was not closed on purpose
    if (evt.code !== this.NORMAL_CLOSE_EVT) {
      this.reConnect();
    }
  };

  /**
   * triggered when the socket raises an error
   */
  onError = _evt => {
    this.dispatch("onerror");
  };

  /**
   * triggered whit authentication error
   */
  onAuthError = () => {
    // reconnect on authentication error
    this.reConnect();
  };

  /**
   * triggered when the socket receives a message
   */
  onMessage = msg => {
    try {
      const data = JSON.parse(msg.data);
      if (data.error) throw new Error(data.error);

      const { event } = data;
      const is_command = Object.values(this.commands).includes(event);
      const { LIST, EXECUTE } = this.commands;

      const rcv_patterns = [LIST, EXECUTE].includes(event)
        ? [event]
        : data.patterns;

      rcv_patterns.forEach(pattern => {
        const _prefix = is_command ? `${event}/` : "";
        const _pattern = `${_prefix}${JSON.stringify(pattern)}`;

        this.dispatch(_pattern, data, is_command);
      });
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Start offline validation
   * Xparam {object} callback
   *  {
   *    onOnline  -> function to be called when the user is back online
   *    onOffline -> function to be called when the user is offline
   *  }
   * @returns MasterDB instance
   */
  offlineValidation = ({
    onOnline = this.onOnline,
    onOffline = this.onOffline
  }) => {
    this.onOnline = onOnline;
    this.onOffline = onOffline;
    // Set interval to send heartbeat
    clearInterval(this.connectionCheckTimeout);
    this.connectionCheckTimeout = setInterval(
      this.checkConnection,
      this.RECONN_VALIDATION_TIMEOUT
    );
    // Return MasterDB instance
    return this;
  };

  /**
   * Retry connection
   * @returns connection (heartbeat) promise
   */
  retryConnection = () => {
    // Check connection again
    const connectionPromise = this.checkConnection();
    // Clear interval to start again
    clearInterval(this.connectionCheckTimeout);
    this.connectionCheckTimeout = setInterval(
      this.checkConnection,
      this.RECONN_VALIDATION_TIMEOUT
    );
    // Return promise
    return connectionPromise;
  };

  handleFalseConnection = (statusText) => {
    if(statusText === "Token must be a string!") return Authentication.logout();
  }

  /**
   * Check connection state by doing requests
   * @returns Heartbeat fetch promise
   */
  checkConnection = () => {
    return fetch(`/token-verify/`, {
      method: "POST",
      body: JSON.stringify({ token: getToken() })
    })
      .then(res => {
        if (!res.ok && res.status !== 200) return this.handleFalseConnection(res.statusText);
        if (this.connectionState === CONNECTION.online) return;
        this.connectionState = CONNECTION.online;
        this.onOnline();
      })
      .catch(_err => {
        console.warn(_err);
        if (this.connectionState === CONNECTION.offline) return;
        this.connectionState = CONNECTION.offline;
        this.onOffline();
      });
  };

  /**
   * subscribe to a redis pattern
   * Xparam {string | object} pattern pattern to subscribe to
   * Xparam {function} callback function to execute on changes
   * Xparam {function} evt_callback function to execute on the subscription event
   *
   */
  subscribe = (pattern, callback, evt_callback) => {
    const { SUBSCRIBE } = this.commands;
    const message = this.fmtMessage(SUBSCRIBE, pattern);
    const _pattern = JSON.stringify(pattern);

    this.initSocket()
      .addSubscriberCallback(callback, _pattern)
      .addEventCallback(SUBSCRIBE, evt_callback, _pattern);

    if (this.getState() === WebSocket.OPEN) {
      this.send(message);
    }
  };

  /**
   * send current subscriptions to the server
   */
  reSubscribe = () => {
    const { SUBSCRIBE } = this.commands;

    Array.from(this.sub_callbacks.keys()).forEach(key => {
      const message = this.fmtMessage(SUBSCRIBE, JSON.parse(key));
      this.send(message);
    });
  };

  /**
   * Unsubscribe from changes related to the pattern
   * Xparam {string | object} pattern pattern to unsubscribe
   * Xparam {function} callback function to execute on event unsubscribe
   *
   */
  unsubscribe = (pattern, callback) => {
    const { UNSUBSCRIBE } = this.commands;
    const message = this.fmtMessage(UNSUBSCRIBE, pattern);
    const _pattern = JSON.stringify(pattern);

    this.initSocket()
      .addEventCallback(UNSUBSCRIBE, callback, _pattern)
      .send(message);
  };

  /**
   * get the list of the current pattern subscriptions
   * Xparam {function} evt_callback function to execute on event
   */
  list = evt_callback => {
    const { LIST } = this.commands;
    const message = this.fmtMessage(LIST);

    this.initSocket().addEventCallback(LIST, evt_callback).send(message);
  };

  /**
   * execute - executes a remote procedure call
   * Xparam {string} remote_callback name of the remote callback to execute
   * Xparam {object} data data to send to the remote callback
   * Xparam {function} evt_callback function to execute on event
   */
  execute = (remote_callback, data, evt_callback) => {
    const { EXECUTE } = this.commands;
    const message = { event: EXECUTE, callback: remote_callback, ...data };

    this.initSocket().addEventCallback(EXECUTE, evt_callback).send(message);
  };

  /**
   * subscribe to events onopen, onclose, onerror
   * Xparam {string} event name of the event to subscribe
   * Xparam {function} callback function to execute on event
   */
  onEvent = (event, callback) => {
    this.initSocket().addEventCallback(event, callback);
  };

  /**
   * close the socket connection
   */
  close = () => {
    this.websocket.close();
    this.websocket = null;
  };

  /**
   * the following code should be moved to a separate class
   * added to support current applications
   * TODO. review and move
   */

  checkTest = (pattern, data, is_pattern, one_shot) => {
    return new Promise((resolve, _reject) => {
      this.dispatch(pattern, data, one_shot, is_pattern);
      resolve("DONE");
    });
  };

  /* Get value from key in Var, scope fleet or global */
  getVar = (key, callback = undefined, scope = "global") => {
    if (!["global", "fleet"].includes(scope)) {
      throw new Error("Only fleet and global scopes available.");
    }
    if (scope === "fleet") {
      // key format: robot_name@key_name
      if (key.split("@").length < 2) {
        throw new Error("Wrong key format (robot_name@key_name)");
      }
    }
    const url = this.REST_API + "database/" + scope + "/" + key + "/";

    checkLogin().then(_res => {
      fetch(url)
        .then(response => response.json())

        .then(data => {
          if (callback) {
            callback(data);
          } else {
            //NOTHING
          }
        })
        .catch(e => {
          console.log(e);
        });
    });
  };

  /* Set value from key in Var, scope fleet or global */
  setVar = (key, value, callback = undefined, scope = "global") => {
    if (!["global", "fleet"].includes(scope)) {
      throw new Error("Only fleet and global scopes available.");
    }
    if (scope === "fleet") {
      // key format: robot_name@key_name
      const values = key.split("@");
      if (values.length < 2) {
        throw new Error("Wrong key format (robot_name@key_name)");
      }
    }
    const data = { key: key, scope: scope, value: value };
    const url = this.REST_API + "database/";

    checkLogin().then(res => {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      }).then(_res => {
        if (callback) {
          callback(res);
        }
      });
    });
  };

  /**
   * Send response to requests
   * Xparam {*} response : Fetch response
   * Xparam {*} callback : Callback to be called with response
   */
  _sendResponse = (response, callback, sendAlert) => {
    if (callback) {
      response
        .json()
        .then(data => {
          callback(data, response);
        })
        .catch(e => {
          callback(undefined, e);

          if (sendAlert && process.env.NODE_ENV === "development") {
            alert(
              "Development Mode \n" +
                "Status: " +
                response.status +
                "\n" +
                "Error: " +
                response.statusText
            );
          }
        });
    }
  };

  /**
   * GET value from url
   * Xparam url String
   * Xparam callback function
   * @memberof Database
   */
  get = async (url, callback = undefined) => {
    checkLogin().then(async res => {
      if (!res) {
        throw new AuthException("login error");
      }
      this.fetchTimeout(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      })
        .then(response => {
          this._sendResponse(response, callback);
        })
        .catch(e => callback(undefined, e));
    });
  };

  /**
   * Set value from key in Scope
   * Xparam scope String
   * Xparam name String - Instance Name
   * Xparam key String - Key to override
   * Xparam value Obj
   * Xparam callback function
   * @memberof Database
   */
  post = (scope, name, key, value, callback = undefined) => {
    let url = this.REST_API + scope + "/" + name + "/";
    if (name === undefined) {
      url = this.REST_API + scope + "/";
    }

    checkLogin().then(res => {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify({ key: key, data: value }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      }).then(response => {
        this._sendResponse(response, callback);
      });
    });
  };

  upload = (packageName, key, value, callback = undefined) => {
    const url = `${this.REST_API}upload/${packageName}/`;
    const formData = new FormData();
    formData.append("name", key);
    formData.append(`data`, value);
    fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
      .then(res => res.json())
      .then(callback);
  };

  /**
   * Update key
   * Xparam scope String
   * Xparam name String - Instance Name
   * Xparam value Obj
   * Xparam callback function
   * @memberof Database
   */
  put = (scope, name, value, callback = undefined) => {
    let url = this.REST_API + scope + "/" + name + "/";

    if (name === undefined) {
      url = this.REST_API + scope + "/";
    }

    checkLogin().then(res => {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "PUT",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      }).then(response => {
        this._sendResponse(response, callback, true);
      });
    });
  };

  /**
   * Set value from key in Scope
   * Xparam scope String
   * Xparam name String - Instance Name
   * Xparam key String - Key to override
   * Xparam value Obj
   * Xparam callback function
   * @memberof Database
   */
  delete = (scope, name, callback = undefined, data = {}) => {
    let url = this.REST_API + scope + "/" + name + "/";
    if (name === undefined) {
      url = this.REST_API + scope + "/";
      return;
    }

    checkLogin().then(res => {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      }).then(response => {
        this._sendResponse(response, callback, true);
      });
    });
  };

  /**
   * Set value from key in Scope
   * Xparam cloudFunction String - callback name
   * Xparam func String - Function in the callback. default ""
   * Xparam args Object - Args {key:value}... key is the param in the function
   * Xparam callback func - Callback to parse the response
   * @memberof Database
   */
  cloudFunction = (
    cloudFunction,
    func = "",
    args = undefined,
    callback = undefined
  ) => {
    return checkLogin().then(res => {
      if (!res) {
        throw new AuthException("login error");
      }

      const url = this.REST_API + "function/" + cloudFunction + "/";
      return fetch(url, {
        method: "POST",
        body: JSON.stringify({ func: func, args: args }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      }).then(response => {
        if (callback) {
          response
            .json()
            .then(data => callback(data))
            .catch(e => {
              console.log("cloudFunction error", e);
              callback({ result: false, error: e });
            });
        }
      });
    });
  };

  /**
   * Set tabs in a currentUser
   * Xparam scope String
   * Xparam name String - Instance Name
   * Xparam key String - Key to override
   * Xparam value Obj
   * Xparam callback function
   * @memberof Database
   */
  postTabs = (name, value, callback = undefined) => {
    let scope = "User";
    let url = this.REST_API + scope + "/" + name + "/";
    if (name === undefined) {
      url = this.REST_API + scope + "/";
      return;
    }
    let newValue = value.map(obj => {
      return { componentName: obj.componentName, name: obj.name };
    });
    const key_workspace = {
      Workspace: "*"
    };

    checkLogin().then(_res => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({ key: key_workspace, data: newValue }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      }).then(response => {
        this._sendResponse(response, callback, true);
      });
    });
  };
}

export default WSSub;
