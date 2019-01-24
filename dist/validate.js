(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["validate"] = factory();
	else
		root["validate"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/schema.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/component-type/index.js":
/*!**********************************************!*\
  !*** ./node_modules/component-type/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  if (isBuffer(val)) return 'buffer';

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val);

  return typeof val;
};

// code borrowed from https://github.com/feross/is-buffer/blob/master/index.js
function isBuffer(obj) {
  return !!(obj != null &&
    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
      (obj.constructor &&
      typeof obj.constructor.isBuffer === 'function' &&
      obj.constructor.isBuffer(obj))
    ))
}


/***/ }),

/***/ "./node_modules/eivindfjeldstad-dot/index.js":
/*!***************************************************!*\
  !*** ./node_modules/eivindfjeldstad-dot/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Set given `path`
 *
 * @param {Object} obj
 * @param {String} path
 * @param {Mixed} val
 * @api public
 */

exports.set = function (obj, path, val) {
  var segs = path.split('.');
  var attr = segs.pop();
  
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i];
    obj[seg] = obj[seg] || {};
    obj = obj[seg];
  }
  
  obj[attr] = val;
};

/**
 * Get given `path`
 *
 * @param {Object} obj
 * @param {String} path
 * @return {Mixed}
 * @api public
 */

exports.get = function (obj, path) {
  var segs = path.split('.');
  var attr = segs.pop();
  
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i];
    if (!obj[seg]) return;
    obj = obj[seg];
  }
  
  return obj[attr];
};

/***/ }),

/***/ "./node_modules/typecast/index.js":
/*!****************************************!*\
  !*** ./node_modules/typecast/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = typecast;

/**
 * Cast given `val` to `type`
 *
 * @param {Mixed} val
 * @param {String} type
 * @api public
 */

function typecast (val, type) {
  var fn = typecast[type];
  if (typeof fn != 'function') throw new Error('cannot cast to ' + type);
  return fn(val);
}

/**
 * Cast `val` to `String`
 *
 * @param {Mixed} val
 * @api public
 */

typecast.string = function (val) {
  return val.toString();
};

/**
 * Cast `val` to `Number`
 *
 * @param {Mixed} val
 * @api public
 */

typecast.number = function (val) {
  var num = parseFloat(val);
  return isNaN(num)
    ? null
    : num;
};

/**
 * Cast `val` to a`Date`
 *
 * @param {Mixed} val
 * @api public
 */

typecast.date = function (val) {
  var date = new Date(val);
  return isNaN(date.valueOf())
    ? null
    : date;
};

/**
 * Cast `val` to `Array`
 *
 * @param {Mixed} val
 * @api public
 */

typecast.array = function (val) {
  if (val instanceof Array) return val;
  var arr = val.toString().split(',');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim();
  }
  return arr;
};

/**
 * Cast `val` to `Boolean`
 *
 * @param {Mixed} val
 * @api public
 */

typecast.boolean = function (val) {
  return !! val && val !== 'false';
};

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValidationError; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Custom errors.
 *
 * @private
 */
var ValidationError =
/*#__PURE__*/
function (_Error) {
  _inherits(ValidationError, _Error);

  function ValidationError(message, path) {
    var _this;

    _classCallCheck(this, ValidationError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ValidationError).call(this, message));
    Object.defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), 'path', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: path
    });

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_assertThisInitialized(_this)), ValidationError);
    }

    return _this;
  }

  return ValidationError;
}(_wrapNativeSuper(Error));



/***/ }),

/***/ "./src/messages.js":
/*!*************************!*\
  !*** ./src/messages.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Default error messages.
 *
 * @private
 */
