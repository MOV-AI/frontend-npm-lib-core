(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Movai"] = factory();
	else
		root["Movai"] = factory();
})(global, function() {
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
/*! exports provided: Authentication, Utils, Database, MasterDB, AuthWebSocket, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Authentication_Authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Authentication/Authentication */ \"./src/Authentication/Authentication.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Authentication\", function() { return _src_Authentication_Authentication__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _src_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Utils/Utils */ \"./src/Utils/Utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Utils\", function() { return _src_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _src_Database_Database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Database/Database */ \"./src/Database/Database.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Database\", function() { return _src_Database_Database__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _src_Database_MasterDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Database/MasterDB */ \"./src/Database/MasterDB.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MasterDB\", function() { return _src_Database_MasterDB__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _src_AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/AuthWebSocket/AuthWebSocket */ \"./src/AuthWebSocket/AuthWebSocket.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AuthWebSocket\", function() { return _src_AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _src_Components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Components/Button */ \"./src/Components/Button.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _src_Components_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Movai/./index.js?");

/***/ }),

/***/ "./src/AuthWebSocket/AuthWebSocket.js":
/*!********************************************!*\
  !*** ./src/AuthWebSocket/AuthWebSocket.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AuthWebSocket; });\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-interval */ \"@babel/runtime-corejs3/core-js-stable/set-interval\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ \"@babel/runtime-corejs3/core-js-stable/instance/slice\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/url-search-params */ \"@babel/runtime-corejs3/core-js-stable/url-search-params\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/url */ \"@babel/runtime-corejs3/core-js-stable/url\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ \"@babel/runtime-corejs3/core-js-stable/set-timeout\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ \"@babel/runtime-corejs3/helpers/esm/classCallCheck\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/createClass */ \"@babel/runtime-corejs3/helpers/esm/createClass\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/defineProperty */ \"@babel/runtime-corejs3/helpers/esm/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Authentication/Authentication */ \"./src/Authentication/Authentication.js\");\n\n\n\n\n\n\n\n\n\nvar checkLogin = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_8__[\"default\"].checkLogin,\n    getToken = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getToken,\n    AuthException = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_8__[\"default\"].AuthException;\n\nvar AuthWebSocket =\n/*#__PURE__*/\nfunction () {\n  function AuthWebSocket(_ref) {\n    var _this = this;\n\n    var _ref$url = _ref.url,\n        url = _ref$url === void 0 ? this.wsUrl : _ref$url,\n        _ref$onOpen = _ref.onOpen,\n        onOpen = _ref$onOpen === void 0 ? null : _ref$onOpen,\n        _ref$onClose = _ref.onClose,\n        onClose = _ref$onClose === void 0 ? null : _ref$onClose,\n        _ref$onError = _ref.onError,\n        onError = _ref$onError === void 0 ? null : _ref$onError,\n        _ref$onMessage = _ref.onMessage,\n        onMessage = _ref$onMessage === void 0 ? null : _ref$onMessage,\n        _ref$connectionHandle = _ref.connectionHandler,\n        connectionHandler = _ref$connectionHandle === void 0 ? null : _ref$connectionHandle;\n\n    _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, AuthWebSocket);\n\n    _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(this, \"_onOpen\", function (evt) {\n      console.log(\"Socket Open: \", evt);\n    });\n\n    _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(this, \"_onClose\", function (evt) {\n      console.log(\"Socket Close: \", evt);\n      _this.connected = false; // Deal with reconnecting the socket\n\n      _this.socket = null;\n\n      if (_this.timerId) {\n        clearTimeout(_this.timerId);\n      }\n\n      _this.timerId = _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_4___default()(function () {\n        _this.createSocket();\n      }, 5000);\n    });\n\n    _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(this, \"_onError\", function (evt) {\n      _this.connected = false;\n      console.log(\"Socket Error: \", evt);\n    });\n\n    _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(this, \"_onMessage\", function (evt) {\n      console.log(\"Socket Message: \", evt);\n    });\n\n    _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(this, \"_connectionHandler\", function (value) {\n      console.log(\"Invalid Token, no handler specified! \", value);\n    });\n\n    this.onOpen = onOpen === null ? this._onOpen : onOpen;\n    this.onClose = onClose === null ? this._onClose : onClose;\n    this.onError = onError === null ? this._onError : onError;\n    this.onMessage = onMessage === null ? this._onMessage : onMessage;\n    this.connectionHandler = connectionHandler === null ? this._connectionHandler : connectionHandler;\n    this.wsUrl = url;\n    this.socket = false;\n    this.timerId = false;\n    this.connected = false;\n  }\n\n  _babel_runtime_corejs3_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6___default()(AuthWebSocket, [{\n    key: \"createSocket\",\n    value: function createSocket() {\n      var _this2 = this;\n\n      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var sock = false;\n      checkLogin().then(function (res) {\n        var _context;\n\n        if (!res) {\n          throw new AuthException(\"login error\");\n        }\n\n        url = url !== false ? url : _this2.wsUrl; //const wsUrl = `${url}?token=${getToken()}`;\n\n        var wsUrl = new _babel_runtime_corejs3_core_js_stable_url__WEBPACK_IMPORTED_MODULE_3___default.a(url);\n        var params = new _babel_runtime_corejs3_core_js_stable_url_search_params__WEBPACK_IMPORTED_MODULE_2___default.a(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(_context = wsUrl.search).call(_context, 1));\n        params.set(\"token\", getToken());\n        wsUrl.search = params;\n        sock = new WebSocket(wsUrl.toString());\n        sock.onopen = _this2.onOpen;\n        sock.onerror = _this2.onError;\n        sock.onclose = _this2.onClose;\n        sock.onmessage = _this2.onMessage;\n        _this2.socket = sock;\n      })[\"catch\"](function (e) {\n        if (e.name === \"AuthException\") {\n          _this2.connectionHandler(false);\n        }\n      });\n    }\n  }, {\n    key: \"send\",\n    value: function send(data) {\n      var _this3 = this;\n\n      checkLogin().then(function (res) {\n        if (!res) {\n          throw new AuthException(\"login error\");\n        }\n\n        _this3.socket.send(data);\n      })[\"catch\"](function (e) {\n        switch (e.name) {\n          case \"AuthException\":\n            _this3.connectionHandler(false);\n\n            break;\n\n          case \"InvalidStateError\":\n            // In case of the socket is not-ready, re-try sending the message until success\n            var self = _this3;\n            var sub_interval = undefined;\n            sub_interval = _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n              if (self.socket.readyState === 1) {\n                clearInterval(sub_interval);\n                self.socket.send(data);\n              }\n            }, 400, sub_interval);\n            break;\n        }\n      });\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      if (this.socket) {\n        this.socket.close();\n        clearTimeout(this.timerId);\n        this.connected = false;\n      }\n    }\n  }]);\n\n  return AuthWebSocket;\n}();\n\n\n\n//# sourceURL=webpack://Movai/./src/AuthWebSocket/AuthWebSocket.js?");

