import _merge from "lodash/merge";
import MasterDB from "../Database/MasterDB";
import { Utils } from "../index";
import {
  DEL_WS_EVENTS,
  EMPTY_FUNCTION,
  HEARTBEAT_TIMEOUT,
  SET_WS_EVENTS,
  MAX_LOG_LIMIT
} from "../Utils/constants";
import Robot from "./Robot";
import Rest from "../Rest/Rest";
import { webSocketOpen } from "../WebSocket";
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

// Constants
const KEYS_TO_DISCONSIDER_SET_EVENT = ["Status.timestamp"];
const KEYS_TO_DISCONSIDER_DEL_EVENT = ["Status"];

/**
 * Class to extend from Robot class
 *  Implements more methods that should only be allowed from the RobotManager using protected methods from Robot class
 */
class ProtectedRobot extends Robot {
  getChangedKeysAndResetData() {
    return super.getChangedKeysAndResetData();
  }
}

let instance: RobotManager | null = null;
type LoadedRobots = { [robotId: string]: ProtectedRobot };

// Constants
const HEART_BEAT = "HEART_BEAT";
const SUBSCRIPTION_PATTERN = { Scope: "Robot" };
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
  private managerId: string;
  private robots: LoadedRobots;
  private cachedRobots: CachedRobots;
  private heartbeatTimeout: NodeJS.Timeout;
  public destroy: Function;

  constructor() {
    if (instance) return instance;
    this.isDataLoaded = false;
    this.subscribedOnDataLoad = {};
    this.subscribedOnDataChange = {};
    this.managerId = Utils.randomGuid();
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
   * Xparam {LoadRobotParam} data : Loaded data
   */
  onDataLoad = (data: LoadRobotParam) => {
    this.isDataLoaded = true;
    if (data.value) {
      this.cachedRobots = data.value.Robot;
      Object.keys(this.cachedRobots).forEach(id => {
        this.robots[id] = new ProtectedRobot(id, this.cachedRobots[id]);
        this.cachedRobots[id].Online = true;
      });
    }
    // Call subscribed onLoad functions
    Object.keys(this.subscribedOnDataLoad).forEach(key => {
      this.subscribedOnDataLoad[key].send(this.cachedRobots);
    });

    // Initiate heartbeat monitor
    this.heartbeatMonitor();
  };

  /**
   * On SubscribeToRedis data change handler
   * Xparam {UpdateRobotParam} data : Changed event data
   */
  onDataChange = (data: UpdateRobotParam) => {
    // Apply changes to update local robots
    const robots = data.key.Robot;
    const dataEventType = data.event;

    this.applyChanges(robots, dataEventType);

    // Set changed robots
    const changedRobots: CachedRobots = {};
    Object.keys(robots).forEach(robotId => {
      const robot = this.robots[robotId];
      const changedKeys_ = robot.getChangedKeysAndResetData();
      const changedKeys = changedKeys_
        // until https://movai.atlassian.net/browse/BP-910 is not solved
        .filter(
          key =>
            !(
              DEL_WS_EVENTS.includes(dataEventType) &&
              KEYS_TO_DISCONSIDER_DEL_EVENT.includes(key)
            )
        )
        .filter(
          key =>
            !(
              SET_WS_EVENTS.includes(dataEventType) &&
              KEYS_TO_DISCONSIDER_SET_EVENT.includes(key)
            )
        );
      if (changedKeys.length) {
        changedRobots[robotId] = this.cachedRobots[robotId];
      }
    });
    // Call subscribed onChange functions
    Object.keys(this.subscribedOnDataChange).forEach(key => {
      if (Object.keys(changedRobots).length) {
        this.subscribedOnDataChange[key].send(changedRobots, dataEventType);
      }
    });
  };

  //========================================================================================
  /*                                                                                      *
   *                                      Class methods                                   *
   *                                                                                      */
  //========================================================================================

  /**
   * Subscribe to changes in robots
   * Xparam {Function} callback : Callback to be called for all property changes at any robot in DB
   */
  subscribeToChanges(callback: Function) {
    const subscriptionId = Utils.randomGuid();
    this.subscribedOnDataChange[subscriptionId] = { send: callback };
    return subscriptionId;
  }

  /**
   * Unsubscribe to changes in robots
   *
   * Xparam {string} subscriptionId: Subscription id that needs to be canceled
   */
  unsubscribeToChanges(subscriptionId: string) {
    if (!subscriptionId || !this.subscribedOnDataChange[subscriptionId]) return;
    delete this.subscribedOnDataChange[subscriptionId];
  }

  /**
   * Get all robots
   * Xparam {Function} onDataLoaded : Function to be called on data first load
   * @returns {CachedRobots} All cached robots
   */
  getAll(onDataLoaded: Function = ON_DATA_LOADED): CachedRobots {
    if (this.isDataLoaded) {
      onDataLoaded(this.cachedRobots);
    } else {
      const subscriptionId = Utils.randomGuid();
      this.subscribedOnDataLoad[subscriptionId] = { send: onDataLoaded };
    }
    return this.cachedRobots;
  }

  /**
   * Get robot by ID
   * Xparam {string} id : Robot id
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
    this.robots[id] = newRobot as ProtectedRobot;
    return newRobot;
  }

  /**
   * Return Manager Random ID
   * @returns {string} Generated Random ID
   */
  getManagerId(): string {
    return this.managerId;
  }

  /**
   * To trigger callback (passed in arguments) when robots are loaded
   * Xparam onDataLoaded : Function to be called on data first load
   */
  onLoad(onDataLoaded: Function = ON_DATA_LOADED) {
    if (this.isDataLoaded) return onDataLoaded(this.cachedRobots);
    const subscriptionId = Utils.randomGuid();
    this.subscribedOnDataLoad[subscriptionId] = { send: onDataLoaded };
  }

  //========================================================================================
  /*                                                                                      *
   *                                    Private Methods                                   *
   *                                                                                      */
  //========================================================================================

  private heartbeatMonitor = () => {
    clearTimeout(this.heartbeatTimeout);
    const robotsWhichChangedOnlineStatus: ProtectedRobot[] = [];
    Object.values(this.robots).forEach(robot => {
      const previousOnlineStatus = this.cachedRobots[robot.id].Online;
      this.checkStatus(robot);
      if (this.cachedRobots[robot.id].Online !== previousOnlineStatus) {
        robotsWhichChangedOnlineStatus.push(robot);
      }
    });

    // Call subscribed onChange functions
    Object.keys(this.subscribedOnDataChange).forEach(key => {
      if (robotsWhichChangedOnlineStatus.length > 0) {
        this.subscribedOnDataChange[key].send(this.cachedRobots, HEART_BEAT);
      }
    });

    this.heartbeatTimeout = setTimeout(
      this.heartbeatMonitor,
      HEARTBEAT_TIMEOUT
    );
  };

  /**
   * Check robot status if it doesn't receive any updates in more than 10s
   *  Set timeout to check online/offline state in 10s
   * Xparam {ProtectedRobot} robot
   */
  private checkStatus = (robot: ProtectedRobot) => {
    const id = robot.id;
    this.cachedRobots[id].Online = robot.updateStatus();
  };

  /**
   * Apply robot changes to cachedRobots and robots
   * Xparam {CachedRobots} robots : Robots changes
   * Xparam {string} event : Event type ("set", "hset", "del", "hdel")
   */
  private applyChanges = (robots: CachedRobots, event: string) => {
    Object.keys(robots).forEach(robotId => {
      const obj: RobotModel = robots[robotId];
      // Set robot object if not yet created
      if (!this.robots[robotId]) {
        this.cachedRobots[robotId] = obj;
        this.robots[robotId] = new ProtectedRobot(robotId, obj);
      }
      const robot = this.robots[robotId];
      const cachedRobot = this.cachedRobots[robotId];
      // Update cached and robot data attribute
      Object.keys(obj).forEach(key => {
        const objKey = key as keyof RobotModel;
        const value: any = obj[objKey];
        const prevCachedValue = cachedRobot[objKey];
        const prevRobotValue = robot.getDataKeyValue(objKey);

        const isObject = typeof value === "object";
        const isDel = DEL_WS_EVENTS.includes(event);
        const isObjectAndNotDel = isObject && !isDel;
        cachedRobot[objKey] = isObjectAndNotDel
          ? _merge(prevCachedValue, value)
          : value;
        robot.setData(
          objKey,
          isObjectAndNotDel ? _merge(prevRobotValue, value) : value
        );
      });
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
   * Get Logs params
   * Xparam {LogQueryParam} queryParam : Object to construct query string
   * @returns {string} query parameter string
   */
  static getLogsParam(queryParam: LogQueryParam): string {
    // Get request parameters
    const _limit = queryParam?.limit || MAX_LOG_LIMIT;
    const _levels = getRequestLevels(
      queryParam?.level?.selected || [],
      queryParam?.level?.list
    );
    const _services = getRequestService(queryParam?.service?.selected);
    const _tags = getRequestTags(queryParam?.tag?.selected);
    const _message = getRequestMessage(queryParam?.searchMessage);
    const _dates = getRequestDate(queryParam?.date?.from, queryParam?.date?.to);
    const _robots = getRequestRobots(queryParam?.robot?.selected);
    return [_limit, _levels, _services, _dates, _tags, _message, _robots].join("");
  }

  /**
   * Open Websocket connection to get the logs
   * Xparam {LogQueryParam} queryParam : Object to construct query string
   * @returns {Promise} Request promise
   */
  static openLogs(queryParam: LogQueryParam): WebSocket {
    const splits = RobotManager.getLogsParam(queryParam).split("&");
    let params = new URLSearchParams();
    for (const split in splits) {
      const [key, value] = split.split("=");
      params.set(value ? key : "limit", value ?? key);
    }
    return webSocketOpen({ path: "/ws/logs", params });
  }

  //========================================================================================
  /*                                                                                      *
   *                                    Static Methods                                    *
   *                                                                                      */
  //========================================================================================
  /**
   * Get Logs for multiple robots
   * Xparam {LogQueryParam} queryParam : Object to construct query string
   * @returns {Promise} Request promise
   */
  static async getLogs(queryParam: LogQueryParam): Promise<any> {
    const path = "v1/logs/?limit=" + RobotManager.getLogsParam(queryParam);
    return Rest.get({ path });
  }
}

export default RobotManager;
