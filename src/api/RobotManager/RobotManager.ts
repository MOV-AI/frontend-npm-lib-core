import _merge from "lodash/merge";
import _debounce from "lodash/debounce";
import MasterDB from "../Database/MasterDB";
import Util from "../Utils/Utils";
import { EMPTY_FUNCTION } from "../Utils/constants";
import Robot from "./Robot";
import Rest from "../Rest/Rest";
import {
  getRequestDate,
  getRequestLevels,
  getRequestMessage,
  getRequestRobots,
  getRequestService,
  getRequestTags
} from "./Utils/Utils";
import {
  CachedRobots,
  LoadRobotParam,
  LogQueryParam,
  RobotModel,
  SubscriptionManager,
  UpdateRobotParam
} from "../../models";

var instance: RobotManager | null = null;
type LoadedRobots = { [robotId: string]: Robot };

// Constants
const TIME_TO_OFFLINE = 10;
const SUBSCRIPTION_PATTERN = { Scope: "Robot", RobotName: "*", IP: "*" };
const ON_DATA_LOADED = (_robots: CachedRobots) => {
  /** Empty on purpose */
};

/**
 * RobotManager class : handles cached data and subscription
 */
class RobotManager {
  private isDataLoaded: boolean;
  private subscribedOnDataLoad: SubscriptionManager;
  private subscribedOnDataChange: SubscriptionManager;
  private randomId: string;
  private robots: LoadedRobots;
  private cachedRobots: CachedRobots;
  public destroy: Function;

  constructor() {
    if (instance) return instance;
    this.isDataLoaded = false;
    this.subscribedOnDataLoad = {};
    this.subscribedOnDataChange = {};
    this.randomId = Util.randomGuid();
    this.robots = {};
    this.cachedRobots = {};
    this.subscribeToRedis();
    this.destroy = function () {
      // Unsubscribe on destroy
      MasterDB.unsubscribe(SUBSCRIPTION_PATTERN, EMPTY_FUNCTION);
    };
    instance = this;
  }

  /**
   * Subscribe to Redis to get all robots and listen for any changes in them
   */
  subscribeToRedis() {
    MasterDB.subscribe(
      SUBSCRIPTION_PATTERN,
      this.onDataChange,
      this.onDataLoad
    );
  }

  /**
   * On SubscriberToRedis initialize
   * @param {LoadRobotParam} data : Loaded data
   */
  onDataLoad = (data: LoadRobotParam) => {
    this.isDataLoaded = true;
    if (data.value) {
      this.cachedRobots = data.value.Robot;
      Object.keys(this.cachedRobots).forEach(id => {
        this.robots[id] = new Robot(id, this.cachedRobots[id]);
      });
    }
    // Call subscribed onLoad functions
    Object.keys(this.subscribedOnDataLoad).forEach(key => {
      this.subscribedOnDataLoad[key].send(this.cachedRobots);
    });
  };

  /**
   * On SubscribeToRedis data change handler
   * @param {UpdateRobotParam} data : Changed event data
   */
  onDataChange = (data: UpdateRobotParam) => {
    // Apply changes to update local robots
    const robots = data.key["Robot"];
    const dataEventType = data.event;
    this.applyChanges(robots, dataEventType);

    // Set changed robots
    const changedRobots: CachedRobots = {};
    Object.keys(robots).forEach(robotId => {
      const changedKeys = this.robots[robotId].getChangedKeys();
      if (changedKeys.length)
        changedRobots[robotId] = this.cachedRobots[robotId];
    });
    // Call subscribed onChange functions
    Object.keys(this.subscribedOnDataChange).forEach(key => {
      if (Object.keys(changedRobots).length)
        this.subscribedOnDataChange[key].send(changedRobots, dataEventType);
    });
  };

  //========================================================================================
  /*                                                                                      *
   *                                      Class methods                                   *
   *                                                                                      */
  //========================================================================================

  /**
   * Subscribe to changes in robots
   * @param {Function} callback : Callback to be called for all property changes at any robot in DB
   */
  subscribeToChanges(callback: Function) {
    const subscriptionId = Util.randomGuid();
    this.subscribedOnDataChange[subscriptionId] = { send: callback };
    return subscriptionId;
  }

  /**
   * Unsubscribe to changes in robots
   *
   * @param {String} subscriptionId: Subscription id that needs to be canceled
   */
  unsubscribeToChanges(subscriptionId: string) {
    if (!subscriptionId || !this.subscribedOnDataChange[subscriptionId]) return;
    delete this.subscribedOnDataChange[subscriptionId];
  }

