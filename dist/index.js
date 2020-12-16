(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Movai"] = factory();
	else
		root["Movai"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Authentication, Utils, Database, MasterDB, AuthWebSocket, Style, UndoManager, Clipboard, WSSub, User, BaseModel, DataManagerBase, Document, Workspace, Snapshot, Rest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Authentication_Authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Authentication/Authentication */ "./src/Authentication/Authentication.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Authentication", function() { return _src_Authentication_Authentication__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Utils/Utils */ "./src/Utils/Utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _src_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_Database_Database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Database/Database */ "./src/Database/Database.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return _src_Database_Database__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_Database_MasterDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Database/MasterDB */ "./src/Database/MasterDB.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasterDB", function() { return _src_Database_MasterDB__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/AuthWebSocket/AuthWebSocket */ "./src/AuthWebSocket/AuthWebSocket.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthWebSocket", function() { return _src_AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_Style_Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Style/Style */ "./src/Style/Style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return _src_Style_Style__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_UndoManager_UndoManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/UndoManager/UndoManager */ "./src/UndoManager/UndoManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UndoManager", function() { return _src_UndoManager_UndoManager__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_Clipboard_Clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/Clipboard/Clipboard */ "./src/Clipboard/Clipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _src_Clipboard_Clipboard__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_Database_WSSub__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/Database/WSSub */ "./src/Database/WSSub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WSSub", function() { return _src_Database_WSSub__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_User_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/User/User */ "./src/User/User.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _src_User_User__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_Database_Models_BaseModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/Database/Models/BaseModel */ "./src/Database/Models/BaseModel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseModel", function() { return _src_Database_Models_BaseModel__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_Database_Manager_DataManagerBase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/Database/Manager/DataManagerBase */ "./src/Database/Manager/DataManagerBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataManagerBase", function() { return _src_Database_Manager_DataManagerBase__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_Document_Document__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/Document/Document */ "./src/Document/Document.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return _src_Document_Document__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_Workspace_Workspace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/Workspace/Workspace */ "./src/Workspace/Workspace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Workspace", function() { return _src_Workspace_Workspace__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_Snapshot_Snapshot__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/Snapshot/Snapshot */ "./src/Snapshot/Snapshot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Snapshot", function() { return _src_Snapshot_Snapshot__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_Rest_Rest__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/Rest/Rest */ "./src/Rest/Rest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rest", function() { return _src_Rest_Rest__WEBPACK_IMPORTED_MODULE_15__["default"]; });



















/***/ }),

/***/ "./resources/fonts/movai.woff":
/*!************************************!*\
  !*** ./resources/fonts/movai.woff ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:font/woff;base64,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");

/***/ }),

/***/ "./src/AuthWebSocket/AuthWebSocket.js":
/*!********************************************!*\
  !*** ./src/AuthWebSocket/AuthWebSocket.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthWebSocket; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "@babel/runtime/helpers/esm/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "@babel/runtime/helpers/esm/createClass");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "@babel/runtime/helpers/esm/defineProperty");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Authentication/Authentication */ "./src/Authentication/Authentication.js");




var checkLogin = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_3__["default"].checkLogin,
    getToken = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_3__["default"].getToken,
    AuthException = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_3__["default"].AuthException;

var AuthWebSocket = /*#__PURE__*/function () {
  function AuthWebSocket(_ref) {
    var _this = this;

    var _ref$url = _ref.url,
        url = _ref$url === void 0 ? this.wsUrl : _ref$url,
        _ref$onOpen = _ref.onOpen,
        onOpen = _ref$onOpen === void 0 ? null : _ref$onOpen,
        _ref$onClose = _ref.onClose,
        onClose = _ref$onClose === void 0 ? null : _ref$onClose,
        _ref$onError = _ref.onError,
        onError = _ref$onError === void 0 ? null : _ref$onError,
        _ref$onMessage = _ref.onMessage,
        onMessage = _ref$onMessage === void 0 ? null : _ref$onMessage,
        _ref$connectionHandle = _ref.connectionHandler,
        connectionHandler = _ref$connectionHandle === void 0 ? null : _ref$connectionHandle;

    _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AuthWebSocket);

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_onOpen", function (evt) {
      console.log("Socket Open: ", evt);
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_onClose", function (evt) {
      console.log("Socket Close: ", evt);
      _this.connected = false; // Deal with reconnecting the socket

      _this.socket = null;

      if (_this.timerId) {
        clearTimeout(_this.timerId);
      }

      _this.timerId = setTimeout(function () {
        _this.createSocket();
      }, 5000);
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_onError", function (evt) {
      _this.connected = false;
      console.log("Socket Error: ", evt);
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_onMessage", function (evt) {
      console.log("Socket Message: ", evt);
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_connectionHandler", function (value) {
      console.log("Invalid Token, no handler specified! ", value);
    });

    this.onOpen = onOpen === null ? this._onOpen : onOpen;
    this.onClose = onClose === null ? this._onClose : onClose;
    this.onError = onError === null ? this._onError : onError;
    this.onMessage = onMessage === null ? this._onMessage : onMessage;
    this.connectionHandler = connectionHandler === null ? this._connectionHandler : connectionHandler;
    this.wsUrl = url;
    this.socket = false;
    this.timerId = false;
    this.connected = false;
  }

  _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AuthWebSocket, [{
    key: "createSocket",
    value: function createSocket() {
      var _this2 = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var sock = false;
      checkLogin().then(function (res) {
        if (!res) {
          throw new AuthException("login error");
        }

        url = url !== false ? url : _this2.wsUrl; //const wsUrl = `${url}?token=${getToken()}`;

        var wsUrl = new URL(url);
        var params = new URLSearchParams(wsUrl.search.slice(1));
        params.set("token", getToken());
        wsUrl.search = params;
        sock = new WebSocket(wsUrl.toString());
        sock.onopen = _this2.onOpen;
        sock.onerror = _this2.onError;
        sock.onclose = _this2.onClose;
        sock.onmessage = _this2.onMessage;
        _this2.socket = sock;
      })["catch"](function (e) {
        if (e.name === "AuthException") {
          _this2.connectionHandler(false);
        }
      });
    }
  }, {
    key: "send",
    value: function send(data) {
      var _this3 = this;

      checkLogin().then(function (res) {
        if (!res) {
          throw new AuthException("login error");
        }

        _this3.socket.send(data);
      })["catch"](function (e) {
        switch (e.name) {
          case "AuthException":
            _this3.connectionHandler(false);

            break;

          case "InvalidStateError":
            // In case of the socket is not-ready, re-try sending the message until success
            var self = _this3;
            var sub_interval = undefined;
            sub_interval = setInterval(function () {
              if (self.socket.readyState === 1) {
                clearInterval(sub_interval);
                self.socket.send(data);
              }
            }, 400, sub_interval);
            break;
        }
      });
    }
  }, {
    key: "close",
    value: function close() {
      if (this.socket) {
        this.socket.close();
        clearTimeout(this.timerId);
        this.connected = false;
      }
    }
  }]);

  return AuthWebSocket;
}();



/***/ }),

/***/ "./src/Authentication/Authentication.js":
/*!**********************************************!*\
  !*** ./src/Authentication/Authentication.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "@babel/runtime/helpers/esm/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



var Authentication = {};

Authentication.AuthException = function (message) {
  this.message = message;
  this.statusText = message;
  this.name = "AuthException";
};

Authentication.getToken = function () {
  var token = window.localStorage.getItem("movai.token");
  return token ? token : false;
};

Authentication.getRefreshToken = function () {
  var refreshToken = window.localStorage.getItem("movai.refreshToken");
  return refreshToken ? refreshToken : false;
};

Authentication.getTokenData = function () {
  try {
    var token = Authentication.getToken();
    var message = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token).message;
    var tokenData = {
      message: message,
      auth_token: false,
      refresh_token: Authentication.getRefreshToken(),
      error: false,
      access_token: token
    };
    return tokenData;
  } catch (error) {
    return {
      message: {},
      error: true
    };
  }
};

Authentication.login = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(username, password, remember) {
    var headers, url, response, status, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Cleanup...
            window.localStorage.removeItem("movai.token");
            window.localStorage.removeItem("movai.refreshToken");
            window.localStorage.removeItem("movai.tokenRemember");
            window.sessionStorage.removeItem("movai.session");
            headers = {};
            headers["Content-Type"] = "application/json";
            url = "/token-auth/";
            _context.prev = 7;
            _context.next = 10;
            return fetch(url, {
              method: "POST",
              headers: headers,
              body: JSON.stringify({
                username: username,
                password: password,
                remember: remember
              })
            });

          case 10:
            response = _context.sent;
            status = response.status;
            _context.next = 14;
            return response.json();

          case 14:
            data = _context.sent;

            if (status === 200) {
              window.localStorage.setItem("movai.token", data["access_token"]);
              window.localStorage.setItem("movai.refreshToken", data["refresh_token"]);
              window.localStorage.setItem("movai.tokenRemember", remember == "undefined" ? false : remember);
              window.sessionStorage.setItem("movai.session", true);
            }

            return _context.abrupt("return", data);

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](7);
            throw _context.t0;

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 19]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

Authentication.logout = function (redirect) {
  window.localStorage.removeItem("movai.token");
  window.localStorage.removeItem("movai.refreshToken");
  window.localStorage.removeItem("movai.tokenRemember");
  window.sessionStorage.removeItem("movai.session");
  window.location.replace(redirect || window.location.origin);
};

Authentication.checkLogin = /*#__PURE__*/_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var token, refreshToken, tokenRemember, sessionFlag, tokenData, refreshTokenData, url, headers, response, status, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          token = window.localStorage.getItem("movai.token");
          refreshToken = window.localStorage.getItem("movai.refreshToken");
          tokenRemember = window.localStorage.getItem("movai.tokenRemember");
          sessionFlag = window.sessionStorage.getItem("movai.session");

          if (!(token === null || refreshToken === null)) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", false);

        case 6:
          tokenData = null;
          _context2.prev = 7;
          tokenData = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](7);
          return _context2.abrupt("return", false);

        case 14:
          if (!(tokenData["exp"] > new Date().getTime() / 1000)) {
            _context2.next = 16;
            break;
          }

          return _context2.abrupt("return", true);

        case 16:
          if (!(tokenRemember == "false" && sessionFlag === null)) {
            _context2.next = 19;
            break;
          }

          Authentication.logout();
          return _context2.abrupt("return", false);

        case 19:
          if (!refreshToken) {
            _context2.next = 41;
            break;
          }

          _context2.prev = 20;
          // Refresh Token
          refreshTokenData = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(refreshToken);

          if (!(refreshTokenData["exp"] < new Date().getTime() / 1000)) {
            _context2.next = 24;
            break;
          }

          throw "refresh token has expired";

        case 24:
          url = "/token-refresh/";
          headers = {
            "Content-Type": "application/json"
          };
          _context2.next = 28;
          return fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
              token: refreshToken
            })
          });

        case 28:
          response = _context2.sent;
          status = response.status;
          _context2.next = 32;
          return response.json();

        case 32:
          data = _context2.sent;

          if (!(status === 200)) {
            _context2.next = 37;
            break;
          }

          window.localStorage.setItem("movai.token", data["access_token"]);
          window.localStorage.setItem("movai.refreshToken", data["refresh_token"]);
          return _context2.abrupt("return", true);

        case 37:
          _context2.next = 41;
          break;

        case 39:
          _context2.prev = 39;
          _context2.t1 = _context2["catch"](20);

        case 41:
          return _context2.abrupt("return", false);

        case 42:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, null, [[7, 11], [20, 39]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (Authentication);

/***/ }),

