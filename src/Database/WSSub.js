import AuthWebSocket from "../AuthWebSocket/AuthWebSocket";

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
   * @param {object} map sub_callbacks or evt_callbacks
   * @param {string} pattern is the map key
   *
   * @returns {array} the value associated with the pattern
   */
  getOrCreate = (map, pattern) => {
    return map.get(pattern) || map.set(pattern, []).get(pattern);
  };

  /**
   * add callback to the map
   */
  pushCallback = (map, pattern, callback) => {
    this.getOrCreate(map, pattern).push(callback);

    return this;
  };

  addSubscriberCallback = (callback, pattern) => {
    if (typeof callback !== "function") return this;

    return this.pushCallback(this.sub_callbacks, pattern, callback);
  };

  addEventCallback = (command, callback, pattern) => {
    if (typeof callback !== "function") return this;

    const _sufix = pattern ? `/${pattern}` : "";
    const _pattern = `${command}${_sufix}`;
    console.log("???addEventCallback", command, this.evt_callbacks[_pattern]);
    return this.pushCallback(this.evt_callbacks, _pattern, callback);
  };

  send = message => {
    try {
      this.websocket.send(JSON.stringify(message));
    } catch (error) {
      console.error(error);
    }
  };

  dispatch = (pattern, is_command = true, message) => {
    const _map = is_command ? this.evt_callbacks : this.sub_callbacks;
    const _callbacks = _map.get(pattern) || [];
    console.log("???dispatch", pattern, _callbacks.length);

    _callbacks.forEach(cb => {
      setTimeout(cb, 0, message);
    });

    if (is_command) _map.delete(pattern);
  };

  getMessage = (event, pattern) => ({ event, pattern });

  onOpen = evt => {
    this.reSubscribe();
    this.dispatch("onopen");
  };

  onClose = evt => {
    this.dispatch("onclose");

    if (evt.code !== this.NORMAL_CLOSE_EVT) {
      setTimeout(this.reConnect(), this.TIMEOUT);
    }
  };

  onError = evt => {
    this.dispatch("onerror");
  };

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
   *
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

  reSubscribe = () => {
    const { SUBSCRIBE } = this.commands;

    Array.from(this.sub_callbacks.keys()).forEach(key => {
      const message = this.getMessage(SUBSCRIBE, JSON.parse(key));
      this.send(message);
    });
  };

  /**
   * unsubscribe
   *
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

  list = evt_callback => {
    const { LIST } = this.commands;
    const message = this.getMessage(LIST);

    this.addEventCallback(LIST, evt_callback).send(message);
  };

  /**
   * execute - executes a remote procedure call
   */
  execute = (remote_callback, data, evt_callback) => {
    const { EXECUTE } = this.commands;
    const message = { event: EXECUTE, callback: remote_callback, ...data };

    this.connect().addEventCallback(EXECUTE, evt_callback).send(message);
  };

  onEvent = (event, callback) => {
    this.addEventCallback(event, callback);
  };

  close = () => {
    this.websocket.close();
  };
}

export default WSSub;
