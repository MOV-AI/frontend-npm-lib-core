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
/*! exports provided: Authentication, Utils, Database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Authentication_Authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Authentication/Authentication */ \"./src/Authentication/Authentication.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Authentication\", function() { return _src_Authentication_Authentication__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _src_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Utils/Utils */ \"./src/Utils/Utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Utils\", function() { return _src_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _src_Database_Database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Database/Database */ \"./src/Database/Database.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Database\", function() { return _src_Database_Database__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack://Movai/./index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ \"./node_modules/core-js/library/fn/json/stringify.js\");\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ \"./node_modules/core-js/library/fn/object/define-property.js\");\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/promise */ \"./node_modules/core-js/library/fn/promise.js\");\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs2/core-js/promise.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js\");\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    _Object$defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs2/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });\nmodule.exports = function stringify(it) { // eslint-disable-line no-unused-vars\n  return $JSON.stringify.apply($JSON, arguments);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/fn/json/stringify.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es6.object.define-property */ \"./node_modules/core-js/library/modules/es6.object.define-property.js\");\nvar $Object = __webpack_require__(/*! ../../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Object;\nmodule.exports = function defineProperty(it, key, desc) {\n  return $Object.defineProperty(it, key, desc);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/fn/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/es6.object.to-string */ \"./node_modules/core-js/library/modules/es6.object.to-string.js\");\n__webpack_require__(/*! ../modules/es6.string.iterator */ \"./node_modules/core-js/library/modules/es6.string.iterator.js\");\n__webpack_require__(/*! ../modules/web.dom.iterable */ \"./node_modules/core-js/library/modules/web.dom.iterable.js\");\n__webpack_require__(/*! ../modules/es6.promise */ \"./node_modules/core-js/library/modules/es6.promise.js\");\n__webpack_require__(/*! ../modules/es7.promise.finally */ \"./node_modules/core-js/library/modules/es7.promise.finally.js\");\n__webpack_require__(/*! ../modules/es7.promise.try */ \"./node_modules/core-js/library/modules/es7.promise.try.js\");\nmodule.exports = __webpack_require__(/*! ../modules/_core */ \"./node_modules/core-js/library/modules/_core.js\").Promise;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/fn/promise.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') throw TypeError(it + ' is not a function!');\n  return it;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name, forbiddenField) {\n  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {\n    throw TypeError(name + ': incorrect invocation!');\n  } return it;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nmodule.exports = function (it) {\n  if (!isObject(it)) throw TypeError(it + ' is not an object!');\n  return it;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// false -> Array#indexOf\n// true  -> Array#includes\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ \"./node_modules/core-js/library/modules/_to-absolute-index.js\");\nmodule.exports = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {\n      if (O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// getting tag from 19.1.3.6 Object.prototype.toString()\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n// ES3 wrong here\nvar ARG = cof(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (e) { /* empty */ }\n};\n\nmodule.exports = function (it) {\n  var O, T, B;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T\n    // builtinTag case\n    : ARG ? cof(O)\n    // ES3 arguments fallback\n    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_classof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_cof.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var core = module.exports = { version: '2.6.10' };\nif (typeof __e == 'number') __e = core; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_core.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// optional / simple context binding\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_ctx.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.2.1 RequireObjectCoercible(argument)\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on  \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_defined.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Thank's IE8 for his funny defineProperty\nmodule.exports = !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\n// typeof document.createElement is 'object' in old IE\nvar is = isObject(document) && isObject(document.createElement);\nmodule.exports = function (it) {\n  return is ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_dom-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE 8- don't enum bug keys\nmodule.exports = (\n  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'\n).split(',');\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar PROTOTYPE = 'prototype';\n\nvar $export = function (type, name, source) {\n  var IS_FORCED = type & $export.F;\n  var IS_GLOBAL = type & $export.G;\n  var IS_STATIC = type & $export.S;\n  var IS_PROTO = type & $export.P;\n  var IS_BIND = type & $export.B;\n  var IS_WRAP = type & $export.W;\n  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});\n  var expProto = exports[PROTOTYPE];\n  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];\n  var key, own, out;\n  if (IS_GLOBAL) source = name;\n  for (key in source) {\n    // contains in native\n    own = !IS_FORCED && target && target[key] !== undefined;\n    if (own && has(exports, key)) continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]\n    // bind timers to global for call from export context\n    : IS_BIND && own ? ctx(out, global)\n    // wrap global constructors for prevent change them in library\n    : IS_WRAP && target[key] == out ? (function (C) {\n      var F = function (a, b, c) {\n        if (this instanceof C) {\n          switch (arguments.length) {\n            case 0: return new C();\n            case 1: return new C(a);\n            case 2: return new C(a, b);\n          } return new C(a, b, c);\n        } return C.apply(this, arguments);\n      };\n      F[PROTOTYPE] = C[PROTOTYPE];\n      return F;\n    // make static versions for prototype methods\n    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;\n    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%\n    if (IS_PROTO) {\n      (exports.virtual || (exports.virtual = {}))[key] = out;\n      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%\n      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);\n    }\n  }\n};\n// type bitmap\n$export.F = 1;   // forced\n$export.G = 2;   // global\n$export.S = 4;   // static\n$export.P = 8;   // proto\n$export.B = 16;  // bind\n$export.W = 32;  // wrap\n$export.U = 64;  // safe\n$export.R = 128; // real proto method for `library`\nmodule.exports = $export;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_export.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (e) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_fails.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar call = __webpack_require__(/*! ./_iter-call */ \"./node_modules/core-js/library/modules/_iter-call.js\");\nvar isArrayIter = __webpack_require__(/*! ./_is-array-iter */ \"./node_modules/core-js/library/modules/_is-array-iter.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar toLength = __webpack_require__(/*! ./_to-length */ \"./node_modules/core-js/library/modules/_to-length.js\");\nvar getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ \"./node_modules/core-js/library/modules/core.get-iterator-method.js\");\nvar BREAK = {};\nvar RETURN = {};\nvar exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {\n  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);\n  var f = ctx(fn, that, entries ? 2 : 1);\n  var index = 0;\n  var length, step, iterator, result;\n  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');\n  // fast case for arrays with default iterator\n  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {\n    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);\n    if (result === BREAK || result === RETURN) return result;\n  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {\n    result = call(iterator, f, step.value, entries);\n    if (result === BREAK || result === RETURN) return result;\n  }\n};\nexports.BREAK = BREAK;\nexports.RETURN = RETURN;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_for-of.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nvar global = module.exports = typeof window != 'undefined' && window.Math == Math\n  ? window : typeof self != 'undefined' && self.Math == Math ? self\n  // eslint-disable-next-line no-new-func\n  : Function('return this')();\nif (typeof __g == 'number') __g = global; // eslint-disable-line no-undef\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_global.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_has.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar createDesc = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? function (object, key, value) {\n  return dP.f(object, key, createDesc(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_hide.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var document = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").document;\nmodule.exports = document && document.documentElement;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_html.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") && !__webpack_require__(/*! ./_fails */ \"./node_modules/core-js/library/modules/_fails.js\")(function () {\n  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('div'), 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// fast apply, http://jsperf.lnkit.com/fast-apply/5\nmodule.exports = function (fn, args, that) {\n  var un = that === undefined;\n  switch (args.length) {\n    case 0: return un ? fn()\n                      : fn.call(that);\n    case 1: return un ? fn(args[0])\n                      : fn.call(that, args[0]);\n    case 2: return un ? fn(args[0], args[1])\n                      : fn.call(that, args[0], args[1]);\n    case 3: return un ? fn(args[0], args[1], args[2])\n                      : fn.call(that, args[0], args[1], args[2]);\n    case 4: return un ? fn(args[0], args[1], args[2], args[3])\n                      : fn.call(that, args[0], args[1], args[2], args[3]);\n  } return fn.apply(that, args);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_invoke.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// fallback for non-array-like ES3 and non-enumerable old V8 strings\nvar cof = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\");\n// eslint-disable-next-line no-prototype-builtins\nmodule.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {\n  return cof(it) == 'String' ? it.split('') : Object(it);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// check on default Array iterator\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar ArrayProto = Array.prototype;\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_is-array-iter.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// call something on iterator step with safe closing on error\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nmodule.exports = function (iterator, fn, value, entries) {\n  try {\n    return entries ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (e) {\n    var ret = iterator['return'];\n    if (ret !== undefined) anObject(ret.call(iterator));\n    throw e;\n  }\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_iter-call.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar create = __webpack_require__(/*! ./_object-create */ \"./node_modules/core-js/library/modules/_object-create.js\");\nvar descriptor = __webpack_require__(/*! ./_property-desc */ \"./node_modules/core-js/library/modules/_property-desc.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n__webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\")(IteratorPrototype, __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator'), function () { return this; });\n\nmodule.exports = function (Constructor, NAME, next) {\n  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });\n  setToStringTag(Constructor, NAME + ' Iterator');\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_iter-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar redefine = __webpack_require__(/*! ./_redefine */ \"./node_modules/core-js/library/modules/_redefine.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar $iterCreate = __webpack_require__(/*! ./_iter-create */ \"./node_modules/core-js/library/modules/_iter-create.js\");\nvar setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\");\nvar getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ \"./node_modules/core-js/library/modules/_object-gpo.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`\nvar FF_ITERATOR = '@@iterator';\nvar KEYS = 'keys';\nvar VALUES = 'values';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {\n  $iterCreate(Constructor, NAME, next);\n  var getMethod = function (kind) {\n    if (!BUGGY && kind in proto) return proto[kind];\n    switch (kind) {\n      case KEYS: return function keys() { return new Constructor(this, kind); };\n      case VALUES: return function values() { return new Constructor(this, kind); };\n    } return function entries() { return new Constructor(this, kind); };\n  };\n  var TAG = NAME + ' Iterator';\n  var DEF_VALUES = DEFAULT == VALUES;\n  var VALUES_BUG = false;\n  var proto = Base.prototype;\n  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];\n  var $default = $native || getMethod(DEFAULT);\n  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;\n  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;\n  var methods, key, IteratorPrototype;\n  // Fix native\n  if ($anyNative) {\n    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));\n    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {\n      // Set @@toStringTag to native iterators\n      setToStringTag(IteratorPrototype, TAG, true);\n      // fix for some old engines\n      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);\n    }\n  }\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEF_VALUES && $native && $native.name !== VALUES) {\n    VALUES_BUG = true;\n    $default = function values() { return $native.call(this); };\n  }\n  // Define iterator\n  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {\n    hide(proto, ITERATOR, $default);\n  }\n  // Plug for library\n  Iterators[NAME] = $default;\n  Iterators[TAG] = returnThis;\n  if (DEFAULT) {\n    methods = {\n      values: DEF_VALUES ? $default : getMethod(VALUES),\n      keys: IS_SET ? $default : getMethod(KEYS),\n      entries: $entries\n    };\n    if (FORCED) for (key in methods) {\n      if (!(key in proto)) redefine(proto, key, methods[key]);\n    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);\n  }\n  return methods;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_iter-define.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var riter = [7][ITERATOR]();\n  riter['return'] = function () { SAFE_CLOSING = true; };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(riter, function () { throw 2; });\n} catch (e) { /* empty */ }\n\nmodule.exports = function (exec, skipClosing) {\n  if (!skipClosing && !SAFE_CLOSING) return false;\n  var safe = false;\n  try {\n    var arr = [7];\n    var iter = arr[ITERATOR]();\n    iter.next = function () { return { done: safe = true }; };\n    arr[ITERATOR] = function () { return iter; };\n    exec(arr);\n  } catch (e) { /* empty */ }\n  return safe;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_iter-detect.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (done, value) {\n  return { value: value, done: !!done };\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_iter-step.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_iterators.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_library.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar macrotask = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/library/modules/_task.js\").set;\nvar Observer = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar isNode = __webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\")(process) == 'process';\n\nmodule.exports = function () {\n  var head, last, notify;\n\n  var flush = function () {\n    var parent, fn;\n    if (isNode && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (e) {\n        if (head) notify();\n        else last = undefined;\n        throw e;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (isNode) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339\n  } else if (Observer && !(global.navigator && global.navigator.standalone)) {\n    var toggle = true;\n    var node = document.createTextNode('');\n    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    var promise = Promise.resolve(undefined);\n    notify = function () {\n      promise.then(flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n\n  return function (fn) {\n    var task = { fn: fn, next: undefined };\n    if (last) last.next = task;\n    if (!head) {\n      head = task;\n      notify();\n    } last = task;\n  };\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_microtask.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// 25.4.1.5 NewPromiseCapability(C)\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\n\nfunction PromiseCapability(C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n}\n\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar dPs = __webpack_require__(/*! ./_object-dps */ \"./node_modules/core-js/library/modules/_object-dps.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar Empty = function () { /* empty */ };\nvar PROTOTYPE = 'prototype';\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\")('iframe');\n  var i = enumBugKeys.length;\n  var lt = '<';\n  var gt = '>';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\").appendChild(iframe);\n  iframe.src = 'javascript:'; // eslint-disable-line no-script-url\n  // createDict = iframe.contentWindow.Object;\n  // html.removeChild(iframe);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];\n  return createDict();\n};\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : dPs(result, Properties);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ \"./node_modules/core-js/library/modules/_ie8-dom-define.js\");\nvar toPrimitive = __webpack_require__(/*! ./_to-primitive */ \"./node_modules/core-js/library/modules/_to-primitive.js\");\nvar dP = Object.defineProperty;\n\nexports.f = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return dP(O, P, Attributes);\n  } catch (e) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_object-dp.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar getKeys = __webpack_require__(/*! ./_object-keys */ \"./node_modules/core-js/library/modules/_object-keys.js\");\n\nmodule.exports = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\") ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = getKeys(Properties);\n  var length = keys.length;\n  var i = 0;\n  var P;\n  while (length > i) dP.f(O, P = keys[i++], Properties[P]);\n  return O;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_object-dps.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toObject = __webpack_require__(/*! ./_to-object */ \"./node_modules/core-js/library/modules/_to-object.js\");\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\nvar ObjectProto = Object.prototype;\n\nmodule.exports = Object.getPrototypeOf || function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectProto : null;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_object-gpo.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\nvar arrayIndexOf = __webpack_require__(/*! ./_array-includes */ \"./node_modules/core-js/library/modules/_array-includes.js\")(false);\nvar IE_PROTO = __webpack_require__(/*! ./_shared-key */ \"./node_modules/core-js/library/modules/_shared-key.js\")('IE_PROTO');\n\nmodule.exports = function (object, names) {\n  var O = toIObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~arrayIndexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 19.1.2.14 / 15.2.3.14 Object.keys(O)\nvar $keys = __webpack_require__(/*! ./_object-keys-internal */ \"./node_modules/core-js/library/modules/_object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ \"./node_modules/core-js/library/modules/_enum-bug-keys.js\");\n\nmodule.exports = Object.keys || function keys(O) {\n  return $keys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { e: false, v: exec() };\n  } catch (e) {\n    return { e: true, v: e };\n  }\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_perform.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_property-desc.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nmodule.exports = function (target, src, safe) {\n  for (var key in src) {\n    if (safe && target[key]) target[key] = src[key];\n    else hide(target, key, src[key]);\n  } return target;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar dP = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\n\nmodule.exports = function (KEY) {\n  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];\n  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {\n    configurable: true,\n    get: function () { return this; }\n  });\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_set-species.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var def = __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f;\nvar has = __webpack_require__(/*! ./_has */ \"./node_modules/core-js/library/modules/_has.js\");\nvar TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nmodule.exports = function (it, tag, stat) {\n  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('keys');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nmodule.exports = function (key) {\n  return shared[key] || (shared[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || (global[SHARED] = {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: core.version,\n  mode: __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\") ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_shared.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.3.20 SpeciesConstructor(O, defaultConstructor)\nvar anObject = __webpack_require__(/*! ./_an-object */ \"./node_modules/core-js/library/modules/_an-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nvar SPECIES = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species');\nmodule.exports = function (O, D) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\n// true  -> String#at\n// false -> String#codePointAt\nmodule.exports = function (TO_STRING) {\n  return function (that, pos) {\n    var s = String(defined(that));\n    var i = toInteger(pos);\n    var l = s.length;\n    var a, b;\n    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;\n    a = s.charCodeAt(i);\n    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff\n      ? TO_STRING ? s.charAt(i) : a\n      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;\n  };\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_string-at.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar invoke = __webpack_require__(/*! ./_invoke */ \"./node_modules/core-js/library/modules/_invoke.js\");\nvar html = __webpack_require__(/*! ./_html */ \"./node_modules/core-js/library/modules/_html.js\");\nvar cel = __webpack_require__(/*! ./_dom-create */ \"./node_modules/core-js/library/modules/_dom-create.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar process = global.process;\nvar setTask = global.setImmediate;\nvar clearTask = global.clearImmediate;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\nvar run = function () {\n  var id = +this;\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\nvar listener = function (event) {\n  run.call(event.data);\n};\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!setTask || !clearTask) {\n  setTask = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      invoke(typeof fn == 'function' ? fn : Function(fn), args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clearTask = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (__webpack_require__(/*! ./_cof */ \"./node_modules/core-js/library/modules/_cof.js\")(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(ctx(run, id, 1));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(ctx(run, id, 1));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  } else if (MessageChannel) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = ctx(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {\n    defer = function (id) {\n      global.postMessage(id + '', '*');\n    };\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in cel('script')) {\n    defer = function (id) {\n      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run.call(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(ctx(run, id, 1), 0);\n    };\n  }\n}\nmodule.exports = {\n  set: setTask,\n  clear: clearTask\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_task.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar max = Math.max;\nvar min = Math.min;\nmodule.exports = function (index, length) {\n  index = toInteger(index);\n  return index < 0 ? max(index + length, 0) : min(index, length);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 7.1.4 ToInteger\nvar ceil = Math.ceil;\nvar floor = Math.floor;\nmodule.exports = function (it) {\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// to indexed object, toObject with fallback for non-array-like ES3 strings\nvar IObject = __webpack_require__(/*! ./_iobject */ \"./node_modules/core-js/library/modules/_iobject.js\");\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return IObject(defined(it));\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_to-iobject.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.15 ToLength\nvar toInteger = __webpack_require__(/*! ./_to-integer */ \"./node_modules/core-js/library/modules/_to-integer.js\");\nvar min = Math.min;\nmodule.exports = function (it) {\n  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.13 ToObject(argument)\nvar defined = __webpack_require__(/*! ./_defined */ \"./node_modules/core-js/library/modules/_defined.js\");\nmodule.exports = function (it) {\n  return Object(defined(it));\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 7.1.1 ToPrimitive(input [, PreferredType])\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (it, S) {\n  if (!isObject(it)) return it;\n  var fn, val;\n  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;\n  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar px = Math.random();\nmodule.exports = function (key) {\n  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_uid.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar navigator = global.navigator;\n\nmodule.exports = navigator && navigator.userAgent || '';\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ./_shared */ \"./node_modules/core-js/library/modules/_shared.js\")('wks');\nvar uid = __webpack_require__(/*! ./_uid */ \"./node_modules/core-js/library/modules/_uid.js\");\nvar Symbol = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\").Symbol;\nvar USE_SYMBOL = typeof Symbol == 'function';\n\nvar $exports = module.exports = function (name) {\n  return store[name] || (store[name] =\n    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n$exports.store = store;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/_wks.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar ITERATOR = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('iterator');\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nmodule.exports = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\").getIteratorMethod = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/core.get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ \"./node_modules/core-js/library/modules/_add-to-unscopables.js\");\nvar step = __webpack_require__(/*! ./_iter-step */ \"./node_modules/core-js/library/modules/_iter-step.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar toIObject = __webpack_require__(/*! ./_to-iobject */ \"./node_modules/core-js/library/modules/_to-iobject.js\");\n\n// 22.1.3.4 Array.prototype.entries()\n// 22.1.3.13 Array.prototype.keys()\n// 22.1.3.29 Array.prototype.values()\n// 22.1.3.30 Array.prototype[@@iterator]()\nmodule.exports = __webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(Array, 'Array', function (iterated, kind) {\n  this._t = toIObject(iterated); // target\n  this._i = 0;                   // next index\n  this._k = kind;                // kind\n// 22.1.5.2.1 %ArrayIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var kind = this._k;\n  var index = this._i++;\n  if (!O || index >= O.length) {\n    this._t = undefined;\n    return step(1);\n  }\n  if (kind == 'keys') return step(0, index);\n  if (kind == 'values') return step(0, O[index]);\n  return step(0, [index, O[index]]);\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)\nIterators.Arguments = Iterators.Array;\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/es6.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\n// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)\n$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ \"./node_modules/core-js/library/modules/_descriptors.js\"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ \"./node_modules/core-js/library/modules/_object-dp.js\").f });\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/es6.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/es6.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar LIBRARY = __webpack_require__(/*! ./_library */ \"./node_modules/core-js/library/modules/_library.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar ctx = __webpack_require__(/*! ./_ctx */ \"./node_modules/core-js/library/modules/_ctx.js\");\nvar classof = __webpack_require__(/*! ./_classof */ \"./node_modules/core-js/library/modules/_classof.js\");\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar isObject = __webpack_require__(/*! ./_is-object */ \"./node_modules/core-js/library/modules/_is-object.js\");\nvar aFunction = __webpack_require__(/*! ./_a-function */ \"./node_modules/core-js/library/modules/_a-function.js\");\nvar anInstance = __webpack_require__(/*! ./_an-instance */ \"./node_modules/core-js/library/modules/_an-instance.js\");\nvar forOf = __webpack_require__(/*! ./_for-of */ \"./node_modules/core-js/library/modules/_for-of.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/library/modules/_species-constructor.js\");\nvar task = __webpack_require__(/*! ./_task */ \"./node_modules/core-js/library/modules/_task.js\").set;\nvar microtask = __webpack_require__(/*! ./_microtask */ \"./node_modules/core-js/library/modules/_microtask.js\")();\nvar newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/library/modules/_perform.js\");\nvar userAgent = __webpack_require__(/*! ./_user-agent */ \"./node_modules/core-js/library/modules/_user-agent.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/library/modules/_promise-resolve.js\");\nvar PROMISE = 'Promise';\nvar TypeError = global.TypeError;\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8 || '';\nvar $Promise = global[PROMISE];\nvar isNode = classof(process) == 'process';\nvar empty = function () { /* empty */ };\nvar Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;\nvar newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;\n\nvar USE_NATIVE = !!function () {\n  try {\n    // correct subclassing with @@species support\n    var promise = $Promise.resolve(1);\n    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('species')] = function (exec) {\n      exec(empty, empty);\n    };\n    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    return (isNode || typeof PromiseRejectionEvent == 'function')\n      && promise.then(empty) instanceof FakePromise\n      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n      // we can't detect it synchronously, so just check versions\n      && v8.indexOf('6.6') !== 0\n      && userAgent.indexOf('Chrome/66') === -1;\n  } catch (e) { /* empty */ }\n}();\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\nvar notify = function (promise, isReject) {\n  if (promise._n) return;\n  promise._n = true;\n  var chain = promise._c;\n  microtask(function () {\n    var value = promise._v;\n    var ok = promise._s == 1;\n    var i = 0;\n    var run = function (reaction) {\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (promise._h == 2) onHandleUnhandled(promise);\n            promise._h = 1;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // may throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (e) {\n        if (domain && !exited) domain.exit();\n        reject(e);\n      }\n    };\n    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach\n    promise._c = [];\n    promise._n = false;\n    if (isReject && !promise._h) onUnhandled(promise);\n  });\n};\nvar onUnhandled = function (promise) {\n  task.call(global, function () {\n    var value = promise._v;\n    var unhandled = isUnhandled(promise);\n    var result, handler, console;\n    if (unhandled) {\n      result = perform(function () {\n        if (isNode) {\n          process.emit('unhandledRejection', value, promise);\n        } else if (handler = global.onunhandledrejection) {\n          handler({ promise: promise, reason: value });\n        } else if ((console = global.console) && console.error) {\n          console.error('Unhandled promise rejection', value);\n        }\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      promise._h = isNode || isUnhandled(promise) ? 2 : 1;\n    } promise._a = undefined;\n    if (unhandled && result.e) throw result.v;\n  });\n};\nvar isUnhandled = function (promise) {\n  return promise._h !== 1 && (promise._a || promise._c).length === 0;\n};\nvar onHandleUnhandled = function (promise) {\n  task.call(global, function () {\n    var handler;\n    if (isNode) {\n      process.emit('rejectionHandled', promise);\n    } else if (handler = global.onrejectionhandled) {\n      handler({ promise: promise, reason: promise._v });\n    }\n  });\n};\nvar $reject = function (value) {\n  var promise = this;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  promise._v = value;\n  promise._s = 2;\n  if (!promise._a) promise._a = promise._c.slice();\n  notify(promise, true);\n};\nvar $resolve = function (value) {\n  var promise = this;\n  var then;\n  if (promise._d) return;\n  promise._d = true;\n  promise = promise._w || promise; // unwrap\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    if (then = isThenable(value)) {\n      microtask(function () {\n        var wrapper = { _w: promise, _d: false }; // wrap\n        try {\n          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));\n        } catch (e) {\n          $reject.call(wrapper, e);\n        }\n      });\n    } else {\n      promise._v = value;\n      promise._s = 1;\n      notify(promise, false);\n    }\n  } catch (e) {\n    $reject.call({ _w: promise, _d: false }, e); // wrap\n  }\n};\n\n// constructor polyfill\nif (!USE_NATIVE) {\n  // 25.4.3.1 Promise(executor)\n  $Promise = function Promise(executor) {\n    anInstance(this, $Promise, PROMISE, '_h');\n    aFunction(executor);\n    Internal.call(this);\n    try {\n      executor(ctx($resolve, this, 1), ctx($reject, this, 1));\n    } catch (err) {\n      $reject.call(this, err);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    this._c = [];             // <- awaiting reactions\n    this._a = undefined;      // <- checked in isUnhandled reactions\n    this._s = 0;              // <- state\n    this._d = false;          // <- done\n    this._v = undefined;      // <- value\n    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled\n    this._n = false;          // <- notify\n  };\n  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ \"./node_modules/core-js/library/modules/_redefine-all.js\")($Promise.prototype, {\n    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)\n    then: function then(onFulfilled, onRejected) {\n      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = isNode ? process.domain : undefined;\n      this._c.push(reaction);\n      if (this._a) this._a.push(reaction);\n      if (this._s) notify(this, false);\n      return reaction.promise;\n    },\n    // 25.4.5.1 Promise.prototype.catch(onRejected)\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    this.promise = promise;\n    this.resolve = ctx($resolve, promise, 1);\n    this.reject = ctx($reject, promise, 1);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === $Promise || C === Wrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n}\n\n$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });\n__webpack_require__(/*! ./_set-to-string-tag */ \"./node_modules/core-js/library/modules/_set-to-string-tag.js\")($Promise, PROMISE);\n__webpack_require__(/*! ./_set-species */ \"./node_modules/core-js/library/modules/_set-species.js\")(PROMISE);\nWrapper = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\")[PROMISE];\n\n// statics\n$export($export.S + $export.F * !USE_NATIVE, PROMISE, {\n  // 25.4.4.5 Promise.reject(r)\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    var $$reject = capability.reject;\n    $$reject(r);\n    return capability.promise;\n  }\n});\n$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {\n  // 25.4.4.6 Promise.resolve(x)\n  resolve: function resolve(x) {\n    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);\n  }\n});\n$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ \"./node_modules/core-js/library/modules/_iter-detect.js\")(function (iter) {\n  $Promise.all(iter)['catch'](empty);\n})), PROMISE, {\n  // 25.4.4.1 Promise.all(iterable)\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var values = [];\n      var index = 0;\n      var remaining = 1;\n      forOf(iterable, false, function (promise) {\n        var $index = index++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        C.resolve(promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[$index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  },\n  // 25.4.4.4 Promise.race(iterable)\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      forOf(iterable, false, function (promise) {\n        C.resolve(promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.e) reject(result.v);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/es6.promise.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $at = __webpack_require__(/*! ./_string-at */ \"./node_modules/core-js/library/modules/_string-at.js\")(true);\n\n// 21.1.3.27 String.prototype[@@iterator]()\n__webpack_require__(/*! ./_iter-define */ \"./node_modules/core-js/library/modules/_iter-define.js\")(String, 'String', function (iterated) {\n  this._t = String(iterated); // target\n  this._i = 0;                // next index\n// 21.1.5.2.1 %StringIteratorPrototype%.next()\n}, function () {\n  var O = this._t;\n  var index = this._i;\n  var point;\n  if (index >= O.length) return { value: undefined, done: true };\n  point = $at(O, index);\n  this._i += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/es6.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// https://github.com/tc39/proposal-promise-finally\n\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar core = __webpack_require__(/*! ./_core */ \"./node_modules/core-js/library/modules/_core.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar speciesConstructor = __webpack_require__(/*! ./_species-constructor */ \"./node_modules/core-js/library/modules/_species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ./_promise-resolve */ \"./node_modules/core-js/library/modules/_promise-resolve.js\");\n\n$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {\n  var C = speciesConstructor(this, core.Promise || global.Promise);\n  var isFunction = typeof onFinally == 'function';\n  return this.then(\n    isFunction ? function (x) {\n      return promiseResolve(C, onFinally()).then(function () { return x; });\n    } : onFinally,\n    isFunction ? function (e) {\n      return promiseResolve(C, onFinally()).then(function () { throw e; });\n    } : onFinally\n  );\n} });\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/es7.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// https://github.com/tc39/proposal-promise-try\nvar $export = __webpack_require__(/*! ./_export */ \"./node_modules/core-js/library/modules/_export.js\");\nvar newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ \"./node_modules/core-js/library/modules/_new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ./_perform */ \"./node_modules/core-js/library/modules/_perform.js\");\n\n$export($export.S, 'Promise', { 'try': function (callbackfn) {\n  var promiseCapability = newPromiseCapability.f(this);\n  var result = perform(callbackfn);\n  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);\n  return promiseCapability.promise;\n} });\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/es7.promise.try.js?");