/***/ "./src/Clipboard/Clipboard.js":
/*!************************************!*\
  !*** ./src/Clipboard/Clipboard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clipboard; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "@babel/runtime/helpers/esm/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "@babel/runtime/helpers/esm/createClass");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Clipboard singleton
 */
var Clipboard = /*#__PURE__*/function () {
  function Clipboard() {
    _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Clipboard);

    if (Clipboard.instance) return Clipboard.instance;
    Clipboard.instance = this;
    this._data = {};
    this.copyKey = Math.random();
  }
  /**
   *  get clipboard data
   */


  _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Clipboard, [{
    key: "data",
    get: function get() {
      return this._data;
    }
    /**
     *
     * @param {string} key base key to clear
     */

  }], [{
    key: "clear",
    value: function clear(key) {
      var inst = new Clipboard();
      if (key) delete inst._data[key];
    }
    /**
     *
     * @param {string} key base key to read
     */

  }, {
    key: "read",
    value: function read(key) {
      // consider return a maybe
      var inst = new Clipboard();
      return key ? inst.data[key] : inst.data;
    }
    /**
     *
     * @param {string} key base key to write
     * @param {any} value object, primitive, etc, to write
     */

  }, {
    key: "write",
    value: function write(key, value) {
      return new Clipboard()._data[key] = value;
    }
    /**
     * Copies value
     * @param {*} value
     */

  }, {
    key: "copy",
    value: function copy(value) {
      Clipboard.write(new Clipboard().copyKey, value);
    }
    /**
     * Retrieve copied object
     */

  }, {
    key: "paste",
    value: function paste() {
      // consider making deep copy
      return Clipboard.read(new Clipboard().copyKey);
    }
  }]);

  return Clipboard;
}();



/***/ }),

/***/ "./src/Database/Database.js":
/*!**********************************!*\
  !*** ./src/Database/Database.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "@babel/runtime/helpers/esm/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "@babel/runtime/helpers/esm/defineProperty");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Authentication/Authentication */ "./src/Authentication/Authentication.js");
/* harmony import */ var _AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AuthWebSocket/AuthWebSocket */ "./src/AuthWebSocket/AuthWebSocket.js");




var getToken = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_2__["default"].getToken,
    AuthException = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_2__["default"].AuthException,
    checkLogin = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_2__["default"].checkLogin;

var Database = function Database() {
  var _this = this;

  _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Database);

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "connect", function () {
    _this.websocket = new _AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_3__["default"]({
      url: _this.WS_API,
      onOpen: _this.onOpen,
      onClose: _this.onClose,
      onError: _this.onError,
      onMessage: _this.onMessage,
      connectionHandler: null
    });

    _this.websocket.createSocket();
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onOpen", function (evt) {
    _this.dispatch("onopen", undefined);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onClose", function (evt) {
    _this.dispatch("onclose", undefined);

    if (evt.code !== 1000) {
      window.setTimeout(_this.connect(), _this.timeout);
    }
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onMessage", function (evt) {
    var data;

    try {
      data = JSON.parse(evt.data);
    } catch (err) {
      console.error(err);
      return;
    }

    if (data.error) {
      console.error(data.error);
      return;
    }

    var patterns = data.patterns;
    var is_pattern = true;
    var one_shot = false;

    if (["list", "unsubscribe", "subscribe"].includes(data.event)) {
      patterns = patterns.map(function (p) {
        if (data.event === "unsubscribe") {
          delete _this.callbacks[JSON.stringify(p)];
        }

        return data.event + "/" + JSON.stringify(p);
      });

      if (data.event === "list") {
        patterns = ["list"];
      }

      is_pattern = false;
      one_shot = true;
    }

    patterns.map(function (pattern) {
      _this.dispatch(pattern, data, is_pattern, one_shot);
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "checkTest", function (pattern, data, is_pattern, one_shot) {
    return new Promise(function (resolve, reject) {
      _this.dispatch(pattern, data, is_pattern, one_shot);

      if (true) {
        resolve("DONE");
      }
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onError", function (evt) {
    _this.dispatch("onerror", undefined);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onEvent", function (event_name) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    _this.evt_callbacks[event_name] = _this.evt_callbacks[event_name] || [];

    _this.evt_callbacks[event_name].push(callback);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "close", function () {
    return _this.websocket.close();
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "subscribe", function (_pattern) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var evt_callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var message = {
      event: "subscribe",
      pattern: _pattern
    };
    var pattern = JSON.stringify(_pattern);
    _this.callbacks[pattern] = _this.callbacks[pattern] || [];

    _this.callbacks[pattern].push(callback);

    if (evt_callback) {
      _this.evt_callbacks["subscribe/" + pattern] = _this.evt_callbacks["subscribe" + pattern] || [];

      _this.evt_callbacks["subscribe/" + pattern].push(evt_callback);
    }

    _this._send(message);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "unsubscribe", function (_pattern) {
    var evt_callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    console.log("Unsubscribe called " + JSON.stringify(_pattern));
    var message = {
      event: "unsubscribe",
      pattern: _pattern
    };
    var pattern = JSON.stringify(_pattern);

    if (evt_callback) {
      _this.evt_callbacks["unsubscribe/" + pattern] = _this.evt_callbacks["unsubscribe/" + pattern] || [];

      _this.evt_callbacks["unsubscribe/" + pattern].push(evt_callback);
    }

    _this._send(message);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "list", function () {
    var evt_callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var message = {
      event: "list"
    };
    _this.evt_callbacks["list"] = _this.evt_callbacks["list"] || [];

    _this.evt_callbacks["list"].push(evt_callback);

    _this._send(message);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_send", function (message) {
    _this.websocket.send(JSON.stringify(message));
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "dispatch", function (_pattern, message) {
    var is_pattern = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var one_shot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    /*if is_pattern is false then pattern is an event thus trigger evt_callbacks */
    var _callbacks = undefined;
    var pattern = _pattern;

    if (is_pattern === true) {
      pattern = JSON.stringify(_pattern);
      _callbacks = _this.callbacks[pattern];
    } else {
      _callbacks = _this.evt_callbacks[pattern];
    }

    if (_callbacks === undefined) return;

    for (var i = 0; i < _callbacks.length; i++) {
      if (typeof _callbacks[i] === "function") {
        _callbacks[i](message);
      }
    }

    if (_callbacks) {
      if (one_shot === true) {
        _callbacks = [];
      } else {//NOTHING
      }
    }
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getVar", function (key) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "global";

    if (!["global", "fleet"].includes(scope)) {
      throw "Only fleet and global scopes available.";
    }

    if (scope === "fleet") {
      // key format: robot_name@key_name
      if (key.split("@").length < 2) {
        throw "Wrong key format (robot_name@key_name)";
      }
    }

    var url = _this.REST_API + "database/" + scope + "/" + key + "/";
    checkLogin().then(function (res) {
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (callback) {
          callback(data);
        } else {//NOTHING
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "setVar", function (key, value) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "global";

    if (!["global", "fleet"].includes(scope)) {
      throw "Only fleet and global scopes available.";
    }

    if (scope === "fleet") {
      // key format: robot_name@key_name
      var values = key.split("@");

      if (key.split("@").length < 2) {
        throw "Wrong key format (robot_name@key_name)";
      }
    }

    var data = {
      key: key,
      scope: scope,
      value: value
    };
    var url = _this.REST_API + "database/";
    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          callback(res);
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "get", function (url) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            callback(data, res);
          })["catch"](function (e) {
            callback(undefined, e);
          });
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "post", function (scope, name, key, value) {
    var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
    var url = _this.REST_API + scope + "/" + name + "/";

    if (name === undefined) {
      url = _this.REST_API + scope + "/";
    }

    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          key: key,
          data: value
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            callback(data, res);
          })["catch"](function (e) {
            callback(undefined, e);
          });
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "upload", function (packageName, key, value) {
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    var url = "".concat(_this.REST_API, "upload/").concat(packageName, "/");
    var formData = new FormData();
    formData.append("name", key);
    formData.append("data", value);
    fetch(url, {
      method: "POST",
      body: formData
    }).then(function (res) {
      return res.json();
    }).then(callback);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "put", function (scope, name, value) {
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    var url = _this.REST_API + scope + "/" + name + "/";
    console.log("database put", url);

    if (name === undefined) {
      url = _this.REST_API + scope + "/";
    }

    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "PUT",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            callback(data, res);
          })["catch"](function (e) {
            callback(undefined, res);

            if (true) {
              alert("Development Mode \n" + "Status: " + res.status + "\n" + "Error: " + res.statusText);
            }
          });
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "delete", function (scope, name) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var url = _this.REST_API + scope + "/" + name + "/";

    if (name === undefined) {
      url = _this.REST_API + scope + "/";
      return;
    }

    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            callback(data, res);
          })["catch"](function (e) {
            callback(undefined, res);

            if (true) {
              alert("Development Mode \n" + "Status: " + res.status + "\n" + "Error: " + res.statusText);
            }
          });
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "cloudFunction", function (cloudFunction) {
    var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var args = arguments.length > 2 ? arguments[2] : undefined;
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      var url = _this.REST_API + "function/" + cloudFunction + "/";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          func: func,
          args: args
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            return callback(data);
          });
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "postTabs", function (name, value) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var scope = "User";
    var url = _this.REST_API + scope + "/" + name + "/";

    if (name === undefined) {
      url = _this.REST_API + scope + "/";
      return;
    }

    var newValue = value.map(function (obj) {
      return {
        componentName: obj.componentName,
        name: obj.name
      };
    });
    var key_workspace = {
      Workspace: "*"
    };
    checkLogin().then(function (res) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          key: key_workspace,
          data: newValue
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            callback(data, res);
          })["catch"](function (e) {
            callback(undefined, res);

            if (true) {
              alert("Development Mode \n" + "Status: " + res.status + "\n" + "Error: " + res.statusText);
            }
          });
        }
      });
    });
  });

  this.host = "".concat(window.location.hostname, ":").concat(window.location.port);
  var isHttps = window.location.protocol === "https:";
  this.WS_API = "".concat(isHttps ? "wss" : "ws", "://").concat(this.host, "/ws/subscriber");
  this.REST_API = "".concat(window.location.protocol, "//").concat(this.host, "/api/v1/");
  this.callbacks = {};
  this.evt_callbacks = {};
  this.timeout = 3000;
  this.websocket = undefined;
  this.connect();
};

