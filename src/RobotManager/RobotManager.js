import _get from "lodash/get";
import _merge from "lodash/merge";
import MasterDB from "../Database/MasterDB";
import Util from "../Utils/Utils";
import Robot from "./Robot";

/**
 * RobotManager class : handles cached data and subscription
 */
class RobotManager {
  constructor() {
    if (instance) return instance;
    this.isDataLoaded = false;
    this.subscribedOnDataLoad = [];
    this.subscribedOnDataChange = [];
    this.randomId = Util.randomGuid();
    this.robots = {};
    this.cachedRobots = {};
    this.subscribeToRedis();
    this.destroy = function () {
      // Unsubscribe on destroy
      MasterDB.unsubscribe({ Scope: "Robot", RobotName: "*", IP: "*" });
    };
    instance = this;
  }

  /**
   * Subscribe to Redis to get all robots and listen for any changes in them
   */
  subscribeToRedis() {
    MasterDB.subscribe(
      { Scope: "Robot", RobotName: "*", IP: "*" },
      data => {
        // Apply changes to update local robots
        const robots = data.key["Robot"];
        const dataEventType = data.event;
        this._applyChanges(robots, dataEventType);

        // Set changed robots
        const changedRobots = {};
        Object.keys(robots).forEach(robotId => {
          changedRobots[robotId] = this.cachedRobots[robotId];
        });
        // Call subscribed onChange functions
        this.subscribedOnDataChange.forEach(cb => cb(changedRobots, dataEventType));
      },
      data => {
        this.isDataLoaded = true;
        if (data.value) {
          this.cachedRobots = data.value.Robot;
          Object.keys(this.cachedRobots).forEach(id => {
            this.robots[id] = new Robot(id, this.cachedRobots[id]);
          });
        }
        // Call subscribed onLoad functions
        this.subscribedOnDataLoad.forEach(cb => cb(this.cachedRobots));
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
   * @param {function} cb : Callback to be called for all property changes at any robot in DB
   */
  subscribeToChanges(cb) {
    this.subscribedOnDataChange.push(cb);
  }

  /**
   * Get all robots
   * @param {Function} onDataLoaded : Function to be called on data first load
   * @returns {Object} All cached robots
   */
  getAll(onDataLoaded = () => {}) {
    if (this.isDataLoaded) {
      onDataLoaded(this.cachedRobots);
    } else {
      this.subscribedOnDataLoad.push(onDataLoaded);
    }
    return this.cachedRobots;
  }

  /**
   * Get robot by ID
   * @param {String} id : Robot id
   * @returns {Robot} Instance of Robot class for requested id
   */
  getRobot(id) {
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
   * @param {Object} robots : Robots changes
   */
  _applyChanges = (robots, _event) => {
    Object.keys(robots).forEach(robotId => {
      const obj = _get(robots, robotId, {});
      // Set robot object if nto yet created
      if (!this.robots[robotId]) {
        this.cachedRobots[robotId] = obj;
        this.robots[robotId] = new Robot(robotId, obj);
      }
      // Update cached and robot data attribute
      Object.keys(obj).forEach(key => {
        this.cachedRobots[robotId][key] = _merge(this.cachedRobots[robotId][key], obj[key]);
        this.robots[robotId]["data"][key] = _merge(this.robots[robotId]["data"][key], obj[key]);
      });
      // Send updated data to subscribed components
      this.robots[robotId].sendUpdates(_event);
    });
  };
}

var instance = null;
export default RobotManager;