/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es6.array.iterator */ \"./node_modules/core-js/library/modules/es6.array.iterator.js\");\nvar global = __webpack_require__(/*! ./_global */ \"./node_modules/core-js/library/modules/_global.js\");\nvar hide = __webpack_require__(/*! ./_hide */ \"./node_modules/core-js/library/modules/_hide.js\");\nvar Iterators = __webpack_require__(/*! ./_iterators */ \"./node_modules/core-js/library/modules/_iterators.js\");\nvar TO_STRING_TAG = __webpack_require__(/*! ./_wks */ \"./node_modules/core-js/library/modules/_wks.js\")('toStringTag');\n\nvar DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +\n  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +\n  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +\n  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +\n  'TextTrackList,TouchList').split(',');\n\nfor (var i = 0; i < DOMIterables.length; i++) {\n  var NAME = DOMIterables[i];\n  var Collection = global[NAME];\n  var proto = Collection && Collection.prototype;\n  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);\n  Iterators[NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js/library/modules/web.dom.iterable.js?");

/***/ }),

/***/ "./node_modules/jwt-decode/lib/atob.js":
/*!*********************************************!*\
  !*** ./node_modules/jwt-decode/lib/atob.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The code was extracted from:\n * https://github.com/davidchambers/Base64.js\n */\n\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\nfunction InvalidCharacterError(message) {\n  this.message = message;\n}\n\nInvalidCharacterError.prototype = new Error();\nInvalidCharacterError.prototype.name = 'InvalidCharacterError';\n\nfunction polyfill (input) {\n  var str = String(input).replace(/=+$/, '');\n  if (str.length % 4 == 1) {\n    throw new InvalidCharacterError(\"'atob' failed: The string to be decoded is not correctly encoded.\");\n  }\n  for (\n    // initialize result and counters\n    var bc = 0, bs, buffer, idx = 0, output = '';\n    // get next character\n    buffer = str.charAt(idx++);\n    // character found in table? initialize bit storage and add its ascii value;\n    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,\n      // and if not first of each 4 characters,\n      // convert the first 8 bits to one ascii character\n      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0\n  ) {\n    // try to find character in table (0-63, not found => -1)\n    buffer = chars.indexOf(buffer);\n  }\n  return output;\n}\n\n\nmodule.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;\n\n\n//# sourceURL=webpack://Movai/./node_modules/jwt-decode/lib/atob.js?");

/***/ }),

