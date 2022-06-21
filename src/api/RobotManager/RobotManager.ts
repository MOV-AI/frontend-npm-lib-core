import _merge from "lodash/merge";
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
      (data: UpdateRobotParam) => {
        // Apply changes to update local robots
        const robots = data.key["Robot"];
        const dataEventType = data.event;
        this._applyChanges(robots, dataEventType);

        // Set changed robots
        const changedRobots: CachedRobots = {};
        Object.keys(robots).forEach(robotId => {
          changedRobots[robotId] = this.cachedRobots[robotId];
        });
        // Call subscribed onChange functions
        Object.keys(this.subscribedOnDataChange).forEach(key => {
          this.subscribedOnDataChange[key].send(changedRobots, dataEventType);
        });
      },
      (data: LoadRobotParam) => {
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
      }
    );
  }

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
   * @returns {Object} All cached robots
   */
  getAll(onDataLoaded = ON_DATA_LOADED) {
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

  //========================================================================================
  /*                                                                                      *
   *                                    Private Methods                                   *
   *                                                                                      */
  //========================================================================================

  /**
   * Apply robot changes to cachedRobots and robots
   * @param {CachedRobots} robots : Robots changes
   * @param {string} _event : Event type ("set", "hset", "del", "hdel")
   */
  private _applyChanges = (robots: CachedRobots, _event: string) => {
    Object.keys(robots).forEach(robotId => {
      const obj: RobotModel = robots[robotId];
      // Set robot object if not yet created
      if (!this.robots[robotId]) {
        this.cachedRobots[robotId] = obj;
        this.robots[robotId] = new Robot(robotId, obj);
      }
      // Update cached and robot data attribute
      Object.keys(obj).forEach(key => {
        const objKey = key as keyof RobotModel;
        const value: any = obj[objKey];
        const prevCachedValue = this.cachedRobots[robotId][objKey];
        const prevRobotValue = this.robots[robotId].getDataKeyValue(objKey);
        if (typeof value === "object") {
          this.cachedRobots[robotId][objKey] = _merge(prevCachedValue, value);
          this.robots[robotId].setData(objKey, _merge(prevRobotValue, value));
        } else {
          this.cachedRobots[robotId][objKey] = value;
          this.robots[robotId].setData(objKey, value);
        }
      });
      // Send updated data to subscribed components
      this.robots[robotId].sendUpdates(_event);
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
    const _levels = getRequestLevels(
      queryParam.level.selected,
      queryParam.level.list
    );
    const _services = getRequestService(queryParam.service.selected);
    const _tags = getRequestTags(queryParam.tag.selected);
    const _message = getRequestMessage(queryParam.searchMessage);
    const _dates = getRequestDate(queryParam.date.from, queryParam.date.to);
    const _robots = getRequestRobots(queryParam.robot.selected);
    const path = `v1/logs/?limit=${queryParam.limit}${_levels}${_services}${_dates}${_tags}${_message}${_robots}`;

    return Rest.get({ path });
  }
}

export default RobotManager;
