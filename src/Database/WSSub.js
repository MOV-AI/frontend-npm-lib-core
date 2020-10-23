import AuthWebSocket from "../AuthWebSocket/AuthWebSocket";
import Authentication from "../Authentication/Authentication";
const { getToken, AuthException, checkLogin } = Authentication;

/**
 * WSSub - class to handle redis subscribers using authenticated websockets
 */
class WSSub {
  constructor() {
    this.host = `${window.location.hostname}:${window.location.port}`;
    const isHttps = window.location.protocol === "https:";
    this.url = `${isHttps ? "wss" : "ws"}://${this.host}/ws/subscriber`;
    this.TIMEOUT = 3000;
    this.NORMAL_CLOSE_EVT = 1000;

    // supported commands
    this.commands = {
      SUBSCRIBE: "subscribe",
      UNSUBSCRIBE: "unsubscribe",
      LIST: "list",
      EXECUTE: "execute"
    };

    this.websocket = null;
    // map with callbacks related with pattern subscription
    this.sub_callbacks = new Map();
    // map with callbacks related with event subscription
    this.evt_callbacks = new Map();
  }

  /**
   * get the connection state
   * https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState
   */
  getState = () => {
    return this.websocket?.socket?.readyState || WebSocket.CLOSED;
  };

  /**
   * connection initialization
   */
  connect = () => {
    if (this.getState() === WebSocket.OPEN) return this;

    const { url, onOpen, onClose, onError, onMessage } = this;

    this.websocket = new AuthWebSocket({
      url,
      onOpen,
      onClose,
      onError,
      onMessage
    });

    this.websocket.createSocket();

    return this;
  };

  /**
   * try to reconnect
   */
  reConnect = () => {
    this.connect();
  };

  /**
   * creates a new pair if does not exits and returns it
   * @param {Map} map sub_callbacks or evt_callbacks
   * @param {string} pattern is the map key
   *
   * @returns {array} the value associated with the pattern
   */
  getOrCreate = (map, pattern) => {
    return map.get(pattern) || map.set(pattern, []).get(pattern);
  };

  /**
   * push callback to the map
   * @param {Map} sub_callbacks or evt_callbacks
   * @param {string} pattern is the map key
   * @param {function} callback function to execute
   */
  pushCallback = (map, pattern, callback) => {
    this.getOrCreate(map, pattern).push(callback);

    return this;
  };

  /**
   * add subscriber callback
   * @param {function} callback function to execute
   * @param {string} pattern pattern to subscribe to
   */
  addSubscriberCallback = (callback, pattern) => {
    if (typeof callback !== "function") return this;

    return this.pushCallback(this.sub_callbacks, pattern, callback);
  };

  /**
   * add event callback
   * @param {strin} command command to send; event to subscribe
   * @param {function} callback function to execute
   * @param {string} pattern pattern to subscribe to
   */
  addEventCallback = (command, callback, pattern) => {
    if (typeof callback !== "function") return this;

    const _sufix = pattern ? `/${pattern}` : "";
    const _pattern = `${command}${_sufix}`;
    console.log("???addEventCallback", command, this.evt_callbacks[_pattern]);
    return this.pushCallback(this.evt_callbacks, _pattern, callback);
  };

