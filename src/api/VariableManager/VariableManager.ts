import {
  CachedVar,
  RedisVarType,
  SubscriberCallbackHandler,
  SubscriptionManager,
  VarGetResult,
  VarMap
} from "../../models";
import MasterDB from "../Database/MasterDB";
import Rest from "../Rest/Rest";
import { EMPTY_FUNCTION, VAR_SCOPES, WS_EVENT_TYPES } from "../Utils/constants";
import Util from "../Utils/Utils";

// Used as global variable to avoid creation multiple subscribers
var instance: VariableManager | null = null;

// Constants
const CURRENT_DATE_KEY: string = "current_date";
const SUBSCRIPTION_PATTERN = { Scope: "Var" };
const ON_DATA_LOADED = (_robots: CachedVar) => {
  /** Empty on purpose */
};

/**
 * VariableManager class : handles cached data and subscription
 */
class VariableManager {
  private isDataLoaded: boolean;
  private subscribedOnDataLoad: SubscriptionManager;
  private subscribedOnDataChange: SubscriptionManager;
  private variables: VarMap;
  private cachedVars: CachedVar;
  public destroy: Function;

  constructor() {
    if (instance) return instance;
    this.isDataLoaded = false;
    this.subscribedOnDataLoad = {};
    this.subscribedOnDataChange = {};
    this.variables = {};
    this.cachedVars = { Var: { global: { ID: {} } } };
    this.validateData().then(() => {
      this.subscribeToRedis();
    });
    this.destroy = function () {
      // Unsubscribe on destroy
      MasterDB.unsubscribe(SUBSCRIPTION_PATTERN, EMPTY_FUNCTION);
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
        SUBSCRIPTION_PATTERN,
        (data: { key: CachedVar; event: string }) => {
          // Apply changes to update local  variables
          const variables = data.key.Var;

          const dataEventType = data.event;
          this.applyChanges(variables, dataEventType);
          // Call subscribed onChange functions
          Object.keys(this.subscribedOnDataChange).forEach(key => {
            this.subscribedOnDataChange[key].send(
              this.cachedVars,
              dataEventType
            );
          });
        },
        (data: { value: CachedVar }) => {
          this.isDataLoaded = true;
          if (data.value) {
            this.cachedVars = data.value;
          }
          // Call subscribed onLoad functions
          Object.keys(this.subscribedOnDataLoad).forEach(key => {
            this.subscribedOnDataLoad[key].send(this.cachedVars);
          });
        }
      );
    } catch (error) {}
  }

  /**
   * Subscribe to changes in variables
   */
  subscribeToChanges(callback: SubscriberCallbackHandler) {
    const subscriptionId = Util.randomGuid();
    this.subscribedOnDataChange[subscriptionId] = { send: callback };
    return subscriptionId;
  }

  /**
   * Unsubscribe to changes in variables
   */
  unsubscribeToChanges(subscriptionId: string | number) {
    if (!subscriptionId || !this.subscribedOnDataChange[subscriptionId]) return;
    delete this.subscribedOnDataChange[subscriptionId];
  }

  /**
   * Get all variables
   */
  getAll(onDataLoaded = ON_DATA_LOADED) {
    if (this.isDataLoaded) {
      onDataLoaded(this.cachedVars);
    } else {
      const subscriptionId = Util.randomGuid();
      this.subscribedOnDataLoad[subscriptionId] = { send: onDataLoaded };
    }
    return this.cachedVars;
  }

  /**
   * Checks if the variable exists and return boolean
   */
  hasVar(varName: string, scope: string = VAR_SCOPES.GLOBAL): boolean {
    return Boolean(this.cachedVars.Var[scope]?.ID.hasOwnProperty(varName));
  }

  /**
   * Execute DELETE request
   */
  delete = ({ scope, key }: { scope: string; key: string }) => {
    const path = `v1/database/${scope}/${key}/`;
    return Rest.delete({ path });
  };

  /**
   * Execute ADD/EDIT request
   */
  setVar = async ({
    key,
    value,
    scope = VAR_SCOPES.GLOBAL
  }: {
    scope: string;
    value: RedisVarType;
    key: string;
  }) => {
    if (typeof value === "string") {
      try {
        VariableManager.validateVar(scope);
        value = JSON.parse(value);
      } catch (error) {
        // Keep value as it is
      }
    }
    const path = `v1/database/`;
    const body = { key, scope, value };
    return Rest.post({ path, body });
  };

  getVar(scope: string, key: string) {
    try {
      VariableManager.validateVar(scope);
      const path = `v1/database/${scope}/${key}/`;

      return Rest.get({ path });
    } catch (error) {
      // Keep value as it is
      return Promise.reject("Invalid scope");
    }
  }

  //========================================================================================
  /*                                                                                      *
   *                                    Private Methods                                   *
   *                                                                                      */
  //========================================================================================

  /**
   * @private Validate data format for (@current_date)
   * @returns {Promise<boolean>} Promise resolved after new format
   */
  private validateData(): Promise<boolean> {
    return this.getVar(VAR_SCOPES.GLOBAL, CURRENT_DATE_KEY)
      .then((res: VarGetResult) => {
        if (res.is_date) {
          this.setVar({
            value: res.value,
            key: CURRENT_DATE_KEY,
            scope: VAR_SCOPES.GLOBAL
          }).then(() => {
            return true;
          });
        }
      })
      .catch(() => {
        return true;
      });
  }

  /**
   * Apply variable changes to cachedVariables and variables
   * @param {VarMap} vars
   * @param {string} event
   */
  private applyChanges = (vars: VarMap, event: string) => {
    Object.keys(vars).forEach((scope: string) => {
      const obj = vars?.[scope] ?? {};
      // Set scope if not yet created
      if (!this.variables[scope]) {
        this.variables = Object.assign(this.variables, { [scope]: { ID: {} } });
      }

      if (!this.cachedVars.Var[scope]) {
        this.cachedVars.Var = Object.assign(this.cachedVars.Var, {
          [scope]: { ID: {} }
        });
      }

      this.cachedVars.Var[scope].ID = Object.assign(
        this.cachedVars.Var[scope].ID,
        obj.ID
      );

      this.variables[scope].ID = Object.assign(
        this.variables[scope].ID,
        obj.ID
      );

      // Update cached and variable data attribute
      Object.keys(obj.ID).forEach(varName => {
        // Remove variable
        if (event === WS_EVENT_TYPES.DEL) {
          delete this.variables[scope].ID[varName];
          delete this.cachedVars.Var[scope].ID[varName];
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

  static validateVar = (scope: string) => {
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

export default VariableManager;
