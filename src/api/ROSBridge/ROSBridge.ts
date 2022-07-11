import { Ros, Service, ServiceRequest } from "roslib";
/**
 * Experimental ROSBridge wrapper
 * - Add promises to services
 * - Add builder api
 */

//========================================================================================
/*                                                                                      *
 *                                       CONSTANTS                                      *
 *                                                                                      */
//========================================================================================

const isHttps = window.location.protocol === "https:";
const BRIDGE_CONNECTION_DEFAULT = `${isHttps ? "wss" : "ws"}://${
  window.location.hostname
}:9090`;
const NOT_CONNECTED_ERROR = "ROSBridge not connected";

//========================================================================================
/*                                                                                      *
 *                                         MAIN                                         *
 *                                                                                      */
//========================================================================================

export class ROSBridge {
  private url: string;
  private ros: Ros;
  private onConnectSubs: Array<() => void> = [];
  private onCloseSubs: Array<() => void> = [];
  private onErrorSubs: Array<(error: string) => void> = [];

  constructor(url: string = BRIDGE_CONNECTION_DEFAULT) {
    this.url = url;
  }

  setURL(url: string): ROSBridge {
    this.url = url;
    this.reconnect();
    return this;
  }

  onConnect(lambda: () => void): ROSBridge {
    this.onConnectSubs.push(lambda);
    return this;
  }

  onClose(lambda: () => void): ROSBridge {
    this.onCloseSubs.push(lambda);
    return this;
  }

  onError(lambda: (error: string) => void): ROSBridge {
    this.onErrorSubs.push(lambda);
    return this;
  }

  connect(): ROSBridge {
    if (!this.ros || !this.ros.isConnected) {
      this.reconnect();
    }
    return this;
  }

  close(): ROSBridge {
    if (!!this.ros) this.ros.close();
    return this;
  }

  getServices(): Promise<Array<string>> {
    this.connect();
    if (!this.ros.isConnected) {
      return new Promise((_, reject) => reject(NOT_CONNECTED_ERROR));
    }
    return new Promise((resolve, reject) => {
      this.ros.getServices(
        (services: Array<string>) => {
          resolve(services);
        },
        (error: string) => {
          reject(error);
        }
      );
    });
  }

  callService(
    message: { [prop: string]: any },
    serviceID: { name: string; serviceType: string }
  ): Promise<any> {
    this.connect();
    if (!this.ros.isConnected) {
      return new Promise((_, reject) => reject(NOT_CONNECTED_ERROR));
    }
    const service = new Service({ ros: this.ros, ...serviceID });
    const request = new ServiceRequest(message);
    return new Promise((resolve, reject) => {
      service.callService(
        request,
        (result: any) => {
          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  private reconnect() {
    if (this?.ros?.isConnected) {
      this.ros.close();
    }
    this.ros = new Ros({ url: this.url });
    this.ros.on("connection", () => {
      console.debug("ROS Bridge connected!");
      this.onConnectSubs.forEach(f => f());
    });
    this.ros.on("error", error => {
      console.debug("ROS Bridge error!");
      this.onErrorSubs.forEach(f => f(error));
    });
    this.ros.on("close", () => {
      console.debug("ROS Bridge closed!");
      this.onCloseSubs.forEach(f => f());
    });
  }
}

export const MainROSBridge = new ROSBridge().connect();
