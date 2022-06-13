import MasterDB from "../Database/MasterDB";
import Rest from "../Rest/Rest";
import { VAR_SCOPES } from "../Utils/constants";
import Util from "../Utils/Utils";

type CallbackHandler = (t: string) => void;
// type VariableField<T={}> = keyof T;
type VariableField = { [x: string]: {} };
// type VariableField<T = {}> = keyof T & { ID: object };

/**
 * VariableManager class : handles cached data and subscription
 */
class VariableManager {
  private isDataLoaded: boolean;
  private subscribedOnDataLoad: any; // Subscriber;
  private subscribedOnDataChange: any; // Subscriber;
  private variables: object;
  private cachedVars: object;
  private destroy: Function;
  private instance: any;
  // define a handler so you can use it for callbacks

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
      // Empty function pass with a purpouse
      // @ts-ignore
      MasterDB.unsubscribe({ Scope: "Var" }, () => {});
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
  subscribeToRedis(): void {
    try {
      MasterDB.subscribe(
        { Scope: "Var" },
        (data: { key: { [x: string]: any }; event: any }) => {
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
        (data: { value: Object }) => {
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
  subscribeToChanges(callback: CallbackHandler) {
    const subscriptionId = Util.randomGuid();
    this.subscribedOnDataChange[subscriptionId] = { callback };
    return subscriptionId;
  }

  /**
   * Unsubscribe to changes in variables
   *
   * @param {String} subscriptionId: Subscription id that needs to be canceled
   */
  unsubscribeToChanges(subscriptionId: string | number) {
    if (!subscriptionId || !this.subscribedOnDataChange[subscriptionId]) return;
    delete this.subscribedOnDataChange[subscriptionId];
  }

  /**
   * Get all variables
   * @param {Function} onDataLoaded : Function to be called on data first load
   * @returns {Object} All cached variables
   */
  getAll(onDataLoaded = (_: object) => {}) {
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
  delete = ({ scope, key }: any) => {
    const path = `v1/database/${scope}/${key}/`;

    return Rest.delete({ path });
  };

  setVar = async ({ key, value, scope = "global" }: any) => {
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
  _applyChanges = (vars: { [x: string]: {} }, event: string) => {
    Object.keys(vars).forEach((scope: VariableField<typeof vars>) => {
      const obj = vars?.[scope] ?? {};

      // Set scope if not yet created.
      const variablesScope = scope as VariableField<typeof this.variables>;

      if (!this.variables[variablesScope]) {
        this.variables = Object.assign(this.variables, { [scope]: { ID: {} } });
      }
      // Set robot object if not yet created
      if (!this.variables[variablesScope].ID[obj]) {
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

  static isValidScope = (scope: string) =>
    [...Object.values(VAR_SCOPES)].includes(scope);

  static validateVar = (_key: any, scope: string) => {
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
var instance: VariableManager | null = null;
export default VariableManager;
