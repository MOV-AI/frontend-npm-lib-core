import _get from "lodash/get";
import MasterDB from "../Database/MasterDB";
import Rest from "../Rest/Rest";
import { VAR_SCOPES } from "../Utils/constants";
import Util from "../Utils/Utils";

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
   * @param {String} scope
   * @param {String} key
   */
  delete = ({ scope, key }) => {
    const path = `v1/database/${scope}/${key}/`;

    return Rest.delete({ path });
  };

  setVar = async ({ key, value, scope = "global" }) => {
    VariableManager.validateVar(key, scope);
    try {
      value = JSON.parse(value);
    } catch (error) {
      // Keep value as it is
    }
    const path = `v1/database/`;
    const body = { key, scope, value };
    return Rest.post({ path, body });
  };

  /**
   * Apply robot changes to cachedRobots and robots
   * @param {Object} robots : Robots changes
   */
  _applyChanges = (variables, event) => {
    Object.keys(variables).forEach(scope => {
      const obj = variables?.[scope] ?? {};
      // Set scope if not yet created
      if (!this.variables[scope]) {
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
      Object.entries(obj.ID).forEach(([key, value]) => {
        if (typeof value === "object") {
          this.cachedVars.Var[scope].ID[key] = {
            ...this.cachedVars.Var[scope].ID[key],
            ...value
          };

          this.variables[scope].ID[key] = {
            ...this.variables[scope].ID[key],
            ...value
          };
        } else {
          this.cachedVars.Var[scope].ID[key] = value;

          this.variables[scope].ID[key] = value;
        }

        // Remove variable
        if (event === "del") {
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

  static isValidScope = scope => [...Object.values(VAR_SCOPES)].includes(scope);

  static validateVar = (key, scope) => {
    const validators = [
      {
        fn: () => VariableManager.isValidScope(scope),
        error: "Invalid scope"
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