/***/ "./node_modules/jwt-decode/lib/base64_url_decode.js":
/*!**********************************************************!*\
  !*** ./node_modules/jwt-decode/lib/base64_url_decode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var atob = __webpack_require__(/*! ./atob */ \"./node_modules/jwt-decode/lib/atob.js\");\n\nfunction b64DecodeUnicode(str) {\n  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {\n    var code = p.charCodeAt(0).toString(16).toUpperCase();\n    if (code.length < 2) {\n      code = '0' + code;\n    }\n    return '%' + code;\n  }));\n}\n\nmodule.exports = function(str) {\n  var output = str.replace(/-/g, \"+\").replace(/_/g, \"/\");\n  switch (output.length % 4) {\n    case 0:\n      break;\n    case 2:\n      output += \"==\";\n      break;\n    case 3:\n      output += \"=\";\n      break;\n    default:\n      throw \"Illegal base64url string!\";\n  }\n\n  try{\n    return b64DecodeUnicode(output);\n  } catch (err) {\n    return atob(output);\n  }\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/jwt-decode/lib/base64_url_decode.js?");

/***/ }),

/***/ "./node_modules/jwt-decode/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/jwt-decode/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar base64_url_decode = __webpack_require__(/*! ./base64_url_decode */ \"./node_modules/jwt-decode/lib/base64_url_decode.js\");\n\nfunction InvalidTokenError(message) {\n  this.message = message;\n}\n\nInvalidTokenError.prototype = new Error();\nInvalidTokenError.prototype.name = 'InvalidTokenError';\n\nmodule.exports = function (token,options) {\n  if (typeof token !== 'string') {\n    throw new InvalidTokenError('Invalid token specified');\n  }\n\n  options = options || {};\n  var pos = options.header === true ? 0 : 1;\n  try {\n    return JSON.parse(base64_url_decode(token.split('.')[pos]));\n  } catch (e) {\n    throw new InvalidTokenError('Invalid token specified: ' + e.message);\n  }\n};\n\nmodule.exports.InvalidTokenError = InvalidTokenError;\n\n\n//# sourceURL=webpack://Movai/./node_modules/jwt-decode/lib/index.js?");

