import MasterDB from "../Database/MasterDB";
import Util from "../Utils/Utils";
import Rest from "../Rest/Rest";
import { LOGGER_STATUS } from "../Utils/constants";

class Robot {
  constructor(id, ip = "", name = "") {
    this.id = id;
    this.ip = ip;
    this.name = name;
    this.logs = [];
    this.logger = {
      status: LOGGER_STATUS.init,
      timeout: null,
      time: 3000
    };
    this.logSubscriptions = {};
    this.onGetIPCallback = () => {};
  }

  //========================================================================================
  /*                                                                                      *
   *                                      Class methods                                   *
   *                                                                                      */
  //========================================================================================

  /**
   * Subscribe to a robot property from redis
   *
   * @param {String} property: Property name
   * @param {String} propValue: Property value
   * @param {Function} loadCallback: Function to be called on data load
   * @param {Function} updateCallback: Function to be called on data updated
   */
  subscribe({
    property,
    propValue = "*",
    onLoad = () => {},
    onUpdate = () => {}
  }) {
    MasterDB.subscribe(
      {
        Scope: Robot.SCOPE,
        Name: this.id,
        [property]: propValue
      },
      update => onUpdate(update),
      data => onLoad(data)
    );
  }

  /**
   * Unsubscribe to a robot property from redis
   *
   * @param {String} property: Property name
   * @param {String} propValue: Property value
   */
  unsubscribe({ property, propValue = "*" }) {
    MasterDB.unsubscribe({
      Scope: Robot.SCOPE,
      Name: this.id,
      [property]: propValue
    });
  }

  /**
   * Unsubscribe to a robot property from redis
   *
   * @param {Function} callback: Function to be called on robot IP data load
   */
  getIP(callback = () => {}) {
    if (this.ip !== "") return this.ip;
    // Request IP
    this.onGetIPCallback = callback;
    this.subscribe("IP", this._loadIP(this));
  }

  /**
   * Start robot logger
   */
  startLogger() {
    this.logger.status = LOGGER_STATUS.running;
    this._getLogs();
  }

  /**
   * Stop robot logger
   */
  stopLogger() {
    this.logger.status = LOGGER_STATUS.paused;
    clearTimeout(this.logger.timeout);
  }

  /**
   * Subscribe to the robot logs
   *
   * @param {Function} callback: Function to be called on get logs
   */
  subscribeToLogs(callback) {
    const subscriptionId = Util.randomGuid();
    this.logSubscriptions[subscriptionId] = { send: callback };
    if (this.logger.status !== LOGGER_STATUS.running) this.startLogger();
    else if (this.logs) callback(this.logs);
    return subscriptionId;
  }

  /**
   * Unsubscribe to the robot logs
   *
   * @param {String} subscriptionId: Subscription id that needs to be canceled
   */
  unsubscribeToLogs(subscriptionId) {
    if (!subscriptionId || !this.logSubscriptions[subscriptionId]) return;
    delete this.logSubscriptions[subscriptionId];
    if (Object.keys(this.logSubscriptions).length === 0) this.stopLogger();
  }

  //========================================================================================
  /*                                                                                      *
   *                                   Private functions                                  *
   *                                                                                      */
  //========================================================================================

  /**
   * Get robot logs
   */
  _getLogs() {
    if (Object.keys(this.logSubscriptions).length === 0) return; // Stop if there's no active subscriptions
    if (this.logger.status !== LOGGER_STATUS.running) return; // Or if logger status is not "running"
    if (!this.ip) return; // Or if robot has no IP
    // Get logs from server
    const url = `http://${this.ip}/api/v1/logs/?level=info,error,warning,critical&limit=50&tags=ui`;
    Rest.get({ url })
      .then(response => {
        if (!response || !response.data || !response.data.length) return;
        // Cache log data and send response to active subscriptions
        this.logs = response.data;
        for (const key in this.logSubscriptions) {
          this.logSubscriptions[key].send(response.data);
        }
        // Enqueue next request
        this._enqueueNextRequest();
      })
      .catch(err => {
        // Enqueue next request
        this.logger.time += 1000;
        this._enqueueNextRequest();
      });
  }

  /**
   * Enqueue next request to get logs
   */
  _enqueueNextRequest() {
    clearTimeout(this.logger.timeout);
    this.logger.timeout = setTimeout(() => this._getLogs(), this.logger.time);
  }

  /**
   * Function to be called when robot IP subscribed loads
   *
   * @param {Object} data: Data returned on IP subscribe event
   */
  _loadIP(robot) {
    return data => {
      if (data.value) {
        robot.ip = data.value.Robot[robot.id].IP;
        robot.onGetIPCallback(robot.ip);
      }
      // Set local IP as null
      else robot.ip = null;
    };
  }

  //========================================================================================
  /*                                                                                      *
   *                                   Static attributes                                  *
   *                                                                                      */
  //========================================================================================

  /**
   * Robot scope name
   */
  static SCOPE = "Robot";
}

export default Robot;