/***/ }),

/***/ "./src/Authentication/Authentication.js":
/*!**********************************************!*\
  !*** ./src/Authentication/Authentication.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"@babel/runtime-corejs3/regenerator\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ \"@babel/runtime-corejs3/core-js-stable/json/stringify\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ \"@babel/runtime-corejs3/helpers/esm/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _context;\n\n\nvar REST_API = window.location.port === \"\" ? \"http://\".concat(window.location.hostname) : _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_3___default()(_context = \"http://\".concat(window.location.hostname, \":\")).call(_context, window.location.port);\nvar Authentication = {};\n\nAuthentication.AuthException = function (message) {\n  this.message = message;\n  this.name = \"AuthException\";\n};\n\nAuthentication.getToken = function () {\n  var token = window.localStorage.getItem(\"movai.token\");\n  return token ? token : false;\n};\n\nAuthentication.getRefreshToken = function () {\n  var refreshToken = window.localStorage.getItem(\"movai.refreshToken\");\n  return refreshToken ? refreshToken : false;\n};\n\nAuthentication.getTokenData = function () {\n  var token = getToken();\n  var message = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token).message;\n  var tokenData = {\n    message: message,\n    auth_token: false,\n    refresh_token: getRefreshToken(),\n    error: false,\n    access_token: token\n  };\n  return tokenData;\n};\n\nAuthentication.login =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(username, password, remember) {\n    var headers, url, response, status, data;\n    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            // Cleanup...\n            window.localStorage.removeItem(\"movai.token\");\n            window.localStorage.removeItem(\"movai.refreshToken\");\n            window.localStorage.removeItem(\"movai.tokenRemember\");\n            window.sessionStorage.removeItem(\"movai.session\");\n            headers = {};\n            headers[\"Content-Type\"] = \"application/json\";\n            url = \"\".concat(REST_API, \"/token-auth/\");\n            _context2.prev = 7;\n            _context2.next = 10;\n            return fetch(url, {\n              method: \"POST\",\n              headers: headers,\n              body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({\n                username: username,\n                password: password,\n                remember: remember\n              })\n            });\n\n          case 10:\n            response = _context2.sent;\n            status = response.status;\n            _context2.next = 14;\n            return response.json();\n\n          case 14:\n            data = _context2.sent;\n\n            if (status === 200) {\n              window.localStorage.setItem(\"movai.token\", data[\"access_token\"]);\n              window.localStorage.setItem(\"movai.refreshToken\", data[\"refresh_token\"]);\n              window.localStorage.setItem(\"movai.tokenRemember\", remember == \"undefined\" ? false : remember);\n              window.sessionStorage.setItem(\"movai.session\", true);\n            }\n\n            return _context2.abrupt(\"return\", data);\n\n          case 19:\n            _context2.prev = 19;\n            _context2.t0 = _context2[\"catch\"](7);\n            throw _context2.t0;\n\n          case 22:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee, null, [[7, 19]]);\n  }));\n\n  return function (_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nAuthentication.logout = function () {\n  window.localStorage.removeItem(\"movai.token\");\n  window.localStorage.removeItem(\"movai.refreshToken\");\n  window.localStorage.removeItem(\"movai.tokenRemember\");\n  window.sessionStorage.removeItem(\"movai.session\");\n};\n\nAuthentication.checkLogin =\n/*#__PURE__*/\n_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n/*#__PURE__*/\n_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n  var token, refreshToken, tokenRemember, sessionFlag, tokenData, refreshTokenData, url, headers, response, status, data;\n  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          token = window.localStorage.getItem(\"movai.token\");\n          refreshToken = window.localStorage.getItem(\"movai.refreshToken\");\n          tokenRemember = window.localStorage.getItem(\"movai.tokenRemember\");\n          sessionFlag = window.sessionStorage.getItem(\"movai.session\");\n\n          if (!(token === null || refreshToken === null)) {\n            _context3.next = 6;\n            break;\n          }\n\n          return _context3.abrupt(\"return\", false);\n\n        case 6:\n          tokenData = null;\n          _context3.prev = 7;\n          tokenData = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);\n          _context3.next = 14;\n          break;\n\n        case 11:\n          _context3.prev = 11;\n          _context3.t0 = _context3[\"catch\"](7);\n          return _context3.abrupt(\"return\", false);\n\n        case 14:\n          if (!(tokenData[\"exp\"] > new Date().getTime() / 1000)) {\n            _context3.next = 16;\n            break;\n          }\n\n          return _context3.abrupt(\"return\", true);\n\n        case 16:\n          if (!(tokenRemember == \"false\" && sessionFlag === null)) {\n            _context3.next = 19;\n            break;\n          }\n\n          logout();\n          return _context3.abrupt(\"return\", false);\n\n        case 19:\n          if (!refreshToken) {\n            _context3.next = 41;\n            break;\n          }\n\n          _context3.prev = 20;\n          // Refresh Token\n          refreshTokenData = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(refreshToken);\n\n          if (!(refreshTokenData[\"exp\"] < new Date().getTime() / 1000)) {\n            _context3.next = 24;\n            break;\n          }\n\n          throw \"refresh token has expired\";\n\n        case 24:\n          url = \"\".concat(REST_API, \"/token-refresh/\");\n          headers = {\n            \"Content-Type\": \"application/json\"\n          };\n          _context3.next = 28;\n          return fetch(url, {\n            method: \"POST\",\n            headers: headers,\n            body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({\n              token: refreshToken\n            })\n          });\n\n        case 28:\n          response = _context3.sent;\n          status = response.status;\n          _context3.next = 32;\n          return response.json();\n\n        case 32:\n          data = _context3.sent;\n\n          if (!(status === 200)) {\n            _context3.next = 37;\n            break;\n          }\n\n          window.localStorage.setItem(\"movai.token\", data[\"access_token\"]);\n          window.localStorage.setItem(\"movai.refreshToken\", data[\"refresh_token\"]);\n          return _context3.abrupt(\"return\", true);\n\n        case 37:\n          _context3.next = 41;\n          break;\n\n        case 39:\n          _context3.prev = 39;\n          _context3.t1 = _context3[\"catch\"](20);\n\n        case 41:\n          return _context3.abrupt(\"return\", false);\n\n        case 42:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _callee2, null, [[7, 11], [20, 39]]);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Authentication);\n\n//# sourceURL=webpack://Movai/./src/Authentication/Authentication.js?");