/* harmony default export */ __webpack_exports__["default"] = (Database);

/***/ }),

/***/ "./src/Database/Manager/DataManagerBase.js":
/*!*************************************************!*\
  !*** ./src/Database/Manager/DataManagerBase.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataManagerBase; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "@babel/runtime/helpers/esm/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "@babel/runtime/helpers/esm/createClass");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "@babel/runtime/helpers/esm/defineProperty");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);






var DataManagerBase = /*#__PURE__*/function () {
  function DataManagerBase() {
    var _this = this;

    _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DataManagerBase);

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_initialize", function () {
      if (lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(_this.models)) {
        throw new Error("No models added");
      }

      Object.keys(_this.models).forEach(function (key) {
        var prop = key.charAt(0).toLowerCase() + key.slice(1);
        Object.defineProperty(_this, prop, {
          get: function get() {
            return _this.models[key];
          }
        });
      });
      return _this._subscribeModelsReady();
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_subscribeModelsReady", function () {
      Object.keys(_this.models).forEach(function (key) {
        _this.models[key].onReady(function () {
          return _this._setModelReady(key);
        });
      });
      return _this;
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_setModelReady", function (model) {
      _this.isReady += 1;

      if (_this.isReady === Object.keys(_this.models).length) {
        _this._subject_state.complete();
      }
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "onUpdate", function (subscribeTo, callback) {
      return subscribeTo.onUpdate(callback);
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "onReady", function (callback) {
      if (_this.db_state !== _this.db_states.ready) {
        _this._subject_state.subscribe(function () {}, function () {}, function () {
          return callback();
        });
      } else {
        callback();
      }
    });

    this.models = {};
    this.db_states = Object.freeze({
      error: -1,
      loading: 0,
      ready: 1
    });
    this.isReady = 0;
    this._subject_state = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
  }

  _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DataManagerBase, [{
    key: "db_state",
    get: function get() {
      return this.isReady === Object.keys(this.models).length ? this.db_states.ready : this.db_states.loading;
    }
  }]);

  return DataManagerBase;
}();



/***/ }),

/***/ "./src/Database/MasterDB.js":
/*!**********************************!*\
  !*** ./src/Database/MasterDB.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WSSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WSSub */ "./src/Database/WSSub.js");

/**
 * A Database singleton
 */

var MasterDB = new _WSSub__WEBPACK_IMPORTED_MODULE_0__["default"]();
/* harmony default export */ __webpack_exports__["default"] = (MasterDB);

/***/ }),

