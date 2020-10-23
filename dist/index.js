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
/*! exports provided: Authentication, Utils, Database, MasterDB, AuthWebSocket, Style, UndoManager, Clipboard, WSSub */
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












/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/jwt-decode/lib/atob.js":
/*!*********************************************!*\
  !*** ./node_modules/jwt-decode/lib/atob.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),

/***/ "./node_modules/jwt-decode/lib/base64_url_decode.js":
/*!**********************************************************!*\
  !*** ./node_modules/jwt-decode/lib/base64_url_decode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(/*! ./atob */ "./node_modules/jwt-decode/lib/atob.js");

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),

/***/ "./node_modules/jwt-decode/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/jwt-decode/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(/*! ./base64_url_decode */ "./node_modules/jwt-decode/lib/base64_url_decode.js");

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),

/***/ "./node_modules/monet/dist/monet.js":
/*!******************************************!*\
  !*** ./node_modules/monet/dist/monet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Monet.js 0.9.0-rc.1
 *
 * (c) 2012-2018 Chris Myers
 * @license Monet.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * https://monet.github.io/monet.js/
 */
(function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(typeof self !== "undefined" ? self : this, function() {
    "use strict";
    function assignImp(target, source) {
        for (var key in source) {
            if (source.hasOwnProperty(key) && source[key] !== undefined) {
                target[key] = source[key];
            }
        }
        return target;
    }
    var assign = isFunction(Object.assign) ? Object.assign : assignImp;
    var Monet = {
        apply2: apply2,
        assign: assign,
        compose: compose,
        curry: curry(swap(curry), [])([]),
        idFunction: idFunction,
        isFunction: isFunction,
        noop: noop,
        swap: swap
    };
    var TYPE_KEY = "@@type";
    var LIB_NAME = "monet.js";
    var TYPES_NAMES = {
        Identity: "Identity",
        Maybe: "Maybe",
        Either: "Either",
        Validation: "Validation",
        List: "List",
        NEL: "NEL",
        IO: "IO",
        MonadT: "MonadT",
        Reader: "Reader",
        Free: "Free"
    };
    function setType(target, typeName) {
        target[TYPE_KEY] = LIB_NAME + "/" + typeName;
    }
    function isInstance(typeName) {
        return function(target) {
            return (target[TYPE_KEY] || target.constructor[TYPE_KEY]) === LIB_NAME + "/" + typeName;
        };
    }
    function isOfType(typeName) {
        return function(target) {
            var targetType = target[TYPE_KEY] || target.constructor && target.constructor[TYPE_KEY];
            return Boolean(targetType) && targetType.length >= typeName.length && targetType.indexOf(typeName) === targetType.length - typeName.length;
        };
    }
    function isNothing(value) {
        return value == null;
    }
    function isEmpty(value) {
        if (isNothing(value) || value === "") {
            return true;
        }
        if (Array.isArray(value) && value.length === 0) {
            return true;
        }
        if (typeof value === "object") {
            return Object.keys(value).length === 0;
        }
        return false;
    }
    function noop() {}
    function getArgs(args) {
        return Array.prototype.slice.call(args);
    }
    function curry(fn, args) {
        return function() {
            var args1 = args.concat(getArgs(arguments));
            return args1.length >= fn.length ? fn.apply(null, args1.slice(0, args1.length)) : curry(fn, args1);
        };
    }
    function compose(f, g) {
        return function(x) {
            return f(g(x));
        };
    }
    function isFunction(f) {
        return Boolean(f && f.constructor && f.call && f.apply);
    }
    function idFunction(value) {
        return value;
    }
    function trueFunction() {
        return true;
    }
    function areEqual(a, b) {
        if (a === b || a !== a && b !== b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        if (isFunction(a.equals) && isFunction(b.equals)) {
            return a.equals(b);
        }
        return false;
    }
    function equals(a) {
        return function(b) {
            return areEqual(a, b);
        };
    }
    function falseFunction() {
        return false;
    }
    function swap(f) {
        return function(a, b) {
            return f(b, a);
        };
    }
    function apply2(a1, a2, f) {
        return a2.ap(a1.map(curry(f, [])));
    }
    function listEquals(list1, list2) {
        var a = list1;
        var b = list2;
        while (!a.isNil && !b.isNil) {
            if (!equals(a.head())(b.head())) {
                return false;
            }
            a = a.tail();
            b = b.tail();
        }
        return a.isNil && b.isNil;
    }
    function listMapC(fn, l) {
        return l.isNil ? Return(l) : Suspend(function() {
            return listMapC(fn, l.tail());
        }).map(curry(cons, [])(fn(l.head())));
    }
    function listMap(fn, l) {
        return listMapC(fn, l).run();
    }
    function listFilter(list, fn) {
        return list.foldRight(Nil)(function(a, acc) {
            return fn(a) ? cons(a, acc) : acc;
        });
    }
    function listFindC(l, fn) {
        if (l.isNil) {
            return Return(None());
        }
        var h = l.head();
        return fn(h) ? Return(Some(h)) : Suspend(function() {
            return listFindC(l.tail(), fn);
        });
    }
    function listFind(l, fn) {
        return listFindC(l, fn).run();
    }
    function listContainsC(l, val) {
        if (l.isNil) {
            return Return(false);
        }
        var h = l.head();
        return areEqual(h, val) ? Return(true) : Suspend(function() {
            return listContainsC(l.tail(), val);
        });
    }
    function listContains(l, val) {
        return listContainsC(l, val).run();
    }
    function cons(head, tail) {
        return tail.cons(head);
    }
    function List() {
        switch (arguments.length) {
          case 0:
            return new List.fn.init();

          case 1:
            return new List.fn.init(arguments[0]);

          default:
            return new List.fn.init(arguments[0], arguments[1]);
        }
    }
    Monet.List = List;
    var listForEach = function(effectFn, l) {
        if (!l.isNil) {
            effectFn(l.head());
            listForEach(effectFn, l.tail());
        }
    };
    var foldLeft = function(fn, acc, list) {
        function fL(innerAcc, innerList) {
            return innerList.isNil ? Return(innerAcc) : Suspend(function() {
                return fL(fn(innerAcc, innerList.head()), innerList.tail());
            });
        }
        return fL(acc, list).run();
    };
    var foldRight = function(fn, list, acc) {
        function fR(innerList, innerAcc) {
            return innerList.isNil ? Return(innerAcc) : Suspend(function() {
                return fR(innerList.tail(), innerAcc);
            }).map(function(accumulated) {
                return fn(innerList.head(), accumulated);
            });
        }
        return fR(list, acc).run();
    };
    var append = function(self, other) {
        function appendFree(listA, listB) {
            return listA.isNil ? Return(listB) : Suspend(function() {
                return appendFree(listA.tail(), listB).map(function(list) {
                    return list.cons(listA.head());
                });
            });
        }
        return appendFree(self, other).run();
    };
    var sequence = function(list, type) {
        return list.foldRight(type.of(Nil))(type.map2(cons));
    };
    var sequenceValidation = function(list) {
        return list.foldLeft(Success(Nil))(function(acc, a) {
            return acc.ap(a.map(function(v) {
                return function(t) {
                    return cons(v, t);
                };
            }));
        }).map(listReverse);
    };
    var listReverse = function(list) {
        return list.foldLeft(Nil)(swap(cons));
    };
    var listAp = function(list1, list2) {
        return list1.bind(function(x) {
            return list2.map(function(f) {
                return f(x);
            });
        });
    };
    var Nil;
    List.fn = List.prototype = {
        init: function() {
            var head = arguments[0];
            var tail = arguments[1];
            if (arguments.length === 0) {
                this.isNil = true;
                this.size_ = 0;
            } else {
                this.isNil = false;
                this.head_ = head;
                this.tail_ = tail || Nil;
                this.size_ = this.tail_.size() + 1;
            }
            setType(this, TYPES_NAMES.List);
        },
        of: function(value) {
            return new List(value);
        },
        size: function() {
            return this.size_;
        },
        equals: function(other) {
            return (List.isOfType(other) || NEL.isOfType(other)) && listEquals(this, other);
        },
        cons: function(head) {
            return List(head, this);
        },
        snoc: function(element) {
            return this.concat(List(element));
        },
        map: function(fn) {
            return listMap(fn, this);
        },
        toArray: function() {
            return foldLeft(function(acc, e) {
                acc.push(e);
                return acc;
            }, [], this);
        },
        toSet: function() {
            return new Set(this);
        },
        foldLeft: function(initialValue) {
            var self = this;
            return function(fn) {
                return foldLeft(fn, initialValue, self);
            };
        },
        foldRight: function(initialValue) {
            var self = this;
            return function(fn) {
                return foldRight(fn, self, initialValue);
            };
        },
        append: function(list2) {
            return append(this, list2);
        },
        filter: function(fn) {
            return listFilter(this, fn);
        },
        find: function(fn) {
            return listFind(this, fn);
        },
        flatten: function() {
            return foldRight(append, this, Nil);
        },
        flattenMaybe: function() {
            return this.flatMap(Maybe.toList);
        },
        reverse: function() {
            return listReverse(this);
        },
        bind: function(fn) {
            return this.map(fn).flatten();
        },
        forEach: function(effectFn) {
            listForEach(effectFn, this);
        },
        contains: function(val) {
            return listContains(this, val);
        },
        sequenceMaybe: function() {
            return sequence(this, Maybe);
        },
        sequenceValidation: function() {
            return sequenceValidation(this);
        },
        sequenceEither: function() {
            return sequence(this, Either);
        },
        sequenceIO: function() {
            return sequence(this, IO);
        },
        sequenceReader: function() {
            return sequence(this, Reader);
        },
        sequence: function(monadType) {
            return sequence(this, monadType);
        },
        head: function() {
            return this.head_;
        },
        headMaybe: function() {
            return this.isNil ? None() : Some(this.head_);
        },
        tail: function() {
            return this.isNil ? Nil : this.tail_;
        },
        tails: function() {
            return this.isNil ? List(Nil, Nil) : this.tail().tails().cons(this);
        },
        ap: function(list) {
            return listAp(this, list);
        },
        isNEL: falseFunction,
        toString: function() {
            return this.isNil ? "Nil" : "List(" + this.toArray().join(", ") + ")";
        },
        inspect: function() {
            return this.toString();
        }
    };
    List.fn.init.prototype = List.fn;
    setType(List, TYPES_NAMES.List);
    setType(List.fn.init, TYPES_NAMES.List);
    List.isInstance = isInstance(TYPES_NAMES.List);
    List.isOfType = isOfType(TYPES_NAMES.List);
    List.prototype.empty = function() {
        return Nil;
    };
    List.fromArray = function(array) {
        return array.reduceRight(function(acc, next) {
            return acc.cons(next);
        }, Nil);
    };
    List.from = function(iterable) {
        return List.fromArray(Array.from(iterable));
    };
    List.of = function(a) {
        return new List(a, Nil);
    };
    List.prototype.each = List.prototype.forEach;
    Nil = Monet.Nil = new List.fn.init();
    function emptyNELError(head) {
        return new Error("Cannot create an empty Non-Empty List. Passed head is " + head + ".");
    }
    function NEL(head, tail) {
        if (isNothing(head)) {
            throw emptyNELError(head);
        }
        return new NEL.fn.init(head, tail);
    }
    Monet.NEL = Monet.NonEmptyList = NEL;
    NEL.of = function(a) {
        return NEL(a, Nil);
    };
    NEL.fn = NEL.prototype = {
        init: function(head, tail) {
            if (isNothing(head)) {
                throw emptyNELError(head);
            } else {
                this.isNil = false;
                this.head_ = head;
                this.tail_ = isNothing(tail) ? Nil : tail;
                this.size_ = this.tail_.size() + 1;
            }
            setType(this, TYPES_NAMES.NEL);
        },
        equals: function(other) {
            return List.isOfType(other) || NEL.isOfType(other) && listEquals(this, other);
        },
        cons: function(head) {
            return NEL(head, this.toList());
        },
        snoc: function(element) {
            return this.concat(NEL(element));
        },
        map: function(fn) {
            return NEL(fn(this.head_), listMap(fn, this.tail_));
        },
        bind: function(fn) {
            var p = fn(this.head_);
            if (!p.isNEL()) {
                throw new Error("NEL.fn.bind: Passed function must return a NonEmptyList.");
            }
            var list = this.tail().foldLeft(Nil.snoc(p.head()).append(p.tail()))(function(acc, e) {
                var list2 = fn(e).toList();
                return acc.snoc(list2.head()).append(list2.tail());
            });
            return new NEL(list.head(), list.tail());
        },
        head: function() {
            return this.head_;
        },
        tail: function() {
            return this.tail_;
        },
        tails: function() {
            var listsOfNels = this.toList().tails().map(NEL.fromList).flattenMaybe();
            return NEL(listsOfNels.head(), listsOfNels.tail());
        },
        toList: function() {
            return List(this.head_, this.tail_);
        },
        reverse: function() {
            if (this.tail().isNil) {
                return this;
            }
            var reversedTail = this.tail().reverse();
            return NEL(reversedTail.head(), reversedTail.tail().append(List(this.head())));
        },
        foldLeft: function(initialValue) {
            return this.toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toList().foldRight(initialValue);
        },
        reduceLeft: function(fn) {
            return this.tail().foldLeft(this.head())(fn);
        },
        filter: function(fn) {
            return listFilter(this.toList(), fn);
        },
        find: function(fn) {
            return listFind(this.toList(), fn);
        },
        flatten: function() {
            return foldRight(append, this.toList().map(function(l) {
                return l.isNEL() ? l.toList() : l;
            }), Nil);
        },
        flattenMaybe: function() {
            return this.toList().flatMap(Maybe.toList);
        },
        contains: function(val) {
            return listContains(this.toList(), val);
        },
        append: function(list2) {
            return NEL.fromList(this.toList().append(list2.toList())).some();
        },
        cobind: function(fn) {
            return this.cojoin().map(fn);
        },
        size: function() {
            return this.size_;
        },
        forEach: function(fn) {
            return this.toList().forEach(fn);
        },
        isNEL: trueFunction,
        toString: function() {
            return "NEL(" + this.toArray().join(", ") + ")";
        },
        inspect: function() {
            return this.toString();
        }
    };
    NEL.fromList = function(list) {
        return list.isNil ? None() : Some(NEL(list.head(), list.tail()));
    };
    NEL.fromArray = function(array) {
        return NEL.fromList(List.fromArray(array));
    };
    NEL.from = function(iterable) {
        return NEL.fromList(List.from(iterable));
    };
    NEL.fn.init.prototype = NEL.fn;
    setType(NEL, TYPES_NAMES.NEL);
    setType(NEL.fn.init, TYPES_NAMES.NEL);
    NEL.isInstance = isInstance(TYPES_NAMES.NEL);
    NEL.isOfType = isOfType(TYPES_NAMES.NEL);
    NEL.prototype.toArray = List.prototype.toArray;
    NEL.prototype.toSet = List.prototype.toSet;
    NEL.prototype.extract = NEL.prototype.copure = NEL.prototype.head;
    NEL.prototype.cojoin = NEL.prototype.tails;
    NEL.prototype.coflatMap = NEL.prototype.mapTails = NEL.prototype.cobind;
    NEL.prototype.ap = List.prototype.ap;
    var Maybe = Monet.Maybe = {};
    Maybe.fromFalsy = function(val) {
        return !val ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.fromNull = function(val) {
        return isNothing(val) ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.fromUndefined = function(val) {
        return val === undefined ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.fromEmpty = function(val) {
        return isEmpty(val) ? Maybe.None() : Maybe.Some(val);
    };
    Maybe.of = function(a) {
        return Some(a);
    };
    var Some = Maybe.Just = Maybe.Some = Maybe.some = Monet.Some = Monet.Just = function(val) {
        return new Maybe.fn.init(true, val);
    };
    var None = Maybe.Nothing = Maybe.None = Maybe.none = Monet.None = Monet.Nothing = function() {
        return new Maybe.fn.init(false, null);
    };
    Maybe.toList = function(maybe) {
        return maybe.toList();
    };
    Maybe.fn = Maybe.prototype = {
        init: function(isValue, val) {
            this.isValue = isValue;
            if (isValue && isNothing(val)) {
                throw new Error("Can not create Some with illegal value: " + val + ".");
            }
            this.val = val;
            setType(this, TYPES_NAMES.Maybe);
        },
        isSome: function() {
            return this.isValue;
        },
        isNone: function() {
            return !this.isSome();
        },
        bind: function(bindFn) {
            return this.isValue ? bindFn(this.val) : this;
        },
        some: function() {
            if (this.isValue) {
                return this.val;
            }
            throw new Error("Cannot call .some() on a None.");
        },
        orSome: function(otherValue) {
            return this.isValue ? this.val : otherValue;
        },
        orLazy: function(getOtherValue) {
            return this.cata(getOtherValue, idFunction);
        },
        orNull: function() {
            return this.orSome(null);
        },
        orUndefined: function() {
            return this.orSome(undefined);
        },
        orElse: function(maybe) {
            return this.catchMap(function() {
                return maybe;
            });
        },
        ap: function(maybeWithFunction) {
            var value = this.val;
            return this.isValue ? maybeWithFunction.map(function(fn) {
                return fn(value);
            }) : this;
        },
        equals: function(other) {
            return Maybe.isOfType(other) && this.cata(function() {
                return other.isNone();
            }, function(val) {
                return other.fold(false)(equals(val));
            });
        },
        toArray: function() {
            return this.map(function(val) {
                return [ val ];
            }).orLazy(function() {
                return [];
            });
        },
        toSet: function() {
            return new Set(this);
        },
        toList: function() {
            return this.map(List).orLazy(function() {
                return Nil;
            });
        },
        toEither: function(failVal) {
            return this.isSome() ? Right(this.val) : Left(failVal);
        },
        toValidation: function(failVal) {
            return this.isSome() ? Success(this.val) : Fail(failVal);
        },
        fold: function(defaultValue) {
            var self = this;
            return function(fn) {
                return self.isSome() ? fn(self.val) : defaultValue;
            };
        },
        foldLeft: function(initialValue) {
            return this.toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toList().foldRight(initialValue);
        },
        cata: function(none, some) {
            return this.isSome() ? some(this.val) : none();
        },
        catchMap: function(fn) {
            return this.isSome() ? this : fn();
        },
        filter: function(fn) {
            var self = this;
            return self.flatMap(function(a) {
                return fn(a) ? self : None();
            });
        },
        orNoneIf: function(bool) {
            return bool ? None() : this;
        },
        contains: function(val) {
            return this.isSome() ? areEqual(this.val, val) : false;
        },
        forEach: function(fn) {
            this.cata(noop, fn);
        },
        orElseRun: function(fn) {
            this.cata(fn, noop);
        },
        toString: function() {
            return this.isSome() ? "Just(" + this.val + ")" : "Nothing";
        },
        inspect: function() {
            return this.toString();
        }
    };
    Maybe.prototype.orJust = Maybe.prototype.getOrElse = Maybe.prototype.orSome;
    Maybe.prototype.just = Maybe.prototype.some;
    Maybe.prototype.isJust = Maybe.prototype.isSome;
    Maybe.prototype.isNothing = Maybe.prototype.isNone;
    Maybe.prototype.orNothingIf = Maybe.prototype.orNoneIf;
    Maybe.fn.init.prototype = Maybe.fn;
    setType(Maybe, TYPES_NAMES.Maybe);
    setType(Maybe.fn.init, TYPES_NAMES.Maybe);
    Maybe.isInstance = isInstance(TYPES_NAMES.Maybe);
    Maybe.isOfType = isOfType(TYPES_NAMES.Maybe);
    var Validation = Monet.Validation = {};
    var Success = Validation.Success = Validation.success = Monet.Success = function(val) {
        return new Validation.fn.init(val, true);
    };
    var Fail = Validation.Fail = Validation.fail = Monet.Fail = function(error) {
        return new Validation.fn.init(error, false);
    };
    Validation.of = function(v) {
        return Success(v);
    };
    Validation.fn = Validation.prototype = {
        init: function(val, success) {
            this.val = val;
            this.isSuccessValue = success;
            setType(this, TYPES_NAMES.Validation);
        },
        success: function() {
            if (this.isSuccess()) {
                return this.val;
            }
            throw new Error("Cannot call success() on a Fail.");
        },
        isSuccess: function() {
            return this.isSuccessValue;
        },
        isFail: function() {
            return !this.isSuccessValue;
        },
        fail: function() {
            if (this.isSuccess()) {
                throw new Error("Cannot call fail() on a Success.");
            }
            return this.val;
        },
        bind: function(fn) {
            return this.isSuccess() ? fn(this.val) : this;
        },
        ap: function(validationWithFn) {
            var value = this.val;
            return this.isSuccess() ? validationWithFn.map(function(fn) {
                return fn(value);
            }) : validationWithFn.isFail() ? Validation.Fail(Semigroup.append(value, validationWithFn.fail())) : this;
        },
        acc: function() {
            var x = function() {
                return x;
            };
            return this.isSuccessValue ? Validation.success(x) : this;
        },
        foldLeft: function(initialValue) {
            return this.toMaybe().toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toMaybe().toList().foldRight(initialValue);
        },
        cata: function(fail, success) {
            return this.isSuccessValue ? success(this.val) : fail(this.val);
        },
        catchMap: function(fn) {
            return this.isSuccess() ? this : fn(this.val);
        },
        swap: function() {
            return this.isSuccess() ? Fail(this.val) : Success(this.val);
        },
        failMap: function(fn) {
            return this.isFail() ? Fail(fn(this.val)) : this;
        },
        bimap: function(fail, success) {
            return this.isSuccessValue ? this.map(success) : this.failMap(fail);
        },
        forEach: function(fn) {
            this.cata(noop, fn);
        },
        forEachFail: function(fn) {
            this.cata(fn, noop);
        },
        equals: function(other) {
            return Validation.isOfType(other) && this.cata(function(fail) {
                return other.cata(equals(fail), falseFunction);
            }, function(success) {
                return other.cata(falseFunction, equals(success));
            });
        },
        toMaybe: function() {
            return this.isSuccess() ? Some(this.val) : None();
        },
        toEither: function() {
            return (this.isSuccess() ? Right : Left)(this.val);
        },
        toString: function() {
            return (this.isSuccess() ? "Success(" : "Fail(") + this.val + ")";
        },
        inspect: function() {
            return this.toString();
        }
    };
    Validation.prototype.fold = Validation.prototype.cata;
    Validation.fn.init.prototype = Validation.fn;
    setType(Validation, TYPES_NAMES.Validation);
    setType(Validation.fn.init, TYPES_NAMES.Validation);
    Validation.isInstance = isInstance(TYPES_NAMES.Validation);
    Validation.isOfType = isOfType(TYPES_NAMES.Validation);
    var Semigroup = Monet.Semigroup = {
        append: function(a, b) {
            if (isFunction(a.concat)) {
                return a.concat(b);
            }
            throw new Error("Couldn't find a semigroup appender in the environment, " + "please specify your own append function");
        }
    };
    var MonadT = Monet.monadTransformer = Monet.MonadT = Monet.monadT = function(monad) {
        return new MonadT.fn.init(monad);
    };
    MonadT.of = function(m) {
        return MonadT(m);
    };
    MonadT.fn = MonadT.prototype = {
        init: function(monad) {
            this.monad = monad;
            setType(Validation, TYPES_NAMES.MonadT);
        },
        map: function(fn) {
            return MonadT(this.monad.map(function(v) {
                return v.map(fn);
            }));
        },
        bind: function(fn) {
            return MonadT(this.monad.map(function(v) {
                return v.flatMap(fn);
            }));
        },
        ap: function(monadWithFn) {
            return MonadT(this.monad.flatMap(function(v) {
                return monadWithFn.perform().map(function(v2) {
                    return v.ap(v2);
                });
            }));
        },
        perform: function() {
            return this.monad;
        }
    };
    MonadT.fn.init.prototype = MonadT.fn;
    var IO = Monet.IO = Monet.io = function(effectFn) {
        return new IO.fn.init(effectFn);
    };
    IO.of = function(a) {
        return IO(function() {
            return a;
        });
    };
    IO.fn = IO.prototype = {
        init: function(effectFn) {
            if (!isFunction(effectFn)) {
                throw new Error("IO requires a function.");
            }
            this.effectFn = effectFn;
            setType(this, TYPES_NAMES.IO);
        },
        map: function(fn) {
            var self = this;
            return IO(function() {
                return fn(self.effectFn());
            });
        },
        bind: function(fn) {
            var self = this;
            return IO(function() {
                return fn(self.effectFn()).run();
            });
        },
        ap: function(ioWithFn) {
            var self = this;
            return ioWithFn.map(function(fn) {
                return fn(self.effectFn());
            });
        },
        run: function() {
            return this.effectFn();
        }
    };
    IO.fn.init.prototype = IO.fn;
    setType(IO, TYPES_NAMES.IO);
    setType(IO.fn.init, TYPES_NAMES.IO);
    IO.isInstance = isInstance(TYPES_NAMES.IO);
    IO.isOfType = isOfType(TYPES_NAMES.IO);
    IO.prototype.perform = IO.prototype.performUnsafeIO = IO.prototype.run;
    var Either = Monet.Either = {};
    Either.of = function(a) {
        return Right(a);
    };
    Either.fromTry = function(fn) {
        try {
            return Either.right(fn());
        } catch (e) {
            return Either.left(e);
        }
    };
    Either.fromPromise = function(promise) {
        return promise.then(Either.Right, Either.Left);
    };
    var Right = Either.Right = Either.right = Monet.Right = function(val) {
        return new Either.fn.init(val, true);
    };
    var Left = Either.Left = Either.left = Monet.Left = function(val) {
        return new Either.fn.init(val, false);
    };
    Either.fn = Either.prototype = {
        init: function(val, isRightValue) {
            this.isRightValue = isRightValue;
            this.value = val;
            setType(this, TYPES_NAMES.Either);
        },
        bind: function(fn) {
            return this.isRightValue ? fn(this.value) : this;
        },
        ap: function(eitherWithFn) {
            var self = this;
            return this.isRightValue ? eitherWithFn.map(function(fn) {
                return fn(self.value);
            }) : this;
        },
        leftMap: function(fn) {
            return this.isLeft() ? Left(fn(this.value)) : this;
        },
        isRight: function() {
            return this.isRightValue;
        },
        isLeft: function() {
            return !this.isRight();
        },
        right: function() {
            if (this.isRightValue) {
                return this.value;
            }
            throw new Error("Cannot call right() on a Left.");
        },
        left: function() {
            if (this.isRightValue) {
                throw new Error("Cannot call left() on a Right.");
            }
            return this.value;
        },
        foldLeft: function(initialValue) {
            return this.toMaybe().toList().foldLeft(initialValue);
        },
        foldRight: function(initialValue) {
            return this.toMaybe().toList().foldRight(initialValue);
        },
        cata: function(leftFn, rightFn) {
            return this.isRightValue ? rightFn(this.value) : leftFn(this.value);
        },
        catchMap: function(fn) {
            return this.isRight() ? this : fn(this.value);
        },
        swap: function() {
            return this.isRight() ? Left(this.value) : Right(this.value);
        },
        forEach: function(fn) {
            this.cata(noop, fn);
        },
        forEachLeft: function(fn) {
            this.cata(fn, noop);
        },
        equals: function(other) {
            return Either.isOfType(other) && this.cata(function(left) {
                return other.cata(equals(left), falseFunction);
            }, function(right) {
                return other.cata(falseFunction, equals(right));
            });
        },
        bimap: function(leftFn, rightFn) {
            return this.isRightValue ? this.map(rightFn) : this.leftMap(leftFn);
        },
        toMaybe: function() {
            return this.isRight() ? Some(this.value) : None();
        },
        toValidation: function() {
            return this.isRight() ? Success(this.value) : Fail(this.value);
        },
        toString: function() {
            return this.cata(function(left) {
                return "Left(" + left + ")";
            }, function(right) {
                return "Right(" + right + ")";
            });
        },
        toPromise: function() {
            return this.cata(function(left) {
                return Promise.reject(left);
            }, function(right) {
                return Promise.resolve(right);
            });
        },
        inspect: function() {
            return this.toString();
        }
    };
    Either.prototype.fold = Either.prototype.cata;
    Either.fn.init.prototype = Either.fn;
    setType(Either, TYPES_NAMES.Either);
    setType(Either.fn.init, TYPES_NAMES.Either);
    Either.isInstance = isInstance(TYPES_NAMES.Either);
    Either.isOfType = isOfType(TYPES_NAMES.Either);
    var Reader = Monet.Reader = function(fn) {
        return new Reader.fn.init(fn);
    };
    Reader.of = function(x) {
        return Reader(function(_) {
            return x;
        });
    };
    Reader.ask = function() {
        return Reader(idFunction);
    };
    Reader.fn = Reader.prototype = {
        init: function(fn) {
            this.f = fn;
            setType(this, TYPES_NAMES.Reader);
        },
        run: function(config) {
            return this.f(config);
        },
        bind: function(fn) {
            var self = this;
            return Reader(function(config) {
                return fn(self.run(config)).run(config);
            });
        },
        ap: function(readerWithFn) {
            var self = this;
            return readerWithFn.bind(function(fn) {
                return Reader(function(config) {
                    return fn(self.run(config));
                });
            });
        },
        map: function(fn) {
            var self = this;
            return Reader(function(config) {
                return fn(self.run(config));
            });
        },
        local: function(fn) {
            var self = this;
            return Reader(function(c) {
                return self.run(fn(c));
            });
        }
    };
    Reader.fn.init.prototype = Reader.fn;
    setType(Reader, TYPES_NAMES.Reader);
    setType(Reader.fn.init, TYPES_NAMES.Reader);
    Reader.isInstance = isInstance(TYPES_NAMES.Reader);
    Reader.isOfType = isOfType(TYPES_NAMES.Reader);
    var Free = Monet.Free = {};
    var Suspend = Free.Suspend = Monet.Suspend = function(functor) {
        return new Free.fn.init(functor, true);
    };
    var Return = Free.Return = Monet.Return = function(val) {
        return new Free.fn.init(val, false);
    };
    Free.of = function(a) {
        return Return(a);
    };
    Free.liftF = function(functor) {
        return isFunction(functor) ? Suspend(compose(Return, functor)) : Suspend(functor.map(Return));
    };
    Free.fn = Free.prototype = {
        init: function(val, isSuspend) {
            this.isSuspend = isSuspend;
            if (isSuspend) {
                this.functor = val;
            } else {
                this.val = val;
            }
            setType(this, TYPES_NAMES.Free);
        },
        run: function() {
            return this.go(function(f) {
                return f();
            });
        },
        bind: function(fn) {
            return this.isSuspend ? isFunction(this.functor) ? Suspend(compose(function(free) {
                return free.bind(fn);
            }, this.functor)) : Suspend(this.functor.map(function(free) {
                return free.bind(fn);
            })) : fn(this.val);
        },
        ap: function(ff) {
            return this.bind(function(x) {
                return ff.map(function(f) {
                    return f(x);
                });
            });
        },
        resume: function() {
            return this.isSuspend ? Left(this.functor) : Right(this.val);
        },
        go1: function(f) {
            function go2(t) {
                return t.resume().cata(function(functor) {
                    return go2(f(functor));
                }, idFunction);
            }
            return go2(this);
        },
        go: function(f) {
            var result = this.resume();
            while (result.isLeft()) {
                var next = f(result.left());
                result = next.resume();
            }
            return result.right();
        }
    };
    Free.fn.init.prototype = Free.fn;
    setType(Free, TYPES_NAMES.Free);
    setType(Free.fn.init, TYPES_NAMES.Free);
    Free.isInstance = isInstance(TYPES_NAMES.Free);
    Free.isOfType = isOfType(TYPES_NAMES.Free);
    function Identity(a) {
        return new Identity.fn.init(a);
    }
    Monet.Identity = Identity;
    Identity.of = function(a) {
        return new Identity(a);
    };
    Identity.fn = Identity.prototype = {
        init: function(val) {
            this.val = val;
            setType(this, TYPES_NAMES.Identity);
        },
        bind: function(fn) {
            return fn(this.val);
        },
        get: function() {
            return this.val;
        },
        forEach: function(fn) {
            fn(this.val);
        },
        equals: function(other) {
            return Identity.isOfType(other) && equals(this.get())(other.get());
        },
        contains: function(val) {
            return areEqual(this.val, val);
        },
        toString: function() {
            return "Identity(" + this.val + ")";
        },
        inspect: function() {
            return this.toString();
        },
        ap: function(applyWithFunction) {
            var value = this.val;
            return applyWithFunction.map(function(fn) {
                return fn(value);
            });
        },
        toArray: function() {
            return [ this.get() ];
        },
        toList: function() {
            return List(this.get(), Nil);
        },
        toSet: function() {
            return new Set(this);
        }
    };
    Identity.fn.init.prototype = Identity.fn;
    setType(Identity, TYPES_NAMES.Identity);
    setType(Identity.fn.init, TYPES_NAMES.Identity);
    Identity.isInstance = isInstance(TYPES_NAMES.Identity);
    Identity.isOfType = isOfType(TYPES_NAMES.Identity);
    function addFantasyLandAliases(type) {
        [ "equals", "map", "ap", "chain" ].filter(function(method) {
            return isFunction(type.prototype[method]);
        }).forEach(function(method) {
            type.prototype["fantasy-land/" + method] = type.prototype[method];
        });
    }
    function addAliases(type) {
        type.prototype.flatMap = type.prototype.chain = type.prototype.bind;
        type.pure = type.unit = type.of;
        type.prototype.of = type.of;
        if (isFunction(type.prototype.append)) {
            type.prototype.concat = type.prototype.append;
        }
        type.prototype.point = type.prototype.pure = type.prototype.unit = type.prototype.of;
    }
    function addFilterNot(type) {
        if (isFunction(type.prototype.filter)) {
            type.prototype.filterNot = function(fn) {
                return this.filter(function(a) {
                    return !fn(a);
                });
            };
        }
    }
    function addMonadOps(type) {
        type.prototype.join = function() {
            return this.flatMap(idFunction);
        };
        type.map2 = function(fn) {
            return function(ma, mb) {
                return ma.flatMap(function(a) {
                    return mb.map(function(b) {
                        return fn(a, b);
                    });
                });
            };
        };
    }
    function addFunctorOps(type) {
        if (!isFunction(type.prototype.map)) {
            type.prototype.map = function(fn) {
                return this.bind(compose(this.of, fn));
            };
        }
    }
    function addApplicativeOps(type) {
        type.prototype.takeLeft = function(m) {
            return apply2(this, m, function(a, b) {
                return a;
            });
        };
        type.prototype.takeRight = function(m) {
            return apply2(this, m, function(a, b) {
                return b;
            });
        };
    }
    function addCollectionPredicates(type) {
        if (isFunction(type.prototype.toArray)) {
            type.prototype.every = type.prototype.forall = function(fn) {
                return this.toArray().every(fn);
            };
            type.prototype.exists = function(fn) {
                return this.toArray().some(fn);
            };
        }
    }
    function makeIterable(type) {
        if (isFunction(type.prototype.toArray)) {
            type.prototype[Symbol.iterator] = function() {
                return this.toArray()[Symbol.iterator]();
            };
        }
    }
    function addToOperator(type) {
        if (isFunction(type.prototype.toArray)) {
            type.prototype.to = function(ctor) {
                return ctor(this);
            };
        }
    }
    function decorate(type) {
        addAliases(type);
        addFilterNot(type);
        addMonadOps(type);
        addFunctorOps(type);
        addApplicativeOps(type);
        addCollectionPredicates(type);
        addFantasyLandAliases(type);
        makeIterable(type);
        addToOperator(type);
    }
    decorate(MonadT);
    decorate(Either);
    decorate(Maybe);
    decorate(IO);
    decorate(NEL);
    decorate(List);
    decorate(Validation);
    decorate(Reader);
    decorate(Free);
    decorate(Identity);
    return Monet;
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthWebSocket);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_onOpen", function (evt) {
      console.log("Socket Open: ", evt);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_onClose", function (evt) {
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_onError", function (evt) {
      _this.connected = false;
      console.log("Socket Error: ", evt);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_onMessage", function (evt) {
      console.log("Socket Message: ", evt);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "_connectionHandler", function (value) {
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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthWebSocket, [{
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



var Authentication = {};

Authentication.AuthException = function (message) {
  this.message = message;
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
};

Authentication.login = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(username, password, remember) {
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

Authentication.logout = function () {
  window.localStorage.removeItem("movai.token");
  window.localStorage.removeItem("movai.refreshToken");
  window.localStorage.removeItem("movai.tokenRemember");
  window.sessionStorage.removeItem("movai.session");
};

Authentication.checkLogin = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



/**
 * Clipboard singleton
 */
var Clipboard = /*#__PURE__*/function () {
  function Clipboard() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Clipboard);

    if (Clipboard.instance) return Clipboard.instance;
    Clipboard.instance = this;
    this._data = {};
    this.copyKey = Math.random();
  }
  /**
   *  get clipboard data
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Clipboard, [{
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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Authentication/Authentication */ "./src/Authentication/Authentication.js");
/* harmony import */ var _AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AuthWebSocket/AuthWebSocket */ "./src/AuthWebSocket/AuthWebSocket.js");




var getToken = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_2__["default"].getToken,
    AuthException = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_2__["default"].AuthException,
    checkLogin = _Authentication_Authentication__WEBPACK_IMPORTED_MODULE_2__["default"].checkLogin;

var Database = function Database() {
  var _this = this;

  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Database);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "connect", function () {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onOpen", function (evt) {
    _this.dispatch("onopen", undefined);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onClose", function (evt) {
    _this.dispatch("onclose", undefined);

    if (evt.code !== 1000) {
      window.setTimeout(_this.connect(), _this.timeout);
    }
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onMessage", function (evt) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "checkTest", function (pattern, data, is_pattern, one_shot) {
    return new Promise(function (resolve, reject) {
      _this.dispatch(pattern, data, is_pattern, one_shot);

      if (true) {
        resolve("DONE");
      }
    });
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onError", function (evt) {
    _this.dispatch("onerror", undefined);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onEvent", function (event_name) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    _this.evt_callbacks[event_name] = _this.evt_callbacks[event_name] || [];

    _this.evt_callbacks[event_name].push(callback);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "close", function () {
    return _this.websocket.close();
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "subscribe", function (_pattern) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "unsubscribe", function (_pattern) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "list", function () {
    var evt_callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var message = {
      event: "list"
    };
    _this.evt_callbacks["list"] = _this.evt_callbacks["list"] || [];

    _this.evt_callbacks["list"].push(evt_callback);

    _this._send(message);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "_send", function (message) {
    _this.websocket.send(JSON.stringify(message));
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dispatch", function (_pattern, message) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getVar", function (key) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "setVar", function (key, value) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "get", function (url) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "post", function (scope, name, key, value) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "upload", function (packageName, key, value) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "put", function (scope, name, value) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "delete", function (scope, name) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "cloudFunction", function (cloudFunction) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "postTabs", function (name, value) {
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

/***/ "./src/Database/MasterDB.js":
/*!**********************************!*\
  !*** ./src/Database/MasterDB.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Database */ "./src/Database/Database.js");



/**
 * A Database singleton
 */

var MasterDB = function MasterDB() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MasterDB);

  if (instance) return instance;
  instance = this;
  this.db = new _Database__WEBPACK_IMPORTED_MODULE_2__["default"]();
}; // private instance


Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterDB, "subscribe", function (pattern) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var evtCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  new MasterDB().db.subscribe(pattern, callback, evtCallback);
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterDB, "unsubscribe", function (pattern) {
  var evtCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  new MasterDB().db.unsubscribe(pattern, evtCallback);
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterDB, "list", function () {
  var evtCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  new MasterDB().db.list(evtCallback);
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterDB, "get", function (url) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  new MasterDB().db.get(url, callback);
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterDB, "post", function (scope, name, key, value) {
  var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
  new MasterDB().db.post(scope, name, key, value, callback);
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterDB, "upload", function (packageName, key, value) {
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  new MasterDB().db.post(packageName, key, value, callback);
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterDB, "put", function (scope, name, value) {
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  new MasterDB().db.put(scope, name, value, callback);
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterDB, "delete", function (scope, name) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  new MasterDB().db["delete"](scope, name, callback, data);
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterDB, "cloudFunction", function (cloudFunction) {
  var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var args = arguments.length > 2 ? arguments[2] : undefined;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
  new MasterDB().db.cloudFunction(cloudFunction, func, args, callback);
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterDB, "getVar", function (key) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "global";
  new MasterDB().db.getVar(key, callback, scope);
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MasterDB, "setVar", function (key, value) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "global";
  new MasterDB().db.setVar(key, value, callback, scope);
});

var instance = null;
/* harmony default export */ __webpack_exports__["default"] = (MasterDB);

/***/ }),

/***/ "./src/Database/WSSub.js":
/*!*******************************!*\
  !*** ./src/Database/WSSub.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AuthWebSocket/AuthWebSocket */ "./src/AuthWebSocket/AuthWebSocket.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * WSSub - class to handle redis subscribers using authenticated websockets
 */

var WSSub = function WSSub() {
  var _this = this;

  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WSSub);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getState", function () {
    var _this$websocket, _this$websocket$socke;

    return ((_this$websocket = _this.websocket) === null || _this$websocket === void 0 ? void 0 : (_this$websocket$socke = _this$websocket.socket) === null || _this$websocket$socke === void 0 ? void 0 : _this$websocket$socke.readyState) || WebSocket.CLOSED;
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "connect", function () {
    if (_this.getState() === WebSocket.OPEN) return _this;
    var url = _this.url,
        onOpen = _this.onOpen,
        onClose = _this.onClose,
        onError = _this.onError,
        onMessage = _this.onMessage;
    _this.websocket = new _AuthWebSocket_AuthWebSocket__WEBPACK_IMPORTED_MODULE_2__["default"]({
      url: url,
      onOpen: onOpen,
      onClose: onClose,
      onError: onError,
      onMessage: onMessage
    });

    _this.websocket.createSocket();

    return _this;
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "reConnect", function () {
    _this.connect();
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getOrCreate", function (map, pattern) {
    return map.get(pattern) || map.set(pattern, []).get(pattern);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "pushCallback", function (map, pattern, callback) {
    _this.getOrCreate(map, pattern).push(callback);

    return _this;
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "addSubscriberCallback", function (callback, pattern) {
    if (typeof callback !== "function") return _this;
    return _this.pushCallback(_this.sub_callbacks, pattern, callback);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "addEventCallback", function (command, callback, pattern) {
    if (typeof callback !== "function") return _this;

    var _sufix = pattern ? "/".concat(pattern) : "";

    var _pattern = "".concat(command).concat(_sufix);

    console.log("???addEventCallback", command, _this.evt_callbacks[_pattern]);
    return _this.pushCallback(_this.evt_callbacks, _pattern, callback);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "send", function (message) {
    try {
      _this.websocket.send(JSON.stringify(message));
    } catch (error) {
      console.error(error);
    }
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "dispatch", function (pattern) {
    var is_command = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var message = arguments.length > 2 ? arguments[2] : undefined;

    var _map = is_command ? _this.evt_callbacks : _this.sub_callbacks;

    var _callbacks = _map.get(pattern) || [];

    console.log("???dispatch", pattern, _callbacks.length);

    _callbacks.forEach(function (cb) {
      setTimeout(cb, 0, message);
    });

    if (is_command) _map["delete"](pattern);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "getMessage", function (event, pattern) {
    return {
      event: event,
      pattern: pattern
    };
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onOpen", function (evt) {
    _this.reSubscribe();

    _this.dispatch("onopen");
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onClose", function (evt) {
    _this.dispatch("onclose");

    if (evt.code !== _this.NORMAL_CLOSE_EVT) {
      setTimeout(_this.reConnect(), _this.TIMEOUT);
    }
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onError", function (evt) {
    _this.dispatch("onerror");
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onMessage", function (msg) {
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

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "subscribe", function (pattern, callback, evt_callback) {
    var SUBSCRIBE = _this.commands.SUBSCRIBE;

    var message = _this.getMessage(SUBSCRIBE, pattern);

    var _pattern = JSON.stringify(pattern);

    _this.connect().addSubscriberCallback(callback, _pattern).addEventCallback(SUBSCRIBE, evt_callback, _pattern).send(message);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "reSubscribe", function () {
    var SUBSCRIBE = _this.commands.SUBSCRIBE;
    Array.from(_this.sub_callbacks.keys()).forEach(function (key) {
      var message = _this.getMessage(SUBSCRIBE, JSON.parse(key));

      _this.send(message);
    });
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "unsubscribe", function (pattern, callback) {
    var UNSUBSCRIBE = _this.commands.UNSUBSCRIBE;

    var message = _this.getMessage(UNSUBSCRIBE, pattern);

    var _pattern = JSON.stringify(pattern);

    _this.connect().addEventCallback(UNSUBSCRIBE, callback, _pattern).send(message);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "list", function (evt_callback) {
    var LIST = _this.commands.LIST;

    var message = _this.getMessage(LIST);

    _this.addEventCallback(LIST, evt_callback).send(message);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "execute", function (remote_callback, data, evt_callback) {
    var EXECUTE = _this.commands.EXECUTE;

    var message = _objectSpread({
      event: EXECUTE,
      callback: remote_callback
    }, data);

    _this.connect().addEventCallback(EXECUTE, evt_callback).send(message);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onEvent", function (event, callback) {
    _this.addEventCallback(event, callback);
  });

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "close", function () {
    _this.websocket.close();
  });

  this.host = "".concat(window.location.hostname, ":").concat(window.location.port);
  var isHttps = window.location.protocol === "https:";
  this.url = "".concat(isHttps ? "wss" : "ws", "://").concat(this.host, "/ws/subscriber");
  this.TIMEOUT = 3000;
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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var UndoManager = /*#__PURE__*/function () {
  function UndoManager() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UndoManager);

    this.size = size;
    this.undoStack = new Queue(size);
    this.redoStack = new Queue(size);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UndoManager, [{
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
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UndoAbleActionBuilder);

    this._doAction = null;
    this._undoAction = null;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UndoAbleActionBuilder, [{
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

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Queue);

    this.size = size;
    this.queue = [];
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Queue, [{
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

/***/ "./src/Utils/Utils.js":
/*!****************************!*\
  !*** ./src/Utils/Utils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var monet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! monet */ "./node_modules/monet/dist/monet.js");
/* harmony import */ var monet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(monet__WEBPACK_IMPORTED_MODULE_0__);

var Utils = {};

Utils.ofNull = function (x) {
  return monet__WEBPACK_IMPORTED_MODULE_0__["Maybe"].fromNull(x);
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
  var _Maybe$fromNull$map$o = monet__WEBPACK_IMPORTED_MODULE_0__["Maybe"].fromNull(end).map(function (x) {
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
  var _Maybe$fromNull$map$o2 = monet__WEBPACK_IMPORTED_MODULE_0__["Maybe"].fromNull(b).map(function (x) {
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

/* harmony default export */ __webpack_exports__["default"] = (Utils);

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map