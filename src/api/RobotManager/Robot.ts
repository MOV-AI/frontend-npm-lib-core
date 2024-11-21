import _cloneDeep from "lodash/cloneDeep";
import {
  LoadRobotParam,
  RobotMap,
  RobotModel,
  UpdateRobotParam,
  SubscriberModel,
  SubscriptionManager,
  UnsubscriberModel,
  Alert,
  Alerts,
} from "../../models";
import { EMPTY_FUNCTION, TIME_TO_OFFLINE } from "../Utils/constants";
import DocumentV2 from "../Document/DocumentV2";
import MasterDB from "../Database/MasterDB";
import * as Utils from "./../Utils/Utils";
import Rest from "../Rest/Rest";
import Document from "../Document/Document";

class Robot {
  readonly id: string;
  protected data: RobotModel;
  private ip: RobotModel["IP"];
  private name?: RobotModel["RobotName"];
  private previousData: RobotModel;
  private lastUpdate: Date;
  private dataSubscriptions: SubscriptionManager;
  private onGetIPCallback: Function;
  private api: DocumentV2;
  private alerts: Alerts;

  constructor(
    id: string,
    data: RobotModel = { IP: "", RobotName: "", Status: {}, Alerts: {} },
  ) {
    this.id = id;
    this.ip = data.IP;
    this.alerts = data.Alerts || {};
    this.name = data.RobotName;
    this.data = { ...data, Online: true };
    this.previousData = this.data;
    this.lastUpdate = new Date();
    this.dataSubscriptions = {};
    this.onGetIPCallback = EMPTY_FUNCTION;
    this.api = Document.factory(
      {
        workspace: "global",
        type: Robot.SCOPE,
        name: this.id,
        version: "-",
      },
      "v2",
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
      onUpdate = EMPTY_FUNCTION,
    } = params;
    MasterDB.subscribe(
      {
        Scope: Robot.SCOPE,
        Name: this.id,
        [property]: propValue,
      },
      (update: UpdateRobotParam) => onUpdate(update),
      (data: LoadRobotParam) => onLoad(data),
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
      [property]: propValue,
    };
    MasterDB.unsubscribe(pattern, EMPTY_FUNCTION);
  }

  /**
   * Get robot data from redis
   * @returns {Promise<RobotModel>} Get data request
   */
  async getData(): Promise<RobotModel> {
    return this.api
      .read()
      .then((data: RobotMap) => {
        const robotData = data?.Robot?.[this.id];
        if (robotData) {
          this.data = robotData;
          this.ip = robotData.IP;
          this.name = robotData.RobotName;
          this.alerts = Object.entries(robotData.Alerts || {}).reduce(
            (a: {}, item: [name: string, value: Alert]) => ({
              ...a,
              [item[0]]: item[1],
            }),
            {},
          );
        }
        return robotData;
      })
      .catch((e: Error) => {
        console.error("Robot.getData", e);
      });
  }

  /**
   * Set robot data
   * @param key : Robot data key name
   * @param value : Robot data key value
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
   * @param key : Robot data key name
   * @returns Robot data key value
   */
  getDataKeyValue(key: keyof RobotModel) {
    return this.data[key];
  }

  /**
   * Get robot IP
   * @param {Function} callback: Function to be called on robot IP data load
   */
  getIP(callback: Function = EMPTY_FUNCTION) {
    if (this.ip !== "") return this.ip;
    // Request IP
    this.onGetIPCallback = callback;
    this.subscribe({ property: "IP", onLoad: this._loadIP(this) });
  }

  /**
   * Subscribe to changes in robot's data
   * @param {Function} callback: Function to be called on get logs
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
    Object.keys(this.dataSubscriptions).forEach((key) => {
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
   * Unsubscribe to the robot data
   *
   * @param {String} subscriptionId: Subscription id that needs to be canceled
   */
  unsubscribeToData(subscriptionId: string) {
    if (!subscriptionId || !this.dataSubscriptions[subscriptionId]) return;
    delete this.dataSubscriptions[subscriptionId];
  }

  //========================================================================================
  /*                                                                                      *
   *                                   Private functions                                  *
   *                                                                                      */
  //========================================================================================

  /**
   * Function to be called when robot IP subscribed loads
   *
   * @param {Robot} data: Data returned on IP subscribe event
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