  /**
   * Get all robots
   * @param {Function} onDataLoaded : Function to be called on data first load
   * @returns {CachedRobots} All cached robots
   */
  getAll(onDataLoaded: Function = ON_DATA_LOADED): CachedRobots {
    if (this.isDataLoaded) {
      onDataLoaded(this.cachedRobots);
    } else {
      const subscriptionId = Util.randomGuid();
      this.subscribedOnDataLoad[subscriptionId] = { send: onDataLoaded };
    }
    return this.cachedRobots;
  }

  /**
   * Get robot by ID
   * @param {string} id : Robot id
   * @returns {Robot} Instance of Robot class for requested id
   */
  getRobot(id: string): Robot {
    if (this.robots[id]) return this.robots[id];
    let newRobot;
    const cached = this.cachedRobots[id];
    // If requested robot id is already in cache
    if (cached) {
      newRobot = new Robot(id, cached);
    }
    // If requested robot is not in cache
    else {
      newRobot = new Robot(id);
    }
    // Add robot to cache and return
    newRobot.getData();
    this.robots[id] = newRobot;
    return newRobot;
  }

  /**
   * Return Manager Random ID
   * @returns {string} Generated Random ID
   */
  getManagerId(): string {
    return this.randomId;
  }

  //========================================================================================
  /*                                                                                      *
   *                                    Private Methods                                   *
   *                                                                                      */
  //========================================================================================

  /**
   * Update robot online status based on timestamp update
   *  If the last timestamp is older than 10s ago, the robot is considered OFFLINE
   * @param {string} robotId : Robot ID
   */
  private updateStatus = (robotId: string) => {
    const timestamp = this.cachedRobots[robotId].Status?.timestamp || 1;
    const isOnline = Date.now() * 0.001 - timestamp <= TIME_TO_OFFLINE;
    this.cachedRobots[robotId].Online = isOnline;
    this.robots[robotId].setData("Online", isOnline);
  };

  /**
   * Apply robot changes to cachedRobots and robots
   * @param {CachedRobots} robots : Robots changes
   * @param {string} event : Event type ("set", "hset", "del", "hdel")
   */
  private applyChanges = (robots: CachedRobots, event: string) => {
    Object.keys(robots).forEach(robotId => {
      const obj: RobotModel = robots[robotId];
      // Set robot object if not yet created
      if (!this.robots[robotId]) {
        this.cachedRobots[robotId] = obj;
        this.robots[robotId] = new Robot(robotId, obj);
      }
      const robot = this.robots[robotId];
      const cachedRobot = this.cachedRobots[robotId];
      // Update cached and robot data attribute
      Object.keys(obj).forEach(key => {
        const objKey = key as keyof RobotModel;
        const value: any = obj[objKey];
        const prevCachedValue = cachedRobot[objKey];
        const prevRobotValue = robot.getDataKeyValue(objKey);
        if (objKey === "Status" || typeof value !== "object") {
          cachedRobot[objKey] = value;
          robot.setData(objKey, value);
        } else {
          cachedRobot[objKey] = _merge(prevCachedValue, value);
          robot.setData(objKey, _merge(prevRobotValue, value));
        }
      });
      // Update Online Status on set new Status data
      this.updateStatus(robotId);
      // Send updated data to subscribed components
      robot.sendUpdates(event);
    });
  };

  //========================================================================================
  /*                                                                                      *
   *                                    Static Methods                                    *
   *                                                                                      */
  //========================================================================================

  /**
   * Get Logs for multiple robots
   * @param {LogQueryParam} queryParam : Object to construct query string
   * @returns {Promise} Request promise
   */
  static getLogs(queryParam: LogQueryParam): Promise<any> {
    // Get request parameters
    const _limit = queryParam.limit || 20;
    const _levels = getRequestLevels(
      queryParam.level.selected,
      queryParam.level.list
    );
    const _services = getRequestService(queryParam.service.selected);
    const _tags = getRequestTags(queryParam.tag.selected);
    const _message = getRequestMessage(queryParam.searchMessage);
    const _dates = getRequestDate(queryParam.date.from, queryParam.date.to);
    const _robots = getRequestRobots(queryParam.robot.selected);
    const path = `v1/logs/?limit=${_limit}${_levels}${_services}${_dates}${_tags}${_message}${_robots}`;

    return Rest.get({ path });
  }
}

export default RobotManager;
