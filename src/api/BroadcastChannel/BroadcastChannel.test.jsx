import BroadcastChannel from "./BroadcastChannel";
import { Utils } from "../index";

jest.mock("../index", () => ({
  Utils: {
    randomGuid: jest.fn(() => "mocked-guid"),
  },
}));

describe("BroadcastChannel", () => {
  let broadcast;
  let mockChannelInstance;

  beforeEach(() => {
    mockChannelInstance = {
      postMessage: jest.fn(),
      close: jest.fn(),
      onmessage: null,
    };

    global.BroadcastChannel = jest.fn(() => mockChannelInstance);

    broadcast = new BroadcastChannel("TestApp");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should subscribe to an event", () => {
    const callback = jest.fn();
    broadcast.subscribe("testEvent", callback);

    expect(broadcast.subscribed_events["testEvent"]).toContain(callback);
  });

  test("should unsubscribe from an event", () => {
    const callback = jest.fn();
    broadcast.subscribe("testEvent", callback);
    broadcast.unsubscribe("testEvent");

    expect(broadcast.subscribed_events["testEvent"]).toBeUndefined();
  });

  test("should post a message", () => {
    broadcast.postMessage({
      event: "testEvent",
      target: "TargetApp",
      data: { key: "value" },
    });

    expect(mockChannelInstance.postMessage).toHaveBeenCalledWith({
      msgId: "mocked-guid",
      event: "testEvent",
      source: "TestApp",
      target: "TargetApp",
      data: { key: "value" },
    });
  });

  test("should receive a message and call the subscribed callback", () => {
    const callback = jest.fn();
    broadcast.subscribe("testEvent", callback);

    const messageEvent = {
      data: {
        event: "testEvent",
        target: "TestApp",
        source: "AnotherApp",
        data: { key: "value" },
      },
    };

    mockChannelInstance.onmessage(messageEvent);

    expect(callback).toHaveBeenCalledWith(messageEvent.data);
  });

  test("should not call callback if event is not subscribed", () => {
    const callback = jest.fn();
    broadcast.subscribe("otherEvent", callback);

    const messageEvent = {
      data: {
        event: "testEvent",
        target: "TestApp",
        source: "AnotherApp",
        data: { key: "value" },
      },
    };

    mockChannelInstance.onmessage(messageEvent);
    expect(callback).not.toHaveBeenCalled();
  });

  test("should close the broadcast channel", () => {
    broadcast.close();
    expect(mockChannelInstance.close).toHaveBeenCalled();
  });
});
