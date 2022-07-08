import { Ros, Service, ServiceRequest } from "roslib";
//========================================================================================
/*                                                                                      *
 *                                       CONSTANTS                                      *
 *                                                                                      */
//========================================================================================

const isHttps = window.location.protocol === "https:";
const BRIDE_CONNECTION_DEFAULT = `${isHttps ? "wss" : "ws"}://${
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
  private _onConnect: () => void;
  private _onClose: () => void;
  private _onError: (error: string) => void;
  private isDirty: boolean;

  constructor(url: string = BRIDE_CONNECTION_DEFAULT) {
    this.url = url;
    this.isDirty = false;
  }

  setURL(url: string): ROSBridge {
    this.url = url;
    this.isDirty = true;
    return this;
  }

  onConnect(lambda: () => void): ROSBridge {
    this._onConnect = lambda;
    this.isDirty = true;
    return this;
  }

  onClose(lambda: () => void): ROSBridge {
    this._onClose = lambda;
    this.isDirty = true;
    return this;
  }

  onError(lambda: (error: string) => void): ROSBridge {
    this._onError = lambda;
    this.isDirty = true;
    return this;
  }

  connect(): ROSBridge {
    if (this.isDirty || !this.ros) {
      this.isDirty = false;
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
    this.ros = new Ros({ url: this.url });
    this.ros.on("connection", this._onConnect);
    this.ros.on("error", this._onError);
    this.ros.on("close", this._onClose);
  }
}

export const MainROSBridge = new ROSBridge();
