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
/*! exports provided: Authentication, Utils, Database, MasterDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Authentication_Authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Authentication/Authentication */ \"./src/Authentication/Authentication.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Authentication\", function() { return _src_Authentication_Authentication__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _src_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Utils/Utils */ \"./src/Utils/Utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Utils\", function() { return _src_Utils_Utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _src_Database_Database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Database/Database */ \"./src/Database/Database.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Database\", function() { return _src_Database_Database__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _src_Database_MasterDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Database/MasterDB */ \"./src/Database/MasterDB.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MasterDB\", function() { return _src_Database_MasterDB__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack://Movai/./index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/concat */ \"./node_modules/core-js-pure/stable/instance/concat.js\");\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/for-each */ \"./node_modules/core-js-pure/stable/instance/for-each.js\");\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/includes */ \"./node_modules/core-js-pure/stable/instance/includes.js\");\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/map */ \"./node_modules/core-js-pure/stable/instance/map.js\");\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/json/stringify */ \"./node_modules/core-js-pure/stable/json/stringify.js\");\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/promise */ \"./node_modules/core-js-pure/stable/promise/index.js\");\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/set-interval */ \"./node_modules/core-js-pure/stable/set-interval.js\");\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/define-property */ \"./node_modules/core-js-pure/features/object/define-property.js\");\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classCallCheck; });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js/object/define-property.js\");\n/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n\n\n//# sourceURL=webpack://Movai/./node_modules/@babel/runtime-corejs3/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/concat.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/concat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.concat */ \"./node_modules/core-js-pure/modules/es.array.concat.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').concat;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/es/array/virtual/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/for-each.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.for-each */ \"./node_modules/core-js-pure/modules/es.array.for-each.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').forEach;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/es/array/virtual/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/includes.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/includes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.includes */ \"./node_modules/core-js-pure/modules/es.array.includes.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').includes;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/es/array/virtual/includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.map */ \"./node_modules/core-js-pure/modules/es.array.map.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').map;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/es/array/virtual/map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var concat = __webpack_require__(/*! ../array/virtual/concat */ \"./node_modules/core-js-pure/es/array/virtual/concat.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.concat;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.concat) ? concat : own;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/es/instance/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayIncludes = __webpack_require__(/*! ../array/virtual/includes */ \"./node_modules/core-js-pure/es/array/virtual/includes.js\");\nvar stringIncludes = __webpack_require__(/*! ../string/virtual/includes */ \"./node_modules/core-js-pure/es/string/virtual/includes.js\");\n\nvar ArrayPrototype = Array.prototype;\nvar StringPrototype = String.prototype;\n\nmodule.exports = function (it) {\n  var own = it.includes;\n  if (it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.includes)) return arrayIncludes;\n  if (typeof it === 'string' || it === StringPrototype || (it instanceof String && own === StringPrototype.includes)) {\n    return stringIncludes;\n  } return own;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/es/instance/includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = __webpack_require__(/*! ../array/virtual/map */ \"./node_modules/core-js-pure/es/array/virtual/map.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.map;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/es/instance/map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/json/stringify.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/json/stringify.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.json.stringify */ \"./node_modules/core-js-pure/modules/es.json.stringify.js\");\nvar core = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nif (!core.JSON) core.JSON = { stringify: JSON.stringify };\n\n// eslint-disable-next-line no-unused-vars\nmodule.exports = function stringify(it, replacer, space) {\n  return core.JSON.stringify.apply(null, arguments);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/es/json/stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/define-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/define-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.define-property */ \"./node_modules/core-js-pure/modules/es.object.define-property.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar defineProperty = module.exports = function defineProperty(it, key, desc) {\n  return Object.defineProperty(it, key, desc);\n};\n\nif (Object.defineProperty.sham) defineProperty.sham = true;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/es/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/promise/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/promise/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.to-string */ \"./node_modules/core-js-pure/modules/es.object.to-string.js\");\n__webpack_require__(/*! ../../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\n__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n__webpack_require__(/*! ../../modules/es.promise */ \"./node_modules/core-js-pure/modules/es.promise.js\");\n__webpack_require__(/*! ../../modules/es.promise.all-settled */ \"./node_modules/core-js-pure/modules/es.promise.all-settled.js\");\n__webpack_require__(/*! ../../modules/es.promise.finally */ \"./node_modules/core-js-pure/modules/es.promise.finally.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Promise;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/es/promise/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/string/virtual/includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/string/virtual/includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.string.includes */ \"./node_modules/core-js-pure/modules/es.string.includes.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('String').includes;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/es/string/virtual/includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/define-property */ \"./node_modules/core-js-pure/es/object/define-property.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/features/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-function.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-function.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  } return it;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () { /* empty */ };\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-instance.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-instance.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it, Constructor, name) {\n  if (!(it instanceof Constructor)) {\n    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');\n  } return it;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/an-instance.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-for-each.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").forEach;\nvar sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ \"./node_modules/core-js-pure/internals/sloppy-array-method.js\");\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nmodule.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js-pure/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-iteration.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-iteration.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js-pure/internals/bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js-pure/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-has-species-support.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ \"./node_modules/core-js-pure/internals/v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-species-create.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-species-create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/bind-context.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/bind-context.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js-pure/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\n\n// call something on iterator step with safe closing on error\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);\n  // 7.4.6 IteratorClose(iterator, completion)\n  } catch (error) {\n    var returnMethod = iterator['return'];\n    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));\n    throw error;\n  }\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/check-correctness-of-iteration.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return { done: !!called++ };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  };\n  // eslint-disable-next-line no-throw-literal\n  Array.from(iteratorWithReturn, function () { throw 2; });\n} catch (error) { /* empty */ }\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n  try {\n    var object = {};\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return { done: ITERATION_SUPPORT = true };\n        }\n      };\n    };\n    exec(object);\n  } catch (error) { /* empty */ }\n  return ITERATION_SUPPORT;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n// ES3 wrong here\nvar CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';\n\n// fallback for IE11 Script Access Denied error\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) { /* empty */ }\n};\n\n// getting tag from ES6+ `Object.prototype.toString`\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null'\n    // @@toStringTag case\n    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag\n    // builtinTag case\n    : CORRECT_ARGUMENTS ? classofRaw(O)\n    // ES3 arguments fallback\n    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-is-regexp-logic.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-is-regexp-logic.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (e) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (f) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/correct-is-regexp-logic.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() { /* empty */ }\n  F.prototype.constructor = null;\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-iterator-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\").IteratorPrototype;\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js-pure/internals/create-iterator-constructor.js\");\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js-pure/internals/object-set-prototype-of.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js-pure/internals/redefine.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () { return this; };\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n    switch (KIND) {\n      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };\n      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };\n      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };\n    } return function () { return new IteratorConstructor(this); };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR]\n    || IterablePrototype['@@iterator']\n    || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY;\n\n  // fix native\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      }\n      // Set @@toStringTag to native iterators\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  }\n\n  // fix Array#{values, @@iterator}.name in V8 / FF\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n    defaultIterator = function values() { return nativeIterator.call(this); };\n  }\n\n  // define iterator\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);\n  }\n  Iterators[NAME] = defaultIterator;\n\n  // export additional methods\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);\n  }\n\n  return methods;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/define-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/dom-iterables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/dom-iterables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/entry-virtual.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/entry-virtual.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = function (CONSTRUCTOR) {\n  return path[CONSTRUCTOR + 'Prototype'];\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/entry-virtual.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js-pure/internals/is-forced.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js-pure/internals/bind-context.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof NativeConstructor) {\n      switch (arguments.length) {\n        case 0: return new NativeConstructor();\n        case 1: return new NativeConstructor(a);\n        case 2: return new NativeConstructor(a, b);\n      } return new NativeConstructor(a, b, c);\n    } return NativeConstructor.apply(this, arguments);\n  };\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;\n\n  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});\n  var targetPrototype = target.prototype;\n\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contains in native\n    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);\n\n    targetProperty = target[key];\n\n    if (USE_NATIVE) if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key];\n\n    // export native or implementation\n    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];\n\n    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;\n\n    // bind timers to global for call from export context\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);\n    // wrap global constructors for prevent changs in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);\n    // make static versions for prototype methods\n    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);\n    // default case\n    else resultProperty = sourceProperty;\n\n    // add a flag to not completely full polyfills\n    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    target[key] = resultProperty;\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n      if (!has(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      }\n      // export virtual prototype methods\n      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;\n      // export real prototype methods\n      if (options.real && targetPrototype && !targetPrototype[key]) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR]\n    || it['@@iterator']\n    || Iterators[classof(it)];\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/hidden-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/host-report-errors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/host-report-errors.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nmodule.exports = function (a, b) {\n  var console = global.console;\n  if (console && console.error) {\n    arguments.length === 1 ? console.error(a) : console.error(a, b);\n  }\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/host-report-errors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/inspect-source.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/inspect-source.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\n\nvar functionToString = Function.toString;\n\nmodule.exports = shared('inspectSource', function (it) {\n  return functionToString.call(it);\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/internal-state.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/internal-state.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js-pure/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array-iterator-method.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype;\n\n// check on default Array iterator\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-ios.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-ios.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var userAgent = __webpack_require__(/*! ../internals/user-agent */ \"./node_modules/core-js-pure/internals/user-agent.js\");\n\nmodule.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/is-ios.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.github.io/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterate.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterate.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js-pure/internals/is-array-iterator-method.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js-pure/internals/bind-context.js\");\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js\");\n\nvar Result = function (stopped, result) {\n  this.stopped = stopped;\n  this.result = result;\n};\n\nvar iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {\n  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);\n  var iterator, iterFn, index, length, result, next, step;\n\n  if (IS_ITERATOR) {\n    iterator = iterable;\n  } else {\n    iterFn = getIteratorMethod(iterable);\n    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');\n    // optimisation for array iterators\n    if (isArrayIteratorMethod(iterFn)) {\n      for (index = 0, length = toLength(iterable.length); length > index; index++) {\n        result = AS_ENTRIES\n          ? boundFunction(anObject(step = iterable[index])[0], step[1])\n          : boundFunction(iterable[index]);\n        if (result && result instanceof Result) return result;\n      } return new Result(false);\n    }\n    iterator = iterFn.call(iterable);\n  }\n\n  next = iterator.next;\n  while (!(step = next.call(iterator)).done) {\n    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);\n    if (typeof result == 'object' && result && result instanceof Result) return result;\n  } return new Result(false);\n};\n\niterate.stop = function (result) {\n  return new Result(true, result);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/iterate.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators-core.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators-core.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () { return this; };\n\n// `%IteratorPrototype%` object\n// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\nif ([].keys) {\n  arrayIterator = [].keys();\n  // Safari 8 has buggy iterators w/o `next`\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;\n  else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nif (IteratorPrototype == undefined) IteratorPrototype = {};\n\n// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\nif (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {\n  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/microtask.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/microtask.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar macrotask = __webpack_require__(/*! ../internals/task */ \"./node_modules/core-js-pure/internals/task.js\").set;\nvar IS_IOS = __webpack_require__(/*! ../internals/is-ios */ \"./node_modules/core-js-pure/internals/is-ios.js\");\n\nvar MutationObserver = global.MutationObserver || global.WebKitMutationObserver;\nvar process = global.process;\nvar Promise = global.Promise;\nvar IS_NODE = classof(process) == 'process';\n// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`\nvar queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');\nvar queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;\n\nvar flush, head, last, notify, toggle, node, promise, then;\n\n// modern engines have queueMicrotask method\nif (!queueMicrotask) {\n  flush = function () {\n    var parent, fn;\n    if (IS_NODE && (parent = process.domain)) parent.exit();\n    while (head) {\n      fn = head.fn;\n      head = head.next;\n      try {\n        fn();\n      } catch (error) {\n        if (head) notify();\n        else last = undefined;\n        throw error;\n      }\n    } last = undefined;\n    if (parent) parent.enter();\n  };\n\n  // Node.js\n  if (IS_NODE) {\n    notify = function () {\n      process.nextTick(flush);\n    };\n  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339\n  } else if (MutationObserver && !IS_IOS) {\n    toggle = true;\n    node = document.createTextNode('');\n    new MutationObserver(flush).observe(node, { characterData: true });\n    notify = function () {\n      node.data = toggle = !toggle;\n    };\n  // environments with maybe non-completely correct, but existent Promise\n  } else if (Promise && Promise.resolve) {\n    // Promise.resolve without an argument throws an error in LG WebOS 2\n    promise = Promise.resolve(undefined);\n    then = promise.then;\n    notify = function () {\n      then.call(promise, flush);\n    };\n  // for other environments - macrotask based on:\n  // - setImmediate\n  // - MessageChannel\n  // - window.postMessag\n  // - onreadystatechange\n  // - setTimeout\n  } else {\n    notify = function () {\n      // strange IE + webpack dev server bug - use .call(global)\n      macrotask.call(global, flush);\n    };\n  }\n}\n\nmodule.exports = queueMicrotask || function (fn) {\n  var task = { fn: fn, next: undefined };\n  if (last) last.next = task;\n  if (!head) {\n    head = task;\n    notify();\n  } last = task;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/microtask.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-promise-constructor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-promise-constructor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nmodule.exports = global.Promise;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/native-promise-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-weak-map.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-weak-map.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js-pure/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/new-promise-capability.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/new-promise-capability.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js-pure/internals/a-function.js\");\n\nvar PromiseCapability = function (C) {\n  var resolve, reject;\n  this.promise = new C(function ($$resolve, $$reject) {\n    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');\n    resolve = $$resolve;\n    reject = $$reject;\n  });\n  this.resolve = aFunction(resolve);\n  this.reject = aFunction(reject);\n};\n\n// 25.4.1.5 NewPromiseCapability(C)\nmodule.exports.f = function (C) {\n  return new PromiseCapability(C);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/new-promise-capability.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/not-a-regexp.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/not-a-regexp.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js-pure/internals/is-regexp.js\");\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw TypeError(\"The method doesn't accept regular expressions\");\n  } return it;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/not-a-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js-pure/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js-pure/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar PROTOTYPE = 'prototype';\nvar Empty = function () { /* empty */ };\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar createDict = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var length = enumBugKeys.length;\n  var lt = '<';\n  var script = 'script';\n  var gt = '>';\n  var js = 'java' + script + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  iframe.src = String(js);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);\n  iframeDocument.close();\n  createDict = iframeDocument.F;\n  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];\n  return createDict();\n};\n\n// `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    Empty[PROTOTYPE] = anObject(O);\n    result = new Empty();\n    Empty[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = createDict();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-properties.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-properties.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperties\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype;\n\n// `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  } return O instanceof Object ? ObjectPrototype : null;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys-internal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js-pure/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js-pure/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js-pure/internals/a-possible-prototype.js\");\n\n// `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n/* eslint-disable no-proto */\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) { /* empty */ }\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);\n    else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-to-string.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-string.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\n\n// `Object.prototype.toString` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/object-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/perform.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/perform.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return { error: false, value: exec() };\n  } catch (error) {\n    return { error: true, value: error };\n  }\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/perform.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/promise-resolve.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/promise-resolve.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js-pure/internals/new-promise-capability.js\");\n\nmodule.exports = function (C, x) {\n  anObject(C);\n  if (isObject(x) && x.constructor === C) return x;\n  var promiseCapability = newPromiseCapability.f(C);\n  var resolve = promiseCapability.resolve;\n  resolve(x);\n  return promiseCapability.promise;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/promise-resolve.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/redefine-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine-all.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js-pure/internals/redefine.js\");\n\nmodule.exports = function (target, src, options) {\n  for (var key in src) {\n    if (options && options.unsafe && target[key]) target[key] = src[key];\n    else redefine(target, key, src[key], options);\n  } return target;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/redefine-all.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/redefine.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (target, key, value, options) {\n  if (options && options.enumerable) target[key] = value;\n  else createNonEnumerableProperty(target, key, value);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-species.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-species.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (CONSTRUCTOR_NAME) {\n  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);\n  var defineProperty = definePropertyModule.f;\n\n  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {\n    defineProperty(Constructor, SPECIES, {\n      configurable: true,\n      get: function () { return this; }\n    });\n  }\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/set-species.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/core-js-pure/internals/object-to-string.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC, SET_METHOD) {\n  if (it) {\n    var target = STATIC ? it : it.prototype;\n    if (!has(target, TO_STRING_TAG)) {\n      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });\n    }\n    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {\n      createNonEnumerableProperty(target, 'toString', toString);\n    }\n  }\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-key.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js-pure/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.4.7',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/sloppy-array-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/sloppy-array-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !method || !fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/sloppy-array-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js-pure/internals/a-function.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `SpeciesConstructor` abstract operation\n// https://tc39.github.io/ecma262/#sec-speciesconstructor\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-multibyte.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-multibyte.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/task.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/task.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js-pure/internals/bind-context.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js-pure/internals/html.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\nvar IS_IOS = __webpack_require__(/*! ../internals/is-ios */ \"./node_modules/core-js-pure/internals/is-ios.js\");\n\nvar location = global.location;\nvar set = global.setImmediate;\nvar clear = global.clearImmediate;\nvar process = global.process;\nvar MessageChannel = global.MessageChannel;\nvar Dispatch = global.Dispatch;\nvar counter = 0;\nvar queue = {};\nvar ONREADYSTATECHANGE = 'onreadystatechange';\nvar defer, channel, port;\n\nvar run = function (id) {\n  // eslint-disable-next-line no-prototype-builtins\n  if (queue.hasOwnProperty(id)) {\n    var fn = queue[id];\n    delete queue[id];\n    fn();\n  }\n};\n\nvar runner = function (id) {\n  return function () {\n    run(id);\n  };\n};\n\nvar listener = function (event) {\n  run(event.data);\n};\n\nvar post = function (id) {\n  // old engines have not location.origin\n  global.postMessage(id + '', location.protocol + '//' + location.host);\n};\n\n// Node.js 0.9+ & IE10+ has setImmediate, otherwise:\nif (!set || !clear) {\n  set = function setImmediate(fn) {\n    var args = [];\n    var i = 1;\n    while (arguments.length > i) args.push(arguments[i++]);\n    queue[++counter] = function () {\n      // eslint-disable-next-line no-new-func\n      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);\n    };\n    defer(counter);\n    return counter;\n  };\n  clear = function clearImmediate(id) {\n    delete queue[id];\n  };\n  // Node.js 0.8-\n  if (classof(process) == 'process') {\n    defer = function (id) {\n      process.nextTick(runner(id));\n    };\n  // Sphere (JS game engine) Dispatch API\n  } else if (Dispatch && Dispatch.now) {\n    defer = function (id) {\n      Dispatch.now(runner(id));\n    };\n  // Browsers with MessageChannel, includes WebWorkers\n  // except iOS - https://github.com/zloirock/core-js/issues/624\n  } else if (MessageChannel && !IS_IOS) {\n    channel = new MessageChannel();\n    port = channel.port2;\n    channel.port1.onmessage = listener;\n    defer = bind(port.postMessage, port, 1);\n  // Browsers with postMessage, skip WebWorkers\n  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'\n  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {\n    defer = post;\n    global.addEventListener('message', listener, false);\n  // IE8-\n  } else if (ONREADYSTATECHANGE in createElement('script')) {\n    defer = function (id) {\n      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {\n        html.removeChild(this);\n        run(id);\n      };\n    };\n  // Rest old browsers\n  } else {\n    defer = function (id) {\n      setTimeout(runner(id), 0);\n    };\n  }\n}\n\nmodule.exports = {\n  set: set,\n  clear: clear\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/task.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-absolute-index.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-integer.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-length.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-string-tag-support.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-string-tag-support.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\n\ntest[TO_STRING_TAG] = 'z';\n\nmodule.exports = String(test) === '[object z]';\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js-pure/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  // eslint-disable-next-line no-undef\n  && !Symbol.sham\n  // eslint-disable-next-line no-undef\n  && typeof Symbol() == 'symbol';\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/user-agent.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/user-agent.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/v8-version.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/v8-version.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/user-agent */ \"./node_modules/core-js-pure/internals/user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js-pure/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];\n    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.concat.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.concat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js-pure/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ \"./node_modules/core-js-pure/internals/v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  concat: function concat(arg) { // eslint-disable-line no-unused-vars\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.array.concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.for-each.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js-pure/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.includes.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.includes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar $includes = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js-pure/internals/array-includes.js\").includes;\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js-pure/internals/add-to-unscopables.js\");\n\n// `Array.prototype.includes` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.includes\n$({ target: 'Array', proto: true }, {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('includes');\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js-pure/internals/add-to-unscopables.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);\n\n// `Array.prototype.entries` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.github.io/ecma262/#sec-createarrayiterator\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated), // target\n    index: 0,                          // next index\n    kind: kind                         // kind\n  });\n// `%ArrayIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return { value: undefined, done: true };\n  }\n  if (kind == 'keys') return { value: index, done: false };\n  if (kind == 'values') return { value: target[index], done: false };\n  return { value: [index, target[index]], done: false };\n}, 'values');\n\n// argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject\nIterators.Arguments = Iterators.Array;\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar $map = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").map;\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');\n// FF49- issue\nvar USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {\n  [].map.call({ length: -1, 0: 1 }, function (it) { throw it; });\n});\n\n// `Array.prototype.map` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.map\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.json.stringify.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.json.stringify.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar re = /[\\uD800-\\uDFFF]/g;\nvar low = /^[\\uD800-\\uDBFF]$/;\nvar hi = /^[\\uDC00-\\uDFFF]$/;\n\nvar fix = function (match, offset, string) {\n  var prev = string.charAt(offset - 1);\n  var next = string.charAt(offset + 1);\n  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {\n    return '\\\\u' + match.charCodeAt(0).toString(16);\n  } return match;\n};\n\nvar FORCED = fails(function () {\n  return $stringify('\\uDF06\\uD834') !== '\"\\\\udf06\\\\ud834\"'\n    || $stringify('\\uDEAD') !== '\"\\\\udead\"';\n});\n\nif ($stringify) {\n  // https://github.com/tc39/proposal-well-formed-stringify\n  $({ target: 'JSON', stat: true, forced: FORCED }, {\n    // eslint-disable-next-line no-unused-vars\n    stringify: function stringify(it, replacer, space) {\n      var result = $stringify.apply(null, arguments);\n      return typeof result == 'string' ? result.replace(re, fix) : result;\n    }\n  });\n}\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.json.stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.define-property.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\n$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {\n  defineProperty: objectDefinePropertyModile.f\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.all-settled.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.all-settled.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js-pure/internals/a-function.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js-pure/internals/perform.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js-pure/internals/iterate.js\");\n\n// `Promise.allSettled` method\n// https://github.com/tc39/proposal-promise-allSettled\n$({ target: 'Promise', stat: true }, {\n  allSettled: function allSettled(iterable) {\n    var C = this;\n    var capability = newPromiseCapabilityModule.f(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var promiseResolve = aFunction(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        promiseResolve.call(C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = { status: 'fulfilled', value: value };\n          --remaining || resolve(values);\n        }, function (e) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = { status: 'rejected', reason: e };\n          --remaining || resolve(values);\n        });\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.promise.all-settled.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.finally.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.finally.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ \"./node_modules/core-js-pure/internals/native-promise-constructor.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js-pure/internals/species-constructor.js\");\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"./node_modules/core-js-pure/internals/promise-resolve.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js-pure/internals/redefine.js\");\n\n// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829\nvar NON_GENERIC = !!NativePromise && fails(function () {\n  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });\n});\n\n// `Promise.prototype.finally` method\n// https://tc39.github.io/ecma262/#sec-promise.prototype.finally\n$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {\n  'finally': function (onFinally) {\n    var C = speciesConstructor(this, getBuiltIn('Promise'));\n    var isFunction = typeof onFinally == 'function';\n    return this.then(\n      isFunction ? function (x) {\n        return promiseResolve(C, onFinally()).then(function () { return x; });\n      } : onFinally,\n      isFunction ? function (e) {\n        return promiseResolve(C, onFinally()).then(function () { throw e; });\n      } : onFinally\n    );\n  }\n});\n\n// patch native Promise.prototype for native async functions\nif (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {\n  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);\n}\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.promise.finally.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.promise.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.promise.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\nvar NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ \"./node_modules/core-js-pure/internals/native-promise-constructor.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js-pure/internals/redefine.js\");\nvar redefineAll = __webpack_require__(/*! ../internals/redefine-all */ \"./node_modules/core-js-pure/internals/redefine-all.js\");\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\nvar setSpecies = __webpack_require__(/*! ../internals/set-species */ \"./node_modules/core-js-pure/internals/set-species.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js-pure/internals/a-function.js\");\nvar anInstance = __webpack_require__(/*! ../internals/an-instance */ \"./node_modules/core-js-pure/internals/an-instance.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js-pure/internals/inspect-source.js\");\nvar iterate = __webpack_require__(/*! ../internals/iterate */ \"./node_modules/core-js-pure/internals/iterate.js\");\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js-pure/internals/check-correctness-of-iteration.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js-pure/internals/species-constructor.js\");\nvar task = __webpack_require__(/*! ../internals/task */ \"./node_modules/core-js-pure/internals/task.js\").set;\nvar microtask = __webpack_require__(/*! ../internals/microtask */ \"./node_modules/core-js-pure/internals/microtask.js\");\nvar promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ \"./node_modules/core-js-pure/internals/promise-resolve.js\");\nvar hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ \"./node_modules/core-js-pure/internals/host-report-errors.js\");\nvar newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ \"./node_modules/core-js-pure/internals/new-promise-capability.js\");\nvar perform = __webpack_require__(/*! ../internals/perform */ \"./node_modules/core-js-pure/internals/perform.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js-pure/internals/is-forced.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ \"./node_modules/core-js-pure/internals/v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\nvar PROMISE = 'Promise';\nvar getInternalState = InternalStateModule.get;\nvar setInternalState = InternalStateModule.set;\nvar getInternalPromiseState = InternalStateModule.getterFor(PROMISE);\nvar PromiseConstructor = NativePromise;\nvar TypeError = global.TypeError;\nvar document = global.document;\nvar process = global.process;\nvar $fetch = getBuiltIn('fetch');\nvar newPromiseCapability = newPromiseCapabilityModule.f;\nvar newGenericPromiseCapability = newPromiseCapability;\nvar IS_NODE = classof(process) == 'process';\nvar DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);\nvar UNHANDLED_REJECTION = 'unhandledrejection';\nvar REJECTION_HANDLED = 'rejectionhandled';\nvar PENDING = 0;\nvar FULFILLED = 1;\nvar REJECTED = 2;\nvar HANDLED = 1;\nvar UNHANDLED = 2;\nvar Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;\n\nvar FORCED = isForced(PROMISE, function () {\n  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);\n  if (!GLOBAL_CORE_JS_PROMISE) {\n    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables\n    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565\n    // We can't detect it synchronously, so just check versions\n    if (V8_VERSION === 66) return true;\n    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test\n    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;\n  }\n  // We need Promise#finally in the pure version for preventing prototype pollution\n  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;\n  // We can't use @@species feature detection in V8 since it causes\n  // deoptimization and performance degradation\n  // https://github.com/zloirock/core-js/issues/679\n  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;\n  // Detect correctness of subclassing with @@species support\n  var promise = PromiseConstructor.resolve(1);\n  var FakePromise = function (exec) {\n    exec(function () { /* empty */ }, function () { /* empty */ });\n  };\n  var constructor = promise.constructor = {};\n  constructor[SPECIES] = FakePromise;\n  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);\n});\n\nvar INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {\n  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });\n});\n\n// helpers\nvar isThenable = function (it) {\n  var then;\n  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;\n};\n\nvar notify = function (promise, state, isReject) {\n  if (state.notified) return;\n  state.notified = true;\n  var chain = state.reactions;\n  microtask(function () {\n    var value = state.value;\n    var ok = state.state == FULFILLED;\n    var index = 0;\n    // variable length - can't use forEach\n    while (chain.length > index) {\n      var reaction = chain[index++];\n      var handler = ok ? reaction.ok : reaction.fail;\n      var resolve = reaction.resolve;\n      var reject = reaction.reject;\n      var domain = reaction.domain;\n      var result, then, exited;\n      try {\n        if (handler) {\n          if (!ok) {\n            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);\n            state.rejection = HANDLED;\n          }\n          if (handler === true) result = value;\n          else {\n            if (domain) domain.enter();\n            result = handler(value); // can throw\n            if (domain) {\n              domain.exit();\n              exited = true;\n            }\n          }\n          if (result === reaction.promise) {\n            reject(TypeError('Promise-chain cycle'));\n          } else if (then = isThenable(result)) {\n            then.call(result, resolve, reject);\n          } else resolve(result);\n        } else reject(value);\n      } catch (error) {\n        if (domain && !exited) domain.exit();\n        reject(error);\n      }\n    }\n    state.reactions = [];\n    state.notified = false;\n    if (isReject && !state.rejection) onUnhandled(promise, state);\n  });\n};\n\nvar dispatchEvent = function (name, promise, reason) {\n  var event, handler;\n  if (DISPATCH_EVENT) {\n    event = document.createEvent('Event');\n    event.promise = promise;\n    event.reason = reason;\n    event.initEvent(name, false, true);\n    global.dispatchEvent(event);\n  } else event = { promise: promise, reason: reason };\n  if (handler = global['on' + name]) handler(event);\n  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);\n};\n\nvar onUnhandled = function (promise, state) {\n  task.call(global, function () {\n    var value = state.value;\n    var IS_UNHANDLED = isUnhandled(state);\n    var result;\n    if (IS_UNHANDLED) {\n      result = perform(function () {\n        if (IS_NODE) {\n          process.emit('unhandledRejection', value, promise);\n        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);\n      });\n      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should\n      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;\n      if (result.error) throw result.value;\n    }\n  });\n};\n\nvar isUnhandled = function (state) {\n  return state.rejection !== HANDLED && !state.parent;\n};\n\nvar onHandleUnhandled = function (promise, state) {\n  task.call(global, function () {\n    if (IS_NODE) {\n      process.emit('rejectionHandled', promise);\n    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);\n  });\n};\n\nvar bind = function (fn, promise, state, unwrap) {\n  return function (value) {\n    fn(promise, state, value, unwrap);\n  };\n};\n\nvar internalReject = function (promise, state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  state.value = value;\n  state.state = REJECTED;\n  notify(promise, state, true);\n};\n\nvar internalResolve = function (promise, state, value, unwrap) {\n  if (state.done) return;\n  state.done = true;\n  if (unwrap) state = unwrap;\n  try {\n    if (promise === value) throw TypeError(\"Promise can't be resolved itself\");\n    var then = isThenable(value);\n    if (then) {\n      microtask(function () {\n        var wrapper = { done: false };\n        try {\n          then.call(value,\n            bind(internalResolve, promise, wrapper, state),\n            bind(internalReject, promise, wrapper, state)\n          );\n        } catch (error) {\n          internalReject(promise, wrapper, error, state);\n        }\n      });\n    } else {\n      state.value = value;\n      state.state = FULFILLED;\n      notify(promise, state, false);\n    }\n  } catch (error) {\n    internalReject(promise, { done: false }, error, state);\n  }\n};\n\n// constructor polyfill\nif (FORCED) {\n  // 25.4.3.1 Promise(executor)\n  PromiseConstructor = function Promise(executor) {\n    anInstance(this, PromiseConstructor, PROMISE);\n    aFunction(executor);\n    Internal.call(this);\n    var state = getInternalState(this);\n    try {\n      executor(bind(internalResolve, this, state), bind(internalReject, this, state));\n    } catch (error) {\n      internalReject(this, state, error);\n    }\n  };\n  // eslint-disable-next-line no-unused-vars\n  Internal = function Promise(executor) {\n    setInternalState(this, {\n      type: PROMISE,\n      done: false,\n      notified: false,\n      parent: false,\n      reactions: [],\n      rejection: false,\n      state: PENDING,\n      value: undefined\n    });\n  };\n  Internal.prototype = redefineAll(PromiseConstructor.prototype, {\n    // `Promise.prototype.then` method\n    // https://tc39.github.io/ecma262/#sec-promise.prototype.then\n    then: function then(onFulfilled, onRejected) {\n      var state = getInternalPromiseState(this);\n      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));\n      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;\n      reaction.fail = typeof onRejected == 'function' && onRejected;\n      reaction.domain = IS_NODE ? process.domain : undefined;\n      state.parent = true;\n      state.reactions.push(reaction);\n      if (state.state != PENDING) notify(this, state, false);\n      return reaction.promise;\n    },\n    // `Promise.prototype.catch` method\n    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch\n    'catch': function (onRejected) {\n      return this.then(undefined, onRejected);\n    }\n  });\n  OwnPromiseCapability = function () {\n    var promise = new Internal();\n    var state = getInternalState(promise);\n    this.promise = promise;\n    this.resolve = bind(internalResolve, promise, state);\n    this.reject = bind(internalReject, promise, state);\n  };\n  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {\n    return C === PromiseConstructor || C === PromiseWrapper\n      ? new OwnPromiseCapability(C)\n      : newGenericPromiseCapability(C);\n  };\n\n  if (!IS_PURE && typeof NativePromise == 'function') {\n    nativeThen = NativePromise.prototype.then;\n\n    // wrap native Promise#then for native async functions\n    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {\n      var that = this;\n      return new PromiseConstructor(function (resolve, reject) {\n        nativeThen.call(that, resolve, reject);\n      }).then(onFulfilled, onRejected);\n    // https://github.com/zloirock/core-js/issues/640\n    }, { unsafe: true });\n\n    // wrap fetch result\n    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {\n      // eslint-disable-next-line no-unused-vars\n      fetch: function fetch(input /* , init */) {\n        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));\n      }\n    });\n  }\n}\n\n$({ global: true, wrap: true, forced: FORCED }, {\n  Promise: PromiseConstructor\n});\n\nsetToStringTag(PromiseConstructor, PROMISE, false, true);\nsetSpecies(PROMISE);\n\nPromiseWrapper = getBuiltIn(PROMISE);\n\n// statics\n$({ target: PROMISE, stat: true, forced: FORCED }, {\n  // `Promise.reject` method\n  // https://tc39.github.io/ecma262/#sec-promise.reject\n  reject: function reject(r) {\n    var capability = newPromiseCapability(this);\n    capability.reject.call(undefined, r);\n    return capability.promise;\n  }\n});\n\n$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {\n  // `Promise.resolve` method\n  // https://tc39.github.io/ecma262/#sec-promise.resolve\n  resolve: function resolve(x) {\n    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);\n  }\n});\n\n$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {\n  // `Promise.all` method\n  // https://tc39.github.io/ecma262/#sec-promise.all\n  all: function all(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var resolve = capability.resolve;\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aFunction(C.resolve);\n      var values = [];\n      var counter = 0;\n      var remaining = 1;\n      iterate(iterable, function (promise) {\n        var index = counter++;\n        var alreadyCalled = false;\n        values.push(undefined);\n        remaining++;\n        $promiseResolve.call(C, promise).then(function (value) {\n          if (alreadyCalled) return;\n          alreadyCalled = true;\n          values[index] = value;\n          --remaining || resolve(values);\n        }, reject);\n      });\n      --remaining || resolve(values);\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  },\n  // `Promise.race` method\n  // https://tc39.github.io/ecma262/#sec-promise.race\n  race: function race(iterable) {\n    var C = this;\n    var capability = newPromiseCapability(C);\n    var reject = capability.reject;\n    var result = perform(function () {\n      var $promiseResolve = aFunction(C.resolve);\n      iterate(iterable, function (promise) {\n        $promiseResolve.call(C, promise).then(capability.resolve, reject);\n      });\n    });\n    if (result.error) reject(result.value);\n    return capability.promise;\n  }\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.promise.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js-pure/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js-pure/internals/correct-is-regexp-logic.js\");\n\n// `String.prototype.includes` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.includes\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~String(requireObjectCoercible(this))\n      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js-pure/internals/string-multibyte.js\").charAt;\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);\n\n// `String.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: String(iterated),\n    index: 0\n  });\n// `%StringIteratorPrototype%.next` method\n// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return { value: undefined, done: true };\n  point = charAt(string, index);\n  state.index += point.length;\n  return { value: point, done: false };\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/es.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js-pure/internals/dom-iterables.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  if (CollectionPrototype && !CollectionPrototype[TO_STRING_TAG]) {\n    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n  }\n  Iterators[COLLECTION_NAME] = Iterators.Array;\n}\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.timers.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.timers.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/user-agent */ \"./node_modules/core-js-pure/internals/user-agent.js\");\n\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\n\nvar wrap = function (scheduler) {\n  return function (handler, timeout /* , ...arguments */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : undefined;\n    return scheduler(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func\n      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);\n    } : handler, timeout);\n  };\n};\n\n// ie9- setTimeout & setInterval additional parameters fix\n// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers\n$({ global: true, bind: true, forced: MSIE }, {\n  // `setTimeout` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout\n  setTimeout: wrap(global.setTimeout),\n  // `setInterval` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/modules/web.timers.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/virtual/for-each.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/for-each.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../../es/array/virtual/for-each */ \"./node_modules/core-js-pure/es/array/virtual/for-each.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/stable/array/virtual/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/concat.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/concat.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/concat */ \"./node_modules/core-js-pure/es/instance/concat.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/stable/instance/concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/for-each.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\nvar forEach = __webpack_require__(/*! ../array/virtual/for-each */ \"./node_modules/core-js-pure/stable/array/virtual/for-each.js\");\nvar classof = __webpack_require__(/*! ../../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\nvar ArrayPrototype = Array.prototype;\n\nvar DOMIterables = {\n  DOMTokenList: true,\n  NodeList: true\n};\n\nmodule.exports = function (it) {\n  var own = it.forEach;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)\n    // eslint-disable-next-line no-prototype-builtins\n    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;\n};\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/stable/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/includes */ \"./node_modules/core-js-pure/es/instance/includes.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/stable/instance/includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/map.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/map.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/map */ \"./node_modules/core-js-pure/es/instance/map.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/stable/instance/map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/json/stringify.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/json/stringify.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/json/stringify */ \"./node_modules/core-js-pure/es/json/stringify.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/stable/json/stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/promise/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/promise/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/promise */ \"./node_modules/core-js-pure/es/promise/index.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/stable/promise/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/set-interval.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/set-interval.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.timers */ \"./node_modules/core-js-pure/modules/web.timers.js\");\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.setInterval;\n\n\n//# sourceURL=webpack://Movai/./node_modules/core-js-pure/stable/set-interval.js?");

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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://Movai/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/Authentication/Authentication.js":
/*!**********************************************!*\
  !*** ./src/Authentication/Authentication.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ \"./node_modules/@babel/runtime-corejs3/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/lib/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _context;\n\n\n\nvar REST_API = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context = \"http://\".concat(window.location.hostname, \":\")).call(_context, window.location.port);\n\nvar Authentication = {};\n\nAuthentication.AuthException = function (message) {\n  this.message = message;\n  this.name = \"AuthException\";\n};\n\nAuthentication.getToken = function () {\n  var token = window.localStorage.getItem(\"movai.token\");\n  return token ? token : false;\n};\n\nAuthentication.getRefreshToken = function () {\n  var refreshToken = window.localStorage.getItem(\"movai.refreshToken\");\n  return refreshToken ? refreshToken : false;\n};\n\nAuthentication.getTokenData = function () {\n  var token = getToken();\n  var message = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token).message;\n  var tokenData = {\n    message: message,\n    auth_token: false,\n    refresh_token: getRefreshToken(),\n    error: false,\n    access_token: token\n  };\n  return tokenData;\n};\n\nAuthentication.login = function _callee(username, password, remember) {\n  var headers, url, response, status, data;\n  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          // Cleanup...\n          window.localStorage.removeItem(\"movai.token\");\n          window.localStorage.removeItem(\"movai.refreshToken\");\n          window.localStorage.removeItem(\"movai.tokenRemember\");\n          window.sessionStorage.removeItem(\"movai.session\");\n          headers = {};\n          headers[\"Content-Type\"] = \"application/json\";\n          url = \"\".concat(REST_API, \"/token-auth/\");\n          _context2.prev = 7;\n          _context2.next = 10;\n          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url, {\n            method: \"POST\",\n            headers: headers,\n            body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({\n              username: username,\n              password: password,\n              remember: remember\n            })\n          }));\n\n        case 10:\n          response = _context2.sent;\n          status = response.status;\n          _context2.next = 14;\n          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());\n\n        case 14:\n          data = _context2.sent;\n\n          if (status === 200) {\n            window.localStorage.setItem(\"movai.token\", data[\"access_token\"]);\n            window.localStorage.setItem(\"movai.refreshToken\", data[\"refresh_token\"]);\n            window.localStorage.setItem(\"movai.tokenRemember\", remember == \"undefined\" ? false : remember);\n            window.sessionStorage.setItem(\"movai.session\", true);\n          }\n\n          return _context2.abrupt(\"return\", data);\n\n        case 19:\n          _context2.prev = 19;\n          _context2.t0 = _context2[\"catch\"](7);\n          throw _context2.t0;\n\n        case 22:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, null, null, [[7, 19]]);\n};\n\nAuthentication.logout = function () {\n  window.localStorage.removeItem(\"movai.token\");\n  window.localStorage.removeItem(\"movai.refreshToken\");\n  window.localStorage.removeItem(\"movai.tokenRemember\");\n  window.sessionStorage.removeItem(\"movai.session\");\n};\n\nAuthentication.checkLogin = function _callee2() {\n  var token, refreshToken, tokenRemember, sessionFlag, tokenData, refreshTokenData, url, headers, response, status, data;\n  return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          token = window.localStorage.getItem(\"movai.token\");\n          refreshToken = window.localStorage.getItem(\"movai.refreshToken\");\n          tokenRemember = window.localStorage.getItem(\"movai.tokenRemember\");\n          sessionFlag = window.sessionStorage.getItem(\"movai.session\");\n\n          if (!(token === null || refreshToken === null)) {\n            _context3.next = 6;\n            break;\n          }\n\n          return _context3.abrupt(\"return\", false);\n\n        case 6:\n          tokenData = null;\n          _context3.prev = 7;\n          tokenData = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token);\n          _context3.next = 14;\n          break;\n\n        case 11:\n          _context3.prev = 11;\n          _context3.t0 = _context3[\"catch\"](7);\n          return _context3.abrupt(\"return\", false);\n\n        case 14:\n          if (!(tokenData[\"exp\"] > new Date().getTime() / 1000)) {\n            _context3.next = 16;\n            break;\n          }\n\n          return _context3.abrupt(\"return\", true);\n\n        case 16:\n          if (!(tokenRemember == \"false\" && sessionFlag === null)) {\n            _context3.next = 19;\n            break;\n          }\n\n          logout();\n          return _context3.abrupt(\"return\", false);\n\n        case 19:\n          if (!refreshToken) {\n            _context3.next = 41;\n            break;\n          }\n\n          _context3.prev = 20;\n          // Refresh Token\n          refreshTokenData = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(refreshToken);\n\n          if (!(refreshTokenData[\"exp\"] < new Date().getTime() / 1000)) {\n            _context3.next = 24;\n            break;\n          }\n\n          throw \"refresh token has expired\";\n\n        case 24:\n          url = \"\".concat(REST_API, \"/token-refresh/\");\n          headers = {\n            \"Content-Type\": \"application/json\"\n          };\n          _context3.next = 28;\n          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url, {\n            method: \"POST\",\n            headers: headers,\n            body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({\n              token: refreshToken\n            })\n          }));\n\n        case 28:\n          response = _context3.sent;\n          status = response.status;\n          _context3.next = 32;\n          return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());\n\n        case 32:\n          data = _context3.sent;\n\n          if (!(status === 200)) {\n            _context3.next = 37;\n            break;\n          }\n\n          window.localStorage.setItem(\"movai.token\", data[\"access_token\"]);\n          window.localStorage.setItem(\"movai.refreshToken\", data[\"refresh_token\"]);\n          return _context3.abrupt(\"return\", true);\n\n        case 37:\n          _context3.next = 41;\n          break;\n\n        case 39:\n          _context3.prev = 39;\n          _context3.t1 = _context3[\"catch\"](20);\n\n        case 41:\n          return _context3.abrupt(\"return\", false);\n\n        case 42:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, null, null, [[7, 11], [20, 39]]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Authentication);\n\n//# sourceURL=webpack://Movai/./src/Authentication/Authentication.js?");

/***/ }),

