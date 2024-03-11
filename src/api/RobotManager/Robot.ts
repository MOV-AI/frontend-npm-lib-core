import _cloneDeep from "lodash/cloneDeep";
import {
  LoadRobotParam,
  Log,
  Tasks,
  LogData,
  Logger,
  RobotMap,
  RobotModel,
  UpdateRobotParam,
  SubscriberModel,
  SubscriptionManager,
  UnsubscriberModel,
  Alert,
  Alerts
} from "../../models";
import {
  LOGGER_STATUS,
  EMPTY_FUNCTION,
  DEFAULT_ROBOT_TASKS,
  TIME_TO_OFFLINE
} from "../Utils/constants";
import DocumentV2 from "../Document/DocumentV2";
import MasterDB from "../Database/MasterDB";
import * as Utils from "./../Utils/Utils";
import Rest from "../Rest/Rest";
import Document from "../Document/Document";

class Robot {
  readonly id: string;
  private data: RobotModel;
  private ip: RobotModel["IP"];
  private name?: RobotModel["RobotName"];
  private previousData: RobotModel;
  private lastUpdate: Date;
  private logs: Array<LogData>;
  private logger: Logger;
  private logSubscriptions: SubscriptionManager;
  private dataSubscriptions: SubscriptionManager;
  private onGetIPCallback: Function;
  private api: DocumentV2;
  private alerts: Alerts;