/***/ "./src/Database/Models/BaseModel.js":
/*!******************************************!*\
  !*** ./src/Database/Models/BaseModel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseModel; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "@babel/runtime/helpers/esm/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "@babel/runtime/helpers/esm/createClass");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "@babel/runtime/helpers/esm/defineProperty");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.js");





 //import RestApi from "../../RestApi";

var BaseModel = /*#__PURE__*/function () {
  function BaseModel(manager, model, database, _patterns2) {
    var _this = this;

    _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseModel);

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_initialize", function () {
      _this.patterns.forEach(function (pattern) {
        return _this._subscribe(pattern);
      });

      return _this;
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_subscribe", function (pattern) {
      _this.db.subscribe(pattern, function (data) {
        return _this._onDataChange(data);
      }, function (data) {
        return _this._onDataLoad(data);
      });
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_validatePatterns", function (patterns) {
      var default_pattern = {
        Scope: _this.model,
        Name: "*"
      };

      var _patterns = patterns ? patterns : default_pattern;

      return Array.isArray(_patterns) ? _patterns : [_patterns];
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "get", function (id) {
      return _this._cache.get(id);
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "getAll", function () {
      return _this._cache.values();
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_get_or_create", function (key) {
      return _this.get(key) || _this.add(key, {
        name: key,
        obj: {},
        id: key
      }).get(key);
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "add", function (key, data) {
      return _this._cache.set(key, data);
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "remove", function (key) {
      _this._cache["delete"](key);
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "destroy", function () {
      _this.patterns.forEach(function (pattern) {
        return _this.db.unsubscribe(pattern);
      });
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "removeEmpty", function (obj, path) {
      var new_obj = null;

      if (lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(obj, path, {}))) {
        // remove empty
        new_obj = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.omit(obj, path);
        var up_path = path.split("."); // check up level is empty

        if (up_path.length > 1) {
          new_obj = _this.removeEmpty(new_obj, up_path.slice(0, -1).join("."));
        }
      }

      return new_obj || obj;
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_onDataChange", function (data) {
      var obj = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(data, "key.".concat(_this.model), {});
      Object.keys(obj).forEach(function (key) {
        var entry = _this._get_or_create(key);

        if (data.event === "del") {
          // deleting an entry
          var path = Object.keys(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["default"].flattenObject(obj[key]))[0];
          entry.obj = _this.removeEmpty(lodash__WEBPACK_IMPORTED_MODULE_4___default.a.omit(entry.obj, path), path); // completly remove object

          if (lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isEmpty(entry.obj)) {
            _this.remove(key);
          }
        } else {
          // updating an entry
          lodash__WEBPACK_IMPORTED_MODULE_4___default.a.merge(entry.obj, obj[key]);
        }

        _this._subject.next({
          data: entry,
          event: data.event
        });
      });
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "_onDataLoad", function (data) {
      var obj = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.get(data, "value.".concat(_this.model), {});
      Object.keys(obj).forEach(function (key) {
        /*this.add(key, {
          obj: obj[key],
          id: key
        });*/
        var entry = _this._get_or_create(key);

        lodash__WEBPACK_IMPORTED_MODULE_4___default.a.merge(entry.obj, obj[key]);
      });

      if (--_this.nr_patterns <= 0) {
        _this.db_state = _this.db_states.ready;
      }
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "onReady", function (callback) {
      if (_this.db_state !== _this.db_states.ready) {
        _this._subject_state.subscribe(function () {}, function () {}, function () {
          return callback();
        });
      } else {
        callback();
      }
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "onUpdate", function (callback) {
      _this._subject.subscribe(callback);
    });

    this.db_states = Object.freeze({
      error: -1,
      loading: 0,
      ready: 1
    });
    this.db = database;
    this.model = model;
    this.manager = manager;
    this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    this._cache = new Map();
    this._subject_state = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
    this._db_state = this.db_states.loading;
    this.patterns = this._validatePatterns(_patterns2);
    this.nr_patterns = this.patterns.length; //this.api = new RestApi(this.model);

    this._initialize();
  }

  _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseModel, [{
    key: "db_state",
    get: function get() {
      return this._db_state;
    },
    set: function set(value) {
      if (value !== this._db_state) {
        this._db_state = value;

        if (value !== this.db_states.ready) {
          this._subject_state.next(value);
        } else {
          this._subject_state.complete();
        }
      }
    }
  }]);

  return BaseModel;
}();



/***/ }),

/***/ "./src/Database/WSSub.js":
/*!*******************************!*\
  !*** ./src/Database/WSSub.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "@babel/runtime/helpers/esm/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "@babel/runtime/helpers/esm/defineProperty");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AuthWebSocket/AuthWebSocket */ "./src/AuthWebSocket/AuthWebSocket.js");
/* harmony import */ var _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Authentication/Authentication */ "./src/Authentication/Authentication.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var getToken = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_3__["default"].getToken,
    AuthException = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_3__["default"].AuthException,
    checkLogin = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_3__["default"].checkLogin;
/**
 * WSSub - class to handle redis subscribers using authenticated websockets
 */

var WSSub = function WSSub() {
  var _this = this;

  _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WSSub);

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getState", function () {
    var _this$websocket, _this$websocket$socke;

    return ((_this$websocket = _this.websocket) === null || _this$websocket === void 0 ? void 0 : (_this$websocket$socke = _this$websocket.socket) === null || _this$websocket$socke === void 0 ? void 0 : _this$websocket$socke.readyState) || WebSocket.CLOSED;
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "initSocket", function () {
    if (_this.websocket) return _this;
    var url = _this.url,
        onOpen = _this.onOpen,
        onClose = _this.onClose,
        onError = _this.onError,
        onMessage = _this.onMessage,
        onAuthError = _this.onAuthError; // TODO extend WSSub from AuthWebSocket instead

    _this.websocket = new _AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_2__["default"]({
      url: url,
      onOpen: onOpen,
      onClose: onClose,
      onError: onError,
      onMessage: onMessage,
      connectionHandler: onAuthError
    });

    _this.connect();

    return _this;
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "connect", function () {
    _this.websocket.createSocket();

    return _this;
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "reConnect", function () {
    setTimeout(_this.connect, _this.RECONN_TIMEOUT);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getOrCreate", function (map, pattern) {
    return map.get(pattern) || map.set(pattern, []).get(pattern);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "pushCallback", function (map, pattern, callback) {
    _this.getOrCreate(map, pattern).push(callback);

    return _this;
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "addSubscriberCallback", function (callback, pattern) {
    if (typeof callback !== "function") return _this;
    return _this.pushCallback(_this.sub_callbacks, pattern, callback);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "addEventCallback", function (command, callback, pattern) {
    if (typeof callback !== "function") return _this;

    var _sufix = pattern ? "/".concat(pattern) : "";

    var _pattern = "".concat(command).concat(_sufix);

    return _this.pushCallback(_this.evt_callbacks, _pattern, callback);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "send", function (message) {
    var retry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    try {
      // do not keep trying to send the message after 3 times
      if (retry >= _this.RETRIES) throw new Error("Timeout sending message"); // stringify the message before sending it
      // try to resend if the connection is not yet open

      _this.getState() !== WebSocket.OPEN ? setTimeout(_this.websocket.send, _this.RESEND_TIMEOUT, message, retry + 1) : _this.websocket.send(JSON.stringify(message));
    } catch (error) {
      console.error(error);
    }
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "dispatch", function (pattern) {
    var is_command = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var message = arguments.length > 2 ? arguments[2] : undefined;

    var _map = is_command ? _this.evt_callbacks : _this.sub_callbacks;

    var _callbacks = _map.get(pattern) || [];

    _callbacks.forEach(function (cb) {
      setTimeout(cb, 0, message);
    });

    if (is_command) _map["delete"](pattern);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "fmtMessage", function (event, pattern) {
    return {
      event: event,
      pattern: pattern
    };
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onOpen", function (evt) {
    // send current subscriptions to the server
    _this.reSubscribe();

    _this.dispatch("onopen");
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onClose", function (evt) {
    _this.dispatch("onclose"); // reconnect if the connection was not closed on purpose


    if (evt.code !== _this.NORMAL_CLOSE_EVT) {
      _this.reConnect();
    }
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onError", function (evt) {
    _this.dispatch("onerror");
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onAuthError", function () {
    // reconnect on authentication error
    _this.reConnect();
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onMessage", function (msg) {
    try {
      var data = JSON.parse(msg.data);
      if (data.error) throw new Error(data.error);
      var event = data.event;
      var is_command = Object.values(_this.commands).includes(event);
      var _this$commands = _this.commands,
          LIST = _this$commands.LIST,
          EXECUTE = _this$commands.EXECUTE;
      var rcv_patterns = [LIST, EXECUTE].includes(event) ? [event] : data.patterns;
      rcv_patterns.forEach(function (pattern) {
        var _prefix = is_command ? "".concat(event, "/") : "";

        var _pattern = "".concat(_prefix).concat(JSON.stringify(pattern));

        _this.dispatch(_pattern, is_command, data);
      });
    } catch (error) {
      console.error(error);
    }
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "subscribe", function (pattern, callback, evt_callback) {
    var SUBSCRIBE = _this.commands.SUBSCRIBE;

    var message = _this.fmtMessage(SUBSCRIBE, pattern);

    var _pattern = JSON.stringify(pattern);

    _this.initSocket().addSubscriberCallback(callback, _pattern).addEventCallback(SUBSCRIBE, evt_callback, _pattern).send(message);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "reSubscribe", function () {
    var SUBSCRIBE = _this.commands.SUBSCRIBE;
    Array.from(_this.sub_callbacks.keys()).forEach(function (key) {
      var message = _this.fmtMessage(SUBSCRIBE, JSON.parse(key));

      _this.send(message);
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "unsubscribe", function (pattern, callback) {
    var UNSUBSCRIBE = _this.commands.UNSUBSCRIBE;

    var message = _this.fmtMessage(UNSUBSCRIBE, pattern);

    var _pattern = JSON.stringify(pattern);

    _this.initSocket().addEventCallback(UNSUBSCRIBE, callback, _pattern).send(message);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "list", function (evt_callback) {
    var LIST = _this.commands.LIST;

    var message = _this.fmtMessage(LIST);

    _this.initSocket().addEventCallback(LIST, evt_callback).send(message);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "execute", function (remote_callback, data, evt_callback) {
    var EXECUTE = _this.commands.EXECUTE;

    var message = _objectSpread({
      event: EXECUTE,
      callback: remote_callback
    }, data);

    _this.initSocket().addEventCallback(EXECUTE, evt_callback).send(message);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "onEvent", function (event, callback) {
    _this.initSocket().addEventCallback(event, callback);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "close", function () {
    _this.websocket.close();

    _this.websocket = null;
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "checkTest", function (pattern, data, is_pattern, one_shot) {
    return new Promise(function (resolve, reject) {
      _this.dispatch(pattern, data, is_pattern, one_shot);

      if (true) {
        resolve("DONE");
      }
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "getVar", function (key) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "global";

    if (!["global", "fleet"].includes(scope)) {
      throw "Only fleet and global scopes available.";
    }

    if (scope === "fleet") {
      // key format: robot_name@key_name
      if (key.split("@").length < 2) {
        throw "Wrong key format (robot_name@key_name)";
      }
    }

    var url = _this.REST_API + "database/" + scope + "/" + key + "/";
    checkLogin().then(function (res) {
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (callback) {
          callback(data);
        } else {//NOTHING
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "setVar", function (key, value) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "global";

    if (!["global", "fleet"].includes(scope)) {
      throw "Only fleet and global scopes available.";
    }

    if (scope === "fleet") {
      // key format: robot_name@key_name
      var values = key.split("@");

      if (key.split("@").length < 2) {
        throw "Wrong key format (robot_name@key_name)";
      }
    }

    var data = {
      key: key,
      scope: scope,
      value: value
    };
    var url = _this.REST_API + "database/";
    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          callback(res);
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "get", function (url) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            callback(data, res);
          })["catch"](function (e) {
            callback(undefined, e);
          });
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "post", function (scope, name, key, value) {
    var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
    var url = _this.REST_API + scope + "/" + name + "/";

    if (name === undefined) {
      url = _this.REST_API + scope + "/";
    }

    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          key: key,
          data: value
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            callback(data, res);
          })["catch"](function (e) {
            callback(undefined, e);
          });
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "upload", function (packageName, key, value) {
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    var url = "".concat(_this.REST_API, "upload/").concat(packageName, "/");
    var formData = new FormData();
    formData.append("name", key);
    formData.append("data", value);
    fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer ".concat(getToken())
      }
    }).then(function (res) {
      return res.json();
    }).then(callback);
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "put", function (scope, name, value) {
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    var url = _this.REST_API + scope + "/" + name + "/";

    if (name === undefined) {
      url = _this.REST_API + scope + "/";
    }

    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "PUT",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            callback(data, res);
          })["catch"](function (e) {
            callback(undefined, res);

            if (true) {
              alert("Development Mode \n" + "Status: " + res.status + "\n" + "Error: " + res.statusText);
            }
          });
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "delete", function (scope, name) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var url = _this.REST_API + scope + "/" + name + "/";

    if (name === undefined) {
      url = _this.REST_API + scope + "/";
      return;
    }

    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      fetch(url, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            callback(data, res);
          })["catch"](function (e) {
            callback(undefined, res);

            if (true) {
              alert("Development Mode \n" + "Status: " + res.status + "\n" + "Error: " + res.statusText);
            }
          });
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "cloudFunction", function (cloudFunction) {
    var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var args = arguments.length > 2 ? arguments[2] : undefined;
    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
    checkLogin().then(function (res) {
      if (!res) {
        throw new AuthException("login error");
      }

      var url = _this.REST_API + "function/" + cloudFunction + "/";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          func: func,
          args: args
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            return callback(data);
          });
        }
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "postTabs", function (name, value) {
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var scope = "User";
    var url = _this.REST_API + scope + "/" + name + "/";

    if (name === undefined) {
      url = _this.REST_API + scope + "/";
      return;
    }

    var newValue = value.map(function (obj) {
      return {
        componentName: obj.componentName,
        name: obj.name
      };
    });
    var key_workspace = {
      Workspace: "*"
    };
    checkLogin().then(function (res) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          key: key_workspace,
          data: newValue
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer ".concat(getToken())
        }
      }).then(function (res) {
        if (callback) {
          res.json().then(function (data) {
            callback(data, res);
          })["catch"](function (e) {
            callback(undefined, res);

            if (true) {
              alert("Development Mode \n" + "Status: " + res.status + "\n" + "Error: " + res.statusText);
            }
          });
        }
      });
    });
  });

  this.host = "".concat(window.location.hostname, ":").concat(window.location.port);
  var isHttps = window.location.protocol === "https:";
  this.url = "".concat(isHttps ? "wss" : "ws", "://").concat(this.host, "/ws/subscriber");
  this.REST_API = "".concat(window.location.protocol, "//").concat(this.host, "/api/v1/");
  this.RECONN_TIMEOUT = 3000;
  this.RESEND_TIMEOUT = 1000;
  this.RETRIES = 3;
  this.NORMAL_CLOSE_EVT = 1000; // supported commands

  this.commands = {
    SUBSCRIBE: "subscribe",
    UNSUBSCRIBE: "unsubscribe",
    LIST: "list",
    EXECUTE: "execute"
  };
  this.websocket = null; // map with callbacks related with pattern subscription

  this.sub_callbacks = new Map(); // map with callbacks related with event subscription

  this.evt_callbacks = new Map();
}
/**
 * get the connection state
 * https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState
 */
;

/* harmony default export */ __webpack_exports__["default"] = (WSSub);

/***/ }),

/***/ "./src/Document/Document.js":
/*!**********************************!*\
  !*** ./src/Document/Document.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "@babel/runtime/helpers/esm/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "@babel/runtime/helpers/esm/createClass");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DocumentV1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DocumentV1 */ "./src/Document/DocumentV1.js");
/* harmony import */ var _DocumentV2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DocumentV2 */ "./src/Document/DocumentV2.js");





var withDocVersion = function withDocVersion(docVersion) {
  return {
    v1: _DocumentV1__WEBPACK_IMPORTED_MODULE_2__["default"],
    v2: _DocumentV2__WEBPACK_IMPORTED_MODULE_3__["default"]
  }[docVersion];
};

var Document = /*#__PURE__*/function () {
  function Document(args) {
    var docVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "v1";

    _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Document);

    // create instance of DocumentV1 or DocumentV2
    return new (withDocVersion(docVersion))(args);
  }
  /** Static handlers */

  /**
   * Forward create call to the correct Document version
   * @param {Object} args Object with arguments to forward
   * @param {String} docVersion Document version to use
   */


  _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Document, null, [{
    key: "create",
    value: function create(args) {
      var docVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "v1";
      return withDocVersion(docVersion).create(args);
    }
    /**
     * Forward delete call to the correct version
     * @param {Object} args Object with arguments to forward
     * @param {String} docVersion Document version to use
     */

  }, {
    key: "delete",
    value: function _delete(args) {
      var docVersion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "v1";
      return withDocVersion(docVersion)["delete"](args);
    }
  }]);

  return Document;
}();

/* harmony default export */ __webpack_exports__["default"] = (Document);

/***/ }),

/***/ "./src/Document/DocumentV1.js":
/*!************************************!*\
  !*** ./src/Document/DocumentV1.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "@babel/runtime/helpers/esm/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "@babel/runtime/helpers/esm/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "@babel/runtime/helpers/esm/createClass");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "@babel/runtime/helpers/esm/defineProperty");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Database_Models_BaseModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Database/Models/BaseModel */ "./src/Database/Models/BaseModel.js");
/* harmony import */ var _Database_MasterDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Database/MasterDB */ "./src/Database/MasterDB.js");
/* harmony import */ var _Rest_Rest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Rest/Rest */ "./src/Rest/Rest.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/**
 * Document class to use with the Rest api V1
 */

var DocumentV1 = /*#__PURE__*/function () {
  function DocumentV1(_ref) {
    var _this = this;

    var _type2 = _ref.type,
        _name2 = _ref.name,
        _ref$workspace = _ref.workspace,
        _workspace2 = _ref$workspace === void 0 ? "global" : _ref$workspace,
        _version2 = _ref.version,
        _uri = _ref.uri;

    _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DocumentV1);

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "_init", function (type, name, workspace, version, uri) {
      _this._parseArgs(workspace, type, name, version, uri);

      _this.subscriber = undefined;
      _this.database = _Database_MasterDB__WEBPACK_IMPORTED_MODULE_5__["default"];
      _this.data = {};
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "_parseArgs", function (workspace, type, name, version, uri) {
      var _split = (uri || "").split("/"),
          _split2 = _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_split, 4),
          _workspace = _split2[0],
          _type = _split2[1],
          _name = _split2[2],
          _version = _split2[3];

      _this.workspace = _workspace || workspace;
      _this.type = _type || type;
      _this.name = _name || name;
      _this.version = _version || version;
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "read", function () {
      var workspace = _this.workspace,
          type = _this.type,
          name = _this.name;
      var path = "v1/".concat(type, "/").concat(name, "/");
      return _Rest_Rest__WEBPACK_IMPORTED_MODULE_6__["default"].get({
        path: path
      }).then(function (data) {
        _this.data = data;
        return data;
      });
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "update", function (body) {
      var type = _this.type,
          name = _this.name;
      var path = "v1/".concat(type, "/").concat(name, "/");
      return _Rest_Rest__WEBPACK_IMPORTED_MODULE_6__["default"].put({
        path: path,
        body: body
      });
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "subscribe", function (callback) {
      _this.resubscribe(callback);
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "resubscribe", function (callback) {
      if (_this.readOnly) return;

      _this.unsubscribe();

      _this.subscriber = new _Database_Models_BaseModel__WEBPACK_IMPORTED_MODULE_4__["default"]({}, _this.type, _this.database, [{
        Scope: _this.type,
        Name: _this.name
      }]);

      _this.subscriber.onUpdate(function () {
        var _this$subscriber$get;

        if (!_this.subscriber) return;
        _this.data = ((_this$subscriber$get = _this.subscriber.get(_this.name)) === null || _this$subscriber$get === void 0 ? void 0 : _this$subscriber$get.obj) || {};
        callback(_this.data);
      });
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "unsubscribe", function () {
      if (_this.subscriber) _this.subscriber.destroy();
      _this.subscriber = null;
    });

    this._init(_type2, _name2, _workspace2, _version2, _uri);
  }
  /** Initialization */


  _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DocumentV1, [{
    key: "readOnly",

    /** Document properties */

    /**
     * Get document read only status
     */
    get: function get() {
      return Boolean(this.version);
    }
    /** Document handlers */

    /**
     * Get document data
     */

  }], [{
    key: "create",

    /** Static handlers */

    /**
     *
     * @param {String} type Type of the document
     * @param {String} name Name of the document
     */
    value: function create(_ref2) {
      var type = _ref2.type,
          name = _ref2.name,
          _ref2$body = _ref2.body,
          body = _ref2$body === void 0 ? {} : _ref2$body;
      var path = "v1/".concat(type, "/");
      return _Rest_Rest__WEBPACK_IMPORTED_MODULE_6__["default"].post({
        path: path,
        body: {
          data: _objectSpread(_objectSpread({}, body), {}, {
            Label: name
          })
        }
      });
    }
    /**
     * Delete document or partial deletion of the document
     * @param {String} type Type of the document
     * @param {String} name Name of the document
     * @param {Object} body Data of the document
     */

  }, {
    key: "delete",
    value: function _delete(_ref3) {
      var type = _ref3.type,
          name = _ref3.name,
          body = _ref3.body;
      var path = "v1/".concat(type, "/").concat(name, "/");
      return _Rest_Rest__WEBPACK_IMPORTED_MODULE_6__["default"]["delete"]({
        path: path,
        body: body
      });
    }
  }]);

  return DocumentV1;
}();

/* harmony default export */ __webpack_exports__["default"] = (DocumentV1);

/***/ }),

/***/ "./src/Document/DocumentV2.js":
/*!************************************!*\
  !*** ./src/Document/DocumentV2.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "@babel/runtime/helpers/esm/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "@babel/runtime/helpers/esm/createClass");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "@babel/runtime/helpers/esm/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "@babel/runtime/helpers/esm/inherits");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "@babel/runtime/helpers/esm/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "@babel/runtime/helpers/esm/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "@babel/runtime/helpers/esm/defineProperty");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DocumentV1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DocumentV1 */ "./src/Document/DocumentV1.js");
/* harmony import */ var _Rest_Rest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Rest/Rest */ "./src/Rest/Rest.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Document class to use with the Rest api V2
 */

var DocumentV2 = /*#__PURE__*/function (_DocumentV) {
  _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DocumentV2, _DocumentV);

  var _super = _createSuper(DocumentV2);

  function DocumentV2() {
    var _this;

    _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DocumentV2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "read", function () {
      var _assertThisInitialize = _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this),
          workspace = _assertThisInitialize.workspace,
          type = _assertThisInitialize.type,
          name = _assertThisInitialize.name,
          version = _assertThisInitialize.version;

      var path = "v2/db/".concat(workspace, "/").concat(type, "/").concat(name, "/").concat(version);
      return _Rest_Rest__WEBPACK_IMPORTED_MODULE_8__["default"].get({
        path: path
      }).then(function (data) {
        _this.data = data;
        return data;
      });
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "update", function (body) {
      var _assertThisInitialize2 = _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this),
          workspace = _assertThisInitialize2.workspace,
          type = _assertThisInitialize2.type,
          name = _assertThisInitialize2.name,
          version = _assertThisInitialize2.version;

      var path = "v2/db/".concat(workspace, "/").concat(type, "/").concat(name, "/").concat(version);
      return _Rest_Rest__WEBPACK_IMPORTED_MODULE_8__["default"].put({
        path: path,
        body: body
      });
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "createSnapshot", function (_ref) {
      var trgWorkspace = _ref.trgWorkspace,
          version = _ref.version;

      var _assertThisInitialize3 = _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this),
          workspace = _assertThisInitialize3.workspace,
          type = _assertThisInitialize3.type,
          name = _assertThisInitialize3.name;

      return Snapshot.create({
        trgWorkspace: trgWorkspace,
        srcWorkspace: workspace,
        type: type,
        name: name,
        version: version
      });
    });

    _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "getSnapShots", function () {
      var _assertThisInitialize4 = _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this),
          workspace = _assertThisInitialize4.workspace,
          type = _assertThisInitialize4.type,
          name = _assertThisInitialize4.name;

      return Snapshot.getAll({
        workspace: workspace,
        type: type,
        name: name
      });
    });

    return _this;
  }

  _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DocumentV2, null, [{
    key: "create",

    /** Static handlers */

    /**
     *
     * @param {String} type Type of the document
     * @param {String} name Name of the document
     * @param {String} workspace Workspace of the document
     */
    value: function create(_ref2) {
      var type = _ref2.type,
          name = _ref2.name,
          workspace = _ref2.workspace;
      var path = "v2/db/".concat(workspace, "/").concat(type, "/").concat(name);
      var body = {
        Label: name
      };
      return _Rest_Rest__WEBPACK_IMPORTED_MODULE_8__["default"].post({
        path: path,
        body: body
      });
    }
    /**
     * Delete document or partial deletion of the document
     * @param {String} type Type of the document
     * @param {String} name Name of the document
     * @param {Object} body Data of the document
     * @param {String} workspace Workspace of the document
     */

  }, {
    key: "delete",
    value: function _delete(_ref3) {
      var type = _ref3.type,
          name = _ref3.name,
          body = _ref3.body,
          _ref3$workspace = _ref3.workspace,
          workspace = _ref3$workspace === void 0 ? "global" : _ref3$workspace;
      var path = "v2/db/".concat(workspace, "/").concat(type, "/").concat(name);
      return _Rest_Rest__WEBPACK_IMPORTED_MODULE_8__["default"]["delete"]({
        path: path,
        body: body
      });
    }
    /**
     * Get all existing documents in a workspace
     * @param {String} workspace workspace to search
     * @param {String} type filter documents by type
     */

  }, {
    key: "getDocs",
    value: function getDocs(_ref4) {
      var workspace = _ref4.workspace,
          type = _ref4.type;

      var _type = type ? "/".concat(type) : "";

      var path = "v2/db/".concat(workspace).concat(_type);
      return _Rest_Rest__WEBPACK_IMPORTED_MODULE_8__["default"].get({
        path: path
      });
    }
  }]);

  return DocumentV2;
}(_DocumentV1__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (DocumentV2);

/***/ }),