/***/ }),

/***/ "./node_modules/monet/dist/monet.js":
/*!******************************************!*\
  !*** ./node_modules/monet/dist/monet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**\n * Monet.js 0.9.0-rc.1\n *\n * (c) 2012-2018 Chris Myers\n * @license Monet.js may be freely distributed under the MIT license.\n * For all details and documentation:\n * https://monet.github.io/monet.js/\n */\n(function(root, factory) {\n    if (true) {\n        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n    } else {}\n})(typeof self !== \"undefined\" ? self : this, function() {\n    \"use strict\";\n    function assignImp(target, source) {\n        for (var key in source) {\n            if (source.hasOwnProperty(key) && source[key] !== undefined) {\n                target[key] = source[key];\n            }\n        }\n        return target;\n    }\n    var assign = isFunction(Object.assign) ? Object.assign : assignImp;\n    var Monet = {\n        apply2: apply2,\n        assign: assign,\n        compose: compose,\n        curry: curry(swap(curry), [])([]),\n        idFunction: idFunction,\n        isFunction: isFunction,\n        noop: noop,\n        swap: swap\n    };\n    var TYPE_KEY = \"@@type\";\n    var LIB_NAME = \"monet.js\";\n    var TYPES_NAMES = {\n        Identity: \"Identity\",\n        Maybe: \"Maybe\",\n        Either: \"Either\",\n        Validation: \"Validation\",\n        List: \"List\",\n        NEL: \"NEL\",\n        IO: \"IO\",\n        MonadT: \"MonadT\",\n        Reader: \"Reader\",\n        Free: \"Free\"\n    };\n    function setType(target, typeName) {\n        target[TYPE_KEY] = LIB_NAME + \"/\" + typeName;\n    }\n    function isInstance(typeName) {\n        return function(target) {\n            return target[TYPE_KEY] || target.constructor[TYPE_KEY] === LIB_NAME + \"/\" + typeName;\n        };\n    }\n    function isOfType(typeName) {\n        return function(target) {\n            var targetType = target[TYPE_KEY] || target.constructor && target.constructor[TYPE_KEY];\n            return Boolean(targetType) && targetType.length >= typeName.length && targetType.indexOf(typeName) === targetType.length - typeName.length;\n        };\n    }\n    function isNothing(value) {\n        return value == null;\n    }\n    function noop() {}\n    function getArgs(args) {\n        return Array.prototype.slice.call(args);\n    }\n    function curry(fn, args) {\n        return function() {\n            var args1 = args.concat(getArgs(arguments));\n            return args1.length >= fn.length ? fn.apply(null, args1.slice(0, args1.length)) : curry(fn, args1);\n        };\n    }\n    function compose(f, g) {\n        return function(x) {\n            return f(g(x));\n        };\n    }\n    function isFunction(f) {\n        return Boolean(f && f.constructor && f.call && f.apply);\n    }\n    function idFunction(value) {\n        return value;\n    }\n    function trueFunction() {\n        return true;\n    }\n    function areEqual(a, b) {\n        if (a === b || a !== a && b !== b) {\n            return true;\n        }\n        if (!a || !b) {\n            return false;\n        }\n        if (isFunction(a.equals) && isFunction(b.equals)) {\n            return a.equals(b);\n        }\n        return false;\n    }\n    function equals(a) {\n        return function(b) {\n            return areEqual(a, b);\n        };\n    }\n    function falseFunction() {\n        return false;\n    }\n    function swap(f) {\n        return function(a, b) {\n            return f(b, a);\n        };\n    }\n    function apply2(a1, a2, f) {\n        return a2.ap(a1.map(curry(f, [])));\n    }\n    function listEquals(list1, list2) {\n        var a = list1;\n        var b = list2;\n        while (!a.isNil && !b.isNil) {\n            if (!equals(a.head())(b.head())) {\n                return false;\n            }\n            a = a.tail();\n            b = b.tail();\n        }\n        return a.isNil && b.isNil;\n    }\n    function listMapC(fn, l) {\n        return l.isNil ? Return(l) : Suspend(function() {\n            return listMapC(fn, l.tail());\n        }).map(curry(cons, [])(fn(l.head())));\n    }\n    function listMap(fn, l) {\n        return listMapC(fn, l).run();\n    }\n    function listFilter(list, fn) {\n        return list.foldRight(Nil)(function(a, acc) {\n            return fn(a) ? cons(a, acc) : acc;\n        });\n    }\n    function listFindC(l, fn) {\n        if (l.isNil) {\n            return Return(None());\n        }\n        var h = l.head();\n        return fn(h) ? Return(Some(h)) : Suspend(function() {\n            return listFindC(l.tail(), fn);\n        });\n    }\n    function listFind(l, fn) {\n        return listFindC(l, fn).run();\n    }\n    function listContainsC(l, val) {\n        if (l.isNil) {\n            return Return(false);\n        }\n        var h = l.head();\n        return areEqual(h, val) ? Return(true) : Suspend(function() {\n            return listContainsC(l.tail(), val);\n        });\n    }\n    function listContains(l, val) {\n        return listContainsC(l, val).run();\n    }\n    function cons(head, tail) {\n        return tail.cons(head);\n    }\n    function List() {\n        switch (arguments.length) {\n          case 0:\n            return new List.fn.init();\n\n          case 1:\n            return new List.fn.init(arguments[0]);\n\n          default:\n            return new List.fn.init(arguments[0], arguments[1]);\n        }\n    }\n    Monet.List = List;\n    var listForEach = function(effectFn, l) {\n        if (!l.isNil) {\n            effectFn(l.head());\n            listForEach(effectFn, l.tail());\n        }\n    };\n    var foldLeft = function(fn, acc, list) {\n        function fL(innerAcc, innerList) {\n            return innerList.isNil ? Return(innerAcc) : Suspend(function() {\n                return fL(fn(innerAcc, innerList.head()), innerList.tail());\n            });\n        }\n        return fL(acc, list).run();\n    };\n    var foldRight = function(fn, list, acc) {\n        function fR(innerList, innerAcc) {\n            return innerList.isNil ? Return(innerAcc) : Suspend(function() {\n                return fR(innerList.tail(), innerAcc);\n            }).map(function(accumulated) {\n                return fn(innerList.head(), accumulated);\n            });\n        }\n        return fR(list, acc).run();\n    };\n    var append = function(self, other) {\n        function appendFree(listA, listB) {\n            return listA.isNil ? Return(listB) : Suspend(function() {\n                return appendFree(listA.tail(), listB).map(function(list) {\n                    return list.cons(listA.head());\n                });\n            });\n        }\n        return appendFree(self, other).run();\n    };\n    var sequence = function(list, type) {\n        return list.foldRight(type.of(Nil))(type.map2(cons));\n    };\n    var sequenceValidation = function(list) {\n        return list.foldLeft(Success(Nil))(function(acc, a) {\n            return acc.ap(a.map(function(v) {\n                return function(t) {\n                    return cons(v, t);\n                };\n            }));\n        }).map(listReverse);\n    };\n    var listReverse = function(list) {\n        return list.foldLeft(Nil)(swap(cons));\n    };\n    var listAp = function(list1, list2) {\n        return list1.bind(function(x) {\n            return list2.map(function(f) {\n                return f(x);\n            });\n        });\n    };\n    var Nil;\n    List.fn = List.prototype = {\n        init: function() {\n            var head = arguments[0];\n            var tail = arguments[1];\n            if (arguments.length === 0) {\n                this.isNil = true;\n                this.size_ = 0;\n            } else {\n                this.isNil = false;\n                this.head_ = head;\n                this.tail_ = tail || Nil;\n                this.size_ = this.tail_.size() + 1;\n            }\n            setType(this, TYPES_NAMES.List);\n        },\n        of: function(value) {\n            return new List(value);\n        },\n        size: function() {\n            return this.size_;\n        },\n        equals: function(other) {\n            return (List.isOfType(other) || NEL.isOfType(other)) && listEquals(this, other);\n        },\n        cons: function(head) {\n            return List(head, this);\n        },\n        snoc: function(element) {\n            return this.concat(List(element));\n        },\n        map: function(fn) {\n            return listMap(fn, this);\n        },\n        toArray: function() {\n            return foldLeft(function(acc, e) {\n                acc.push(e);\n                return acc;\n            }, [], this);\n        },\n        toSet: function() {\n            return new Set(this);\n        },\n        foldLeft: function(initialValue) {\n            var self = this;\n            return function(fn) {\n                return foldLeft(fn, initialValue, self);\n            };\n        },\n        foldRight: function(initialValue) {\n            var self = this;\n            return function(fn) {\n                return foldRight(fn, self, initialValue);\n            };\n        },\n        append: function(list2) {\n            return append(this, list2);\n        },\n        filter: function(fn) {\n            return listFilter(this, fn);\n        },\n        find: function(fn) {\n            return listFind(this, fn);\n        },\n        flatten: function() {\n            return foldRight(append, this, Nil);\n        },\n        flattenMaybe: function() {\n            return this.flatMap(Maybe.toList);\n        },\n        reverse: function() {\n            return listReverse(this);\n        },\n        bind: function(fn) {\n            return this.map(fn).flatten();\n        },\n        forEach: function(effectFn) {\n            listForEach(effectFn, this);\n        },\n        contains: function(val) {\n            return listContains(this, val);\n        },\n        sequenceMaybe: function() {\n            return sequence(this, Maybe);\n        },\n        sequenceValidation: function() {\n            return sequenceValidation(this);\n        },\n        sequenceEither: function() {\n            return sequence(this, Either);\n        },\n        sequenceIO: function() {\n            return sequence(this, IO);\n        },\n        sequenceReader: function() {\n            return sequence(this, Reader);\n        },\n        sequence: function(monadType) {\n            return sequence(this, monadType);\n        },\n        head: function() {\n            return this.head_;\n        },\n        headMaybe: function() {\n            return this.isNil ? None() : Some(this.head_);\n        },\n        tail: function() {\n            return this.isNil ? Nil : this.tail_;\n        },\n        tails: function() {\n            return this.isNil ? List(Nil, Nil) : this.tail().tails().cons(this);\n        },\n        ap: function(list) {\n            return listAp(this, list);\n        },\n        isNEL: falseFunction,\n        toString: function() {\n            return this.isNil ? \"Nil\" : \"List(\" + this.toArray().join(\", \") + \")\";\n        },\n        inspect: function() {\n            return this.toString();\n        }\n    };\n    List.fn.init.prototype = List.fn;\n    setType(List, TYPES_NAMES.List);\n    setType(List.fn.init, TYPES_NAMES.List);\n    List.isInstance = isInstance(TYPES_NAMES.List);\n    List.isOfType = isOfType(TYPES_NAMES.List);\n    List.prototype.empty = function() {\n        return Nil;\n    };\n    List.fromArray = function(array) {\n        return array.reduceRight(function(acc, next) {\n            return acc.cons(next);\n        }, Nil);\n    };\n    List.from = function(iterable) {\n        return List.fromArray(Array.from(iterable));\n    };\n    List.of = function(a) {\n        return new List(a, Nil);\n    };\n    List.prototype.each = List.prototype.forEach;\n    Nil = Monet.Nil = new List.fn.init();\n    function emptyNELError(head) {\n        return new Error(\"Cannot create an empty Non-Empty List. Passed head is \" + head + \".\");\n    }\n    function NEL(head, tail) {\n        if (isNothing(head)) {\n            throw emptyNELError(head);\n        }\n        return new NEL.fn.init(head, tail);\n    }\n    Monet.NEL = Monet.NonEmptyList = NEL;\n    NEL.of = function(a) {\n        return NEL(a, Nil);\n    };\n    NEL.fn = NEL.prototype = {\n        init: function(head, tail) {\n            if (isNothing(head)) {\n                throw emptyNELError(head);\n            } else {\n                this.isNil = false;\n                this.head_ = head;\n                this.tail_ = isNothing(tail) ? Nil : tail;\n                this.size_ = this.tail_.size() + 1;\n            }\n            setType(this, TYPES_NAMES.NEL);\n        },\n        equals: function(other) {\n            return List.isOfType(other) || NEL.isOfType(other) && listEquals(this, other);\n        },\n        cons: function(head) {\n            return NEL(head, this.toList());\n        },\n        snoc: function(element) {\n            return this.concat(NEL(element));\n        },\n        map: function(fn) {\n            return NEL(fn(this.head_), listMap(fn, this.tail_));\n        },\n        bind: function(fn) {\n            var p = fn(this.head_);\n            if (!p.isNEL()) {\n                throw new Error(\"NEL.fn.bind: Passed function must return a NonEmptyList.\");\n            }\n            var list = this.tail().foldLeft(Nil.snoc(p.head()).append(p.tail()))(function(acc, e) {\n                var list2 = fn(e).toList();\n                return acc.snoc(list2.head()).append(list2.tail());\n            });\n            return new NEL(list.head(), list.tail());\n        },\n        head: function() {\n            return this.head_;\n        },\n        tail: function() {\n            return this.tail_;\n        },\n        tails: function() {\n            var listsOfNels = this.toList().tails().map(NEL.fromList).flattenMaybe();\n            return NEL(listsOfNels.head(), listsOfNels.tail());\n        },\n        toList: function() {\n            return List(this.head_, this.tail_);\n        },\n        reverse: function() {\n            if (this.tail().isNil) {\n                return this;\n            }\n            var reversedTail = this.tail().reverse();\n            return NEL(reversedTail.head(), reversedTail.tail().append(List(this.head())));\n        },\n        foldLeft: function(initialValue) {\n            return this.toList().foldLeft(initialValue);\n        },\n        foldRight: function(initialValue) {\n            return this.toList().foldRight(initialValue);\n        },\n        reduceLeft: function(fn) {\n            return this.tail().foldLeft(this.head())(fn);\n        },\n        filter: function(fn) {\n            return listFilter(this.toList(), fn);\n        },\n        find: function(fn) {\n            return listFind(this.toList(), fn);\n        },\n        flatten: function() {\n            return foldRight(append, this.toList().map(function(l) {\n                return l.isNEL() ? l.toList() : l;\n            }), Nil);\n        },\n        flattenMaybe: function() {\n            return this.toList().flatMap(Maybe.toList);\n        },\n        contains: function(val) {\n            return listContains(this.toList(), val);\n        },\n        append: function(list2) {\n            return NEL.fromList(this.toList().append(list2.toList())).some();\n        },\n        cobind: function(fn) {\n            return this.cojoin().map(fn);\n        },\n        size: function() {\n            return this.size_;\n        },\n        forEach: function(fn) {\n            return this.toList().forEach(fn);\n        },\n        isNEL: trueFunction,\n        toString: function() {\n            return \"NEL(\" + this.toArray().join(\", \") + \")\";\n        },\n        inspect: function() {\n            return this.toString();\n        }\n    };\n    NEL.fromList = function(list) {\n        return list.isNil ? None() : Some(NEL(list.head(), list.tail()));\n    };\n    NEL.fromArray = function(array) {\n        return NEL.fromList(List.fromArray(array));\n    };\n    NEL.from = function(iterable) {\n        return NEL.fromList(List.from(iterable));\n    };\n    NEL.fn.init.prototype = NEL.fn;\n    setType(NEL, TYPES_NAMES.NEL);\n    setType(NEL.fn.init, TYPES_NAMES.NEL);\n    NEL.isInstance = isInstance(TYPES_NAMES.NEL);\n    NEL.isOfType = isOfType(TYPES_NAMES.NEL);\n    NEL.prototype.toArray = List.prototype.toArray;\n    NEL.prototype.toSet = List.prototype.toSet;\n    NEL.prototype.extract = NEL.prototype.copure = NEL.prototype.head;\n    NEL.prototype.cojoin = NEL.prototype.tails;\n    NEL.prototype.coflatMap = NEL.prototype.mapTails = NEL.prototype.cobind;\n    NEL.prototype.ap = List.prototype.ap;\n    var Maybe = Monet.Maybe = {};\n    Maybe.fromFalsy = function(val) {\n        return !val ? Maybe.None() : Maybe.Some(val);\n    };\n    Maybe.fromNull = function(val) {\n        return isNothing(val) ? Maybe.None() : Maybe.Some(val);\n    };\n    Maybe.fromUndefined = function(val) {\n        return val === undefined ? Maybe.None() : Maybe.Some(val);\n    };\n    Maybe.of = function(a) {\n        return Some(a);\n    };\n    var Some = Maybe.Just = Maybe.Some = Maybe.some = Monet.Some = Monet.Just = function(val) {\n        return new Maybe.fn.init(true, val);\n    };\n    var None = Maybe.Nothing = Maybe.None = Maybe.none = Monet.None = Monet.Nothing = function() {\n        return new Maybe.fn.init(false, null);\n    };\n    Maybe.toList = function(maybe) {\n        return maybe.toList();\n    };\n    Maybe.fn = Maybe.prototype = {\n        init: function(isValue, val) {\n            this.isValue = isValue;\n            if (isValue && isNothing(val)) {\n                throw new Error(\"Can not create Some with illegal value: \" + val + \".\");\n            }\n            this.val = val;\n            setType(this, TYPES_NAMES.Maybe);\n        },\n        isSome: function() {\n            return this.isValue;\n        },\n        isNone: function() {\n            return !this.isSome();\n        },\n        bind: function(bindFn) {\n            return this.isValue ? bindFn(this.val) : this;\n        },\n        some: function() {\n            if (this.isValue) {\n                return this.val;\n            }\n            throw new Error(\"Cannot call .some() on a None.\");\n        },\n        orSome: function(otherValue) {\n            return this.isValue ? this.val : otherValue;\n        },\n        orLazy: function(getOtherValue) {\n            return this.cata(getOtherValue, idFunction);\n        },\n        orNull: function() {\n            return this.orSome(null);\n        },\n        orUndefined: function() {\n            return this.orSome(undefined);\n        },\n        orElse: function(maybe) {\n            return this.catchMap(function() {\n                return maybe;\n            });\n        },\n        ap: function(maybeWithFunction) {\n            var value = this.val;\n            return this.isValue ? maybeWithFunction.map(function(fn) {\n                return fn(value);\n            }) : this;\n        },\n        equals: function(other) {\n            return Maybe.isOfType(other) && this.cata(function() {\n                return other.isNone();\n            }, function(val) {\n                return other.fold(false)(equals(val));\n            });\n        },\n        toArray: function() {\n            return this.map(function(val) {\n                return [ val ];\n            }).orLazy(function() {\n                return [];\n            });\n        },\n        toSet: function() {\n            return new Set(this);\n        },\n        toList: function() {\n            return this.map(List).orLazy(function() {\n                return Nil;\n            });\n        },\n        toEither: function(failVal) {\n            return this.isSome() ? Right(this.val) : Left(failVal);\n        },\n        toValidation: function(failVal) {\n            return this.isSome() ? Success(this.val) : Fail(failVal);\n        },\n        fold: function(defaultValue) {\n            var self = this;\n            return function(fn) {\n                return self.isSome() ? fn(self.val) : defaultValue;\n            };\n        },\n        foldLeft: function(initialValue) {\n            return this.toList().foldLeft(initialValue);\n        },\n        foldRight: function(initialValue) {\n            return this.toList().foldRight(initialValue);\n        },\n        cata: function(none, some) {\n            return this.isSome() ? some(this.val) : none();\n        },\n        catchMap: function(fn) {\n            return this.isSome() ? this : fn();\n        },\n        filter: function(fn) {\n            var self = this;\n            return self.flatMap(function(a) {\n                return fn(a) ? self : None();\n            });\n        },\n        orNoneIf: function(bool) {\n            return bool ? None() : this;\n        },\n        contains: function(val) {\n            return this.isSome() ? areEqual(this.val, val) : false;\n        },\n        forEach: function(fn) {\n            this.cata(noop, fn);\n        },\n        orElseRun: function(fn) {\n            this.cata(fn, noop);\n        },\n        toString: function() {\n            return this.isSome() ? \"Just(\" + this.val + \")\" : \"Nothing\";\n        },\n        inspect: function() {\n            return this.toString();\n        }\n    };\n    Maybe.prototype.orJust = Maybe.prototype.getOrElse = Maybe.prototype.orSome;\n    Maybe.prototype.just = Maybe.prototype.some;\n    Maybe.prototype.isJust = Maybe.prototype.isSome;\n    Maybe.prototype.isNothing = Maybe.prototype.isNone;\n    Maybe.prototype.orNothingIf = Maybe.prototype.orNoneIf;\n    Maybe.fn.init.prototype = Maybe.fn;\n    setType(Maybe, TYPES_NAMES.Maybe);\n    setType(Maybe.fn.init, TYPES_NAMES.Maybe);\n    Maybe.isInstance = isInstance(TYPES_NAMES.Maybe);\n    Maybe.isOfType = isOfType(TYPES_NAMES.Maybe);\n    var Validation = Monet.Validation = {};\n    var Success = Validation.Success = Validation.success = Monet.Success = function(val) {\n        return new Validation.fn.init(val, true);\n    };\n    var Fail = Validation.Fail = Validation.fail = Monet.Fail = function(error) {\n        return new Validation.fn.init(error, false);\n    };\n    Validation.of = function(v) {\n        return Success(v);\n    };\n    Validation.fn = Validation.prototype = {\n        init: function(val, success) {\n            this.val = val;\n            this.isSuccessValue = success;\n            setType(this, TYPES_NAMES.Validation);\n        },\n        success: function() {\n            if (this.isSuccess()) {\n                return this.val;\n            }\n            throw new Error(\"Cannot call success() on a Fail.\");\n        },\n        isSuccess: function() {\n            return this.isSuccessValue;\n        },\n        isFail: function() {\n            return !this.isSuccessValue;\n        },\n        fail: function() {\n            if (this.isSuccess()) {\n                throw new Error(\"Cannot call fail() on a Success.\");\n            }\n            return this.val;\n        },\n        bind: function(fn) {\n            return this.isSuccess() ? fn(this.val) : this;\n        },\n        ap: function(validationWithFn) {\n            var value = this.val;\n            return this.isSuccess() ? validationWithFn.map(function(fn) {\n                return fn(value);\n            }) : validationWithFn.isFail() ? Validation.Fail(Semigroup.append(value, validationWithFn.fail())) : this;\n        },\n        acc: function() {\n            var x = function() {\n                return x;\n            };\n            return this.isSuccessValue ? Validation.success(x) : this;\n        },\n        foldLeft: function(initialValue) {\n            return this.toMaybe().toList().foldLeft(initialValue);\n        },\n        foldRight: function(initialValue) {\n            return this.toMaybe().toList().foldRight(initialValue);\n        },\n        cata: function(fail, success) {\n            return this.isSuccessValue ? success(this.val) : fail(this.val);\n        },\n        catchMap: function(fn) {\n            return this.isSuccess() ? this : fn(this.val);\n        },\n        swap: function() {\n            return this.isSuccess() ? Fail(this.val) : Success(this.val);\n        },\n        failMap: function(fn) {\n            return this.isFail() ? Fail(fn(this.val)) : this;\n        },\n        bimap: function(fail, success) {\n            return this.isSuccessValue ? this.map(success) : this.failMap(fail);\n        },\n        forEach: function(fn) {\n            this.cata(noop, fn);\n        },\n        forEachFail: function(fn) {\n            this.cata(fn, noop);\n        },\n        equals: function(other) {\n            return Validation.isOfType(other) && this.cata(function(fail) {\n                return other.cata(equals(fail), falseFunction);\n            }, function(success) {\n                return other.cata(falseFunction, equals(success));\n            });\n        },\n        toMaybe: function() {\n            return this.isSuccess() ? Some(this.val) : None();\n        },\n        toEither: function() {\n            return (this.isSuccess() ? Right : Left)(this.val);\n        },\n        toString: function() {\n            return (this.isSuccess() ? \"Success(\" : \"Fail(\") + this.val + \")\";\n        },\n        inspect: function() {\n            return this.toString();\n        }\n    };\n    Validation.prototype.fold = Validation.prototype.cata;\n    Validation.fn.init.prototype = Validation.fn;\n    setType(Validation, TYPES_NAMES.Validation);\n    setType(Validation.fn.init, TYPES_NAMES.Validation);\n    Validation.isInstance = isInstance(TYPES_NAMES.Validation);\n    Validation.isOfType = isOfType(TYPES_NAMES.Validation);\n    var Semigroup = Monet.Semigroup = {\n        append: function(a, b) {\n            if (isFunction(a.concat)) {\n                return a.concat(b);\n            }\n            throw new Error(\"Couldn't find a semigroup appender in the environment, \" + \"please specify your own append function\");\n        }\n    };\n    var MonadT = Monet.monadTransformer = Monet.MonadT = Monet.monadT = function(monad) {\n        return new MonadT.fn.init(monad);\n    };\n    MonadT.of = function(m) {\n        return MonadT(m);\n    };\n    MonadT.fn = MonadT.prototype = {\n        init: function(monad) {\n            this.monad = monad;\n            setType(Validation, TYPES_NAMES.MonadT);\n        },\n        map: function(fn) {\n            return MonadT(this.monad.map(function(v) {\n                return v.map(fn);\n            }));\n        },\n        bind: function(fn) {\n            return MonadT(this.monad.map(function(v) {\n                return v.flatMap(fn);\n            }));\n        },\n        ap: function(monadWithFn) {\n            return MonadT(this.monad.flatMap(function(v) {\n                return monadWithFn.perform().map(function(v2) {\n                    return v.ap(v2);\n                });\n            }));\n        },\n        perform: function() {\n            return this.monad;\n        }\n    };\n    MonadT.fn.init.prototype = MonadT.fn;\n    var IO = Monet.IO = Monet.io = function(effectFn) {\n        return new IO.fn.init(effectFn);\n    };\n    IO.of = function(a) {\n        return IO(function() {\n            return a;\n        });\n    };\n    IO.fn = IO.prototype = {\n        init: function(effectFn) {\n            if (!isFunction(effectFn)) {\n                throw new Error(\"IO requires a function.\");\n            }\n            this.effectFn = effectFn;\n            setType(Validation, TYPES_NAMES.IO);\n        },\n        map: function(fn) {\n            var self = this;\n            return IO(function() {\n                return fn(self.effectFn());\n            });\n        },\n        bind: function(fn) {\n            var self = this;\n            return IO(function() {\n                return fn(self.effectFn()).run();\n            });\n        },\n        ap: function(ioWithFn) {\n            var self = this;\n            return ioWithFn.map(function(fn) {\n                return fn(self.effectFn());\n            });\n        },\n        run: function() {\n            return this.effectFn();\n        }\n    };\n    IO.fn.init.prototype = IO.fn;\n    setType(IO, TYPES_NAMES.IO);\n    setType(IO.fn.init, TYPES_NAMES.IO);\n    IO.isInstance = isInstance(TYPES_NAMES.IO);\n    IO.isOfType = isOfType(TYPES_NAMES.IO);\n    IO.prototype.perform = IO.prototype.performUnsafeIO = IO.prototype.run;\n    var Either = Monet.Either = {};\n    Either.of = function(a) {\n        return Right(a);\n    };\n    var Right = Either.Right = Either.right = Monet.Right = function(val) {\n        return new Either.fn.init(val, true);\n    };\n    var Left = Either.Left = Either.left = Monet.Left = function(val) {\n        return new Either.fn.init(val, false);\n    };\n    Either.fn = Either.prototype = {\n        init: function(val, isRightValue) {\n            this.isRightValue = isRightValue;\n            this.value = val;\n            setType(this, TYPES_NAMES.Either);\n        },\n        bind: function(fn) {\n            return this.isRightValue ? fn(this.value) : this;\n        },\n        ap: function(eitherWithFn) {\n            var self = this;\n            return this.isRightValue ? eitherWithFn.map(function(fn) {\n                return fn(self.value);\n            }) : this;\n        },\n        leftMap: function(fn) {\n            return this.isLeft() ? Left(fn(this.value)) : this;\n        },\n        isRight: function() {\n            return this.isRightValue;\n        },\n        isLeft: function() {\n            return !this.isRight();\n        },\n        right: function() {\n            if (this.isRightValue) {\n                return this.value;\n            }\n            throw new Error(\"Cannot call right() on a Left.\");\n        },\n        left: function() {\n            if (this.isRightValue) {\n                throw new Error(\"Cannot call left() on a Right.\");\n            }\n            return this.value;\n        },\n        foldLeft: function(initialValue) {\n            return this.toMaybe().toList().foldLeft(initialValue);\n        },\n        foldRight: function(initialValue) {\n            return this.toMaybe().toList().foldRight(initialValue);\n        },\n        cata: function(leftFn, rightFn) {\n            return this.isRightValue ? rightFn(this.value) : leftFn(this.value);\n        },\n        catchMap: function(fn) {\n            return this.isRight() ? this : fn(this.value);\n        },\n        swap: function() {\n            return this.isRight() ? Left(this.value) : Right(this.value);\n        },\n        forEach: function(fn) {\n            this.cata(noop, fn);\n        },\n        forEachLeft: function(fn) {\n            this.cata(fn, noop);\n        },\n        equals: function(other) {\n            return Either.isOfType(other) && this.cata(function(left) {\n                return other.cata(equals(left), falseFunction);\n            }, function(right) {\n                return other.cata(falseFunction, equals(right));\n            });\n        },\n        bimap: function(leftFn, rightFn) {\n            return this.isRightValue ? this.map(rightFn) : this.leftMap(leftFn);\n        },\n        toMaybe: function() {\n            return this.isRight() ? Some(this.value) : None();\n        },\n        toValidation: function() {\n            return this.isRight() ? Success(this.value) : Fail(this.value);\n        },\n        toString: function() {\n            return this.cata(function(left) {\n                return \"Left(\" + left + \")\";\n            }, function(right) {\n                return \"Right(\" + right + \")\";\n            });\n        },\n        inspect: function() {\n            return this.toString();\n        }\n    };\n    Either.prototype.fold = Either.prototype.cata;\n    Either.fn.init.prototype = Either.fn;\n    setType(Either, TYPES_NAMES.Either);\n    setType(Either.fn.init, TYPES_NAMES.Either);\n    Either.isInstance = isInstance(TYPES_NAMES.Either);\n    Either.isOfType = isOfType(TYPES_NAMES.Either);\n    var Reader = Monet.Reader = function(fn) {\n        return new Reader.fn.init(fn);\n    };\n    Reader.of = function(x) {\n        return Reader(function(_) {\n            return x;\n        });\n    };\n    Reader.ask = function() {\n        return Reader(idFunction);\n    };\n    Reader.fn = Reader.prototype = {\n        init: function(fn) {\n            this.f = fn;\n            setType(this, TYPES_NAMES.Reader);\n        },\n        run: function(config) {\n            return this.f(config);\n        },\n        bind: function(fn) {\n            var self = this;\n            return Reader(function(config) {\n                return fn(self.run(config)).run(config);\n            });\n        },\n        ap: function(readerWithFn) {\n            var self = this;\n            return readerWithFn.bind(function(fn) {\n                return Reader(function(config) {\n                    return fn(self.run(config));\n                });\n            });\n        },\n        map: function(fn) {\n            var self = this;\n            return Reader(function(config) {\n                return fn(self.run(config));\n            });\n        },\n        local: function(fn) {\n            var self = this;\n            return Reader(function(c) {\n                return self.run(fn(c));\n            });\n        }\n    };\n    Reader.fn.init.prototype = Reader.fn;\n    setType(Reader, TYPES_NAMES.Reader);\n    setType(Reader.fn.init, TYPES_NAMES.Reader);\n    Reader.isInstance = isInstance(TYPES_NAMES.Reader);\n    Reader.isOfType = isOfType(TYPES_NAMES.Reader);\n    var Free = Monet.Free = {};\n    var Suspend = Free.Suspend = Monet.Suspend = function(functor) {\n        return new Free.fn.init(functor, true);\n    };\n    var Return = Free.Return = Monet.Return = function(val) {\n        return new Free.fn.init(val, false);\n    };\n    Free.of = function(a) {\n        return Return(a);\n    };\n    Free.liftF = function(functor) {\n        return isFunction(functor) ? Suspend(compose(Return, functor)) : Suspend(functor.map(Return));\n    };\n    Free.fn = Free.prototype = {\n        init: function(val, isSuspend) {\n            this.isSuspend = isSuspend;\n            if (isSuspend) {\n                this.functor = val;\n            } else {\n                this.val = val;\n            }\n            setType(this, TYPES_NAMES.Free);\n        },\n        run: function() {\n            return this.go(function(f) {\n                return f();\n            });\n        },\n        bind: function(fn) {\n            return this.isSuspend ? isFunction(this.functor) ? Suspend(compose(function(free) {\n                return free.bind(fn);\n            }, this.functor)) : Suspend(this.functor.map(function(free) {\n                return free.bind(fn);\n            })) : fn(this.val);\n        },\n        ap: function(ff) {\n            return this.bind(function(x) {\n                return ff.map(function(f) {\n                    return f(x);\n                });\n            });\n        },\n        resume: function() {\n            return this.isSuspend ? Left(this.functor) : Right(this.val);\n        },\n        go1: function(f) {\n            function go2(t) {\n                return t.resume().cata(function(functor) {\n                    return go2(f(functor));\n                }, idFunction);\n            }\n            return go2(this);\n        },\n        go: function(f) {\n            var result = this.resume();\n            while (result.isLeft()) {\n                var next = f(result.left());\n                result = next.resume();\n            }\n            return result.right();\n        }\n    };\n    Free.fn.init.prototype = Free.fn;\n    setType(Free, TYPES_NAMES.Free);\n    setType(Free.fn.init, TYPES_NAMES.Free);\n    Free.isInstance = isInstance(TYPES_NAMES.Free);\n    Free.isOfType = isOfType(TYPES_NAMES.Free);\n    function Identity(a) {\n        return new Identity.fn.init(a);\n    }\n    Monet.Identity = Identity;\n    Identity.of = function(a) {\n        return new Identity(a);\n    };\n    Identity.fn = Identity.prototype = {\n        init: function(val) {\n            this.val = val;\n            setType(this, TYPES_NAMES.Identity);\n        },\n        bind: function(fn) {\n            return fn(this.val);\n        },\n        get: function() {\n            return this.val;\n        },\n        forEach: function(fn) {\n            fn(this.val);\n        },\n        equals: function(other) {\n            return Identity.isOfType(other) && equals(this.get())(other.get());\n        },\n        contains: function(val) {\n            return areEqual(this.val, val);\n        },\n        toString: function() {\n            return \"Identity(\" + this.val + \")\";\n        },\n        inspect: function() {\n            return this.toString();\n        },\n        ap: function(applyWithFunction) {\n            var value = this.val;\n            return applyWithFunction.map(function(fn) {\n                return fn(value);\n            });\n        },\n        toArray: function() {\n            return [ this.get() ];\n        },\n        toList: function() {\n            return List(this.get(), Nil);\n        },\n        toSet: function() {\n            return new Set(this);\n        }\n    };\n    Identity.fn.init.prototype = Identity.fn;\n    setType(Identity, TYPES_NAMES.Identity);\n    setType(Identity.fn.init, TYPES_NAMES.Identity);\n    Identity.isInstance = isInstance(TYPES_NAMES.Identity);\n    Identity.isOfType = isOfType(TYPES_NAMES.Identity);\n    function addFantasyLandAliases(type) {\n        [ \"equals\", \"map\", \"ap\", \"chain\" ].filter(function(method) {\n            return isFunction(type.prototype[method]);\n        }).forEach(function(method) {\n            type.prototype[\"fantasy-land/\" + method] = type.prototype[method];\n        });\n    }\n    function addAliases(type) {\n        type.prototype.flatMap = type.prototype.chain = type.prototype.bind;\n        type.pure = type.unit = type.of;\n        type.prototype.of = type.of;\n        if (isFunction(type.prototype.append)) {\n            type.prototype.concat = type.prototype.append;\n        }\n        type.prototype.point = type.prototype.pure = type.prototype.unit = type.prototype.of;\n    }\n    function addFilterNot(type) {\n        if (isFunction(type.prototype.filter)) {\n            type.prototype.filterNot = function(fn) {\n                return this.filter(function(a) {\n                    return !fn(a);\n                });\n            };\n        }\n    }\n    function addMonadOps(type) {\n        type.prototype.join = function() {\n            return this.flatMap(idFunction);\n        };\n        type.map2 = function(fn) {\n            return function(ma, mb) {\n                return ma.flatMap(function(a) {\n                    return mb.map(function(b) {\n                        return fn(a, b);\n                    });\n                });\n            };\n        };\n    }\n    function addFunctorOps(type) {\n        if (!isFunction(type.prototype.map)) {\n            type.prototype.map = function(fn) {\n                return this.bind(compose(this.of, fn));\n            };\n        }\n    }\n    function addApplicativeOps(type) {\n        type.prototype.takeLeft = function(m) {\n            return apply2(this, m, function(a, b) {\n                return a;\n            });\n        };\n        type.prototype.takeRight = function(m) {\n            return apply2(this, m, function(a, b) {\n                return b;\n            });\n        };\n    }\n    function addCollectionPredicates(type) {\n        if (isFunction(type.prototype.toArray)) {\n            type.prototype.every = type.prototype.forall = function(fn) {\n                return this.toArray().every(fn);\n            };\n            type.prototype.exists = function(fn) {\n                return this.toArray().some(fn);\n            };\n        }\n    }\n    function makeIterable(type) {\n        if (isFunction(type.prototype.toArray)) {\n            type.prototype[Symbol.iterator] = function() {\n                return this.toArray()[Symbol.iterator]();\n            };\n        }\n    }\n    function addToOperator(type) {\n        if (isFunction(type.prototype.toArray)) {\n            type.prototype.to = function(ctor) {\n                return ctor(this);\n            };\n        }\n    }\n    function decorate(type) {\n        addAliases(type);\n        addFilterNot(type);\n        addMonadOps(type);\n        addFunctorOps(type);\n        addApplicativeOps(type);\n        addCollectionPredicates(type);\n        addFantasyLandAliases(type);\n        makeIterable(type);\n        addToOperator(type);\n    }\n    decorate(MonadT);\n    decorate(Either);\n    decorate(Maybe);\n    decorate(IO);\n    decorate(NEL);\n    decorate(List);\n    decorate(Validation);\n    decorate(Reader);\n    decorate(Free);\n    decorate(Identity);\n    return Monet;\n});\n\n//# sourceURL=webpack://Movai/./node_modules/monet/dist/monet.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : undefined\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack://Movai/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./src/Authentication/Authentication.js":
/*!**********************************************!*\
  !*** ./src/Authentication/Authentication.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ \"./node_modules/@babel/runtime-corejs2/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ \"./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/lib/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar REST_API = \"\".concat(window.location.hostname, \":\").concat(window.location.port);\nvar Authentication = {};\n\nAuthentication.AuthException = function (message) {\n  this.message = message;\n  this.name = \"AuthException\";\n};\n\nAuthentication.getToken = function () {\n  var token = window.localStorage.getItem(\"movai.token\");\n  return token ? token : false;\n};\n\nAuthentication.getRefreshToken = function () {\n  var refreshToken = window.localStorage.getItem(\"movai.refreshToken\");\n  return refreshToken ? refreshToken : false;\n};\n\nAuthentication.getTokenData = function () {\n  var token = getToken();\n  var message = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token).message;\n  var tokenData = {\n    message: message,\n    auth_token: false,\n    refresh_token: getRefreshToken(),\n    error: false,\n    access_token: token\n  };\n  return tokenData;\n};\n\nAuthentication.login = function _callee(username, password, remember) {\n  var headers, url, response, status, data;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          // Cleanup...\n          window.localStorage.removeItem(\"movai.token\");\n          window.localStorage.removeItem(\"movai.refreshToken\");\n          window.localStorage.removeItem(\"movai.tokenRemember\");\n          window.sessionStorage.removeItem(\"movai.session\");\n          headers = {};\n          headers[\"Content-Type\"] = \"application/json\";\n          url = \"\".concat(REST_API, \"/token-auth/\");\n          _context.prev = 7;\n          _context.next = 10;\n          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url, {\n            method: \"POST\",\n            headers: headers,\n            body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({\n              username: username,\n              password: password,\n              remember: remember\n            })\n          }));\n\n        case 10:\n          response = _context.sent;\n          status = response.status;\n          _context.next = 14;\n          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());\n\n        case 14:\n          data = _context.sent;\n\n          if (status === 200) {\n            window.localStorage.setItem(\"movai.token\", data[\"access_token\"]);\n            window.localStorage.setItem(\"movai.refreshToken\", data[\"refresh_token\"]);\n            window.localStorage.setItem(\"movai.tokenRemember\", remember == \"undefined\" ? false : remember);\n            window.sessionStorage.setItem(\"movai.session\", true);\n          }\n\n          return _context.abrupt(\"return\", data);\n\n        case 19:\n          _context.prev = 19;\n          _context.t0 = _context[\"catch\"](7);\n          throw _context.t0;\n\n        case 22:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, null, null, [[7, 19]]);\n};\n\nAuthentication.logout = function () {\n  window.localStorage.removeItem(\"movai.token\");\n  window.localStorage.removeItem(\"movai.refreshToken\");\n  window.localStorage.removeItem(\"movai.tokenRemember\");\n  window.sessionStorage.removeItem(\"movai.session\");\n};\n\nAuthentication.checkLogin = function _callee2() {\n  var token, refreshToken, tokenRemember, sessionFlag, tokenData, refreshTokenData, url, headers, response, status, data;\n  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          token = window.localStorage.getItem(\"movai.token\");\n          refreshToken = window.localStorage.getItem(\"movai.refreshToken\");\n          tokenRemember = window.localStorage.getItem(\"movai.tokenRemember\");\n          sessionFlag = window.sessionStorage.getItem(\"movai.session\");\n\n          if (!(token === null || refreshToken === null)) {\n            _context2.next = 6;\n            break;\n          }\n\n          return _context2.abrupt(\"return\", false);\n\n        case 6:\n          tokenData = null;\n          _context2.prev = 7;\n          tokenData = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token);\n          _context2.next = 14;\n          break;\n\n        case 11:\n          _context2.prev = 11;\n          _context2.t0 = _context2[\"catch\"](7);\n          return _context2.abrupt(\"return\", false);\n\n        case 14:\n          if (!(tokenData[\"exp\"] > new Date().getTime() / 1000)) {\n            _context2.next = 16;\n            break;\n          }\n\n          return _context2.abrupt(\"return\", true);\n\n        case 16:\n          if (!(tokenRemember == \"false\" && sessionFlag === null)) {\n            _context2.next = 19;\n            break;\n          }\n\n          logout();\n          return _context2.abrupt(\"return\", false);\n\n        case 19:\n          if (!refreshToken) {\n            _context2.next = 41;\n            break;\n          }\n\n          _context2.prev = 20;\n          // Refresh Token\n          refreshTokenData = jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(refreshToken);\n\n          if (!(refreshTokenData[\"exp\"] < new Date().getTime() / 1000)) {\n            _context2.next = 24;\n            break;\n          }\n\n          throw \"refresh token has expired\";\n\n        case 24:\n          url = \"\".concat(REST_API, \"/token-refresh/\");\n          headers = {\n            \"Content-Type\": \"application/json\"\n          };\n          _context2.next = 28;\n          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url, {\n            method: \"POST\",\n            headers: headers,\n            body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({\n              token: refreshToken\n            })\n          }));\n\n        case 28:\n          response = _context2.sent;\n          status = response.status;\n          _context2.next = 32;\n          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());\n\n        case 32:\n          data = _context2.sent;\n\n          if (!(status === 200)) {\n            _context2.next = 37;\n            break;\n          }\n\n          window.localStorage.setItem(\"movai.token\", data[\"access_token\"]);\n          window.localStorage.setItem(\"movai.refreshToken\", data[\"refresh_token\"]);\n          return _context2.abrupt(\"return\", true);\n\n        case 37:\n          _context2.next = 41;\n          break;\n\n        case 39:\n          _context2.prev = 39;\n          _context2.t1 = _context2[\"catch\"](20);\n\n        case 41:\n          return _context2.abrupt(\"return\", false);\n\n        case 42:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, null, null, [[7, 11], [20, 39]]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Authentication);\n\n//# sourceURL=webpack://Movai/./src/Authentication/Authentication.js?");

/***/ }),