  constructor(
    id: string,
    data: RobotModel = { IP: "", RobotName: "", Status: {}, Alerts: {} }
  ) {
    this.id = id;
    this.ip = data.IP;
    this.alerts = data.Alerts || {};
    this.name = data.RobotName;
    this.data = { ...data, Online: true };
    this.previousData = this.data;
    this.lastUpdate = new Date();
    this.logs = [];
    this.logger = {
      status: LOGGER_STATUS.init,
      time: 3000
    };
    this.logSubscriptions = {};
    this.dataSubscriptions = {};
    this.onGetIPCallback = EMPTY_FUNCTION;
    this.api = Document.factory(
      {
        workspace: "global",
        type: Robot.SCOPE,
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
   */
  private subscribe(params: SubscriberModel) {
    const {
      property,
      propValue = "*",
      onLoad = EMPTY_FUNCTION,
      onUpdate = EMPTY_FUNCTION
    } = params;
    MasterDB.subscribe(
      {
        Scope: Robot.SCOPE,
        Name: this.id,
        [property]: propValue
      },
      (update: UpdateRobotParam) => onUpdate(update),
      (data: LoadRobotParam) => onLoad(data)
    );
  }

  /**
   * Unsubscribe to a robot property from redis
   */
  unsubscribe(params: UnsubscriberModel) {
    const { property, propValue = "*" } = params;
    const pattern = {
      Scope: Robot.SCOPE,
      Name: this.id,
      [property]: propValue
    };
    MasterDB.unsubscribe(pattern, EMPTY_FUNCTION);
  }

  /**
   * Get robot data from redis
   * @returns {Promise<RobotModel>} Get data request
   */
  async getData(): Promise<RobotModel> {
    return this.api.read().then((data: RobotMap) => {
      const robotData = data?.Robot?.[this.id];
      if (robotData) {
        this.data = robotData;
        this.ip = robotData.IP;
        this.name = robotData.RobotName;
        this.alerts = Object.entries(robotData.Alerts || {}).reduce(
          (a: {}, item: [name: string, value: Alert]) => ({
            ...a,
            [item[0]]: item[1]
          }),
          {}
        );
      }
      return robotData;
    }).catch((e: Error) => {
      console.error("Robot.getData", e);
    });
  }

  /**
   * Set robot data
   * Xparam key : Robot data key name
   * Xparam value : Robot data key value
   */
  setData(key: keyof RobotModel, value: any) {
    (this.data as { [key: string]: any })[key] = value;
  }

  /**
   * Update Robot Online/Offline Status
   * @returns {boolean} True if Robot is Online and False otherwise
   */
  updateStatus(): boolean {
    const time = new Date().getTime();
    const previousTime = this.lastUpdate.getTime();
    const timeDiff = time - previousTime;
    this.data.Online = timeDiff < TIME_TO_OFFLINE;
    return this.data.Online;
  }

  /**
   * Get data value for given key
   * Xparam key : Robot data key name
   * @returns Robot data key value
   */
  getDataKeyValue(key: keyof RobotModel) {
    return this.data[key];
  }

  /**
   * Get robot IP
   * Xparam {Function} callback: Function to be called on robot IP data load
   */
  getIP(callback: Function = EMPTY_FUNCTION) {
    if (this.ip !== "") return this.ip;
    // Request IP
    this.onGetIPCallback = callback;
    this.subscribe({ property: "IP", onLoad: this._loadIP(this) });
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
    clearTimeout(this.logger.timeout as NodeJS.Timeout);
  }

  /**
   * Subscribe to changes in robot's data
   * Xparam {Function} callback: Function to be called on get logs
   */
  subscribeToData(callback: Function) {
    const subscriptionId = Utils.randomGuid();
    this.dataSubscriptions[subscriptionId] = { send: callback };
    return subscriptionId;
  }

  /**
   * Send updated data to subscribed components
   */
  sendUpdates(event: string) {
    Object.keys(this.dataSubscriptions).forEach(key => {
      this.dataSubscriptions[key].send(this.data, event);
    });
  }

  triggerRecovery() {
    const path = `v1/trigger-recovery/`;
    const body = { id: this.id };
    return Rest.post({ path, body });
  }

  /**
   * Get changed keys from last updates
   * @returns {array<string>} Keys with updates
   */
  protected getChangedKeys(): Array<string> {
    // Get Diff between previous and current data
    const diff = Utils.difference(this.previousData, this.data);
    // Return changed keys
    return Object.keys(Utils.flattenObject(diff));
  }

  /**
   * Update previous data value with current data values
   */
  protected updatePreviousData() {
    // Update previous data
    const previousStatus = _cloneDeep(this.previousData.Status);
    this.previousData = _cloneDeep(this.data);
    // But keep previous status if new one is empty
    if (!this.previousData.Status) this.previousData.Status = previousStatus;
    // Update lastUpdate variable
    this.lastUpdate = new Date();
  }

  /**
   * Get changed keys and reset previous data
   * @returns {Array<string>} Keys with differences between previousData and Data
   */
  protected getChangedKeysAndResetData(): Array<string> {
    const keys = this.getChangedKeys();
    this.updatePreviousData();
    return keys;
  }

  /**
   * Subscribe to the robot logs
   * Xparam {Function} callback: Function to be called on get logs
   */
  subscribeToLogs(callback: Function) {
    const subscriptionId = Utils.randomGuid();
    this.logSubscriptions[subscriptionId] = { send: callback };
    if (this.logger.status !== LOGGER_STATUS.running) this.startLogger();
    else if (this.logs) callback(this.logs);
    return subscriptionId;
  }

  /**
   * Unsubscribe to the robot logs
   * Xparam {string} subscriptionId: Subscription id that needs to be canceled
   */
  unsubscribeToLogs(subscriptionId: string) {
    if (!subscriptionId || !this.logSubscriptions[subscriptionId]) return;
    delete this.logSubscriptions[subscriptionId];
    if (Object.keys(this.logSubscriptions).length === 0) this.stopLogger();
  }

  /**
   * Unsubscribe to the robot data
   *
   * Xparam {string} subscriptionId: Subscription id that needs to be canceled
   */
  unsubscribeToData(subscriptionId: string) {
    if (!subscriptionId || !this.dataSubscriptions[subscriptionId]) return;
    delete this.dataSubscriptions[subscriptionId];
  }

  /**
   * Refresh logs
   */
  refreshLogs() {
    clearTimeout(this.logger.timeout as NodeJS.Timeout);
    this._getLogs();
  }

  /**
   * Get robot current and previous tasks
   * @returns {Promise<Tasks>} Returns previous/current robot tasks
   */
  async getTasks(): Promise<Tasks> {
    const path = `v1/logs/?limit=2&level=info&tags=ui&robots=${this.name}`;
    return Rest.get({ path })
      .then((res: Log) => {
        if (!res?.data?.length) {
          return DEFAULT_ROBOT_TASKS;
        }
        // Return tasks
        return {
          currentTask: res.data[0]?.message || DEFAULT_ROBOT_TASKS.currentTask,
          previousTask: res.data[1]?.message || DEFAULT_ROBOT_TASKS.previousTask
        };
      })
      .catch((error: Error) => {
        console.warn("Failed to get tasks", error);
        return DEFAULT_ROBOT_TASKS;
      });
  }

  //========================================================================================
  /*                                                                                      *
   *                                   Private functions                                  *
   *                                                                                      */
  //========================================================================================

  /**
   * Get robot logs
   */
  private _getLogs() {
    if (Object.keys(this.logSubscriptions).length === 0) return; // Stop if there's no active subscriptions
    if (this.logger.status !== LOGGER_STATUS.running) return; // Or if logger status is not "running"
    if (!this.name) return; // Or if robot has no name

    // Get logs from server
    const path = `v1/logs/?limit=20&level=info,error,warning,critical&tags=ui&robots=${this.name}`;
    Rest.get({ path })
      .then((response: Log) => {
        if (!response || !response.data) return;
        // Cache log data and send response to active subscriptions
        this.logs = response.data;
        for (const key in this.logSubscriptions) {
          this.logSubscriptions[key].send(response.data);
        }
        // Enqueue next request
        this._enqueueNextRequest();
      })
      .catch((err: Error) => {
        // Enqueue next request
        this.logger.time += 1000;
        this._enqueueNextRequest();
        console.warn("Failed log request", err);
      });
  }

  /**
   * Enqueue next request to get logs
   */
  private _enqueueNextRequest() {
    clearTimeout(this.logger.timeout as NodeJS.Timeout);
    this.logger.timeout = setTimeout(() => this._getLogs(), this.logger.time);
  }

  /**
   * Function to be called when robot IP subscribed loads
   *
   * Xparam {Robot} data: Data returned on IP subscribe event
   */
  private _loadIP(robot: Robot) {
    return (data: LoadRobotParam) => {
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
  static SCOPE: string = "Robot";
}

export default Robot;
