import { Utils } from "../index";

class BroadcastChannel {
  constructor(appName) {
    this.appName = appName;
    this.subscribed_events = {};
    this.instance = new globalThis.BroadcastChannel("channel");
    this.instance.onmessage = this._onMessage;
    console.log("BroadcastChannel start for", this.appName);
  }

  /**
   * Subscribe to an event type.
   * Whenever an event of this type is triggered, the callback will be executed.
   *
   * Xparam {string} event: event name -> should be a valid event name present in BROADCAST_EVENTS
   * Xparam {Function} callback: function to be executed when the event is triggered
   */
  subscribe = (event, callback) => {
    const currentEvents = this.subscribed_events[event] || [];
    this.subscribed_events[event] = [...currentEvents, callback];
    console.log("BroadcastChannel subscribe to", event);
  };

  /**
   * Unsubscribe to an event type.
   *
   * Xparam {string} event: event name -> should be a valid event name present in BROADCAST_EVENTS
   */
  unsubscribe = event => {
    if (!this.subscribed_events.hasOwnProperty(event)) return;
    delete this.subscribed_events[event];
    console.log("BroadcastChannel unsubscribe to", event);
  };

  /**
   * Post message in broadcast
   *
   * Xparam {string} event: Event name -> should be a valid event name present in BROADCAST_EVENTS
   * Xparam {string} target: App name that should receive the event
   * Xparam {object} data: Data to be passed to target app
   */
  postMessage = ({ event, target, data }) => {
    console.log("BroadcastChannel postMessage to", target);
    this.instance.postMessage({
      msgId: Utils.randomGuid(),
      event: event,
      source: this.appName,
      target: target,
      data: data || {}
    });
  };

  /**
   * Close broadcast channel instance
   */
  close = () => {
    this.instance.close();
    console.log("BroadcastChannel close for", this.appName);
  };

  /**
   * Private method that receives all messages from broadcast channel
   * and sends to the apps if they are subscribed to that event
   *
   * Xparam {Event} message: Message event containing origin and data passed from the postMessage
   */
  _onMessage = message => {
    const messageData = message.data;
    // Ignore message received if event is not subscribed
    if (!this.subscribed_events.hasOwnProperty(messageData.event)) return;
    // Ignore message if target is not appName
    if (messageData.target !== this.appName) return;
    // Call subscribed event callback
    this.subscribed_events[messageData.event].forEach(callback => {
      callback(messageData);
    });
    console.log("BroadcastChannel _onMessage from", messageData.source);
  };
}

export default BroadcastChannel;