/***/ }),

/***/ "./src/Components/Button.js":
/*!**********************************!*\
  !*** ./src/Components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Button = function Button(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: props.className,\n    onClick: props.onClick,\n    color: props.color,\n    variant: props.variant,\n    size: props.size\n  }, props.children);\n};\n\nButton.propTypes = {\n  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,\n  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  variant: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired\n};\nButton.defaultProps = {\n  onClick: function onClick() {\n    return console.log(\"Click MOV.AI button\");\n  },\n  color: \"default\",\n  // default, inherit, primary or secondary\n  variant: \"contained\",\n  // text, outlined, contained\n  size: \"medium\",\n  // small, medium, large\n  children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null)\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack://Movai/./src/Components/Button.js?");

/***/ }),

/***/ "./src/Database/Database.js":
/*!**********************************!*\
  !*** ./src/Database/Database.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ \"@babel/runtime-corejs3/core-js-stable/promise\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ \"@babel/runtime-corejs3/core-js-stable/json/stringify\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"@babel/runtime-corejs3/core-js-stable/instance/map\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ \"@babel/runtime-corejs3/core-js-stable/instance/includes\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ \"@babel/runtime-corejs3/helpers/esm/classCallCheck\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/defineProperty */ \"@babel/runtime-corejs3/helpers/esm/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Authentication/Authentication */ \"./src/Authentication/Authentication.js\");\n/* harmony import */ var _AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../AuthWebSocket/AuthWebSocket */ \"./src/AuthWebSocket/AuthWebSocket.js\");\n\n\n\n\n\n\n\n\n\nvar getToken = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getToken,\n    AuthException = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_7__[\"default\"].AuthException,\n    checkLogin = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_7__[\"default\"].checkLogin;\n\nvar Database = function Database() {\n  var _this = this,\n      _context5;\n\n  _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Database);\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"connect\", function () {\n    _this.websocket = new _AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n      url: _this.WS_API,\n      onOpen: _this.onOpen,\n      onClose: _this.onClose,\n      onError: _this.onError,\n      onMessage: _this.onMessage,\n      connectionHandler: null\n    });\n\n    _this.websocket.createSocket();\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"onOpen\", function (evt) {\n    _this.dispatch(\"onopen\", undefined);\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"onClose\", function (evt) {\n    _this.dispatch(\"onclose\", undefined);\n\n    if (evt.code !== 1000) {\n      window.setTimeout(_this.connect(), _this.timeout);\n    }\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"onMessage\", function (evt) {\n    var _context;\n\n    var data;\n\n    try {\n      data = JSON.parse(evt.data);\n    } catch (err) {\n      console.error(err);\n      return;\n    }\n\n    if (data.error) {\n      console.error(data.error);\n      return;\n    }\n\n    var patterns = data.patterns;\n    var is_pattern = true;\n    var one_shot = false;\n\n    if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4___default()(_context = [\"list\", \"unsubscribe\", \"subscribe\"]).call(_context, data.event)) {\n      patterns = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(patterns).call(patterns, function (p) {\n        if (data.event === \"unsubscribe\") {\n          delete _this.callbacks[_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(p)];\n        }\n\n        return data.event + \"/\" + _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(p);\n      });\n\n      if (data.event === \"list\") {\n        patterns = [\"list\"];\n      }\n\n      is_pattern = false;\n      one_shot = true;\n    }\n\n    _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(patterns).call(patterns, function (pattern) {\n      _this.dispatch(pattern, data, is_pattern, one_shot);\n    });\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"checkTest\", function (pattern, data, is_pattern, one_shot) {\n    return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {\n      _this.dispatch(pattern, data, is_pattern, one_shot);\n\n      if (true) {\n        resolve(\"DONE\");\n      }\n    });\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"onError\", function (evt) {\n    _this.dispatch(\"onerror\", undefined);\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"onEvent\", function (event_name) {\n    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    _this.evt_callbacks[event_name] = _this.evt_callbacks[event_name] || [];\n\n    _this.evt_callbacks[event_name].push(callback);\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"close\", function () {\n    return _this.websocket.close();\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"subscribe\", function (_pattern) {\n    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    var evt_callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var message = {\n      event: \"subscribe\",\n      pattern: _pattern\n    };\n\n    var pattern = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_pattern);\n\n    _this.callbacks[pattern] = _this.callbacks[pattern] || [];\n\n    _this.callbacks[pattern].push(callback);\n\n    if (evt_callback) {\n      _this.evt_callbacks[\"subscribe/\" + pattern] = _this.evt_callbacks[\"subscribe\" + pattern] || [];\n\n      _this.evt_callbacks[\"subscribe/\" + pattern].push(evt_callback);\n    }\n\n    _this._send(message);\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"unsubscribe\", function (_pattern) {\n    var evt_callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    console.log(\"Unsubscribe called \" + _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_pattern));\n    var message = {\n      event: \"unsubscribe\",\n      pattern: _pattern\n    };\n\n    var pattern = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_pattern);\n\n    if (evt_callback) {\n      _this.evt_callbacks[\"unsubscribe/\" + pattern] = _this.evt_callbacks[\"unsubscribe/\" + pattern] || [];\n\n      _this.evt_callbacks[\"unsubscribe/\" + pattern].push(evt_callback);\n    }\n\n    _this._send(message);\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"list\", function () {\n    var evt_callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;\n    var message = {\n      event: \"list\"\n    };\n    _this.evt_callbacks[\"list\"] = _this.evt_callbacks[\"list\"] || [];\n\n    _this.evt_callbacks[\"list\"].push(evt_callback);\n\n    _this._send(message);\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"_send\", function (message) {\n    _this.websocket.send(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(message));\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"dispatch\", function (_pattern, message) {\n    var is_pattern = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    var one_shot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n    /*if is_pattern is false then pattern is an event thus trigger evt_callbacks */\n    var _callbacks = undefined;\n    var pattern = _pattern;\n\n    if (is_pattern === true) {\n      pattern = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_pattern);\n      _callbacks = _this.callbacks[pattern];\n    } else {\n      _callbacks = _this.evt_callbacks[pattern];\n    }\n\n    if (_callbacks === undefined) return;\n\n    for (var i = 0; i < _callbacks.length; i++) {\n      if (typeof _callbacks[i] === \"function\") {\n        _callbacks[i](message);\n      }\n    }\n\n    if (_callbacks) {\n      if (one_shot === true) {\n        _callbacks = [];\n      } else {//NOTHING\n      }\n    }\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"getVar\", function (key) {\n    var _context2;\n\n    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"global\";\n\n    if (!_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = [\"global\", \"fleet\"]).call(_context2, scope)) {\n      throw \"Only fleet and global scopes available.\";\n    }\n\n    if (scope === \"fleet\") {\n      // key format: robot_name@key_name\n      if (key.split(\"@\").length < 2) {\n        throw \"Wrong key format (robot_name@key_name)\";\n      }\n    }\n\n    var url = _this.REST_API + \"Var/\" + scope + \"/\" + key + \"/\";\n    checkLogin().then(function (res) {\n      fetch(url).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        if (callback) {\n          callback(data);\n        } else {//NOTHING\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"setVar\", function (key, value) {\n    var _context3;\n\n    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"global\";\n\n    if (!_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4___default()(_context3 = [\"global\", \"fleet\"]).call(_context3, scope)) {\n      throw \"Only fleet and global scopes available.\";\n    }\n\n    if (scope === \"fleet\") {\n      // key format: robot_name@key_name\n      var values = key.split(\"@\");\n\n      if (key.split(\"@\").length < 2) {\n        throw \"Wrong key format (robot_name@key_name)\";\n      }\n    }\n\n    var data = {\n      key: key,\n      scope: scope,\n      value: value\n    };\n    var url = _this.REST_API + \"Var/\";\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(data),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          callback(res);\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"post\", function (scope, name, key, value) {\n    var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n    }\n\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({\n          key: key,\n          data: value\n        }),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          });\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"upload\", function (packageName, key, value) {\n    var _context4;\n\n    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n\n    var url = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context4 = \"\".concat(_this.REST_API, \"upload/\")).call(_context4, packageName, \"/\");\n\n    var formData = new FormData();\n    formData.append(\"name\", key);\n    formData.append(\"data\", value);\n    fetch(url, {\n      method: \"POST\",\n      body: formData\n    }).then(function (res) {\n      return res.json();\n    }).then(callback);\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"put\", function (scope, name, value) {\n    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n    console.log(\"database put\", url);\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n    }\n\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"PUT\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(value),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          })[\"catch\"](function (e) {\n            callback(undefined, res);\n\n            if (true) {\n              alert(\"Development Mode \\n\" + \"Status: \" + res.status + \"\\n\" + \"Error: \" + res.statusText);\n            }\n          });\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"delete\", function (scope, name) {\n    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n      return;\n    }\n\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"DELETE\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(data),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          })[\"catch\"](function (e) {\n            callback(undefined, res);\n\n            if (true) {\n              alert(\"Development Mode \\n\" + \"Status: \" + res.status + \"\\n\" + \"Error: \" + res.statusText);\n            }\n          });\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"cloudFunction\", function (cloudFunction) {\n    var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    var args = arguments.length > 2 ? arguments[2] : undefined;\n    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      var url = _this.REST_API + \"function/\" + cloudFunction + \"/\";\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({\n          func: func,\n          args: args\n        }),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            return callback(data);\n          });\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(this, \"postTabs\", function (name, value) {\n    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var scope = \"User\";\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n      return;\n    }\n\n    var newValue = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(value).call(value, function (obj) {\n      return {\n        componentName: obj.componentName,\n        name: obj.name\n      };\n    });\n\n    var key_workspace = {\n      Workspace: \"*\"\n    };\n    checkLogin().then(function (res) {\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({\n          key: key_workspace,\n          data: newValue\n        }),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          })[\"catch\"](function (e) {\n            callback(undefined, res);\n\n            if (true) {\n              alert(\"Development Mode \\n\" + \"Status: \" + res.status + \"\\n\" + \"Error: \" + res.statusText);\n            }\n          });\n        }\n      });\n    });\n  });\n\n  this.host = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_0___default()(_context5 = \"\".concat(window.location.hostname, \":\")).call(_context5, window.location.port);\n  this.WS_API = \"ws://\" + this.host + \"/ws/subscriber\";\n  this.REST_API = \"http://\" + this.host + \"/api/v1/\";\n  this.callbacks = {};\n  this.evt_callbacks = {};\n  this.timeout = 3000;\n  this.websocket = undefined;\n  this.connect();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Database);\n\n//# sourceURL=webpack://Movai/./src/Database/Database.js?");

