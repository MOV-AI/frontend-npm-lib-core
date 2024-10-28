import Authentication, {
  AuthException,
} from "../Authentication/Authentication";
import { authSub } from "./../Authentication/authSub";

const { checkLogin, getToken } = Authentication;

export default class AuthWebSocket {
  constructor({
    url = this.wsUrl,
    onOpen = null,
    onClose = null,
    onError = null,
    onMessage = null,
    connectionHandler = null,
  }) {
    this.onOpen = onOpen === null ? this._onOpen : onOpen;
    this.onClose = onClose === null ? this._onClose : onClose;
    this.onError = onError === null ? this._onError : onError;
    this.onMessage = onMessage === null ? this._onMessage : onMessage;
    this.connectionHandler =
      connectionHandler === null ? this._connectionHandler : connectionHandler;

    this.wsUrl = url;
    this.socket = false;
    this.connected = false;
    authSub.subscribe(({ loggedIn }) => {
      if (loggedIn) this.createSocket();
    });
  }

  _onOpen = (evt) => {
    console.log("Socket Open: ", evt);
  };

  _onClose = (evt) => {
    console.log("Socket Close: ", evt);
    this.connected = false;
  };

  _onError = (evt) => {
    this.connected = false;
    console.log("Socket Error: ", evt);
  };

  _onMessage = (evt) => {
    console.log("Socket Message: ", evt);
  };

  _connectionHandler = (value) => {
    console.log("Invalid Token, no handler specified! ", value);
  };

  createSocket(url = false) {
    let sock = false;

    checkLogin()
      .then((res) => {
        if (!res) {
          throw new AuthException("login error");
        }

        url = url !== false ? url : this.wsUrl;

        let wsUrl = new URL(url);
        let params = new URLSearchParams(wsUrl.search.slice(1));
        params.set("token", getToken());
        wsUrl.search = params;

        sock = new WebSocket(wsUrl.toString());
        sock.onopen = this.onOpen;
        sock.onerror = this.onError;
        sock.onclose = this.onClose;
        sock.onmessage = this.onMessage;

        this.socket = sock;
      })
      .catch((e) => {
        if (e.name === "AuthException") {
          this.connectionHandler(false);
        }
      });
  }

  send(data) {
    checkLogin()
      .then((res) => {
        if (!res) {
          throw new AuthException("login error");
        }

        this.socket.send(data);
      })
      .catch((e) => {
        switch (e.name) {
          case "AuthException":
            this.connectionHandler(false);
            break;

          case "InvalidStateError":
            // In case of the socket is not-ready, re-try sending the message until success
            let self = this;
            let sub_interval = undefined;
            sub_interval = setInterval(
              () => {
                if (self.socket.readyState === 1) {
                  clearInterval(sub_interval);
                  self.socket.send(data);
                }
              },
              400,
              sub_interval,
            );
            break;
        }
      });
  }

  close() {
    if (this.socket) {
      this.socket.close();
      this.connected = false;
    }
  }
}