  /**
   * sends a message to the server
   * @param {any} message to send to the server
   */
  send = message => {
    try {
      // stringify the message before sending it
      this.websocket.send(JSON.stringify(message));
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * execute callbacks subscribed to events or patterns
   * @param {string} pattern pattern or event
   * @param {bool} is_command when true callback only executes once
   * @param {any} message data to pass to the callback
   */
  dispatch = (pattern, is_command = true, message) => {
    const _map = is_command ? this.evt_callbacks : this.sub_callbacks;
    const _callbacks = _map.get(pattern) || [];

    _callbacks.forEach(cb => {
      setTimeout(cb, 0, message);
    });

    if (is_command) _map.delete(pattern);
  };

  /**
   * format the message to send to the server
   * @param {string} event event to send to the server
   * @param {string} pattern pattern to send to the server
   */
  getMessage = (event, pattern) => ({ event, pattern });

  /**
   * triggered when the socket opens
   */
  onOpen = evt => {
    this.reSubscribe();
    this.dispatch("onopen");
  };

  /**
   * triggered when the socket closes
   */
  onClose = evt => {
    this.dispatch("onclose");

    if (evt.code !== this.NORMAL_CLOSE_EVT) {
      setTimeout(this.reConnect(), this.TIMEOUT);
    }
  };

  /**
   * triggered whe socket raises an error
   */
  onError = evt => {
    this.dispatch("onerror");
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

        this.dispatch(_pattern, is_command, data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * subscribe to a redis pattern
   * @param {string} pattern pattern to subscribe to
   * @param {function} callback function to execute on changes
   * @param {function} evt_callback function to execute on the subscription event
   *
   */
  subscribe = (pattern, callback, evt_callback) => {
    const { SUBSCRIBE } = this.commands;
    const message = this.getMessage(SUBSCRIBE, pattern);
    const _pattern = JSON.stringify(pattern);

    this.connect()
      .addSubscriberCallback(callback, _pattern)
      .addEventCallback(SUBSCRIBE, evt_callback, _pattern)
      .send(message);
  };

  /**
   * send current subscriptions to the server
   */
  reSubscribe = () => {
    const { SUBSCRIBE } = this.commands;

    Array.from(this.sub_callbacks.keys()).forEach(key => {
      const message = this.getMessage(SUBSCRIBE, JSON.parse(key));
      this.send(message);
    });
  };

  /**
   * unsubscribe from changes related to the pattern
   * @param {string} pattern pattern to unsubscribe
   * @param {function} callback function to execute on event unsubscribe
   *
   */
  unsubscribe = (pattern, callback) => {
    const { UNSUBSCRIBE } = this.commands;
    const message = this.getMessage(UNSUBSCRIBE, pattern);
    const _pattern = JSON.stringify(pattern);

    this.connect()
      .addEventCallback(UNSUBSCRIBE, callback, _pattern)
      .send(message);
  };

  /**
   * get the list of the current pattern subscriptions
   * @param {function} evt_callback function to execute on event
   */
  list = evt_callback => {
    const { LIST } = this.commands;
    const message = this.getMessage(LIST);

    this.addEventCallback(LIST, evt_callback).send(message);
  };

  /**
   * execute - executes a remote procedure call
   * @param {string} remote_callback name of the remote callback to execute
   * @param {object} data data to send to the remote callback
   * @param {function} evt_callback function to execute on event
   */
  execute = (remote_callback, data, evt_callback) => {
    const { EXECUTE } = this.commands;
    const message = { event: EXECUTE, callback: remote_callback, ...data };

    this.connect().addEventCallback(EXECUTE, evt_callback).send(message);
  };

  /**
   * subscribe to events onopen, onclose, onerror
   * @param {string} event name of the event to subscribe
   * @param {function} callback function to execute on event
   */
  onEvent = (event, callback) => {
    this.addEventCallback(event, callback);
  };

  /**
   * close the socket connection
   */
  close = () => {
    this.websocket.close();
  };

  /**
   * the following code should be moved to a separate class
   * added to support current applications
   * TODO. review and move
   */

  checkTest = (pattern, data, is_pattern, one_shot) => {
    return new Promise((resolve, reject) => {
      this.dispatch(pattern, data, is_pattern, one_shot);
      if (true) {
        resolve("DONE");
      }
    });
  };

  /* Get value from key in Var, scope fleet or global */
  getVar = (key, callback = undefined, scope = "global") => {
    if (!["global", "fleet"].includes(scope)) {
      throw "Only fleet and global scopes available.";
    }
    if (scope === "fleet") {
      // key format: robot_name@key_name
      if (key.split("@").length < 2) {
        throw "Wrong key format (robot_name@key_name)";
      }
    }
    const url = this.REST_API + "database/" + scope + "/" + key + "/";

    checkLogin().then(res => {
      fetch(url)
        .then(response => response.json())

        .then(data => {
          if (callback) {
            callback(data);
          } else {
            //NOTHING
          }
        });
    });
  };

  /* Set value from key in Var, scope fleet or global */
  setVar = (key, value, callback = undefined, scope = "global") => {
    if (!["global", "fleet"].includes(scope)) {
      throw "Only fleet and global scopes available.";
    }
    if (scope === "fleet") {
      // key format: robot_name@key_name
      const values = key.split("@");
      if (key.split("@").length < 2) {
        throw "Wrong key format (robot_name@key_name)";
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
      }).then(res => {
        if (callback) {
          callback(res);
        }
      });
    });
  };

  /**
   * GET value from url
   * @param url String
   * @param callback function
   * @memberof Database
   */
  get = (url, callback = undefined) => {
    checkLogin().then(res => {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      }).then(res => {
        if (callback) {
          res
            .json()
            .then(data => {
              callback(data, res);
            })
            .catch(e => {
              callback(undefined, e);
            });
        }
      });
    });
  };

