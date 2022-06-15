import {
  CachedVar,
  CallbackHandler,
  SubscriptionManager,
  VarMap
} from "../../models/variableManager";
import MasterDB from "../Database/MasterDB";
import Rest from "../Rest/Rest";
import { VAR_SCOPES } from "../Utils/constants";
import Util from "../Utils/Utils";

// Used as global variable to avoid creation multiple subscribers
var instance: VariableManager | null = null;

/**
 * VariableManager class : handles cached data and subscription
 */
class VariableManager {
  private isDataLoaded: boolean;
  private subscribedOnDataLoad: SubscriptionManager;
  private subscribedOnDataChange: SubscriptionManager;
  private variables: VarMap;
  private cachedVars: { Var: VarMap };
  public destroy: Function;

  constructor() {
    if (instance) return instance;
    this.isDataLoaded = false;
    this.subscribedOnDataLoad = {};
    this.subscribedOnDataChange = {};
    this.variables = {};
    this.cachedVars = { Var: {} };
    this.subscribeToRedis();
    this.destroy = function () {
      // Unsubscribe on destroy
      MasterDB.unsubscribe({ Scope: "Var" }, () => {
        // Empty function pass with a purpouse
      });
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
        (data: { key: CachedVar; event: any }) => {
          // Apply changes to update local  variables
          const variables = data.key.Var;

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
        (data: { value: CachedVar }) => {
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
   */
  subscribeToChanges(callback: CallbackHandler) {
    const subscriptionId = Util.randomGuid();
    this.subscribedOnDataChange[subscriptionId] = { callback };
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
    value: string;
    key: string;
  }) => {
    try {
      VariableManager.validateVar(key, scope);
      value = JSON.parse(value);
    } catch (error) {
      // Keep value as it is
    }
    const path = `v1/database/`;
    const body = { key, scope, value };
    return Rest.post({ path, body });
  };

  /**
   * Apply variable changes to cachedVariables and variables
   */
  _applyChanges = (vars: VarMap, event: string) => {
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
        if (event === "del") {
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

  static validateVar = (_: any, scope: string) => {
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