/***/ "./src/Database/Database.js":
/*!**********************************!*\
  !*** ./src/Database/Database.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-interval */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/set-interval.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Authentication/Authentication */ \"./src/Authentication/Authentication.js\");\n\n\n\n\n\n\n\n\n\nvar getToken = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getToken,\n    AuthException = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_8__[\"default\"].AuthException,\n    checkLogin = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_8__[\"default\"].checkLogin;\n\nvar Database = function Database() {\n  var _this = this,\n      _context6;\n\n  Object(_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, Database);\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"connect\", function () {\n    checkLogin().then(function (res) {\n      var _context;\n\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      var wsUrl = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context = \"\".concat(_this.WS_API, \"?token=\")).call(_context, getToken());\n\n      _this.websocket = new WebSocket(wsUrl);\n\n      _this.websocket.onopen = function (evt) {\n        return _this.onOpen(evt);\n      };\n\n      _this.websocket.onclose = function (evt) {\n        return _this.onClose(evt);\n      };\n\n      _this.websocket.onmessage = function (evt) {\n        return _this.onMessage(evt);\n      };\n\n      _this.websocket.onerror = function (evt) {\n        return _this.onError(evt);\n      };\n    });\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"onOpen\", function (evt) {\n    _this.dispatch(\"onopen\", undefined);\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"onClose\", function (evt) {\n    _this.dispatch(\"onclose\", undefined);\n\n    if (evt.code !== 1000) {\n      window.setTimeout(_this.connect(), _this.timeout);\n    }\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"onMessage\", function (evt) {\n    checkLogin().then(function (res) {\n      var _context2;\n\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      var data;\n\n      try {\n        data = JSON.parse(evt.data);\n      } catch (err) {\n        console.error(err);\n        return;\n      }\n\n      if (data.error) {\n        console.error(data.error);\n        return;\n      }\n\n      var patterns = data.patterns;\n      var is_pattern = true;\n      var one_shot = false;\n\n      if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = [\"list\", \"unsubscribe\", \"subscribe\"]).call(_context2, data.event)) {\n        patterns = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(patterns).call(patterns, function (p) {\n          if (data.event === \"unsubscribe\") {\n            delete _this.callbacks[_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(p)];\n          }\n\n          return data.event + \"/\" + _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(p);\n        });\n\n        if (data.event === \"list\") {\n          patterns = [\"list\"];\n        }\n\n        is_pattern = false;\n        one_shot = true;\n      }\n\n      _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(patterns).call(patterns, function (pattern) {\n        _this.dispatch(pattern, data, is_pattern, one_shot);\n      });\n    });\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"checkTest\", function (pattern, data, is_pattern, one_shot) {\n    return new _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default.a(function (resolve, reject) {\n      _this.dispatch(pattern, data, is_pattern, one_shot);\n\n      if (true) {\n        resolve(\"DONE\");\n      }\n    });\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"onError\", function (evt) {\n    _this.dispatch(\"onerror\", undefined);\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"onEvent\", function (event_name) {\n    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    _this.evt_callbacks[event_name] = _this.evt_callbacks[event_name] || [];\n\n    _this.evt_callbacks[event_name].push(callback);\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"close\", function () {\n    return _this.websocket.close();\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"subscribe\", function (_pattern) {\n    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    var evt_callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var message = {\n      event: \"subscribe\",\n      pattern: _pattern\n    };\n\n    var pattern = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_pattern);\n\n    _this.callbacks[pattern] = _this.callbacks[pattern] || [];\n\n    _this.callbacks[pattern].push(callback);\n\n    if (evt_callback) {\n      _this.evt_callbacks[\"subscribe/\" + pattern] = _this.evt_callbacks[\"subscribe\" + pattern] || [];\n\n      _this.evt_callbacks[\"subscribe/\" + pattern].push(evt_callback);\n    }\n\n    _this._send(message);\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"unsubscribe\", function (_pattern) {\n    var evt_callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    console.log(\"Unsubscribe called \" + _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_pattern));\n    var message = {\n      event: \"unsubscribe\",\n      pattern: _pattern\n    };\n\n    var pattern = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_pattern);\n\n    if (evt_callback) {\n      _this.evt_callbacks[\"unsubscribe/\" + pattern] = _this.evt_callbacks[\"unsubscribe/\" + pattern] || [];\n\n      _this.evt_callbacks[\"unsubscribe/\" + pattern].push(evt_callback);\n    }\n\n    _this._send(message);\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"list\", function () {\n    var evt_callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;\n    var message = {\n      event: \"list\"\n    };\n    _this.evt_callbacks[\"list\"] = _this.evt_callbacks[\"list\"] || [];\n\n    _this.evt_callbacks[\"list\"].push(evt_callback);\n\n    _this._send(message);\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"_send\", function (message) {\n    var self = _this;\n\n    try {\n      _this.websocket.send(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(message));\n    } catch (err) {\n      var sub_interval = undefined;\n      sub_interval = _babel_runtime_corejs3_core_js_stable_set_interval__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n        if (self.websocket.readyState === 1) {\n          clearInterval(sub_interval);\n          self.websocket.send(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(message));\n        }\n      }, 200, sub_interval);\n    }\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"dispatch\", function (_pattern, message) {\n    var is_pattern = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n    var one_shot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n    /*if is_pattern is false then pattern is an event thus trigger evt_callbacks */\n    var _callbacks = undefined;\n    var pattern = _pattern;\n\n    if (is_pattern === true) {\n      pattern = _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(_pattern);\n      _callbacks = _this.callbacks[pattern];\n    } else {\n      _callbacks = _this.evt_callbacks[pattern];\n    }\n\n    if (_callbacks === undefined) return;\n\n    for (var i = 0; i < _callbacks.length; i++) {\n      if (typeof _callbacks[i] === \"function\") {\n        _callbacks[i](message);\n      }\n    }\n\n    if (_callbacks) {\n      if (one_shot === true) {\n        _callbacks = [];\n      } else {//NOTHING\n      }\n    }\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"getVar\", function (key) {\n    var _context3;\n\n    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"global\";\n\n    if (!_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4___default()(_context3 = [\"global\", \"fleet\"]).call(_context3, scope)) {\n      throw \"Only fleet and global scopes available.\";\n    }\n\n    if (scope === \"fleet\") {\n      // key format: robot_name@key_name\n      if (key.split(\"@\").length < 2) {\n        throw \"Wrong key format (robot_name@key_name)\";\n      }\n    }\n\n    var url = _this.REST_API + \"Var/\" + scope + \"/\" + key + \"/\";\n    checkLogin().then(function (res) {\n      fetch(url).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        if (callback) {\n          callback(data);\n        } else {//NOTHING\n        }\n      });\n    });\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"setVar\", function (key, value) {\n    var _context4;\n\n    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"global\";\n\n    if (!_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_4___default()(_context4 = [\"global\", \"fleet\"]).call(_context4, scope)) {\n      throw \"Only fleet and global scopes available.\";\n    }\n\n    if (scope === \"fleet\") {\n      // key format: robot_name@key_name\n      var values = key.split(\"@\");\n\n      if (key.split(\"@\").length < 2) {\n        throw \"Wrong key format (robot_name@key_name)\";\n      }\n    }\n\n    var data = {\n      key: key,\n      scope: scope,\n      value: value\n    };\n    var url = _this.REST_API + \"Var/\";\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(data),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          callback(res);\n        }\n      });\n    });\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"post\", function (scope, name, key, value) {\n    var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n    }\n\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({\n          key: key,\n          data: value\n        }),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          });\n        }\n      });\n    });\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"upload\", function (packageName, key, value) {\n    var _context5;\n\n    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n\n    var url = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context5 = \"\".concat(_this.REST_API, \"upload/\")).call(_context5, packageName, \"/\");\n\n    var formData = new FormData();\n    formData.append(\"name\", key);\n    formData.append(\"data\", value);\n    fetch(url, {\n      method: \"POST\",\n      body: formData\n    }).then(function (res) {\n      return res.json();\n    }).then(callback);\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"put\", function (scope, name, value) {\n    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n    console.log(\"database put\", url);\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n    }\n\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"PUT\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(value),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          })[\"catch\"](function (e) {\n            callback(undefined, res);\n\n            if (true) {\n              alert(\"Development Mode \\n\" + \"Status: \" + res.status + \"\\n\" + \"Error: \" + res.statusText);\n            }\n          });\n        }\n      });\n    });\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"delete\", function (scope, name) {\n    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n      return;\n    }\n\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      fetch(url, {\n        method: \"DELETE\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(data),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          })[\"catch\"](function (e) {\n            callback(undefined, res);\n\n            if (true) {\n              alert(\"Development Mode \\n\" + \"Status: \" + res.status + \"\\n\" + \"Error: \" + res.statusText);\n            }\n          });\n        }\n      });\n    });\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"cloudFunction\", function (cloudFunction) {\n    var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n    var args = arguments.length > 2 ? arguments[2] : undefined;\n    var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n    checkLogin().then(function (res) {\n      if (!res) {\n        throw new AuthException(\"login error\");\n      }\n\n      var url = _this.REST_API + \"function/\" + cloudFunction + \"/\";\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({\n          func: func,\n          args: args\n        }),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            return callback(data);\n          });\n        }\n      });\n    });\n  });\n\n  Object(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, \"postTabs\", function (name, value) {\n    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n    var scope = \"User\";\n    var url = _this.REST_API + scope + \"/\" + name + \"/\";\n\n    if (name === undefined) {\n      url = _this.REST_API + scope + \"/\";\n      return;\n    }\n\n    var newValue = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(value).call(value, function (obj) {\n      return {\n        componentName: obj.componentName,\n        name: obj.name\n      };\n    });\n\n    var key_workspace = {\n      Workspace: \"*\"\n    };\n    checkLogin().then(function (res) {\n      fetch(url, {\n        method: \"POST\",\n        body: _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({\n          key: key_workspace,\n          data: newValue\n        }),\n        headers: {\n          \"Content-Type\": \"application/json\",\n          Authorization: \"Bearer \".concat(getToken())\n        }\n      }).then(function (res) {\n        if (callback) {\n          res.json().then(function (data) {\n            callback(data, res);\n          })[\"catch\"](function (e) {\n            callback(undefined, res);\n\n            if (true) {\n              alert(\"Development Mode \\n\" + \"Status: \" + res.status + \"\\n\" + \"Error: \" + res.statusText);\n            }\n          });\n        }\n      });\n    });\n  });\n\n  this.host = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_5___default()(_context6 = \"\".concat(window.location.hostname, \":\")).call(_context6, window.location.port);\n  this.WS_API = \"ws://\" + this.host + \"/ws/subscriber\";\n  this.REST_API = \"http://\" + this.host + \"/api/v1/\";\n  this.callbacks = {};\n  this.evt_callbacks = {};\n  this.timeout = 3000;\n  this.websocket = undefined;\n  this.connect();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Database);\n\n//# sourceURL=webpack://Movai/./src/Database/Database.js?");