var Messages = {
  // Type message
  type: function type(prop, ctx, _type) {
    if (typeof _type == 'function') {
      _type = _type.name;
    }

    return "".concat(prop, " \u5FC5\u987B\u662F ").concat(_type, " \u7C7B\u578B\u3002");
  },
  // Required message
  required: function required(prop) {
    return "".concat(prop, " \u662F\u5FC5\u586B\u7684\u3002");
  },
  // Match message
  match: function match(prop, ctx, regexp) {
    return "".concat(prop, " \u5FC5\u987B\u5339\u914D ").concat(regexp, " \u3002");
  },
  // Length message
  length: function length(prop, ctx, len) {
    if (typeof len == 'number') {
      return "".concat(prop, " \u957F\u5EA6\u5FC5\u987B\u662F ").concat(len, " \u4F4D\u3002");
    }

    var min = len.min,
        max = len.max;

    if (min && max) {
      return "".concat(prop, " \u957F\u5EA6\u5FC5\u987B\u4ECB\u4E8E ").concat(min, " \u548C ").concat(max, " \u4E4B\u95F4\u3002");
    }

    if (max) {
      return "".concat(prop, " \u7684\u957F\u5EA6\u5FC5\u987B\u5C0F\u4E8E ").concat(max, " \u3002");
    }

    if (min) {
      return "".concat(prop, " \u7684\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E ").concat(min, " \u3002");
    }
  },
  // Size message
  size: function size(prop, ctx, _size) {
    if (typeof _size == 'number') {
      return "".concat(prop, " \u5FC5\u987B\u4E3A ").concat(_size, " \u3002");
    }

    var min = _size.min,
        max = _size.max;

    if (min !== undefined && max !== undefined) {
      return "".concat(prop, " \u5FC5\u987B\u4ECB\u4E8E ").concat(min, " \u548C ").concat(max, " \u4E4B\u95F4\u3002");
    }

    if (max !== undefined) {
      return "".concat(prop, " \u5FC5\u987B\u5C0F\u4E8E ").concat(max, " \u3002");
    }

    if (min !== undefined) {
      return "".concat(prop, " \u5FC5\u987B\u5927\u4E8E ").concat(min, " \u3002");
    }
  },
  // Enum message
  enum: function _enum(prop, ctx, enums) {
    var copy = enums.slice();
    var last = copy.pop();
    return "".concat(prop, " \u5FC5\u987B\u662F ").concat(copy.join(', '), " \u6216 ").concat(last, ".");
  },
  // Default message
  default: function _default(prop) {
    return "".concat(prop, " \u4E0D\u80FD\u901A\u8FC7\u9A8C\u8BC1\u3002");
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Messages);

/***/ }),

/***/ "./src/property.js":
/*!*************************!*\
  !*** ./src/property.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Property; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./src/error.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * A property instance gets returned whenever you call `schema.path()`.
 * Properties are also created internally when an object is passed to the Schema constructor.
 *
 * @param {String} name - the name of the property
 * @param {Schema} schema - parent schema
 */

