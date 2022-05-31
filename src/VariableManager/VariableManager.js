import _get from "lodash/get";
import _merge from "lodash/merge";
import Authentication from "../Authentication/Authentication";
import MasterDB from "../Database/MasterDB";
import Rest from "../Rest/Rest";
import Util from "../Utils/Utils";
const { getToken, AuthException, checkLogin } = Authentication;

/**
 * VariableManager class : handles cached data and subscription
 */
class VariableManager {
  constructor() {
    if (instance) return instance;
    this.isDataLoaded = false;
    this.subscribedOnDataLoad = {};
    this.subscribedOnDataChange = {};
    this.variables = {};
    this.cachedVars = {};
    this.subscribeToRedis();
    this.destroy = function () {
      // Unsubscribe on destroy
      MasterDB.unsubscribe({ Scope: "Var" });
      instance = null;
      console.log("debugger destroy");
    };
    instance = this;
  }

  //========================================================================================
  /*                                                                                      *
   *                                      Class methods                                   *
   *                                                                                      */
  //========================================================================================
  /**
   * Subscribe to Redis to get all vars and listen for any changes in them
   */
  subscribeToRedis() {
    console.log("debugger subscribeToRedis");
    try {
      console.log("debugger try");

      MasterDB.subscribe(
        { Scope: "Var" },
        data => {
          console.log("debugger VAR data:", data);
          // // Apply changes to update local  robots
          // const robots = data.key["Robot"];
          // const dataEventType = data.event;
          // this._applyChanges(robots, dataEventType);

          // // Set changed robots
          // const changedRobots = {};
          // Object.keys(robots).forEach(robotId => {
          //   changedRobots[robotId] = this.cachedVars[robotId];
          // });
          // // Call subscribed onChange functions
          // Object.keys(this.subscribedOnDataChange).forEach(key => {
          //   this.subscribedOnDataChange[key].callback(
          //     changedRobots,
          //     dataEventType
          //   );
          // });
        },
        data => {
          this.isDataLoaded = true;
          console.log("debugger VAR data2:", data);
          if (data.value) {
            this.cachedVars = data.value;
          }
          // Call subscribed onLoad functions
          Object.keys(this.subscribedOnDataLoad).forEach(key => {
            console.log("debugger VAR key:", key);

            this.subscribedOnDataLoad[key].callback(this.cachedVars);
          });
        }
      );
    } catch (error) {
      console.log("debugger catch: ", error);
    }
  }

  /**
   * Subscribe to changes in variables
   * @param {function} callback : Callback to be called for all property changes at any robot in DB
   */
  subscribeToChanges(callback) {
    const subscriptionId = Util.randomGuid();
    this.subscribedOnDataChange[subscriptionId] = { callback };
    return subscriptionId;
  }

  /**
   * Unsubscribe to changes in variables
   *
   * @param {String} subscriptionId: Subscription id that needs to be canceled
   */
  unsubscribeToChanges(subscriptionId) {
    if (!subscriptionId || !this.subscribedOnDataChange[subscriptionId]) return;
    delete this.subscribedOnDataChange[subscriptionId];
  }

  /**
   * Get all variables
   * @param {Function} onDataLoaded : Function to be called on data first load
   * @returns {Object} All cached variables
   */
  getAll(onDataLoaded = () => {}) {
    if (this.isDataLoaded) {
      onDataLoaded(this.cachedVars);
    } else {
      const subscriptionId = Util.randomGuid();
      this.subscribedOnDataLoad[subscriptionId] = { callback: onDataLoaded };
    }
    return this.cachedVars;
  }

  //========================================================================================
  /*                                                                                      *
   *                                    Private Methods                                   *
   *                                                                                      */
  //========================================================================================
  /**
   * Execute DELETE request
   * @param {String} path - Relative path
   */
  delete = ({ scope, key }) => {
    const path = `v1/database/${scope}/${key}/`;

    return Rest.delete({ path });
  };

  setVar = ({ key, value, scope = "global" }) => {
    VariableManager.validateVar(key, scope);
    const path = `v1/database/`;
    const body = { key, scope, value };
    return Rest.post({ path, body }).then(response => response.json());
  };

  //========================================================================================
  /*                                                                                      *
   *                                    STATIC METHODS                                    *
   *                                                                                      */
  //========================================================================================

  static validScope = scope => ["global", "fleet"].includes(scope);

  static validKey = key => key.split("@") >= 2;

  static validateVar = (key, scope) => {
    const validators = [
      {
        fn: () => VariableManager.validScope(scope),
        error: "Invalid scope"
      },
      {
        fn: () => VariableManager.validKey(key),
        error: "Key format should be <robot name>@<key name>"
      }
    ];

    validators.forEach(obj => {
      if (!obj.fn()) {
        throw new Error(obj.error);
      }
    });
  };
}
var instance = null;
export default VariableManager;