  /**
   * Set value from key in Scope
   * @param scope String
   * @param name String - Instance Name
   * @param key String - Key to override
   * @param value Obj
   * @param callback function
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
      }).then(res => {
        if (callback) {
          res
            .json()
            .then(data => {
              callback(data, res);
            })
            .catch(e => {
              callback(undefined, e);
            });
        }
      });
    });
  };

  upload = (packageName, key, value, callback = undefined) => {
    const url = `${this.REST_API}upload/${packageName}/`;
    const formData = new FormData();
    formData.append("name", key);
    formData.append(`data`, value);
    fetch(url, { method: "POST", body: formData })
      .then(res => res.json())
      .then(callback);
  };

  /**
   * Update key
   * @param scope String
   * @param name String - Instance Name
   * @param value Obj
   * @param callback function
   * @memberof Database
   */
  put = (scope, name, value, callback = undefined) => {
    let url = this.REST_API + scope + "/" + name + "/";
    console.log("database put", url);
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
      }).then(res => {
        if (callback) {
          res
            .json()
            .then(data => {
              callback(data, res);
            })
            .catch(e => {
              callback(undefined, res);

              if (process.env.NODE_ENV === "development") {
                alert(
                  "Development Mode \n" +
                    "Status: " +
                    res.status +
                    "\n" +
                    "Error: " +
                    res.statusText
                );
              }
            });
        }
      });
    });
  };

  /**
   * Set value from key in Scope
   * @param scope String
   * @param name String - Instance Name
   * @param key String - Key to override
   * @param value Obj
   * @param callback function
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
      }).then(res => {
        if (callback) {
          res
            .json()
            .then(data => {
              callback(data, res);
            })
            .catch(e => {
              callback(undefined, res);

              if (process.env.NODE_ENV === "development") {
                alert(
                  "Development Mode \n" +
                    "Status: " +
                    res.status +
                    "\n" +
                    "Error: " +
                    res.statusText
                );
              }
            });
        }
      });
    });
  };

  /**
   * Set value from key in Scope
   * @param cloudFunction String - callback name
   * @param func String - Function in the callback. default ""
   * @param args Object - Args {key:value}... key is the param in the function
   * @param callback func - Callback to parse the response
   * @memberof Database
   */
  cloudFunction = (cloudFunction, func = "", args, callback = undefined) => {
    checkLogin().then(res => {
      if (!res) {
        throw new AuthException("login error");
      }

      const url = this.REST_API + "function/" + cloudFunction + "/";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({ func: func, args: args }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      }).then(res => {
        if (callback) {
          res.json().then(data => callback(data));
        }
      });
    });
  };

  /**
   * Set tabs in a currentUser
   * @param scope String
   * @param name String - Instance Name
   * @param key String - Key to override
   * @param value Obj
   * @param callback function
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

    checkLogin().then(res => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({ key: key_workspace, data: newValue }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      }).then(res => {
        if (callback) {
          res
            .json()
            .then(data => {
              callback(data, res);
            })
            .catch(e => {
              callback(undefined, res);

              if (process.env.NODE_ENV === "development") {
                alert(
                  "Development Mode \n" +
                    "Status: " +
                    res.status +
                    "\n" +
                    "Error: " +
                    res.statusText
                );
              }
            });
        }
      });
    });
  };
}

export default WSSub;