var Property =
/*#__PURE__*/
function () {
  function Property(name, schema) {
    _classCallCheck(this, Property);

    this.name = name;
    this.registry = {};
    this._schema = schema;
    this._type = null;
    this.messages = {};
  }
  /**
   * Registers messages.
   *
   * @example
   * prop.message('something is wrong')
   * prop.message({ required: 'thing is required.' })
   *
   * @param {Object|String} messages
   * @return {Property}
   */


  _createClass(Property, [{
    key: "message",
    value: function message(messages) {
      if (typeof messages == 'string') {
        messages = {
          default: messages
        };
      }

      var entries = Object.entries(messages);

      for (var _i = 0; _i < entries.length; _i++) {
        var _entries$_i = _slicedToArray(entries[_i], 2),
            key = _entries$_i[0],
            val = _entries$_i[1];

        this.messages[key] = val;
      }

      return this;
    }
    /**
     * Mount given `schema` on current path.
     *
     * @example
     * const user = new Schema({ email: String })
     * prop.schema(user)
     *
     * @param {Schema} schema - the schema to mount
     * @return {Property}
     */

  }, {
    key: "schema",
    value: function schema(_schema) {
      this._schema.path(this.name, _schema);

      return this;
    }
    /**
     * Validate using named functions from the given object.
     * Error messages can be defined by providing an object with
     * named error messages/generators to `schema.message()`
     *
     * The message generator receives the value being validated,
     * the object it belongs to and any additional arguments.
     *
     * @example
     * const schema = new Schema()
     * const prop = schema.path('some.path')
     *
     * schema.message({
     *   binary: (path, ctx) => `${path} must be binary.`,
     *   bits: (path, ctx, bits) => `${path} must be ${bits}-bit`
     * })
     *
     * prop.use({
     *   binary: (val, ctx) => /^[01]+$/i.test(val),
     *   bits: [(val, ctx, bits) => val.length == bits, 32]
     * })
     *
     * @param {Object} fns - object with named validation functions to call
     * @return {Property}
     */

  }, {
    key: "use",
    value: function use(fns) {
      var _this = this;

      Object.keys(fns).forEach(function (name) {
        var arr = fns[name];
        if (!Array.isArray(arr)) arr = [arr];
        var fn = arr.shift();

        _this._register(name, arr, fn);
      });
      return this;
    }
    /**
     * Registers a validator that checks for presence.
     *
     * @example
     * prop.required()
     *
     * @param {Boolean} [bool] - `true` if required, `false` otherwise
     * @return {Property}
     */

  }, {
    key: "required",
    value: function required() {
      var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return this._register('required', [bool]);
    }
    /**
     * Registers a validator that checks if a value is of a given `type`
     *
     * @example
     * prop.type(String)
     *
     * @example
     * prop.type('string')
     *
     * @param {String|Function} type - type to check for
     * @return {Property}
     */

  }, {
    key: "type",
    value: function type(_type) {
      this._type = _type;
      return this._register('type', [_type]);
    }
    /**
     * Registers a validator that checks length.
     *
     * @example
     * prop.length({ min: 8, max: 255 })
     * prop.length(10)
     *
     * @param {Object|Number} rules - object with `.min` and `.max` properties or a number
     * @param {Number} rules.min - minimum length
     * @param {Number} rules.max - maximum length
     * @return {Property}
     */

  }, {
    key: "length",
    value: function length(rules) {
      return this._register('length', [rules]);
    }
    /**
     * Registers a validator that checks size.
     *
     * @example
     * prop.size({ min: 8, max: 255 })
     * prop.size(10)
     *
     * @param {Object|Number} rules - object with `.min` and `.max` properties or a number
     * @param {Number} rules.min - minimum size
     * @param {Number} rules.max - maximum size
     * @return {Property}
     */

  }, {
    key: "size",
    value: function size(rules) {
      return this._register('size', [rules]);
    }
    /**
     * Registers a validator for enums.
     *
     * @example
     * prop.enum(['cat', 'dog'])
     *
     * @param {Array} rules - allowed values
     * @return {Property}
     */

  }, {
    key: "enum",
    value: function _enum(enums) {
      return this._register('enum', [enums]);
    }
    /**
     * Registers a validator that checks if a value matches given `regexp`.
     *
     * @example
     * prop.match(/some\sregular\sexpression/)
     *
     * @param {RegExp} regexp - regular expression to match
     * @return {Property}
     */

  }, {
    key: "match",
    value: function match(regexp) {
      return this._register('match', [regexp]);
    }
    /**
     * Registers a validator that checks each value in an array against given `rules`.
     *
     * @example
     * prop.each({ type: String })
     * prop.each([{ type: Number }])
     * prop.each({ things: [{ type: String }]})
     * prop.each(schema)
     *
     * @param {Array|Object|Schema|Property} rules - rules to use
     * @return {Property}
     */

  }, {
    key: "each",
    value: function each(rules) {
      this._schema.path("".concat(this.name, ".$"), rules);

      return this;
    }
    /**
     * Registers paths for array elements on the parent schema, with given array of rules.
     *
     * @example
     * prop.elements([{ type: String }, { type: Number }])
     *
     * @param {Array} arr - array of rules to use
     * @return {Property}
     */

  }, {
    key: "elements",
    value: function elements(arr) {
      var _this2 = this;

      arr.forEach(function (rules, i) {
        _this2._schema.path("".concat(_this2.name, ".").concat(i), rules);
      });
      return this;
    }
    /**
     * Proxy method for schema path. Makes chaining properties together easier.
     *
     * @example
     * schema
     *   .path('name').type(String).required()
     *   .path('email').type(String).required()
     *
     */

  }, {
    key: "path",
    value: function path() {
      var _this$_schema;

      return (_this$_schema = this._schema).path.apply(_this$_schema, arguments);
    }
    /**
     * Typecast given `value`
     *
     * @example
     * prop.type(String)
     * prop.typecast(123) // => '123'
     *
     * @param {Mixed} value - value to typecast
     * @return {Mixed}
     */

  }, {
    key: "typecast",
    value: function typecast(value) {
      var schema = this._schema;
      var type = this._type;
      if (!type) return value;

      if (typeof type == 'function') {
        type = type.name;
      }

      var cast = schema.typecasters[type] || schema.typecasters[type.toLowerCase()];

      if (typeof cast != 'function') {
        throw new Error("Typecasting failed: No typecaster defined for ".concat(type, "."));
      }

      return cast(value);
    }
    /**
     * Validate given `value`
     *
     * @example
     * prop.type(Number)
     * assert(prop.validate(2) == null)
     * assert(prop.validate('hello world') instanceof Error)
     *
     * @param {Mixed} value - value to validate
     * @param {Object} ctx - the object containing the value
     * @param {String} [path] - path of the value being validated
     * @return {ValidationError}
     */

  }, {
    key: "validate",
    value: function validate(value, ctx) {
      var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.name;
      var types = Object.keys(this.registry);
      var done = {};
      var err; // Required first

      err = this._run('required', value, ctx, path);
      if (err) return err; // No need to continue if value is null-ish

      if (value == null) return null; // Run type second

      err = this._run('type', value, ctx, path);
      if (err) return err; // Make sure required and run are not executed again

      done.required = true;
      done.type = true; // Run the rest

      for (var _i2 = 0; _i2 < types.length; _i2++) {
        var type = types[_i2];
        if (done[type]) continue;
        err = this._run(type, value, ctx, path);
        if (err) return err;
      }

      return null;
    }
    /**
     * Run validator of given `type`
     *
     * @param {String} type - type of validator
     * @param {Mixed} value - value to validate
     * @param {Object} ctx - the object containing the value
     * @param {String} path - path of the value being validated
     * @return {ValidationError}
     * @private
     */

  }, {
    key: "_run",
    value: function _run(type, value, ctx, path) {
      if (!this.registry[type]) return;
      var schema = this._schema;
      var _this$registry$type = this.registry[type],
          args = _this$registry$type.args,
          fn = _this$registry$type.fn;
      var validator = fn || schema.validators[type];
      var valid = validator.apply(void 0, [value, ctx].concat(_toConsumableArray(args), [path]));
      if (!valid) return this._error(type, ctx, args, path);
    }
    /**
     * Register validator
     *
     * @param {String} type - type of validator
     * @param {Array} args - argument to pass to validator
     * @param {Function} [fn] - custom validation function to call
     * @return {Property}
     * @private
     */

  }, {
    key: "_register",
    value: function _register(type, args, fn) {
      this.registry[type] = {
        args: args,
        fn: fn
      };
      return this;
    }
    /**
     * Create an error
     *
     * @param {String} type - type of validator
     * @param {Object} ctx - the object containing the value
     * @param {Array} args - arguments to pass
     * @param {String} path - path of the value being validated
     * @return {ValidationError}
     * @private
     */

  }, {
    key: "_error",
    value: function _error(type, ctx, args, path) {
      var schema = this._schema;
      var message = this.messages[type] || this.messages.default || schema.messages[type] || schema.messages.default;

      if (typeof message == 'function') {
        message = message.apply(void 0, [path, ctx].concat(_toConsumableArray(args)));
      }

      return new _error__WEBPACK_IMPORTED_MODULE_0__["default"](message, path);
    }
  }]);

  return Property;
}();