/***/ }),

/***/ "./src/Database/MasterDB.js":
/*!**********************************!*\
  !*** ./src/Database/MasterDB.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ \"@babel/runtime-corejs3/helpers/esm/classCallCheck\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/defineProperty */ \"@babel/runtime-corejs3/helpers/esm/defineProperty\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Database */ \"./src/Database/Database.js\");\n\n\n\n/**\n * A Database singleton\n */\n\nvar MasterDB = function MasterDB() {\n  _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MasterDB);\n\n  if (instance) return instance;\n  instance = this;\n  this.db = new _Database__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n}; // private instance\n\n\n_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MasterDB, \"subscribe\", function (pattern) {\n  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n  var evtCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n  new MasterDB().db.subscribe(pattern, callback, evtCallback);\n});\n\n_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MasterDB, \"unsubscribe\", function (pattern) {\n  var evtCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n  new MasterDB().db.unsubscribe(pattern, evtCallback);\n});\n\n_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MasterDB, \"list\", function () {\n  var evtCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;\n  new MasterDB().db.list(evtCallback);\n});\n\n_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MasterDB, \"post\", function (scope, name, key, value) {\n  var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;\n  new MasterDB().db.post(scope, name, key, value, callback);\n});\n\n_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MasterDB, \"upload\", function (packageName, key, value) {\n  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n  new MasterDB().db.post(packageName, key, value, callback);\n});\n\n_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MasterDB, \"put\", function (scope, name, value) {\n  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n  new MasterDB().db.put(scope, name, value, callback);\n});\n\n_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MasterDB, \"delete\", function (scope, name) {\n  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n  new MasterDB().db[\"delete\"](scope, name, callback, data);\n});\n\n_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MasterDB, \"cloudFunction\", function (cloudFunction) {\n  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  var args = arguments.length > 2 ? arguments[2] : undefined;\n  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n  new MasterDB().db.cloudFunction(cloudFunction, func, args, callback);\n});\n\n_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MasterDB, \"getVar\", function (key) {\n  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"global\";\n  new MasterDB().db.getVar(key, callback, scope);\n});\n\n_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(MasterDB, \"setVar\", function (key, value) {\n  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n  var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"global\";\n  new MasterDB().db.setVar(key, value, callback, scope);\n});\n\nvar instance = null;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MasterDB);\n\n//# sourceURL=webpack://Movai/./src/Database/MasterDB.js?");