/***/ "./src/Rest/Rest.js":
/*!**************************!*\
  !*** ./src/Rest/Rest.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RestBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RestBase */ "./src/Rest/RestBase.js");
/* harmony import */ var _WithAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WithAuth */ "./src/Rest/WithAuth.js");


var Rest = Object(_WithAuth__WEBPACK_IMPORTED_MODULE_1__["default"])(_RestBase__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Rest);

/***/ }),

/***/ "./src/Rest/RestBase.js":
/*!******************************!*\
  !*** ./src/Rest/RestBase.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "@babel/runtime/helpers/esm/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);

var RestBase = {};
/**
 * Encodes the values of an object
 * @param {Object} data Object to encode
 */

RestBase.encodeURI = function (data) {
  var output = {};

  for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    output[key] = encodeURIComponent(value);
  }

  return output;
};
/**
 * Get composed url
 * @param {String} path Relative path
 */


RestBase.getUrl = function (_ref) {
  var path = _ref.path,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? {} : _ref$search;
  var host = "".concat(window.location.hostname, ":").concat(window.location.port);
  var params = new URLSearchParams(RestBase.encodeURI(search));
  return "".concat(window.location.protocol, "//").concat(host, "/api/").concat(path, "?").concat(params.toString());
};
/**
 * Execute request
 * @param {String} path Relative path
 * @param {String} method Request method
 * @param {Object} body Request payload
 */


