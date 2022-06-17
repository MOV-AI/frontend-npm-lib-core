import MasterDB from "../Database/MasterDB";
import Util from "../Utils/Utils";
import Rest from "../Rest/Rest";
import Document from "../Document/Document";
import { LOGGER_STATUS, EMPTY_FUNCTION } from "../Utils/constants";

class Robot {
  constructor(id, data = { IP: "", RobotName: "" }) {
    this.id = id;
    this.ip = data.IP;
    this.name = data.RobotName;
    this.data = data;
    this.logs = [];
    this.logger = {
      status: LOGGER_STATUS.init,
      timeout: null,
      time: 3000
    };
    this.logSubscriptions = {};
    this.dataSubscriptions = {};
    this.onGetIPCallback = EMPTY_FUNCTION;
    this.api = new Document(
      {
        workspace: "global",
        type: "Robot",
        name: this.id,
        version: "-"
      },
      "v2"
    );
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
    onLoad = EMPTY_FUNCTION,
    onUpdate = EMPTY_FUNCTION
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
   * Get robot data from redis
   */
  getData() {
    this.api.read().then(data => {
      const robotData = data?.Robot?.[this.id];
      if (robotData) {
        this.data = robotData;
        this.ip = robotData.IP;
        this.name = robotData.RobotName;
      }
    });
  }

  /**
   * Unsubscribe to a robot property from redis
   *
   * @param {Function} callback: Function to be called on robot IP data load
   */
  getIP(callback = EMPTY_FUNCTION) {
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
  subscribeToData(callback) {
    const subscriptionId = Util.randomGuid();
    this.dataSubscriptions[subscriptionId] = { send: callback };
    return subscriptionId;
  }

  /**
   * Send updated data to subscribed components
   */
  sendUpdates(_event) {
    Object.keys(this.dataSubscriptions).forEach(key => {
      this.dataSubscriptions[key].send(this.data, _event);
    });
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

  /**
   * Unsubscribe to the robot data
   *
   * @param {String} subscriptionId: Subscription id that needs to be canceled
   */
  unsubscribeToData(subscriptionId) {
    if (!subscriptionId || !this.dataSubscriptions[subscriptionId]) return;
    delete this.dataSubscriptions[subscriptionId];
  }

  /**
   * Refresh logs
   */
  refreshLogs() {
    clearTimeout(this.logger.timeout);
    this._getLogs();
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
    if (!this.name) return; // Or if robot has no name

    // Get logs from server
    const path = `v1/logs/${this.name}?limit=50&level=info,error,warning,critical&tags=ui`;
    Rest.get({ path })
      .then(response => {
        if (!response || !response.data) return;
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
        console.warn("Failed log request", err);
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