/***/ }),

/***/ "./src/schema.js":
/*!***********************!*\
  !*** ./src/schema.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Schema; });
/* harmony import */ var component_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component-type */ "./node_modules/component-type/index.js");
/* harmony import */ var component_type__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(component_type__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var eivindfjeldstad_dot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eivindfjeldstad-dot */ "./node_modules/eivindfjeldstad-dot/index.js");
/* harmony import */ var eivindfjeldstad_dot__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eivindfjeldstad_dot__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typecast */ "./node_modules/typecast/index.js");
/* harmony import */ var typecast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typecast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property */ "./src/property.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/messages.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validators */ "./src/validators.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error */ "./src/error.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









/**
 * A Schema defines the structure that objects should be validated against.
 *
 * @example
 * const post = new Schema({
 *   title: {
 *     type: String,
 *     required: true,
 *     length: { min: 1, max: 255 }
 *   },
 *   content: {
 *     type: String,
 *     required: true
 *   },
 *   published: {
 *     type: Date,
 *     required: true
 *   },
 *   keywords: [{ type: String }]
 * })
 *
 * @example
 * const author = new Schema({
 *   name: {
 *     type: String,
 *     required: true
 *   },
 *   email: {
 *     type: String,
 *     required: true
 *   },
 *   posts: [post]
 * })
 *
 * @param {Object} [obj] - schema definition
 * @param {Object} [opts] - options
 * @param {Boolean} [opts.typecast=false] - typecast values before validation
 * @param {Boolean} [opts.strip=true] - strip properties not defined in the schema
 */