RestBase._request = function (_ref2) {
  var path = _ref2.path,
      _ref2$method = _ref2.method,
      method = _ref2$method === void 0 ? "GET" : _ref2$method,
      _ref2$body = _ref2.body,
      body = _ref2$body === void 0 ? {} : _ref2$body,
      search = _ref2.search,
      _ref2$customHeaders = _ref2.customHeaders,
      customHeaders = _ref2$customHeaders === void 0 ? {} : _ref2$customHeaders;
  var headers = customHeaders;
  var url = RestBase.getUrl({
    path: path,
    search: search
  });
  var skipBody = ["HEAD", "GET"];
  var payload = {
    method: method,
    headers: headers
  };
  if (!skipBody.includes(method)) payload.body = JSON.stringify(body);
  return fetch(url, payload).then(function (response) {
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  });
};
/**
 * Execute GET request
 * @param {String} path Relative path
 * @param {String} search Search parameters
 */


RestBase.get = function (_ref3) {
  var path = _ref3.path,
      search = _ref3.search,
      _ref3$customHeaders = _ref3.customHeaders,
      customHeaders = _ref3$customHeaders === void 0 ? {} : _ref3$customHeaders;
  return RestBase._request({
    path: path,
    search: search,
    customHeaders: customHeaders
  });
};
/**
 * Execute POST request
 * @param {String} path Relative path
 * @param {Object} body Request payload
 */


RestBase.post = function (_ref4) {
  var path = _ref4.path,
      body = _ref4.body,
      _ref4$customHeaders = _ref4.customHeaders,
      customHeaders = _ref4$customHeaders === void 0 ? {} : _ref4$customHeaders;
  var method = "POST";
  return RestBase._request({
    path: path,
    method: method,
    body: body,
    customHeaders: customHeaders
  });
};
/**
 * Execute PUT request
 * @param {String} path Relative path
 * @param {Object} body Request payload
 */


RestBase.put = function (_ref5) {
  var path = _ref5.path,
      body = _ref5.body,
      _ref5$customHeaders = _ref5.customHeaders,
      customHeaders = _ref5$customHeaders === void 0 ? {} : _ref5$customHeaders;
  var method = "PUT";
  return RestBase._request({
    path: path,
    method: method,
    body: body,
    customHeaders: customHeaders
  });
};
/**
 * Execute DELETE request
 * @param {String} path Relative path
 */


RestBase["delete"] = function (_ref6) {
  var path = _ref6.path,
      body = _ref6.body,
      _ref6$customHeaders = _ref6.customHeaders,
      customHeaders = _ref6$customHeaders === void 0 ? {} : _ref6$customHeaders;
  var method = "DELETE";
  return RestBase._request({
    path: path,
    method: method,
    body: body,
    customHeaders: customHeaders
  });
};
/**
 * Upload file to a specific Package
 * @param {String} packageName Package name
 * @param {String} key Key to insert in the package
 * @param {String} value Value of the key
 */


RestBase.upload = function (_ref7) {
  var packageName = _ref7.packageName,
      key = _ref7.key,
      value = _ref7.value,
      _ref7$customHeaders = _ref7.customHeaders,
      customHeaders = _ref7$customHeaders === void 0 ? {} : _ref7$customHeaders;
  var path = "upload/".concat(packageName, "/");
  var body = new FormData();
  body.append("name", key);
  body.append("data", value);
  return RestBase.post({
    path: path,
    body: body,
    customHeaders: customHeaders
  });
};
/**
 * Execute remote procedure call
 * @param {String} cbName Callback name
 * @param {String} func Function in the callback
 * @param {Object} args Args to pass to the function
 */


RestBase.cloudFunction = function (_ref8) {
  var cbName = _ref8.cbName,
      _ref8$func = _ref8.func,
      func = _ref8$func === void 0 ? "" : _ref8$func,
      args = _ref8.args,
      _ref8$customHeaders = _ref8.customHeaders,
      customHeaders = _ref8$customHeaders === void 0 ? {} : _ref8$customHeaders;
  var path = "function/".concat(cbName, "/");
  var body = {
    func: func,
    args: args
  };
  return RestBase.post({
    path: path,
    body: body,
    customHeaders: customHeaders
  }).then(function (response) {
    return response.json();
  });
};

RestBase.validScope = function (scope) {
  return ["global", "fleet"].includes(scope);
};

RestBase.validKey = function (key) {
  return key.split("@") >= 2;
};

RestBase.validateVar = function (key, scope) {
  var validators = [{
    fn: function fn(scope) {
      return RestBase.validScope(scope);
    },
    error: "Invalid scope"
  }, {
    fn: function fn(key) {
      return RestBase.validKey(key);
    },
    error: "Key format should be <robot name>@<key name>"
  }];
  validators.forEach(function (obj) {
    if (!obj.fn()) {
      throw new Error(obj.error);
    }
  });
};

RestBase.getVar = function (_ref9) {
  var key = _ref9.key,
      _ref9$scope = _ref9.scope,
      scope = _ref9$scope === void 0 ? "global" : _ref9$scope,
      _ref9$customHeaders = _ref9.customHeaders,
      customHeaders = _ref9$customHeaders === void 0 ? {} : _ref9$customHeaders;
  RestBase.validateVar(key, scope);
  var path = "v1/database/".concat(scope, "/").concat(key, "/");
  return RestBase.get({
    path: path,
    customHeaders: customHeaders
  }).then(function (response) {
    return response.json();
  });
};

