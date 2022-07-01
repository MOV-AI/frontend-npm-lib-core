import { SubscriberCallbackHandler, SubscriptionManager } from "../../models";
import MasterDB from "../Database/MasterDB";
import Rest from "../Rest/Rest";
import { EMPTY_FUNCTION } from "../Utils/constants";
import Util from "../Utils/Utils";

// Used as global variable to avoid creation multiple subscribers
var instance: LockManager | null = null;

// Constants
const SUBSCRIPTION_PATTERN = { Scope: "Lock" };
const ON_DATA_LOADED = (_locks: any) => {
  /** Empty on purpose */
};

/**
 * LockManager class : handles cached data and subscription
 */
class LockManager {
  private isDataLoaded: boolean;
  private subscribedOnDataLoad: SubscriptionManager;
  private subscribedOnDataChange: SubscriptionManager;
  private locks: any;
  private cachedLocks: any;
  public destroy: Function;

  constructor() {
    if (instance) return instance;
    this.isDataLoaded = false;
    this.subscribedOnDataLoad = {};
    this.subscribedOnDataChange = {};
    this.locks = {};
    this.cachedLocks = {};
    this.subscribeToRedis();
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
   * Subscribe to Redis to get all locks and listen for any changes in them
   */
  subscribeToRedis(): void {
    try {
      MasterDB.subscribe(
        SUBSCRIPTION_PATTERN,
        (data: { key: any; event: string }) => {
          // Apply changes to update local locks
          const locks = data.key["Lock"];

          const dataEventType = data.event;
          console.log("debugger masterDB locks onEdit: ", locks);
          this.applyChanges(locks, dataEventType);
          // Call subscribed onChange functions
          Object.keys(this.subscribedOnDataChange).forEach(key => {
            this.subscribedOnDataChange[key].send(
              this.cachedLocks,
              dataEventType
            );
          });
        },
        (data: { value: any }) => {
          this.isDataLoaded = true;
          console.log("debugger masterDB locks onInit: ", data);
          if (data.value) {
            this.cachedLocks = data.value;
          }
          // Call subscribed onLoad functions
          Object.keys(this.subscribedOnDataLoad).forEach(key => {
            this.subscribedOnDataLoad[key].send(this.cachedLocks);
          });
        }
      );
    } catch (error) {}
  }

  /**
   * Subscribe to changes in locks
   */
  subscribeToChanges(callback: SubscriberCallbackHandler) {
    const subscriptionId = Util.randomGuid();
    this.subscribedOnDataChange[subscriptionId] = { send: callback };
    return subscriptionId;
  }

  /**
   * Unsubscribe to changes in locks
   */
  unsubscribeToChanges(subscriptionId: string | number) {
    if (!subscriptionId || !this.subscribedOnDataChange[subscriptionId]) return;
    delete this.subscribedOnDataChange[subscriptionId];
  }

  /**
   * Get all locks
   */
  getAll(onDataLoaded = ON_DATA_LOADED) {
    if (this.isDataLoaded) {
      onDataLoaded(this.cachedLocks);
    } else {
      const subscriptionId = Util.randomGuid();
      this.subscribedOnDataLoad[subscriptionId] = { send: onDataLoaded };
    }
    return this.cachedLocks;
  }

  /**
   * Execute DELETE request
   */
  delete = ({ scope, key }: { scope: string; key: string }) => {
    const path = `v1/database/${scope}/${key}/`;
    return Rest.delete({ path });
  };

  //========================================================================================
  /*                                                                                      *
   *                                    Private Methods                                   *
   *                                                                                      */
  //========================================================================================

  /**
   * Apply changes to cachedLocks and locks
   * @param {any} locks
   * @param {string} event
   */
  private applyChanges = (locks: any, event: string) => {
    Object.keys(locks).forEach((scope: string) => {
      const obj = locks?.[scope] ?? {};

      // Update cached and lock data attribute
      Object.keys(obj).forEach(lockName => {
        // Remove/delete lock
        if (event === "del") {
          delete this.locks[scope].ID[lockName];
          delete this.cachedLocks.Lock[scope].ID[lockName];
        }
      });
    });
  };
}

export default LockManager;