var Schema =
/*#__PURE__*/
function () {
  function Schema() {
    var _this = this;

    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Schema);

    this.opts = opts;
    this.hooks = [];
    this.props = {};
    this.messages = Object.assign({}, _messages__WEBPACK_IMPORTED_MODULE_4__["default"]);
    this.validators = Object.assign({}, _validators__WEBPACK_IMPORTED_MODULE_5__["default"]);
    this.typecasters = Object.assign({}, typecast__WEBPACK_IMPORTED_MODULE_2___default.a);
    Object.keys(obj).forEach(function (k) {
      return _this.path(k, obj[k]);
    });
  }
  /**
   * Create or update `path` with given `rules`.
   *
   * @example
   * const schema = new Schema()
   * schema.path('name.first', { type: String })
   * schema.path('name.last').type(String).required()
   *
   * @param {String} path - full path using dot-notation
   * @param {Object|Array|String|Schema|Property} [rules] - rules to apply
   * @return {Property}
   */


  _createClass(Schema, [{
    key: "path",
    value: function path(_path, rules) {
      var _this2 = this;

      var parts = _path.split('.');

      var suffix = parts.pop();
      var prefix = parts.join('.'); // Make sure full path is created

      if (prefix) {
        this.path(prefix);
      } // Array index placeholder


      if (suffix === '$') {
        this.path(prefix).type(Array);
      } // Nested schema


      if (rules instanceof Schema) {
        rules.hook(function (k, v) {
          return _this2.path(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["join"])(k, _path), v);
        });
        return this.path(_path, rules.props);
      } // Return early when given a `Property`


      if (rules instanceof _property__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        this.props[_path] = rules; // Notify parents if mounted

        this.propagate(_path, rules);
        return rules;
      }

      var prop = this.props[_path] || new _property__WEBPACK_IMPORTED_MODULE_3__["default"](_path, this);
      this.props[_path] = prop; // Notify parents if mounted

      this.propagate(_path, prop); // No rules?

      if (!rules) return prop; // type shorthand
      // `{ name: String }`

      if (typeof rules == 'string' || typeof rules == 'function') {
        prop.type(rules);
        return prop;
      } // Allow arrays to be passed implicitly:
      // `{ keywords: [String] }`
      // `{ keyVal: [[String, Number]] }`


      if (Array.isArray(rules)) {
        prop.type(Array);

        if (rules.length == 1) {
          prop.each(rules[0]);
        } else {
          prop.elements(rules);
        }

        return prop;
      }

      var nested = false; // Check for nested objects

      for (var key in rules) {
        if (!rules.hasOwnProperty(key)) continue;
        if (typeof prop[key] == 'function') continue;
        nested = true;
        break;
      }

      Object.keys(rules).forEach(function (key) {
        var rule = rules[key];

        if (nested) {
          return _this2.path(Object(_utils__WEBPACK_IMPORTED_MODULE_7__["join"])(key, _path), rule);
        }

        prop[key](rule);
      });
      return prop;
    }
    /**
     * Typecast given `obj`.
     *
     * @param {Object} obj - the object to typecast
     * @return {Schema}
     * @private
     */

  }, {
    key: "typecast",
    value: function typecast(obj) {
      var _arr = Object.entries(this.props);

      var _loop = function _loop() {
        var _arr$_i = _slicedToArray(_arr[_i], 2),
            path = _arr$_i[0],
            prop = _arr$_i[1];

        Object(_utils__WEBPACK_IMPORTED_MODULE_7__["walk"])(path, obj, function (key, value) {
          if (value == null) return;
          var cast = prop.typecast(value);
          if (cast === value) return;
          eivindfjeldstad_dot__WEBPACK_IMPORTED_MODULE_1___default.a.set(obj, key, cast);
        });
      };

      for (var _i = 0; _i < _arr.length; _i++) {
        _loop();
      }

      return this;
    }
    /**
     * Strip all keys not defined in the schema
     *
     * @param {Object} obj - the object to strip
     * @param {String} [prefix]
     * @return {Schema}
     * @private
     */

  }, {
    key: "strip",
    value: function strip(obj, prefix) {
      var _this3 = this;

      var type = component_type__WEBPACK_IMPORTED_MODULE_0___default()(obj);

      if (type === 'array') {
        obj.forEach(function (v, i) {
          return _this3.strip(v, Object(_utils__WEBPACK_IMPORTED_MODULE_7__["join"])('$', prefix));
        });
        return this;
      }

      if (type !== 'object') {
        return this;
      }

      var _arr2 = Object.entries(obj);

      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
            key = _arr2$_i[0],
            val = _arr2$_i[1];

        var path = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["join"])(key, prefix);

        if (!this.props[path]) {
          delete obj[key];
          continue;
        }

        this.strip(val, path);
      }

      return this;
    }
    /**
     * Validate given `obj`.
     *
     * @example
     * const schema = new Schema({ name: { required: true }})
     * const errors = schema.validate({})
     * assert(errors.length == 1)
     * assert(errors[0].message == 'name is required')
     * assert(errors[0].path == 'name')
     *
     * @param {Object} obj - the object to validate
     * @param {Object} [opts] - options, see [Schema](#schema-1)
     * @return {Array}
     */

  }, {
    key: "validate",
    value: function validate(obj) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      opts = Object.assign(this.opts, opts);
      var errors = [];

      if (opts.typecast) {
        this.typecast(obj);
      }

      if (opts.strip !== false) {
        this.strip(obj);
      }

      var _arr3 = Object.entries(this.props);

      var _loop2 = function _loop2() {
        var _arr3$_i = _slicedToArray(_arr3[_i3], 2),
            path = _arr3$_i[0],
            prop = _arr3$_i[1];

        Object(_utils__WEBPACK_IMPORTED_MODULE_7__["walk"])(path, obj, function (key, value) {
          var err = prop.validate(value, obj, key);
          if (err) errors.push(err);
        });
      };

      for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
        _loop2();
      }

      return errors;
    }
    /**
     * Assert that given `obj` is valid.
     *
     * @example
     * const schema = new Schema({ name: String })
     * schema.assert({ name: 1 }) // Throws an error
     *
     * @param {Object} obj
     * @param {Object} [opts]
     */

  }, {
    key: "assert",
    value: function assert(obj, opts) {
      var _this$validate = this.validate(obj, opts),
          _this$validate2 = _slicedToArray(_this$validate, 1),
          err = _this$validate2[0];

      if (err) throw err;
    }
    /**
     * Override default error messages.
     *
     * @example
     * const hex = (val) => /^0x[0-9a-f]+$/.test(val)
     * schema.path('some.path').use({ hex })
     * schema.message('hex', path => `${path} must be hexadecimal`)
     *
     * @example
     * schema.message({ hex: path => `${path} must be hexadecimal` })
     *
     * @param {String|Object} name - name of the validator or an object with name-message pairs
     * @param {String|Function} [message] - the message or message generator to use
     * @return {Schema}
     */

  }, {
    key: "message",
    value: function message(name, _message) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["assign"])(name, _message, this.messages);
      return this;
    }
    /**
     * Override default validators.
     *
     * @example
     * schema.validator('required', val => val != null)
     *
     * @example
     * schema.validator({ required: val => val != null })
     *
     * @param {String|Object} name - name of the validator or an object with name-function pairs
     * @param {Function} [fn] - the function to use
     * @return {Schema}
     */

  }, {
    key: "validator",
    value: function validator(name, fn) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["assign"])(name, fn, this.validators);
      return this;
    }
    /**
     * Override default typecasters.
     *
     * @example
     * schema.typecaster('SomeClass', val => new SomeClass(val))
     *
     * @example
     * schema.typecaster({ SomeClass: val => new SomeClass(val) })
     *
     * @param {String|Object} name - name of the validator or an object with name-function pairs
     * @param {Function} [fn] - the function to use
     * @return {Schema}
     */

  }, {
    key: "typecaster",
    value: function typecaster(name, fn) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_7__["assign"])(name, fn, this.typecasters);
      return this;
    }
    /**
     * Accepts a function that is called whenever new props are added.
     *
     * @param {Function} fn - the function to call
     * @return {Schema}
     * @private
     */

  }, {
    key: "hook",
    value: function hook(fn) {
      this.hooks.push(fn);
      return this;
    }
    /**
     * Notify all subscribers that a property has been added.
     *
     * @param {String} path - the path of the property
     * @param {Property} prop - the new property
     * @return {Schema}
     * @private
     */

  }, {
    key: "propagate",
    value: function propagate(path, prop) {
      this.hooks.forEach(function (fn) {
        return fn(path, prop);
      });
      return this;
    }
  }]);

  return Schema;
}(); // Export ValidationError



