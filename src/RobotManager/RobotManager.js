import MasterDB from "../Database/MasterDB";
import Util from "../Utils/Utils";
import Robot from "./Robot";

class RobotManager {
  constructor() {
    if (instance) return instance;
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
        if (data.value) {
          this.cachedRobots = data.value.Robot;
        }
      }
    );
  }

  getAll() {
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