/***/ "./src/Database/Database.js":
/*!**********************************!*\
  !*** ./src/Database/Database.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ \"./node_modules/@babel/runtime-corejs2/core-js/promise.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ \"./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js\");\n/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ \"./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Authentication/Authentication */ \"./src/Authentication/Authentication.js\");\n\n\n\n\n\nvar getToken = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getToken,\n    AuthException = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_4__[\"default\"].AuthException,\n    checkLogin = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_4__[\"default\"].checkLogin;\n\nvar Database = function Database() {\n  var _this = this;\n\n  _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Database);\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"connect\", function () {\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      var wsUrl = \"\".concat(_this.WS_API, \"?token=\").concat(getToken());\n      _this.websocket = new WebSocket(wsUrl);\n\n      _this.websocket.onopen = function (evt) {\n        return _this.onOpen(evt);\n      };\n\n      _this.websocket.onclose = function (evt) {\n        return _this.onClose(evt);\n      };\n\n      _this.websocket.onmessage = function (evt) {\n        return _this.onMessage(evt);\n      };\n\n      _this.websocket.onerror = function (evt) {\n        return _this.onError(evt);\n      };\n    });\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"onOpen\", function (evt) {\n    _this.dispatch(\"onopen\", undefined);\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"onClose\", function (evt) {\n    _this.dispatch(\"onclose\", undefined);\n\n    if (evt.code !== 1000) {\n      window.setTimeout(_this.connect(), _this.timeout);\n    }\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"onMessage\", function (evt) {\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      var data;\n\n      try {\n        data = JSON.parse(evt.data);\n      } catch (err) {\n        console.error(err);\n        return;\n      }\n\n      if (data.error) {\n        console.error(data.error);\n        return;\n      }\n\n      var patterns = data.patterns;\n      var is_pattern = true;\n      var one_shot = false;\n\n      if ([\"list\", \"unsubscribe\", \"subscribe\"].includes(data.event)) {\n        patterns = patterns.map(function (p) {\n          if (data.event === \"unsubscribe\") {\n            delete _this.callbacks[_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(p)];\n          }\n\n          return data.event + \"/\" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(p);\n        });\n\n        if (data.event === \"list\") {\n          patterns = [\"list\"];\n        }\n\n        is_pattern = false;\n        one_shot = true;\n      }\n\n      patterns.map(function (pattern) {\n        _this.dispatch(pattern, data, is_pattern, one_shot);\n      });\n    });\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"checkTest\", function (pattern, data, is_pattern, one_shot) {\n    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {\n      _this.dispatch(pattern, data, is_pattern, one_shot);\n\n      if (true) {\n        resolve(\"DONE\");\n      }\n    });\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"onError\", function (evt) {\n    _this.dispatch(\"onerror\", undefined);\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"onEvent\", function (event_name) {\n    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    _this.evt_callbacks[event_name] = _this.evt_callbacks[event_name] || [];\n\n    _this.evt_callbacks[event_name].push(callback);\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"close\", function () {\n    return _this.websocket.close();\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"subscribe\", function (_pattern) {\n    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    var evt_callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var message = {\n      event: \"subscribe\",\n      pattern: _pattern\n    };\n\n    var pattern = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_pattern);\n\n    _this.callbacks[pattern] = _this.callbacks[pattern] || [];\n\n    _this.callbacks[pattern].push(callback);\n\n    if (evt_callback) {\n      _this.evt_callbacks[\"subscribe/\" + pattern] = _this.evt_callbacks[\"subscribe\" + pattern] || [];\n\n      _this.evt_callbacks[\"subscribe/\" + pattern].push(evt_callback);\n    }\n\n    _this._send(message);\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"unsubscribe\", function (_pattern) {\n    var evt_callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    console.log(\"Unsubscribe called \" + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_pattern));\n    var message = {\n      event: \"unsubscribe\",\n      pattern: _pattern\n    };\n\n    var pattern = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_pattern);\n\n    if (evt_callback) {\n      _this.evt_callbacks[\"unsubscribe/\" + pattern] = _this.evt_callbacks[\"unsubscribe/\" + pattern] || [];\n\n      _this.evt_callbacks[\"unsubscribe/\" + pattern].push(evt_callback);\n    }\n\n    _this._send(message);\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"list\", function () {\n    var evt_callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;\n    var message = {\n      event: \"list\"\n    };\n    _this.evt_callbacks[\"list\"] = _this.evt_callbacks[\"list\"] || [];\n\n    _this.evt_callbacks[\"list\"].push(evt_callback);\n\n    _this._send(message);\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"_send\", function (message) {\n    var self = _this;\n\n    try {\n      _this.websocket.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(message));\n    } catch (err) {\n      var sub_interval = undefined;\n      sub_interval = setInterval(function () {\n        if (self.websocket.readyState === 1) {\n          clearInterval(sub_interval);\n          self.websocket.send(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(message));\n        }\n      }, 200, sub_interval);\n    }\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"dispatch\", function (_pattern, message) {\n    var is_pattern = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    var one_shot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n    /*if is_pattern is false then pattern is an event thus trigger evt_callbacks */\n    var _callbacks = undefined;\n    var pattern = _pattern;\n\n    if (is_pattern === true) {\n      pattern = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(_pattern);\n      _callbacks = _this.callbacks[pattern];\n    } else {\n      _callbacks = _this.evt_callbacks[pattern];\n    }\n\n    if (_callbacks === undefined) return;\n\n    for (var i = 0; i < _callbacks.length; i++) {\n      if (typeof _callbacks[i] === \"function\") {\n        _callbacks[i](message);\n      }\n    }\n\n    if (_callbacks) {\n      if (one_shot === true) {\n        _callbacks = [];\n      } else {//NOTHING\n      }\n    }\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"getVar\", function (key) {\n    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"global\";\n\n    if (![\"global\", \"fleet\"].includes(scope)) {\n      throw \"Only fleet and global scopes available.\";\n    }\n\n    if (scope === \"fleet\") {\n      // key format: robot_name@key_name\n      if (key.split(\"@\").length < 2) {\n        throw \"Wrong key format (robot_name@key_name)\";\n      }\n    }\n\n    var url = _this.REST_API + \"Var/\" + scope + \"/\" + key + \"/\";\n    checkLogin().then(function (res) {\n      fetch(url).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        if (callback) {\n          callback(data);\n        } else {//NOTHING\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"setVar\", function (key, value) {\n    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"global\";\n\n    if (![\"global\", \"fleet\"].includes(scope)) {\n      throw \"Only fleet and global scopes available.\";\n    }\n\n    if (scope === \"fleet\") {\n      // key format: robot_name@key_name\n      var values = key.split(\"@\");\n\n      if (key.split(\"@\").length < 2) {\n        throw \"Wrong key format (robot_name@key_name)\";\n      }\n    }\n\n    var data = {\n      key: key,\n      scope: scope,\n      value: value\n    };\n    var url = _this.REST_API + \"Var/\";\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          callback(res);\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"post\", function (scope, name, key, value) {\n    var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n    }\n\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({\n          key: key,\n          data: value\n        }),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          });\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"upload\", function (packageName, key, value) {\n    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n    var url = \"\".concat(_this.REST_API, \"upload/\").concat(packageName, \"/\");\n    var formData = new FormData();\n    formData.append(\"name\", key);\n    formData.append(\"data\", value);\n    fetch(url, {\n      method: \"POST\",\n      body: formData\n    }).then(function (res) {\n      return res.json();\n    }).then(callback);\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"put\", function (scope, name, value) {\n    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n    console.log(\"database put\", url);\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n    }\n\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"PUT\",\n        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(value),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          })[\"catch\"](function (e) {\n            callback(undefined, res);\n\n            if (true) {\n              alert(\"Development Mode \\n\" + \"Status: \" + res.status + \"\\n\" + \"Error: \" + res.statusText);\n            }\n          });\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"delete\", function (scope, name) {\n    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n      return;\n    }\n\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"DELETE\",\n        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          })[\"catch\"](function (e) {\n            callback(undefined, res);\n\n            if (true) {\n              alert(\"Development Mode \\n\" + \"Status: \" + res.status + \"\\n\" + \"Error: \" + res.statusText);\n            }\n          });\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"cloudFunction\", function (cloudFunction) {\n    var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    var args = arguments.length > 2 ? arguments[2] : undefined;\n    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      var url = _this.REST_API + \"function/\" + cloudFunction + \"/\";\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({\n          func: func,\n          args: args\n        }),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            return callback(data);\n          });\n        }\n      });\n    });\n  });\n\n  _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"postTabs\", function (name, value) {\n    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var scope = \"User\";\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n      return;\n    }\n\n    var newValue = value.map(function (obj) {\n      return {\n        componentName: obj.componentName,\n        name: obj.name\n      };\n    });\n    var key_workspace = {\n      Workspace: \"*\"\n    };\n    checkLogin().then(function (res) {\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({\n          key: key_workspace,\n          data: newValue\n        }),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          })[\"catch\"](function (e) {\n            callback(undefined, res);\n\n            if (true) {\n              alert(\"Development Mode \\n\" + \"Status: \" + res.status + \"\\n\" + \"Error: \" + res.statusText);\n            }\n          });\n        }\n      });\n    });\n  });\n\n  this.host = \"\".concat(window.location.hostname, \":\").concat(window.location.port);\n  this.WS_API = \"ws://\" + this.host + \"/ws/subscriber\";\n  this.REST_API = \"http://\" + this.host + \"/api/v1/\";\n  this.callbacks = {};\n  this.evt_callbacks = {};\n  this.timeout = 3000;\n  this.websocket = undefined;\n  this.connect();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Database);\n\n//# sourceURL=webpack://Movai/./src/Database/Database.js?");