Schema.ValidationError = _error__WEBPACK_IMPORTED_MODULE_6__["default"];

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: assign, walk, join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return walk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony import */ var eivindfjeldstad_dot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eivindfjeldstad-dot */ "./node_modules/eivindfjeldstad-dot/index.js");
/* harmony import */ var eivindfjeldstad_dot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eivindfjeldstad_dot__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Assign given key and value (or object) to given object
 *
 * @private
 */

function assign(key, val, obj) {
  if (typeof key == 'string') {
    obj[key] = val;
    return;
  }

  Object.keys(key).forEach(function (k) {
    return obj[k] = key[k];
  });
}
/**
 * Walk path
 *
 * @private
 */

function walk(path, obj, callback) {
  var parts = path.split(/\.\$(?=\.|$)/);
  var first = parts.shift();
  var arr = eivindfjeldstad_dot__WEBPACK_IMPORTED_MODULE_0___default.a.get(obj, first);

  if (!parts.length) {
    return callback(first, arr);
  }

  if (!Array.isArray(arr)) {
    return;
  }

  for (var i = 0; i < arr.length; i++) {
    var current = join(i, first);
    var next = current + parts.join('.$');
    walk(next, obj, callback);
  }
}
/**
 * Join `path` with `prefix`
 *
 * @private
 */