/***/ }),

/***/ "./src/Utils/Utils.js":
/*!****************************!*\
  !*** ./src/Utils/Utils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"@babel/runtime-corejs3/core-js-stable/instance/map\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var monet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! monet */ \"monet\");\n/* harmony import */ var monet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(monet__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar Utils = {};\n\nUtils.ofNull = function (x) {\n  return monet__WEBPACK_IMPORTED_MODULE_2__[\"Maybe\"].fromNull(x);\n};\n\nUtils.range = function (init, end) {\n  var _context;\n\n  var _Maybe$fromNull$map$o = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context = monet__WEBPACK_IMPORTED_MODULE_2__[\"Maybe\"].fromNull(end)).call(_context, function (x) {\n    return {\n      i: init,\n      e: end\n    };\n  }).orSome({\n    i: 0,\n    e: init\n  }),\n      i = _Maybe$fromNull$map$o.i,\n      e = _Maybe$fromNull$map$o.e;\n\n  var ans = [];\n\n  for (var j = i; j < e; j++) {\n    ans.push(j);\n  }\n\n  return ans;\n};\n\nUtils.randomInt = function (a, b) {\n  return Math.floor(Utils.random(a, b));\n};\n\nUtils.random = function (a, b) {\n  var _context2;\n\n  var _Maybe$fromNull$map$o2 = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = monet__WEBPACK_IMPORTED_MODULE_2__[\"Maybe\"].fromNull(b)).call(_context2, function (x) {\n    return {\n      init: a,\n      end: b\n    };\n  }).orSome({\n    init: 0,\n    end: a\n  }),\n      init = _Maybe$fromNull$map$o2.init,\n      end = _Maybe$fromNull$map$o2.end;\n\n  return init + (end - init) * Math.random();\n};\n\nUtils.normalizeStr = function (str) {\n  // from https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript\n  return str.normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").toLowerCase();\n};\n/**\n *\n * @param {*} array\n * @param {*} groupFunction : function x => group class;\n *\n * Usage example:\n *\n * groupBy([1,2,3,4,5,6,7,8,9], x => x % 3) // {0: [3,6,9], 1:[1,4,7], 2:[2,5,8]}\n */\n\n\nUtils.groupBy = function (array, groupFunction) {\n  var ans = {};\n\n  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(array).call(array, function (x) {\n    var key = groupFunction(x);\n    if (!ans[key]) ans[key] = [];\n    ans[key].push(x);\n  });\n\n  return ans;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utils);\n\n//# sourceURL=webpack://Movai/./src/Utils/Utils.js?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/concat":
