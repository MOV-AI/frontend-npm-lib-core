import LockManager from "./LockManager";
import MasterDB from "../Database/MasterDB";
import Rest from "../Rest/Rest";
import { Utils } from "../index";
import { WS_EVENT_TYPES } from "../Utils/constants";

jest.mock("../Database/MasterDB", () => ({
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
}));

jest.mock("../Rest/Rest", () => ({
  delete: jest.fn(),
}));

jest.mock("../index", () => ({
  Utils: {
    randomGuid: jest.fn(() => "mocked-guid"),
  },
}));

describe("LockManager", () => {
  let lockManager;

  beforeEach(() => {
    lockManager = new LockManager();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should subscribe to Redis on initialization", () => {
    expect(MasterDB.subscribe).toHaveBeenCalled();
  });

  test("should subscribe to changes", () => {
    const callback = jest.fn();
    const subscriptionId = lockManager.subscribeToChanges(callback);

    expect(lockManager.subscribedOnDataChange[subscriptionId]).toBeDefined();
  });

  test("should unsubscribe from changes", () => {
    const callback = jest.fn();
    const subscriptionId = lockManager.subscribeToChanges(callback);
    lockManager.unsubscribeToChanges(subscriptionId);

    expect(lockManager.subscribedOnDataChange[subscriptionId]).toBeUndefined();
  });

  test("should get all locks", () => {
    const callback = jest.fn();
    lockManager.getAll(callback);
    expect(typeof lockManager.cachedLocks).toBe("object");
  });

  test("should delete a lock", () => {
    lockManager.delete({ lockName: "testLock", robotId: "123" });

    expect(Rest.delete).toHaveBeenCalledWith({ path: "v1/lock/testLock/" });
  });

  test("should apply changes to cachedLocks on SET event", () => {
    const locks = { testLock: { locked: true } };
    lockManager["applyChanges"](locks, WS_EVENT_TYPES.SET);

    expect(lockManager.locks.testLock).toEqual({ locked: true });
    expect(lockManager.cachedLocks.Lock.testLock).toEqual({ locked: true });
  });

  test("should remove lock on DEL event", () => {
    lockManager.locks.testLock = { locked: true };
    lockManager.cachedLocks.Lock.testLock = { locked: true };

    lockManager["applyChanges"]({ testLock: {} }, WS_EVENT_TYPES.DEL);

    expect(lockManager.locks.testLock).toBeUndefined();
    expect(lockManager.cachedLocks.Lock.testLock).toBeUndefined();
  });

  test("should unsubscribe on destroy", () => {
    lockManager.destroy();
    expect(MasterDB.unsubscribe).toHaveBeenCalled();
  });
});