function join(path, prefix) {
  return prefix ? "".concat(prefix, ".").concat(path) : path;
}

/***/ }),

/***/ "./src/validators.js":
/*!***************************!*\
  !*** ./src/validators.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var component_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! component-type */ "./node_modules/component-type/index.js");
/* harmony import */ var component_type__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(component_type__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Default validators.
 *
 * @private
 */

var Validators = {
  /**
   * Validates presence.
   *
   * @param {Mixed} value - the value being validated
   * @param {Object} ctx - the object being validated
   * @param {Bolean} required
   * @return {Boolean}
   */
  required: function required(value, ctx, _required) {
    if (_required === false) return true;
    return value != null && value !== '';
  },

  /**
   * Validates type.
   *
   * @param {Mixed} value - the value being validated
   * @param {Object} ctx - the object being validated
   * @param {String|Function} name name of the type or a constructor
   * @return {Boolean}
   */
  type: function type(value, ctx, name) {
    if (typeof name == 'function') {
      return value.constructor === name;
    }

    return component_type__WEBPACK_IMPORTED_MODULE_0___default()(value) === name;
  },

  /**
   * Validates length.
   *
   * @param {String} value the string being validated
   * @param {Object} ctx the object being validated
   * @param {Object|Number} rules object with .min and/or .max props or a number
   * @param {Number} [rules.min] - minimum length
   * @param {Number} [rules.max] - maximum length
   * @return {Boolean}
   */
  length: function length(value, ctx, len) {
    if (typeof len == 'number') {
      return value.length === len;
    }

    var min = len.min,
        max = len.max;
    if (min && value.length < min) return false;
    if (max && value.length > max) return false;
    return true;
  },

  /**
   * Validates size.
   *
   * @param {Number} value the number being validated
   * @param {Object} ctx the object being validated
   * @param {Object|Number} size object with .min and/or .max props or a number
   * @param {String|Number} [size.min] - minimum size
   * @param {String|Number} [size.max] - maximum size
   * @return {Boolean}
   */
  size: function size(value, ctx, _size) {
    if (typeof _size == 'number') {
      return value === _size;
    }

    var min = _size.min,
        max = _size.max;
    if (parseInt(min) != null && value < min) return false;
    if (parseInt(max) != null && value > max) return false;
    return true;
  },

  /**
   * Validates enums.
   *
   * @param {String} value the string being validated
   * @param {Object} ctx the object being validated
   * @param {Array} enums array with allowed values
   * @return {Boolean}
   */
  enum: function _enum(value, ctx, enums) {
    return enums.includes(value);
  },

  /**
   * Validates against given `regexp`.
   *
   * @param {String} value the string beign validated
   * @param {Object} ctx the object being validated
   * @param {RegExp} regexp the regexp to validate against
   * @return {Boolean}
   */
  match: function match(value, ctx, regexp) {
    return regexp.test(value);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Validators);

/***/ })

/******/ });
});