RestBase.setVar = function (_ref10) {
  var key = _ref10.key,
      value = _ref10.value,
      _ref10$scope = _ref10.scope,
      scope = _ref10$scope === void 0 ? "global" : _ref10$scope,
      _ref10$customHeaders = _ref10.customHeaders,
      customHeaders = _ref10$customHeaders === void 0 ? {} : _ref10$customHeaders;
  RestBase.validateVar(key, scope);
  var path = "v1/database/";
  var body = {
    key: key,
    scope: scope,
    value: value
  };
  return RestBase.post({
    path: path,
    body: body,
    customHeaders: customHeaders
  }).then(function (response) {
    return response.json();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (RestBase);

/***/ }),

/***/ "./src/Rest/WithAuth.js":
/*!******************************!*\
  !*** ./src/Rest/WithAuth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "@babel/runtime/helpers/esm/defineProperty");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Authentication/Authentication */ "./src/Authentication/Authentication.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var checkLogin = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_1__["default"].checkLogin,
    AuthException = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_1__["default"].AuthException,
    getToken = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_1__["default"].getToken;

var withAuth = function withAuth(obj) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var handler = {
    __checkLogin: function __checkLogin(target, prop) {
      return function (args) {
        return checkLogin().then(function (res) {
          // check login error
          if (!res) {
            throw new AuthException("Login error");
          } // inject authorization headers


          var customHeaders = {
            "Content-Type": "application/json",
            Authorization: "Bearer ".concat(getToken())
          }; // return the original call with custom headers and original arguments

          return Reflect.get(target, prop)(_objectSpread({
            customHeaders: customHeaders
          }, args));
        });
      };
    },
    get: function get(target, prop) {
      return this.__checkLogin(target, prop);
    }
  };
  return new Proxy(Object.assign(obj, props), handler);
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./src/Snapshot/Snapshot.js":
/*!**********************************!*\
  !*** ./src/Snapshot/Snapshot.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rest_Rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Rest/Rest */ "./src/Rest/Rest.js");

var Snapshot = {};
/**
 * Create a snapshot from a specific document
 * @param {Object} target Object with the following params
 * @param {Object} source Object with the following params
 *  @param {String} workspace Target workspace where the document will be
 *  @param {String} type Type of the document
 *  @param {String} name Source name of the document
 *  @param {String} version Source version of the snapshot
 */

Snapshot._create = function (_ref) {
  var target = _ref.target,
      _ref$body = _ref.body,
      body = _ref$body === void 0 ? {} : _ref$body;
  var workspace = target.workspace,
      type = target.type,
      name = target.name,
      version = target.version;
  var path = "v2/db/".concat(workspace, "/").concat(type, "/").concat(name, "/").concat(version);
  return _Rest_Rest__WEBPACK_IMPORTED_MODULE_0__["default"].post({
    path: path,
    body: body
  });
};
/**
 * Create a snapshot from a specific document
 * @param {Object} target Object with the following params
 *  @param {String} workspace Target workspace where the document will be
 *  @param {String} type Type of the document
 *  @param {String} name Source name of the document
 *  @param {String} version Source version of the snapshot
 * @param {Object} body Document data
 */


Snapshot.create = function (_ref2) {
  var target = _ref2.target,
      _ref2$body = _ref2.body,
      body = _ref2$body === void 0 ? {} : _ref2$body;

  Snapshot._create({
    target: target,
    body: {
      data: body
    }
  });
};
/**
 * Create document by referencing an existing document
 * @param {Object} target Object with the following params
 * @param {Object} source Object with the following params
 *  @param {String} workspace Target workspace where the document will be
 *  @param {String} type Type of the document
 *  @param {String} name Source name of the document
 *  @param {String} version Source version of the snapshot
 */


Snapshot.createByRef = function (_ref3) {
  var target = _ref3.target,
      source = _ref3.source;
  var body = {
    src: "".concat(source.workspace, "/").concat(source.type, "/").concat(source.name, "/").concat(source.version)
  };
  return Snapshot._create({
    target: target,
    source: source,
    body: body
  });
};
/**
 * Delete a specific snapshot
 */


Snapshot["delete"] = function () {
  throw new Error("Not implemented");
};
/**
 * Get the data of a snapshot
 * @param {String} workspace Workspace to read from
 * @param {String} type Type of the document
 * @param {String} name Name of the snapshot
 * @param {String} version Version of the snapshot
 */


Snapshot.read = function (_ref4) {
  var workspace = _ref4.workspace,
      type = _ref4.type,
      name = _ref4.name,
      version = _ref4.version;
  var path = "v2/db/".concat(workspace, "/").concat(type, "/").concat(name, "/").concat(version);
  return _Rest_Rest__WEBPACK_IMPORTED_MODULE_0__["default"].get({
    path: path
  });
};
/**
 * Create document in the global workspace
 * @param {Object} target Object with the following params
 * @param {Object} source Object with the following params
 *  @param {String} workspace Target workspace where the document will be
 *  @param {String} type Type of the document
 *  @param {String} name Source name of the document
 *  @param {String} version Source version of the snapshot
 */


Snapshot.restore = function (_ref5) {
  var target = _ref5.target,
      source = _ref5.source;
  target.workspace = "global";
  return Snapshot.createByRef({
    target: target,
    source: source
  });
};
/**
 * Get all the snapshots of a document
 * @param {String} workspace Workspace to read from
 * @param {String} type Type of the document
 * @param {String} name Name of the document
 */


Snapshot.getAll = function (_ref6) {
  var workspace = _ref6.workspace,
      type = _ref6.type,
      name = _ref6.name;
  var path = "v2/db/".concat(workspace, "/").concat(type, "/").concat(name);
  return _Rest_Rest__WEBPACK_IMPORTED_MODULE_0__["default"].get({
    path: path
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Snapshot);

/***/ }),

/***/ "./src/Style/Style.js":
/*!****************************!*\
  !*** ./src/Style/Style.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_fonts_movai_woff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resources/fonts/movai.woff */ "./resources/fonts/movai.woff");

var Style = "\n@font-face {\n  font-family: 'mov.ai';\n  src: url(".concat(_resources_fonts_movai_woff__WEBPACK_IMPORTED_MODULE_0__["default"], ") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'mov.ai' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-AddGlobal:before {\n  content: \"\\e900\";\n}\n.icon-out:before {\n  content: \"\\e901\";\n}\n.icon-in:before {\n  content: \"\\e902\";\n}\n.icon-account_circle:before {\n  content: \"\\e903\";\n}\n.icon-data_setting:before {\n  content: \"\\e904\";\n}\n.icon-supervisor_account:before {\n  content: \"\\e905\";\n}\n.icon-add_box:before {\n  content: \"\\e906\";\n}\n.icon-time .path1:before {\n  content: \"\\e907\";\n  color: rgb(0, 178, 188);\n}\n.icon-time .path2:before {\n  content: \"\\e908\";\n  margin-left: -1em;\n  color: rgb(250, 250, 250);\n}\n.icon-carts .path1:before {\n  content: \"\\e909\";\n  color: rgb(0, 178, 188);\n}\n.icon-carts .path2:before {\n  content: \"\\e90a\";\n  margin-left: -1em;\n  color: rgb(250, 250, 250);\n}\n.icon-tree_24px:before {\n  content: \"\\e90b\";\n}\n.icon-expand_more_24px:before {\n  content: \"\\e90c\";\n}\n.icon-expand_less_24px:before {\n  content: \"\\e90d\";\n}\n.icon-chevron_right_24px:before {\n  content: \"\\e90e\";\n}\n.icon-chevron_left_24px:before {\n  content: \"\\e90f\";\n}\n.icon-Statistics:before {\n  content: \"\\e910\";\n}\n.icon-Scenes:before {\n  content: \"\\e911\";\n}\n.icon-Sad:before {\n  content: \"\\e912\";\n}\n.icon-Normal:before {\n  content: \"\\e913\";\n}\n.icon-Nodes:before {\n  content: \"\\e914\";\n}\n.icon-Layouts:before {\n  content: \"\\e915\";\n}\n.icon-Happy:before {\n  content: \"\\e916\";\n}\n.icon-Flows:before {\n  content: \"\\e917\";\n}\n.icon-Filters:before {\n  content: \"\\e918\";\n}\n.icon-Empty:before {\n  content: \"\\e919\";\n}\n.icon-Callbacks:before {\n  content: \"\\e91a\";\n}\n.icon-Annotations:before {\n  content: \"\\e91b\";\n}\n.icon-create_new_folder_24px:before {\n  content: \"\\e91c\";\n}\n.icon-widgets_24px:before {\n  content: \"\\e91d\";\n}\n.icon-log_24px:before {\n  content: \"\\e91e\";\n}\n.icon-outlined_hidden:before {\n  content: \"\\e91f\";\n}\n.icon-outlined:before {\n  content: \"\\e920\";\n}\n.icon-repeat:before {\n  content: \"\\e921\";\n  color: #2090b7;\n}\n.icon-edit:before {\n  content: \"\\e922\";\n  color: #2091b7;\n}\n.icon-download:before {\n  content: \"\\e923\";\n  color: #2091b7;\n}\n.icon-details_24px:before {\n  content: \"\\e924\";\n}\n.icon-delete:before {\n  content: \"\\e925\";\n  color: #2091b7;\n}\n.icon-check_circle_24px-copy:before {\n  content: \"\\e926\";\n}\n.icon-add:before {\n  content: \"\\e927\";\n  color: #2091b7;\n}\n.icon-drag_indicator-24px-3:before {\n  content: \"\\e928\";\n}\n");
/* harmony default export */ __webpack_exports__["default"] = (Style);

/***/ }),