/***/ }),

/***/ "./src/Database/MasterDB.js":
/*!**********************************!*\
  !*** ./src/Database/MasterDB.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Database */ \"./src/Database/Database.js\");\n\n\n\n/**\n * A Database singleton\n */\n\nvar MasterDB = function MasterDB() {\n  Object(_babel_runtime_corejs3_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MasterDB);\n\n  if (instance) return instance;\n  instance = this;\n  this.db = new _Database__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n}; // private instance\n\n\nObject(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MasterDB, \"subscribe\", function (pattern) {\n  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n  var evtCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n  new MasterDB().db.subscribe(pattern, callback, evtCallback);\n});\n\nObject(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MasterDB, \"unsubscribe\", function (pattern) {\n  var evtCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n  new MasterDB().db.unsubscribe(pattern, evtCallback);\n});\n\nObject(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MasterDB, \"list\", function () {\n  var evtCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;\n  new MasterDB().db.list(evtCallback);\n});\n\nObject(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MasterDB, \"post\", function (scope, name, key, value) {\n  var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;\n  new MasterDB().db.post(scope, name, key, value, callback);\n});\n\nObject(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MasterDB, \"upload\", function (packageName, key, value) {\n  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n  new MasterDB().db.post(packageName, key, value, callback);\n});\n\nObject(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MasterDB, \"put\", function (scope, name, value) {\n  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n  new MasterDB().db.put(scope, name, value, callback);\n});\n\nObject(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MasterDB, \"delete\", function (scope, name) {\n  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n  new MasterDB().db[\"delete\"](scope, name, callback, data);\n});\n\nObject(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MasterDB, \"cloudFunction\", function (cloudFunction) {\n  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  var args = arguments.length > 2 ? arguments[2] : undefined;\n  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;\n  new MasterDB().db.cloudFunction(cloudFunction, func, args, callback);\n});\n\nObject(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MasterDB, \"getVar\", function (key) {\n  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;\n  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"global\";\n  new MasterDB().db.getVar(key, callback, scope);\n});\n\nObject(_babel_runtime_corejs3_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MasterDB, \"setVar\", function (key, value) {\n  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n  var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"global\";\n  new MasterDB().db.setVar(key, value, callback, scope);\n});\n\nvar instance = null;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MasterDB);\n\n//# sourceURL=webpack://Movai/./src/Database/MasterDB.js?");

