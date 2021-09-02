import MasterDB from "../Database/MasterDB";
import Util from "../Utils/Utils";
import Robot from "./Robot";

class RobotManager {
  constructor() {
    if (instance) return instance;
    this.isDataLoaded = false;
    this.subscribedOnDataLoadList = [];
    this.randomId = Util.randomGuid();
    this.robots = {};
    this.cachedRobots = {};
    this.subscribeToRedis();
    instance = this;
  }

  subscribeToRedis() {
    MasterDB.subscribe(
      { Scope: "Robot", RobotName: "*", IP: "*" },
      () => {},
      data => {
        this.isDataLoaded = true;
        if (data.value) {
          this.cachedRobots = data.value.Robot;
        }
        this.subscribedOnDataLoadList.forEach(cb => cb(this.cachedRobots));
      }
    );
  }

  getAll(onDataLoaded = () => {}) {
    if (this.isDataLoaded) {
      onDataLoaded(this.cachedRobots);
    } else {
      this.subscribedOnDataLoadList.push(onDataLoaded);
    }
    return this.cachedRobots;
  }

  getRobot(id) {
    if (this.robots[id]) return this.robots[id];
    let newRobot;
    const cached = this.cachedRobots[id];
    // If requested robot id is already in cache
    if (cached) {
      newRobot = new Robot(id, cached.IP, cached.RobotName);
    }
    // If requested robot is not in cache
    else {
      newRobot = new Robot(id);
    }
    // Add robot to cache and return
    this.robots[id] = newRobot;
    return newRobot;
  }
}

var instance = null;
export default RobotManager;