/***/ "./src/UndoManager/UndoManager.js":
/*!****************************************!*\
  !*** ./src/UndoManager/UndoManager.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UndoManager; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "@babel/runtime/helpers/esm/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "@babel/runtime/helpers/esm/createClass");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__);



var UndoManager = /*#__PURE__*/function () {
  function UndoManager() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

    _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UndoManager);

    this.size = size;
    this.undoStack = new Queue(size);
    this.redoStack = new Queue(size);
  }

  _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UndoManager, [{
    key: "doIt",
    value: function doIt(undoAbleAction) {
      undoAbleAction.doAction();
      this.undoStack.push(undoAbleAction);
      this.redoStack = new Queue(this.size);
    }
  }, {
    key: "addIt",
    value: function addIt(undoAbleAction) {
      this.undoStack.push(undoAbleAction);
      this.redoStack = new Queue(this.size);
    }
  }, {
    key: "undo",
    value: function undo() {
      var undoAbleAction = this.undoStack.pop();

      if (undoAbleAction) {
        undoAbleAction.undoAction();
        this.redoStack.push(undoAbleAction);
      }
    }
  }, {
    key: "redo",
    value: function redo() {
      var undoAbleAction = this.redoStack.pop();

      if (undoAbleAction) {
        undoAbleAction.doAction();
        this.undoStack.push(undoAbleAction);
      }
    }
  }], [{
    key: "actionBuilder",
    value: function actionBuilder() {
      return new UndoAbleActionBuilder();
    }
  }]);

  return UndoManager;
}();



var UndoAbleActionBuilder = /*#__PURE__*/function () {
  function UndoAbleActionBuilder() {
    _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UndoAbleActionBuilder);

    this._doAction = null;
    this._undoAction = null;
  }

  _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UndoAbleActionBuilder, [{
    key: "doAction",
    value: function doAction(lambda) {
      this._doAction = lambda;
      return this;
    }
  }, {
    key: "undoAction",
    value: function undoAction(lambda) {
      this._undoAction = lambda;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      if ([this._undoAction, this._undoAction].some(function (x) {
        return x == null;
      })) throw "Forgot to set doAction or undoAction";
      return {
        doAction: this._doAction,
        undoAction: this._undoAction
      };
    }
  }]);

  return UndoAbleActionBuilder;
}();

var Queue = /*#__PURE__*/function () {
  function Queue() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

    _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Queue);

    this.size = size;
    this.queue = [];
  }

  _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Queue, [{
    key: "push",
    value: function push(el) {
      if (this.queue.length === this.size) {
        this.queue.shift();
      }

      this.queue.push(el);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.queue.pop();
    }
  }]);

  return Queue;
}();

/***/ }),

/***/ "./src/User/User.js":
/*!**************************!*\
  !*** ./src/User/User.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "@babel/runtime/helpers/esm/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "@babel/runtime/helpers/esm/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "@babel/runtime/helpers/esm/defineProperty");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Authentication/Authentication */ "./src/Authentication/Authentication.js");






var User = function User() {
  var _this = this;

  _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, User);

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "getData", function () {
    var headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer ".concat(_Authentication_Authentication__WEBPACK_IMPORTED_MODULE_4__["default"].getToken())
    };
    var name = _this.tokenData.message.name;
    var url = "".concat(_this.baseUrl, "/").concat(name, "/");
    return new Promise(function (resolve, reject) {
      var currTime = new Date().getTime(); // send cached value

      if (currTime - _this.timestamp <= _this.TIMEOUT && _this.data) {
        return resolve({
          response: _this.data
        });
      }

      _this.timestamp = currTime;
      fetch(url, {
        headers: headers
      }).then(function (response) {
        // request error
        if (!response.ok) {
          reject({
            error: response.statusText
          });
        } // parse response


        response.json().then(function (data) {
          _this.data = data;
          resolve({
            response: data
          });
        })["catch"](function (error) {
          _this.data = null;
          reject({
            error: error
          });
        });
      })["catch"](function (error) {
        // error while parsing request
        _this.data = null;
        reject({
          error: error
        });
      });
    });
  });

  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "isSuperUser", /*#__PURE__*/_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _data$response;

    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _this.getData();

          case 2:
            data = _context.sent;
            return _context.abrupt("return", (data === null || data === void 0 ? void 0 : (_data$response = data.response) === null || _data$response === void 0 ? void 0 : _data$response.Superuser) || false);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  this.baseUrl = "".concat(window.location.origin, "/api/v1/User");
  this.tokenData = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_4__["default"].getTokenData();
  this.data = null;
  this.timestamp = null;
  this.TIMEOUT = 3000; // milisec
};

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/Utils/Utils.js":
/*!****************************!*\
  !*** ./src/Utils/Utils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "@babel/runtime/helpers/esm/typeof");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var monet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! monet */ "monet");
/* harmony import */ var monet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(monet__WEBPACK_IMPORTED_MODULE_1__);


var Utils = {};

Utils.ofNull = function (x) {
  return monet__WEBPACK_IMPORTED_MODULE_1__["Maybe"].fromNull(x);
};

Utils.getter = function (prop) {
  return function (obj) {
    return obj[prop];
  };
};

Utils.dot = function (f) {
  return function (g) {
    return function (x) {
      return f(g(x));
    };
  };
};

Utils.maybeGet = function (prop) {
  return Utils.dot(Utils.ofNull)(Utils.getter(prop));
};

Utils.range = function (init, end) {
  var _Maybe$fromNull$map$o = monet__WEBPACK_IMPORTED_MODULE_1__["Maybe"].fromNull(end).map(function (x) {
    return {
      i: init,
      e: end
    };
  }).orSome({
    i: 0,
    e: init
  }),
      i = _Maybe$fromNull$map$o.i,
      e = _Maybe$fromNull$map$o.e;

  var ans = [];

  for (var j = i; j < e; j++) {
    ans.push(j);
  }

  return ans;
};

Utils.randomInt = function (a, b) {
  return Math.floor(Utils.random(a, b));
};

Utils.random = function (a, b) {
  var _Maybe$fromNull$map$o2 = monet__WEBPACK_IMPORTED_MODULE_1__["Maybe"].fromNull(b).map(function (x) {
    return {
      init: a,
      end: b
    };
  }).orSome({
    init: 0,
    end: a
  }),
      init = _Maybe$fromNull$map$o2.init,
      end = _Maybe$fromNull$map$o2.end;

  return init + (end - init) * Math.random();
};

Utils.normalizeStr = function (str) {
  // from https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};
/**
 *
 * @param {*} array
 * @param {*} groupFunction : function x => group class;
 *
 * Usage example:
 *
 * groupBy([1,2,3,4,5,6,7,8,9], x => x % 3) // {0: [3,6,9], 1:[1,4,7], 2:[2,5,8]}
 */


Utils.groupBy = function (array, groupFunction) {
  var ans = {};
  array.forEach(function (x) {
    var key = groupFunction(x);
    if (!ans[key]) ans[key] = [];
    ans[key].push(x);
  });
  return ans;
}; // From https://flaviocopes.com/how-to-uppercase-first-letter-javascript/


Utils.capitalize = function (s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
/**
 * Positive mod function
 */


Utils.mod = function (x, n) {
  return (x % n + n) % n;
};
/**
 * flatten an object
 * https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/flattenObject.md
 */


Utils.flattenObject = function (obj) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return Object.keys(obj).reduce(function (acc, k) {
    var pre = prefix.length ? prefix + "." : "";
    if (_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj[k]) === "object") Object.assign(acc, Utils.flattenObject(obj[k], pre + k));else acc[pre + k] = obj[k];
    return acc;
  }, {});
};

/* harmony default export */ __webpack_exports__["default"] = (Utils);

/***/ }),

/***/ "./src/Workspace/Workspace.js":
/*!************************************!*\
  !*** ./src/Workspace/Workspace.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rest_Rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Rest/Rest */ "./src/Rest/Rest.js");

var Workspace = {};

Workspace.create = function () {
  throw new Error("Not implemented");
};

Workspace["delete"] = function () {
  throw new Error("Not implemented");
};
/**
 * Get a list of all locally available workspaces
 */


Workspace.getAll = function () {
  var path = "v2/db";
  return _Rest_Rest__WEBPACK_IMPORTED_MODULE_0__["default"].get({
    path: path
  });
};
/**
 * Get all existing documents in a workspace
 * @param {String} workspace workspace to search
 * @param {String} type filter documents by type
 */


Workspace.getDocs = function (_ref) {
  var workspace = _ref.workspace,
      type = _ref.type;

  var _type = type ? "/".concat(type) : "";

  var path = "v2/db/".concat(workspace).concat(_type);
  return _Rest_Rest__WEBPACK_IMPORTED_MODULE_0__["default"].get({
    path: path
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Workspace);

/***/ }),

/***/ "@babel/runtime/helpers/esm/assertThisInitialized":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/assertThisInitialized" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/assertThisInitialized");

/***/ }),

/***/ "@babel/runtime/helpers/esm/asyncToGenerator":
/*!**************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/asyncToGenerator" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/esm/classCallCheck":
/*!************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/classCallCheck" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/esm/createClass":
/*!*********************************************************!*\
  !*** external "@babel/runtime/helpers/esm/createClass" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/esm/defineProperty":
/*!************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/defineProperty" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/esm/getPrototypeOf":
/*!************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/getPrototypeOf" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/esm/inherits":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/esm/inherits" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/esm/possibleConstructorReturn":
/*!***********************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/possibleConstructorReturn" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/esm/slicedToArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/esm/slicedToArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/esm/typeof":
/*!****************************************************!*\
  !*** external "@babel/runtime/helpers/esm/typeof" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/esm/typeof");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "monet":
/*!************************!*\
  !*** external "monet" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("monet");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map