/***/ }),

/***/ "./src/Utils/Utils.js":
/*!****************************!*\
  !*** ./src/Utils/Utils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var monet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! monet */ \"./node_modules/monet/dist/monet.js\");\n/* harmony import */ var monet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(monet__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar Utils = {};\n\nUtils.ofNull = function (x) {\n  return monet__WEBPACK_IMPORTED_MODULE_2__[\"Maybe\"].fromNull(x);\n};\n\nUtils.range = function (init, end) {\n  var _context;\n\n  var _Maybe$fromNull$map$o = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context = monet__WEBPACK_IMPORTED_MODULE_2__[\"Maybe\"].fromNull(end)).call(_context, function (x) {\n    return {\n      i: init,\n      e: end\n    };\n  }).orSome({\n    i: 0,\n    e: init\n  }),\n      i = _Maybe$fromNull$map$o.i,\n      e = _Maybe$fromNull$map$o.e;\n\n  var ans = [];\n\n  for (var j = i; j < e; j++) {\n    ans.push(j);\n  }\n\n  return ans;\n};\n\nUtils.randomInt = function (a, b) {\n  return Math.floor(Utils.random(a, b));\n};\n\nUtils.random = function (a, b) {\n  var _context2;\n\n  var _Maybe$fromNull$map$o2 = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = monet__WEBPACK_IMPORTED_MODULE_2__[\"Maybe\"].fromNull(b)).call(_context2, function (x) {\n    return {\n      init: a,\n      end: b\n    };\n  }).orSome({\n    init: 0,\n    end: a\n  }),\n      init = _Maybe$fromNull$map$o2.init,\n      end = _Maybe$fromNull$map$o2.end;\n\n  return init + (end - init) * Math.random();\n};\n\nUtils.normalizeStr = function (str) {\n  // from https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript\n  return str.normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\").toLowerCase();\n};\n/**\n *\n * @param {*} array\n * @param {*} groupFunction : function x => group class;\n *\n * Usage example:\n *\n * groupBy([1,2,3,4,5,6,7,8,9], x => x % 3) // {0: [3,6,9], 1:[1,4,7], 2:[2,5,8]}\n */\n\n\nUtils.groupBy = function (array, groupFunction) {\n  var ans = {};\n\n  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_0___default()(array).call(array, function (x) {\n    var key = groupFunction(x);\n    if (!ans[key]) ans[key] = [];\n    ans[key].push(x);\n  });\n\n  return ans;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utils);\n\n//# sourceURL=webpack://Movai/./src/Utils/Utils.js?");

/***/ })

/******/ });
});