/***/ }),

/***/ "./src/Utils/Utils.js":
/*!****************************!*\
  !*** ./src/Utils/Utils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var monet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! monet */ \"./node_modules/monet/dist/monet.js\");\n/* harmony import */ var monet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(monet__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Utils = {};\n\nUtils.ofNull = function (x) {\n  return monet__WEBPACK_IMPORTED_MODULE_0__[\"Maybe\"].fromNull(x);\n};\n\nUtils.range = function (init, end) {\n  var ans = [];\n\n  for (var i = 0; i < end; i++) {\n    ans.push(i);\n  }\n\n  return ans;\n};\n\nUtils.randomInt = function (a, b) {\n  return Math.floor(Utils.random(a, b));\n};\n\nUtils.random = function (a, b) {\n  return a + (b - a) * Math.random();\n};\n\nUtils.normalizeStr = function (str) {\n  // from https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript\n  return str.normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").toLowerCase();\n};\n/**\n *\n * @param {*} array\n * @param {*} groupFunction : function x => group class;\n *\n * Usage example:\n *\n * groupBy([1,2,3,4,5,6,7,8,9], x => x % 3) // {0: [3,6,9], 1:[1,4,7], 2:[2,5,8]}\n */\n\n\nUtils.groupBy = function (array, groupFunction) {\n  var ans = {};\n  array.forEach(function (x) {\n    var key = groupFunction(x);\n    if (!ans[key]) ans[key] = [];\n    ans[key].push(x);\n  });\n  return ans;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utils);\n\n//# sourceURL=webpack://Movai/./src/Utils/Utils.js?");

/***/ })

/******/ });
});