/*!************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/concat" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/concat\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/core-js-stable/instance/concat%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/for-each":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/for-each" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/for-each\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/core-js-stable/instance/for-each%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/includes":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/includes" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/includes\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/core-js-stable/instance/includes%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/map":
/*!*********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/map" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/map\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/core-js-stable/instance/map%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/instance/slice":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/instance/slice" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/instance/slice\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/core-js-stable/instance/slice%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/json/stringify":
/*!***********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/json/stringify" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/json/stringify\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/core-js-stable/json/stringify%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/promise":
/*!****************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/promise" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/promise\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/core-js-stable/promise%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/set-interval":
/*!*********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/set-interval" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/set-interval\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/core-js-stable/set-interval%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/set-timeout":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/set-timeout" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/set-timeout\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/core-js-stable/set-timeout%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/url":
/*!************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/url" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/url\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/core-js-stable/url%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/core-js-stable/url-search-params":
/*!**************************************************************************!*\
  !*** external "@babel/runtime-corejs3/core-js-stable/url-search-params" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/core-js-stable/url-search-params\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/core-js-stable/url-search-params%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/esm/asyncToGenerator":
/*!**********************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/esm/asyncToGenerator" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/esm/asyncToGenerator\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/helpers/esm/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/esm/classCallCheck":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/esm/classCallCheck" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/esm/classCallCheck\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/helpers/esm/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/esm/createClass":
/*!*****************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/esm/createClass" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/esm/createClass\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/helpers/esm/createClass%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/helpers/esm/defineProperty":
/*!********************************************************************!*\
  !*** external "@babel/runtime-corejs3/helpers/esm/defineProperty" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/helpers/esm/defineProperty\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/helpers/esm/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime-corejs3/regenerator":
/*!*****************************************************!*\
  !*** external "@babel/runtime-corejs3/regenerator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime-corejs3/regenerator\");\n\n//# sourceURL=webpack://Movai/external_%22@babel/runtime-corejs3/regenerator%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack://Movai/external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jwt-decode\");\n\n//# sourceURL=webpack://Movai/external_%22jwt-decode%22?");

/***/ }),

/***/ "monet":
/*!************************!*\
  !*** external "monet" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"monet\");\n\n//# sourceURL=webpack://Movai/external_%22monet%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack://Movai/external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack://Movai/external_%22react%22?");

/***/ })

/******/ });
});