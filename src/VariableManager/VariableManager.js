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
    try {
      MasterDB.subscribe(
        { Scope: "Var" },
        data => {
          // Apply changes to update local  variables
          const variables = data.key["Var"];
          const dataEventType = data.event;
          this._applyChanges(variables, dataEventType);

          // Call subscribed onChange functions
          Object.keys(this.subscribedOnDataChange).forEach(key => {
            this.subscribedOnDataChange[key].callback(
              this.cachedVars,
              dataEventType
            );
          });
        },
        data => {
          this.isDataLoaded = true;
          if (data.value) {
            this.cachedVars = data.value;
          }
          // Call subscribed onLoad functions
          Object.keys(this.subscribedOnDataLoad).forEach(key => {
            this.subscribedOnDataLoad[key].callback(this.cachedVars);
          });
        }
      );
    } catch (error) {}
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
    const path = `v1/database/`;
    const body = { key, scope, value };
    return Rest.post({ path, body }).then(response => response);
  };

  /**
   * Apply robot changes to cachedRobots and robots
   * @param {Object} robots : Robots changes
   */
  _applyChanges = (variables, _event) => {
    Object.keys(variables).forEach(scope => {
      const obj = _get(variables, scope, {});
      // Set scope if not yet created
      if (!this.variables[scope]) {
        // this.variables[scope] = { ID: { [scope]: {} } };
        this.variables = Object.assign(this.variables, { [scope]: { ID: {} } });
      }
      // Set robot object if not yet created
      if (!this.variables[scope].ID[obj]) {
        this.cachedVars.Var[scope].ID = Object.assign(
          this.cachedVars.Var[scope].ID,
          obj.ID
        );

        this.variables[scope].ID = Object.assign(
          this.variables[scope].ID,
          obj.ID
        );
      }
      // Update cached and robot data attribute
      Object.keys(obj.ID).forEach(key => {
        if (typeof obj.ID[key] === "object") {
          this.cachedVars.Var[scope].ID[key] = _merge(
            this.cachedVars.Var[scope].ID[key],
            obj.ID[key]
          );

          this.variables[scope].ID[key] = _merge(
            this.variables[scope].ID[key],
            obj.ID[key]
          );
        } else {
          this.cachedVars.Var[scope].ID[key] = obj.ID[key];

          this.variables[scope].ID[key] = obj.ID[key];
        }

        // Remove variable
        if (_event == "del") {
          delete this.variables[scope].ID[key];
          delete this.cachedVars.Var[scope].ID[key];
        }
      });
    });
  };

  //========================================================================================
  /*                                                                                      *
   *                                    STATIC METHODS                                    *
   *                                                                                      */
  //========================================================================================

  static validScope = scope => ["global", "fleet"].includes(scope);

  static validKey = key => scope === "fleet" && key.split("@").length >= 2;

  static validateVar = (key, scope) => {
    const validators = [
      {
        fn: () => this.validScope(scope),
        error: "Invalid scope"
      },
      {
        fn: () => this.validKey(key, scope),
        error: "Key format should be <robot name>@<key name> or @<key name>"
      }
    ];
    validators.forEach(obj => {
      if (!obj.fn()) {
        throw new Error(obj.error);
      } else {
      }
    });
  };
}
var instance = null;
export default VariableManager;
