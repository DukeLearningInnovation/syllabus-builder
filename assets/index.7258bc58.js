const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var FileSaver_min = { exports: {} };
(function(module, exports) {
  (function(a, b) {
    b();
  })(commonjsGlobal, function() {
    function b(a2, b2) {
      return typeof b2 == "undefined" ? b2 = { autoBom: false } : typeof b2 != "object" && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
    }
    function c(a2, b2, c2) {
      var d2 = new XMLHttpRequest();
      d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
        g(d2.response, b2, c2);
      }, d2.onerror = function() {
        console.error("could not download file");
      }, d2.send();
    }
    function d(a2) {
      var b2 = new XMLHttpRequest();
      b2.open("HEAD", a2, false);
      try {
        b2.send();
      } catch (a3) {
      }
      return 200 <= b2.status && 299 >= b2.status;
    }
    function e(a2) {
      try {
        a2.dispatchEvent(new MouseEvent("click"));
      } catch (c2) {
        var b2 = document.createEvent("MouseEvents");
        b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
      }
    }
    var f = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof commonjsGlobal == "object" && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || (typeof window != "object" || window !== f ? function() {
    } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
      var i = f.URL || f.webkitURL, j = document.createElement("a");
      g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", typeof b2 == "string" ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
        i.revokeObjectURL(j.href);
      }, 4e4), setTimeout(function() {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
      if (g2 = g2 || f2.name || "download", typeof f2 != "string")
        navigator.msSaveOrOpenBlob(b(f2, h), g2);
      else if (d(f2))
        c(f2, g2, h);
      else {
        var i = document.createElement("a");
        i.href = f2, i.target = "_blank", setTimeout(function() {
          e(i);
        });
      }
    } : function(b2, d2, e2, g2) {
      if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), typeof b2 == "string")
        return c(b2, d2, e2);
      var h = b2.type === "application/octet-stream", i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && typeof FileReader != "undefined") {
        var k = new FileReader();
        k.onloadend = function() {
          var a2 = k.result;
          a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
        }, k.readAsDataURL(b2);
      } else {
        var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
        g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
          l.revokeObjectURL(m);
        }, 4e4);
      }
    });
    f.saveAs = g.saveAs = g, module.exports = g;
  });
})(FileSaver_min);
var nunjucks$1 = { exports: {} };
/*! Browser bundle of nunjucks 3.2.3  */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(typeof self !== "undefined" ? self : commonjsGlobal, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, {
            configurable: false,
            enumerable: true,
            get: getter
          });
        }
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 11);
    }([
      function(module2, exports2, __webpack_require__) {
        var ArrayProto = Array.prototype;
        var ObjProto = Object.prototype;
        var escapeMap = {
          "&": "&amp;",
          '"': "&quot;",
          "'": "&#39;",
          "<": "&lt;",
          ">": "&gt;"
        };
        var escapeRegex = /[&"'<>]/g;
        var exports2 = module2.exports = {};
        function hasOwnProp(obj, k) {
          return ObjProto.hasOwnProperty.call(obj, k);
        }
        exports2.hasOwnProp = hasOwnProp;
        function lookupEscape(ch) {
          return escapeMap[ch];
        }
        function _prettifyError(path, withInternals, err) {
          if (!err.Update) {
            err = new exports2.TemplateError(err);
          }
          err.Update(path);
          if (!withInternals) {
            var old = err;
            err = new Error(old.message);
            err.name = old.name;
          }
          return err;
        }
        exports2._prettifyError = _prettifyError;
        function TemplateError(message, lineno, colno) {
          var err;
          var cause;
          if (message instanceof Error) {
            cause = message;
            message = cause.name + ": " + cause.message;
          }
          if (Object.setPrototypeOf) {
            err = new Error(message);
            Object.setPrototypeOf(err, TemplateError.prototype);
          } else {
            err = this;
            Object.defineProperty(err, "message", {
              enumerable: false,
              writable: true,
              value: message
            });
          }
          Object.defineProperty(err, "name", {
            value: "Template render error"
          });
          if (Error.captureStackTrace) {
            Error.captureStackTrace(err, this.constructor);
          }
          var getStack;
          if (cause) {
            var stackDescriptor = Object.getOwnPropertyDescriptor(cause, "stack");
            getStack = stackDescriptor && (stackDescriptor.get || function() {
              return stackDescriptor.value;
            });
            if (!getStack) {
              getStack = function getStack2() {
                return cause.stack;
              };
            }
          } else {
            var stack = new Error(message).stack;
            getStack = function getStack2() {
              return stack;
            };
          }
          Object.defineProperty(err, "stack", {
            get: function get() {
              return getStack.call(err);
            }
          });
          Object.defineProperty(err, "cause", {
            value: cause
          });
          err.lineno = lineno;
          err.colno = colno;
          err.firstUpdate = true;
          err.Update = function Update(path) {
            var msg = "(" + (path || "unknown path") + ")";
            if (this.firstUpdate) {
              if (this.lineno && this.colno) {
                msg += " [Line " + this.lineno + ", Column " + this.colno + "]";
              } else if (this.lineno) {
                msg += " [Line " + this.lineno + "]";
              }
            }
            msg += "\n ";
            if (this.firstUpdate) {
              msg += " ";
            }
            this.message = msg + (this.message || "");
            this.firstUpdate = false;
            return this;
          };
          return err;
        }
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(TemplateError.prototype, Error.prototype);
        } else {
          TemplateError.prototype = Object.create(Error.prototype, {
            constructor: {
              value: TemplateError
            }
          });
        }
        exports2.TemplateError = TemplateError;
        function escape(val) {
          return val.replace(escapeRegex, lookupEscape);
        }
        exports2.escape = escape;
        function isFunction(obj) {
          return ObjProto.toString.call(obj) === "[object Function]";
        }
        exports2.isFunction = isFunction;
        function isArray(obj) {
          return ObjProto.toString.call(obj) === "[object Array]";
        }
        exports2.isArray = isArray;
        function isString(obj) {
          return ObjProto.toString.call(obj) === "[object String]";
        }
        exports2.isString = isString;
        function isObject(obj) {
          return ObjProto.toString.call(obj) === "[object Object]";
        }
        exports2.isObject = isObject;
        function _prepareAttributeParts(attr) {
          if (!attr) {
            return [];
          }
          if (typeof attr === "string") {
            return attr.split(".");
          }
          return [attr];
        }
        function getAttrGetter(attribute) {
          var parts = _prepareAttributeParts(attribute);
          return function attrGetter(item) {
            var _item = item;
            for (var i = 0; i < parts.length; i++) {
              var part = parts[i];
              if (hasOwnProp(_item, part)) {
                _item = _item[part];
              } else {
                return void 0;
              }
            }
            return _item;
          };
        }
        exports2.getAttrGetter = getAttrGetter;
        function groupBy(obj, val, throwOnUndefined) {
          var result = {};
          var iterator = isFunction(val) ? val : getAttrGetter(val);
          for (var i = 0; i < obj.length; i++) {
            var value = obj[i];
            var key = iterator(value, i);
            if (key === void 0 && throwOnUndefined === true) {
              throw new TypeError('groupby: attribute "' + val + '" resolved to undefined');
            }
            (result[key] || (result[key] = [])).push(value);
          }
          return result;
        }
        exports2.groupBy = groupBy;
        function toArray(obj) {
          return Array.prototype.slice.call(obj);
        }
        exports2.toArray = toArray;
        function without(array) {
          var result = [];
          if (!array) {
            return result;
          }
          var length = array.length;
          var contains = toArray(arguments).slice(1);
          var index = -1;
          while (++index < length) {
            if (indexOf(contains, array[index]) === -1) {
              result.push(array[index]);
            }
          }
          return result;
        }
        exports2.without = without;
        function repeat(char_, n) {
          var str = "";
          for (var i = 0; i < n; i++) {
            str += char_;
          }
          return str;
        }
        exports2.repeat = repeat;
        function each(obj, func, context) {
          if (obj == null) {
            return;
          }
          if (ArrayProto.forEach && obj.forEach === ArrayProto.forEach) {
            obj.forEach(func, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
              func.call(context, obj[i], i, obj);
            }
          }
        }
        exports2.each = each;
        function map(obj, func) {
          var results = [];
          if (obj == null) {
            return results;
          }
          if (ArrayProto.map && obj.map === ArrayProto.map) {
            return obj.map(func);
          }
          for (var i = 0; i < obj.length; i++) {
            results[results.length] = func(obj[i], i);
          }
          if (obj.length === +obj.length) {
            results.length = obj.length;
          }
          return results;
        }
        exports2.map = map;
        function asyncIter(arr, iter, cb) {
          var i = -1;
          function next() {
            i++;
            if (i < arr.length) {
              iter(arr[i], i, next, cb);
            } else {
              cb();
            }
          }
          next();
        }
        exports2.asyncIter = asyncIter;
        function asyncFor(obj, iter, cb) {
          var keys = keys_(obj || {});
          var len = keys.length;
          var i = -1;
          function next() {
            i++;
            var k = keys[i];
            if (i < len) {
              iter(k, obj[k], i, len, next);
            } else {
              cb();
            }
          }
          next();
        }
        exports2.asyncFor = asyncFor;
        function indexOf(arr, searchElement, fromIndex) {
          return Array.prototype.indexOf.call(arr || [], searchElement, fromIndex);
        }
        exports2.indexOf = indexOf;
        function keys_(obj) {
          var arr = [];
          for (var k in obj) {
            if (hasOwnProp(obj, k)) {
              arr.push(k);
            }
          }
          return arr;
        }
        exports2.keys = keys_;
        function _entries(obj) {
          return keys_(obj).map(function(k) {
            return [k, obj[k]];
          });
        }
        exports2._entries = _entries;
        function _values(obj) {
          return keys_(obj).map(function(k) {
            return obj[k];
          });
        }
        exports2._values = _values;
        function extend(obj1, obj2) {
          obj1 = obj1 || {};
          keys_(obj2).forEach(function(k) {
            obj1[k] = obj2[k];
          });
          return obj1;
        }
        exports2._assign = exports2.extend = extend;
        function inOperator(key, val) {
          if (isArray(val) || isString(val)) {
            return val.indexOf(key) !== -1;
          } else if (isObject(val)) {
            return key in val;
          }
          throw new Error('Cannot use "in" operator to search for "' + key + '" in unexpected types.');
        }
        exports2.inOperator = inOperator;
      },
      function(module2, exports2, __webpack_require__) {
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
            o2.__proto__ = p3;
            return o2;
          };
          return _setPrototypeOf(o, p2);
        }
        var EventEmitter = __webpack_require__(16);
        var lib = __webpack_require__(0);
        function parentWrap(parent, prop) {
          if (typeof parent !== "function" || typeof prop !== "function") {
            return prop;
          }
          return function wrap() {
            var tmp = this.parent;
            this.parent = parent;
            var res = prop.apply(this, arguments);
            this.parent = tmp;
            return res;
          };
        }
        function extendClass(cls, name, props) {
          props = props || {};
          lib.keys(props).forEach(function(k) {
            props[k] = parentWrap(cls.prototype[k], props[k]);
          });
          var subclass = /* @__PURE__ */ function(_cls) {
            _inheritsLoose(subclass2, _cls);
            function subclass2() {
              return _cls.apply(this, arguments) || this;
            }
            _createClass(subclass2, [{
              key: "typename",
              get: function get() {
                return name;
              }
            }]);
            return subclass2;
          }(cls);
          lib._assign(subclass.prototype, props);
          return subclass;
        }
        var Obj = /* @__PURE__ */ function() {
          function Obj2() {
            this.init.apply(this, arguments);
          }
          var _proto = Obj2.prototype;
          _proto.init = function init() {
          };
          Obj2.extend = function extend(name, props) {
            if (typeof name === "object") {
              props = name;
              name = "anonymous";
            }
            return extendClass(this, name, props);
          };
          _createClass(Obj2, [{
            key: "typename",
            get: function get() {
              return this.constructor.name;
            }
          }]);
          return Obj2;
        }();
        var EmitterObj = /* @__PURE__ */ function(_EventEmitter) {
          _inheritsLoose(EmitterObj2, _EventEmitter);
          function EmitterObj2() {
            var _this2;
            var _this;
            _this = _EventEmitter.call(this) || this;
            (_this2 = _this).init.apply(_this2, arguments);
            return _this;
          }
          var _proto2 = EmitterObj2.prototype;
          _proto2.init = function init() {
          };
          EmitterObj2.extend = function extend(name, props) {
            if (typeof name === "object") {
              props = name;
              name = "anonymous";
            }
            return extendClass(this, name, props);
          };
          _createClass(EmitterObj2, [{
            key: "typename",
            get: function get() {
              return this.constructor.name;
            }
          }]);
          return EmitterObj2;
        }(EventEmitter);
        module2.exports = {
          Obj,
          EmitterObj
        };
      },
      function(module2, exports2, __webpack_require__) {
        var lib = __webpack_require__(0);
        var arrayFrom = Array.from;
        var supportsIterators = typeof Symbol === "function" && Symbol.iterator && typeof arrayFrom === "function";
        var Frame = /* @__PURE__ */ function() {
          function Frame2(parent, isolateWrites) {
            this.variables = /* @__PURE__ */ Object.create(null);
            this.parent = parent;
            this.topLevel = false;
            this.isolateWrites = isolateWrites;
          }
          var _proto = Frame2.prototype;
          _proto.set = function set(name, val, resolveUp) {
            var parts = name.split(".");
            var obj = this.variables;
            var frame = this;
            if (resolveUp) {
              if (frame = this.resolve(parts[0], true)) {
                frame.set(name, val);
                return;
              }
            }
            for (var i = 0; i < parts.length - 1; i++) {
              var id = parts[i];
              if (!obj[id]) {
                obj[id] = {};
              }
              obj = obj[id];
            }
            obj[parts[parts.length - 1]] = val;
          };
          _proto.get = function get(name) {
            var val = this.variables[name];
            if (val !== void 0) {
              return val;
            }
            return null;
          };
          _proto.lookup = function lookup(name) {
            var p2 = this.parent;
            var val = this.variables[name];
            if (val !== void 0) {
              return val;
            }
            return p2 && p2.lookup(name);
          };
          _proto.resolve = function resolve(name, forWrite) {
            var p2 = forWrite && this.isolateWrites ? void 0 : this.parent;
            var val = this.variables[name];
            if (val !== void 0) {
              return this;
            }
            return p2 && p2.resolve(name);
          };
          _proto.push = function push(isolateWrites) {
            return new Frame2(this, isolateWrites);
          };
          _proto.pop = function pop() {
            return this.parent;
          };
          return Frame2;
        }();
        function makeMacro(argNames, kwargNames, func) {
          return function macro() {
            for (var _len = arguments.length, macroArgs = new Array(_len), _key = 0; _key < _len; _key++) {
              macroArgs[_key] = arguments[_key];
            }
            var argCount = numArgs(macroArgs);
            var args;
            var kwargs = getKeywordArgs(macroArgs);
            if (argCount > argNames.length) {
              args = macroArgs.slice(0, argNames.length);
              macroArgs.slice(args.length, argCount).forEach(function(val, i2) {
                if (i2 < kwargNames.length) {
                  kwargs[kwargNames[i2]] = val;
                }
              });
              args.push(kwargs);
            } else if (argCount < argNames.length) {
              args = macroArgs.slice(0, argCount);
              for (var i = argCount; i < argNames.length; i++) {
                var arg = argNames[i];
                args.push(kwargs[arg]);
                delete kwargs[arg];
              }
              args.push(kwargs);
            } else {
              args = macroArgs;
            }
            return func.apply(this, args);
          };
        }
        function makeKeywordArgs(obj) {
          obj.__keywords = true;
          return obj;
        }
        function isKeywordArgs(obj) {
          return obj && Object.prototype.hasOwnProperty.call(obj, "__keywords");
        }
        function getKeywordArgs(args) {
          var len = args.length;
          if (len) {
            var lastArg = args[len - 1];
            if (isKeywordArgs(lastArg)) {
              return lastArg;
            }
          }
          return {};
        }
        function numArgs(args) {
          var len = args.length;
          if (len === 0) {
            return 0;
          }
          var lastArg = args[len - 1];
          if (isKeywordArgs(lastArg)) {
            return len - 1;
          } else {
            return len;
          }
        }
        function SafeString(val) {
          if (typeof val !== "string") {
            return val;
          }
          this.val = val;
          this.length = val.length;
        }
        SafeString.prototype = Object.create(String.prototype, {
          length: {
            writable: true,
            configurable: true,
            value: 0
          }
        });
        SafeString.prototype.valueOf = function valueOf() {
          return this.val;
        };
        SafeString.prototype.toString = function toString() {
          return this.val;
        };
        function copySafeness(dest, target) {
          if (dest instanceof SafeString) {
            return new SafeString(target);
          }
          return target.toString();
        }
        function markSafe(val) {
          var type = typeof val;
          if (type === "string") {
            return new SafeString(val);
          } else if (type !== "function") {
            return val;
          } else {
            return function wrapSafe(args) {
              var ret = val.apply(this, arguments);
              if (typeof ret === "string") {
                return new SafeString(ret);
              }
              return ret;
            };
          }
        }
        function suppressValue(val, autoescape) {
          val = val !== void 0 && val !== null ? val : "";
          if (autoescape && !(val instanceof SafeString)) {
            val = lib.escape(val.toString());
          }
          return val;
        }
        function ensureDefined(val, lineno, colno) {
          if (val === null || val === void 0) {
            throw new lib.TemplateError("attempted to output null or undefined value", lineno + 1, colno + 1);
          }
          return val;
        }
        function memberLookup(obj, val) {
          if (obj === void 0 || obj === null) {
            return void 0;
          }
          if (typeof obj[val] === "function") {
            return function() {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              return obj[val].apply(obj, args);
            };
          }
          return obj[val];
        }
        function callWrap(obj, name, context, args) {
          if (!obj) {
            throw new Error("Unable to call `" + name + "`, which is undefined or falsey");
          } else if (typeof obj !== "function") {
            throw new Error("Unable to call `" + name + "`, which is not a function");
          }
          return obj.apply(context, args);
        }
        function contextOrFrameLookup(context, frame, name) {
          var val = frame.lookup(name);
          return val !== void 0 ? val : context.lookup(name);
        }
        function handleError(error, lineno, colno) {
          if (error.lineno) {
            return error;
          } else {
            return new lib.TemplateError(error, lineno, colno);
          }
        }
        function asyncEach(arr, dimen, iter, cb) {
          if (lib.isArray(arr)) {
            var len = arr.length;
            lib.asyncIter(arr, function iterCallback(item, i, next) {
              switch (dimen) {
                case 1:
                  iter(item, i, len, next);
                  break;
                case 2:
                  iter(item[0], item[1], i, len, next);
                  break;
                case 3:
                  iter(item[0], item[1], item[2], i, len, next);
                  break;
                default:
                  item.push(i, len, next);
                  iter.apply(this, item);
              }
            }, cb);
          } else {
            lib.asyncFor(arr, function iterCallback(key, val, i, len2, next) {
              iter(key, val, i, len2, next);
            }, cb);
          }
        }
        function asyncAll(arr, dimen, func, cb) {
          var finished = 0;
          var len;
          var outputArr;
          function done(i2, output) {
            finished++;
            outputArr[i2] = output;
            if (finished === len) {
              cb(null, outputArr.join(""));
            }
          }
          if (lib.isArray(arr)) {
            len = arr.length;
            outputArr = new Array(len);
            if (len === 0) {
              cb(null, "");
            } else {
              for (var i = 0; i < arr.length; i++) {
                var item = arr[i];
                switch (dimen) {
                  case 1:
                    func(item, i, len, done);
                    break;
                  case 2:
                    func(item[0], item[1], i, len, done);
                    break;
                  case 3:
                    func(item[0], item[1], item[2], i, len, done);
                    break;
                  default:
                    item.push(i, len, done);
                    func.apply(this, item);
                }
              }
            }
          } else {
            var keys = lib.keys(arr || {});
            len = keys.length;
            outputArr = new Array(len);
            if (len === 0) {
              cb(null, "");
            } else {
              for (var _i = 0; _i < keys.length; _i++) {
                var k = keys[_i];
                func(k, arr[k], _i, len, done);
              }
            }
          }
        }
        function fromIterator(arr) {
          if (typeof arr !== "object" || arr === null || lib.isArray(arr)) {
            return arr;
          } else if (supportsIterators && Symbol.iterator in arr) {
            return arrayFrom(arr);
          } else {
            return arr;
          }
        }
        module2.exports = {
          Frame,
          makeMacro,
          makeKeywordArgs,
          numArgs,
          suppressValue,
          ensureDefined,
          memberLookup,
          contextOrFrameLookup,
          callWrap,
          handleError,
          isArray: lib.isArray,
          keys: lib.keys,
          SafeString,
          copySafeness,
          markSafe,
          asyncEach,
          asyncAll,
          inOperator: lib.inOperator,
          fromIterator
        };
      },
      function(module2, exports2, __webpack_require__) {
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
            o2.__proto__ = p3;
            return o2;
          };
          return _setPrototypeOf(o, p2);
        }
        var _require = __webpack_require__(1), Obj = _require.Obj;
        function traverseAndCheck(obj, type, results) {
          if (obj instanceof type) {
            results.push(obj);
          }
          if (obj instanceof Node) {
            obj.findAll(type, results);
          }
        }
        var Node = /* @__PURE__ */ function(_Obj) {
          _inheritsLoose(Node2, _Obj);
          function Node2() {
            return _Obj.apply(this, arguments) || this;
          }
          var _proto = Node2.prototype;
          _proto.init = function init(lineno, colno) {
            var _arguments = arguments, _this = this;
            for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = arguments[_key];
            }
            this.lineno = lineno;
            this.colno = colno;
            this.fields.forEach(function(field, i) {
              var val = _arguments[i + 2];
              if (val === void 0) {
                val = null;
              }
              _this[field] = val;
            });
          };
          _proto.findAll = function findAll(type, results) {
            var _this2 = this;
            results = results || [];
            if (this instanceof NodeList) {
              this.children.forEach(function(child) {
                return traverseAndCheck(child, type, results);
              });
            } else {
              this.fields.forEach(function(field) {
                return traverseAndCheck(_this2[field], type, results);
              });
            }
            return results;
          };
          _proto.iterFields = function iterFields(func) {
            var _this3 = this;
            this.fields.forEach(function(field) {
              func(_this3[field], field);
            });
          };
          return Node2;
        }(Obj);
        var Value = /* @__PURE__ */ function(_Node) {
          _inheritsLoose(Value2, _Node);
          function Value2() {
            return _Node.apply(this, arguments) || this;
          }
          _createClass(Value2, [{
            key: "typename",
            get: function get() {
              return "Value";
            }
          }, {
            key: "fields",
            get: function get() {
              return ["value"];
            }
          }]);
          return Value2;
        }(Node);
        var NodeList = /* @__PURE__ */ function(_Node2) {
          _inheritsLoose(NodeList2, _Node2);
          function NodeList2() {
            return _Node2.apply(this, arguments) || this;
          }
          var _proto2 = NodeList2.prototype;
          _proto2.init = function init(lineno, colno, nodes) {
            _Node2.prototype.init.call(this, lineno, colno, nodes || []);
          };
          _proto2.addChild = function addChild(node) {
            this.children.push(node);
          };
          _createClass(NodeList2, [{
            key: "typename",
            get: function get() {
              return "NodeList";
            }
          }, {
            key: "fields",
            get: function get() {
              return ["children"];
            }
          }]);
          return NodeList2;
        }(Node);
        var Root = NodeList.extend("Root");
        var Literal = Value.extend("Literal");
        var Symbol2 = Value.extend("Symbol");
        var Group = NodeList.extend("Group");
        var ArrayNode = NodeList.extend("Array");
        var Pair = Node.extend("Pair", {
          fields: ["key", "value"]
        });
        var Dict = NodeList.extend("Dict");
        var LookupVal = Node.extend("LookupVal", {
          fields: ["target", "val"]
        });
        var If = Node.extend("If", {
          fields: ["cond", "body", "else_"]
        });
        var IfAsync = If.extend("IfAsync");
        var InlineIf = Node.extend("InlineIf", {
          fields: ["cond", "body", "else_"]
        });
        var For = Node.extend("For", {
          fields: ["arr", "name", "body", "else_"]
        });
        var AsyncEach = For.extend("AsyncEach");
        var AsyncAll = For.extend("AsyncAll");
        var Macro = Node.extend("Macro", {
          fields: ["name", "args", "body"]
        });
        var Caller = Macro.extend("Caller");
        var Import = Node.extend("Import", {
          fields: ["template", "target", "withContext"]
        });
        var FromImport = /* @__PURE__ */ function(_Node3) {
          _inheritsLoose(FromImport2, _Node3);
          function FromImport2() {
            return _Node3.apply(this, arguments) || this;
          }
          var _proto3 = FromImport2.prototype;
          _proto3.init = function init(lineno, colno, template, names, withContext) {
            _Node3.prototype.init.call(this, lineno, colno, template, names || new NodeList(), withContext);
          };
          _createClass(FromImport2, [{
            key: "typename",
            get: function get() {
              return "FromImport";
            }
          }, {
            key: "fields",
            get: function get() {
              return ["template", "names", "withContext"];
            }
          }]);
          return FromImport2;
        }(Node);
        var FunCall = Node.extend("FunCall", {
          fields: ["name", "args"]
        });
        var Filter = FunCall.extend("Filter");
        var FilterAsync = Filter.extend("FilterAsync", {
          fields: ["name", "args", "symbol"]
        });
        var KeywordArgs = Dict.extend("KeywordArgs");
        var Block = Node.extend("Block", {
          fields: ["name", "body"]
        });
        var Super = Node.extend("Super", {
          fields: ["blockName", "symbol"]
        });
        var TemplateRef = Node.extend("TemplateRef", {
          fields: ["template"]
        });
        var Extends = TemplateRef.extend("Extends");
        var Include = Node.extend("Include", {
          fields: ["template", "ignoreMissing"]
        });
        var Set2 = Node.extend("Set", {
          fields: ["targets", "value"]
        });
        var Switch = Node.extend("Switch", {
          fields: ["expr", "cases", "default"]
        });
        var Case = Node.extend("Case", {
          fields: ["cond", "body"]
        });
        var Output = NodeList.extend("Output");
        var Capture = Node.extend("Capture", {
          fields: ["body"]
        });
        var TemplateData = Literal.extend("TemplateData");
        var UnaryOp = Node.extend("UnaryOp", {
          fields: ["target"]
        });
        var BinOp = Node.extend("BinOp", {
          fields: ["left", "right"]
        });
        var In = BinOp.extend("In");
        var Is = BinOp.extend("Is");
        var Or = BinOp.extend("Or");
        var And = BinOp.extend("And");
        var Not = UnaryOp.extend("Not");
        var Add = BinOp.extend("Add");
        var Concat = BinOp.extend("Concat");
        var Sub = BinOp.extend("Sub");
        var Mul = BinOp.extend("Mul");
        var Div = BinOp.extend("Div");
        var FloorDiv = BinOp.extend("FloorDiv");
        var Mod = BinOp.extend("Mod");
        var Pow = BinOp.extend("Pow");
        var Neg = UnaryOp.extend("Neg");
        var Pos = UnaryOp.extend("Pos");
        var Compare = Node.extend("Compare", {
          fields: ["expr", "ops"]
        });
        var CompareOperand = Node.extend("CompareOperand", {
          fields: ["expr", "type"]
        });
        var CallExtension = Node.extend("CallExtension", {
          init: function init(ext, prop, args, contentArgs) {
            this.parent();
            this.extName = ext.__name || ext;
            this.prop = prop;
            this.args = args || new NodeList();
            this.contentArgs = contentArgs || [];
            this.autoescape = ext.autoescape;
          },
          fields: ["extName", "prop", "args", "contentArgs"]
        });
        var CallExtensionAsync = CallExtension.extend("CallExtensionAsync");
        function print(str, indent, inline) {
          var lines = str.split("\n");
          lines.forEach(function(line, i) {
            if (line && (inline && i > 0 || !inline)) {
              process.stdout.write(" ".repeat(indent));
            }
            var nl = i === lines.length - 1 ? "" : "\n";
            process.stdout.write("" + line + nl);
          });
        }
        function printNodes(node, indent) {
          indent = indent || 0;
          print(node.typename + ": ", indent);
          if (node instanceof NodeList) {
            print("\n");
            node.children.forEach(function(n) {
              printNodes(n, indent + 2);
            });
          } else if (node instanceof CallExtension) {
            print(node.extName + "." + node.prop + "\n");
            if (node.args) {
              printNodes(node.args, indent + 2);
            }
            if (node.contentArgs) {
              node.contentArgs.forEach(function(n) {
                printNodes(n, indent + 2);
              });
            }
          } else {
            var nodes = [];
            var props = null;
            node.iterFields(function(val, fieldName) {
              if (val instanceof Node) {
                nodes.push([fieldName, val]);
              } else {
                props = props || {};
                props[fieldName] = val;
              }
            });
            if (props) {
              print(JSON.stringify(props, null, 2) + "\n", null, true);
            } else {
              print("\n");
            }
            nodes.forEach(function(_ref) {
              var fieldName = _ref[0], n = _ref[1];
              print("[" + fieldName + "] =>", indent + 2);
              printNodes(n, indent + 4);
            });
          }
        }
        module2.exports = {
          Node,
          Root,
          NodeList,
          Value,
          Literal,
          Symbol: Symbol2,
          Group,
          Array: ArrayNode,
          Pair,
          Dict,
          Output,
          Capture,
          TemplateData,
          If,
          IfAsync,
          InlineIf,
          For,
          AsyncEach,
          AsyncAll,
          Macro,
          Caller,
          Import,
          FromImport,
          FunCall,
          Filter,
          FilterAsync,
          KeywordArgs,
          Block,
          Super,
          Extends,
          Include,
          Set: Set2,
          Switch,
          Case,
          LookupVal,
          BinOp,
          In,
          Is,
          Or,
          And,
          Not,
          Add,
          Concat,
          Sub,
          Mul,
          Div,
          FloorDiv,
          Mod,
          Pow,
          Neg,
          Pos,
          Compare,
          CompareOperand,
          CallExtension,
          CallExtensionAsync,
          printNodes
        };
      },
      function(module2, exports2) {
      },
      function(module2, exports2, __webpack_require__) {
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
            o2.__proto__ = p3;
            return o2;
          };
          return _setPrototypeOf(o, p2);
        }
        var parser = __webpack_require__(8);
        var transformer = __webpack_require__(17);
        var nodes = __webpack_require__(3);
        var _require = __webpack_require__(0), TemplateError = _require.TemplateError;
        var _require2 = __webpack_require__(2), Frame = _require2.Frame;
        var _require3 = __webpack_require__(1), Obj = _require3.Obj;
        var compareOps = {
          "==": "==",
          "===": "===",
          "!=": "!=",
          "!==": "!==",
          "<": "<",
          ">": ">",
          "<=": "<=",
          ">=": ">="
        };
        var Compiler = /* @__PURE__ */ function(_Obj) {
          _inheritsLoose(Compiler2, _Obj);
          function Compiler2() {
            return _Obj.apply(this, arguments) || this;
          }
          var _proto = Compiler2.prototype;
          _proto.init = function init(templateName, throwOnUndefined) {
            this.templateName = templateName;
            this.codebuf = [];
            this.lastId = 0;
            this.buffer = null;
            this.bufferStack = [];
            this._scopeClosers = "";
            this.inBlock = false;
            this.throwOnUndefined = throwOnUndefined;
          };
          _proto.fail = function fail(msg, lineno, colno) {
            if (lineno !== void 0) {
              lineno += 1;
            }
            if (colno !== void 0) {
              colno += 1;
            }
            throw new TemplateError(msg, lineno, colno);
          };
          _proto._pushBuffer = function _pushBuffer() {
            var id = this._tmpid();
            this.bufferStack.push(this.buffer);
            this.buffer = id;
            this._emit("var " + this.buffer + ' = "";');
            return id;
          };
          _proto._popBuffer = function _popBuffer() {
            this.buffer = this.bufferStack.pop();
          };
          _proto._emit = function _emit(code) {
            this.codebuf.push(code);
          };
          _proto._emitLine = function _emitLine(code) {
            this._emit(code + "\n");
          };
          _proto._emitLines = function _emitLines() {
            var _this = this;
            for (var _len = arguments.length, lines = new Array(_len), _key = 0; _key < _len; _key++) {
              lines[_key] = arguments[_key];
            }
            lines.forEach(function(line) {
              return _this._emitLine(line);
            });
          };
          _proto._emitFuncBegin = function _emitFuncBegin(node, name) {
            this.buffer = "output";
            this._scopeClosers = "";
            this._emitLine("function " + name + "(env, context, frame, runtime, cb) {");
            this._emitLine("var lineno = " + node.lineno + ";");
            this._emitLine("var colno = " + node.colno + ";");
            this._emitLine("var " + this.buffer + ' = "";');
            this._emitLine("try {");
          };
          _proto._emitFuncEnd = function _emitFuncEnd(noReturn) {
            if (!noReturn) {
              this._emitLine("cb(null, " + this.buffer + ");");
            }
            this._closeScopeLevels();
            this._emitLine("} catch (e) {");
            this._emitLine("  cb(runtime.handleError(e, lineno, colno));");
            this._emitLine("}");
            this._emitLine("}");
            this.buffer = null;
          };
          _proto._addScopeLevel = function _addScopeLevel() {
            this._scopeClosers += "})";
          };
          _proto._closeScopeLevels = function _closeScopeLevels() {
            this._emitLine(this._scopeClosers + ";");
            this._scopeClosers = "";
          };
          _proto._withScopedSyntax = function _withScopedSyntax(func) {
            var _scopeClosers = this._scopeClosers;
            this._scopeClosers = "";
            func.call(this);
            this._closeScopeLevels();
            this._scopeClosers = _scopeClosers;
          };
          _proto._makeCallback = function _makeCallback(res) {
            var err = this._tmpid();
            return "function(" + err + (res ? "," + res : "") + ") {\nif(" + err + ") { cb(" + err + "); return; }";
          };
          _proto._tmpid = function _tmpid() {
            this.lastId++;
            return "t_" + this.lastId;
          };
          _proto._templateName = function _templateName() {
            return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
          };
          _proto._compileChildren = function _compileChildren(node, frame) {
            var _this2 = this;
            node.children.forEach(function(child) {
              _this2.compile(child, frame);
            });
          };
          _proto._compileAggregate = function _compileAggregate(node, frame, startChar, endChar) {
            var _this3 = this;
            if (startChar) {
              this._emit(startChar);
            }
            node.children.forEach(function(child, i) {
              if (i > 0) {
                _this3._emit(",");
              }
              _this3.compile(child, frame);
            });
            if (endChar) {
              this._emit(endChar);
            }
          };
          _proto._compileExpression = function _compileExpression(node, frame) {
            this.assertType(node, nodes.Literal, nodes.Symbol, nodes.Group, nodes.Array, nodes.Dict, nodes.FunCall, nodes.Caller, nodes.Filter, nodes.LookupVal, nodes.Compare, nodes.InlineIf, nodes.In, nodes.Is, nodes.And, nodes.Or, nodes.Not, nodes.Add, nodes.Concat, nodes.Sub, nodes.Mul, nodes.Div, nodes.FloorDiv, nodes.Mod, nodes.Pow, nodes.Neg, nodes.Pos, nodes.Compare, nodes.NodeList);
            this.compile(node, frame);
          };
          _proto.assertType = function assertType(node) {
            for (var _len2 = arguments.length, types = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              types[_key2 - 1] = arguments[_key2];
            }
            if (!types.some(function(t) {
              return node instanceof t;
            })) {
              this.fail("assertType: invalid type: " + node.typename, node.lineno, node.colno);
            }
          };
          _proto.compileCallExtension = function compileCallExtension(node, frame, async) {
            var _this4 = this;
            var args = node.args;
            var contentArgs = node.contentArgs;
            var autoescape = typeof node.autoescape === "boolean" ? node.autoescape : true;
            if (!async) {
              this._emit(this.buffer + " += runtime.suppressValue(");
            }
            this._emit('env.getExtension("' + node.extName + '")["' + node.prop + '"](');
            this._emit("context");
            if (args || contentArgs) {
              this._emit(",");
            }
            if (args) {
              if (!(args instanceof nodes.NodeList)) {
                this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`");
              }
              args.children.forEach(function(arg, i) {
                _this4._compileExpression(arg, frame);
                if (i !== args.children.length - 1 || contentArgs.length) {
                  _this4._emit(",");
                }
              });
            }
            if (contentArgs.length) {
              contentArgs.forEach(function(arg, i) {
                if (i > 0) {
                  _this4._emit(",");
                }
                if (arg) {
                  _this4._emitLine("function(cb) {");
                  _this4._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                  var id = _this4._pushBuffer();
                  _this4._withScopedSyntax(function() {
                    _this4.compile(arg, frame);
                    _this4._emitLine("cb(null, " + id + ");");
                  });
                  _this4._popBuffer();
                  _this4._emitLine("return " + id + ";");
                  _this4._emitLine("}");
                } else {
                  _this4._emit("null");
                }
              });
            }
            if (async) {
              var res = this._tmpid();
              this._emitLine(", " + this._makeCallback(res));
              this._emitLine(this.buffer + " += runtime.suppressValue(" + res + ", " + autoescape + " && env.opts.autoescape);");
              this._addScopeLevel();
            } else {
              this._emit(")");
              this._emit(", " + autoescape + " && env.opts.autoescape);\n");
            }
          };
          _proto.compileCallExtensionAsync = function compileCallExtensionAsync(node, frame) {
            this.compileCallExtension(node, frame, true);
          };
          _proto.compileNodeList = function compileNodeList(node, frame) {
            this._compileChildren(node, frame);
          };
          _proto.compileLiteral = function compileLiteral(node) {
            if (typeof node.value === "string") {
              var val = node.value.replace(/\\/g, "\\\\");
              val = val.replace(/"/g, '\\"');
              val = val.replace(/\n/g, "\\n");
              val = val.replace(/\r/g, "\\r");
              val = val.replace(/\t/g, "\\t");
              val = val.replace(/\u2028/g, "\\u2028");
              this._emit('"' + val + '"');
            } else if (node.value === null) {
              this._emit("null");
            } else {
              this._emit(node.value.toString());
            }
          };
          _proto.compileSymbol = function compileSymbol(node, frame) {
            var name = node.value;
            var v = frame.lookup(name);
            if (v) {
              this._emit(v);
            } else {
              this._emit('runtime.contextOrFrameLookup(context, frame, "' + name + '")');
            }
          };
          _proto.compileGroup = function compileGroup(node, frame) {
            this._compileAggregate(node, frame, "(", ")");
          };
          _proto.compileArray = function compileArray(node, frame) {
            this._compileAggregate(node, frame, "[", "]");
          };
          _proto.compileDict = function compileDict(node, frame) {
            this._compileAggregate(node, frame, "{", "}");
          };
          _proto.compilePair = function compilePair(node, frame) {
            var key = node.key;
            var val = node.value;
            if (key instanceof nodes.Symbol) {
              key = new nodes.Literal(key.lineno, key.colno, key.value);
            } else if (!(key instanceof nodes.Literal && typeof key.value === "string")) {
              this.fail("compilePair: Dict keys must be strings or names", key.lineno, key.colno);
            }
            this.compile(key, frame);
            this._emit(": ");
            this._compileExpression(val, frame);
          };
          _proto.compileInlineIf = function compileInlineIf(node, frame) {
            this._emit("(");
            this.compile(node.cond, frame);
            this._emit("?");
            this.compile(node.body, frame);
            this._emit(":");
            if (node.else_ !== null) {
              this.compile(node.else_, frame);
            } else {
              this._emit('""');
            }
            this._emit(")");
          };
          _proto.compileIn = function compileIn(node, frame) {
            this._emit("runtime.inOperator(");
            this.compile(node.left, frame);
            this._emit(",");
            this.compile(node.right, frame);
            this._emit(")");
          };
          _proto.compileIs = function compileIs(node, frame) {
            var right = node.right.name ? node.right.name.value : node.right.value;
            this._emit('env.getTest("' + right + '").call(context, ');
            this.compile(node.left, frame);
            if (node.right.args) {
              this._emit(",");
              this.compile(node.right.args, frame);
            }
            this._emit(") === true");
          };
          _proto._binOpEmitter = function _binOpEmitter(node, frame, str) {
            this.compile(node.left, frame);
            this._emit(str);
            this.compile(node.right, frame);
          };
          _proto.compileOr = function compileOr(node, frame) {
            return this._binOpEmitter(node, frame, " || ");
          };
          _proto.compileAnd = function compileAnd(node, frame) {
            return this._binOpEmitter(node, frame, " && ");
          };
          _proto.compileAdd = function compileAdd(node, frame) {
            return this._binOpEmitter(node, frame, " + ");
          };
          _proto.compileConcat = function compileConcat(node, frame) {
            return this._binOpEmitter(node, frame, ' + "" + ');
          };
          _proto.compileSub = function compileSub(node, frame) {
            return this._binOpEmitter(node, frame, " - ");
          };
          _proto.compileMul = function compileMul(node, frame) {
            return this._binOpEmitter(node, frame, " * ");
          };
          _proto.compileDiv = function compileDiv(node, frame) {
            return this._binOpEmitter(node, frame, " / ");
          };
          _proto.compileMod = function compileMod(node, frame) {
            return this._binOpEmitter(node, frame, " % ");
          };
          _proto.compileNot = function compileNot(node, frame) {
            this._emit("!");
            this.compile(node.target, frame);
          };
          _proto.compileFloorDiv = function compileFloorDiv(node, frame) {
            this._emit("Math.floor(");
            this.compile(node.left, frame);
            this._emit(" / ");
            this.compile(node.right, frame);
            this._emit(")");
          };
          _proto.compilePow = function compilePow(node, frame) {
            this._emit("Math.pow(");
            this.compile(node.left, frame);
            this._emit(", ");
            this.compile(node.right, frame);
            this._emit(")");
          };
          _proto.compileNeg = function compileNeg(node, frame) {
            this._emit("-");
            this.compile(node.target, frame);
          };
          _proto.compilePos = function compilePos(node, frame) {
            this._emit("+");
            this.compile(node.target, frame);
          };
          _proto.compileCompare = function compileCompare(node, frame) {
            var _this5 = this;
            this.compile(node.expr, frame);
            node.ops.forEach(function(op) {
              _this5._emit(" " + compareOps[op.type] + " ");
              _this5.compile(op.expr, frame);
            });
          };
          _proto.compileLookupVal = function compileLookupVal(node, frame) {
            this._emit("runtime.memberLookup((");
            this._compileExpression(node.target, frame);
            this._emit("),");
            this._compileExpression(node.val, frame);
            this._emit(")");
          };
          _proto._getNodeName = function _getNodeName(node) {
            switch (node.typename) {
              case "Symbol":
                return node.value;
              case "FunCall":
                return "the return value of (" + this._getNodeName(node.name) + ")";
              case "LookupVal":
                return this._getNodeName(node.target) + '["' + this._getNodeName(node.val) + '"]';
              case "Literal":
                return node.value.toString();
              default:
                return "--expression--";
            }
          };
          _proto.compileFunCall = function compileFunCall(node, frame) {
            this._emit("(lineno = " + node.lineno + ", colno = " + node.colno + ", ");
            this._emit("runtime.callWrap(");
            this._compileExpression(node.name, frame);
            this._emit(', "' + this._getNodeName(node.name).replace(/"/g, '\\"') + '", context, ');
            this._compileAggregate(node.args, frame, "[", "])");
            this._emit(")");
          };
          _proto.compileFilter = function compileFilter(node, frame) {
            var name = node.name;
            this.assertType(name, nodes.Symbol);
            this._emit('env.getFilter("' + name.value + '").call(context, ');
            this._compileAggregate(node.args, frame);
            this._emit(")");
          };
          _proto.compileFilterAsync = function compileFilterAsync(node, frame) {
            var name = node.name;
            var symbol = node.symbol.value;
            this.assertType(name, nodes.Symbol);
            frame.set(symbol, symbol);
            this._emit('env.getFilter("' + name.value + '").call(context, ');
            this._compileAggregate(node.args, frame);
            this._emitLine(", " + this._makeCallback(symbol));
            this._addScopeLevel();
          };
          _proto.compileKeywordArgs = function compileKeywordArgs(node, frame) {
            this._emit("runtime.makeKeywordArgs(");
            this.compileDict(node, frame);
            this._emit(")");
          };
          _proto.compileSet = function compileSet(node, frame) {
            var _this6 = this;
            var ids = [];
            node.targets.forEach(function(target) {
              var name = target.value;
              var id = frame.lookup(name);
              if (id === null || id === void 0) {
                id = _this6._tmpid();
                _this6._emitLine("var " + id + ";");
              }
              ids.push(id);
            });
            if (node.value) {
              this._emit(ids.join(" = ") + " = ");
              this._compileExpression(node.value, frame);
              this._emitLine(";");
            } else {
              this._emit(ids.join(" = ") + " = ");
              this.compile(node.body, frame);
              this._emitLine(";");
            }
            node.targets.forEach(function(target, i) {
              var id = ids[i];
              var name = target.value;
              _this6._emitLine('frame.set("' + name + '", ' + id + ", true);");
              _this6._emitLine("if(frame.topLevel) {");
              _this6._emitLine('context.setVariable("' + name + '", ' + id + ");");
              _this6._emitLine("}");
              if (name.charAt(0) !== "_") {
                _this6._emitLine("if(frame.topLevel) {");
                _this6._emitLine('context.addExport("' + name + '", ' + id + ");");
                _this6._emitLine("}");
              }
            });
          };
          _proto.compileSwitch = function compileSwitch(node, frame) {
            var _this7 = this;
            this._emit("switch (");
            this.compile(node.expr, frame);
            this._emit(") {");
            node.cases.forEach(function(c, i) {
              _this7._emit("case ");
              _this7.compile(c.cond, frame);
              _this7._emit(": ");
              _this7.compile(c.body, frame);
              if (c.body.children.length) {
                _this7._emitLine("break;");
              }
            });
            if (node.default) {
              this._emit("default:");
              this.compile(node.default, frame);
            }
            this._emit("}");
          };
          _proto.compileIf = function compileIf(node, frame, async) {
            var _this8 = this;
            this._emit("if(");
            this._compileExpression(node.cond, frame);
            this._emitLine(") {");
            this._withScopedSyntax(function() {
              _this8.compile(node.body, frame);
              if (async) {
                _this8._emit("cb()");
              }
            });
            if (node.else_) {
              this._emitLine("}\nelse {");
              this._withScopedSyntax(function() {
                _this8.compile(node.else_, frame);
                if (async) {
                  _this8._emit("cb()");
                }
              });
            } else if (async) {
              this._emitLine("}\nelse {");
              this._emit("cb()");
            }
            this._emitLine("}");
          };
          _proto.compileIfAsync = function compileIfAsync(node, frame) {
            this._emit("(function(cb) {");
            this.compileIf(node, frame, true);
            this._emit("})(" + this._makeCallback());
            this._addScopeLevel();
          };
          _proto._emitLoopBindings = function _emitLoopBindings(node, arr, i, len) {
            var _this9 = this;
            var bindings = [{
              name: "index",
              val: i + " + 1"
            }, {
              name: "index0",
              val: i
            }, {
              name: "revindex",
              val: len + " - " + i
            }, {
              name: "revindex0",
              val: len + " - " + i + " - 1"
            }, {
              name: "first",
              val: i + " === 0"
            }, {
              name: "last",
              val: i + " === " + len + " - 1"
            }, {
              name: "length",
              val: len
            }];
            bindings.forEach(function(b) {
              _this9._emitLine('frame.set("loop.' + b.name + '", ' + b.val + ");");
            });
          };
          _proto.compileFor = function compileFor(node, frame) {
            var _this10 = this;
            var i = this._tmpid();
            var len = this._tmpid();
            var arr = this._tmpid();
            frame = frame.push();
            this._emitLine("frame = frame.push();");
            this._emit("var " + arr + " = ");
            this._compileExpression(node.arr, frame);
            this._emitLine(";");
            this._emit("if(" + arr + ") {");
            this._emitLine(arr + " = runtime.fromIterator(" + arr + ");");
            if (node.name instanceof nodes.Array) {
              this._emitLine("var " + i + ";");
              this._emitLine("if(runtime.isArray(" + arr + ")) {");
              this._emitLine("var " + len + " = " + arr + ".length;");
              this._emitLine("for(" + i + "=0; " + i + " < " + arr + ".length; " + i + "++) {");
              node.name.children.forEach(function(child, u) {
                var tid = _this10._tmpid();
                _this10._emitLine("var " + tid + " = " + arr + "[" + i + "][" + u + "];");
                _this10._emitLine('frame.set("' + child + '", ' + arr + "[" + i + "][" + u + "]);");
                frame.set(node.name.children[u].value, tid);
              });
              this._emitLoopBindings(node, arr, i, len);
              this._withScopedSyntax(function() {
                _this10.compile(node.body, frame);
              });
              this._emitLine("}");
              this._emitLine("} else {");
              var _node$name$children = node.name.children, key = _node$name$children[0], val = _node$name$children[1];
              var k = this._tmpid();
              var v = this._tmpid();
              frame.set(key.value, k);
              frame.set(val.value, v);
              this._emitLine(i + " = -1;");
              this._emitLine("var " + len + " = runtime.keys(" + arr + ").length;");
              this._emitLine("for(var " + k + " in " + arr + ") {");
              this._emitLine(i + "++;");
              this._emitLine("var " + v + " = " + arr + "[" + k + "];");
              this._emitLine('frame.set("' + key.value + '", ' + k + ");");
              this._emitLine('frame.set("' + val.value + '", ' + v + ");");
              this._emitLoopBindings(node, arr, i, len);
              this._withScopedSyntax(function() {
                _this10.compile(node.body, frame);
              });
              this._emitLine("}");
              this._emitLine("}");
            } else {
              var _v = this._tmpid();
              frame.set(node.name.value, _v);
              this._emitLine("var " + len + " = " + arr + ".length;");
              this._emitLine("for(var " + i + "=0; " + i + " < " + arr + ".length; " + i + "++) {");
              this._emitLine("var " + _v + " = " + arr + "[" + i + "];");
              this._emitLine('frame.set("' + node.name.value + '", ' + _v + ");");
              this._emitLoopBindings(node, arr, i, len);
              this._withScopedSyntax(function() {
                _this10.compile(node.body, frame);
              });
              this._emitLine("}");
            }
            this._emitLine("}");
            if (node.else_) {
              this._emitLine("if (!" + len + ") {");
              this.compile(node.else_, frame);
              this._emitLine("}");
            }
            this._emitLine("frame = frame.pop();");
          };
          _proto._compileAsyncLoop = function _compileAsyncLoop(node, frame, parallel) {
            var _this11 = this;
            var i = this._tmpid();
            var len = this._tmpid();
            var arr = this._tmpid();
            var asyncMethod = parallel ? "asyncAll" : "asyncEach";
            frame = frame.push();
            this._emitLine("frame = frame.push();");
            this._emit("var " + arr + " = runtime.fromIterator(");
            this._compileExpression(node.arr, frame);
            this._emitLine(");");
            if (node.name instanceof nodes.Array) {
              var arrayLen = node.name.children.length;
              this._emit("runtime." + asyncMethod + "(" + arr + ", " + arrayLen + ", function(");
              node.name.children.forEach(function(name) {
                _this11._emit(name.value + ",");
              });
              this._emit(i + "," + len + ",next) {");
              node.name.children.forEach(function(name) {
                var id2 = name.value;
                frame.set(id2, id2);
                _this11._emitLine('frame.set("' + id2 + '", ' + id2 + ");");
              });
            } else {
              var id = node.name.value;
              this._emitLine("runtime." + asyncMethod + "(" + arr + ", 1, function(" + id + ", " + i + ", " + len + ",next) {");
              this._emitLine('frame.set("' + id + '", ' + id + ");");
              frame.set(id, id);
            }
            this._emitLoopBindings(node, arr, i, len);
            this._withScopedSyntax(function() {
              var buf;
              if (parallel) {
                buf = _this11._pushBuffer();
              }
              _this11.compile(node.body, frame);
              _this11._emitLine("next(" + i + (buf ? "," + buf : "") + ");");
              if (parallel) {
                _this11._popBuffer();
              }
            });
            var output = this._tmpid();
            this._emitLine("}, " + this._makeCallback(output));
            this._addScopeLevel();
            if (parallel) {
              this._emitLine(this.buffer + " += " + output + ";");
            }
            if (node.else_) {
              this._emitLine("if (!" + arr + ".length) {");
              this.compile(node.else_, frame);
              this._emitLine("}");
            }
            this._emitLine("frame = frame.pop();");
          };
          _proto.compileAsyncEach = function compileAsyncEach(node, frame) {
            this._compileAsyncLoop(node, frame);
          };
          _proto.compileAsyncAll = function compileAsyncAll(node, frame) {
            this._compileAsyncLoop(node, frame, true);
          };
          _proto._compileMacro = function _compileMacro(node, frame) {
            var _this12 = this;
            var args = [];
            var kwargs = null;
            var funcId = "macro_" + this._tmpid();
            var keepFrame = frame !== void 0;
            node.args.children.forEach(function(arg, i) {
              if (i === node.args.children.length - 1 && arg instanceof nodes.Dict) {
                kwargs = arg;
              } else {
                _this12.assertType(arg, nodes.Symbol);
                args.push(arg);
              }
            });
            var realNames = [].concat(args.map(function(n) {
              return "l_" + n.value;
            }), ["kwargs"]);
            var argNames = args.map(function(n) {
              return '"' + n.value + '"';
            });
            var kwargNames = (kwargs && kwargs.children || []).map(function(n) {
              return '"' + n.key.value + '"';
            });
            var currFrame;
            if (keepFrame) {
              currFrame = frame.push(true);
            } else {
              currFrame = new Frame();
            }
            this._emitLines("var " + funcId + " = runtime.makeMacro(", "[" + argNames.join(", ") + "], ", "[" + kwargNames.join(", ") + "], ", "function (" + realNames.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (keepFrame ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }');
            args.forEach(function(arg) {
              _this12._emitLine('frame.set("' + arg.value + '", l_' + arg.value + ");");
              currFrame.set(arg.value, "l_" + arg.value);
            });
            if (kwargs) {
              kwargs.children.forEach(function(pair) {
                var name = pair.key.value;
                _this12._emit('frame.set("' + name + '", ');
                _this12._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + name + '")');
                _this12._emit(' ? kwargs["' + name + '"] : ');
                _this12._compileExpression(pair.value, currFrame);
                _this12._emit(");");
              });
            }
            var bufferId = this._pushBuffer();
            this._withScopedSyntax(function() {
              _this12.compile(node.body, currFrame);
            });
            this._emitLine("frame = " + (keepFrame ? "frame.pop();" : "callerFrame;"));
            this._emitLine("return new runtime.SafeString(" + bufferId + ");");
            this._emitLine("});");
            this._popBuffer();
            return funcId;
          };
          _proto.compileMacro = function compileMacro(node, frame) {
            var funcId = this._compileMacro(node);
            var name = node.name.value;
            frame.set(name, funcId);
            if (frame.parent) {
              this._emitLine('frame.set("' + name + '", ' + funcId + ");");
            } else {
              if (node.name.value.charAt(0) !== "_") {
                this._emitLine('context.addExport("' + name + '");');
              }
              this._emitLine('context.setVariable("' + name + '", ' + funcId + ");");
            }
          };
          _proto.compileCaller = function compileCaller(node, frame) {
            this._emit("(function (){");
            var funcId = this._compileMacro(node, frame);
            this._emit("return " + funcId + ";})()");
          };
          _proto._compileGetTemplate = function _compileGetTemplate(node, frame, eagerCompile, ignoreMissing) {
            var parentTemplateId = this._tmpid();
            var parentName = this._templateName();
            var cb = this._makeCallback(parentTemplateId);
            var eagerCompileArg = eagerCompile ? "true" : "false";
            var ignoreMissingArg = ignoreMissing ? "true" : "false";
            this._emit("env.getTemplate(");
            this._compileExpression(node.template, frame);
            this._emitLine(", " + eagerCompileArg + ", " + parentName + ", " + ignoreMissingArg + ", " + cb);
            return parentTemplateId;
          };
          _proto.compileImport = function compileImport(node, frame) {
            var target = node.target.value;
            var id = this._compileGetTemplate(node, frame, false, false);
            this._addScopeLevel();
            this._emitLine(id + ".getExported(" + (node.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(id));
            this._addScopeLevel();
            frame.set(target, id);
            if (frame.parent) {
              this._emitLine('frame.set("' + target + '", ' + id + ");");
            } else {
              this._emitLine('context.setVariable("' + target + '", ' + id + ");");
            }
          };
          _proto.compileFromImport = function compileFromImport(node, frame) {
            var _this13 = this;
            var importedId = this._compileGetTemplate(node, frame, false, false);
            this._addScopeLevel();
            this._emitLine(importedId + ".getExported(" + (node.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(importedId));
            this._addScopeLevel();
            node.names.children.forEach(function(nameNode) {
              var name;
              var alias;
              var id = _this13._tmpid();
              if (nameNode instanceof nodes.Pair) {
                name = nameNode.key.value;
                alias = nameNode.value.value;
              } else {
                name = nameNode.value;
                alias = name;
              }
              _this13._emitLine("if(Object.prototype.hasOwnProperty.call(" + importedId + ', "' + name + '")) {');
              _this13._emitLine("var " + id + " = " + importedId + "." + name + ";");
              _this13._emitLine("} else {");
              _this13._emitLine(`cb(new Error("cannot import '` + name + `'")); return;`);
              _this13._emitLine("}");
              frame.set(alias, id);
              if (frame.parent) {
                _this13._emitLine('frame.set("' + alias + '", ' + id + ");");
              } else {
                _this13._emitLine('context.setVariable("' + alias + '", ' + id + ");");
              }
            });
          };
          _proto.compileBlock = function compileBlock(node) {
            var id = this._tmpid();
            if (!this.inBlock) {
              this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : ');
            }
            this._emit('context.getBlock("' + node.name.value + '")');
            if (!this.inBlock) {
              this._emit(")");
            }
            this._emitLine("(env, context, frame, runtime, " + this._makeCallback(id));
            this._emitLine(this.buffer + " += " + id + ";");
            this._addScopeLevel();
          };
          _proto.compileSuper = function compileSuper(node, frame) {
            var name = node.blockName.value;
            var id = node.symbol.value;
            var cb = this._makeCallback(id);
            this._emitLine('context.getSuper(env, "' + name + '", b_' + name + ", frame, runtime, " + cb);
            this._emitLine(id + " = runtime.markSafe(" + id + ");");
            this._addScopeLevel();
            frame.set(id, id);
          };
          _proto.compileExtends = function compileExtends(node, frame) {
            var k = this._tmpid();
            var parentTemplateId = this._compileGetTemplate(node, frame, true, false);
            this._emitLine("parentTemplate = " + parentTemplateId);
            this._emitLine("for(var " + k + " in parentTemplate.blocks) {");
            this._emitLine("context.addBlock(" + k + ", parentTemplate.blocks[" + k + "]);");
            this._emitLine("}");
            this._addScopeLevel();
          };
          _proto.compileInclude = function compileInclude(node, frame) {
            this._emitLine("var tasks = [];");
            this._emitLine("tasks.push(");
            this._emitLine("function(callback) {");
            var id = this._compileGetTemplate(node, frame, false, node.ignoreMissing);
            this._emitLine("callback(null," + id + ");});");
            this._emitLine("});");
            var id2 = this._tmpid();
            this._emitLine("tasks.push(");
            this._emitLine("function(template, callback){");
            this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(id2));
            this._emitLine("callback(null," + id2 + ");});");
            this._emitLine("});");
            this._emitLine("tasks.push(");
            this._emitLine("function(result, callback){");
            this._emitLine(this.buffer + " += result;");
            this._emitLine("callback(null);");
            this._emitLine("});");
            this._emitLine("env.waterfall(tasks, function(){");
            this._addScopeLevel();
          };
          _proto.compileTemplateData = function compileTemplateData(node, frame) {
            this.compileLiteral(node, frame);
          };
          _proto.compileCapture = function compileCapture(node, frame) {
            var _this14 = this;
            var buffer = this.buffer;
            this.buffer = "output";
            this._emitLine("(function() {");
            this._emitLine('var output = "";');
            this._withScopedSyntax(function() {
              _this14.compile(node.body, frame);
            });
            this._emitLine("return output;");
            this._emitLine("})()");
            this.buffer = buffer;
          };
          _proto.compileOutput = function compileOutput(node, frame) {
            var _this15 = this;
            var children = node.children;
            children.forEach(function(child) {
              if (child instanceof nodes.TemplateData) {
                if (child.value) {
                  _this15._emit(_this15.buffer + " += ");
                  _this15.compileLiteral(child, frame);
                  _this15._emitLine(";");
                }
              } else {
                _this15._emit(_this15.buffer + " += runtime.suppressValue(");
                if (_this15.throwOnUndefined) {
                  _this15._emit("runtime.ensureDefined(");
                }
                _this15.compile(child, frame);
                if (_this15.throwOnUndefined) {
                  _this15._emit("," + node.lineno + "," + node.colno + ")");
                }
                _this15._emit(", env.opts.autoescape);\n");
              }
            });
          };
          _proto.compileRoot = function compileRoot(node, frame) {
            var _this16 = this;
            if (frame) {
              this.fail("compileRoot: root node can't have frame");
            }
            frame = new Frame();
            this._emitFuncBegin(node, "root");
            this._emitLine("var parentTemplate = null;");
            this._compileChildren(node, frame);
            this._emitLine("if(parentTemplate) {");
            this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);");
            this._emitLine("} else {");
            this._emitLine("cb(null, " + this.buffer + ");");
            this._emitLine("}");
            this._emitFuncEnd(true);
            this.inBlock = true;
            var blockNames = [];
            var blocks = node.findAll(nodes.Block);
            blocks.forEach(function(block, i) {
              var name = block.name.value;
              if (blockNames.indexOf(name) !== -1) {
                throw new Error('Block "' + name + '" defined more than once.');
              }
              blockNames.push(name);
              _this16._emitFuncBegin(block, "b_" + name);
              var tmpFrame = new Frame();
              _this16._emitLine("var frame = frame.push(true);");
              _this16.compile(block.body, tmpFrame);
              _this16._emitFuncEnd();
            });
            this._emitLine("return {");
            blocks.forEach(function(block, i) {
              var blockName = "b_" + block.name.value;
              _this16._emitLine(blockName + ": " + blockName + ",");
            });
            this._emitLine("root: root\n};");
          };
          _proto.compile = function compile(node, frame) {
            var _compile = this["compile" + node.typename];
            if (_compile) {
              _compile.call(this, node, frame);
            } else {
              this.fail("compile: Cannot compile node: " + node.typename, node.lineno, node.colno);
            }
          };
          _proto.getCode = function getCode() {
            return this.codebuf.join("");
          };
          return Compiler2;
        }(Obj);
        module2.exports = {
          compile: function compile(src, asyncFilters, extensions, name, opts) {
            if (opts === void 0) {
              opts = {};
            }
            var c = new Compiler(name, opts.throwOnUndefined);
            var preprocessors = (extensions || []).map(function(ext) {
              return ext.preprocess;
            }).filter(function(f) {
              return !!f;
            });
            var processedSrc = preprocessors.reduce(function(s, processor) {
              return processor(s);
            }, src);
            c.compile(transformer.transform(parser.parse(processedSrc, extensions, opts), asyncFilters, name));
            return c.getCode();
          },
          Compiler
        };
      },
      function(module2, exports2, __webpack_require__) {
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
            o2.__proto__ = p3;
            return o2;
          };
          return _setPrototypeOf(o, p2);
        }
        var path = __webpack_require__(4);
        var _require = __webpack_require__(1), EmitterObj = _require.EmitterObj;
        module2.exports = /* @__PURE__ */ function(_EmitterObj) {
          _inheritsLoose(Loader, _EmitterObj);
          function Loader() {
            return _EmitterObj.apply(this, arguments) || this;
          }
          var _proto = Loader.prototype;
          _proto.resolve = function resolve(from, to) {
            return path.resolve(path.dirname(from), to);
          };
          _proto.isRelative = function isRelative(filename) {
            return filename.indexOf("./") === 0 || filename.indexOf("../") === 0;
          };
          return Loader;
        }(EmitterObj);
      },
      function(module2, exports2, __webpack_require__) {
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
            o2.__proto__ = p3;
            return o2;
          };
          return _setPrototypeOf(o, p2);
        }
        var asap = __webpack_require__(12);
        var _waterfall = __webpack_require__(15);
        var lib = __webpack_require__(0);
        var compiler = __webpack_require__(5);
        var filters = __webpack_require__(18);
        var _require = __webpack_require__(10), FileSystemLoader = _require.FileSystemLoader, WebLoader = _require.WebLoader, PrecompiledLoader = _require.PrecompiledLoader;
        var tests = __webpack_require__(20);
        var globals = __webpack_require__(21);
        var _require2 = __webpack_require__(1), Obj = _require2.Obj, EmitterObj = _require2.EmitterObj;
        var globalRuntime = __webpack_require__(2);
        var handleError = globalRuntime.handleError, Frame = globalRuntime.Frame;
        var expressApp = __webpack_require__(22);
        function callbackAsap(cb, err, res) {
          asap(function() {
            cb(err, res);
          });
        }
        var noopTmplSrc = {
          type: "code",
          obj: {
            root: function root(env, context, frame, runtime, cb) {
              try {
                cb(null, "");
              } catch (e) {
                cb(handleError(e, null, null));
              }
            }
          }
        };
        var Environment = /* @__PURE__ */ function(_EmitterObj) {
          _inheritsLoose(Environment2, _EmitterObj);
          function Environment2() {
            return _EmitterObj.apply(this, arguments) || this;
          }
          var _proto = Environment2.prototype;
          _proto.init = function init(loaders, opts) {
            var _this = this;
            opts = this.opts = opts || {};
            this.opts.dev = !!opts.dev;
            this.opts.autoescape = opts.autoescape != null ? opts.autoescape : true;
            this.opts.throwOnUndefined = !!opts.throwOnUndefined;
            this.opts.trimBlocks = !!opts.trimBlocks;
            this.opts.lstripBlocks = !!opts.lstripBlocks;
            this.loaders = [];
            if (!loaders) {
              if (FileSystemLoader) {
                this.loaders = [new FileSystemLoader("views")];
              } else if (WebLoader) {
                this.loaders = [new WebLoader("/views")];
              }
            } else {
              this.loaders = lib.isArray(loaders) ? loaders : [loaders];
            }
            if (typeof window !== "undefined" && window.nunjucksPrecompiled) {
              this.loaders.unshift(new PrecompiledLoader(window.nunjucksPrecompiled));
            }
            this._initLoaders();
            this.globals = globals();
            this.filters = {};
            this.tests = {};
            this.asyncFilters = [];
            this.extensions = {};
            this.extensionsList = [];
            lib._entries(filters).forEach(function(_ref) {
              var name = _ref[0], filter = _ref[1];
              return _this.addFilter(name, filter);
            });
            lib._entries(tests).forEach(function(_ref2) {
              var name = _ref2[0], test = _ref2[1];
              return _this.addTest(name, test);
            });
          };
          _proto._initLoaders = function _initLoaders() {
            var _this2 = this;
            this.loaders.forEach(function(loader) {
              loader.cache = {};
              if (typeof loader.on === "function") {
                loader.on("update", function(name, fullname) {
                  loader.cache[name] = null;
                  _this2.emit("update", name, fullname, loader);
                });
                loader.on("load", function(name, source) {
                  _this2.emit("load", name, source, loader);
                });
              }
            });
          };
          _proto.invalidateCache = function invalidateCache() {
            this.loaders.forEach(function(loader) {
              loader.cache = {};
            });
          };
          _proto.addExtension = function addExtension(name, extension) {
            extension.__name = name;
            this.extensions[name] = extension;
            this.extensionsList.push(extension);
            return this;
          };
          _proto.removeExtension = function removeExtension(name) {
            var extension = this.getExtension(name);
            if (!extension) {
              return;
            }
            this.extensionsList = lib.without(this.extensionsList, extension);
            delete this.extensions[name];
          };
          _proto.getExtension = function getExtension(name) {
            return this.extensions[name];
          };
          _proto.hasExtension = function hasExtension(name) {
            return !!this.extensions[name];
          };
          _proto.addGlobal = function addGlobal(name, value) {
            this.globals[name] = value;
            return this;
          };
          _proto.getGlobal = function getGlobal(name) {
            if (typeof this.globals[name] === "undefined") {
              throw new Error("global not found: " + name);
            }
            return this.globals[name];
          };
          _proto.addFilter = function addFilter(name, func, async) {
            var wrapped = func;
            if (async) {
              this.asyncFilters.push(name);
            }
            this.filters[name] = wrapped;
            return this;
          };
          _proto.getFilter = function getFilter(name) {
            if (!this.filters[name]) {
              throw new Error("filter not found: " + name);
            }
            return this.filters[name];
          };
          _proto.addTest = function addTest(name, func) {
            this.tests[name] = func;
            return this;
          };
          _proto.getTest = function getTest(name) {
            if (!this.tests[name]) {
              throw new Error("test not found: " + name);
            }
            return this.tests[name];
          };
          _proto.resolveTemplate = function resolveTemplate(loader, parentName, filename) {
            var isRelative = loader.isRelative && parentName ? loader.isRelative(filename) : false;
            return isRelative && loader.resolve ? loader.resolve(parentName, filename) : filename;
          };
          _proto.getTemplate = function getTemplate(name, eagerCompile, parentName, ignoreMissing, cb) {
            var _this3 = this;
            var that = this;
            var tmpl = null;
            if (name && name.raw) {
              name = name.raw;
            }
            if (lib.isFunction(parentName)) {
              cb = parentName;
              parentName = null;
              eagerCompile = eagerCompile || false;
            }
            if (lib.isFunction(eagerCompile)) {
              cb = eagerCompile;
              eagerCompile = false;
            }
            if (name instanceof Template) {
              tmpl = name;
            } else if (typeof name !== "string") {
              throw new Error("template names must be a string: " + name);
            } else {
              for (var i = 0; i < this.loaders.length; i++) {
                var loader = this.loaders[i];
                tmpl = loader.cache[this.resolveTemplate(loader, parentName, name)];
                if (tmpl) {
                  break;
                }
              }
            }
            if (tmpl) {
              if (eagerCompile) {
                tmpl.compile();
              }
              if (cb) {
                cb(null, tmpl);
                return void 0;
              } else {
                return tmpl;
              }
            }
            var syncResult;
            var createTemplate = function createTemplate2(err, info) {
              if (!info && !err && !ignoreMissing) {
                err = new Error("template not found: " + name);
              }
              if (err) {
                if (cb) {
                  cb(err);
                  return;
                } else {
                  throw err;
                }
              }
              var newTmpl;
              if (!info) {
                newTmpl = new Template(noopTmplSrc, _this3, "", eagerCompile);
              } else {
                newTmpl = new Template(info.src, _this3, info.path, eagerCompile);
                if (!info.noCache) {
                  info.loader.cache[name] = newTmpl;
                }
              }
              if (cb) {
                cb(null, newTmpl);
              } else {
                syncResult = newTmpl;
              }
            };
            lib.asyncIter(this.loaders, function(loader2, i2, next, done) {
              function handle(err, src) {
                if (err) {
                  done(err);
                } else if (src) {
                  src.loader = loader2;
                  done(null, src);
                } else {
                  next();
                }
              }
              name = that.resolveTemplate(loader2, parentName, name);
              if (loader2.async) {
                loader2.getSource(name, handle);
              } else {
                handle(null, loader2.getSource(name));
              }
            }, createTemplate);
            return syncResult;
          };
          _proto.express = function express(app2) {
            return expressApp(this, app2);
          };
          _proto.render = function render(name, ctx, cb) {
            if (lib.isFunction(ctx)) {
              cb = ctx;
              ctx = null;
            }
            var syncResult = null;
            this.getTemplate(name, function(err, tmpl) {
              if (err && cb) {
                callbackAsap(cb, err);
              } else if (err) {
                throw err;
              } else {
                syncResult = tmpl.render(ctx, cb);
              }
            });
            return syncResult;
          };
          _proto.renderString = function renderString(src, ctx, opts, cb) {
            if (lib.isFunction(opts)) {
              cb = opts;
              opts = {};
            }
            opts = opts || {};
            var tmpl = new Template(src, this, opts.path);
            return tmpl.render(ctx, cb);
          };
          _proto.waterfall = function waterfall(tasks, callback, forceAsync) {
            return _waterfall(tasks, callback, forceAsync);
          };
          return Environment2;
        }(EmitterObj);
        var Context = /* @__PURE__ */ function(_Obj) {
          _inheritsLoose(Context2, _Obj);
          function Context2() {
            return _Obj.apply(this, arguments) || this;
          }
          var _proto2 = Context2.prototype;
          _proto2.init = function init(ctx, blocks, env) {
            var _this4 = this;
            this.env = env || new Environment();
            this.ctx = lib.extend({}, ctx);
            this.blocks = {};
            this.exported = [];
            lib.keys(blocks).forEach(function(name) {
              _this4.addBlock(name, blocks[name]);
            });
          };
          _proto2.lookup = function lookup(name) {
            if (name in this.env.globals && !(name in this.ctx)) {
              return this.env.globals[name];
            } else {
              return this.ctx[name];
            }
          };
          _proto2.setVariable = function setVariable(name, val) {
            this.ctx[name] = val;
          };
          _proto2.getVariables = function getVariables() {
            return this.ctx;
          };
          _proto2.addBlock = function addBlock(name, block) {
            this.blocks[name] = this.blocks[name] || [];
            this.blocks[name].push(block);
            return this;
          };
          _proto2.getBlock = function getBlock(name) {
            if (!this.blocks[name]) {
              throw new Error('unknown block "' + name + '"');
            }
            return this.blocks[name][0];
          };
          _proto2.getSuper = function getSuper(env, name, block, frame, runtime, cb) {
            var idx = lib.indexOf(this.blocks[name] || [], block);
            var blk = this.blocks[name][idx + 1];
            var context = this;
            if (idx === -1 || !blk) {
              throw new Error('no super block available for "' + name + '"');
            }
            blk(env, context, frame, runtime, cb);
          };
          _proto2.addExport = function addExport(name) {
            this.exported.push(name);
          };
          _proto2.getExported = function getExported() {
            var _this5 = this;
            var exported = {};
            this.exported.forEach(function(name) {
              exported[name] = _this5.ctx[name];
            });
            return exported;
          };
          return Context2;
        }(Obj);
        var Template = /* @__PURE__ */ function(_Obj2) {
          _inheritsLoose(Template2, _Obj2);
          function Template2() {
            return _Obj2.apply(this, arguments) || this;
          }
          var _proto3 = Template2.prototype;
          _proto3.init = function init(src, env, path, eagerCompile) {
            this.env = env || new Environment();
            if (lib.isObject(src)) {
              switch (src.type) {
                case "code":
                  this.tmplProps = src.obj;
                  break;
                case "string":
                  this.tmplStr = src.obj;
                  break;
                default:
                  throw new Error("Unexpected template object type " + src.type + "; expected 'code', or 'string'");
              }
            } else if (lib.isString(src)) {
              this.tmplStr = src;
            } else {
              throw new Error("src must be a string or an object describing the source");
            }
            this.path = path;
            if (eagerCompile) {
              try {
                this._compile();
              } catch (err) {
                throw lib._prettifyError(this.path, this.env.opts.dev, err);
              }
            } else {
              this.compiled = false;
            }
          };
          _proto3.render = function render(ctx, parentFrame, cb) {
            var _this6 = this;
            if (typeof ctx === "function") {
              cb = ctx;
              ctx = {};
            } else if (typeof parentFrame === "function") {
              cb = parentFrame;
              parentFrame = null;
            }
            var forceAsync = !parentFrame;
            try {
              this.compile();
            } catch (e) {
              var err = lib._prettifyError(this.path, this.env.opts.dev, e);
              if (cb) {
                return callbackAsap(cb, err);
              } else {
                throw err;
              }
            }
            var context = new Context(ctx || {}, this.blocks, this.env);
            var frame = parentFrame ? parentFrame.push(true) : new Frame();
            frame.topLevel = true;
            var syncResult = null;
            var didError = false;
            this.rootRenderFunc(this.env, context, frame, globalRuntime, function(err2, res) {
              if (didError && cb && typeof res !== "undefined") {
                return;
              }
              if (err2) {
                err2 = lib._prettifyError(_this6.path, _this6.env.opts.dev, err2);
                didError = true;
              }
              if (cb) {
                if (forceAsync) {
                  callbackAsap(cb, err2, res);
                } else {
                  cb(err2, res);
                }
              } else {
                if (err2) {
                  throw err2;
                }
                syncResult = res;
              }
            });
            return syncResult;
          };
          _proto3.getExported = function getExported(ctx, parentFrame, cb) {
            if (typeof ctx === "function") {
              cb = ctx;
              ctx = {};
            }
            if (typeof parentFrame === "function") {
              cb = parentFrame;
              parentFrame = null;
            }
            try {
              this.compile();
            } catch (e) {
              if (cb) {
                return cb(e);
              } else {
                throw e;
              }
            }
            var frame = parentFrame ? parentFrame.push() : new Frame();
            frame.topLevel = true;
            var context = new Context(ctx || {}, this.blocks, this.env);
            this.rootRenderFunc(this.env, context, frame, globalRuntime, function(err) {
              if (err) {
                cb(err, null);
              } else {
                cb(null, context.getExported());
              }
            });
          };
          _proto3.compile = function compile() {
            if (!this.compiled) {
              this._compile();
            }
          };
          _proto3._compile = function _compile() {
            var props;
            if (this.tmplProps) {
              props = this.tmplProps;
            } else {
              var source = compiler.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts);
              var func = new Function(source);
              props = func();
            }
            this.blocks = this._getBlocks(props);
            this.rootRenderFunc = props.root;
            this.compiled = true;
          };
          _proto3._getBlocks = function _getBlocks(props) {
            var blocks = {};
            lib.keys(props).forEach(function(k) {
              if (k.slice(0, 2) === "b_") {
                blocks[k.slice(2)] = props[k];
              }
            });
            return blocks;
          };
          return Template2;
        }(Obj);
        module2.exports = {
          Environment,
          Template
        };
      },
      function(module2, exports2, __webpack_require__) {
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
            o2.__proto__ = p3;
            return o2;
          };
          return _setPrototypeOf(o, p2);
        }
        var lexer = __webpack_require__(9);
        var nodes = __webpack_require__(3);
        var Obj = __webpack_require__(1).Obj;
        var lib = __webpack_require__(0);
        var Parser = /* @__PURE__ */ function(_Obj) {
          _inheritsLoose(Parser2, _Obj);
          function Parser2() {
            return _Obj.apply(this, arguments) || this;
          }
          var _proto = Parser2.prototype;
          _proto.init = function init(tokens) {
            this.tokens = tokens;
            this.peeked = null;
            this.breakOnBlocks = null;
            this.dropLeadingWhitespace = false;
            this.extensions = [];
          };
          _proto.nextToken = function nextToken(withWhitespace) {
            var tok;
            if (this.peeked) {
              if (!withWhitespace && this.peeked.type === lexer.TOKEN_WHITESPACE) {
                this.peeked = null;
              } else {
                tok = this.peeked;
                this.peeked = null;
                return tok;
              }
            }
            tok = this.tokens.nextToken();
            if (!withWhitespace) {
              while (tok && tok.type === lexer.TOKEN_WHITESPACE) {
                tok = this.tokens.nextToken();
              }
            }
            return tok;
          };
          _proto.peekToken = function peekToken() {
            this.peeked = this.peeked || this.nextToken();
            return this.peeked;
          };
          _proto.pushToken = function pushToken(tok) {
            if (this.peeked) {
              throw new Error("pushToken: can only push one token on between reads");
            }
            this.peeked = tok;
          };
          _proto.error = function error(msg, lineno, colno) {
            if (lineno === void 0 || colno === void 0) {
              var tok = this.peekToken() || {};
              lineno = tok.lineno;
              colno = tok.colno;
            }
            if (lineno !== void 0) {
              lineno += 1;
            }
            if (colno !== void 0) {
              colno += 1;
            }
            return new lib.TemplateError(msg, lineno, colno);
          };
          _proto.fail = function fail(msg, lineno, colno) {
            throw this.error(msg, lineno, colno);
          };
          _proto.skip = function skip(type) {
            var tok = this.nextToken();
            if (!tok || tok.type !== type) {
              this.pushToken(tok);
              return false;
            }
            return true;
          };
          _proto.expect = function expect(type) {
            var tok = this.nextToken();
            if (tok.type !== type) {
              this.fail("expected " + type + ", got " + tok.type, tok.lineno, tok.colno);
            }
            return tok;
          };
          _proto.skipValue = function skipValue(type, val) {
            var tok = this.nextToken();
            if (!tok || tok.type !== type || tok.value !== val) {
              this.pushToken(tok);
              return false;
            }
            return true;
          };
          _proto.skipSymbol = function skipSymbol(val) {
            return this.skipValue(lexer.TOKEN_SYMBOL, val);
          };
          _proto.advanceAfterBlockEnd = function advanceAfterBlockEnd(name) {
            var tok;
            if (!name) {
              tok = this.peekToken();
              if (!tok) {
                this.fail("unexpected end of file");
              }
              if (tok.type !== lexer.TOKEN_SYMBOL) {
                this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed");
              }
              name = this.nextToken().value;
            }
            tok = this.nextToken();
            if (tok && tok.type === lexer.TOKEN_BLOCK_END) {
              if (tok.value.charAt(0) === "-") {
                this.dropLeadingWhitespace = true;
              }
            } else {
              this.fail("expected block end in " + name + " statement");
            }
            return tok;
          };
          _proto.advanceAfterVariableEnd = function advanceAfterVariableEnd() {
            var tok = this.nextToken();
            if (tok && tok.type === lexer.TOKEN_VARIABLE_END) {
              this.dropLeadingWhitespace = tok.value.charAt(tok.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-";
            } else {
              this.pushToken(tok);
              this.fail("expected variable end");
            }
          };
          _proto.parseFor = function parseFor() {
            var forTok = this.peekToken();
            var node;
            var endBlock;
            if (this.skipSymbol("for")) {
              node = new nodes.For(forTok.lineno, forTok.colno);
              endBlock = "endfor";
            } else if (this.skipSymbol("asyncEach")) {
              node = new nodes.AsyncEach(forTok.lineno, forTok.colno);
              endBlock = "endeach";
            } else if (this.skipSymbol("asyncAll")) {
              node = new nodes.AsyncAll(forTok.lineno, forTok.colno);
              endBlock = "endall";
            } else {
              this.fail("parseFor: expected for{Async}", forTok.lineno, forTok.colno);
            }
            node.name = this.parsePrimary();
            if (!(node.name instanceof nodes.Symbol)) {
              this.fail("parseFor: variable name expected for loop");
            }
            var type = this.peekToken().type;
            if (type === lexer.TOKEN_COMMA) {
              var key = node.name;
              node.name = new nodes.Array(key.lineno, key.colno);
              node.name.addChild(key);
              while (this.skip(lexer.TOKEN_COMMA)) {
                var prim = this.parsePrimary();
                node.name.addChild(prim);
              }
            }
            if (!this.skipSymbol("in")) {
              this.fail('parseFor: expected "in" keyword for loop', forTok.lineno, forTok.colno);
            }
            node.arr = this.parseExpression();
            this.advanceAfterBlockEnd(forTok.value);
            node.body = this.parseUntilBlocks(endBlock, "else");
            if (this.skipSymbol("else")) {
              this.advanceAfterBlockEnd("else");
              node.else_ = this.parseUntilBlocks(endBlock);
            }
            this.advanceAfterBlockEnd();
            return node;
          };
          _proto.parseMacro = function parseMacro() {
            var macroTok = this.peekToken();
            if (!this.skipSymbol("macro")) {
              this.fail("expected macro");
            }
            var name = this.parsePrimary(true);
            var args = this.parseSignature();
            var node = new nodes.Macro(macroTok.lineno, macroTok.colno, name, args);
            this.advanceAfterBlockEnd(macroTok.value);
            node.body = this.parseUntilBlocks("endmacro");
            this.advanceAfterBlockEnd();
            return node;
          };
          _proto.parseCall = function parseCall() {
            var callTok = this.peekToken();
            if (!this.skipSymbol("call")) {
              this.fail("expected call");
            }
            var callerArgs = this.parseSignature(true) || new nodes.NodeList();
            var macroCall = this.parsePrimary();
            this.advanceAfterBlockEnd(callTok.value);
            var body = this.parseUntilBlocks("endcall");
            this.advanceAfterBlockEnd();
            var callerName = new nodes.Symbol(callTok.lineno, callTok.colno, "caller");
            var callerNode = new nodes.Caller(callTok.lineno, callTok.colno, callerName, callerArgs, body);
            var args = macroCall.args.children;
            if (!(args[args.length - 1] instanceof nodes.KeywordArgs)) {
              args.push(new nodes.KeywordArgs());
            }
            var kwargs = args[args.length - 1];
            kwargs.addChild(new nodes.Pair(callTok.lineno, callTok.colno, callerName, callerNode));
            return new nodes.Output(callTok.lineno, callTok.colno, [macroCall]);
          };
          _proto.parseWithContext = function parseWithContext() {
            var tok = this.peekToken();
            var withContext = null;
            if (this.skipSymbol("with")) {
              withContext = true;
            } else if (this.skipSymbol("without")) {
              withContext = false;
            }
            if (withContext !== null) {
              if (!this.skipSymbol("context")) {
                this.fail("parseFrom: expected context after with/without", tok.lineno, tok.colno);
              }
            }
            return withContext;
          };
          _proto.parseImport = function parseImport() {
            var importTok = this.peekToken();
            if (!this.skipSymbol("import")) {
              this.fail("parseImport: expected import", importTok.lineno, importTok.colno);
            }
            var template = this.parseExpression();
            if (!this.skipSymbol("as")) {
              this.fail('parseImport: expected "as" keyword', importTok.lineno, importTok.colno);
            }
            var target = this.parseExpression();
            var withContext = this.parseWithContext();
            var node = new nodes.Import(importTok.lineno, importTok.colno, template, target, withContext);
            this.advanceAfterBlockEnd(importTok.value);
            return node;
          };
          _proto.parseFrom = function parseFrom() {
            var fromTok = this.peekToken();
            if (!this.skipSymbol("from")) {
              this.fail("parseFrom: expected from");
            }
            var template = this.parseExpression();
            if (!this.skipSymbol("import")) {
              this.fail("parseFrom: expected import", fromTok.lineno, fromTok.colno);
            }
            var names = new nodes.NodeList();
            var withContext;
            while (1) {
              var nextTok = this.peekToken();
              if (nextTok.type === lexer.TOKEN_BLOCK_END) {
                if (!names.children.length) {
                  this.fail("parseFrom: Expected at least one import name", fromTok.lineno, fromTok.colno);
                }
                if (nextTok.value.charAt(0) === "-") {
                  this.dropLeadingWhitespace = true;
                }
                this.nextToken();
                break;
              }
              if (names.children.length > 0 && !this.skip(lexer.TOKEN_COMMA)) {
                this.fail("parseFrom: expected comma", fromTok.lineno, fromTok.colno);
              }
              var name = this.parsePrimary();
              if (name.value.charAt(0) === "_") {
                this.fail("parseFrom: names starting with an underscore cannot be imported", name.lineno, name.colno);
              }
              if (this.skipSymbol("as")) {
                var alias = this.parsePrimary();
                names.addChild(new nodes.Pair(name.lineno, name.colno, name, alias));
              } else {
                names.addChild(name);
              }
              withContext = this.parseWithContext();
            }
            return new nodes.FromImport(fromTok.lineno, fromTok.colno, template, names, withContext);
          };
          _proto.parseBlock = function parseBlock() {
            var tag = this.peekToken();
            if (!this.skipSymbol("block")) {
              this.fail("parseBlock: expected block", tag.lineno, tag.colno);
            }
            var node = new nodes.Block(tag.lineno, tag.colno);
            node.name = this.parsePrimary();
            if (!(node.name instanceof nodes.Symbol)) {
              this.fail("parseBlock: variable name expected", tag.lineno, tag.colno);
            }
            this.advanceAfterBlockEnd(tag.value);
            node.body = this.parseUntilBlocks("endblock");
            this.skipSymbol("endblock");
            this.skipSymbol(node.name.value);
            var tok = this.peekToken();
            if (!tok) {
              this.fail("parseBlock: expected endblock, got end of file");
            }
            this.advanceAfterBlockEnd(tok.value);
            return node;
          };
          _proto.parseExtends = function parseExtends() {
            var tagName = "extends";
            var tag = this.peekToken();
            if (!this.skipSymbol(tagName)) {
              this.fail("parseTemplateRef: expected " + tagName);
            }
            var node = new nodes.Extends(tag.lineno, tag.colno);
            node.template = this.parseExpression();
            this.advanceAfterBlockEnd(tag.value);
            return node;
          };
          _proto.parseInclude = function parseInclude() {
            var tagName = "include";
            var tag = this.peekToken();
            if (!this.skipSymbol(tagName)) {
              this.fail("parseInclude: expected " + tagName);
            }
            var node = new nodes.Include(tag.lineno, tag.colno);
            node.template = this.parseExpression();
            if (this.skipSymbol("ignore") && this.skipSymbol("missing")) {
              node.ignoreMissing = true;
            }
            this.advanceAfterBlockEnd(tag.value);
            return node;
          };
          _proto.parseIf = function parseIf() {
            var tag = this.peekToken();
            var node;
            if (this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif")) {
              node = new nodes.If(tag.lineno, tag.colno);
            } else if (this.skipSymbol("ifAsync")) {
              node = new nodes.IfAsync(tag.lineno, tag.colno);
            } else {
              this.fail("parseIf: expected if, elif, or elseif", tag.lineno, tag.colno);
            }
            node.cond = this.parseExpression();
            this.advanceAfterBlockEnd(tag.value);
            node.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
            var tok = this.peekToken();
            switch (tok && tok.value) {
              case "elseif":
              case "elif":
                node.else_ = this.parseIf();
                break;
              case "else":
                this.advanceAfterBlockEnd();
                node.else_ = this.parseUntilBlocks("endif");
                this.advanceAfterBlockEnd();
                break;
              case "endif":
                node.else_ = null;
                this.advanceAfterBlockEnd();
                break;
              default:
                this.fail("parseIf: expected elif, else, or endif, got end of file");
            }
            return node;
          };
          _proto.parseSet = function parseSet() {
            var tag = this.peekToken();
            if (!this.skipSymbol("set")) {
              this.fail("parseSet: expected set", tag.lineno, tag.colno);
            }
            var node = new nodes.Set(tag.lineno, tag.colno, []);
            var target;
            while (target = this.parsePrimary()) {
              node.targets.push(target);
              if (!this.skip(lexer.TOKEN_COMMA)) {
                break;
              }
            }
            if (!this.skipValue(lexer.TOKEN_OPERATOR, "=")) {
              if (!this.skip(lexer.TOKEN_BLOCK_END)) {
                this.fail("parseSet: expected = or block end in set tag", tag.lineno, tag.colno);
              } else {
                node.body = new nodes.Capture(tag.lineno, tag.colno, this.parseUntilBlocks("endset"));
                node.value = null;
                this.advanceAfterBlockEnd();
              }
            } else {
              node.value = this.parseExpression();
              this.advanceAfterBlockEnd(tag.value);
            }
            return node;
          };
          _proto.parseSwitch = function parseSwitch() {
            var switchStart = "switch";
            var switchEnd = "endswitch";
            var caseStart = "case";
            var caseDefault = "default";
            var tag = this.peekToken();
            if (!this.skipSymbol(switchStart) && !this.skipSymbol(caseStart) && !this.skipSymbol(caseDefault)) {
              this.fail('parseSwitch: expected "switch," "case" or "default"', tag.lineno, tag.colno);
            }
            var expr = this.parseExpression();
            this.advanceAfterBlockEnd(switchStart);
            this.parseUntilBlocks(caseStart, caseDefault, switchEnd);
            var tok = this.peekToken();
            var cases = [];
            var defaultCase;
            do {
              this.skipSymbol(caseStart);
              var cond = this.parseExpression();
              this.advanceAfterBlockEnd(switchStart);
              var body = this.parseUntilBlocks(caseStart, caseDefault, switchEnd);
              cases.push(new nodes.Case(tok.line, tok.col, cond, body));
              tok = this.peekToken();
            } while (tok && tok.value === caseStart);
            switch (tok.value) {
              case caseDefault:
                this.advanceAfterBlockEnd();
                defaultCase = this.parseUntilBlocks(switchEnd);
                this.advanceAfterBlockEnd();
                break;
              case switchEnd:
                this.advanceAfterBlockEnd();
                break;
              default:
                this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
            }
            return new nodes.Switch(tag.lineno, tag.colno, expr, cases, defaultCase);
          };
          _proto.parseStatement = function parseStatement() {
            var tok = this.peekToken();
            var node;
            if (tok.type !== lexer.TOKEN_SYMBOL) {
              this.fail("tag name expected", tok.lineno, tok.colno);
            }
            if (this.breakOnBlocks && lib.indexOf(this.breakOnBlocks, tok.value) !== -1) {
              return null;
            }
            switch (tok.value) {
              case "raw":
                return this.parseRaw();
              case "verbatim":
                return this.parseRaw("verbatim");
              case "if":
              case "ifAsync":
                return this.parseIf();
              case "for":
              case "asyncEach":
              case "asyncAll":
                return this.parseFor();
              case "block":
                return this.parseBlock();
              case "extends":
                return this.parseExtends();
              case "include":
                return this.parseInclude();
              case "set":
                return this.parseSet();
              case "macro":
                return this.parseMacro();
              case "call":
                return this.parseCall();
              case "import":
                return this.parseImport();
              case "from":
                return this.parseFrom();
              case "filter":
                return this.parseFilterStatement();
              case "switch":
                return this.parseSwitch();
              default:
                if (this.extensions.length) {
                  for (var i = 0; i < this.extensions.length; i++) {
                    var ext = this.extensions[i];
                    if (lib.indexOf(ext.tags || [], tok.value) !== -1) {
                      return ext.parse(this, nodes, lexer);
                    }
                  }
                }
                this.fail("unknown block tag: " + tok.value, tok.lineno, tok.colno);
            }
            return node;
          };
          _proto.parseRaw = function parseRaw(tagName) {
            tagName = tagName || "raw";
            var endTagName = "end" + tagName;
            var rawBlockRegex = new RegExp("([\\s\\S]*?){%\\s*(" + tagName + "|" + endTagName + ")\\s*(?=%})%}");
            var rawLevel = 1;
            var str = "";
            var matches = null;
            var begun = this.advanceAfterBlockEnd();
            while ((matches = this.tokens._extractRegex(rawBlockRegex)) && rawLevel > 0) {
              var all = matches[0];
              var pre = matches[1];
              var blockName = matches[2];
              if (blockName === tagName) {
                rawLevel += 1;
              } else if (blockName === endTagName) {
                rawLevel -= 1;
              }
              if (rawLevel === 0) {
                str += pre;
                this.tokens.backN(all.length - pre.length);
              } else {
                str += all;
              }
            }
            return new nodes.Output(begun.lineno, begun.colno, [new nodes.TemplateData(begun.lineno, begun.colno, str)]);
          };
          _proto.parsePostfix = function parsePostfix(node) {
            var lookup;
            var tok = this.peekToken();
            while (tok) {
              if (tok.type === lexer.TOKEN_LEFT_PAREN) {
                node = new nodes.FunCall(tok.lineno, tok.colno, node, this.parseSignature());
              } else if (tok.type === lexer.TOKEN_LEFT_BRACKET) {
                lookup = this.parseAggregate();
                if (lookup.children.length > 1) {
                  this.fail("invalid index");
                }
                node = new nodes.LookupVal(tok.lineno, tok.colno, node, lookup.children[0]);
              } else if (tok.type === lexer.TOKEN_OPERATOR && tok.value === ".") {
                this.nextToken();
                var val = this.nextToken();
                if (val.type !== lexer.TOKEN_SYMBOL) {
                  this.fail("expected name as lookup value, got " + val.value, val.lineno, val.colno);
                }
                lookup = new nodes.Literal(val.lineno, val.colno, val.value);
                node = new nodes.LookupVal(tok.lineno, tok.colno, node, lookup);
              } else {
                break;
              }
              tok = this.peekToken();
            }
            return node;
          };
          _proto.parseExpression = function parseExpression() {
            var node = this.parseInlineIf();
            return node;
          };
          _proto.parseInlineIf = function parseInlineIf() {
            var node = this.parseOr();
            if (this.skipSymbol("if")) {
              var condNode = this.parseOr();
              var bodyNode = node;
              node = new nodes.InlineIf(node.lineno, node.colno);
              node.body = bodyNode;
              node.cond = condNode;
              if (this.skipSymbol("else")) {
                node.else_ = this.parseOr();
              } else {
                node.else_ = null;
              }
            }
            return node;
          };
          _proto.parseOr = function parseOr() {
            var node = this.parseAnd();
            while (this.skipSymbol("or")) {
              var node2 = this.parseAnd();
              node = new nodes.Or(node.lineno, node.colno, node, node2);
            }
            return node;
          };
          _proto.parseAnd = function parseAnd() {
            var node = this.parseNot();
            while (this.skipSymbol("and")) {
              var node2 = this.parseNot();
              node = new nodes.And(node.lineno, node.colno, node, node2);
            }
            return node;
          };
          _proto.parseNot = function parseNot() {
            var tok = this.peekToken();
            if (this.skipSymbol("not")) {
              return new nodes.Not(tok.lineno, tok.colno, this.parseNot());
            }
            return this.parseIn();
          };
          _proto.parseIn = function parseIn() {
            var node = this.parseIs();
            while (1) {
              var tok = this.nextToken();
              if (!tok) {
                break;
              }
              var invert = tok.type === lexer.TOKEN_SYMBOL && tok.value === "not";
              if (!invert) {
                this.pushToken(tok);
              }
              if (this.skipSymbol("in")) {
                var node2 = this.parseIs();
                node = new nodes.In(node.lineno, node.colno, node, node2);
                if (invert) {
                  node = new nodes.Not(node.lineno, node.colno, node);
                }
              } else {
                if (invert) {
                  this.pushToken(tok);
                }
                break;
              }
            }
            return node;
          };
          _proto.parseIs = function parseIs() {
            var node = this.parseCompare();
            if (this.skipSymbol("is")) {
              var not = this.skipSymbol("not");
              var node2 = this.parseCompare();
              node = new nodes.Is(node.lineno, node.colno, node, node2);
              if (not) {
                node = new nodes.Not(node.lineno, node.colno, node);
              }
            }
            return node;
          };
          _proto.parseCompare = function parseCompare() {
            var compareOps = ["==", "===", "!=", "!==", "<", ">", "<=", ">="];
            var expr = this.parseConcat();
            var ops = [];
            while (1) {
              var tok = this.nextToken();
              if (!tok) {
                break;
              } else if (compareOps.indexOf(tok.value) !== -1) {
                ops.push(new nodes.CompareOperand(tok.lineno, tok.colno, this.parseConcat(), tok.value));
              } else {
                this.pushToken(tok);
                break;
              }
            }
            if (ops.length) {
              return new nodes.Compare(ops[0].lineno, ops[0].colno, expr, ops);
            } else {
              return expr;
            }
          };
          _proto.parseConcat = function parseConcat() {
            var node = this.parseAdd();
            while (this.skipValue(lexer.TOKEN_TILDE, "~")) {
              var node2 = this.parseAdd();
              node = new nodes.Concat(node.lineno, node.colno, node, node2);
            }
            return node;
          };
          _proto.parseAdd = function parseAdd() {
            var node = this.parseSub();
            while (this.skipValue(lexer.TOKEN_OPERATOR, "+")) {
              var node2 = this.parseSub();
              node = new nodes.Add(node.lineno, node.colno, node, node2);
            }
            return node;
          };
          _proto.parseSub = function parseSub() {
            var node = this.parseMul();
            while (this.skipValue(lexer.TOKEN_OPERATOR, "-")) {
              var node2 = this.parseMul();
              node = new nodes.Sub(node.lineno, node.colno, node, node2);
            }
            return node;
          };
          _proto.parseMul = function parseMul() {
            var node = this.parseDiv();
            while (this.skipValue(lexer.TOKEN_OPERATOR, "*")) {
              var node2 = this.parseDiv();
              node = new nodes.Mul(node.lineno, node.colno, node, node2);
            }
            return node;
          };
          _proto.parseDiv = function parseDiv() {
            var node = this.parseFloorDiv();
            while (this.skipValue(lexer.TOKEN_OPERATOR, "/")) {
              var node2 = this.parseFloorDiv();
              node = new nodes.Div(node.lineno, node.colno, node, node2);
            }
            return node;
          };
          _proto.parseFloorDiv = function parseFloorDiv() {
            var node = this.parseMod();
            while (this.skipValue(lexer.TOKEN_OPERATOR, "//")) {
              var node2 = this.parseMod();
              node = new nodes.FloorDiv(node.lineno, node.colno, node, node2);
            }
            return node;
          };
          _proto.parseMod = function parseMod() {
            var node = this.parsePow();
            while (this.skipValue(lexer.TOKEN_OPERATOR, "%")) {
              var node2 = this.parsePow();
              node = new nodes.Mod(node.lineno, node.colno, node, node2);
            }
            return node;
          };
          _proto.parsePow = function parsePow() {
            var node = this.parseUnary();
            while (this.skipValue(lexer.TOKEN_OPERATOR, "**")) {
              var node2 = this.parseUnary();
              node = new nodes.Pow(node.lineno, node.colno, node, node2);
            }
            return node;
          };
          _proto.parseUnary = function parseUnary(noFilters) {
            var tok = this.peekToken();
            var node;
            if (this.skipValue(lexer.TOKEN_OPERATOR, "-")) {
              node = new nodes.Neg(tok.lineno, tok.colno, this.parseUnary(true));
            } else if (this.skipValue(lexer.TOKEN_OPERATOR, "+")) {
              node = new nodes.Pos(tok.lineno, tok.colno, this.parseUnary(true));
            } else {
              node = this.parsePrimary();
            }
            if (!noFilters) {
              node = this.parseFilter(node);
            }
            return node;
          };
          _proto.parsePrimary = function parsePrimary(noPostfix) {
            var tok = this.nextToken();
            var val;
            var node = null;
            if (!tok) {
              this.fail("expected expression, got end of file");
            } else if (tok.type === lexer.TOKEN_STRING) {
              val = tok.value;
            } else if (tok.type === lexer.TOKEN_INT) {
              val = parseInt(tok.value, 10);
            } else if (tok.type === lexer.TOKEN_FLOAT) {
              val = parseFloat(tok.value);
            } else if (tok.type === lexer.TOKEN_BOOLEAN) {
              if (tok.value === "true") {
                val = true;
              } else if (tok.value === "false") {
                val = false;
              } else {
                this.fail("invalid boolean: " + tok.value, tok.lineno, tok.colno);
              }
            } else if (tok.type === lexer.TOKEN_NONE) {
              val = null;
            } else if (tok.type === lexer.TOKEN_REGEX) {
              val = new RegExp(tok.value.body, tok.value.flags);
            }
            if (val !== void 0) {
              node = new nodes.Literal(tok.lineno, tok.colno, val);
            } else if (tok.type === lexer.TOKEN_SYMBOL) {
              node = new nodes.Symbol(tok.lineno, tok.colno, tok.value);
            } else {
              this.pushToken(tok);
              node = this.parseAggregate();
            }
            if (!noPostfix) {
              node = this.parsePostfix(node);
            }
            if (node) {
              return node;
            } else {
              throw this.error("unexpected token: " + tok.value, tok.lineno, tok.colno);
            }
          };
          _proto.parseFilterName = function parseFilterName() {
            var tok = this.expect(lexer.TOKEN_SYMBOL);
            var name = tok.value;
            while (this.skipValue(lexer.TOKEN_OPERATOR, ".")) {
              name += "." + this.expect(lexer.TOKEN_SYMBOL).value;
            }
            return new nodes.Symbol(tok.lineno, tok.colno, name);
          };
          _proto.parseFilterArgs = function parseFilterArgs(node) {
            if (this.peekToken().type === lexer.TOKEN_LEFT_PAREN) {
              var call = this.parsePostfix(node);
              return call.args.children;
            }
            return [];
          };
          _proto.parseFilter = function parseFilter(node) {
            while (this.skip(lexer.TOKEN_PIPE)) {
              var name = this.parseFilterName();
              node = new nodes.Filter(name.lineno, name.colno, name, new nodes.NodeList(name.lineno, name.colno, [node].concat(this.parseFilterArgs(node))));
            }
            return node;
          };
          _proto.parseFilterStatement = function parseFilterStatement() {
            var filterTok = this.peekToken();
            if (!this.skipSymbol("filter")) {
              this.fail("parseFilterStatement: expected filter");
            }
            var name = this.parseFilterName();
            var args = this.parseFilterArgs(name);
            this.advanceAfterBlockEnd(filterTok.value);
            var body = new nodes.Capture(name.lineno, name.colno, this.parseUntilBlocks("endfilter"));
            this.advanceAfterBlockEnd();
            var node = new nodes.Filter(name.lineno, name.colno, name, new nodes.NodeList(name.lineno, name.colno, [body].concat(args)));
            return new nodes.Output(name.lineno, name.colno, [node]);
          };
          _proto.parseAggregate = function parseAggregate() {
            var tok = this.nextToken();
            var node;
            switch (tok.type) {
              case lexer.TOKEN_LEFT_PAREN:
                node = new nodes.Group(tok.lineno, tok.colno);
                break;
              case lexer.TOKEN_LEFT_BRACKET:
                node = new nodes.Array(tok.lineno, tok.colno);
                break;
              case lexer.TOKEN_LEFT_CURLY:
                node = new nodes.Dict(tok.lineno, tok.colno);
                break;
              default:
                return null;
            }
            while (1) {
              var type = this.peekToken().type;
              if (type === lexer.TOKEN_RIGHT_PAREN || type === lexer.TOKEN_RIGHT_BRACKET || type === lexer.TOKEN_RIGHT_CURLY) {
                this.nextToken();
                break;
              }
              if (node.children.length > 0) {
                if (!this.skip(lexer.TOKEN_COMMA)) {
                  this.fail("parseAggregate: expected comma after expression", tok.lineno, tok.colno);
                }
              }
              if (node instanceof nodes.Dict) {
                var key = this.parsePrimary();
                if (!this.skip(lexer.TOKEN_COLON)) {
                  this.fail("parseAggregate: expected colon after dict key", tok.lineno, tok.colno);
                }
                var value = this.parseExpression();
                node.addChild(new nodes.Pair(key.lineno, key.colno, key, value));
              } else {
                var expr = this.parseExpression();
                node.addChild(expr);
              }
            }
            return node;
          };
          _proto.parseSignature = function parseSignature(tolerant, noParens) {
            var tok = this.peekToken();
            if (!noParens && tok.type !== lexer.TOKEN_LEFT_PAREN) {
              if (tolerant) {
                return null;
              } else {
                this.fail("expected arguments", tok.lineno, tok.colno);
              }
            }
            if (tok.type === lexer.TOKEN_LEFT_PAREN) {
              tok = this.nextToken();
            }
            var args = new nodes.NodeList(tok.lineno, tok.colno);
            var kwargs = new nodes.KeywordArgs(tok.lineno, tok.colno);
            var checkComma = false;
            while (1) {
              tok = this.peekToken();
              if (!noParens && tok.type === lexer.TOKEN_RIGHT_PAREN) {
                this.nextToken();
                break;
              } else if (noParens && tok.type === lexer.TOKEN_BLOCK_END) {
                break;
              }
              if (checkComma && !this.skip(lexer.TOKEN_COMMA)) {
                this.fail("parseSignature: expected comma after expression", tok.lineno, tok.colno);
              } else {
                var arg = this.parseExpression();
                if (this.skipValue(lexer.TOKEN_OPERATOR, "=")) {
                  kwargs.addChild(new nodes.Pair(arg.lineno, arg.colno, arg, this.parseExpression()));
                } else {
                  args.addChild(arg);
                }
              }
              checkComma = true;
            }
            if (kwargs.children.length) {
              args.addChild(kwargs);
            }
            return args;
          };
          _proto.parseUntilBlocks = function parseUntilBlocks() {
            var prev = this.breakOnBlocks;
            for (var _len = arguments.length, blockNames = new Array(_len), _key = 0; _key < _len; _key++) {
              blockNames[_key] = arguments[_key];
            }
            this.breakOnBlocks = blockNames;
            var ret = this.parse();
            this.breakOnBlocks = prev;
            return ret;
          };
          _proto.parseNodes = function parseNodes() {
            var tok;
            var buf = [];
            while (tok = this.nextToken()) {
              if (tok.type === lexer.TOKEN_DATA) {
                var data = tok.value;
                var nextToken = this.peekToken();
                var nextVal = nextToken && nextToken.value;
                if (this.dropLeadingWhitespace) {
                  data = data.replace(/^\s*/, "");
                  this.dropLeadingWhitespace = false;
                }
                if (nextToken && (nextToken.type === lexer.TOKEN_BLOCK_START && nextVal.charAt(nextVal.length - 1) === "-" || nextToken.type === lexer.TOKEN_VARIABLE_START && nextVal.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || nextToken.type === lexer.TOKEN_COMMENT && nextVal.charAt(this.tokens.tags.COMMENT_START.length) === "-")) {
                  data = data.replace(/\s*$/, "");
                }
                buf.push(new nodes.Output(tok.lineno, tok.colno, [new nodes.TemplateData(tok.lineno, tok.colno, data)]));
              } else if (tok.type === lexer.TOKEN_BLOCK_START) {
                this.dropLeadingWhitespace = false;
                var n = this.parseStatement();
                if (!n) {
                  break;
                }
                buf.push(n);
              } else if (tok.type === lexer.TOKEN_VARIABLE_START) {
                var e = this.parseExpression();
                this.dropLeadingWhitespace = false;
                this.advanceAfterVariableEnd();
                buf.push(new nodes.Output(tok.lineno, tok.colno, [e]));
              } else if (tok.type === lexer.TOKEN_COMMENT) {
                this.dropLeadingWhitespace = tok.value.charAt(tok.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-";
              } else {
                this.fail("Unexpected token at top-level: " + tok.type, tok.lineno, tok.colno);
              }
            }
            return buf;
          };
          _proto.parse = function parse() {
            return new nodes.NodeList(0, 0, this.parseNodes());
          };
          _proto.parseAsRoot = function parseAsRoot() {
            return new nodes.Root(0, 0, this.parseNodes());
          };
          return Parser2;
        }(Obj);
        module2.exports = {
          parse: function parse(src, extensions, opts) {
            var p2 = new Parser(lexer.lex(src, opts));
            if (extensions !== void 0) {
              p2.extensions = extensions;
            }
            return p2.parseAsRoot();
          },
          Parser
        };
      },
      function(module2, exports2, __webpack_require__) {
        var lib = __webpack_require__(0);
        var whitespaceChars = " \n	\r\xA0";
        var delimChars = "()[]{}%*-+~/#,:|.<>=!";
        var intChars = "0123456789";
        var BLOCK_START = "{%";
        var BLOCK_END = "%}";
        var VARIABLE_START = "{{";
        var VARIABLE_END = "}}";
        var COMMENT_START = "{#";
        var COMMENT_END = "#}";
        var TOKEN_STRING = "string";
        var TOKEN_WHITESPACE = "whitespace";
        var TOKEN_DATA = "data";
        var TOKEN_BLOCK_START = "block-start";
        var TOKEN_BLOCK_END = "block-end";
        var TOKEN_VARIABLE_START = "variable-start";
        var TOKEN_VARIABLE_END = "variable-end";
        var TOKEN_COMMENT = "comment";
        var TOKEN_LEFT_PAREN = "left-paren";
        var TOKEN_RIGHT_PAREN = "right-paren";
        var TOKEN_LEFT_BRACKET = "left-bracket";
        var TOKEN_RIGHT_BRACKET = "right-bracket";
        var TOKEN_LEFT_CURLY = "left-curly";
        var TOKEN_RIGHT_CURLY = "right-curly";
        var TOKEN_OPERATOR = "operator";
        var TOKEN_COMMA = "comma";
        var TOKEN_COLON = "colon";
        var TOKEN_TILDE = "tilde";
        var TOKEN_PIPE = "pipe";
        var TOKEN_INT = "int";
        var TOKEN_FLOAT = "float";
        var TOKEN_BOOLEAN = "boolean";
        var TOKEN_NONE = "none";
        var TOKEN_SYMBOL = "symbol";
        var TOKEN_SPECIAL = "special";
        var TOKEN_REGEX = "regex";
        function token(type, value, lineno, colno) {
          return {
            type,
            value,
            lineno,
            colno
          };
        }
        var Tokenizer = /* @__PURE__ */ function() {
          function Tokenizer2(str, opts) {
            this.str = str;
            this.index = 0;
            this.len = str.length;
            this.lineno = 0;
            this.colno = 0;
            this.in_code = false;
            opts = opts || {};
            var tags = opts.tags || {};
            this.tags = {
              BLOCK_START: tags.blockStart || BLOCK_START,
              BLOCK_END: tags.blockEnd || BLOCK_END,
              VARIABLE_START: tags.variableStart || VARIABLE_START,
              VARIABLE_END: tags.variableEnd || VARIABLE_END,
              COMMENT_START: tags.commentStart || COMMENT_START,
              COMMENT_END: tags.commentEnd || COMMENT_END
            };
            this.trimBlocks = !!opts.trimBlocks;
            this.lstripBlocks = !!opts.lstripBlocks;
          }
          var _proto = Tokenizer2.prototype;
          _proto.nextToken = function nextToken() {
            var lineno = this.lineno;
            var colno = this.colno;
            var tok;
            if (this.in_code) {
              var cur = this.current();
              if (this.isFinished()) {
                return null;
              } else if (cur === '"' || cur === "'") {
                return token(TOKEN_STRING, this._parseString(cur), lineno, colno);
              } else if (tok = this._extract(whitespaceChars)) {
                return token(TOKEN_WHITESPACE, tok, lineno, colno);
              } else if ((tok = this._extractString(this.tags.BLOCK_END)) || (tok = this._extractString("-" + this.tags.BLOCK_END))) {
                this.in_code = false;
                if (this.trimBlocks) {
                  cur = this.current();
                  if (cur === "\n") {
                    this.forward();
                  } else if (cur === "\r") {
                    this.forward();
                    cur = this.current();
                    if (cur === "\n") {
                      this.forward();
                    } else {
                      this.back();
                    }
                  }
                }
                return token(TOKEN_BLOCK_END, tok, lineno, colno);
              } else if ((tok = this._extractString(this.tags.VARIABLE_END)) || (tok = this._extractString("-" + this.tags.VARIABLE_END))) {
                this.in_code = false;
                return token(TOKEN_VARIABLE_END, tok, lineno, colno);
              } else if (cur === "r" && this.str.charAt(this.index + 1) === "/") {
                this.forwardN(2);
                var regexBody = "";
                while (!this.isFinished()) {
                  if (this.current() === "/" && this.previous() !== "\\") {
                    this.forward();
                    break;
                  } else {
                    regexBody += this.current();
                    this.forward();
                  }
                }
                var POSSIBLE_FLAGS = ["g", "i", "m", "y"];
                var regexFlags = "";
                while (!this.isFinished()) {
                  var isCurrentAFlag = POSSIBLE_FLAGS.indexOf(this.current()) !== -1;
                  if (isCurrentAFlag) {
                    regexFlags += this.current();
                    this.forward();
                  } else {
                    break;
                  }
                }
                return token(TOKEN_REGEX, {
                  body: regexBody,
                  flags: regexFlags
                }, lineno, colno);
              } else if (delimChars.indexOf(cur) !== -1) {
                this.forward();
                var complexOps = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"];
                var curComplex = cur + this.current();
                var type;
                if (lib.indexOf(complexOps, curComplex) !== -1) {
                  this.forward();
                  cur = curComplex;
                  if (lib.indexOf(complexOps, curComplex + this.current()) !== -1) {
                    cur = curComplex + this.current();
                    this.forward();
                  }
                }
                switch (cur) {
                  case "(":
                    type = TOKEN_LEFT_PAREN;
                    break;
                  case ")":
                    type = TOKEN_RIGHT_PAREN;
                    break;
                  case "[":
                    type = TOKEN_LEFT_BRACKET;
                    break;
                  case "]":
                    type = TOKEN_RIGHT_BRACKET;
                    break;
                  case "{":
                    type = TOKEN_LEFT_CURLY;
                    break;
                  case "}":
                    type = TOKEN_RIGHT_CURLY;
                    break;
                  case ",":
                    type = TOKEN_COMMA;
                    break;
                  case ":":
                    type = TOKEN_COLON;
                    break;
                  case "~":
                    type = TOKEN_TILDE;
                    break;
                  case "|":
                    type = TOKEN_PIPE;
                    break;
                  default:
                    type = TOKEN_OPERATOR;
                }
                return token(type, cur, lineno, colno);
              } else {
                tok = this._extractUntil(whitespaceChars + delimChars);
                if (tok.match(/^[-+]?[0-9]+$/)) {
                  if (this.current() === ".") {
                    this.forward();
                    var dec = this._extract(intChars);
                    return token(TOKEN_FLOAT, tok + "." + dec, lineno, colno);
                  } else {
                    return token(TOKEN_INT, tok, lineno, colno);
                  }
                } else if (tok.match(/^(true|false)$/)) {
                  return token(TOKEN_BOOLEAN, tok, lineno, colno);
                } else if (tok === "none") {
                  return token(TOKEN_NONE, tok, lineno, colno);
                } else if (tok === "null") {
                  return token(TOKEN_NONE, tok, lineno, colno);
                } else if (tok) {
                  return token(TOKEN_SYMBOL, tok, lineno, colno);
                } else {
                  throw new Error("Unexpected value while parsing: " + tok);
                }
              }
            } else {
              var beginChars = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
              if (this.isFinished()) {
                return null;
              } else if ((tok = this._extractString(this.tags.BLOCK_START + "-")) || (tok = this._extractString(this.tags.BLOCK_START))) {
                this.in_code = true;
                return token(TOKEN_BLOCK_START, tok, lineno, colno);
              } else if ((tok = this._extractString(this.tags.VARIABLE_START + "-")) || (tok = this._extractString(this.tags.VARIABLE_START))) {
                this.in_code = true;
                return token(TOKEN_VARIABLE_START, tok, lineno, colno);
              } else {
                tok = "";
                var data;
                var inComment = false;
                if (this._matches(this.tags.COMMENT_START)) {
                  inComment = true;
                  tok = this._extractString(this.tags.COMMENT_START);
                }
                while ((data = this._extractUntil(beginChars)) !== null) {
                  tok += data;
                  if ((this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !inComment) {
                    if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= tok.length) {
                      var lastLine = tok.slice(-this.colno);
                      if (/^\s+$/.test(lastLine)) {
                        tok = tok.slice(0, -this.colno);
                        if (!tok.length) {
                          return this.nextToken();
                        }
                      }
                    }
                    break;
                  } else if (this._matches(this.tags.COMMENT_END)) {
                    if (!inComment) {
                      throw new Error("unexpected end of comment");
                    }
                    tok += this._extractString(this.tags.COMMENT_END);
                    break;
                  } else {
                    tok += this.current();
                    this.forward();
                  }
                }
                if (data === null && inComment) {
                  throw new Error("expected end of comment, got end of file");
                }
                return token(inComment ? TOKEN_COMMENT : TOKEN_DATA, tok, lineno, colno);
              }
            }
          };
          _proto._parseString = function _parseString(delimiter) {
            this.forward();
            var str = "";
            while (!this.isFinished() && this.current() !== delimiter) {
              var cur = this.current();
              if (cur === "\\") {
                this.forward();
                switch (this.current()) {
                  case "n":
                    str += "\n";
                    break;
                  case "t":
                    str += "	";
                    break;
                  case "r":
                    str += "\r";
                    break;
                  default:
                    str += this.current();
                }
                this.forward();
              } else {
                str += cur;
                this.forward();
              }
            }
            this.forward();
            return str;
          };
          _proto._matches = function _matches(str) {
            if (this.index + str.length > this.len) {
              return null;
            }
            var m = this.str.slice(this.index, this.index + str.length);
            return m === str;
          };
          _proto._extractString = function _extractString(str) {
            if (this._matches(str)) {
              this.forwardN(str.length);
              return str;
            }
            return null;
          };
          _proto._extractUntil = function _extractUntil(charString) {
            return this._extractMatching(true, charString || "");
          };
          _proto._extract = function _extract(charString) {
            return this._extractMatching(false, charString);
          };
          _proto._extractMatching = function _extractMatching(breakOnMatch, charString) {
            if (this.isFinished()) {
              return null;
            }
            var first = charString.indexOf(this.current());
            if (breakOnMatch && first === -1 || !breakOnMatch && first !== -1) {
              var t = this.current();
              this.forward();
              var idx = charString.indexOf(this.current());
              while ((breakOnMatch && idx === -1 || !breakOnMatch && idx !== -1) && !this.isFinished()) {
                t += this.current();
                this.forward();
                idx = charString.indexOf(this.current());
              }
              return t;
            }
            return "";
          };
          _proto._extractRegex = function _extractRegex(regex) {
            var matches = this.currentStr().match(regex);
            if (!matches) {
              return null;
            }
            this.forwardN(matches[0].length);
            return matches;
          };
          _proto.isFinished = function isFinished() {
            return this.index >= this.len;
          };
          _proto.forwardN = function forwardN(n) {
            for (var i = 0; i < n; i++) {
              this.forward();
            }
          };
          _proto.forward = function forward() {
            this.index++;
            if (this.previous() === "\n") {
              this.lineno++;
              this.colno = 0;
            } else {
              this.colno++;
            }
          };
          _proto.backN = function backN(n) {
            for (var i = 0; i < n; i++) {
              this.back();
            }
          };
          _proto.back = function back() {
            this.index--;
            if (this.current() === "\n") {
              this.lineno--;
              var idx = this.src.lastIndexOf("\n", this.index - 1);
              if (idx === -1) {
                this.colno = this.index;
              } else {
                this.colno = this.index - idx;
              }
            } else {
              this.colno--;
            }
          };
          _proto.current = function current() {
            if (!this.isFinished()) {
              return this.str.charAt(this.index);
            }
            return "";
          };
          _proto.currentStr = function currentStr() {
            if (!this.isFinished()) {
              return this.str.substr(this.index);
            }
            return "";
          };
          _proto.previous = function previous() {
            return this.str.charAt(this.index - 1);
          };
          return Tokenizer2;
        }();
        module2.exports = {
          lex: function lex(src, opts) {
            return new Tokenizer(src, opts);
          },
          TOKEN_STRING,
          TOKEN_WHITESPACE,
          TOKEN_DATA,
          TOKEN_BLOCK_START,
          TOKEN_BLOCK_END,
          TOKEN_VARIABLE_START,
          TOKEN_VARIABLE_END,
          TOKEN_COMMENT,
          TOKEN_LEFT_PAREN,
          TOKEN_RIGHT_PAREN,
          TOKEN_LEFT_BRACKET,
          TOKEN_RIGHT_BRACKET,
          TOKEN_LEFT_CURLY,
          TOKEN_RIGHT_CURLY,
          TOKEN_OPERATOR,
          TOKEN_COMMA,
          TOKEN_COLON,
          TOKEN_TILDE,
          TOKEN_PIPE,
          TOKEN_INT,
          TOKEN_FLOAT,
          TOKEN_BOOLEAN,
          TOKEN_NONE,
          TOKEN_SYMBOL,
          TOKEN_SPECIAL,
          TOKEN_REGEX
        };
      },
      function(module2, exports2, __webpack_require__) {
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
            o2.__proto__ = p3;
            return o2;
          };
          return _setPrototypeOf(o, p2);
        }
        var Loader = __webpack_require__(6);
        var _require = __webpack_require__(19), PrecompiledLoader = _require.PrecompiledLoader;
        var WebLoader = /* @__PURE__ */ function(_Loader) {
          _inheritsLoose(WebLoader2, _Loader);
          function WebLoader2(baseURL, opts) {
            var _this;
            _this = _Loader.call(this) || this;
            _this.baseURL = baseURL || ".";
            opts = opts || {};
            _this.useCache = !!opts.useCache;
            _this.async = !!opts.async;
            return _this;
          }
          var _proto = WebLoader2.prototype;
          _proto.resolve = function resolve(from, to) {
            throw new Error("relative templates not support in the browser yet");
          };
          _proto.getSource = function getSource(name, cb) {
            var _this2 = this;
            var useCache = this.useCache;
            var result;
            this.fetch(this.baseURL + "/" + name, function(err, src) {
              if (err) {
                if (cb) {
                  cb(err.content);
                } else if (err.status === 404) {
                  result = null;
                } else {
                  throw err.content;
                }
              } else {
                result = {
                  src,
                  path: name,
                  noCache: !useCache
                };
                _this2.emit("load", name, result);
                if (cb) {
                  cb(null, result);
                }
              }
            });
            return result;
          };
          _proto.fetch = function fetch2(url, cb) {
            if (typeof window === "undefined") {
              throw new Error("WebLoader can only by used in a browser");
            }
            var ajax = new XMLHttpRequest();
            var loading = true;
            ajax.onreadystatechange = function() {
              if (ajax.readyState === 4 && loading) {
                loading = false;
                if (ajax.status === 0 || ajax.status === 200) {
                  cb(null, ajax.responseText);
                } else {
                  cb({
                    status: ajax.status,
                    content: ajax.responseText
                  });
                }
              }
            };
            url += (url.indexOf("?") === -1 ? "?" : "&") + "s=" + new Date().getTime();
            ajax.open("GET", url, this.async);
            ajax.send();
          };
          return WebLoader2;
        }(Loader);
        module2.exports = {
          WebLoader,
          PrecompiledLoader
        };
      },
      function(module2, exports2, __webpack_require__) {
        var lib = __webpack_require__(0);
        var _require = __webpack_require__(7), Environment = _require.Environment, Template = _require.Template;
        var Loader = __webpack_require__(6);
        var loaders = __webpack_require__(10);
        var precompile = __webpack_require__(23);
        var compiler = __webpack_require__(5);
        var parser = __webpack_require__(8);
        var lexer = __webpack_require__(9);
        var runtime = __webpack_require__(2);
        var nodes = __webpack_require__(3);
        var installJinjaCompat = __webpack_require__(25);
        var e;
        function configure(templatesPath, opts) {
          opts = opts || {};
          if (lib.isObject(templatesPath)) {
            opts = templatesPath;
            templatesPath = null;
          }
          var TemplateLoader;
          if (loaders.FileSystemLoader) {
            TemplateLoader = new loaders.FileSystemLoader(templatesPath, {
              watch: opts.watch,
              noCache: opts.noCache
            });
          } else if (loaders.WebLoader) {
            TemplateLoader = new loaders.WebLoader(templatesPath, {
              useCache: opts.web && opts.web.useCache,
              async: opts.web && opts.web.async
            });
          }
          e = new Environment(TemplateLoader, opts);
          if (opts && opts.express) {
            e.express(opts.express);
          }
          return e;
        }
        module2.exports = {
          Environment,
          Template,
          Loader,
          FileSystemLoader: loaders.FileSystemLoader,
          NodeResolveLoader: loaders.NodeResolveLoader,
          PrecompiledLoader: loaders.PrecompiledLoader,
          WebLoader: loaders.WebLoader,
          compiler,
          parser,
          lexer,
          runtime,
          lib,
          nodes,
          installJinjaCompat,
          configure,
          reset: function reset() {
            e = void 0;
          },
          compile: function compile(src, env, path, eagerCompile) {
            if (!e) {
              configure();
            }
            return new Template(src, env, path, eagerCompile);
          },
          render: function render(name, ctx, cb) {
            if (!e) {
              configure();
            }
            return e.render(name, ctx, cb);
          },
          renderString: function renderString(src, ctx, cb) {
            if (!e) {
              configure();
            }
            return e.renderString(src, ctx, cb);
          },
          precompile: precompile ? precompile.precompile : void 0,
          precompileString: precompile ? precompile.precompileString : void 0
        };
      },
      function(module2, exports2, __webpack_require__) {
        var rawAsap = __webpack_require__(13);
        var freeTasks = [];
        var pendingErrors = [];
        var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);
        function throwFirstError() {
          if (pendingErrors.length) {
            throw pendingErrors.shift();
          }
        }
        module2.exports = asap;
        function asap(task) {
          var rawTask;
          if (freeTasks.length) {
            rawTask = freeTasks.pop();
          } else {
            rawTask = new RawTask();
          }
          rawTask.task = task;
          rawAsap(rawTask);
        }
        function RawTask() {
          this.task = null;
        }
        RawTask.prototype.call = function() {
          try {
            this.task.call();
          } catch (error) {
            if (asap.onerror) {
              asap.onerror(error);
            } else {
              pendingErrors.push(error);
              requestErrorThrow();
            }
          } finally {
            this.task = null;
            freeTasks[freeTasks.length] = this;
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        (function(global2) {
          module2.exports = rawAsap;
          function rawAsap(task) {
            if (!queue.length) {
              requestFlush();
            }
            queue[queue.length] = task;
          }
          var queue = [];
          var requestFlush;
          var index = 0;
          var capacity = 1024;
          function flush() {
            while (index < queue.length) {
              var currentIndex = index;
              index = index + 1;
              queue[currentIndex].call();
              if (index > capacity) {
                for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                  queue[scan] = queue[scan + index];
                }
                queue.length -= index;
                index = 0;
              }
            }
            queue.length = 0;
            index = 0;
          }
          var scope = typeof global2 !== "undefined" ? global2 : self;
          var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
          if (typeof BrowserMutationObserver === "function") {
            requestFlush = makeRequestCallFromMutationObserver(flush);
          } else {
            requestFlush = makeRequestCallFromTimer(flush);
          }
          rawAsap.requestFlush = requestFlush;
          function makeRequestCallFromMutationObserver(callback) {
            var toggle = 1;
            var observer = new BrowserMutationObserver(callback);
            var node = document.createTextNode("");
            observer.observe(node, { characterData: true });
            return function requestCall() {
              toggle = -toggle;
              node.data = toggle;
            };
          }
          function makeRequestCallFromTimer(callback) {
            return function requestCall() {
              var timeoutHandle = setTimeout(handleTimer, 0);
              var intervalHandle = setInterval(handleTimer, 50);
              function handleTimer() {
                clearTimeout(timeoutHandle);
                clearInterval(intervalHandle);
                callback();
              }
            };
          }
          rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
        }).call(exports2, __webpack_require__(14));
      },
      function(module2, exports2) {
        var g;
        g = function() {
          return this;
        }();
        try {
          g = g || Function("return this")() || (1, eval)("this");
        } catch (e) {
          if (typeof window === "object")
            g = window;
        }
        module2.exports = g;
      },
      function(module2, exports2, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
        (function(globals) {
          var executeSync = function() {
            var args = Array.prototype.slice.call(arguments);
            if (typeof args[0] === "function") {
              args[0].apply(null, args.splice(1));
            }
          };
          var executeAsync = function(fn) {
            if (typeof setImmediate === "function") {
              setImmediate(fn);
            } else if (typeof process !== "undefined" && process.nextTick) {
              process.nextTick(fn);
            } else {
              setTimeout(fn, 0);
            }
          };
          var makeIterator = function(tasks) {
            var makeCallback = function(index) {
              var fn = function() {
                if (tasks.length) {
                  tasks[index].apply(null, arguments);
                }
                return fn.next();
              };
              fn.next = function() {
                return index < tasks.length - 1 ? makeCallback(index + 1) : null;
              };
              return fn;
            };
            return makeCallback(0);
          };
          var _isArray = Array.isArray || function(maybeArray) {
            return Object.prototype.toString.call(maybeArray) === "[object Array]";
          };
          var waterfall = function(tasks, callback, forceAsync) {
            var nextTick = forceAsync ? executeAsync : executeSync;
            callback = callback || function() {
            };
            if (!_isArray(tasks)) {
              var err = new Error("First argument to waterfall must be an array of functions");
              return callback(err);
            }
            if (!tasks.length) {
              return callback();
            }
            var wrapIterator = function(iterator) {
              return function(err2) {
                if (err2) {
                  callback.apply(null, arguments);
                  callback = function() {
                  };
                } else {
                  var args = Array.prototype.slice.call(arguments, 1);
                  var next = iterator.next();
                  if (next) {
                    args.push(wrapIterator(next));
                  } else {
                    args.push(callback);
                  }
                  nextTick(function() {
                    iterator.apply(null, args);
                  });
                }
              };
            };
            wrapIterator(makeIterator(tasks))();
          };
          {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
              return waterfall;
            }.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          }
        })();
      },
      function(module2, exports2, __webpack_require__) {
        var R = typeof Reflect === "object" ? Reflect : null;
        var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
          return Function.prototype.apply.call(target, receiver, args);
        };
        var ReflectOwnKeys;
        if (R && typeof R.ownKeys === "function") {
          ReflectOwnKeys = R.ownKeys;
        } else if (Object.getOwnPropertySymbols) {
          ReflectOwnKeys = function ReflectOwnKeys2(target) {
            return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
          };
        } else {
          ReflectOwnKeys = function ReflectOwnKeys2(target) {
            return Object.getOwnPropertyNames(target);
          };
        }
        function ProcessEmitWarning(warning) {
          if (console && console.warn)
            console.warn(warning);
        }
        var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
          return value !== value;
        };
        function EventEmitter() {
          EventEmitter.init.call(this);
        }
        module2.exports = EventEmitter;
        module2.exports.once = once;
        EventEmitter.EventEmitter = EventEmitter;
        EventEmitter.prototype._events = void 0;
        EventEmitter.prototype._eventsCount = 0;
        EventEmitter.prototype._maxListeners = void 0;
        var defaultMaxListeners = 10;
        function checkListener(listener) {
          if (typeof listener !== "function") {
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
          }
        }
        Object.defineProperty(EventEmitter, "defaultMaxListeners", {
          enumerable: true,
          get: function() {
            return defaultMaxListeners;
          },
          set: function(arg) {
            if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
              throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
            }
            defaultMaxListeners = arg;
          }
        });
        EventEmitter.init = function() {
          if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
            this._events = /* @__PURE__ */ Object.create(null);
            this._eventsCount = 0;
          }
          this._maxListeners = this._maxListeners || void 0;
        };
        EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
          if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
          }
          this._maxListeners = n;
          return this;
        };
        function _getMaxListeners(that) {
          if (that._maxListeners === void 0)
            return EventEmitter.defaultMaxListeners;
          return that._maxListeners;
        }
        EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
          return _getMaxListeners(this);
        };
        EventEmitter.prototype.emit = function emit(type) {
          var args = [];
          for (var i = 1; i < arguments.length; i++)
            args.push(arguments[i]);
          var doError = type === "error";
          var events = this._events;
          if (events !== void 0)
            doError = doError && events.error === void 0;
          else if (!doError)
            return false;
          if (doError) {
            var er;
            if (args.length > 0)
              er = args[0];
            if (er instanceof Error) {
              throw er;
            }
            var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
            err.context = er;
            throw err;
          }
          var handler = events[type];
          if (handler === void 0)
            return false;
          if (typeof handler === "function") {
            ReflectApply(handler, this, args);
          } else {
            var len = handler.length;
            var listeners = arrayClone(handler, len);
            for (var i = 0; i < len; ++i)
              ReflectApply(listeners[i], this, args);
          }
          return true;
        };
        function _addListener(target, type, listener, prepend) {
          var m;
          var events;
          var existing;
          checkListener(listener);
          events = target._events;
          if (events === void 0) {
            events = target._events = /* @__PURE__ */ Object.create(null);
            target._eventsCount = 0;
          } else {
            if (events.newListener !== void 0) {
              target.emit("newListener", type, listener.listener ? listener.listener : listener);
              events = target._events;
            }
            existing = events[type];
          }
          if (existing === void 0) {
            existing = events[type] = listener;
            ++target._eventsCount;
          } else {
            if (typeof existing === "function") {
              existing = events[type] = prepend ? [listener, existing] : [existing, listener];
            } else if (prepend) {
              existing.unshift(listener);
            } else {
              existing.push(listener);
            }
            m = _getMaxListeners(target);
            if (m > 0 && existing.length > m && !existing.warned) {
              existing.warned = true;
              var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              w.name = "MaxListenersExceededWarning";
              w.emitter = target;
              w.type = type;
              w.count = existing.length;
              ProcessEmitWarning(w);
            }
          }
          return target;
        }
        EventEmitter.prototype.addListener = function addListener(type, listener) {
          return _addListener(this, type, listener, false);
        };
        EventEmitter.prototype.on = EventEmitter.prototype.addListener;
        EventEmitter.prototype.prependListener = function prependListener(type, listener) {
          return _addListener(this, type, listener, true);
        };
        function onceWrapper() {
          if (!this.fired) {
            this.target.removeListener(this.type, this.wrapFn);
            this.fired = true;
            if (arguments.length === 0)
              return this.listener.call(this.target);
            return this.listener.apply(this.target, arguments);
          }
        }
        function _onceWrap(target, type, listener) {
          var state = { fired: false, wrapFn: void 0, target, type, listener };
          var wrapped = onceWrapper.bind(state);
          wrapped.listener = listener;
          state.wrapFn = wrapped;
          return wrapped;
        }
        EventEmitter.prototype.once = function once2(type, listener) {
          checkListener(listener);
          this.on(type, _onceWrap(this, type, listener));
          return this;
        };
        EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
          checkListener(listener);
          this.prependListener(type, _onceWrap(this, type, listener));
          return this;
        };
        EventEmitter.prototype.removeListener = function removeListener(type, listener) {
          var list, events, position, i, originalListener;
          checkListener(listener);
          events = this._events;
          if (events === void 0)
            return this;
          list = events[type];
          if (list === void 0)
            return this;
          if (list === listener || list.listener === listener) {
            if (--this._eventsCount === 0)
              this._events = /* @__PURE__ */ Object.create(null);
            else {
              delete events[type];
              if (events.removeListener)
                this.emit("removeListener", type, list.listener || listener);
            }
          } else if (typeof list !== "function") {
            position = -1;
            for (i = list.length - 1; i >= 0; i--) {
              if (list[i] === listener || list[i].listener === listener) {
                originalListener = list[i].listener;
                position = i;
                break;
              }
            }
            if (position < 0)
              return this;
            if (position === 0)
              list.shift();
            else {
              spliceOne(list, position);
            }
            if (list.length === 1)
              events[type] = list[0];
            if (events.removeListener !== void 0)
              this.emit("removeListener", type, originalListener || listener);
          }
          return this;
        };
        EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
        EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
          var listeners, events, i;
          events = this._events;
          if (events === void 0)
            return this;
          if (events.removeListener === void 0) {
            if (arguments.length === 0) {
              this._events = /* @__PURE__ */ Object.create(null);
              this._eventsCount = 0;
            } else if (events[type] !== void 0) {
              if (--this._eventsCount === 0)
                this._events = /* @__PURE__ */ Object.create(null);
              else
                delete events[type];
            }
            return this;
          }
          if (arguments.length === 0) {
            var keys = Object.keys(events);
            var key;
            for (i = 0; i < keys.length; ++i) {
              key = keys[i];
              if (key === "removeListener")
                continue;
              this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = /* @__PURE__ */ Object.create(null);
            this._eventsCount = 0;
            return this;
          }
          listeners = events[type];
          if (typeof listeners === "function") {
            this.removeListener(type, listeners);
          } else if (listeners !== void 0) {
            for (i = listeners.length - 1; i >= 0; i--) {
              this.removeListener(type, listeners[i]);
            }
          }
          return this;
        };
        function _listeners(target, type, unwrap) {
          var events = target._events;
          if (events === void 0)
            return [];
          var evlistener = events[type];
          if (evlistener === void 0)
            return [];
          if (typeof evlistener === "function")
            return unwrap ? [evlistener.listener || evlistener] : [evlistener];
          return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
        }
        EventEmitter.prototype.listeners = function listeners(type) {
          return _listeners(this, type, true);
        };
        EventEmitter.prototype.rawListeners = function rawListeners(type) {
          return _listeners(this, type, false);
        };
        EventEmitter.listenerCount = function(emitter, type) {
          if (typeof emitter.listenerCount === "function") {
            return emitter.listenerCount(type);
          } else {
            return listenerCount.call(emitter, type);
          }
        };
        EventEmitter.prototype.listenerCount = listenerCount;
        function listenerCount(type) {
          var events = this._events;
          if (events !== void 0) {
            var evlistener = events[type];
            if (typeof evlistener === "function") {
              return 1;
            } else if (evlistener !== void 0) {
              return evlistener.length;
            }
          }
          return 0;
        }
        EventEmitter.prototype.eventNames = function eventNames() {
          return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
        };
        function arrayClone(arr, n) {
          var copy = new Array(n);
          for (var i = 0; i < n; ++i)
            copy[i] = arr[i];
          return copy;
        }
        function spliceOne(list, index) {
          for (; index + 1 < list.length; index++)
            list[index] = list[index + 1];
          list.pop();
        }
        function unwrapListeners(arr) {
          var ret = new Array(arr.length);
          for (var i = 0; i < ret.length; ++i) {
            ret[i] = arr[i].listener || arr[i];
          }
          return ret;
        }
        function once(emitter, name) {
          return new Promise(function(resolve, reject) {
            function eventListener() {
              if (errorListener !== void 0) {
                emitter.removeListener("error", errorListener);
              }
              resolve([].slice.call(arguments));
            }
            var errorListener;
            if (name !== "error") {
              errorListener = function errorListener2(err) {
                emitter.removeListener(name, eventListener);
                reject(err);
              };
              emitter.once("error", errorListener);
            }
            emitter.once(name, eventListener);
          });
        }
      },
      function(module2, exports2, __webpack_require__) {
        var nodes = __webpack_require__(3);
        var lib = __webpack_require__(0);
        var sym = 0;
        function gensym() {
          return "hole_" + sym++;
        }
        function mapCOW(arr, func) {
          var res = null;
          for (var i = 0; i < arr.length; i++) {
            var item = func(arr[i]);
            if (item !== arr[i]) {
              if (!res) {
                res = arr.slice();
              }
              res[i] = item;
            }
          }
          return res || arr;
        }
        function walk(ast, func, depthFirst) {
          if (!(ast instanceof nodes.Node)) {
            return ast;
          }
          if (!depthFirst) {
            var astT = func(ast);
            if (astT && astT !== ast) {
              return astT;
            }
          }
          if (ast instanceof nodes.NodeList) {
            var children = mapCOW(ast.children, function(node) {
              return walk(node, func, depthFirst);
            });
            if (children !== ast.children) {
              ast = new nodes[ast.typename](ast.lineno, ast.colno, children);
            }
          } else if (ast instanceof nodes.CallExtension) {
            var args = walk(ast.args, func, depthFirst);
            var contentArgs = mapCOW(ast.contentArgs, function(node) {
              return walk(node, func, depthFirst);
            });
            if (args !== ast.args || contentArgs !== ast.contentArgs) {
              ast = new nodes[ast.typename](ast.extName, ast.prop, args, contentArgs);
            }
          } else {
            var props = ast.fields.map(function(field) {
              return ast[field];
            });
            var propsT = mapCOW(props, function(prop) {
              return walk(prop, func, depthFirst);
            });
            if (propsT !== props) {
              ast = new nodes[ast.typename](ast.lineno, ast.colno);
              propsT.forEach(function(prop, i) {
                ast[ast.fields[i]] = prop;
              });
            }
          }
          return depthFirst ? func(ast) || ast : ast;
        }
        function depthWalk(ast, func) {
          return walk(ast, func, true);
        }
        function _liftFilters(node, asyncFilters, prop) {
          var children = [];
          var walked = depthWalk(prop ? node[prop] : node, function(descNode) {
            var symbol;
            if (descNode instanceof nodes.Block) {
              return descNode;
            } else if (descNode instanceof nodes.Filter && lib.indexOf(asyncFilters, descNode.name.value) !== -1 || descNode instanceof nodes.CallExtensionAsync) {
              symbol = new nodes.Symbol(descNode.lineno, descNode.colno, gensym());
              children.push(new nodes.FilterAsync(descNode.lineno, descNode.colno, descNode.name, descNode.args, symbol));
            }
            return symbol;
          });
          if (prop) {
            node[prop] = walked;
          } else {
            node = walked;
          }
          if (children.length) {
            children.push(node);
            return new nodes.NodeList(node.lineno, node.colno, children);
          } else {
            return node;
          }
        }
        function liftFilters(ast, asyncFilters) {
          return depthWalk(ast, function(node) {
            if (node instanceof nodes.Output) {
              return _liftFilters(node, asyncFilters);
            } else if (node instanceof nodes.Set) {
              return _liftFilters(node, asyncFilters, "value");
            } else if (node instanceof nodes.For) {
              return _liftFilters(node, asyncFilters, "arr");
            } else if (node instanceof nodes.If) {
              return _liftFilters(node, asyncFilters, "cond");
            } else if (node instanceof nodes.CallExtension) {
              return _liftFilters(node, asyncFilters, "args");
            } else {
              return void 0;
            }
          });
        }
        function liftSuper(ast) {
          return walk(ast, function(blockNode) {
            if (!(blockNode instanceof nodes.Block)) {
              return;
            }
            var hasSuper = false;
            var symbol = gensym();
            blockNode.body = walk(blockNode.body, function(node) {
              if (node instanceof nodes.FunCall && node.name.value === "super") {
                hasSuper = true;
                return new nodes.Symbol(node.lineno, node.colno, symbol);
              }
            });
            if (hasSuper) {
              blockNode.body.children.unshift(new nodes.Super(0, 0, blockNode.name, new nodes.Symbol(0, 0, symbol)));
            }
          });
        }
        function convertStatements(ast) {
          return depthWalk(ast, function(node) {
            if (!(node instanceof nodes.If) && !(node instanceof nodes.For)) {
              return void 0;
            }
            var async = false;
            walk(node, function(child) {
              if (child instanceof nodes.FilterAsync || child instanceof nodes.IfAsync || child instanceof nodes.AsyncEach || child instanceof nodes.AsyncAll || child instanceof nodes.CallExtensionAsync) {
                async = true;
                return child;
              }
              return void 0;
            });
            if (async) {
              if (node instanceof nodes.If) {
                return new nodes.IfAsync(node.lineno, node.colno, node.cond, node.body, node.else_);
              } else if (node instanceof nodes.For && !(node instanceof nodes.AsyncAll)) {
                return new nodes.AsyncEach(node.lineno, node.colno, node.arr, node.name, node.body, node.else_);
              }
            }
            return void 0;
          });
        }
        function cps(ast, asyncFilters) {
          return convertStatements(liftSuper(liftFilters(ast, asyncFilters)));
        }
        function transform(ast, asyncFilters) {
          return cps(ast, asyncFilters || []);
        }
        module2.exports = {
          transform
        };
      },
      function(module2, exports2, __webpack_require__) {
        var lib = __webpack_require__(0);
        var r = __webpack_require__(2);
        var exports2 = module2.exports = {};
        function normalize(value, defaultValue) {
          if (value === null || value === void 0 || value === false) {
            return defaultValue;
          }
          return value;
        }
        exports2.abs = Math.abs;
        function isNaN2(num) {
          return num !== num;
        }
        function batch(arr, linecount, fillWith) {
          var i;
          var res = [];
          var tmp = [];
          for (i = 0; i < arr.length; i++) {
            if (i % linecount === 0 && tmp.length) {
              res.push(tmp);
              tmp = [];
            }
            tmp.push(arr[i]);
          }
          if (tmp.length) {
            if (fillWith) {
              for (i = tmp.length; i < linecount; i++) {
                tmp.push(fillWith);
              }
            }
            res.push(tmp);
          }
          return res;
        }
        exports2.batch = batch;
        function capitalize(str) {
          str = normalize(str, "");
          var ret = str.toLowerCase();
          return r.copySafeness(str, ret.charAt(0).toUpperCase() + ret.slice(1));
        }
        exports2.capitalize = capitalize;
        function center(str, width) {
          str = normalize(str, "");
          width = width || 80;
          if (str.length >= width) {
            return str;
          }
          var spaces = width - str.length;
          var pre = lib.repeat(" ", spaces / 2 - spaces % 2);
          var post = lib.repeat(" ", spaces / 2);
          return r.copySafeness(str, pre + str + post);
        }
        exports2.center = center;
        function default_(val, def, bool) {
          if (bool) {
            return val || def;
          } else {
            return val !== void 0 ? val : def;
          }
        }
        exports2["default"] = default_;
        function dictsort(val, caseSensitive, by) {
          if (!lib.isObject(val)) {
            throw new lib.TemplateError("dictsort filter: val must be an object");
          }
          var array = [];
          for (var k in val) {
            array.push([k, val[k]]);
          }
          var si;
          if (by === void 0 || by === "key") {
            si = 0;
          } else if (by === "value") {
            si = 1;
          } else {
            throw new lib.TemplateError("dictsort filter: You can only sort by either key or value");
          }
          array.sort(function(t1, t2) {
            var a = t1[si];
            var b = t2[si];
            if (!caseSensitive) {
              if (lib.isString(a)) {
                a = a.toUpperCase();
              }
              if (lib.isString(b)) {
                b = b.toUpperCase();
              }
            }
            return a > b ? 1 : a === b ? 0 : -1;
          });
          return array;
        }
        exports2.dictsort = dictsort;
        function dump(obj, spaces) {
          return JSON.stringify(obj, null, spaces);
        }
        exports2.dump = dump;
        function escape(str) {
          if (str instanceof r.SafeString) {
            return str;
          }
          str = str === null || str === void 0 ? "" : str;
          return r.markSafe(lib.escape(str.toString()));
        }
        exports2.escape = escape;
        function safe(str) {
          if (str instanceof r.SafeString) {
            return str;
          }
          str = str === null || str === void 0 ? "" : str;
          return r.markSafe(str.toString());
        }
        exports2.safe = safe;
        function first(arr) {
          return arr[0];
        }
        exports2.first = first;
        function forceescape(str) {
          str = str === null || str === void 0 ? "" : str;
          return r.markSafe(lib.escape(str.toString()));
        }
        exports2.forceescape = forceescape;
        function groupby(arr, attr) {
          return lib.groupBy(arr, attr, this.env.opts.throwOnUndefined);
        }
        exports2.groupby = groupby;
        function indent(str, width, indentfirst) {
          str = normalize(str, "");
          if (str === "") {
            return "";
          }
          width = width || 4;
          var lines = str.split("\n");
          var sp = lib.repeat(" ", width);
          var res = lines.map(function(l, i) {
            return i === 0 && !indentfirst ? l : "" + sp + l;
          }).join("\n");
          return r.copySafeness(str, res);
        }
        exports2.indent = indent;
        function join(arr, del, attr) {
          del = del || "";
          if (attr) {
            arr = lib.map(arr, function(v) {
              return v[attr];
            });
          }
          return arr.join(del);
        }
        exports2.join = join;
        function last(arr) {
          return arr[arr.length - 1];
        }
        exports2.last = last;
        function lengthFilter(val) {
          var value = normalize(val, "");
          if (value !== void 0) {
            if (typeof Map === "function" && value instanceof Map || typeof Set === "function" && value instanceof Set) {
              return value.size;
            }
            if (lib.isObject(value) && !(value instanceof r.SafeString)) {
              return lib.keys(value).length;
            }
            return value.length;
          }
          return 0;
        }
        exports2.length = lengthFilter;
        function list(val) {
          if (lib.isString(val)) {
            return val.split("");
          } else if (lib.isObject(val)) {
            return lib._entries(val || {}).map(function(_ref) {
              var key = _ref[0], value = _ref[1];
              return {
                key,
                value
              };
            });
          } else if (lib.isArray(val)) {
            return val;
          } else {
            throw new lib.TemplateError("list filter: type not iterable");
          }
        }
        exports2.list = list;
        function lower(str) {
          str = normalize(str, "");
          return str.toLowerCase();
        }
        exports2.lower = lower;
        function nl2br(str) {
          if (str === null || str === void 0) {
            return "";
          }
          return r.copySafeness(str, str.replace(/\r\n|\n/g, "<br />\n"));
        }
        exports2.nl2br = nl2br;
        function random(arr) {
          return arr[Math.floor(Math.random() * arr.length)];
        }
        exports2.random = random;
        function getSelectOrReject(expectedTestResult) {
          function filter(arr, testName, secondArg) {
            if (testName === void 0) {
              testName = "truthy";
            }
            var context = this;
            var test = context.env.getTest(testName);
            return lib.toArray(arr).filter(function examineTestResult(item) {
              return test.call(context, item, secondArg) === expectedTestResult;
            });
          }
          return filter;
        }
        exports2.reject = getSelectOrReject(false);
        function rejectattr(arr, attr) {
          return arr.filter(function(item) {
            return !item[attr];
          });
        }
        exports2.rejectattr = rejectattr;
        exports2.select = getSelectOrReject(true);
        function selectattr(arr, attr) {
          return arr.filter(function(item) {
            return !!item[attr];
          });
        }
        exports2.selectattr = selectattr;
        function replace(str, old, new_, maxCount) {
          var originalStr = str;
          if (old instanceof RegExp) {
            return str.replace(old, new_);
          }
          if (typeof maxCount === "undefined") {
            maxCount = -1;
          }
          var res = "";
          if (typeof old === "number") {
            old = "" + old;
          } else if (typeof old !== "string") {
            return str;
          }
          if (typeof str === "number") {
            str = "" + str;
          }
          if (typeof str !== "string" && !(str instanceof r.SafeString)) {
            return str;
          }
          if (old === "") {
            res = new_ + str.split("").join(new_) + new_;
            return r.copySafeness(str, res);
          }
          var nextIndex = str.indexOf(old);
          if (maxCount === 0 || nextIndex === -1) {
            return str;
          }
          var pos = 0;
          var count = 0;
          while (nextIndex > -1 && (maxCount === -1 || count < maxCount)) {
            res += str.substring(pos, nextIndex) + new_;
            pos = nextIndex + old.length;
            count++;
            nextIndex = str.indexOf(old, pos);
          }
          if (pos < str.length) {
            res += str.substring(pos);
          }
          return r.copySafeness(originalStr, res);
        }
        exports2.replace = replace;
        function reverse(val) {
          var arr;
          if (lib.isString(val)) {
            arr = list(val);
          } else {
            arr = lib.map(val, function(v) {
              return v;
            });
          }
          arr.reverse();
          if (lib.isString(val)) {
            return r.copySafeness(val, arr.join(""));
          }
          return arr;
        }
        exports2.reverse = reverse;
        function round(val, precision, method) {
          precision = precision || 0;
          var factor = Math.pow(10, precision);
          var rounder;
          if (method === "ceil") {
            rounder = Math.ceil;
          } else if (method === "floor") {
            rounder = Math.floor;
          } else {
            rounder = Math.round;
          }
          return rounder(val * factor) / factor;
        }
        exports2.round = round;
        function slice(arr, slices, fillWith) {
          var sliceLength = Math.floor(arr.length / slices);
          var extra = arr.length % slices;
          var res = [];
          var offset = 0;
          for (var i = 0; i < slices; i++) {
            var start = offset + i * sliceLength;
            if (i < extra) {
              offset++;
            }
            var end = offset + (i + 1) * sliceLength;
            var currSlice = arr.slice(start, end);
            if (fillWith && i >= extra) {
              currSlice.push(fillWith);
            }
            res.push(currSlice);
          }
          return res;
        }
        exports2.slice = slice;
        function sum(arr, attr, start) {
          if (start === void 0) {
            start = 0;
          }
          if (attr) {
            arr = lib.map(arr, function(v) {
              return v[attr];
            });
          }
          return start + arr.reduce(function(a, b) {
            return a + b;
          }, 0);
        }
        exports2.sum = sum;
        exports2.sort = r.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function sortFilter(arr, reversed, caseSens, attr) {
          var _this = this;
          var array = lib.map(arr, function(v) {
            return v;
          });
          var getAttribute = lib.getAttrGetter(attr);
          array.sort(function(a, b) {
            var x = attr ? getAttribute(a) : a;
            var y = attr ? getAttribute(b) : b;
            if (_this.env.opts.throwOnUndefined && attr && (x === void 0 || y === void 0)) {
              throw new TypeError('sort: attribute "' + attr + '" resolved to undefined');
            }
            if (!caseSens && lib.isString(x) && lib.isString(y)) {
              x = x.toLowerCase();
              y = y.toLowerCase();
            }
            if (x < y) {
              return reversed ? 1 : -1;
            } else if (x > y) {
              return reversed ? -1 : 1;
            } else {
              return 0;
            }
          });
          return array;
        });
        function string(obj) {
          return r.copySafeness(obj, obj);
        }
        exports2.string = string;
        function striptags(input, preserveLinebreaks) {
          input = normalize(input, "");
          var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
          var trimmedInput = trim(input.replace(tags, ""));
          var res = "";
          if (preserveLinebreaks) {
            res = trimmedInput.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, "\n").replace(/\n\n\n+/g, "\n\n");
          } else {
            res = trimmedInput.replace(/\s+/gi, " ");
          }
          return r.copySafeness(input, res);
        }
        exports2.striptags = striptags;
        function title(str) {
          str = normalize(str, "");
          var words = str.split(" ").map(function(word) {
            return capitalize(word);
          });
          return r.copySafeness(str, words.join(" "));
        }
        exports2.title = title;
        function trim(str) {
          return r.copySafeness(str, str.replace(/^\s*|\s*$/g, ""));
        }
        exports2.trim = trim;
        function truncate(input, length, killwords, end) {
          var orig = input;
          input = normalize(input, "");
          length = length || 255;
          if (input.length <= length) {
            return input;
          }
          if (killwords) {
            input = input.substring(0, length);
          } else {
            var idx = input.lastIndexOf(" ", length);
            if (idx === -1) {
              idx = length;
            }
            input = input.substring(0, idx);
          }
          input += end !== void 0 && end !== null ? end : "...";
          return r.copySafeness(orig, input);
        }
        exports2.truncate = truncate;
        function upper(str) {
          str = normalize(str, "");
          return str.toUpperCase();
        }
        exports2.upper = upper;
        function urlencode(obj) {
          var enc = encodeURIComponent;
          if (lib.isString(obj)) {
            return enc(obj);
          } else {
            var keyvals = lib.isArray(obj) ? obj : lib._entries(obj);
            return keyvals.map(function(_ref2) {
              var k = _ref2[0], v = _ref2[1];
              return enc(k) + "=" + enc(v);
            }).join("&");
          }
        }
        exports2.urlencode = urlencode;
        var puncRe = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/;
        var emailRe = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i;
        var httpHttpsRe = /^https?:\/\/.*$/;
        var wwwRe = /^www\./;
        var tldRe = /\.(?:org|net|com)(?:\:|\/|$)/;
        function urlize(str, length, nofollow) {
          if (isNaN2(length)) {
            length = Infinity;
          }
          var noFollowAttr = nofollow === true ? ' rel="nofollow"' : "";
          var words = str.split(/(\s+)/).filter(function(word) {
            return word && word.length;
          }).map(function(word) {
            var matches = word.match(puncRe);
            var possibleUrl = matches ? matches[1] : word;
            var shortUrl = possibleUrl.substr(0, length);
            if (httpHttpsRe.test(possibleUrl)) {
              return '<a href="' + possibleUrl + '"' + noFollowAttr + ">" + shortUrl + "</a>";
            }
            if (wwwRe.test(possibleUrl)) {
              return '<a href="http://' + possibleUrl + '"' + noFollowAttr + ">" + shortUrl + "</a>";
            }
            if (emailRe.test(possibleUrl)) {
              return '<a href="mailto:' + possibleUrl + '">' + possibleUrl + "</a>";
            }
            if (tldRe.test(possibleUrl)) {
              return '<a href="http://' + possibleUrl + '"' + noFollowAttr + ">" + shortUrl + "</a>";
            }
            return word;
          });
          return words.join("");
        }
        exports2.urlize = urlize;
        function wordcount(str) {
          str = normalize(str, "");
          var words = str ? str.match(/\w+/g) : null;
          return words ? words.length : null;
        }
        exports2.wordcount = wordcount;
        function float(val, def) {
          var res = parseFloat(val);
          return isNaN2(res) ? def : res;
        }
        exports2.float = float;
        var intFilter = r.makeMacro(["value", "default", "base"], [], function doInt(value, defaultValue, base) {
          if (base === void 0) {
            base = 10;
          }
          var res = parseInt(value, base);
          return isNaN2(res) ? defaultValue : res;
        });
        exports2.int = intFilter;
        exports2.d = exports2.default;
        exports2.e = exports2.escape;
      },
      function(module2, exports2, __webpack_require__) {
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p2) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
            o2.__proto__ = p3;
            return o2;
          };
          return _setPrototypeOf(o, p2);
        }
        var Loader = __webpack_require__(6);
        var PrecompiledLoader = /* @__PURE__ */ function(_Loader) {
          _inheritsLoose(PrecompiledLoader2, _Loader);
          function PrecompiledLoader2(compiledTemplates) {
            var _this;
            _this = _Loader.call(this) || this;
            _this.precompiled = compiledTemplates || {};
            return _this;
          }
          var _proto = PrecompiledLoader2.prototype;
          _proto.getSource = function getSource(name) {
            if (this.precompiled[name]) {
              return {
                src: {
                  type: "code",
                  obj: this.precompiled[name]
                },
                path: name
              };
            }
            return null;
          };
          return PrecompiledLoader2;
        }(Loader);
        module2.exports = {
          PrecompiledLoader
        };
      },
      function(module2, exports2, __webpack_require__) {
        var SafeString = __webpack_require__(2).SafeString;
        function callable(value) {
          return typeof value === "function";
        }
        exports2.callable = callable;
        function defined(value) {
          return value !== void 0;
        }
        exports2.defined = defined;
        function divisibleby(one, two) {
          return one % two === 0;
        }
        exports2.divisibleby = divisibleby;
        function escaped(value) {
          return value instanceof SafeString;
        }
        exports2.escaped = escaped;
        function equalto(one, two) {
          return one === two;
        }
        exports2.equalto = equalto;
        exports2.eq = exports2.equalto;
        exports2.sameas = exports2.equalto;
        function even(value) {
          return value % 2 === 0;
        }
        exports2.even = even;
        function falsy(value) {
          return !value;
        }
        exports2.falsy = falsy;
        function ge(one, two) {
          return one >= two;
        }
        exports2.ge = ge;
        function greaterthan(one, two) {
          return one > two;
        }
        exports2.greaterthan = greaterthan;
        exports2.gt = exports2.greaterthan;
        function le(one, two) {
          return one <= two;
        }
        exports2.le = le;
        function lessthan(one, two) {
          return one < two;
        }
        exports2.lessthan = lessthan;
        exports2.lt = exports2.lessthan;
        function lower(value) {
          return value.toLowerCase() === value;
        }
        exports2.lower = lower;
        function ne(one, two) {
          return one !== two;
        }
        exports2.ne = ne;
        function nullTest(value) {
          return value === null;
        }
        exports2.null = nullTest;
        function number(value) {
          return typeof value === "number";
        }
        exports2.number = number;
        function odd(value) {
          return value % 2 === 1;
        }
        exports2.odd = odd;
        function string(value) {
          return typeof value === "string";
        }
        exports2.string = string;
        function truthy(value) {
          return !!value;
        }
        exports2.truthy = truthy;
        function undefinedTest(value) {
          return value === void 0;
        }
        exports2.undefined = undefinedTest;
        function upper(value) {
          return value.toUpperCase() === value;
        }
        exports2.upper = upper;
        function iterable(value) {
          if (typeof Symbol !== "undefined") {
            return !!value[Symbol.iterator];
          } else {
            return Array.isArray(value) || typeof value === "string";
          }
        }
        exports2.iterable = iterable;
        function mapping(value) {
          var bool = value !== null && value !== void 0 && typeof value === "object" && !Array.isArray(value);
          if (Set) {
            return bool && !(value instanceof Set);
          } else {
            return bool;
          }
        }
        exports2.mapping = mapping;
      },
      function(module2, exports2, __webpack_require__) {
        function _cycler(items) {
          var index = -1;
          return {
            current: null,
            reset: function reset() {
              index = -1;
              this.current = null;
            },
            next: function next() {
              index++;
              if (index >= items.length) {
                index = 0;
              }
              this.current = items[index];
              return this.current;
            }
          };
        }
        function _joiner(sep) {
          sep = sep || ",";
          var first = true;
          return function() {
            var val = first ? "" : sep;
            first = false;
            return val;
          };
        }
        function globals() {
          return {
            range: function range(start, stop, step) {
              if (typeof stop === "undefined") {
                stop = start;
                start = 0;
                step = 1;
              } else if (!step) {
                step = 1;
              }
              var arr = [];
              if (step > 0) {
                for (var i = start; i < stop; i += step) {
                  arr.push(i);
                }
              } else {
                for (var _i = start; _i > stop; _i += step) {
                  arr.push(_i);
                }
              }
              return arr;
            },
            cycler: function cycler() {
              return _cycler(Array.prototype.slice.call(arguments));
            },
            joiner: function joiner(sep) {
              return _joiner(sep);
            }
          };
        }
        module2.exports = globals;
      },
      function(module2, exports2, __webpack_require__) {
        var path = __webpack_require__(4);
        module2.exports = function express(env, app2) {
          function NunjucksView(name, opts) {
            this.name = name;
            this.path = name;
            this.defaultEngine = opts.defaultEngine;
            this.ext = path.extname(name);
            if (!this.ext && !this.defaultEngine) {
              throw new Error("No default engine was specified and no extension was provided.");
            }
            if (!this.ext) {
              this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine;
            }
          }
          NunjucksView.prototype.render = function render(opts, cb) {
            env.render(this.name, opts, cb);
          };
          app2.set("view", NunjucksView);
          app2.set("nunjucksEnv", env);
          return env;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var fs = __webpack_require__(4);
        var path = __webpack_require__(4);
        var _require = __webpack_require__(0), _prettifyError = _require._prettifyError;
        var compiler = __webpack_require__(5);
        var _require2 = __webpack_require__(7), Environment = _require2.Environment;
        var precompileGlobal = __webpack_require__(24);
        function match2(filename, patterns2) {
          if (!Array.isArray(patterns2)) {
            return false;
          }
          return patterns2.some(function(pattern) {
            return filename.match(pattern);
          });
        }
        function precompileString(str, opts) {
          opts = opts || {};
          opts.isString = true;
          var env = opts.env || new Environment([]);
          var wrapper = opts.wrapper || precompileGlobal;
          if (!opts.name) {
            throw new Error('the "name" option is required when compiling a string');
          }
          return wrapper([_precompile(str, opts.name, env)], opts);
        }
        function precompile(input, opts) {
          opts = opts || {};
          var env = opts.env || new Environment([]);
          var wrapper = opts.wrapper || precompileGlobal;
          if (opts.isString) {
            return precompileString(input, opts);
          }
          var pathStats = fs.existsSync(input) && fs.statSync(input);
          var precompiled = [];
          var templates = [];
          function addTemplates(dir) {
            fs.readdirSync(dir).forEach(function(file) {
              var filepath = path.join(dir, file);
              var subpath = filepath.substr(path.join(input, "/").length);
              var stat = fs.statSync(filepath);
              if (stat && stat.isDirectory()) {
                subpath += "/";
                if (!match2(subpath, opts.exclude)) {
                  addTemplates(filepath);
                }
              } else if (match2(subpath, opts.include)) {
                templates.push(filepath);
              }
            });
          }
          if (pathStats.isFile()) {
            precompiled.push(_precompile(fs.readFileSync(input, "utf-8"), opts.name || input, env));
          } else if (pathStats.isDirectory()) {
            addTemplates(input);
            for (var i = 0; i < templates.length; i++) {
              var name = templates[i].replace(path.join(input, "/"), "");
              try {
                precompiled.push(_precompile(fs.readFileSync(templates[i], "utf-8"), name, env));
              } catch (e) {
                if (opts.force) {
                  console.error(e);
                } else {
                  throw e;
                }
              }
            }
          }
          return wrapper(precompiled, opts);
        }
        function _precompile(str, name, env) {
          env = env || new Environment([]);
          var asyncFilters = env.asyncFilters;
          var extensions = env.extensionsList;
          var template;
          name = name.replace(/\\/g, "/");
          try {
            template = compiler.compile(str, asyncFilters, extensions, name, env.opts);
          } catch (err) {
            throw _prettifyError(name, false, err);
          }
          return {
            name,
            template
          };
        }
        module2.exports = {
          precompile,
          precompileString
        };
      },
      function(module2, exports2, __webpack_require__) {
        function precompileGlobal(templates, opts) {
          var out = "";
          opts = opts || {};
          for (var i = 0; i < templates.length; i++) {
            var name = JSON.stringify(templates[i].name);
            var template = templates[i].template;
            out += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + name + "] = (function() {\n" + template + "\n})();\n";
            if (opts.asFunction) {
              out += "return function(ctx, cb) { return nunjucks.render(" + name + ", ctx, cb); }\n";
            }
            out += "})();\n";
          }
          return out;
        }
        module2.exports = precompileGlobal;
      },
      function(module2, exports2, __webpack_require__) {
        function installCompat() {
          var runtime = this.runtime;
          var lib = this.lib;
          var Compiler = this.compiler.Compiler;
          var Parser = this.parser.Parser;
          var nodes = this.nodes;
          var lexer = this.lexer;
          var orig_contextOrFrameLookup = runtime.contextOrFrameLookup;
          var orig_memberLookup = runtime.memberLookup;
          var orig_Compiler_assertType;
          var orig_Parser_parseAggregate;
          if (Compiler) {
            orig_Compiler_assertType = Compiler.prototype.assertType;
          }
          if (Parser) {
            orig_Parser_parseAggregate = Parser.prototype.parseAggregate;
          }
          function uninstall() {
            runtime.contextOrFrameLookup = orig_contextOrFrameLookup;
            runtime.memberLookup = orig_memberLookup;
            if (Compiler) {
              Compiler.prototype.assertType = orig_Compiler_assertType;
            }
            if (Parser) {
              Parser.prototype.parseAggregate = orig_Parser_parseAggregate;
            }
          }
          runtime.contextOrFrameLookup = function contextOrFrameLookup(context, frame, key) {
            var val = orig_contextOrFrameLookup.apply(this, arguments);
            if (val !== void 0) {
              return val;
            }
            switch (key) {
              case "True":
                return true;
              case "False":
                return false;
              case "None":
                return null;
              default:
                return void 0;
            }
          };
          function getTokensState(tokens) {
            return {
              index: tokens.index,
              lineno: tokens.lineno,
              colno: tokens.colno
            };
          }
          if (nodes && Compiler && Parser) {
            var Slice = nodes.Node.extend("Slice", {
              fields: ["start", "stop", "step"],
              init: function init(lineno, colno, start, stop, step) {
                start = start || new nodes.Literal(lineno, colno, null);
                stop = stop || new nodes.Literal(lineno, colno, null);
                step = step || new nodes.Literal(lineno, colno, 1);
                this.parent(lineno, colno, start, stop, step);
              }
            });
            Compiler.prototype.assertType = function assertType(node) {
              if (node instanceof Slice) {
                return;
              }
              orig_Compiler_assertType.apply(this, arguments);
            };
            Compiler.prototype.compileSlice = function compileSlice(node, frame) {
              this._emit("(");
              this._compileExpression(node.start, frame);
              this._emit("),(");
              this._compileExpression(node.stop, frame);
              this._emit("),(");
              this._compileExpression(node.step, frame);
              this._emit(")");
            };
            Parser.prototype.parseAggregate = function parseAggregate() {
              var _this = this;
              var origState = getTokensState(this.tokens);
              origState.colno--;
              origState.index--;
              try {
                return orig_Parser_parseAggregate.apply(this);
              } catch (e) {
                var errState = getTokensState(this.tokens);
                var rethrow = function rethrow2() {
                  lib._assign(_this.tokens, errState);
                  return e;
                };
                lib._assign(this.tokens, origState);
                this.peeked = false;
                var tok = this.peekToken();
                if (tok.type !== lexer.TOKEN_LEFT_BRACKET) {
                  throw rethrow();
                } else {
                  this.nextToken();
                }
                var node = new Slice(tok.lineno, tok.colno);
                var isSlice = false;
                for (var i = 0; i <= node.fields.length; i++) {
                  if (this.skip(lexer.TOKEN_RIGHT_BRACKET)) {
                    break;
                  }
                  if (i === node.fields.length) {
                    if (isSlice) {
                      this.fail("parseSlice: too many slice components", tok.lineno, tok.colno);
                    } else {
                      break;
                    }
                  }
                  if (this.skip(lexer.TOKEN_COLON)) {
                    isSlice = true;
                  } else {
                    var field = node.fields[i];
                    node[field] = this.parseExpression();
                    isSlice = this.skip(lexer.TOKEN_COLON) || isSlice;
                  }
                }
                if (!isSlice) {
                  throw rethrow();
                }
                return new nodes.Array(tok.lineno, tok.colno, [node]);
              }
            };
          }
          function sliceLookup(obj, start, stop, step) {
            obj = obj || [];
            if (start === null) {
              start = step < 0 ? obj.length - 1 : 0;
            }
            if (stop === null) {
              stop = step < 0 ? -1 : obj.length;
            } else if (stop < 0) {
              stop += obj.length;
            }
            if (start < 0) {
              start += obj.length;
            }
            var results = [];
            for (var i = start; ; i += step) {
              if (i < 0 || i > obj.length) {
                break;
              }
              if (step > 0 && i >= stop) {
                break;
              }
              if (step < 0 && i <= stop) {
                break;
              }
              results.push(runtime.memberLookup(obj, i));
            }
            return results;
          }
          function hasOwnProp(obj, key) {
            return Object.prototype.hasOwnProperty.call(obj, key);
          }
          var ARRAY_MEMBERS = {
            pop: function pop(index) {
              if (index === void 0) {
                return this.pop();
              }
              if (index >= this.length || index < 0) {
                throw new Error("KeyError");
              }
              return this.splice(index, 1);
            },
            append: function append(element) {
              return this.push(element);
            },
            remove: function remove(element) {
              for (var i = 0; i < this.length; i++) {
                if (this[i] === element) {
                  return this.splice(i, 1);
                }
              }
              throw new Error("ValueError");
            },
            count: function count(element) {
              var count2 = 0;
              for (var i = 0; i < this.length; i++) {
                if (this[i] === element) {
                  count2++;
                }
              }
              return count2;
            },
            index: function index(element) {
              var i;
              if ((i = this.indexOf(element)) === -1) {
                throw new Error("ValueError");
              }
              return i;
            },
            find: function find(element) {
              return this.indexOf(element);
            },
            insert: function insert(index, elem) {
              return this.splice(index, 0, elem);
            }
          };
          var OBJECT_MEMBERS = {
            items: function items() {
              return lib._entries(this);
            },
            values: function values() {
              return lib._values(this);
            },
            keys: function keys() {
              return lib.keys(this);
            },
            get: function get(key, def) {
              var output = this[key];
              if (output === void 0) {
                output = def;
              }
              return output;
            },
            has_key: function has_key(key) {
              return hasOwnProp(this, key);
            },
            pop: function pop(key, def) {
              var output = this[key];
              if (output === void 0 && def !== void 0) {
                output = def;
              } else if (output === void 0) {
                throw new Error("KeyError");
              } else {
                delete this[key];
              }
              return output;
            },
            popitem: function popitem() {
              var keys = lib.keys(this);
              if (!keys.length) {
                throw new Error("KeyError");
              }
              var k = keys[0];
              var val = this[k];
              delete this[k];
              return [k, val];
            },
            setdefault: function setdefault(key, def) {
              if (def === void 0) {
                def = null;
              }
              if (!(key in this)) {
                this[key] = def;
              }
              return this[key];
            },
            update: function update(kwargs) {
              lib._assign(this, kwargs);
              return null;
            }
          };
          OBJECT_MEMBERS.iteritems = OBJECT_MEMBERS.items;
          OBJECT_MEMBERS.itervalues = OBJECT_MEMBERS.values;
          OBJECT_MEMBERS.iterkeys = OBJECT_MEMBERS.keys;
          runtime.memberLookup = function memberLookup(obj, val, autoescape) {
            if (arguments.length === 4) {
              return sliceLookup.apply(this, arguments);
            }
            obj = obj || {};
            if (lib.isArray(obj) && hasOwnProp(ARRAY_MEMBERS, val)) {
              return ARRAY_MEMBERS[val].bind(obj);
            }
            if (lib.isObject(obj) && hasOwnProp(OBJECT_MEMBERS, val)) {
              return OBJECT_MEMBERS[val].bind(obj);
            }
            return orig_memberLookup.apply(this, arguments);
          };
          return uninstall;
        }
        module2.exports = installCompat;
      }
    ]);
  });
})(nunjucks$1);
var nunjucks = /* @__PURE__ */ getDefaultExportFromCjs(nunjucks$1.exports);
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}
function eachDayOfInterval(dirtyInterval, options) {
  requiredArgs(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = toDate(interval.start);
  var endDate = toDate(interval.end);
  var endTime = endDate.getTime();
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError("Invalid interval");
  }
  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = options && "step" in options ? Number(options.step) : 1;
  if (step < 1 || isNaN(step))
    throw new RangeError("`options.step` must be a number greater than 1");
  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }
  return dates;
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance$1 = formatDistance;
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong$1 = formatLong;
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative$1 = formatRelative;
function buildLocalizeFn(args) {
  return function(dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize$1 = localize;
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match$1 = match;
var locale = {
  code: "en-US",
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var defaultLocale = locale;
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
function startOfUTCWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale2 = options.locale;
  var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
var formatters$2 = {
  y: function(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  M: function(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  d: function(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  a: function(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  H: function(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  m: function(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  s: function(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  S: function(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var formatters$3 = formatters$2;
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  G: function(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  y: function(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return formatters$3.y(date, token);
  },
  Y: function(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  R: function(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  u: function(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  Q: function(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return formatters$3.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(date, token, localize2, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  I: function(date, token, localize2) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return formatters$3.d(date, token);
  },
  D: function(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  E: function(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return formatters$3.h(date, token);
  },
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return formatters$3.H(date, token);
  },
  K: function(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  k: function(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return formatters$3.m(date, token);
  },
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return formatters$3.s(date, token);
  },
  S: function(date, token) {
    return formatters$3.S(date, token);
  },
  X: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  x: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  O: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  z: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  t: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  T: function(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters$1 = formatters;
function dateLongFormatter(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
}
function timeLongFormatter(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
}
function dateTimeLongFormatter(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
}
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters$1 = longFormatters;
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale2 = options.locale || defaultLocale;
  var localeFirstWeekContainsDate = locale2.options && locale2.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var localeWeekStartsOn = locale2.options && locale2.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale2.formatLong, formatterOptions);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters$1[firstCharacter];
    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }
      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
function subDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addDays(dirtyDate, -amount);
}
function isEqual(dirtyLeftDate, dirtyRightDate) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyLeftDate);
  var dateRight = toDate(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}
function parseISO(argument, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : toInteger(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)");
  var captures = dateString.match(regex);
  if (!captures)
    return {
      year: NaN,
      restDateString: ""
    };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null)
    return new Date(NaN);
  var captures = dateString.match(dateRegex);
  if (!captures)
    return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures)
    return NaN;
  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z")
    return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures)
    return 0;
  var sign = captures[1] === "+" ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}
const terms = [
  {
    name: "Fall 2021",
    start: "2021-08-23",
    end: "2021-12-13",
    events: [
      {
        date: "2021-09-03",
        noClasses: false,
        description: "Drop/Add ends"
      },
      {
        start: "2021-10-01",
        end: "2021-10-05",
        noClasses: true,
        description: "Fall Break"
      },
      {
        date: "2021-11-05",
        noClasses: false,
        description: "Last day to withdraw with W from Fall 2021 classes (undergraduates only)"
      },
      {
        start: "2021-11-24",
        end: "2021-11-28",
        noClasses: true,
        description: "Thanksgiving recess"
      },
      {
        start: "2021-12-04",
        end: "2021-12-07",
        noClasses: true,
        description: "Reading Period"
      },
      {
        start: "2021-12-08",
        end: "2021-12-13",
        noClasses: true,
        description: "Final Examinations"
      }
    ]
  },
  {
    name: "Spring 2022",
    start: "2022-01-05",
    end: "2022-04-30",
    events: [
      {
        date: "2022-01-17",
        noClasses: true,
        description: "Martin Luther King, Jr. Day"
      },
      {
        date: "2022-01-19",
        noClasses: false,
        description: "Drop/Add ends"
      },
      {
        start: "2022-03-04",
        end: "2022-03-13",
        noClasses: true,
        description: "Spring Break"
      },
      {
        date: "2022-03-23",
        noClasses: false,
        description: "Last day to withdraw with W from Fall 2021 classes (undergraduates only)"
      },
      {
        start: "2022-04-21",
        end: "2022-04-24",
        noClasses: true,
        description: "Reading Period"
      },
      {
        start: "2022-04-25",
        end: "2022-04-30",
        noClasses: true,
        description: "Final Examinations"
      }
    ]
  }
];
var calendar = {
  terms
};
function getEventData(data) {
  const events = data.reduce((previous, current) => {
    if (current.date) {
      previous.push({
        date: parseISO(current.date),
        noClasses: current.noClasses,
        description: current.description
      });
    } else if (current.start && current.end) {
      const allDays = eachDayOfInterval({
        start: subDays(parseISO(current.start), 1),
        end: parseISO(current.end)
      });
      allDays.forEach((day) => previous.push({
        date: day,
        noClasses: current.noClasses,
        description: current.description
      }));
    }
    return previous;
  }, []);
  return events;
}
function hasEvents(d, events) {
  return events.find((event) => isEqual(event.date, d));
}
function getMeetDates(termNum, weekdays, outputFormat) {
  const termData = calendar.terms[termNum];
  const termDates = eachDayOfInterval({
    start: subDays(parseISO(termData.start), 1),
    end: parseISO(termData.end)
  });
  const eventData = getEventData(termData.events);
  const meetings = [];
  termDates.reduce((prev, current) => {
    if (weekdays.includes(current.getDay())) {
      let header = format(current, outputFormat);
      const event = hasEvents(current, eventData);
      if (event) {
        const noClass = event.noClasses ? "NO CLASS" : "";
        header = `${header} ${noClass} (${event.description})`;
      }
      prev.push(header);
    }
    return prev;
  }, meetings);
  return meetings;
}
var build = { exports: {} };
/*! For license information please see index.js.LICENSE.txt */
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    return (() => {
      var t = { 742: (t2, e2) => {
        e2.byteLength = function(t3) {
          var e3 = c(t3), r3 = e3[0], n3 = e3[1];
          return 3 * (r3 + n3) / 4 - n3;
        }, e2.toByteArray = function(t3) {
          var e3, r3, i2 = c(t3), o2 = i2[0], a2 = i2[1], u2 = new s(function(t4, e4, r4) {
            return 3 * (e4 + r4) / 4 - r4;
          }(0, o2, a2)), l = 0, h = a2 > 0 ? o2 - 4 : o2;
          for (r3 = 0; r3 < h; r3 += 4)
            e3 = n2[t3.charCodeAt(r3)] << 18 | n2[t3.charCodeAt(r3 + 1)] << 12 | n2[t3.charCodeAt(r3 + 2)] << 6 | n2[t3.charCodeAt(r3 + 3)], u2[l++] = e3 >> 16 & 255, u2[l++] = e3 >> 8 & 255, u2[l++] = 255 & e3;
          return a2 === 2 && (e3 = n2[t3.charCodeAt(r3)] << 2 | n2[t3.charCodeAt(r3 + 1)] >> 4, u2[l++] = 255 & e3), a2 === 1 && (e3 = n2[t3.charCodeAt(r3)] << 10 | n2[t3.charCodeAt(r3 + 1)] << 4 | n2[t3.charCodeAt(r3 + 2)] >> 2, u2[l++] = e3 >> 8 & 255, u2[l++] = 255 & e3), u2;
        }, e2.fromByteArray = function(t3) {
          for (var e3, n3 = t3.length, s2 = n3 % 3, i2 = [], o2 = 16383, a2 = 0, c2 = n3 - s2; a2 < c2; a2 += o2)
            i2.push(u(t3, a2, a2 + o2 > c2 ? c2 : a2 + o2));
          return s2 === 1 ? (e3 = t3[n3 - 1], i2.push(r2[e3 >> 2] + r2[e3 << 4 & 63] + "==")) : s2 === 2 && (e3 = (t3[n3 - 2] << 8) + t3[n3 - 1], i2.push(r2[e3 >> 10] + r2[e3 >> 4 & 63] + r2[e3 << 2 & 63] + "=")), i2.join("");
        };
        for (var r2 = [], n2 = [], s = typeof Uint8Array != "undefined" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = i.length; o < a; ++o)
          r2[o] = i[o], n2[i.charCodeAt(o)] = o;
        function c(t3) {
          var e3 = t3.length;
          if (e3 % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var r3 = t3.indexOf("=");
          return r3 === -1 && (r3 = e3), [r3, r3 === e3 ? 0 : 4 - r3 % 4];
        }
        function u(t3, e3, n3) {
          for (var s2, i2, o2 = [], a2 = e3; a2 < n3; a2 += 3)
            s2 = (t3[a2] << 16 & 16711680) + (t3[a2 + 1] << 8 & 65280) + (255 & t3[a2 + 2]), o2.push(r2[(i2 = s2) >> 18 & 63] + r2[i2 >> 12 & 63] + r2[i2 >> 6 & 63] + r2[63 & i2]);
          return o2.join("");
        }
        n2["-".charCodeAt(0)] = 62, n2["_".charCodeAt(0)] = 63;
      }, 764: (t2, e2, r2) => {
        const n2 = r2(742), s = r2(645), i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
        e2.Buffer = c, e2.SlowBuffer = function(t3) {
          return +t3 != t3 && (t3 = 0), c.alloc(+t3);
        }, e2.INSPECT_MAX_BYTES = 50;
        const o = 2147483647;
        function a(t3) {
          if (t3 > o)
            throw new RangeError('The value "' + t3 + '" is invalid for option "size"');
          const e3 = new Uint8Array(t3);
          return Object.setPrototypeOf(e3, c.prototype), e3;
        }
        function c(t3, e3, r3) {
          if (typeof t3 == "number") {
            if (typeof e3 == "string")
              throw new TypeError('The "string" argument must be of type string. Received type number');
            return h(t3);
          }
          return u(t3, e3, r3);
        }
        function u(t3, e3, r3) {
          if (typeof t3 == "string")
            return function(t4, e4) {
              if (typeof e4 == "string" && e4 !== "" || (e4 = "utf8"), !c.isEncoding(e4))
                throw new TypeError("Unknown encoding: " + e4);
              const r4 = 0 | m(t4, e4);
              let n4 = a(r4);
              const s3 = n4.write(t4, e4);
              return s3 !== r4 && (n4 = n4.slice(0, s3)), n4;
            }(t3, e3);
          if (ArrayBuffer.isView(t3))
            return function(t4) {
              if (q(t4, Uint8Array)) {
                const e4 = new Uint8Array(t4);
                return d(e4.buffer, e4.byteOffset, e4.byteLength);
              }
              return p2(t4);
            }(t3);
          if (t3 == null)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t3);
          if (q(t3, ArrayBuffer) || t3 && q(t3.buffer, ArrayBuffer))
            return d(t3, e3, r3);
          if (typeof SharedArrayBuffer != "undefined" && (q(t3, SharedArrayBuffer) || t3 && q(t3.buffer, SharedArrayBuffer)))
            return d(t3, e3, r3);
          if (typeof t3 == "number")
            throw new TypeError('The "value" argument must not be of type number. Received type number');
          const n3 = t3.valueOf && t3.valueOf();
          if (n3 != null && n3 !== t3)
            return c.from(n3, e3, r3);
          const s2 = function(t4) {
            if (c.isBuffer(t4)) {
              const e4 = 0 | f(t4.length), r4 = a(e4);
              return r4.length === 0 || t4.copy(r4, 0, 0, e4), r4;
            }
            return t4.length !== void 0 ? typeof t4.length != "number" || Z(t4.length) ? a(0) : p2(t4) : t4.type === "Buffer" && Array.isArray(t4.data) ? p2(t4.data) : void 0;
          }(t3);
          if (s2)
            return s2;
          if (typeof Symbol != "undefined" && Symbol.toPrimitive != null && typeof t3[Symbol.toPrimitive] == "function")
            return c.from(t3[Symbol.toPrimitive]("string"), e3, r3);
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t3);
        }
        function l(t3) {
          if (typeof t3 != "number")
            throw new TypeError('"size" argument must be of type number');
          if (t3 < 0)
            throw new RangeError('The value "' + t3 + '" is invalid for option "size"');
        }
        function h(t3) {
          return l(t3), a(t3 < 0 ? 0 : 0 | f(t3));
        }
        function p2(t3) {
          const e3 = t3.length < 0 ? 0 : 0 | f(t3.length), r3 = a(e3);
          for (let n3 = 0; n3 < e3; n3 += 1)
            r3[n3] = 255 & t3[n3];
          return r3;
        }
        function d(t3, e3, r3) {
          if (e3 < 0 || t3.byteLength < e3)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (t3.byteLength < e3 + (r3 || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          let n3;
          return n3 = e3 === void 0 && r3 === void 0 ? new Uint8Array(t3) : r3 === void 0 ? new Uint8Array(t3, e3) : new Uint8Array(t3, e3, r3), Object.setPrototypeOf(n3, c.prototype), n3;
        }
        function f(t3) {
          if (t3 >= o)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
          return 0 | t3;
        }
        function m(t3, e3) {
          if (c.isBuffer(t3))
            return t3.length;
          if (ArrayBuffer.isView(t3) || q(t3, ArrayBuffer))
            return t3.byteLength;
          if (typeof t3 != "string")
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t3);
          const r3 = t3.length, n3 = arguments.length > 2 && arguments[2] === true;
          if (!n3 && r3 === 0)
            return 0;
          let s2 = false;
          for (; ; )
            switch (e3) {
              case "ascii":
              case "latin1":
              case "binary":
                return r3;
              case "utf8":
              case "utf-8":
                return V(t3).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * r3;
              case "hex":
                return r3 >>> 1;
              case "base64":
                return $(t3).length;
              default:
                if (s2)
                  return n3 ? -1 : V(t3).length;
                e3 = ("" + e3).toLowerCase(), s2 = true;
            }
        }
        function w(t3, e3, r3) {
          let n3 = false;
          if ((e3 === void 0 || e3 < 0) && (e3 = 0), e3 > this.length)
            return "";
          if ((r3 === void 0 || r3 > this.length) && (r3 = this.length), r3 <= 0)
            return "";
          if ((r3 >>>= 0) <= (e3 >>>= 0))
            return "";
          for (t3 || (t3 = "utf8"); ; )
            switch (t3) {
              case "hex":
                return O(this, e3, r3);
              case "utf8":
              case "utf-8":
                return S(this, e3, r3);
              case "ascii":
                return I(this, e3, r3);
              case "latin1":
              case "binary":
                return N(this, e3, r3);
              case "base64":
                return A(this, e3, r3);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return C(this, e3, r3);
              default:
                if (n3)
                  throw new TypeError("Unknown encoding: " + t3);
                t3 = (t3 + "").toLowerCase(), n3 = true;
            }
        }
        function g(t3, e3, r3) {
          const n3 = t3[e3];
          t3[e3] = t3[r3], t3[r3] = n3;
        }
        function y(t3, e3, r3, n3, s2) {
          if (t3.length === 0)
            return -1;
          if (typeof r3 == "string" ? (n3 = r3, r3 = 0) : r3 > 2147483647 ? r3 = 2147483647 : r3 < -2147483648 && (r3 = -2147483648), Z(r3 = +r3) && (r3 = s2 ? 0 : t3.length - 1), r3 < 0 && (r3 = t3.length + r3), r3 >= t3.length) {
            if (s2)
              return -1;
            r3 = t3.length - 1;
          } else if (r3 < 0) {
            if (!s2)
              return -1;
            r3 = 0;
          }
          if (typeof e3 == "string" && (e3 = c.from(e3, n3)), c.isBuffer(e3))
            return e3.length === 0 ? -1 : b(t3, e3, r3, n3, s2);
          if (typeof e3 == "number")
            return e3 &= 255, typeof Uint8Array.prototype.indexOf == "function" ? s2 ? Uint8Array.prototype.indexOf.call(t3, e3, r3) : Uint8Array.prototype.lastIndexOf.call(t3, e3, r3) : b(t3, [e3], r3, n3, s2);
          throw new TypeError("val must be string, number or Buffer");
        }
        function b(t3, e3, r3, n3, s2) {
          let i2, o2 = 1, a2 = t3.length, c2 = e3.length;
          if (n3 !== void 0 && ((n3 = String(n3).toLowerCase()) === "ucs2" || n3 === "ucs-2" || n3 === "utf16le" || n3 === "utf-16le")) {
            if (t3.length < 2 || e3.length < 2)
              return -1;
            o2 = 2, a2 /= 2, c2 /= 2, r3 /= 2;
          }
          function u2(t4, e4) {
            return o2 === 1 ? t4[e4] : t4.readUInt16BE(e4 * o2);
          }
          if (s2) {
            let n4 = -1;
            for (i2 = r3; i2 < a2; i2++)
              if (u2(t3, i2) === u2(e3, n4 === -1 ? 0 : i2 - n4)) {
                if (n4 === -1 && (n4 = i2), i2 - n4 + 1 === c2)
                  return n4 * o2;
              } else
                n4 !== -1 && (i2 -= i2 - n4), n4 = -1;
          } else
            for (r3 + c2 > a2 && (r3 = a2 - c2), i2 = r3; i2 >= 0; i2--) {
              let r4 = true;
              for (let n4 = 0; n4 < c2; n4++)
                if (u2(t3, i2 + n4) !== u2(e3, n4)) {
                  r4 = false;
                  break;
                }
              if (r4)
                return i2;
            }
          return -1;
        }
        function v(t3, e3, r3, n3) {
          r3 = Number(r3) || 0;
          const s2 = t3.length - r3;
          n3 ? (n3 = Number(n3)) > s2 && (n3 = s2) : n3 = s2;
          const i2 = e3.length;
          let o2;
          for (n3 > i2 / 2 && (n3 = i2 / 2), o2 = 0; o2 < n3; ++o2) {
            const n4 = parseInt(e3.substr(2 * o2, 2), 16);
            if (Z(n4))
              return o2;
            t3[r3 + o2] = n4;
          }
          return o2;
        }
        function _(t3, e3, r3, n3) {
          return X(V(e3, t3.length - r3), t3, r3, n3);
        }
        function x(t3, e3, r3, n3) {
          return X(function(t4) {
            const e4 = [];
            for (let r4 = 0; r4 < t4.length; ++r4)
              e4.push(255 & t4.charCodeAt(r4));
            return e4;
          }(e3), t3, r3, n3);
        }
        function E(t3, e3, r3, n3) {
          return X($(e3), t3, r3, n3);
        }
        function T(t3, e3, r3, n3) {
          return X(function(t4, e4) {
            let r4, n4, s2;
            const i2 = [];
            for (let o2 = 0; o2 < t4.length && !((e4 -= 2) < 0); ++o2)
              r4 = t4.charCodeAt(o2), n4 = r4 >> 8, s2 = r4 % 256, i2.push(s2), i2.push(n4);
            return i2;
          }(e3, t3.length - r3), t3, r3, n3);
        }
        function A(t3, e3, r3) {
          return e3 === 0 && r3 === t3.length ? n2.fromByteArray(t3) : n2.fromByteArray(t3.slice(e3, r3));
        }
        function S(t3, e3, r3) {
          r3 = Math.min(t3.length, r3);
          const n3 = [];
          let s2 = e3;
          for (; s2 < r3; ) {
            const e4 = t3[s2];
            let i2 = null, o2 = e4 > 239 ? 4 : e4 > 223 ? 3 : e4 > 191 ? 2 : 1;
            if (s2 + o2 <= r3) {
              let r4, n4, a2, c2;
              switch (o2) {
                case 1:
                  e4 < 128 && (i2 = e4);
                  break;
                case 2:
                  r4 = t3[s2 + 1], (192 & r4) == 128 && (c2 = (31 & e4) << 6 | 63 & r4, c2 > 127 && (i2 = c2));
                  break;
                case 3:
                  r4 = t3[s2 + 1], n4 = t3[s2 + 2], (192 & r4) == 128 && (192 & n4) == 128 && (c2 = (15 & e4) << 12 | (63 & r4) << 6 | 63 & n4, c2 > 2047 && (c2 < 55296 || c2 > 57343) && (i2 = c2));
                  break;
                case 4:
                  r4 = t3[s2 + 1], n4 = t3[s2 + 2], a2 = t3[s2 + 3], (192 & r4) == 128 && (192 & n4) == 128 && (192 & a2) == 128 && (c2 = (15 & e4) << 18 | (63 & r4) << 12 | (63 & n4) << 6 | 63 & a2, c2 > 65535 && c2 < 1114112 && (i2 = c2));
              }
            }
            i2 === null ? (i2 = 65533, o2 = 1) : i2 > 65535 && (i2 -= 65536, n3.push(i2 >>> 10 & 1023 | 55296), i2 = 56320 | 1023 & i2), n3.push(i2), s2 += o2;
          }
          return function(t4) {
            const e4 = t4.length;
            if (e4 <= R)
              return String.fromCharCode.apply(String, t4);
            let r4 = "", n4 = 0;
            for (; n4 < e4; )
              r4 += String.fromCharCode.apply(String, t4.slice(n4, n4 += R));
            return r4;
          }(n3);
        }
        e2.kMaxLength = o, c.TYPED_ARRAY_SUPPORT = function() {
          try {
            const t3 = new Uint8Array(1), e3 = { foo: function() {
              return 42;
            } };
            return Object.setPrototypeOf(e3, Uint8Array.prototype), Object.setPrototypeOf(t3, e3), t3.foo() === 42;
          } catch (t3) {
            return false;
          }
        }(), c.TYPED_ARRAY_SUPPORT || typeof console == "undefined" || typeof console.error != "function" || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", { enumerable: true, get: function() {
          if (c.isBuffer(this))
            return this.buffer;
        } }), Object.defineProperty(c.prototype, "offset", { enumerable: true, get: function() {
          if (c.isBuffer(this))
            return this.byteOffset;
        } }), c.poolSize = 8192, c.from = function(t3, e3, r3) {
          return u(t3, e3, r3);
        }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(t3, e3, r3) {
          return function(t4, e4, r4) {
            return l(t4), t4 <= 0 ? a(t4) : e4 !== void 0 ? typeof r4 == "string" ? a(t4).fill(e4, r4) : a(t4).fill(e4) : a(t4);
          }(t3, e3, r3);
        }, c.allocUnsafe = function(t3) {
          return h(t3);
        }, c.allocUnsafeSlow = function(t3) {
          return h(t3);
        }, c.isBuffer = function(t3) {
          return t3 != null && t3._isBuffer === true && t3 !== c.prototype;
        }, c.compare = function(t3, e3) {
          if (q(t3, Uint8Array) && (t3 = c.from(t3, t3.offset, t3.byteLength)), q(e3, Uint8Array) && (e3 = c.from(e3, e3.offset, e3.byteLength)), !c.isBuffer(t3) || !c.isBuffer(e3))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (t3 === e3)
            return 0;
          let r3 = t3.length, n3 = e3.length;
          for (let s2 = 0, i2 = Math.min(r3, n3); s2 < i2; ++s2)
            if (t3[s2] !== e3[s2]) {
              r3 = t3[s2], n3 = e3[s2];
              break;
            }
          return r3 < n3 ? -1 : n3 < r3 ? 1 : 0;
        }, c.isEncoding = function(t3) {
          switch (String(t3).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        }, c.concat = function(t3, e3) {
          if (!Array.isArray(t3))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (t3.length === 0)
            return c.alloc(0);
          let r3;
          if (e3 === void 0)
            for (e3 = 0, r3 = 0; r3 < t3.length; ++r3)
              e3 += t3[r3].length;
          const n3 = c.allocUnsafe(e3);
          let s2 = 0;
          for (r3 = 0; r3 < t3.length; ++r3) {
            let e4 = t3[r3];
            if (q(e4, Uint8Array))
              s2 + e4.length > n3.length ? (c.isBuffer(e4) || (e4 = c.from(e4)), e4.copy(n3, s2)) : Uint8Array.prototype.set.call(n3, e4, s2);
            else {
              if (!c.isBuffer(e4))
                throw new TypeError('"list" argument must be an Array of Buffers');
              e4.copy(n3, s2);
            }
            s2 += e4.length;
          }
          return n3;
        }, c.byteLength = m, c.prototype._isBuffer = true, c.prototype.swap16 = function() {
          const t3 = this.length;
          if (t3 % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let e3 = 0; e3 < t3; e3 += 2)
            g(this, e3, e3 + 1);
          return this;
        }, c.prototype.swap32 = function() {
          const t3 = this.length;
          if (t3 % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (let e3 = 0; e3 < t3; e3 += 4)
            g(this, e3, e3 + 3), g(this, e3 + 1, e3 + 2);
          return this;
        }, c.prototype.swap64 = function() {
          const t3 = this.length;
          if (t3 % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (let e3 = 0; e3 < t3; e3 += 8)
            g(this, e3, e3 + 7), g(this, e3 + 1, e3 + 6), g(this, e3 + 2, e3 + 5), g(this, e3 + 3, e3 + 4);
          return this;
        }, c.prototype.toString = function() {
          const t3 = this.length;
          return t3 === 0 ? "" : arguments.length === 0 ? S(this, 0, t3) : w.apply(this, arguments);
        }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(t3) {
          if (!c.isBuffer(t3))
            throw new TypeError("Argument must be a Buffer");
          return this === t3 || c.compare(this, t3) === 0;
        }, c.prototype.inspect = function() {
          let t3 = "";
          const r3 = e2.INSPECT_MAX_BYTES;
          return t3 = this.toString("hex", 0, r3).replace(/(.{2})/g, "$1 ").trim(), this.length > r3 && (t3 += " ... "), "<Buffer " + t3 + ">";
        }, i && (c.prototype[i] = c.prototype.inspect), c.prototype.compare = function(t3, e3, r3, n3, s2) {
          if (q(t3, Uint8Array) && (t3 = c.from(t3, t3.offset, t3.byteLength)), !c.isBuffer(t3))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t3);
          if (e3 === void 0 && (e3 = 0), r3 === void 0 && (r3 = t3 ? t3.length : 0), n3 === void 0 && (n3 = 0), s2 === void 0 && (s2 = this.length), e3 < 0 || r3 > t3.length || n3 < 0 || s2 > this.length)
            throw new RangeError("out of range index");
          if (n3 >= s2 && e3 >= r3)
            return 0;
          if (n3 >= s2)
            return -1;
          if (e3 >= r3)
            return 1;
          if (this === t3)
            return 0;
          let i2 = (s2 >>>= 0) - (n3 >>>= 0), o2 = (r3 >>>= 0) - (e3 >>>= 0);
          const a2 = Math.min(i2, o2), u2 = this.slice(n3, s2), l2 = t3.slice(e3, r3);
          for (let t4 = 0; t4 < a2; ++t4)
            if (u2[t4] !== l2[t4]) {
              i2 = u2[t4], o2 = l2[t4];
              break;
            }
          return i2 < o2 ? -1 : o2 < i2 ? 1 : 0;
        }, c.prototype.includes = function(t3, e3, r3) {
          return this.indexOf(t3, e3, r3) !== -1;
        }, c.prototype.indexOf = function(t3, e3, r3) {
          return y(this, t3, e3, r3, true);
        }, c.prototype.lastIndexOf = function(t3, e3, r3) {
          return y(this, t3, e3, r3, false);
        }, c.prototype.write = function(t3, e3, r3, n3) {
          if (e3 === void 0)
            n3 = "utf8", r3 = this.length, e3 = 0;
          else if (r3 === void 0 && typeof e3 == "string")
            n3 = e3, r3 = this.length, e3 = 0;
          else {
            if (!isFinite(e3))
              throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            e3 >>>= 0, isFinite(r3) ? (r3 >>>= 0, n3 === void 0 && (n3 = "utf8")) : (n3 = r3, r3 = void 0);
          }
          const s2 = this.length - e3;
          if ((r3 === void 0 || r3 > s2) && (r3 = s2), t3.length > 0 && (r3 < 0 || e3 < 0) || e3 > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
          n3 || (n3 = "utf8");
          let i2 = false;
          for (; ; )
            switch (n3) {
              case "hex":
                return v(this, t3, e3, r3);
              case "utf8":
              case "utf-8":
                return _(this, t3, e3, r3);
              case "ascii":
              case "latin1":
              case "binary":
                return x(this, t3, e3, r3);
              case "base64":
                return E(this, t3, e3, r3);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return T(this, t3, e3, r3);
              default:
                if (i2)
                  throw new TypeError("Unknown encoding: " + n3);
                n3 = ("" + n3).toLowerCase(), i2 = true;
            }
        }, c.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        };
        const R = 4096;
        function I(t3, e3, r3) {
          let n3 = "";
          r3 = Math.min(t3.length, r3);
          for (let s2 = e3; s2 < r3; ++s2)
            n3 += String.fromCharCode(127 & t3[s2]);
          return n3;
        }
        function N(t3, e3, r3) {
          let n3 = "";
          r3 = Math.min(t3.length, r3);
          for (let s2 = e3; s2 < r3; ++s2)
            n3 += String.fromCharCode(t3[s2]);
          return n3;
        }
        function O(t3, e3, r3) {
          const n3 = t3.length;
          (!e3 || e3 < 0) && (e3 = 0), (!r3 || r3 < 0 || r3 > n3) && (r3 = n3);
          let s2 = "";
          for (let n4 = e3; n4 < r3; ++n4)
            s2 += Y[t3[n4]];
          return s2;
        }
        function C(t3, e3, r3) {
          const n3 = t3.slice(e3, r3);
          let s2 = "";
          for (let t4 = 0; t4 < n3.length - 1; t4 += 2)
            s2 += String.fromCharCode(n3[t4] + 256 * n3[t4 + 1]);
          return s2;
        }
        function k(t3, e3, r3) {
          if (t3 % 1 != 0 || t3 < 0)
            throw new RangeError("offset is not uint");
          if (t3 + e3 > r3)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function D(t3, e3, r3, n3, s2, i2) {
          if (!c.isBuffer(t3))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e3 > s2 || e3 < i2)
            throw new RangeError('"value" argument is out of bounds');
          if (r3 + n3 > t3.length)
            throw new RangeError("Index out of range");
        }
        function L(t3, e3, r3, n3, s2) {
          j(e3, n3, s2, t3, r3, 7);
          let i2 = Number(e3 & BigInt(4294967295));
          t3[r3++] = i2, i2 >>= 8, t3[r3++] = i2, i2 >>= 8, t3[r3++] = i2, i2 >>= 8, t3[r3++] = i2;
          let o2 = Number(e3 >> BigInt(32) & BigInt(4294967295));
          return t3[r3++] = o2, o2 >>= 8, t3[r3++] = o2, o2 >>= 8, t3[r3++] = o2, o2 >>= 8, t3[r3++] = o2, r3;
        }
        function P(t3, e3, r3, n3, s2) {
          j(e3, n3, s2, t3, r3, 7);
          let i2 = Number(e3 & BigInt(4294967295));
          t3[r3 + 7] = i2, i2 >>= 8, t3[r3 + 6] = i2, i2 >>= 8, t3[r3 + 5] = i2, i2 >>= 8, t3[r3 + 4] = i2;
          let o2 = Number(e3 >> BigInt(32) & BigInt(4294967295));
          return t3[r3 + 3] = o2, o2 >>= 8, t3[r3 + 2] = o2, o2 >>= 8, t3[r3 + 1] = o2, o2 >>= 8, t3[r3] = o2, r3 + 8;
        }
        function F(t3, e3, r3, n3, s2, i2) {
          if (r3 + n3 > t3.length)
            throw new RangeError("Index out of range");
          if (r3 < 0)
            throw new RangeError("Index out of range");
        }
        function B(t3, e3, r3, n3, i2) {
          return e3 = +e3, r3 >>>= 0, i2 || F(t3, 0, r3, 4), s.write(t3, e3, r3, n3, 23, 4), r3 + 4;
        }
        function M(t3, e3, r3, n3, i2) {
          return e3 = +e3, r3 >>>= 0, i2 || F(t3, 0, r3, 8), s.write(t3, e3, r3, n3, 52, 8), r3 + 8;
        }
        c.prototype.slice = function(t3, e3) {
          const r3 = this.length;
          (t3 = ~~t3) < 0 ? (t3 += r3) < 0 && (t3 = 0) : t3 > r3 && (t3 = r3), (e3 = e3 === void 0 ? r3 : ~~e3) < 0 ? (e3 += r3) < 0 && (e3 = 0) : e3 > r3 && (e3 = r3), e3 < t3 && (e3 = t3);
          const n3 = this.subarray(t3, e3);
          return Object.setPrototypeOf(n3, c.prototype), n3;
        }, c.prototype.readUintLE = c.prototype.readUIntLE = function(t3, e3, r3) {
          t3 >>>= 0, e3 >>>= 0, r3 || k(t3, e3, this.length);
          let n3 = this[t3], s2 = 1, i2 = 0;
          for (; ++i2 < e3 && (s2 *= 256); )
            n3 += this[t3 + i2] * s2;
          return n3;
        }, c.prototype.readUintBE = c.prototype.readUIntBE = function(t3, e3, r3) {
          t3 >>>= 0, e3 >>>= 0, r3 || k(t3, e3, this.length);
          let n3 = this[t3 + --e3], s2 = 1;
          for (; e3 > 0 && (s2 *= 256); )
            n3 += this[t3 + --e3] * s2;
          return n3;
        }, c.prototype.readUint8 = c.prototype.readUInt8 = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 1, this.length), this[t3];
        }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 2, this.length), this[t3] | this[t3 + 1] << 8;
        }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 2, this.length), this[t3] << 8 | this[t3 + 1];
        }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 4, this.length), (this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16) + 16777216 * this[t3 + 3];
        }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 4, this.length), 16777216 * this[t3] + (this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3]);
        }, c.prototype.readBigUInt64LE = Q(function(t3) {
          K(t3 >>>= 0, "offset");
          const e3 = this[t3], r3 = this[t3 + 7];
          e3 !== void 0 && r3 !== void 0 || G(t3, this.length - 8);
          const n3 = e3 + 256 * this[++t3] + 65536 * this[++t3] + this[++t3] * 2 ** 24, s2 = this[++t3] + 256 * this[++t3] + 65536 * this[++t3] + r3 * 2 ** 24;
          return BigInt(n3) + (BigInt(s2) << BigInt(32));
        }), c.prototype.readBigUInt64BE = Q(function(t3) {
          K(t3 >>>= 0, "offset");
          const e3 = this[t3], r3 = this[t3 + 7];
          e3 !== void 0 && r3 !== void 0 || G(t3, this.length - 8);
          const n3 = e3 * 2 ** 24 + 65536 * this[++t3] + 256 * this[++t3] + this[++t3], s2 = this[++t3] * 2 ** 24 + 65536 * this[++t3] + 256 * this[++t3] + r3;
          return (BigInt(n3) << BigInt(32)) + BigInt(s2);
        }), c.prototype.readIntLE = function(t3, e3, r3) {
          t3 >>>= 0, e3 >>>= 0, r3 || k(t3, e3, this.length);
          let n3 = this[t3], s2 = 1, i2 = 0;
          for (; ++i2 < e3 && (s2 *= 256); )
            n3 += this[t3 + i2] * s2;
          return s2 *= 128, n3 >= s2 && (n3 -= Math.pow(2, 8 * e3)), n3;
        }, c.prototype.readIntBE = function(t3, e3, r3) {
          t3 >>>= 0, e3 >>>= 0, r3 || k(t3, e3, this.length);
          let n3 = e3, s2 = 1, i2 = this[t3 + --n3];
          for (; n3 > 0 && (s2 *= 256); )
            i2 += this[t3 + --n3] * s2;
          return s2 *= 128, i2 >= s2 && (i2 -= Math.pow(2, 8 * e3)), i2;
        }, c.prototype.readInt8 = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 1, this.length), 128 & this[t3] ? -1 * (255 - this[t3] + 1) : this[t3];
        }, c.prototype.readInt16LE = function(t3, e3) {
          t3 >>>= 0, e3 || k(t3, 2, this.length);
          const r3 = this[t3] | this[t3 + 1] << 8;
          return 32768 & r3 ? 4294901760 | r3 : r3;
        }, c.prototype.readInt16BE = function(t3, e3) {
          t3 >>>= 0, e3 || k(t3, 2, this.length);
          const r3 = this[t3 + 1] | this[t3] << 8;
          return 32768 & r3 ? 4294901760 | r3 : r3;
        }, c.prototype.readInt32LE = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 4, this.length), this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16 | this[t3 + 3] << 24;
        }, c.prototype.readInt32BE = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 4, this.length), this[t3] << 24 | this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3];
        }, c.prototype.readBigInt64LE = Q(function(t3) {
          K(t3 >>>= 0, "offset");
          const e3 = this[t3], r3 = this[t3 + 7];
          e3 !== void 0 && r3 !== void 0 || G(t3, this.length - 8);
          const n3 = this[t3 + 4] + 256 * this[t3 + 5] + 65536 * this[t3 + 6] + (r3 << 24);
          return (BigInt(n3) << BigInt(32)) + BigInt(e3 + 256 * this[++t3] + 65536 * this[++t3] + this[++t3] * 2 ** 24);
        }), c.prototype.readBigInt64BE = Q(function(t3) {
          K(t3 >>>= 0, "offset");
          const e3 = this[t3], r3 = this[t3 + 7];
          e3 !== void 0 && r3 !== void 0 || G(t3, this.length - 8);
          const n3 = (e3 << 24) + 65536 * this[++t3] + 256 * this[++t3] + this[++t3];
          return (BigInt(n3) << BigInt(32)) + BigInt(this[++t3] * 2 ** 24 + 65536 * this[++t3] + 256 * this[++t3] + r3);
        }), c.prototype.readFloatLE = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 4, this.length), s.read(this, t3, true, 23, 4);
        }, c.prototype.readFloatBE = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 4, this.length), s.read(this, t3, false, 23, 4);
        }, c.prototype.readDoubleLE = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 8, this.length), s.read(this, t3, true, 52, 8);
        }, c.prototype.readDoubleBE = function(t3, e3) {
          return t3 >>>= 0, e3 || k(t3, 8, this.length), s.read(this, t3, false, 52, 8);
        }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(t3, e3, r3, n3) {
          t3 = +t3, e3 >>>= 0, r3 >>>= 0, n3 || D(this, t3, e3, r3, Math.pow(2, 8 * r3) - 1, 0);
          let s2 = 1, i2 = 0;
          for (this[e3] = 255 & t3; ++i2 < r3 && (s2 *= 256); )
            this[e3 + i2] = t3 / s2 & 255;
          return e3 + r3;
        }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(t3, e3, r3, n3) {
          t3 = +t3, e3 >>>= 0, r3 >>>= 0, n3 || D(this, t3, e3, r3, Math.pow(2, 8 * r3) - 1, 0);
          let s2 = r3 - 1, i2 = 1;
          for (this[e3 + s2] = 255 & t3; --s2 >= 0 && (i2 *= 256); )
            this[e3 + s2] = t3 / i2 & 255;
          return e3 + r3;
        }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || D(this, t3, e3, 1, 255, 0), this[e3] = 255 & t3, e3 + 1;
        }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || D(this, t3, e3, 2, 65535, 0), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, e3 + 2;
        }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || D(this, t3, e3, 2, 65535, 0), this[e3] = t3 >>> 8, this[e3 + 1] = 255 & t3, e3 + 2;
        }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || D(this, t3, e3, 4, 4294967295, 0), this[e3 + 3] = t3 >>> 24, this[e3 + 2] = t3 >>> 16, this[e3 + 1] = t3 >>> 8, this[e3] = 255 & t3, e3 + 4;
        }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || D(this, t3, e3, 4, 4294967295, 0), this[e3] = t3 >>> 24, this[e3 + 1] = t3 >>> 16, this[e3 + 2] = t3 >>> 8, this[e3 + 3] = 255 & t3, e3 + 4;
        }, c.prototype.writeBigUInt64LE = Q(function(t3, e3 = 0) {
          return L(this, t3, e3, BigInt(0), BigInt("0xffffffffffffffff"));
        }), c.prototype.writeBigUInt64BE = Q(function(t3, e3 = 0) {
          return P(this, t3, e3, BigInt(0), BigInt("0xffffffffffffffff"));
        }), c.prototype.writeIntLE = function(t3, e3, r3, n3) {
          if (t3 = +t3, e3 >>>= 0, !n3) {
            const n4 = Math.pow(2, 8 * r3 - 1);
            D(this, t3, e3, r3, n4 - 1, -n4);
          }
          let s2 = 0, i2 = 1, o2 = 0;
          for (this[e3] = 255 & t3; ++s2 < r3 && (i2 *= 256); )
            t3 < 0 && o2 === 0 && this[e3 + s2 - 1] !== 0 && (o2 = 1), this[e3 + s2] = (t3 / i2 >> 0) - o2 & 255;
          return e3 + r3;
        }, c.prototype.writeIntBE = function(t3, e3, r3, n3) {
          if (t3 = +t3, e3 >>>= 0, !n3) {
            const n4 = Math.pow(2, 8 * r3 - 1);
            D(this, t3, e3, r3, n4 - 1, -n4);
          }
          let s2 = r3 - 1, i2 = 1, o2 = 0;
          for (this[e3 + s2] = 255 & t3; --s2 >= 0 && (i2 *= 256); )
            t3 < 0 && o2 === 0 && this[e3 + s2 + 1] !== 0 && (o2 = 1), this[e3 + s2] = (t3 / i2 >> 0) - o2 & 255;
          return e3 + r3;
        }, c.prototype.writeInt8 = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || D(this, t3, e3, 1, 127, -128), t3 < 0 && (t3 = 255 + t3 + 1), this[e3] = 255 & t3, e3 + 1;
        }, c.prototype.writeInt16LE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || D(this, t3, e3, 2, 32767, -32768), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, e3 + 2;
        }, c.prototype.writeInt16BE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || D(this, t3, e3, 2, 32767, -32768), this[e3] = t3 >>> 8, this[e3 + 1] = 255 & t3, e3 + 2;
        }, c.prototype.writeInt32LE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || D(this, t3, e3, 4, 2147483647, -2147483648), this[e3] = 255 & t3, this[e3 + 1] = t3 >>> 8, this[e3 + 2] = t3 >>> 16, this[e3 + 3] = t3 >>> 24, e3 + 4;
        }, c.prototype.writeInt32BE = function(t3, e3, r3) {
          return t3 = +t3, e3 >>>= 0, r3 || D(this, t3, e3, 4, 2147483647, -2147483648), t3 < 0 && (t3 = 4294967295 + t3 + 1), this[e3] = t3 >>> 24, this[e3 + 1] = t3 >>> 16, this[e3 + 2] = t3 >>> 8, this[e3 + 3] = 255 & t3, e3 + 4;
        }, c.prototype.writeBigInt64LE = Q(function(t3, e3 = 0) {
          return L(this, t3, e3, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        }), c.prototype.writeBigInt64BE = Q(function(t3, e3 = 0) {
          return P(this, t3, e3, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
        }), c.prototype.writeFloatLE = function(t3, e3, r3) {
          return B(this, t3, e3, true, r3);
        }, c.prototype.writeFloatBE = function(t3, e3, r3) {
          return B(this, t3, e3, false, r3);
        }, c.prototype.writeDoubleLE = function(t3, e3, r3) {
          return M(this, t3, e3, true, r3);
        }, c.prototype.writeDoubleBE = function(t3, e3, r3) {
          return M(this, t3, e3, false, r3);
        }, c.prototype.copy = function(t3, e3, r3, n3) {
          if (!c.isBuffer(t3))
            throw new TypeError("argument should be a Buffer");
          if (r3 || (r3 = 0), n3 || n3 === 0 || (n3 = this.length), e3 >= t3.length && (e3 = t3.length), e3 || (e3 = 0), n3 > 0 && n3 < r3 && (n3 = r3), n3 === r3)
            return 0;
          if (t3.length === 0 || this.length === 0)
            return 0;
          if (e3 < 0)
            throw new RangeError("targetStart out of bounds");
          if (r3 < 0 || r3 >= this.length)
            throw new RangeError("Index out of range");
          if (n3 < 0)
            throw new RangeError("sourceEnd out of bounds");
          n3 > this.length && (n3 = this.length), t3.length - e3 < n3 - r3 && (n3 = t3.length - e3 + r3);
          const s2 = n3 - r3;
          return this === t3 && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e3, r3, n3) : Uint8Array.prototype.set.call(t3, this.subarray(r3, n3), e3), s2;
        }, c.prototype.fill = function(t3, e3, r3, n3) {
          if (typeof t3 == "string") {
            if (typeof e3 == "string" ? (n3 = e3, e3 = 0, r3 = this.length) : typeof r3 == "string" && (n3 = r3, r3 = this.length), n3 !== void 0 && typeof n3 != "string")
              throw new TypeError("encoding must be a string");
            if (typeof n3 == "string" && !c.isEncoding(n3))
              throw new TypeError("Unknown encoding: " + n3);
            if (t3.length === 1) {
              const e4 = t3.charCodeAt(0);
              (n3 === "utf8" && e4 < 128 || n3 === "latin1") && (t3 = e4);
            }
          } else
            typeof t3 == "number" ? t3 &= 255 : typeof t3 == "boolean" && (t3 = Number(t3));
          if (e3 < 0 || this.length < e3 || this.length < r3)
            throw new RangeError("Out of range index");
          if (r3 <= e3)
            return this;
          let s2;
          if (e3 >>>= 0, r3 = r3 === void 0 ? this.length : r3 >>> 0, t3 || (t3 = 0), typeof t3 == "number")
            for (s2 = e3; s2 < r3; ++s2)
              this[s2] = t3;
          else {
            const i2 = c.isBuffer(t3) ? t3 : c.from(t3, n3), o2 = i2.length;
            if (o2 === 0)
              throw new TypeError('The value "' + t3 + '" is invalid for argument "value"');
            for (s2 = 0; s2 < r3 - e3; ++s2)
              this[s2 + e3] = i2[s2 % o2];
          }
          return this;
        };
        const U = {};
        function z(t3, e3, r3) {
          U[t3] = class extends r3 {
            constructor() {
              super(), Object.defineProperty(this, "message", { value: e3.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${t3}]`, this.stack, delete this.name;
            }
            get code() {
              return t3;
            }
            set code(t4) {
              Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: t4, writable: true });
            }
            toString() {
              return `${this.name} [${t3}]: ${this.message}`;
            }
          };
        }
        function H(t3) {
          let e3 = "", r3 = t3.length;
          const n3 = t3[0] === "-" ? 1 : 0;
          for (; r3 >= n3 + 4; r3 -= 3)
            e3 = `_${t3.slice(r3 - 3, r3)}${e3}`;
          return `${t3.slice(0, r3)}${e3}`;
        }
        function j(t3, e3, r3, n3, s2, i2) {
          if (t3 > r3 || t3 < e3) {
            const n4 = typeof e3 == "bigint" ? "n" : "";
            let s3;
            throw s3 = i2 > 3 ? e3 === 0 || e3 === BigInt(0) ? `>= 0${n4} and < 2${n4} ** ${8 * (i2 + 1)}${n4}` : `>= -(2${n4} ** ${8 * (i2 + 1) - 1}${n4}) and < 2 ** ${8 * (i2 + 1) - 1}${n4}` : `>= ${e3}${n4} and <= ${r3}${n4}`, new U.ERR_OUT_OF_RANGE("value", s3, t3);
          }
          !function(t4, e4, r4) {
            K(e4, "offset"), t4[e4] !== void 0 && t4[e4 + r4] !== void 0 || G(e4, t4.length - (r4 + 1));
          }(n3, s2, i2);
        }
        function K(t3, e3) {
          if (typeof t3 != "number")
            throw new U.ERR_INVALID_ARG_TYPE(e3, "number", t3);
        }
        function G(t3, e3, r3) {
          if (Math.floor(t3) !== t3)
            throw K(t3, r3), new U.ERR_OUT_OF_RANGE(r3 || "offset", "an integer", t3);
          if (e3 < 0)
            throw new U.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new U.ERR_OUT_OF_RANGE(r3 || "offset", `>= ${r3 ? 1 : 0} and <= ${e3}`, t3);
        }
        z("ERR_BUFFER_OUT_OF_BOUNDS", function(t3) {
          return t3 ? `${t3} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
        }, RangeError), z("ERR_INVALID_ARG_TYPE", function(t3, e3) {
          return `The "${t3}" argument must be of type number. Received type ${typeof e3}`;
        }, TypeError), z("ERR_OUT_OF_RANGE", function(t3, e3, r3) {
          let n3 = `The value of "${t3}" is out of range.`, s2 = r3;
          return Number.isInteger(r3) && Math.abs(r3) > 2 ** 32 ? s2 = H(String(r3)) : typeof r3 == "bigint" && (s2 = String(r3), (r3 > BigInt(2) ** BigInt(32) || r3 < -(BigInt(2) ** BigInt(32))) && (s2 = H(s2)), s2 += "n"), n3 += ` It must be ${e3}. Received ${s2}`, n3;
        }, RangeError);
        const W = /[^+/0-9A-Za-z-_]/g;
        function V(t3, e3) {
          let r3;
          e3 = e3 || 1 / 0;
          const n3 = t3.length;
          let s2 = null;
          const i2 = [];
          for (let o2 = 0; o2 < n3; ++o2) {
            if (r3 = t3.charCodeAt(o2), r3 > 55295 && r3 < 57344) {
              if (!s2) {
                if (r3 > 56319) {
                  (e3 -= 3) > -1 && i2.push(239, 191, 189);
                  continue;
                }
                if (o2 + 1 === n3) {
                  (e3 -= 3) > -1 && i2.push(239, 191, 189);
                  continue;
                }
                s2 = r3;
                continue;
              }
              if (r3 < 56320) {
                (e3 -= 3) > -1 && i2.push(239, 191, 189), s2 = r3;
                continue;
              }
              r3 = 65536 + (s2 - 55296 << 10 | r3 - 56320);
            } else
              s2 && (e3 -= 3) > -1 && i2.push(239, 191, 189);
            if (s2 = null, r3 < 128) {
              if ((e3 -= 1) < 0)
                break;
              i2.push(r3);
            } else if (r3 < 2048) {
              if ((e3 -= 2) < 0)
                break;
              i2.push(r3 >> 6 | 192, 63 & r3 | 128);
            } else if (r3 < 65536) {
              if ((e3 -= 3) < 0)
                break;
              i2.push(r3 >> 12 | 224, r3 >> 6 & 63 | 128, 63 & r3 | 128);
            } else {
              if (!(r3 < 1114112))
                throw new Error("Invalid code point");
              if ((e3 -= 4) < 0)
                break;
              i2.push(r3 >> 18 | 240, r3 >> 12 & 63 | 128, r3 >> 6 & 63 | 128, 63 & r3 | 128);
            }
          }
          return i2;
        }
        function $(t3) {
          return n2.toByteArray(function(t4) {
            if ((t4 = (t4 = t4.split("=")[0]).trim().replace(W, "")).length < 2)
              return "";
            for (; t4.length % 4 != 0; )
              t4 += "=";
            return t4;
          }(t3));
        }
        function X(t3, e3, r3, n3) {
          let s2;
          for (s2 = 0; s2 < n3 && !(s2 + r3 >= e3.length || s2 >= t3.length); ++s2)
            e3[s2 + r3] = t3[s2];
          return s2;
        }
        function q(t3, e3) {
          return t3 instanceof e3 || t3 != null && t3.constructor != null && t3.constructor.name != null && t3.constructor.name === e3.name;
        }
        function Z(t3) {
          return t3 != t3;
        }
        const Y = function() {
          const t3 = "0123456789abcdef", e3 = new Array(256);
          for (let r3 = 0; r3 < 16; ++r3) {
            const n3 = 16 * r3;
            for (let s2 = 0; s2 < 16; ++s2)
              e3[n3 + s2] = t3[r3] + t3[s2];
          }
          return e3;
        }();
        function Q(t3) {
          return typeof BigInt == "undefined" ? J : t3;
        }
        function J() {
          throw new Error("BigInt not supported");
        }
      }, 187: (t2) => {
        var e2, r2 = typeof Reflect == "object" ? Reflect : null, n2 = r2 && typeof r2.apply == "function" ? r2.apply : function(t3, e3, r3) {
          return Function.prototype.apply.call(t3, e3, r3);
        };
        e2 = r2 && typeof r2.ownKeys == "function" ? r2.ownKeys : Object.getOwnPropertySymbols ? function(t3) {
          return Object.getOwnPropertyNames(t3).concat(Object.getOwnPropertySymbols(t3));
        } : function(t3) {
          return Object.getOwnPropertyNames(t3);
        };
        var s = Number.isNaN || function(t3) {
          return t3 != t3;
        };
        function i() {
          i.init.call(this);
        }
        t2.exports = i, t2.exports.once = function(t3, e3) {
          return new Promise(function(r3, n3) {
            function s2(r4) {
              t3.removeListener(e3, i2), n3(r4);
            }
            function i2() {
              typeof t3.removeListener == "function" && t3.removeListener("error", s2), r3([].slice.call(arguments));
            }
            m(t3, e3, i2, { once: true }), e3 !== "error" && function(t4, e4, r4) {
              typeof t4.on == "function" && m(t4, "error", e4, { once: true });
            }(t3, s2);
          });
        }, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
        var o = 10;
        function a(t3) {
          if (typeof t3 != "function")
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t3);
        }
        function c(t3) {
          return t3._maxListeners === void 0 ? i.defaultMaxListeners : t3._maxListeners;
        }
        function u(t3, e3, r3, n3) {
          var s2, i2, o2, u2;
          if (a(r3), (i2 = t3._events) === void 0 ? (i2 = t3._events = /* @__PURE__ */ Object.create(null), t3._eventsCount = 0) : (i2.newListener !== void 0 && (t3.emit("newListener", e3, r3.listener ? r3.listener : r3), i2 = t3._events), o2 = i2[e3]), o2 === void 0)
            o2 = i2[e3] = r3, ++t3._eventsCount;
          else if (typeof o2 == "function" ? o2 = i2[e3] = n3 ? [r3, o2] : [o2, r3] : n3 ? o2.unshift(r3) : o2.push(r3), (s2 = c(t3)) > 0 && o2.length > s2 && !o2.warned) {
            o2.warned = true;
            var l2 = new Error("Possible EventEmitter memory leak detected. " + o2.length + " " + String(e3) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            l2.name = "MaxListenersExceededWarning", l2.emitter = t3, l2.type = e3, l2.count = o2.length, u2 = l2, console && console.warn && console.warn(u2);
          }
          return t3;
        }
        function l() {
          if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
        }
        function h(t3, e3, r3) {
          var n3 = { fired: false, wrapFn: void 0, target: t3, type: e3, listener: r3 }, s2 = l.bind(n3);
          return s2.listener = r3, n3.wrapFn = s2, s2;
        }
        function p2(t3, e3, r3) {
          var n3 = t3._events;
          if (n3 === void 0)
            return [];
          var s2 = n3[e3];
          return s2 === void 0 ? [] : typeof s2 == "function" ? r3 ? [s2.listener || s2] : [s2] : r3 ? function(t4) {
            for (var e4 = new Array(t4.length), r4 = 0; r4 < e4.length; ++r4)
              e4[r4] = t4[r4].listener || t4[r4];
            return e4;
          }(s2) : f(s2, s2.length);
        }
        function d(t3) {
          var e3 = this._events;
          if (e3 !== void 0) {
            var r3 = e3[t3];
            if (typeof r3 == "function")
              return 1;
            if (r3 !== void 0)
              return r3.length;
          }
          return 0;
        }
        function f(t3, e3) {
          for (var r3 = new Array(e3), n3 = 0; n3 < e3; ++n3)
            r3[n3] = t3[n3];
          return r3;
        }
        function m(t3, e3, r3, n3) {
          if (typeof t3.on == "function")
            n3.once ? t3.once(e3, r3) : t3.on(e3, r3);
          else {
            if (typeof t3.addEventListener != "function")
              throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t3);
            t3.addEventListener(e3, function s2(i2) {
              n3.once && t3.removeEventListener(e3, s2), r3(i2);
            });
          }
        }
        Object.defineProperty(i, "defaultMaxListeners", { enumerable: true, get: function() {
          return o;
        }, set: function(t3) {
          if (typeof t3 != "number" || t3 < 0 || s(t3))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t3 + ".");
          o = t3;
        } }), i.init = function() {
          this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
        }, i.prototype.setMaxListeners = function(t3) {
          if (typeof t3 != "number" || t3 < 0 || s(t3))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t3 + ".");
          return this._maxListeners = t3, this;
        }, i.prototype.getMaxListeners = function() {
          return c(this);
        }, i.prototype.emit = function(t3) {
          for (var e3 = [], r3 = 1; r3 < arguments.length; r3++)
            e3.push(arguments[r3]);
          var s2 = t3 === "error", i2 = this._events;
          if (i2 !== void 0)
            s2 = s2 && i2.error === void 0;
          else if (!s2)
            return false;
          if (s2) {
            var o2;
            if (e3.length > 0 && (o2 = e3[0]), o2 instanceof Error)
              throw o2;
            var a2 = new Error("Unhandled error." + (o2 ? " (" + o2.message + ")" : ""));
            throw a2.context = o2, a2;
          }
          var c2 = i2[t3];
          if (c2 === void 0)
            return false;
          if (typeof c2 == "function")
            n2(c2, this, e3);
          else {
            var u2 = c2.length, l2 = f(c2, u2);
            for (r3 = 0; r3 < u2; ++r3)
              n2(l2[r3], this, e3);
          }
          return true;
        }, i.prototype.addListener = function(t3, e3) {
          return u(this, t3, e3, false);
        }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(t3, e3) {
          return u(this, t3, e3, true);
        }, i.prototype.once = function(t3, e3) {
          return a(e3), this.on(t3, h(this, t3, e3)), this;
        }, i.prototype.prependOnceListener = function(t3, e3) {
          return a(e3), this.prependListener(t3, h(this, t3, e3)), this;
        }, i.prototype.removeListener = function(t3, e3) {
          var r3, n3, s2, i2, o2;
          if (a(e3), (n3 = this._events) === void 0)
            return this;
          if ((r3 = n3[t3]) === void 0)
            return this;
          if (r3 === e3 || r3.listener === e3)
            --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete n3[t3], n3.removeListener && this.emit("removeListener", t3, r3.listener || e3));
          else if (typeof r3 != "function") {
            for (s2 = -1, i2 = r3.length - 1; i2 >= 0; i2--)
              if (r3[i2] === e3 || r3[i2].listener === e3) {
                o2 = r3[i2].listener, s2 = i2;
                break;
              }
            if (s2 < 0)
              return this;
            s2 === 0 ? r3.shift() : function(t4, e4) {
              for (; e4 + 1 < t4.length; e4++)
                t4[e4] = t4[e4 + 1];
              t4.pop();
            }(r3, s2), r3.length === 1 && (n3[t3] = r3[0]), n3.removeListener !== void 0 && this.emit("removeListener", t3, o2 || e3);
          }
          return this;
        }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(t3) {
          var e3, r3, n3;
          if ((r3 = this._events) === void 0)
            return this;
          if (r3.removeListener === void 0)
            return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : r3[t3] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete r3[t3]), this;
          if (arguments.length === 0) {
            var s2, i2 = Object.keys(r3);
            for (n3 = 0; n3 < i2.length; ++n3)
              (s2 = i2[n3]) !== "removeListener" && this.removeAllListeners(s2);
            return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
          }
          if (typeof (e3 = r3[t3]) == "function")
            this.removeListener(t3, e3);
          else if (e3 !== void 0)
            for (n3 = e3.length - 1; n3 >= 0; n3--)
              this.removeListener(t3, e3[n3]);
          return this;
        }, i.prototype.listeners = function(t3) {
          return p2(this, t3, true);
        }, i.prototype.rawListeners = function(t3) {
          return p2(this, t3, false);
        }, i.listenerCount = function(t3, e3) {
          return typeof t3.listenerCount == "function" ? t3.listenerCount(e3) : d.call(t3, e3);
        }, i.prototype.listenerCount = d, i.prototype.eventNames = function() {
          return this._eventsCount > 0 ? e2(this._events) : [];
        };
      }, 645: (t2, e2) => {
        e2.read = function(t3, e3, r2, n2, s) {
          var i, o, a = 8 * s - n2 - 1, c = (1 << a) - 1, u = c >> 1, l = -7, h = r2 ? s - 1 : 0, p2 = r2 ? -1 : 1, d = t3[e3 + h];
          for (h += p2, i = d & (1 << -l) - 1, d >>= -l, l += a; l > 0; i = 256 * i + t3[e3 + h], h += p2, l -= 8)
            ;
          for (o = i & (1 << -l) - 1, i >>= -l, l += n2; l > 0; o = 256 * o + t3[e3 + h], h += p2, l -= 8)
            ;
          if (i === 0)
            i = 1 - u;
          else {
            if (i === c)
              return o ? NaN : 1 / 0 * (d ? -1 : 1);
            o += Math.pow(2, n2), i -= u;
          }
          return (d ? -1 : 1) * o * Math.pow(2, i - n2);
        }, e2.write = function(t3, e3, r2, n2, s, i) {
          var o, a, c, u = 8 * i - s - 1, l = (1 << u) - 1, h = l >> 1, p2 = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = n2 ? 0 : i - 1, f = n2 ? 1 : -1, m = e3 < 0 || e3 === 0 && 1 / e3 < 0 ? 1 : 0;
          for (e3 = Math.abs(e3), isNaN(e3) || e3 === 1 / 0 ? (a = isNaN(e3) ? 1 : 0, o = l) : (o = Math.floor(Math.log(e3) / Math.LN2), e3 * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), (e3 += o + h >= 1 ? p2 / c : p2 * Math.pow(2, 1 - h)) * c >= 2 && (o++, c /= 2), o + h >= l ? (a = 0, o = l) : o + h >= 1 ? (a = (e3 * c - 1) * Math.pow(2, s), o += h) : (a = e3 * Math.pow(2, h - 1) * Math.pow(2, s), o = 0)); s >= 8; t3[r2 + d] = 255 & a, d += f, a /= 256, s -= 8)
            ;
          for (o = o << s | a, u += s; u > 0; t3[r2 + d] = 255 & o, d += f, o /= 256, u -= 8)
            ;
          t3[r2 + d - f] |= 128 * m;
        };
      }, 717: (t2) => {
        typeof Object.create == "function" ? t2.exports = function(t3, e2) {
          e2 && (t3.super_ = e2, t3.prototype = Object.create(e2.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }));
        } : t2.exports = function(t3, e2) {
          if (e2) {
            t3.super_ = e2;
            var r2 = function() {
            };
            r2.prototype = e2.prototype, t3.prototype = new r2(), t3.prototype.constructor = t3;
          }
        };
      }, 733: (t2, e2, r2) => {
        t2.exports = function t3(e3, r3, n2) {
          function s(o2, a) {
            if (!r3[o2]) {
              if (!e3[o2]) {
                if (i)
                  return i(o2, true);
                var c = new Error("Cannot find module '" + o2 + "'");
                throw c.code = "MODULE_NOT_FOUND", c;
              }
              var u = r3[o2] = { exports: {} };
              e3[o2][0].call(u.exports, function(t4) {
                return s(e3[o2][1][t4] || t4);
              }, u, u.exports, t3, e3, r3, n2);
            }
            return r3[o2].exports;
          }
          for (var i = void 0, o = 0; o < n2.length; o++)
            s(n2[o]);
          return s;
        }({ 1: [function(t3, e3, r3) {
          var n2 = t3("./utils"), s = t3("./support"), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          r3.encode = function(t4) {
            for (var e4, r4, s2, o, a, c, u, l = [], h = 0, p2 = t4.length, d = p2, f = n2.getTypeOf(t4) !== "string"; h < t4.length; )
              d = p2 - h, s2 = f ? (e4 = t4[h++], r4 = h < p2 ? t4[h++] : 0, h < p2 ? t4[h++] : 0) : (e4 = t4.charCodeAt(h++), r4 = h < p2 ? t4.charCodeAt(h++) : 0, h < p2 ? t4.charCodeAt(h++) : 0), o = e4 >> 2, a = (3 & e4) << 4 | r4 >> 4, c = 1 < d ? (15 & r4) << 2 | s2 >> 6 : 64, u = 2 < d ? 63 & s2 : 64, l.push(i.charAt(o) + i.charAt(a) + i.charAt(c) + i.charAt(u));
            return l.join("");
          }, r3.decode = function(t4) {
            var e4, r4, n3, o, a, c, u = 0, l = 0, h = "data:";
            if (t4.substr(0, h.length) === h)
              throw new Error("Invalid base64 input, it looks like a data url.");
            var p2, d = 3 * (t4 = t4.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length / 4;
            if (t4.charAt(t4.length - 1) === i.charAt(64) && d--, t4.charAt(t4.length - 2) === i.charAt(64) && d--, d % 1 != 0)
              throw new Error("Invalid base64 input, bad content length.");
            for (p2 = s.uint8array ? new Uint8Array(0 | d) : new Array(0 | d); u < t4.length; )
              e4 = i.indexOf(t4.charAt(u++)) << 2 | (o = i.indexOf(t4.charAt(u++))) >> 4, r4 = (15 & o) << 4 | (a = i.indexOf(t4.charAt(u++))) >> 2, n3 = (3 & a) << 6 | (c = i.indexOf(t4.charAt(u++))), p2[l++] = e4, a !== 64 && (p2[l++] = r4), c !== 64 && (p2[l++] = n3);
            return p2;
          };
        }, { "./support": 30, "./utils": 32 }], 2: [function(t3, e3, r3) {
          var n2 = t3("./external"), s = t3("./stream/DataWorker"), i = t3("./stream/Crc32Probe"), o = t3("./stream/DataLengthProbe");
          function a(t4, e4, r4, n3, s2) {
            this.compressedSize = t4, this.uncompressedSize = e4, this.crc32 = r4, this.compression = n3, this.compressedContent = s2;
          }
          a.prototype = { getContentWorker: function() {
            var t4 = new s(n2.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), e4 = this;
            return t4.on("end", function() {
              if (this.streamInfo.data_length !== e4.uncompressedSize)
                throw new Error("Bug : uncompressed data size mismatch");
            }), t4;
          }, getCompressedWorker: function() {
            return new s(n2.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
          } }, a.createWorkerFrom = function(t4, e4, r4) {
            return t4.pipe(new i()).pipe(new o("uncompressedSize")).pipe(e4.compressWorker(r4)).pipe(new o("compressedSize")).withStreamInfo("compression", e4);
          }, e3.exports = a;
        }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(t3, e3, r3) {
          var n2 = t3("./stream/GenericWorker");
          r3.STORE = { magic: "\0\0", compressWorker: function(t4) {
            return new n2("STORE compression");
          }, uncompressWorker: function() {
            return new n2("STORE decompression");
          } }, r3.DEFLATE = t3("./flate");
        }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(t3, e3, r3) {
          var n2 = t3("./utils"), s = function() {
            for (var t4, e4 = [], r4 = 0; r4 < 256; r4++) {
              t4 = r4;
              for (var n3 = 0; n3 < 8; n3++)
                t4 = 1 & t4 ? 3988292384 ^ t4 >>> 1 : t4 >>> 1;
              e4[r4] = t4;
            }
            return e4;
          }();
          e3.exports = function(t4, e4) {
            return t4 !== void 0 && t4.length ? n2.getTypeOf(t4) !== "string" ? function(t5, e5, r4, n3) {
              var i = s, o = 0 + r4;
              t5 ^= -1;
              for (var a = 0; a < o; a++)
                t5 = t5 >>> 8 ^ i[255 & (t5 ^ e5[a])];
              return -1 ^ t5;
            }(0 | e4, t4, t4.length) : function(t5, e5, r4, n3) {
              var i = s, o = 0 + r4;
              t5 ^= -1;
              for (var a = 0; a < o; a++)
                t5 = t5 >>> 8 ^ i[255 & (t5 ^ e5.charCodeAt(a))];
              return -1 ^ t5;
            }(0 | e4, t4, t4.length) : 0;
          };
        }, { "./utils": 32 }], 5: [function(t3, e3, r3) {
          r3.base64 = false, r3.binary = false, r3.dir = false, r3.createFolders = true, r3.date = null, r3.compression = null, r3.compressionOptions = null, r3.comment = null, r3.unixPermissions = null, r3.dosPermissions = null;
        }, {}], 6: [function(t3, e3, r3) {
          var n2;
          n2 = typeof Promise != "undefined" ? Promise : t3("lie"), e3.exports = { Promise: n2 };
        }, { lie: 37 }], 7: [function(t3, e3, r3) {
          var n2 = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Uint32Array != "undefined", s = t3("pako"), i = t3("./utils"), o = t3("./stream/GenericWorker"), a = n2 ? "uint8array" : "array";
          function c(t4, e4) {
            o.call(this, "FlateWorker/" + t4), this._pako = null, this._pakoAction = t4, this._pakoOptions = e4, this.meta = {};
          }
          r3.magic = "\b\0", i.inherits(c, o), c.prototype.processChunk = function(t4) {
            this.meta = t4.meta, this._pako === null && this._createPako(), this._pako.push(i.transformTo(a, t4.data), false);
          }, c.prototype.flush = function() {
            o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], true);
          }, c.prototype.cleanUp = function() {
            o.prototype.cleanUp.call(this), this._pako = null;
          }, c.prototype._createPako = function() {
            this._pako = new s[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
            var t4 = this;
            this._pako.onData = function(e4) {
              t4.push({ data: e4, meta: t4.meta });
            };
          }, r3.compressWorker = function(t4) {
            return new c("Deflate", t4);
          }, r3.uncompressWorker = function() {
            return new c("Inflate", {});
          };
        }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(t3, e3, r3) {
          function n2(t4, e4) {
            var r4, n3 = "";
            for (r4 = 0; r4 < e4; r4++)
              n3 += String.fromCharCode(255 & t4), t4 >>>= 8;
            return n3;
          }
          function s(t4, e4, r4, s2, o2, l2) {
            var h, p2, d = t4.file, f = t4.compression, m = l2 !== a.utf8encode, w = i.transformTo("string", l2(d.name)), g = i.transformTo("string", a.utf8encode(d.name)), y = d.comment, b = i.transformTo("string", l2(y)), v = i.transformTo("string", a.utf8encode(y)), _ = g.length !== d.name.length, x = v.length !== y.length, E = "", T = "", A = "", S = d.dir, R = d.date, I = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
            e4 && !r4 || (I.crc32 = t4.crc32, I.compressedSize = t4.compressedSize, I.uncompressedSize = t4.uncompressedSize);
            var N = 0;
            e4 && (N |= 8), m || !_ && !x || (N |= 2048);
            var O = 0, C = 0;
            S && (O |= 16), o2 === "UNIX" ? (C = 798, O |= function(t5, e5) {
              var r5 = t5;
              return t5 || (r5 = e5 ? 16893 : 33204), (65535 & r5) << 16;
            }(d.unixPermissions, S)) : (C = 20, O |= function(t5) {
              return 63 & (t5 || 0);
            }(d.dosPermissions)), h = R.getUTCHours(), h <<= 6, h |= R.getUTCMinutes(), h <<= 5, h |= R.getUTCSeconds() / 2, p2 = R.getUTCFullYear() - 1980, p2 <<= 4, p2 |= R.getUTCMonth() + 1, p2 <<= 5, p2 |= R.getUTCDate(), _ && (T = n2(1, 1) + n2(c(w), 4) + g, E += "up" + n2(T.length, 2) + T), x && (A = n2(1, 1) + n2(c(b), 4) + v, E += "uc" + n2(A.length, 2) + A);
            var k = "";
            return k += "\n\0", k += n2(N, 2), k += f.magic, k += n2(h, 2), k += n2(p2, 2), k += n2(I.crc32, 4), k += n2(I.compressedSize, 4), k += n2(I.uncompressedSize, 4), k += n2(w.length, 2), k += n2(E.length, 2), { fileRecord: u.LOCAL_FILE_HEADER + k + w + E, dirRecord: u.CENTRAL_FILE_HEADER + n2(C, 2) + k + n2(b.length, 2) + "\0\0\0\0" + n2(O, 4) + n2(s2, 4) + w + E + b };
          }
          var i = t3("../utils"), o = t3("../stream/GenericWorker"), a = t3("../utf8"), c = t3("../crc32"), u = t3("../signature");
          function l(t4, e4, r4, n3) {
            o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = e4, this.zipPlatform = r4, this.encodeFileName = n3, this.streamFiles = t4, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
          }
          i.inherits(l, o), l.prototype.push = function(t4) {
            var e4 = t4.meta.percent || 0, r4 = this.entriesCount, n3 = this._sources.length;
            this.accumulate ? this.contentBuffer.push(t4) : (this.bytesWritten += t4.data.length, o.prototype.push.call(this, { data: t4.data, meta: { currentFile: this.currentFile, percent: r4 ? (e4 + 100 * (r4 - n3 - 1)) / r4 : 100 } }));
          }, l.prototype.openedSource = function(t4) {
            this.currentSourceOffset = this.bytesWritten, this.currentFile = t4.file.name;
            var e4 = this.streamFiles && !t4.file.dir;
            if (e4) {
              var r4 = s(t4, e4, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
              this.push({ data: r4.fileRecord, meta: { percent: 0 } });
            } else
              this.accumulate = true;
          }, l.prototype.closedSource = function(t4) {
            this.accumulate = false;
            var e4 = this.streamFiles && !t4.file.dir, r4 = s(t4, e4, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            if (this.dirRecords.push(r4.dirRecord), e4)
              this.push({ data: function(t5) {
                return u.DATA_DESCRIPTOR + n2(t5.crc32, 4) + n2(t5.compressedSize, 4) + n2(t5.uncompressedSize, 4);
              }(t4), meta: { percent: 100 } });
            else
              for (this.push({ data: r4.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
                this.push(this.contentBuffer.shift());
            this.currentFile = null;
          }, l.prototype.flush = function() {
            for (var t4 = this.bytesWritten, e4 = 0; e4 < this.dirRecords.length; e4++)
              this.push({ data: this.dirRecords[e4], meta: { percent: 100 } });
            var r4 = this.bytesWritten - t4, s2 = function(t5, e5, r5, s3, o2) {
              var a2 = i.transformTo("string", o2(s3));
              return u.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n2(t5, 2) + n2(t5, 2) + n2(e5, 4) + n2(r5, 4) + n2(a2.length, 2) + a2;
            }(this.dirRecords.length, r4, t4, this.zipComment, this.encodeFileName);
            this.push({ data: s2, meta: { percent: 100 } });
          }, l.prototype.prepareNextSource = function() {
            this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
          }, l.prototype.registerPrevious = function(t4) {
            this._sources.push(t4);
            var e4 = this;
            return t4.on("data", function(t5) {
              e4.processChunk(t5);
            }), t4.on("end", function() {
              e4.closedSource(e4.previous.streamInfo), e4._sources.length ? e4.prepareNextSource() : e4.end();
            }), t4.on("error", function(t5) {
              e4.error(t5);
            }), this;
          }, l.prototype.resume = function() {
            return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
          }, l.prototype.error = function(t4) {
            var e4 = this._sources;
            if (!o.prototype.error.call(this, t4))
              return false;
            for (var r4 = 0; r4 < e4.length; r4++)
              try {
                e4[r4].error(t4);
              } catch (t5) {
              }
            return true;
          }, l.prototype.lock = function() {
            o.prototype.lock.call(this);
            for (var t4 = this._sources, e4 = 0; e4 < t4.length; e4++)
              t4[e4].lock();
          }, e3.exports = l;
        }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(t3, e3, r3) {
          var n2 = t3("../compressions"), s = t3("./ZipFileWorker");
          r3.generateWorker = function(t4, e4, r4) {
            var i = new s(e4.streamFiles, r4, e4.platform, e4.encodeFileName), o = 0;
            try {
              t4.forEach(function(t5, r5) {
                o++;
                var s2 = function(t6, e5) {
                  var r6 = t6 || e5, s3 = n2[r6];
                  if (!s3)
                    throw new Error(r6 + " is not a valid compression method !");
                  return s3;
                }(r5.options.compression, e4.compression), a = r5.options.compressionOptions || e4.compressionOptions || {}, c = r5.dir, u = r5.date;
                r5._compressWorker(s2, a).withStreamInfo("file", { name: t5, dir: c, date: u, comment: r5.comment || "", unixPermissions: r5.unixPermissions, dosPermissions: r5.dosPermissions }).pipe(i);
              }), i.entriesCount = o;
            } catch (t5) {
              i.error(t5);
            }
            return i;
          };
        }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(t3, e3, r3) {
          function n2() {
            if (!(this instanceof n2))
              return new n2();
            if (arguments.length)
              throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
            this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
              var t4 = new n2();
              for (var e4 in this)
                typeof this[e4] != "function" && (t4[e4] = this[e4]);
              return t4;
            };
          }
          (n2.prototype = t3("./object")).loadAsync = t3("./load"), n2.support = t3("./support"), n2.defaults = t3("./defaults"), n2.version = "3.7.1", n2.loadAsync = function(t4, e4) {
            return new n2().loadAsync(t4, e4);
          }, n2.external = t3("./external"), e3.exports = n2;
        }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(t3, e3, r3) {
          var n2 = t3("./utils"), s = t3("./external"), i = t3("./utf8"), o = t3("./zipEntries"), a = t3("./stream/Crc32Probe"), c = t3("./nodejsUtils");
          function u(t4) {
            return new s.Promise(function(e4, r4) {
              var n3 = t4.decompressed.getContentWorker().pipe(new a());
              n3.on("error", function(t5) {
                r4(t5);
              }).on("end", function() {
                n3.streamInfo.crc32 !== t4.decompressed.crc32 ? r4(new Error("Corrupted zip : CRC32 mismatch")) : e4();
              }).resume();
            });
          }
          e3.exports = function(t4, e4) {
            var r4 = this;
            return e4 = n2.extend(e4 || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: i.utf8decode }), c.isNode && c.isStream(t4) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n2.prepareContent("the loaded zip file", t4, true, e4.optimizedBinaryString, e4.base64).then(function(t5) {
              var r5 = new o(e4);
              return r5.load(t5), r5;
            }).then(function(t5) {
              var r5 = [s.Promise.resolve(t5)], n3 = t5.files;
              if (e4.checkCRC32)
                for (var i2 = 0; i2 < n3.length; i2++)
                  r5.push(u(n3[i2]));
              return s.Promise.all(r5);
            }).then(function(t5) {
              for (var n3 = t5.shift(), s2 = n3.files, i2 = 0; i2 < s2.length; i2++) {
                var o2 = s2[i2];
                r4.file(o2.fileNameStr, o2.decompressed, { binary: true, optimizedBinaryString: true, date: o2.date, dir: o2.dir, comment: o2.fileCommentStr.length ? o2.fileCommentStr : null, unixPermissions: o2.unixPermissions, dosPermissions: o2.dosPermissions, createFolders: e4.createFolders });
              }
              return n3.zipComment.length && (r4.comment = n3.zipComment), r4;
            });
          };
        }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(t3, e3, r3) {
          var n2 = t3("../utils"), s = t3("../stream/GenericWorker");
          function i(t4, e4) {
            s.call(this, "Nodejs stream input adapter for " + t4), this._upstreamEnded = false, this._bindStream(e4);
          }
          n2.inherits(i, s), i.prototype._bindStream = function(t4) {
            var e4 = this;
            (this._stream = t4).pause(), t4.on("data", function(t5) {
              e4.push({ data: t5, meta: { percent: 0 } });
            }).on("error", function(t5) {
              e4.isPaused ? this.generatedError = t5 : e4.error(t5);
            }).on("end", function() {
              e4.isPaused ? e4._upstreamEnded = true : e4.end();
            });
          }, i.prototype.pause = function() {
            return !!s.prototype.pause.call(this) && (this._stream.pause(), true);
          }, i.prototype.resume = function() {
            return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
          }, e3.exports = i;
        }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(t3, e3, r3) {
          var n2 = t3("readable-stream").Readable;
          function s(t4, e4, r4) {
            n2.call(this, e4), this._helper = t4;
            var s2 = this;
            t4.on("data", function(t5, e5) {
              s2.push(t5) || s2._helper.pause(), r4 && r4(e5);
            }).on("error", function(t5) {
              s2.emit("error", t5);
            }).on("end", function() {
              s2.push(null);
            });
          }
          t3("../utils").inherits(s, n2), s.prototype._read = function() {
            this._helper.resume();
          }, e3.exports = s;
        }, { "../utils": 32, "readable-stream": 16 }], 14: [function(t3, e3, r3) {
          e3.exports = { isNode: typeof Buffer != "undefined", newBufferFrom: function(t4, e4) {
            if (Buffer.from && Buffer.from !== Uint8Array.from)
              return Buffer.from(t4, e4);
            if (typeof t4 == "number")
              throw new Error('The "data" argument must not be a number');
            return new Buffer(t4, e4);
          }, allocBuffer: function(t4) {
            if (Buffer.alloc)
              return Buffer.alloc(t4);
            var e4 = new Buffer(t4);
            return e4.fill(0), e4;
          }, isBuffer: function(t4) {
            return Buffer.isBuffer(t4);
          }, isStream: function(t4) {
            return t4 && typeof t4.on == "function" && typeof t4.pause == "function" && typeof t4.resume == "function";
          } };
        }, {}], 15: [function(t3, e3, r3) {
          function n2(t4, e4, r4) {
            var n3, s2 = i.getTypeOf(e4), a2 = i.extend(r4 || {}, c);
            a2.date = a2.date || new Date(), a2.compression !== null && (a2.compression = a2.compression.toUpperCase()), typeof a2.unixPermissions == "string" && (a2.unixPermissions = parseInt(a2.unixPermissions, 8)), a2.unixPermissions && 16384 & a2.unixPermissions && (a2.dir = true), a2.dosPermissions && 16 & a2.dosPermissions && (a2.dir = true), a2.dir && (t4 = m(t4)), a2.createFolders && (n3 = f(t4)) && w.call(this, n3, true);
            var h2 = s2 === "string" && a2.binary === false && a2.base64 === false;
            r4 && r4.binary !== void 0 || (a2.binary = !h2), (e4 instanceof u && e4.uncompressedSize === 0 || a2.dir || !e4 || e4.length === 0) && (a2.base64 = false, a2.binary = true, e4 = "", a2.compression = "STORE", s2 = "string");
            var g2;
            g2 = e4 instanceof u || e4 instanceof o ? e4 : p2.isNode && p2.isStream(e4) ? new d(t4, e4) : i.prepareContent(t4, e4, a2.binary, a2.optimizedBinaryString, a2.base64);
            var y2 = new l(t4, g2, a2);
            this.files[t4] = y2;
          }
          var s = t3("./utf8"), i = t3("./utils"), o = t3("./stream/GenericWorker"), a = t3("./stream/StreamHelper"), c = t3("./defaults"), u = t3("./compressedObject"), l = t3("./zipObject"), h = t3("./generate"), p2 = t3("./nodejsUtils"), d = t3("./nodejs/NodejsStreamInputAdapter"), f = function(t4) {
            t4.slice(-1) === "/" && (t4 = t4.substring(0, t4.length - 1));
            var e4 = t4.lastIndexOf("/");
            return 0 < e4 ? t4.substring(0, e4) : "";
          }, m = function(t4) {
            return t4.slice(-1) !== "/" && (t4 += "/"), t4;
          }, w = function(t4, e4) {
            return e4 = e4 !== void 0 ? e4 : c.createFolders, t4 = m(t4), this.files[t4] || n2.call(this, t4, null, { dir: true, createFolders: e4 }), this.files[t4];
          };
          function g(t4) {
            return Object.prototype.toString.call(t4) === "[object RegExp]";
          }
          var y = { load: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, forEach: function(t4) {
            var e4, r4, n3;
            for (e4 in this.files)
              n3 = this.files[e4], (r4 = e4.slice(this.root.length, e4.length)) && e4.slice(0, this.root.length) === this.root && t4(r4, n3);
          }, filter: function(t4) {
            var e4 = [];
            return this.forEach(function(r4, n3) {
              t4(r4, n3) && e4.push(n3);
            }), e4;
          }, file: function(t4, e4, r4) {
            if (arguments.length !== 1)
              return t4 = this.root + t4, n2.call(this, t4, e4, r4), this;
            if (g(t4)) {
              var s2 = t4;
              return this.filter(function(t5, e5) {
                return !e5.dir && s2.test(t5);
              });
            }
            var i2 = this.files[this.root + t4];
            return i2 && !i2.dir ? i2 : null;
          }, folder: function(t4) {
            if (!t4)
              return this;
            if (g(t4))
              return this.filter(function(e5, r5) {
                return r5.dir && t4.test(e5);
              });
            var e4 = this.root + t4, r4 = w.call(this, e4), n3 = this.clone();
            return n3.root = r4.name, n3;
          }, remove: function(t4) {
            t4 = this.root + t4;
            var e4 = this.files[t4];
            if (e4 || (t4.slice(-1) !== "/" && (t4 += "/"), e4 = this.files[t4]), e4 && !e4.dir)
              delete this.files[t4];
            else
              for (var r4 = this.filter(function(e5, r5) {
                return r5.name.slice(0, t4.length) === t4;
              }), n3 = 0; n3 < r4.length; n3++)
                delete this.files[r4[n3].name];
            return this;
          }, generate: function(t4) {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, generateInternalStream: function(t4) {
            var e4, r4 = {};
            try {
              if ((r4 = i.extend(t4 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = r4.type.toLowerCase(), r4.compression = r4.compression.toUpperCase(), r4.type === "binarystring" && (r4.type = "string"), !r4.type)
                throw new Error("No output type specified.");
              i.checkSupport(r4.type), r4.platform !== "darwin" && r4.platform !== "freebsd" && r4.platform !== "linux" && r4.platform !== "sunos" || (r4.platform = "UNIX"), r4.platform === "win32" && (r4.platform = "DOS");
              var n3 = r4.comment || this.comment || "";
              e4 = h.generateWorker(this, r4, n3);
            } catch (t5) {
              (e4 = new o("error")).error(t5);
            }
            return new a(e4, r4.type || "string", r4.mimeType);
          }, generateAsync: function(t4, e4) {
            return this.generateInternalStream(t4).accumulate(e4);
          }, generateNodeStream: function(t4, e4) {
            return (t4 = t4 || {}).type || (t4.type = "nodebuffer"), this.generateInternalStream(t4).toNodejsStream(e4);
          } };
          e3.exports = y;
        }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(t3, e3, r3) {
          e3.exports = t3("stream");
        }, { stream: void 0 }], 17: [function(t3, e3, r3) {
          var n2 = t3("./DataReader");
          function s(t4) {
            n2.call(this, t4);
            for (var e4 = 0; e4 < this.data.length; e4++)
              t4[e4] = 255 & t4[e4];
          }
          t3("../utils").inherits(s, n2), s.prototype.byteAt = function(t4) {
            return this.data[this.zero + t4];
          }, s.prototype.lastIndexOfSignature = function(t4) {
            for (var e4 = t4.charCodeAt(0), r4 = t4.charCodeAt(1), n3 = t4.charCodeAt(2), s2 = t4.charCodeAt(3), i = this.length - 4; 0 <= i; --i)
              if (this.data[i] === e4 && this.data[i + 1] === r4 && this.data[i + 2] === n3 && this.data[i + 3] === s2)
                return i - this.zero;
            return -1;
          }, s.prototype.readAndCheckSignature = function(t4) {
            var e4 = t4.charCodeAt(0), r4 = t4.charCodeAt(1), n3 = t4.charCodeAt(2), s2 = t4.charCodeAt(3), i = this.readData(4);
            return e4 === i[0] && r4 === i[1] && n3 === i[2] && s2 === i[3];
          }, s.prototype.readData = function(t4) {
            if (this.checkOffset(t4), t4 === 0)
              return [];
            var e4 = this.data.slice(this.zero + this.index, this.zero + this.index + t4);
            return this.index += t4, e4;
          }, e3.exports = s;
        }, { "../utils": 32, "./DataReader": 18 }], 18: [function(t3, e3, r3) {
          var n2 = t3("../utils");
          function s(t4) {
            this.data = t4, this.length = t4.length, this.index = 0, this.zero = 0;
          }
          s.prototype = { checkOffset: function(t4) {
            this.checkIndex(this.index + t4);
          }, checkIndex: function(t4) {
            if (this.length < this.zero + t4 || t4 < 0)
              throw new Error("End of data reached (data length = " + this.length + ", asked index = " + t4 + "). Corrupted zip ?");
          }, setIndex: function(t4) {
            this.checkIndex(t4), this.index = t4;
          }, skip: function(t4) {
            this.setIndex(this.index + t4);
          }, byteAt: function(t4) {
          }, readInt: function(t4) {
            var e4, r4 = 0;
            for (this.checkOffset(t4), e4 = this.index + t4 - 1; e4 >= this.index; e4--)
              r4 = (r4 << 8) + this.byteAt(e4);
            return this.index += t4, r4;
          }, readString: function(t4) {
            return n2.transformTo("string", this.readData(t4));
          }, readData: function(t4) {
          }, lastIndexOfSignature: function(t4) {
          }, readAndCheckSignature: function(t4) {
          }, readDate: function() {
            var t4 = this.readInt(4);
            return new Date(Date.UTC(1980 + (t4 >> 25 & 127), (t4 >> 21 & 15) - 1, t4 >> 16 & 31, t4 >> 11 & 31, t4 >> 5 & 63, (31 & t4) << 1));
          } }, e3.exports = s;
        }, { "../utils": 32 }], 19: [function(t3, e3, r3) {
          var n2 = t3("./Uint8ArrayReader");
          function s(t4) {
            n2.call(this, t4);
          }
          t3("../utils").inherits(s, n2), s.prototype.readData = function(t4) {
            this.checkOffset(t4);
            var e4 = this.data.slice(this.zero + this.index, this.zero + this.index + t4);
            return this.index += t4, e4;
          }, e3.exports = s;
        }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(t3, e3, r3) {
          var n2 = t3("./DataReader");
          function s(t4) {
            n2.call(this, t4);
          }
          t3("../utils").inherits(s, n2), s.prototype.byteAt = function(t4) {
            return this.data.charCodeAt(this.zero + t4);
          }, s.prototype.lastIndexOfSignature = function(t4) {
            return this.data.lastIndexOf(t4) - this.zero;
          }, s.prototype.readAndCheckSignature = function(t4) {
            return t4 === this.readData(4);
          }, s.prototype.readData = function(t4) {
            this.checkOffset(t4);
            var e4 = this.data.slice(this.zero + this.index, this.zero + this.index + t4);
            return this.index += t4, e4;
          }, e3.exports = s;
        }, { "../utils": 32, "./DataReader": 18 }], 21: [function(t3, e3, r3) {
          var n2 = t3("./ArrayReader");
          function s(t4) {
            n2.call(this, t4);
          }
          t3("../utils").inherits(s, n2), s.prototype.readData = function(t4) {
            if (this.checkOffset(t4), t4 === 0)
              return new Uint8Array(0);
            var e4 = this.data.subarray(this.zero + this.index, this.zero + this.index + t4);
            return this.index += t4, e4;
          }, e3.exports = s;
        }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(t3, e3, r3) {
          var n2 = t3("../utils"), s = t3("../support"), i = t3("./ArrayReader"), o = t3("./StringReader"), a = t3("./NodeBufferReader"), c = t3("./Uint8ArrayReader");
          e3.exports = function(t4) {
            var e4 = n2.getTypeOf(t4);
            return n2.checkSupport(e4), e4 !== "string" || s.uint8array ? e4 === "nodebuffer" ? new a(t4) : s.uint8array ? new c(n2.transformTo("uint8array", t4)) : new i(n2.transformTo("array", t4)) : new o(t4);
          };
        }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(t3, e3, r3) {
          r3.LOCAL_FILE_HEADER = "PK", r3.CENTRAL_FILE_HEADER = "PK", r3.CENTRAL_DIRECTORY_END = "PK", r3.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r3.ZIP64_CENTRAL_DIRECTORY_END = "PK", r3.DATA_DESCRIPTOR = "PK\x07\b";
        }, {}], 24: [function(t3, e3, r3) {
          var n2 = t3("./GenericWorker"), s = t3("../utils");
          function i(t4) {
            n2.call(this, "ConvertWorker to " + t4), this.destType = t4;
          }
          s.inherits(i, n2), i.prototype.processChunk = function(t4) {
            this.push({ data: s.transformTo(this.destType, t4.data), meta: t4.meta });
          }, e3.exports = i;
        }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(t3, e3, r3) {
          var n2 = t3("./GenericWorker"), s = t3("../crc32");
          function i() {
            n2.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
          }
          t3("../utils").inherits(i, n2), i.prototype.processChunk = function(t4) {
            this.streamInfo.crc32 = s(t4.data, this.streamInfo.crc32 || 0), this.push(t4);
          }, e3.exports = i;
        }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(t3, e3, r3) {
          var n2 = t3("../utils"), s = t3("./GenericWorker");
          function i(t4) {
            s.call(this, "DataLengthProbe for " + t4), this.propName = t4, this.withStreamInfo(t4, 0);
          }
          n2.inherits(i, s), i.prototype.processChunk = function(t4) {
            if (t4) {
              var e4 = this.streamInfo[this.propName] || 0;
              this.streamInfo[this.propName] = e4 + t4.data.length;
            }
            s.prototype.processChunk.call(this, t4);
          }, e3.exports = i;
        }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(t3, e3, r3) {
          var n2 = t3("../utils"), s = t3("./GenericWorker");
          function i(t4) {
            s.call(this, "DataWorker");
            var e4 = this;
            this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, t4.then(function(t5) {
              e4.dataIsReady = true, e4.data = t5, e4.max = t5 && t5.length || 0, e4.type = n2.getTypeOf(t5), e4.isPaused || e4._tickAndRepeat();
            }, function(t5) {
              e4.error(t5);
            });
          }
          n2.inherits(i, s), i.prototype.cleanUp = function() {
            s.prototype.cleanUp.call(this), this.data = null;
          }, i.prototype.resume = function() {
            return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n2.delay(this._tickAndRepeat, [], this)), true);
          }, i.prototype._tickAndRepeat = function() {
            this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n2.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
          }, i.prototype._tick = function() {
            if (this.isPaused || this.isFinished)
              return false;
            var t4 = null, e4 = Math.min(this.max, this.index + 16384);
            if (this.index >= this.max)
              return this.end();
            switch (this.type) {
              case "string":
                t4 = this.data.substring(this.index, e4);
                break;
              case "uint8array":
                t4 = this.data.subarray(this.index, e4);
                break;
              case "array":
              case "nodebuffer":
                t4 = this.data.slice(this.index, e4);
            }
            return this.index = e4, this.push({ data: t4, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
          }, e3.exports = i;
        }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(t3, e3, r3) {
          function n2(t4) {
            this.name = t4 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
          }
          n2.prototype = { push: function(t4) {
            this.emit("data", t4);
          }, end: function() {
            if (this.isFinished)
              return false;
            this.flush();
            try {
              this.emit("end"), this.cleanUp(), this.isFinished = true;
            } catch (t4) {
              this.emit("error", t4);
            }
            return true;
          }, error: function(t4) {
            return !this.isFinished && (this.isPaused ? this.generatedError = t4 : (this.isFinished = true, this.emit("error", t4), this.previous && this.previous.error(t4), this.cleanUp()), true);
          }, on: function(t4, e4) {
            return this._listeners[t4].push(e4), this;
          }, cleanUp: function() {
            this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
          }, emit: function(t4, e4) {
            if (this._listeners[t4])
              for (var r4 = 0; r4 < this._listeners[t4].length; r4++)
                this._listeners[t4][r4].call(this, e4);
          }, pipe: function(t4) {
            return t4.registerPrevious(this);
          }, registerPrevious: function(t4) {
            if (this.isLocked)
              throw new Error("The stream '" + this + "' has already been used.");
            this.streamInfo = t4.streamInfo, this.mergeStreamInfo(), this.previous = t4;
            var e4 = this;
            return t4.on("data", function(t5) {
              e4.processChunk(t5);
            }), t4.on("end", function() {
              e4.end();
            }), t4.on("error", function(t5) {
              e4.error(t5);
            }), this;
          }, pause: function() {
            return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
          }, resume: function() {
            if (!this.isPaused || this.isFinished)
              return false;
            var t4 = this.isPaused = false;
            return this.generatedError && (this.error(this.generatedError), t4 = true), this.previous && this.previous.resume(), !t4;
          }, flush: function() {
          }, processChunk: function(t4) {
            this.push(t4);
          }, withStreamInfo: function(t4, e4) {
            return this.extraStreamInfo[t4] = e4, this.mergeStreamInfo(), this;
          }, mergeStreamInfo: function() {
            for (var t4 in this.extraStreamInfo)
              this.extraStreamInfo.hasOwnProperty(t4) && (this.streamInfo[t4] = this.extraStreamInfo[t4]);
          }, lock: function() {
            if (this.isLocked)
              throw new Error("The stream '" + this + "' has already been used.");
            this.isLocked = true, this.previous && this.previous.lock();
          }, toString: function() {
            var t4 = "Worker " + this.name;
            return this.previous ? this.previous + " -> " + t4 : t4;
          } }, e3.exports = n2;
        }, {}], 29: [function(t3, e3, r3) {
          var n2 = t3("../utils"), s = t3("./ConvertWorker"), i = t3("./GenericWorker"), o = t3("../base64"), a = t3("../support"), c = t3("../external"), u = null;
          if (a.nodestream)
            try {
              u = t3("../nodejs/NodejsStreamOutputAdapter");
            } catch (t4) {
            }
          function l(t4, e4, r4) {
            var o2 = e4;
            switch (e4) {
              case "blob":
              case "arraybuffer":
                o2 = "uint8array";
                break;
              case "base64":
                o2 = "string";
            }
            try {
              this._internalType = o2, this._outputType = e4, this._mimeType = r4, n2.checkSupport(o2), this._worker = t4.pipe(new s(o2)), t4.lock();
            } catch (t5) {
              this._worker = new i("error"), this._worker.error(t5);
            }
          }
          l.prototype = { accumulate: function(t4) {
            return function(t5, e4) {
              return new c.Promise(function(r4, s2) {
                var i2 = [], a2 = t5._internalType, c2 = t5._outputType, u2 = t5._mimeType;
                t5.on("data", function(t6, r5) {
                  i2.push(t6), e4 && e4(r5);
                }).on("error", function(t6) {
                  i2 = [], s2(t6);
                }).on("end", function() {
                  try {
                    var t6 = function(t7, e5, r5) {
                      switch (t7) {
                        case "blob":
                          return n2.newBlob(n2.transformTo("arraybuffer", e5), r5);
                        case "base64":
                          return o.encode(e5);
                        default:
                          return n2.transformTo(t7, e5);
                      }
                    }(c2, function(t7, e5) {
                      var r5, n3 = 0, s3 = null, i3 = 0;
                      for (r5 = 0; r5 < e5.length; r5++)
                        i3 += e5[r5].length;
                      switch (t7) {
                        case "string":
                          return e5.join("");
                        case "array":
                          return Array.prototype.concat.apply([], e5);
                        case "uint8array":
                          for (s3 = new Uint8Array(i3), r5 = 0; r5 < e5.length; r5++)
                            s3.set(e5[r5], n3), n3 += e5[r5].length;
                          return s3;
                        case "nodebuffer":
                          return Buffer.concat(e5);
                        default:
                          throw new Error("concat : unsupported type '" + t7 + "'");
                      }
                    }(a2, i2), u2);
                    r4(t6);
                  } catch (t7) {
                    s2(t7);
                  }
                  i2 = [];
                }).resume();
              });
            }(this, t4);
          }, on: function(t4, e4) {
            var r4 = this;
            return t4 === "data" ? this._worker.on(t4, function(t5) {
              e4.call(r4, t5.data, t5.meta);
            }) : this._worker.on(t4, function() {
              n2.delay(e4, arguments, r4);
            }), this;
          }, resume: function() {
            return n2.delay(this._worker.resume, [], this._worker), this;
          }, pause: function() {
            return this._worker.pause(), this;
          }, toNodejsStream: function(t4) {
            if (n2.checkSupport("nodestream"), this._outputType !== "nodebuffer")
              throw new Error(this._outputType + " is not supported by this method");
            return new u(this, { objectMode: this._outputType !== "nodebuffer" }, t4);
          } }, e3.exports = l;
        }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(t3, e3, r3) {
          if (r3.base64 = true, r3.array = true, r3.string = true, r3.arraybuffer = typeof ArrayBuffer != "undefined" && typeof Uint8Array != "undefined", r3.nodebuffer = typeof Buffer != "undefined", r3.uint8array = typeof Uint8Array != "undefined", typeof ArrayBuffer == "undefined")
            r3.blob = false;
          else {
            var n2 = new ArrayBuffer(0);
            try {
              r3.blob = new Blob([n2], { type: "application/zip" }).size === 0;
            } catch (t4) {
              try {
                var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                s.append(n2), r3.blob = s.getBlob("application/zip").size === 0;
              } catch (t5) {
                r3.blob = false;
              }
            }
          }
          try {
            r3.nodestream = !!t3("readable-stream").Readable;
          } catch (t4) {
            r3.nodestream = false;
          }
        }, { "readable-stream": 16 }], 31: [function(t3, e3, r3) {
          for (var n2 = t3("./utils"), s = t3("./support"), i = t3("./nodejsUtils"), o = t3("./stream/GenericWorker"), a = new Array(256), c = 0; c < 256; c++)
            a[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;
          function u() {
            o.call(this, "utf-8 decode"), this.leftOver = null;
          }
          function l() {
            o.call(this, "utf-8 encode");
          }
          a[254] = a[254] = 1, r3.utf8encode = function(t4) {
            return s.nodebuffer ? i.newBufferFrom(t4, "utf-8") : function(t5) {
              var e4, r4, n3, i2, o2, a2 = t5.length, c2 = 0;
              for (i2 = 0; i2 < a2; i2++)
                (64512 & (r4 = t5.charCodeAt(i2))) == 55296 && i2 + 1 < a2 && (64512 & (n3 = t5.charCodeAt(i2 + 1))) == 56320 && (r4 = 65536 + (r4 - 55296 << 10) + (n3 - 56320), i2++), c2 += r4 < 128 ? 1 : r4 < 2048 ? 2 : r4 < 65536 ? 3 : 4;
              for (e4 = s.uint8array ? new Uint8Array(c2) : new Array(c2), i2 = o2 = 0; o2 < c2; i2++)
                (64512 & (r4 = t5.charCodeAt(i2))) == 55296 && i2 + 1 < a2 && (64512 & (n3 = t5.charCodeAt(i2 + 1))) == 56320 && (r4 = 65536 + (r4 - 55296 << 10) + (n3 - 56320), i2++), r4 < 128 ? e4[o2++] = r4 : (r4 < 2048 ? e4[o2++] = 192 | r4 >>> 6 : (r4 < 65536 ? e4[o2++] = 224 | r4 >>> 12 : (e4[o2++] = 240 | r4 >>> 18, e4[o2++] = 128 | r4 >>> 12 & 63), e4[o2++] = 128 | r4 >>> 6 & 63), e4[o2++] = 128 | 63 & r4);
              return e4;
            }(t4);
          }, r3.utf8decode = function(t4) {
            return s.nodebuffer ? n2.transformTo("nodebuffer", t4).toString("utf-8") : function(t5) {
              var e4, r4, s2, i2, o2 = t5.length, c2 = new Array(2 * o2);
              for (e4 = r4 = 0; e4 < o2; )
                if ((s2 = t5[e4++]) < 128)
                  c2[r4++] = s2;
                else if (4 < (i2 = a[s2]))
                  c2[r4++] = 65533, e4 += i2 - 1;
                else {
                  for (s2 &= i2 === 2 ? 31 : i2 === 3 ? 15 : 7; 1 < i2 && e4 < o2; )
                    s2 = s2 << 6 | 63 & t5[e4++], i2--;
                  1 < i2 ? c2[r4++] = 65533 : s2 < 65536 ? c2[r4++] = s2 : (s2 -= 65536, c2[r4++] = 55296 | s2 >> 10 & 1023, c2[r4++] = 56320 | 1023 & s2);
                }
              return c2.length !== r4 && (c2.subarray ? c2 = c2.subarray(0, r4) : c2.length = r4), n2.applyFromCharCode(c2);
            }(t4 = n2.transformTo(s.uint8array ? "uint8array" : "array", t4));
          }, n2.inherits(u, o), u.prototype.processChunk = function(t4) {
            var e4 = n2.transformTo(s.uint8array ? "uint8array" : "array", t4.data);
            if (this.leftOver && this.leftOver.length) {
              if (s.uint8array) {
                var i2 = e4;
                (e4 = new Uint8Array(i2.length + this.leftOver.length)).set(this.leftOver, 0), e4.set(i2, this.leftOver.length);
              } else
                e4 = this.leftOver.concat(e4);
              this.leftOver = null;
            }
            var o2 = function(t5, e5) {
              var r4;
              for ((e5 = e5 || t5.length) > t5.length && (e5 = t5.length), r4 = e5 - 1; 0 <= r4 && (192 & t5[r4]) == 128; )
                r4--;
              return r4 < 0 || r4 === 0 ? e5 : r4 + a[t5[r4]] > e5 ? r4 : e5;
            }(e4), c2 = e4;
            o2 !== e4.length && (s.uint8array ? (c2 = e4.subarray(0, o2), this.leftOver = e4.subarray(o2, e4.length)) : (c2 = e4.slice(0, o2), this.leftOver = e4.slice(o2, e4.length))), this.push({ data: r3.utf8decode(c2), meta: t4.meta });
          }, u.prototype.flush = function() {
            this.leftOver && this.leftOver.length && (this.push({ data: r3.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
          }, r3.Utf8DecodeWorker = u, n2.inherits(l, o), l.prototype.processChunk = function(t4) {
            this.push({ data: r3.utf8encode(t4.data), meta: t4.meta });
          }, r3.Utf8EncodeWorker = l;
        }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(t3, e3, r3) {
          var n2 = t3("./support"), s = t3("./base64"), i = t3("./nodejsUtils"), o = t3("set-immediate-shim"), a = t3("./external");
          function c(t4) {
            return t4;
          }
          function u(t4, e4) {
            for (var r4 = 0; r4 < t4.length; ++r4)
              e4[r4] = 255 & t4.charCodeAt(r4);
            return e4;
          }
          r3.newBlob = function(t4, e4) {
            r3.checkSupport("blob");
            try {
              return new Blob([t4], { type: e4 });
            } catch (r4) {
              try {
                var n3 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                return n3.append(t4), n3.getBlob(e4);
              } catch (t5) {
                throw new Error("Bug : can't construct the Blob.");
              }
            }
          };
          var l = { stringifyByChunk: function(t4, e4, r4) {
            var n3 = [], s2 = 0, i2 = t4.length;
            if (i2 <= r4)
              return String.fromCharCode.apply(null, t4);
            for (; s2 < i2; )
              e4 === "array" || e4 === "nodebuffer" ? n3.push(String.fromCharCode.apply(null, t4.slice(s2, Math.min(s2 + r4, i2)))) : n3.push(String.fromCharCode.apply(null, t4.subarray(s2, Math.min(s2 + r4, i2)))), s2 += r4;
            return n3.join("");
          }, stringifyByChar: function(t4) {
            for (var e4 = "", r4 = 0; r4 < t4.length; r4++)
              e4 += String.fromCharCode(t4[r4]);
            return e4;
          }, applyCanBeUsed: { uint8array: function() {
            try {
              return n2.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
            } catch (t4) {
              return false;
            }
          }(), nodebuffer: function() {
            try {
              return n2.nodebuffer && String.fromCharCode.apply(null, i.allocBuffer(1)).length === 1;
            } catch (t4) {
              return false;
            }
          }() } };
          function h(t4) {
            var e4 = 65536, n3 = r3.getTypeOf(t4), s2 = true;
            if (n3 === "uint8array" ? s2 = l.applyCanBeUsed.uint8array : n3 === "nodebuffer" && (s2 = l.applyCanBeUsed.nodebuffer), s2)
              for (; 1 < e4; )
                try {
                  return l.stringifyByChunk(t4, n3, e4);
                } catch (t5) {
                  e4 = Math.floor(e4 / 2);
                }
            return l.stringifyByChar(t4);
          }
          function p2(t4, e4) {
            for (var r4 = 0; r4 < t4.length; r4++)
              e4[r4] = t4[r4];
            return e4;
          }
          r3.applyFromCharCode = h;
          var d = {};
          d.string = { string: c, array: function(t4) {
            return u(t4, new Array(t4.length));
          }, arraybuffer: function(t4) {
            return d.string.uint8array(t4).buffer;
          }, uint8array: function(t4) {
            return u(t4, new Uint8Array(t4.length));
          }, nodebuffer: function(t4) {
            return u(t4, i.allocBuffer(t4.length));
          } }, d.array = { string: h, array: c, arraybuffer: function(t4) {
            return new Uint8Array(t4).buffer;
          }, uint8array: function(t4) {
            return new Uint8Array(t4);
          }, nodebuffer: function(t4) {
            return i.newBufferFrom(t4);
          } }, d.arraybuffer = { string: function(t4) {
            return h(new Uint8Array(t4));
          }, array: function(t4) {
            return p2(new Uint8Array(t4), new Array(t4.byteLength));
          }, arraybuffer: c, uint8array: function(t4) {
            return new Uint8Array(t4);
          }, nodebuffer: function(t4) {
            return i.newBufferFrom(new Uint8Array(t4));
          } }, d.uint8array = { string: h, array: function(t4) {
            return p2(t4, new Array(t4.length));
          }, arraybuffer: function(t4) {
            return t4.buffer;
          }, uint8array: c, nodebuffer: function(t4) {
            return i.newBufferFrom(t4);
          } }, d.nodebuffer = { string: h, array: function(t4) {
            return p2(t4, new Array(t4.length));
          }, arraybuffer: function(t4) {
            return d.nodebuffer.uint8array(t4).buffer;
          }, uint8array: function(t4) {
            return p2(t4, new Uint8Array(t4.length));
          }, nodebuffer: c }, r3.transformTo = function(t4, e4) {
            if (e4 = e4 || "", !t4)
              return e4;
            r3.checkSupport(t4);
            var n3 = r3.getTypeOf(e4);
            return d[n3][t4](e4);
          }, r3.getTypeOf = function(t4) {
            return typeof t4 == "string" ? "string" : Object.prototype.toString.call(t4) === "[object Array]" ? "array" : n2.nodebuffer && i.isBuffer(t4) ? "nodebuffer" : n2.uint8array && t4 instanceof Uint8Array ? "uint8array" : n2.arraybuffer && t4 instanceof ArrayBuffer ? "arraybuffer" : void 0;
          }, r3.checkSupport = function(t4) {
            if (!n2[t4.toLowerCase()])
              throw new Error(t4 + " is not supported by this platform");
          }, r3.MAX_VALUE_16BITS = 65535, r3.MAX_VALUE_32BITS = -1, r3.pretty = function(t4) {
            var e4, r4, n3 = "";
            for (r4 = 0; r4 < (t4 || "").length; r4++)
              n3 += "\\x" + ((e4 = t4.charCodeAt(r4)) < 16 ? "0" : "") + e4.toString(16).toUpperCase();
            return n3;
          }, r3.delay = function(t4, e4, r4) {
            o(function() {
              t4.apply(r4 || null, e4 || []);
            });
          }, r3.inherits = function(t4, e4) {
            function r4() {
            }
            r4.prototype = e4.prototype, t4.prototype = new r4();
          }, r3.extend = function() {
            var t4, e4, r4 = {};
            for (t4 = 0; t4 < arguments.length; t4++)
              for (e4 in arguments[t4])
                arguments[t4].hasOwnProperty(e4) && r4[e4] === void 0 && (r4[e4] = arguments[t4][e4]);
            return r4;
          }, r3.prepareContent = function(t4, e4, i2, o2, c2) {
            return a.Promise.resolve(e4).then(function(t5) {
              return n2.blob && (t5 instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(t5)) !== -1) && typeof FileReader != "undefined" ? new a.Promise(function(e5, r4) {
                var n3 = new FileReader();
                n3.onload = function(t6) {
                  e5(t6.target.result);
                }, n3.onerror = function(t6) {
                  r4(t6.target.error);
                }, n3.readAsArrayBuffer(t5);
              }) : t5;
            }).then(function(e5) {
              var l2 = r3.getTypeOf(e5);
              return l2 ? (l2 === "arraybuffer" ? e5 = r3.transformTo("uint8array", e5) : l2 === "string" && (c2 ? e5 = s.decode(e5) : i2 && o2 !== true && (e5 = function(t5) {
                return u(t5, n2.uint8array ? new Uint8Array(t5.length) : new Array(t5.length));
              }(e5))), e5) : a.Promise.reject(new Error("Can't read the data of '" + t4 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
            });
          };
        }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, "set-immediate-shim": 54 }], 33: [function(t3, e3, r3) {
          var n2 = t3("./reader/readerFor"), s = t3("./utils"), i = t3("./signature"), o = t3("./zipEntry"), a = (t3("./utf8"), t3("./support"));
          function c(t4) {
            this.files = [], this.loadOptions = t4;
          }
          c.prototype = { checkSignature: function(t4) {
            if (!this.reader.readAndCheckSignature(t4)) {
              this.reader.index -= 4;
              var e4 = this.reader.readString(4);
              throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(e4) + ", expected " + s.pretty(t4) + ")");
            }
          }, isSignature: function(t4, e4) {
            var r4 = this.reader.index;
            this.reader.setIndex(t4);
            var n3 = this.reader.readString(4) === e4;
            return this.reader.setIndex(r4), n3;
          }, readBlockEndOfCentral: function() {
            this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
            var t4 = this.reader.readData(this.zipCommentLength), e4 = a.uint8array ? "uint8array" : "array", r4 = s.transformTo(e4, t4);
            this.zipComment = this.loadOptions.decodeFileName(r4);
          }, readBlockZip64EndOfCentral: function() {
            this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
            for (var t4, e4, r4, n3 = this.zip64EndOfCentralSize - 44; 0 < n3; )
              t4 = this.reader.readInt(2), e4 = this.reader.readInt(4), r4 = this.reader.readData(e4), this.zip64ExtensibleData[t4] = { id: t4, length: e4, value: r4 };
          }, readBlockZip64EndOfCentralLocator: function() {
            if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
              throw new Error("Multi-volumes zip are not supported");
          }, readLocalFiles: function() {
            var t4, e4;
            for (t4 = 0; t4 < this.files.length; t4++)
              e4 = this.files[t4], this.reader.setIndex(e4.localHeaderOffset), this.checkSignature(i.LOCAL_FILE_HEADER), e4.readLocalPart(this.reader), e4.handleUTF8(), e4.processAttributes();
          }, readCentralDir: function() {
            var t4;
            for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER); )
              (t4 = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(t4);
            if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
              throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
          }, readEndOfCentral: function() {
            var t4 = this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);
            if (t4 < 0)
              throw this.isSignature(0, i.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
            this.reader.setIndex(t4);
            var e4 = t4;
            if (this.checkSignature(i.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
              if (this.zip64 = true, (t4 = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
              if (this.reader.setIndex(t4), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, i.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
                throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
              this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
            }
            var r4 = this.centralDirOffset + this.centralDirSize;
            this.zip64 && (r4 += 20, r4 += 12 + this.zip64EndOfCentralSize);
            var n3 = e4 - r4;
            if (0 < n3)
              this.isSignature(e4, i.CENTRAL_FILE_HEADER) || (this.reader.zero = n3);
            else if (n3 < 0)
              throw new Error("Corrupted zip: missing " + Math.abs(n3) + " bytes.");
          }, prepareReader: function(t4) {
            this.reader = n2(t4);
          }, load: function(t4) {
            this.prepareReader(t4), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
          } }, e3.exports = c;
        }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utf8": 31, "./utils": 32, "./zipEntry": 34 }], 34: [function(t3, e3, r3) {
          var n2 = t3("./reader/readerFor"), s = t3("./utils"), i = t3("./compressedObject"), o = t3("./crc32"), a = t3("./utf8"), c = t3("./compressions"), u = t3("./support");
          function l(t4, e4) {
            this.options = t4, this.loadOptions = e4;
          }
          l.prototype = { isEncrypted: function() {
            return (1 & this.bitFlag) == 1;
          }, useUTF8: function() {
            return (2048 & this.bitFlag) == 2048;
          }, readLocalPart: function(t4) {
            var e4, r4;
            if (t4.skip(22), this.fileNameLength = t4.readInt(2), r4 = t4.readInt(2), this.fileName = t4.readData(this.fileNameLength), t4.skip(r4), this.compressedSize === -1 || this.uncompressedSize === -1)
              throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
            if ((e4 = function(t5) {
              for (var e5 in c)
                if (c.hasOwnProperty(e5) && c[e5].magic === t5)
                  return c[e5];
              return null;
            }(this.compressionMethod)) === null)
              throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
            this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, e4, t4.readData(this.compressedSize));
          }, readCentralPart: function(t4) {
            this.versionMadeBy = t4.readInt(2), t4.skip(2), this.bitFlag = t4.readInt(2), this.compressionMethod = t4.readString(2), this.date = t4.readDate(), this.crc32 = t4.readInt(4), this.compressedSize = t4.readInt(4), this.uncompressedSize = t4.readInt(4);
            var e4 = t4.readInt(2);
            if (this.extraFieldsLength = t4.readInt(2), this.fileCommentLength = t4.readInt(2), this.diskNumberStart = t4.readInt(2), this.internalFileAttributes = t4.readInt(2), this.externalFileAttributes = t4.readInt(4), this.localHeaderOffset = t4.readInt(4), this.isEncrypted())
              throw new Error("Encrypted zip are not supported");
            t4.skip(e4), this.readExtraFields(t4), this.parseZIP64ExtraField(t4), this.fileComment = t4.readData(this.fileCommentLength);
          }, processAttributes: function() {
            this.unixPermissions = null, this.dosPermissions = null;
            var t4 = this.versionMadeBy >> 8;
            this.dir = !!(16 & this.externalFileAttributes), t4 == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), t4 == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = true);
          }, parseZIP64ExtraField: function(t4) {
            if (this.extraFields[1]) {
              var e4 = n2(this.extraFields[1].value);
              this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e4.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e4.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e4.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e4.readInt(4));
            }
          }, readExtraFields: function(t4) {
            var e4, r4, n3, s2 = t4.index + this.extraFieldsLength;
            for (this.extraFields || (this.extraFields = {}); t4.index + 4 < s2; )
              e4 = t4.readInt(2), r4 = t4.readInt(2), n3 = t4.readData(r4), this.extraFields[e4] = { id: e4, length: r4, value: n3 };
            t4.setIndex(s2);
          }, handleUTF8: function() {
            var t4 = u.uint8array ? "uint8array" : "array";
            if (this.useUTF8())
              this.fileNameStr = a.utf8decode(this.fileName), this.fileCommentStr = a.utf8decode(this.fileComment);
            else {
              var e4 = this.findExtraFieldUnicodePath();
              if (e4 !== null)
                this.fileNameStr = e4;
              else {
                var r4 = s.transformTo(t4, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(r4);
              }
              var n3 = this.findExtraFieldUnicodeComment();
              if (n3 !== null)
                this.fileCommentStr = n3;
              else {
                var i2 = s.transformTo(t4, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(i2);
              }
            }
          }, findExtraFieldUnicodePath: function() {
            var t4 = this.extraFields[28789];
            if (t4) {
              var e4 = n2(t4.value);
              return e4.readInt(1) !== 1 || o(this.fileName) !== e4.readInt(4) ? null : a.utf8decode(e4.readData(t4.length - 5));
            }
            return null;
          }, findExtraFieldUnicodeComment: function() {
            var t4 = this.extraFields[25461];
            if (t4) {
              var e4 = n2(t4.value);
              return e4.readInt(1) !== 1 || o(this.fileComment) !== e4.readInt(4) ? null : a.utf8decode(e4.readData(t4.length - 5));
            }
            return null;
          } }, e3.exports = l;
        }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(t3, e3, r3) {
          function n2(t4, e4, r4) {
            this.name = t4, this.dir = r4.dir, this.date = r4.date, this.comment = r4.comment, this.unixPermissions = r4.unixPermissions, this.dosPermissions = r4.dosPermissions, this._data = e4, this._dataBinary = r4.binary, this.options = { compression: r4.compression, compressionOptions: r4.compressionOptions };
          }
          var s = t3("./stream/StreamHelper"), i = t3("./stream/DataWorker"), o = t3("./utf8"), a = t3("./compressedObject"), c = t3("./stream/GenericWorker");
          n2.prototype = { internalStream: function(t4) {
            var e4 = null, r4 = "string";
            try {
              if (!t4)
                throw new Error("No output type specified.");
              var n3 = (r4 = t4.toLowerCase()) === "string" || r4 === "text";
              r4 !== "binarystring" && r4 !== "text" || (r4 = "string"), e4 = this._decompressWorker();
              var i2 = !this._dataBinary;
              i2 && !n3 && (e4 = e4.pipe(new o.Utf8EncodeWorker())), !i2 && n3 && (e4 = e4.pipe(new o.Utf8DecodeWorker()));
            } catch (t5) {
              (e4 = new c("error")).error(t5);
            }
            return new s(e4, r4, "");
          }, async: function(t4, e4) {
            return this.internalStream(t4).accumulate(e4);
          }, nodeStream: function(t4, e4) {
            return this.internalStream(t4 || "nodebuffer").toNodejsStream(e4);
          }, _compressWorker: function(t4, e4) {
            if (this._data instanceof a && this._data.compression.magic === t4.magic)
              return this._data.getCompressedWorker();
            var r4 = this._decompressWorker();
            return this._dataBinary || (r4 = r4.pipe(new o.Utf8EncodeWorker())), a.createWorkerFrom(r4, t4, e4);
          }, _decompressWorker: function() {
            return this._data instanceof a ? this._data.getContentWorker() : this._data instanceof c ? this._data : new i(this._data);
          } };
          for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, h = 0; h < u.length; h++)
            n2.prototype[u[h]] = l;
          e3.exports = n2;
        }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(t3, e3, n2) {
          (function(t4) {
            var r3, n3, s = t4.MutationObserver || t4.WebKitMutationObserver;
            if (s) {
              var i = 0, o = new s(l), a = t4.document.createTextNode("");
              o.observe(a, { characterData: true }), r3 = function() {
                a.data = i = ++i % 2;
              };
            } else if (t4.setImmediate || t4.MessageChannel === void 0)
              r3 = "document" in t4 && "onreadystatechange" in t4.document.createElement("script") ? function() {
                var e4 = t4.document.createElement("script");
                e4.onreadystatechange = function() {
                  l(), e4.onreadystatechange = null, e4.parentNode.removeChild(e4), e4 = null;
                }, t4.document.documentElement.appendChild(e4);
              } : function() {
                setTimeout(l, 0);
              };
            else {
              var c = new t4.MessageChannel();
              c.port1.onmessage = l, r3 = function() {
                c.port2.postMessage(0);
              };
            }
            var u = [];
            function l() {
              var t5, e4;
              n3 = true;
              for (var r4 = u.length; r4; ) {
                for (e4 = u, u = [], t5 = -1; ++t5 < r4; )
                  e4[t5]();
                r4 = u.length;
              }
              n3 = false;
            }
            e3.exports = function(t5) {
              u.push(t5) !== 1 || n3 || r3();
            };
          }).call(this, r2.g !== void 0 ? r2.g : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {});
        }, {}], 37: [function(t3, e3, r3) {
          var n2 = t3("immediate");
          function s() {
          }
          var i = {}, o = ["REJECTED"], a = ["FULFILLED"], c = ["PENDING"];
          function u(t4) {
            if (typeof t4 != "function")
              throw new TypeError("resolver must be a function");
            this.state = c, this.queue = [], this.outcome = void 0, t4 !== s && d(this, t4);
          }
          function l(t4, e4, r4) {
            this.promise = t4, typeof e4 == "function" && (this.onFulfilled = e4, this.callFulfilled = this.otherCallFulfilled), typeof r4 == "function" && (this.onRejected = r4, this.callRejected = this.otherCallRejected);
          }
          function h(t4, e4, r4) {
            n2(function() {
              var n3;
              try {
                n3 = e4(r4);
              } catch (n4) {
                return i.reject(t4, n4);
              }
              n3 === t4 ? i.reject(t4, new TypeError("Cannot resolve promise with itself")) : i.resolve(t4, n3);
            });
          }
          function p2(t4) {
            var e4 = t4 && t4.then;
            if (t4 && (typeof t4 == "object" || typeof t4 == "function") && typeof e4 == "function")
              return function() {
                e4.apply(t4, arguments);
              };
          }
          function d(t4, e4) {
            var r4 = false;
            function n3(e5) {
              r4 || (r4 = true, i.reject(t4, e5));
            }
            function s2(e5) {
              r4 || (r4 = true, i.resolve(t4, e5));
            }
            var o2 = f(function() {
              e4(s2, n3);
            });
            o2.status === "error" && n3(o2.value);
          }
          function f(t4, e4) {
            var r4 = {};
            try {
              r4.value = t4(e4), r4.status = "success";
            } catch (t5) {
              r4.status = "error", r4.value = t5;
            }
            return r4;
          }
          (e3.exports = u).prototype.finally = function(t4) {
            if (typeof t4 != "function")
              return this;
            var e4 = this.constructor;
            return this.then(function(r4) {
              return e4.resolve(t4()).then(function() {
                return r4;
              });
            }, function(r4) {
              return e4.resolve(t4()).then(function() {
                throw r4;
              });
            });
          }, u.prototype.catch = function(t4) {
            return this.then(null, t4);
          }, u.prototype.then = function(t4, e4) {
            if (typeof t4 != "function" && this.state === a || typeof e4 != "function" && this.state === o)
              return this;
            var r4 = new this.constructor(s);
            return this.state !== c ? h(r4, this.state === a ? t4 : e4, this.outcome) : this.queue.push(new l(r4, t4, e4)), r4;
          }, l.prototype.callFulfilled = function(t4) {
            i.resolve(this.promise, t4);
          }, l.prototype.otherCallFulfilled = function(t4) {
            h(this.promise, this.onFulfilled, t4);
          }, l.prototype.callRejected = function(t4) {
            i.reject(this.promise, t4);
          }, l.prototype.otherCallRejected = function(t4) {
            h(this.promise, this.onRejected, t4);
          }, i.resolve = function(t4, e4) {
            var r4 = f(p2, e4);
            if (r4.status === "error")
              return i.reject(t4, r4.value);
            var n3 = r4.value;
            if (n3)
              d(t4, n3);
            else {
              t4.state = a, t4.outcome = e4;
              for (var s2 = -1, o2 = t4.queue.length; ++s2 < o2; )
                t4.queue[s2].callFulfilled(e4);
            }
            return t4;
          }, i.reject = function(t4, e4) {
            t4.state = o, t4.outcome = e4;
            for (var r4 = -1, n3 = t4.queue.length; ++r4 < n3; )
              t4.queue[r4].callRejected(e4);
            return t4;
          }, u.resolve = function(t4) {
            return t4 instanceof this ? t4 : i.resolve(new this(s), t4);
          }, u.reject = function(t4) {
            var e4 = new this(s);
            return i.reject(e4, t4);
          }, u.all = function(t4) {
            var e4 = this;
            if (Object.prototype.toString.call(t4) !== "[object Array]")
              return this.reject(new TypeError("must be an array"));
            var r4 = t4.length, n3 = false;
            if (!r4)
              return this.resolve([]);
            for (var o2 = new Array(r4), a2 = 0, c2 = -1, u2 = new this(s); ++c2 < r4; )
              l2(t4[c2], c2);
            return u2;
            function l2(t5, s2) {
              e4.resolve(t5).then(function(t6) {
                o2[s2] = t6, ++a2 !== r4 || n3 || (n3 = true, i.resolve(u2, o2));
              }, function(t6) {
                n3 || (n3 = true, i.reject(u2, t6));
              });
            }
          }, u.race = function(t4) {
            if (Object.prototype.toString.call(t4) !== "[object Array]")
              return this.reject(new TypeError("must be an array"));
            var e4 = t4.length, r4 = false;
            if (!e4)
              return this.resolve([]);
            for (var n3, o2 = -1, a2 = new this(s); ++o2 < e4; )
              n3 = t4[o2], this.resolve(n3).then(function(t5) {
                r4 || (r4 = true, i.resolve(a2, t5));
              }, function(t5) {
                r4 || (r4 = true, i.reject(a2, t5));
              });
            return a2;
          };
        }, { immediate: 36 }], 38: [function(t3, e3, r3) {
          var n2 = {};
          (0, t3("./lib/utils/common").assign)(n2, t3("./lib/deflate"), t3("./lib/inflate"), t3("./lib/zlib/constants")), e3.exports = n2;
        }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(t3, e3, r3) {
          var n2 = t3("./zlib/deflate"), s = t3("./utils/common"), i = t3("./utils/strings"), o = t3("./zlib/messages"), a = t3("./zlib/zstream"), c = Object.prototype.toString;
          function u(t4) {
            if (!(this instanceof u))
              return new u(t4);
            this.options = s.assign({ level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" }, t4 || {});
            var e4 = this.options;
            e4.raw && 0 < e4.windowBits ? e4.windowBits = -e4.windowBits : e4.gzip && 0 < e4.windowBits && e4.windowBits < 16 && (e4.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new a(), this.strm.avail_out = 0;
            var r4 = n2.deflateInit2(this.strm, e4.level, e4.method, e4.windowBits, e4.memLevel, e4.strategy);
            if (r4 !== 0)
              throw new Error(o[r4]);
            if (e4.header && n2.deflateSetHeader(this.strm, e4.header), e4.dictionary) {
              var l2;
              if (l2 = typeof e4.dictionary == "string" ? i.string2buf(e4.dictionary) : c.call(e4.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(e4.dictionary) : e4.dictionary, (r4 = n2.deflateSetDictionary(this.strm, l2)) !== 0)
                throw new Error(o[r4]);
              this._dict_set = true;
            }
          }
          function l(t4, e4) {
            var r4 = new u(e4);
            if (r4.push(t4, true), r4.err)
              throw r4.msg || o[r4.err];
            return r4.result;
          }
          u.prototype.push = function(t4, e4) {
            var r4, o2, a2 = this.strm, u2 = this.options.chunkSize;
            if (this.ended)
              return false;
            o2 = e4 === ~~e4 ? e4 : e4 === true ? 4 : 0, typeof t4 == "string" ? a2.input = i.string2buf(t4) : c.call(t4) === "[object ArrayBuffer]" ? a2.input = new Uint8Array(t4) : a2.input = t4, a2.next_in = 0, a2.avail_in = a2.input.length;
            do {
              if (a2.avail_out === 0 && (a2.output = new s.Buf8(u2), a2.next_out = 0, a2.avail_out = u2), (r4 = n2.deflate(a2, o2)) !== 1 && r4 !== 0)
                return this.onEnd(r4), !(this.ended = true);
              a2.avail_out !== 0 && (a2.avail_in !== 0 || o2 !== 4 && o2 !== 2) || (this.options.to === "string" ? this.onData(i.buf2binstring(s.shrinkBuf(a2.output, a2.next_out))) : this.onData(s.shrinkBuf(a2.output, a2.next_out)));
            } while ((0 < a2.avail_in || a2.avail_out === 0) && r4 !== 1);
            return o2 === 4 ? (r4 = n2.deflateEnd(this.strm), this.onEnd(r4), this.ended = true, r4 === 0) : o2 !== 2 || (this.onEnd(0), !(a2.avail_out = 0));
          }, u.prototype.onData = function(t4) {
            this.chunks.push(t4);
          }, u.prototype.onEnd = function(t4) {
            t4 === 0 && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = t4, this.msg = this.strm.msg;
          }, r3.Deflate = u, r3.deflate = l, r3.deflateRaw = function(t4, e4) {
            return (e4 = e4 || {}).raw = true, l(t4, e4);
          }, r3.gzip = function(t4, e4) {
            return (e4 = e4 || {}).gzip = true, l(t4, e4);
          };
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(t3, e3, r3) {
          var n2 = t3("./zlib/inflate"), s = t3("./utils/common"), i = t3("./utils/strings"), o = t3("./zlib/constants"), a = t3("./zlib/messages"), c = t3("./zlib/zstream"), u = t3("./zlib/gzheader"), l = Object.prototype.toString;
          function h(t4) {
            if (!(this instanceof h))
              return new h(t4);
            this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, t4 || {});
            var e4 = this.options;
            e4.raw && 0 <= e4.windowBits && e4.windowBits < 16 && (e4.windowBits = -e4.windowBits, e4.windowBits === 0 && (e4.windowBits = -15)), !(0 <= e4.windowBits && e4.windowBits < 16) || t4 && t4.windowBits || (e4.windowBits += 32), 15 < e4.windowBits && e4.windowBits < 48 && (15 & e4.windowBits) == 0 && (e4.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
            var r4 = n2.inflateInit2(this.strm, e4.windowBits);
            if (r4 !== o.Z_OK)
              throw new Error(a[r4]);
            this.header = new u(), n2.inflateGetHeader(this.strm, this.header);
          }
          function p2(t4, e4) {
            var r4 = new h(e4);
            if (r4.push(t4, true), r4.err)
              throw r4.msg || a[r4.err];
            return r4.result;
          }
          h.prototype.push = function(t4, e4) {
            var r4, a2, c2, u2, h2, p3, d = this.strm, f = this.options.chunkSize, m = this.options.dictionary, w = false;
            if (this.ended)
              return false;
            a2 = e4 === ~~e4 ? e4 : e4 === true ? o.Z_FINISH : o.Z_NO_FLUSH, typeof t4 == "string" ? d.input = i.binstring2buf(t4) : l.call(t4) === "[object ArrayBuffer]" ? d.input = new Uint8Array(t4) : d.input = t4, d.next_in = 0, d.avail_in = d.input.length;
            do {
              if (d.avail_out === 0 && (d.output = new s.Buf8(f), d.next_out = 0, d.avail_out = f), (r4 = n2.inflate(d, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && m && (p3 = typeof m == "string" ? i.string2buf(m) : l.call(m) === "[object ArrayBuffer]" ? new Uint8Array(m) : m, r4 = n2.inflateSetDictionary(this.strm, p3)), r4 === o.Z_BUF_ERROR && w === true && (r4 = o.Z_OK, w = false), r4 !== o.Z_STREAM_END && r4 !== o.Z_OK)
                return this.onEnd(r4), !(this.ended = true);
              d.next_out && (d.avail_out !== 0 && r4 !== o.Z_STREAM_END && (d.avail_in !== 0 || a2 !== o.Z_FINISH && a2 !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (c2 = i.utf8border(d.output, d.next_out), u2 = d.next_out - c2, h2 = i.buf2string(d.output, c2), d.next_out = u2, d.avail_out = f - u2, u2 && s.arraySet(d.output, d.output, c2, u2, 0), this.onData(h2)) : this.onData(s.shrinkBuf(d.output, d.next_out)))), d.avail_in === 0 && d.avail_out === 0 && (w = true);
            } while ((0 < d.avail_in || d.avail_out === 0) && r4 !== o.Z_STREAM_END);
            return r4 === o.Z_STREAM_END && (a2 = o.Z_FINISH), a2 === o.Z_FINISH ? (r4 = n2.inflateEnd(this.strm), this.onEnd(r4), this.ended = true, r4 === o.Z_OK) : a2 !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(d.avail_out = 0));
          }, h.prototype.onData = function(t4) {
            this.chunks.push(t4);
          }, h.prototype.onEnd = function(t4) {
            t4 === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = t4, this.msg = this.strm.msg;
          }, r3.Inflate = h, r3.inflate = p2, r3.inflateRaw = function(t4, e4) {
            return (e4 = e4 || {}).raw = true, p2(t4, e4);
          }, r3.ungzip = p2;
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(t3, e3, r3) {
          var n2 = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Int32Array != "undefined";
          r3.assign = function(t4) {
            for (var e4 = Array.prototype.slice.call(arguments, 1); e4.length; ) {
              var r4 = e4.shift();
              if (r4) {
                if (typeof r4 != "object")
                  throw new TypeError(r4 + "must be non-object");
                for (var n3 in r4)
                  r4.hasOwnProperty(n3) && (t4[n3] = r4[n3]);
              }
            }
            return t4;
          }, r3.shrinkBuf = function(t4, e4) {
            return t4.length === e4 ? t4 : t4.subarray ? t4.subarray(0, e4) : (t4.length = e4, t4);
          };
          var s = { arraySet: function(t4, e4, r4, n3, s2) {
            if (e4.subarray && t4.subarray)
              t4.set(e4.subarray(r4, r4 + n3), s2);
            else
              for (var i2 = 0; i2 < n3; i2++)
                t4[s2 + i2] = e4[r4 + i2];
          }, flattenChunks: function(t4) {
            var e4, r4, n3, s2, i2, o;
            for (e4 = n3 = 0, r4 = t4.length; e4 < r4; e4++)
              n3 += t4[e4].length;
            for (o = new Uint8Array(n3), e4 = s2 = 0, r4 = t4.length; e4 < r4; e4++)
              i2 = t4[e4], o.set(i2, s2), s2 += i2.length;
            return o;
          } }, i = { arraySet: function(t4, e4, r4, n3, s2) {
            for (var i2 = 0; i2 < n3; i2++)
              t4[s2 + i2] = e4[r4 + i2];
          }, flattenChunks: function(t4) {
            return [].concat.apply([], t4);
          } };
          r3.setTyped = function(t4) {
            t4 ? (r3.Buf8 = Uint8Array, r3.Buf16 = Uint16Array, r3.Buf32 = Int32Array, r3.assign(r3, s)) : (r3.Buf8 = Array, r3.Buf16 = Array, r3.Buf32 = Array, r3.assign(r3, i));
          }, r3.setTyped(n2);
        }, {}], 42: [function(t3, e3, r3) {
          var n2 = t3("./common"), s = true, i = true;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (t4) {
            s = false;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (t4) {
            i = false;
          }
          for (var o = new n2.Buf8(256), a = 0; a < 256; a++)
            o[a] = 252 <= a ? 6 : 248 <= a ? 5 : 240 <= a ? 4 : 224 <= a ? 3 : 192 <= a ? 2 : 1;
          function c(t4, e4) {
            if (e4 < 65537 && (t4.subarray && i || !t4.subarray && s))
              return String.fromCharCode.apply(null, n2.shrinkBuf(t4, e4));
            for (var r4 = "", o2 = 0; o2 < e4; o2++)
              r4 += String.fromCharCode(t4[o2]);
            return r4;
          }
          o[254] = o[254] = 1, r3.string2buf = function(t4) {
            var e4, r4, s2, i2, o2, a2 = t4.length, c2 = 0;
            for (i2 = 0; i2 < a2; i2++)
              (64512 & (r4 = t4.charCodeAt(i2))) == 55296 && i2 + 1 < a2 && (64512 & (s2 = t4.charCodeAt(i2 + 1))) == 56320 && (r4 = 65536 + (r4 - 55296 << 10) + (s2 - 56320), i2++), c2 += r4 < 128 ? 1 : r4 < 2048 ? 2 : r4 < 65536 ? 3 : 4;
            for (e4 = new n2.Buf8(c2), i2 = o2 = 0; o2 < c2; i2++)
              (64512 & (r4 = t4.charCodeAt(i2))) == 55296 && i2 + 1 < a2 && (64512 & (s2 = t4.charCodeAt(i2 + 1))) == 56320 && (r4 = 65536 + (r4 - 55296 << 10) + (s2 - 56320), i2++), r4 < 128 ? e4[o2++] = r4 : (r4 < 2048 ? e4[o2++] = 192 | r4 >>> 6 : (r4 < 65536 ? e4[o2++] = 224 | r4 >>> 12 : (e4[o2++] = 240 | r4 >>> 18, e4[o2++] = 128 | r4 >>> 12 & 63), e4[o2++] = 128 | r4 >>> 6 & 63), e4[o2++] = 128 | 63 & r4);
            return e4;
          }, r3.buf2binstring = function(t4) {
            return c(t4, t4.length);
          }, r3.binstring2buf = function(t4) {
            for (var e4 = new n2.Buf8(t4.length), r4 = 0, s2 = e4.length; r4 < s2; r4++)
              e4[r4] = t4.charCodeAt(r4);
            return e4;
          }, r3.buf2string = function(t4, e4) {
            var r4, n3, s2, i2, a2 = e4 || t4.length, u = new Array(2 * a2);
            for (r4 = n3 = 0; r4 < a2; )
              if ((s2 = t4[r4++]) < 128)
                u[n3++] = s2;
              else if (4 < (i2 = o[s2]))
                u[n3++] = 65533, r4 += i2 - 1;
              else {
                for (s2 &= i2 === 2 ? 31 : i2 === 3 ? 15 : 7; 1 < i2 && r4 < a2; )
                  s2 = s2 << 6 | 63 & t4[r4++], i2--;
                1 < i2 ? u[n3++] = 65533 : s2 < 65536 ? u[n3++] = s2 : (s2 -= 65536, u[n3++] = 55296 | s2 >> 10 & 1023, u[n3++] = 56320 | 1023 & s2);
              }
            return c(u, n3);
          }, r3.utf8border = function(t4, e4) {
            var r4;
            for ((e4 = e4 || t4.length) > t4.length && (e4 = t4.length), r4 = e4 - 1; 0 <= r4 && (192 & t4[r4]) == 128; )
              r4--;
            return r4 < 0 || r4 === 0 ? e4 : r4 + o[t4[r4]] > e4 ? r4 : e4;
          };
        }, { "./common": 41 }], 43: [function(t3, e3, r3) {
          e3.exports = function(t4, e4, r4, n2) {
            for (var s = 65535 & t4 | 0, i = t4 >>> 16 & 65535 | 0, o = 0; r4 !== 0; ) {
              for (r4 -= o = 2e3 < r4 ? 2e3 : r4; i = i + (s = s + e4[n2++] | 0) | 0, --o; )
                ;
              s %= 65521, i %= 65521;
            }
            return s | i << 16 | 0;
          };
        }, {}], 44: [function(t3, e3, r3) {
          e3.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
        }, {}], 45: [function(t3, e3, r3) {
          var n2 = function() {
            for (var t4, e4 = [], r4 = 0; r4 < 256; r4++) {
              t4 = r4;
              for (var n3 = 0; n3 < 8; n3++)
                t4 = 1 & t4 ? 3988292384 ^ t4 >>> 1 : t4 >>> 1;
              e4[r4] = t4;
            }
            return e4;
          }();
          e3.exports = function(t4, e4, r4, s) {
            var i = n2, o = s + r4;
            t4 ^= -1;
            for (var a = s; a < o; a++)
              t4 = t4 >>> 8 ^ i[255 & (t4 ^ e4[a])];
            return -1 ^ t4;
          };
        }, {}], 46: [function(t3, e3, r3) {
          var n2, s = t3("../utils/common"), i = t3("./trees"), o = t3("./adler32"), a = t3("./crc32"), c = t3("./messages"), u = -2, l = 258, h = 262, p2 = 113;
          function d(t4, e4) {
            return t4.msg = c[e4], e4;
          }
          function f(t4) {
            return (t4 << 1) - (4 < t4 ? 9 : 0);
          }
          function m(t4) {
            for (var e4 = t4.length; 0 <= --e4; )
              t4[e4] = 0;
          }
          function w(t4) {
            var e4 = t4.state, r4 = e4.pending;
            r4 > t4.avail_out && (r4 = t4.avail_out), r4 !== 0 && (s.arraySet(t4.output, e4.pending_buf, e4.pending_out, r4, t4.next_out), t4.next_out += r4, e4.pending_out += r4, t4.total_out += r4, t4.avail_out -= r4, e4.pending -= r4, e4.pending === 0 && (e4.pending_out = 0));
          }
          function g(t4, e4) {
            i._tr_flush_block(t4, 0 <= t4.block_start ? t4.block_start : -1, t4.strstart - t4.block_start, e4), t4.block_start = t4.strstart, w(t4.strm);
          }
          function y(t4, e4) {
            t4.pending_buf[t4.pending++] = e4;
          }
          function b(t4, e4) {
            t4.pending_buf[t4.pending++] = e4 >>> 8 & 255, t4.pending_buf[t4.pending++] = 255 & e4;
          }
          function v(t4, e4) {
            var r4, n3, s2 = t4.max_chain_length, i2 = t4.strstart, o2 = t4.prev_length, a2 = t4.nice_match, c2 = t4.strstart > t4.w_size - h ? t4.strstart - (t4.w_size - h) : 0, u2 = t4.window, p3 = t4.w_mask, d2 = t4.prev, f2 = t4.strstart + l, m2 = u2[i2 + o2 - 1], w2 = u2[i2 + o2];
            t4.prev_length >= t4.good_match && (s2 >>= 2), a2 > t4.lookahead && (a2 = t4.lookahead);
            do {
              if (u2[(r4 = e4) + o2] === w2 && u2[r4 + o2 - 1] === m2 && u2[r4] === u2[i2] && u2[++r4] === u2[i2 + 1]) {
                i2 += 2, r4++;
                do {
                } while (u2[++i2] === u2[++r4] && u2[++i2] === u2[++r4] && u2[++i2] === u2[++r4] && u2[++i2] === u2[++r4] && u2[++i2] === u2[++r4] && u2[++i2] === u2[++r4] && u2[++i2] === u2[++r4] && u2[++i2] === u2[++r4] && i2 < f2);
                if (n3 = l - (f2 - i2), i2 = f2 - l, o2 < n3) {
                  if (t4.match_start = e4, a2 <= (o2 = n3))
                    break;
                  m2 = u2[i2 + o2 - 1], w2 = u2[i2 + o2];
                }
              }
            } while ((e4 = d2[e4 & p3]) > c2 && --s2 != 0);
            return o2 <= t4.lookahead ? o2 : t4.lookahead;
          }
          function _(t4) {
            var e4, r4, n3, i2, c2, u2, l2, p3, d2, f2, m2 = t4.w_size;
            do {
              if (i2 = t4.window_size - t4.lookahead - t4.strstart, t4.strstart >= m2 + (m2 - h)) {
                for (s.arraySet(t4.window, t4.window, m2, m2, 0), t4.match_start -= m2, t4.strstart -= m2, t4.block_start -= m2, e4 = r4 = t4.hash_size; n3 = t4.head[--e4], t4.head[e4] = m2 <= n3 ? n3 - m2 : 0, --r4; )
                  ;
                for (e4 = r4 = m2; n3 = t4.prev[--e4], t4.prev[e4] = m2 <= n3 ? n3 - m2 : 0, --r4; )
                  ;
                i2 += m2;
              }
              if (t4.strm.avail_in === 0)
                break;
              if (u2 = t4.strm, l2 = t4.window, p3 = t4.strstart + t4.lookahead, f2 = void 0, (d2 = i2) < (f2 = u2.avail_in) && (f2 = d2), r4 = f2 === 0 ? 0 : (u2.avail_in -= f2, s.arraySet(l2, u2.input, u2.next_in, f2, p3), u2.state.wrap === 1 ? u2.adler = o(u2.adler, l2, f2, p3) : u2.state.wrap === 2 && (u2.adler = a(u2.adler, l2, f2, p3)), u2.next_in += f2, u2.total_in += f2, f2), t4.lookahead += r4, t4.lookahead + t4.insert >= 3)
                for (c2 = t4.strstart - t4.insert, t4.ins_h = t4.window[c2], t4.ins_h = (t4.ins_h << t4.hash_shift ^ t4.window[c2 + 1]) & t4.hash_mask; t4.insert && (t4.ins_h = (t4.ins_h << t4.hash_shift ^ t4.window[c2 + 3 - 1]) & t4.hash_mask, t4.prev[c2 & t4.w_mask] = t4.head[t4.ins_h], t4.head[t4.ins_h] = c2, c2++, t4.insert--, !(t4.lookahead + t4.insert < 3)); )
                  ;
            } while (t4.lookahead < h && t4.strm.avail_in !== 0);
          }
          function x(t4, e4) {
            for (var r4, n3; ; ) {
              if (t4.lookahead < h) {
                if (_(t4), t4.lookahead < h && e4 === 0)
                  return 1;
                if (t4.lookahead === 0)
                  break;
              }
              if (r4 = 0, t4.lookahead >= 3 && (t4.ins_h = (t4.ins_h << t4.hash_shift ^ t4.window[t4.strstart + 3 - 1]) & t4.hash_mask, r4 = t4.prev[t4.strstart & t4.w_mask] = t4.head[t4.ins_h], t4.head[t4.ins_h] = t4.strstart), r4 !== 0 && t4.strstart - r4 <= t4.w_size - h && (t4.match_length = v(t4, r4)), t4.match_length >= 3)
                if (n3 = i._tr_tally(t4, t4.strstart - t4.match_start, t4.match_length - 3), t4.lookahead -= t4.match_length, t4.match_length <= t4.max_lazy_match && t4.lookahead >= 3) {
                  for (t4.match_length--; t4.strstart++, t4.ins_h = (t4.ins_h << t4.hash_shift ^ t4.window[t4.strstart + 3 - 1]) & t4.hash_mask, r4 = t4.prev[t4.strstart & t4.w_mask] = t4.head[t4.ins_h], t4.head[t4.ins_h] = t4.strstart, --t4.match_length != 0; )
                    ;
                  t4.strstart++;
                } else
                  t4.strstart += t4.match_length, t4.match_length = 0, t4.ins_h = t4.window[t4.strstart], t4.ins_h = (t4.ins_h << t4.hash_shift ^ t4.window[t4.strstart + 1]) & t4.hash_mask;
              else
                n3 = i._tr_tally(t4, 0, t4.window[t4.strstart]), t4.lookahead--, t4.strstart++;
              if (n3 && (g(t4, false), t4.strm.avail_out === 0))
                return 1;
            }
            return t4.insert = t4.strstart < 2 ? t4.strstart : 2, e4 === 4 ? (g(t4, true), t4.strm.avail_out === 0 ? 3 : 4) : t4.last_lit && (g(t4, false), t4.strm.avail_out === 0) ? 1 : 2;
          }
          function E(t4, e4) {
            for (var r4, n3, s2; ; ) {
              if (t4.lookahead < h) {
                if (_(t4), t4.lookahead < h && e4 === 0)
                  return 1;
                if (t4.lookahead === 0)
                  break;
              }
              if (r4 = 0, t4.lookahead >= 3 && (t4.ins_h = (t4.ins_h << t4.hash_shift ^ t4.window[t4.strstart + 3 - 1]) & t4.hash_mask, r4 = t4.prev[t4.strstart & t4.w_mask] = t4.head[t4.ins_h], t4.head[t4.ins_h] = t4.strstart), t4.prev_length = t4.match_length, t4.prev_match = t4.match_start, t4.match_length = 2, r4 !== 0 && t4.prev_length < t4.max_lazy_match && t4.strstart - r4 <= t4.w_size - h && (t4.match_length = v(t4, r4), t4.match_length <= 5 && (t4.strategy === 1 || t4.match_length === 3 && 4096 < t4.strstart - t4.match_start) && (t4.match_length = 2)), t4.prev_length >= 3 && t4.match_length <= t4.prev_length) {
                for (s2 = t4.strstart + t4.lookahead - 3, n3 = i._tr_tally(t4, t4.strstart - 1 - t4.prev_match, t4.prev_length - 3), t4.lookahead -= t4.prev_length - 1, t4.prev_length -= 2; ++t4.strstart <= s2 && (t4.ins_h = (t4.ins_h << t4.hash_shift ^ t4.window[t4.strstart + 3 - 1]) & t4.hash_mask, r4 = t4.prev[t4.strstart & t4.w_mask] = t4.head[t4.ins_h], t4.head[t4.ins_h] = t4.strstart), --t4.prev_length != 0; )
                  ;
                if (t4.match_available = 0, t4.match_length = 2, t4.strstart++, n3 && (g(t4, false), t4.strm.avail_out === 0))
                  return 1;
              } else if (t4.match_available) {
                if ((n3 = i._tr_tally(t4, 0, t4.window[t4.strstart - 1])) && g(t4, false), t4.strstart++, t4.lookahead--, t4.strm.avail_out === 0)
                  return 1;
              } else
                t4.match_available = 1, t4.strstart++, t4.lookahead--;
            }
            return t4.match_available && (n3 = i._tr_tally(t4, 0, t4.window[t4.strstart - 1]), t4.match_available = 0), t4.insert = t4.strstart < 2 ? t4.strstart : 2, e4 === 4 ? (g(t4, true), t4.strm.avail_out === 0 ? 3 : 4) : t4.last_lit && (g(t4, false), t4.strm.avail_out === 0) ? 1 : 2;
          }
          function T(t4, e4, r4, n3, s2) {
            this.good_length = t4, this.max_lazy = e4, this.nice_length = r4, this.max_chain = n3, this.func = s2;
          }
          function A() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = 8, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(1146), this.dyn_dtree = new s.Buf16(122), this.bl_tree = new s.Buf16(78), m(this.dyn_ltree), m(this.dyn_dtree), m(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(16), this.heap = new s.Buf16(573), m(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(573), m(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
          }
          function S(t4) {
            var e4;
            return t4 && t4.state ? (t4.total_in = t4.total_out = 0, t4.data_type = 2, (e4 = t4.state).pending = 0, e4.pending_out = 0, e4.wrap < 0 && (e4.wrap = -e4.wrap), e4.status = e4.wrap ? 42 : p2, t4.adler = e4.wrap === 2 ? 0 : 1, e4.last_flush = 0, i._tr_init(e4), 0) : d(t4, u);
          }
          function R(t4) {
            var e4 = S(t4);
            return e4 === 0 && function(t5) {
              t5.window_size = 2 * t5.w_size, m(t5.head), t5.max_lazy_match = n2[t5.level].max_lazy, t5.good_match = n2[t5.level].good_length, t5.nice_match = n2[t5.level].nice_length, t5.max_chain_length = n2[t5.level].max_chain, t5.strstart = 0, t5.block_start = 0, t5.lookahead = 0, t5.insert = 0, t5.match_length = t5.prev_length = 2, t5.match_available = 0, t5.ins_h = 0;
            }(t4.state), e4;
          }
          function I(t4, e4, r4, n3, i2, o2) {
            if (!t4)
              return u;
            var a2 = 1;
            if (e4 === -1 && (e4 = 6), n3 < 0 ? (a2 = 0, n3 = -n3) : 15 < n3 && (a2 = 2, n3 -= 16), i2 < 1 || 9 < i2 || r4 !== 8 || n3 < 8 || 15 < n3 || e4 < 0 || 9 < e4 || o2 < 0 || 4 < o2)
              return d(t4, u);
            n3 === 8 && (n3 = 9);
            var c2 = new A();
            return (t4.state = c2).strm = t4, c2.wrap = a2, c2.gzhead = null, c2.w_bits = n3, c2.w_size = 1 << c2.w_bits, c2.w_mask = c2.w_size - 1, c2.hash_bits = i2 + 7, c2.hash_size = 1 << c2.hash_bits, c2.hash_mask = c2.hash_size - 1, c2.hash_shift = ~~((c2.hash_bits + 3 - 1) / 3), c2.window = new s.Buf8(2 * c2.w_size), c2.head = new s.Buf16(c2.hash_size), c2.prev = new s.Buf16(c2.w_size), c2.lit_bufsize = 1 << i2 + 6, c2.pending_buf_size = 4 * c2.lit_bufsize, c2.pending_buf = new s.Buf8(c2.pending_buf_size), c2.d_buf = 1 * c2.lit_bufsize, c2.l_buf = 3 * c2.lit_bufsize, c2.level = e4, c2.strategy = o2, c2.method = r4, R(t4);
          }
          n2 = [new T(0, 0, 0, 0, function(t4, e4) {
            var r4 = 65535;
            for (r4 > t4.pending_buf_size - 5 && (r4 = t4.pending_buf_size - 5); ; ) {
              if (t4.lookahead <= 1) {
                if (_(t4), t4.lookahead === 0 && e4 === 0)
                  return 1;
                if (t4.lookahead === 0)
                  break;
              }
              t4.strstart += t4.lookahead, t4.lookahead = 0;
              var n3 = t4.block_start + r4;
              if ((t4.strstart === 0 || t4.strstart >= n3) && (t4.lookahead = t4.strstart - n3, t4.strstart = n3, g(t4, false), t4.strm.avail_out === 0))
                return 1;
              if (t4.strstart - t4.block_start >= t4.w_size - h && (g(t4, false), t4.strm.avail_out === 0))
                return 1;
            }
            return t4.insert = 0, e4 === 4 ? (g(t4, true), t4.strm.avail_out === 0 ? 3 : 4) : (t4.strstart > t4.block_start && (g(t4, false), t4.strm.avail_out), 1);
          }), new T(4, 4, 8, 4, x), new T(4, 5, 16, 8, x), new T(4, 6, 32, 32, x), new T(4, 4, 16, 16, E), new T(8, 16, 32, 32, E), new T(8, 16, 128, 128, E), new T(8, 32, 128, 256, E), new T(32, 128, 258, 1024, E), new T(32, 258, 258, 4096, E)], r3.deflateInit = function(t4, e4) {
            return I(t4, e4, 8, 15, 8, 0);
          }, r3.deflateInit2 = I, r3.deflateReset = R, r3.deflateResetKeep = S, r3.deflateSetHeader = function(t4, e4) {
            return t4 && t4.state ? t4.state.wrap !== 2 ? u : (t4.state.gzhead = e4, 0) : u;
          }, r3.deflate = function(t4, e4) {
            var r4, s2, o2, c2;
            if (!t4 || !t4.state || 5 < e4 || e4 < 0)
              return t4 ? d(t4, u) : u;
            if (s2 = t4.state, !t4.output || !t4.input && t4.avail_in !== 0 || s2.status === 666 && e4 !== 4)
              return d(t4, t4.avail_out === 0 ? -5 : u);
            if (s2.strm = t4, r4 = s2.last_flush, s2.last_flush = e4, s2.status === 42)
              if (s2.wrap === 2)
                t4.adler = 0, y(s2, 31), y(s2, 139), y(s2, 8), s2.gzhead ? (y(s2, (s2.gzhead.text ? 1 : 0) + (s2.gzhead.hcrc ? 2 : 0) + (s2.gzhead.extra ? 4 : 0) + (s2.gzhead.name ? 8 : 0) + (s2.gzhead.comment ? 16 : 0)), y(s2, 255 & s2.gzhead.time), y(s2, s2.gzhead.time >> 8 & 255), y(s2, s2.gzhead.time >> 16 & 255), y(s2, s2.gzhead.time >> 24 & 255), y(s2, s2.level === 9 ? 2 : 2 <= s2.strategy || s2.level < 2 ? 4 : 0), y(s2, 255 & s2.gzhead.os), s2.gzhead.extra && s2.gzhead.extra.length && (y(s2, 255 & s2.gzhead.extra.length), y(s2, s2.gzhead.extra.length >> 8 & 255)), s2.gzhead.hcrc && (t4.adler = a(t4.adler, s2.pending_buf, s2.pending, 0)), s2.gzindex = 0, s2.status = 69) : (y(s2, 0), y(s2, 0), y(s2, 0), y(s2, 0), y(s2, 0), y(s2, s2.level === 9 ? 2 : 2 <= s2.strategy || s2.level < 2 ? 4 : 0), y(s2, 3), s2.status = p2);
              else {
                var h2 = 8 + (s2.w_bits - 8 << 4) << 8;
                h2 |= (2 <= s2.strategy || s2.level < 2 ? 0 : s2.level < 6 ? 1 : s2.level === 6 ? 2 : 3) << 6, s2.strstart !== 0 && (h2 |= 32), h2 += 31 - h2 % 31, s2.status = p2, b(s2, h2), s2.strstart !== 0 && (b(s2, t4.adler >>> 16), b(s2, 65535 & t4.adler)), t4.adler = 1;
              }
            if (s2.status === 69)
              if (s2.gzhead.extra) {
                for (o2 = s2.pending; s2.gzindex < (65535 & s2.gzhead.extra.length) && (s2.pending !== s2.pending_buf_size || (s2.gzhead.hcrc && s2.pending > o2 && (t4.adler = a(t4.adler, s2.pending_buf, s2.pending - o2, o2)), w(t4), o2 = s2.pending, s2.pending !== s2.pending_buf_size)); )
                  y(s2, 255 & s2.gzhead.extra[s2.gzindex]), s2.gzindex++;
                s2.gzhead.hcrc && s2.pending > o2 && (t4.adler = a(t4.adler, s2.pending_buf, s2.pending - o2, o2)), s2.gzindex === s2.gzhead.extra.length && (s2.gzindex = 0, s2.status = 73);
              } else
                s2.status = 73;
            if (s2.status === 73)
              if (s2.gzhead.name) {
                o2 = s2.pending;
                do {
                  if (s2.pending === s2.pending_buf_size && (s2.gzhead.hcrc && s2.pending > o2 && (t4.adler = a(t4.adler, s2.pending_buf, s2.pending - o2, o2)), w(t4), o2 = s2.pending, s2.pending === s2.pending_buf_size)) {
                    c2 = 1;
                    break;
                  }
                  c2 = s2.gzindex < s2.gzhead.name.length ? 255 & s2.gzhead.name.charCodeAt(s2.gzindex++) : 0, y(s2, c2);
                } while (c2 !== 0);
                s2.gzhead.hcrc && s2.pending > o2 && (t4.adler = a(t4.adler, s2.pending_buf, s2.pending - o2, o2)), c2 === 0 && (s2.gzindex = 0, s2.status = 91);
              } else
                s2.status = 91;
            if (s2.status === 91)
              if (s2.gzhead.comment) {
                o2 = s2.pending;
                do {
                  if (s2.pending === s2.pending_buf_size && (s2.gzhead.hcrc && s2.pending > o2 && (t4.adler = a(t4.adler, s2.pending_buf, s2.pending - o2, o2)), w(t4), o2 = s2.pending, s2.pending === s2.pending_buf_size)) {
                    c2 = 1;
                    break;
                  }
                  c2 = s2.gzindex < s2.gzhead.comment.length ? 255 & s2.gzhead.comment.charCodeAt(s2.gzindex++) : 0, y(s2, c2);
                } while (c2 !== 0);
                s2.gzhead.hcrc && s2.pending > o2 && (t4.adler = a(t4.adler, s2.pending_buf, s2.pending - o2, o2)), c2 === 0 && (s2.status = 103);
              } else
                s2.status = 103;
            if (s2.status === 103 && (s2.gzhead.hcrc ? (s2.pending + 2 > s2.pending_buf_size && w(t4), s2.pending + 2 <= s2.pending_buf_size && (y(s2, 255 & t4.adler), y(s2, t4.adler >> 8 & 255), t4.adler = 0, s2.status = p2)) : s2.status = p2), s2.pending !== 0) {
              if (w(t4), t4.avail_out === 0)
                return s2.last_flush = -1, 0;
            } else if (t4.avail_in === 0 && f(e4) <= f(r4) && e4 !== 4)
              return d(t4, -5);
            if (s2.status === 666 && t4.avail_in !== 0)
              return d(t4, -5);
            if (t4.avail_in !== 0 || s2.lookahead !== 0 || e4 !== 0 && s2.status !== 666) {
              var v2 = s2.strategy === 2 ? function(t5, e5) {
                for (var r5; ; ) {
                  if (t5.lookahead === 0 && (_(t5), t5.lookahead === 0)) {
                    if (e5 === 0)
                      return 1;
                    break;
                  }
                  if (t5.match_length = 0, r5 = i._tr_tally(t5, 0, t5.window[t5.strstart]), t5.lookahead--, t5.strstart++, r5 && (g(t5, false), t5.strm.avail_out === 0))
                    return 1;
                }
                return t5.insert = 0, e5 === 4 ? (g(t5, true), t5.strm.avail_out === 0 ? 3 : 4) : t5.last_lit && (g(t5, false), t5.strm.avail_out === 0) ? 1 : 2;
              }(s2, e4) : s2.strategy === 3 ? function(t5, e5) {
                for (var r5, n3, s3, o3, a2 = t5.window; ; ) {
                  if (t5.lookahead <= l) {
                    if (_(t5), t5.lookahead <= l && e5 === 0)
                      return 1;
                    if (t5.lookahead === 0)
                      break;
                  }
                  if (t5.match_length = 0, t5.lookahead >= 3 && 0 < t5.strstart && (n3 = a2[s3 = t5.strstart - 1]) === a2[++s3] && n3 === a2[++s3] && n3 === a2[++s3]) {
                    o3 = t5.strstart + l;
                    do {
                    } while (n3 === a2[++s3] && n3 === a2[++s3] && n3 === a2[++s3] && n3 === a2[++s3] && n3 === a2[++s3] && n3 === a2[++s3] && n3 === a2[++s3] && n3 === a2[++s3] && s3 < o3);
                    t5.match_length = l - (o3 - s3), t5.match_length > t5.lookahead && (t5.match_length = t5.lookahead);
                  }
                  if (t5.match_length >= 3 ? (r5 = i._tr_tally(t5, 1, t5.match_length - 3), t5.lookahead -= t5.match_length, t5.strstart += t5.match_length, t5.match_length = 0) : (r5 = i._tr_tally(t5, 0, t5.window[t5.strstart]), t5.lookahead--, t5.strstart++), r5 && (g(t5, false), t5.strm.avail_out === 0))
                    return 1;
                }
                return t5.insert = 0, e5 === 4 ? (g(t5, true), t5.strm.avail_out === 0 ? 3 : 4) : t5.last_lit && (g(t5, false), t5.strm.avail_out === 0) ? 1 : 2;
              }(s2, e4) : n2[s2.level].func(s2, e4);
              if (v2 !== 3 && v2 !== 4 || (s2.status = 666), v2 === 1 || v2 === 3)
                return t4.avail_out === 0 && (s2.last_flush = -1), 0;
              if (v2 === 2 && (e4 === 1 ? i._tr_align(s2) : e4 !== 5 && (i._tr_stored_block(s2, 0, 0, false), e4 === 3 && (m(s2.head), s2.lookahead === 0 && (s2.strstart = 0, s2.block_start = 0, s2.insert = 0))), w(t4), t4.avail_out === 0))
                return s2.last_flush = -1, 0;
            }
            return e4 !== 4 ? 0 : s2.wrap <= 0 ? 1 : (s2.wrap === 2 ? (y(s2, 255 & t4.adler), y(s2, t4.adler >> 8 & 255), y(s2, t4.adler >> 16 & 255), y(s2, t4.adler >> 24 & 255), y(s2, 255 & t4.total_in), y(s2, t4.total_in >> 8 & 255), y(s2, t4.total_in >> 16 & 255), y(s2, t4.total_in >> 24 & 255)) : (b(s2, t4.adler >>> 16), b(s2, 65535 & t4.adler)), w(t4), 0 < s2.wrap && (s2.wrap = -s2.wrap), s2.pending !== 0 ? 0 : 1);
          }, r3.deflateEnd = function(t4) {
            var e4;
            return t4 && t4.state ? (e4 = t4.state.status) !== 42 && e4 !== 69 && e4 !== 73 && e4 !== 91 && e4 !== 103 && e4 !== p2 && e4 !== 666 ? d(t4, u) : (t4.state = null, e4 === p2 ? d(t4, -3) : 0) : u;
          }, r3.deflateSetDictionary = function(t4, e4) {
            var r4, n3, i2, a2, c2, l2, h2, p3, d2 = e4.length;
            if (!t4 || !t4.state)
              return u;
            if ((a2 = (r4 = t4.state).wrap) === 2 || a2 === 1 && r4.status !== 42 || r4.lookahead)
              return u;
            for (a2 === 1 && (t4.adler = o(t4.adler, e4, d2, 0)), r4.wrap = 0, d2 >= r4.w_size && (a2 === 0 && (m(r4.head), r4.strstart = 0, r4.block_start = 0, r4.insert = 0), p3 = new s.Buf8(r4.w_size), s.arraySet(p3, e4, d2 - r4.w_size, r4.w_size, 0), e4 = p3, d2 = r4.w_size), c2 = t4.avail_in, l2 = t4.next_in, h2 = t4.input, t4.avail_in = d2, t4.next_in = 0, t4.input = e4, _(r4); r4.lookahead >= 3; ) {
              for (n3 = r4.strstart, i2 = r4.lookahead - 2; r4.ins_h = (r4.ins_h << r4.hash_shift ^ r4.window[n3 + 3 - 1]) & r4.hash_mask, r4.prev[n3 & r4.w_mask] = r4.head[r4.ins_h], r4.head[r4.ins_h] = n3, n3++, --i2; )
                ;
              r4.strstart = n3, r4.lookahead = 2, _(r4);
            }
            return r4.strstart += r4.lookahead, r4.block_start = r4.strstart, r4.insert = r4.lookahead, r4.lookahead = 0, r4.match_length = r4.prev_length = 2, r4.match_available = 0, t4.next_in = l2, t4.input = h2, t4.avail_in = c2, r4.wrap = a2, 0;
          }, r3.deflateInfo = "pako deflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(t3, e3, r3) {
          e3.exports = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
          };
        }, {}], 48: [function(t3, e3, r3) {
          e3.exports = function(t4, e4) {
            var r4, n2, s, i, o, a, c, u, l, h, p2, d, f, m, w, g, y, b, v, _, x, E, T, A, S;
            r4 = t4.state, n2 = t4.next_in, A = t4.input, s = n2 + (t4.avail_in - 5), i = t4.next_out, S = t4.output, o = i - (e4 - t4.avail_out), a = i + (t4.avail_out - 257), c = r4.dmax, u = r4.wsize, l = r4.whave, h = r4.wnext, p2 = r4.window, d = r4.hold, f = r4.bits, m = r4.lencode, w = r4.distcode, g = (1 << r4.lenbits) - 1, y = (1 << r4.distbits) - 1;
            t:
              do {
                f < 15 && (d += A[n2++] << f, f += 8, d += A[n2++] << f, f += 8), b = m[d & g];
                e:
                  for (; ; ) {
                    if (d >>>= v = b >>> 24, f -= v, (v = b >>> 16 & 255) == 0)
                      S[i++] = 65535 & b;
                    else {
                      if (!(16 & v)) {
                        if ((64 & v) == 0) {
                          b = m[(65535 & b) + (d & (1 << v) - 1)];
                          continue e;
                        }
                        if (32 & v) {
                          r4.mode = 12;
                          break t;
                        }
                        t4.msg = "invalid literal/length code", r4.mode = 30;
                        break t;
                      }
                      _ = 65535 & b, (v &= 15) && (f < v && (d += A[n2++] << f, f += 8), _ += d & (1 << v) - 1, d >>>= v, f -= v), f < 15 && (d += A[n2++] << f, f += 8, d += A[n2++] << f, f += 8), b = w[d & y];
                      r:
                        for (; ; ) {
                          if (d >>>= v = b >>> 24, f -= v, !(16 & (v = b >>> 16 & 255))) {
                            if ((64 & v) == 0) {
                              b = w[(65535 & b) + (d & (1 << v) - 1)];
                              continue r;
                            }
                            t4.msg = "invalid distance code", r4.mode = 30;
                            break t;
                          }
                          if (x = 65535 & b, f < (v &= 15) && (d += A[n2++] << f, (f += 8) < v && (d += A[n2++] << f, f += 8)), c < (x += d & (1 << v) - 1)) {
                            t4.msg = "invalid distance too far back", r4.mode = 30;
                            break t;
                          }
                          if (d >>>= v, f -= v, (v = i - o) < x) {
                            if (l < (v = x - v) && r4.sane) {
                              t4.msg = "invalid distance too far back", r4.mode = 30;
                              break t;
                            }
                            if (T = p2, (E = 0) === h) {
                              if (E += u - v, v < _) {
                                for (_ -= v; S[i++] = p2[E++], --v; )
                                  ;
                                E = i - x, T = S;
                              }
                            } else if (h < v) {
                              if (E += u + h - v, (v -= h) < _) {
                                for (_ -= v; S[i++] = p2[E++], --v; )
                                  ;
                                if (E = 0, h < _) {
                                  for (_ -= v = h; S[i++] = p2[E++], --v; )
                                    ;
                                  E = i - x, T = S;
                                }
                              }
                            } else if (E += h - v, v < _) {
                              for (_ -= v; S[i++] = p2[E++], --v; )
                                ;
                              E = i - x, T = S;
                            }
                            for (; 2 < _; )
                              S[i++] = T[E++], S[i++] = T[E++], S[i++] = T[E++], _ -= 3;
                            _ && (S[i++] = T[E++], 1 < _ && (S[i++] = T[E++]));
                          } else {
                            for (E = i - x; S[i++] = S[E++], S[i++] = S[E++], S[i++] = S[E++], 2 < (_ -= 3); )
                              ;
                            _ && (S[i++] = S[E++], 1 < _ && (S[i++] = S[E++]));
                          }
                          break;
                        }
                    }
                    break;
                  }
              } while (n2 < s && i < a);
            n2 -= _ = f >> 3, d &= (1 << (f -= _ << 3)) - 1, t4.next_in = n2, t4.next_out = i, t4.avail_in = n2 < s ? s - n2 + 5 : 5 - (n2 - s), t4.avail_out = i < a ? a - i + 257 : 257 - (i - a), r4.hold = d, r4.bits = f;
          };
        }, {}], 49: [function(t3, e3, r3) {
          var n2 = t3("../utils/common"), s = t3("./adler32"), i = t3("./crc32"), o = t3("./inffast"), a = t3("./inftrees"), c = -2;
          function u(t4) {
            return (t4 >>> 24 & 255) + (t4 >>> 8 & 65280) + ((65280 & t4) << 8) + ((255 & t4) << 24);
          }
          function l() {
            this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n2.Buf16(320), this.work = new n2.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
          }
          function h(t4) {
            var e4;
            return t4 && t4.state ? (e4 = t4.state, t4.total_in = t4.total_out = e4.total = 0, t4.msg = "", e4.wrap && (t4.adler = 1 & e4.wrap), e4.mode = 1, e4.last = 0, e4.havedict = 0, e4.dmax = 32768, e4.head = null, e4.hold = 0, e4.bits = 0, e4.lencode = e4.lendyn = new n2.Buf32(852), e4.distcode = e4.distdyn = new n2.Buf32(592), e4.sane = 1, e4.back = -1, 0) : c;
          }
          function p2(t4) {
            var e4;
            return t4 && t4.state ? ((e4 = t4.state).wsize = 0, e4.whave = 0, e4.wnext = 0, h(t4)) : c;
          }
          function d(t4, e4) {
            var r4, n3;
            return t4 && t4.state ? (n3 = t4.state, e4 < 0 ? (r4 = 0, e4 = -e4) : (r4 = 1 + (e4 >> 4), e4 < 48 && (e4 &= 15)), e4 && (e4 < 8 || 15 < e4) ? c : (n3.window !== null && n3.wbits !== e4 && (n3.window = null), n3.wrap = r4, n3.wbits = e4, p2(t4))) : c;
          }
          function f(t4, e4) {
            var r4, n3;
            return t4 ? (n3 = new l(), (t4.state = n3).window = null, (r4 = d(t4, e4)) !== 0 && (t4.state = null), r4) : c;
          }
          var m, w, g = true;
          function y(t4) {
            if (g) {
              var e4;
              for (m = new n2.Buf32(512), w = new n2.Buf32(32), e4 = 0; e4 < 144; )
                t4.lens[e4++] = 8;
              for (; e4 < 256; )
                t4.lens[e4++] = 9;
              for (; e4 < 280; )
                t4.lens[e4++] = 7;
              for (; e4 < 288; )
                t4.lens[e4++] = 8;
              for (a(1, t4.lens, 0, 288, m, 0, t4.work, { bits: 9 }), e4 = 0; e4 < 32; )
                t4.lens[e4++] = 5;
              a(2, t4.lens, 0, 32, w, 0, t4.work, { bits: 5 }), g = false;
            }
            t4.lencode = m, t4.lenbits = 9, t4.distcode = w, t4.distbits = 5;
          }
          function b(t4, e4, r4, s2) {
            var i2, o2 = t4.state;
            return o2.window === null && (o2.wsize = 1 << o2.wbits, o2.wnext = 0, o2.whave = 0, o2.window = new n2.Buf8(o2.wsize)), s2 >= o2.wsize ? (n2.arraySet(o2.window, e4, r4 - o2.wsize, o2.wsize, 0), o2.wnext = 0, o2.whave = o2.wsize) : (s2 < (i2 = o2.wsize - o2.wnext) && (i2 = s2), n2.arraySet(o2.window, e4, r4 - s2, i2, o2.wnext), (s2 -= i2) ? (n2.arraySet(o2.window, e4, r4 - s2, s2, 0), o2.wnext = s2, o2.whave = o2.wsize) : (o2.wnext += i2, o2.wnext === o2.wsize && (o2.wnext = 0), o2.whave < o2.wsize && (o2.whave += i2))), 0;
          }
          r3.inflateReset = p2, r3.inflateReset2 = d, r3.inflateResetKeep = h, r3.inflateInit = function(t4) {
            return f(t4, 15);
          }, r3.inflateInit2 = f, r3.inflate = function(t4, e4) {
            var r4, l2, h2, p3, d2, f2, m2, w2, g2, v, _, x, E, T, A, S, R, I, N, O, C, k, D, L, P = 0, F = new n2.Buf8(4), B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!t4 || !t4.state || !t4.output || !t4.input && t4.avail_in !== 0)
              return c;
            (r4 = t4.state).mode === 12 && (r4.mode = 13), d2 = t4.next_out, h2 = t4.output, m2 = t4.avail_out, p3 = t4.next_in, l2 = t4.input, f2 = t4.avail_in, w2 = r4.hold, g2 = r4.bits, v = f2, _ = m2, k = 0;
            t:
              for (; ; )
                switch (r4.mode) {
                  case 1:
                    if (r4.wrap === 0) {
                      r4.mode = 13;
                      break;
                    }
                    for (; g2 < 16; ) {
                      if (f2 === 0)
                        break t;
                      f2--, w2 += l2[p3++] << g2, g2 += 8;
                    }
                    if (2 & r4.wrap && w2 === 35615) {
                      F[r4.check = 0] = 255 & w2, F[1] = w2 >>> 8 & 255, r4.check = i(r4.check, F, 2, 0), g2 = w2 = 0, r4.mode = 2;
                      break;
                    }
                    if (r4.flags = 0, r4.head && (r4.head.done = false), !(1 & r4.wrap) || (((255 & w2) << 8) + (w2 >> 8)) % 31) {
                      t4.msg = "incorrect header check", r4.mode = 30;
                      break;
                    }
                    if ((15 & w2) != 8) {
                      t4.msg = "unknown compression method", r4.mode = 30;
                      break;
                    }
                    if (g2 -= 4, C = 8 + (15 & (w2 >>>= 4)), r4.wbits === 0)
                      r4.wbits = C;
                    else if (C > r4.wbits) {
                      t4.msg = "invalid window size", r4.mode = 30;
                      break;
                    }
                    r4.dmax = 1 << C, t4.adler = r4.check = 1, r4.mode = 512 & w2 ? 10 : 12, g2 = w2 = 0;
                    break;
                  case 2:
                    for (; g2 < 16; ) {
                      if (f2 === 0)
                        break t;
                      f2--, w2 += l2[p3++] << g2, g2 += 8;
                    }
                    if (r4.flags = w2, (255 & r4.flags) != 8) {
                      t4.msg = "unknown compression method", r4.mode = 30;
                      break;
                    }
                    if (57344 & r4.flags) {
                      t4.msg = "unknown header flags set", r4.mode = 30;
                      break;
                    }
                    r4.head && (r4.head.text = w2 >> 8 & 1), 512 & r4.flags && (F[0] = 255 & w2, F[1] = w2 >>> 8 & 255, r4.check = i(r4.check, F, 2, 0)), g2 = w2 = 0, r4.mode = 3;
                  case 3:
                    for (; g2 < 32; ) {
                      if (f2 === 0)
                        break t;
                      f2--, w2 += l2[p3++] << g2, g2 += 8;
                    }
                    r4.head && (r4.head.time = w2), 512 & r4.flags && (F[0] = 255 & w2, F[1] = w2 >>> 8 & 255, F[2] = w2 >>> 16 & 255, F[3] = w2 >>> 24 & 255, r4.check = i(r4.check, F, 4, 0)), g2 = w2 = 0, r4.mode = 4;
                  case 4:
                    for (; g2 < 16; ) {
                      if (f2 === 0)
                        break t;
                      f2--, w2 += l2[p3++] << g2, g2 += 8;
                    }
                    r4.head && (r4.head.xflags = 255 & w2, r4.head.os = w2 >> 8), 512 & r4.flags && (F[0] = 255 & w2, F[1] = w2 >>> 8 & 255, r4.check = i(r4.check, F, 2, 0)), g2 = w2 = 0, r4.mode = 5;
                  case 5:
                    if (1024 & r4.flags) {
                      for (; g2 < 16; ) {
                        if (f2 === 0)
                          break t;
                        f2--, w2 += l2[p3++] << g2, g2 += 8;
                      }
                      r4.length = w2, r4.head && (r4.head.extra_len = w2), 512 & r4.flags && (F[0] = 255 & w2, F[1] = w2 >>> 8 & 255, r4.check = i(r4.check, F, 2, 0)), g2 = w2 = 0;
                    } else
                      r4.head && (r4.head.extra = null);
                    r4.mode = 6;
                  case 6:
                    if (1024 & r4.flags && (f2 < (x = r4.length) && (x = f2), x && (r4.head && (C = r4.head.extra_len - r4.length, r4.head.extra || (r4.head.extra = new Array(r4.head.extra_len)), n2.arraySet(r4.head.extra, l2, p3, x, C)), 512 & r4.flags && (r4.check = i(r4.check, l2, x, p3)), f2 -= x, p3 += x, r4.length -= x), r4.length))
                      break t;
                    r4.length = 0, r4.mode = 7;
                  case 7:
                    if (2048 & r4.flags) {
                      if (f2 === 0)
                        break t;
                      for (x = 0; C = l2[p3 + x++], r4.head && C && r4.length < 65536 && (r4.head.name += String.fromCharCode(C)), C && x < f2; )
                        ;
                      if (512 & r4.flags && (r4.check = i(r4.check, l2, x, p3)), f2 -= x, p3 += x, C)
                        break t;
                    } else
                      r4.head && (r4.head.name = null);
                    r4.length = 0, r4.mode = 8;
                  case 8:
                    if (4096 & r4.flags) {
                      if (f2 === 0)
                        break t;
                      for (x = 0; C = l2[p3 + x++], r4.head && C && r4.length < 65536 && (r4.head.comment += String.fromCharCode(C)), C && x < f2; )
                        ;
                      if (512 & r4.flags && (r4.check = i(r4.check, l2, x, p3)), f2 -= x, p3 += x, C)
                        break t;
                    } else
                      r4.head && (r4.head.comment = null);
                    r4.mode = 9;
                  case 9:
                    if (512 & r4.flags) {
                      for (; g2 < 16; ) {
                        if (f2 === 0)
                          break t;
                        f2--, w2 += l2[p3++] << g2, g2 += 8;
                      }
                      if (w2 !== (65535 & r4.check)) {
                        t4.msg = "header crc mismatch", r4.mode = 30;
                        break;
                      }
                      g2 = w2 = 0;
                    }
                    r4.head && (r4.head.hcrc = r4.flags >> 9 & 1, r4.head.done = true), t4.adler = r4.check = 0, r4.mode = 12;
                    break;
                  case 10:
                    for (; g2 < 32; ) {
                      if (f2 === 0)
                        break t;
                      f2--, w2 += l2[p3++] << g2, g2 += 8;
                    }
                    t4.adler = r4.check = u(w2), g2 = w2 = 0, r4.mode = 11;
                  case 11:
                    if (r4.havedict === 0)
                      return t4.next_out = d2, t4.avail_out = m2, t4.next_in = p3, t4.avail_in = f2, r4.hold = w2, r4.bits = g2, 2;
                    t4.adler = r4.check = 1, r4.mode = 12;
                  case 12:
                    if (e4 === 5 || e4 === 6)
                      break t;
                  case 13:
                    if (r4.last) {
                      w2 >>>= 7 & g2, g2 -= 7 & g2, r4.mode = 27;
                      break;
                    }
                    for (; g2 < 3; ) {
                      if (f2 === 0)
                        break t;
                      f2--, w2 += l2[p3++] << g2, g2 += 8;
                    }
                    switch (r4.last = 1 & w2, g2 -= 1, 3 & (w2 >>>= 1)) {
                      case 0:
                        r4.mode = 14;
                        break;
                      case 1:
                        if (y(r4), r4.mode = 20, e4 !== 6)
                          break;
                        w2 >>>= 2, g2 -= 2;
                        break t;
                      case 2:
                        r4.mode = 17;
                        break;
                      case 3:
                        t4.msg = "invalid block type", r4.mode = 30;
                    }
                    w2 >>>= 2, g2 -= 2;
                    break;
                  case 14:
                    for (w2 >>>= 7 & g2, g2 -= 7 & g2; g2 < 32; ) {
                      if (f2 === 0)
                        break t;
                      f2--, w2 += l2[p3++] << g2, g2 += 8;
                    }
                    if ((65535 & w2) != (w2 >>> 16 ^ 65535)) {
                      t4.msg = "invalid stored block lengths", r4.mode = 30;
                      break;
                    }
                    if (r4.length = 65535 & w2, g2 = w2 = 0, r4.mode = 15, e4 === 6)
                      break t;
                  case 15:
                    r4.mode = 16;
                  case 16:
                    if (x = r4.length) {
                      if (f2 < x && (x = f2), m2 < x && (x = m2), x === 0)
                        break t;
                      n2.arraySet(h2, l2, p3, x, d2), f2 -= x, p3 += x, m2 -= x, d2 += x, r4.length -= x;
                      break;
                    }
                    r4.mode = 12;
                    break;
                  case 17:
                    for (; g2 < 14; ) {
                      if (f2 === 0)
                        break t;
                      f2--, w2 += l2[p3++] << g2, g2 += 8;
                    }
                    if (r4.nlen = 257 + (31 & w2), w2 >>>= 5, g2 -= 5, r4.ndist = 1 + (31 & w2), w2 >>>= 5, g2 -= 5, r4.ncode = 4 + (15 & w2), w2 >>>= 4, g2 -= 4, 286 < r4.nlen || 30 < r4.ndist) {
                      t4.msg = "too many length or distance symbols", r4.mode = 30;
                      break;
                    }
                    r4.have = 0, r4.mode = 18;
                  case 18:
                    for (; r4.have < r4.ncode; ) {
                      for (; g2 < 3; ) {
                        if (f2 === 0)
                          break t;
                        f2--, w2 += l2[p3++] << g2, g2 += 8;
                      }
                      r4.lens[B[r4.have++]] = 7 & w2, w2 >>>= 3, g2 -= 3;
                    }
                    for (; r4.have < 19; )
                      r4.lens[B[r4.have++]] = 0;
                    if (r4.lencode = r4.lendyn, r4.lenbits = 7, D = { bits: r4.lenbits }, k = a(0, r4.lens, 0, 19, r4.lencode, 0, r4.work, D), r4.lenbits = D.bits, k) {
                      t4.msg = "invalid code lengths set", r4.mode = 30;
                      break;
                    }
                    r4.have = 0, r4.mode = 19;
                  case 19:
                    for (; r4.have < r4.nlen + r4.ndist; ) {
                      for (; S = (P = r4.lencode[w2 & (1 << r4.lenbits) - 1]) >>> 16 & 255, R = 65535 & P, !((A = P >>> 24) <= g2); ) {
                        if (f2 === 0)
                          break t;
                        f2--, w2 += l2[p3++] << g2, g2 += 8;
                      }
                      if (R < 16)
                        w2 >>>= A, g2 -= A, r4.lens[r4.have++] = R;
                      else {
                        if (R === 16) {
                          for (L = A + 2; g2 < L; ) {
                            if (f2 === 0)
                              break t;
                            f2--, w2 += l2[p3++] << g2, g2 += 8;
                          }
                          if (w2 >>>= A, g2 -= A, r4.have === 0) {
                            t4.msg = "invalid bit length repeat", r4.mode = 30;
                            break;
                          }
                          C = r4.lens[r4.have - 1], x = 3 + (3 & w2), w2 >>>= 2, g2 -= 2;
                        } else if (R === 17) {
                          for (L = A + 3; g2 < L; ) {
                            if (f2 === 0)
                              break t;
                            f2--, w2 += l2[p3++] << g2, g2 += 8;
                          }
                          g2 -= A, C = 0, x = 3 + (7 & (w2 >>>= A)), w2 >>>= 3, g2 -= 3;
                        } else {
                          for (L = A + 7; g2 < L; ) {
                            if (f2 === 0)
                              break t;
                            f2--, w2 += l2[p3++] << g2, g2 += 8;
                          }
                          g2 -= A, C = 0, x = 11 + (127 & (w2 >>>= A)), w2 >>>= 7, g2 -= 7;
                        }
                        if (r4.have + x > r4.nlen + r4.ndist) {
                          t4.msg = "invalid bit length repeat", r4.mode = 30;
                          break;
                        }
                        for (; x--; )
                          r4.lens[r4.have++] = C;
                      }
                    }
                    if (r4.mode === 30)
                      break;
                    if (r4.lens[256] === 0) {
                      t4.msg = "invalid code -- missing end-of-block", r4.mode = 30;
                      break;
                    }
                    if (r4.lenbits = 9, D = { bits: r4.lenbits }, k = a(1, r4.lens, 0, r4.nlen, r4.lencode, 0, r4.work, D), r4.lenbits = D.bits, k) {
                      t4.msg = "invalid literal/lengths set", r4.mode = 30;
                      break;
                    }
                    if (r4.distbits = 6, r4.distcode = r4.distdyn, D = { bits: r4.distbits }, k = a(2, r4.lens, r4.nlen, r4.ndist, r4.distcode, 0, r4.work, D), r4.distbits = D.bits, k) {
                      t4.msg = "invalid distances set", r4.mode = 30;
                      break;
                    }
                    if (r4.mode = 20, e4 === 6)
                      break t;
                  case 20:
                    r4.mode = 21;
                  case 21:
                    if (6 <= f2 && 258 <= m2) {
                      t4.next_out = d2, t4.avail_out = m2, t4.next_in = p3, t4.avail_in = f2, r4.hold = w2, r4.bits = g2, o(t4, _), d2 = t4.next_out, h2 = t4.output, m2 = t4.avail_out, p3 = t4.next_in, l2 = t4.input, f2 = t4.avail_in, w2 = r4.hold, g2 = r4.bits, r4.mode === 12 && (r4.back = -1);
                      break;
                    }
                    for (r4.back = 0; S = (P = r4.lencode[w2 & (1 << r4.lenbits) - 1]) >>> 16 & 255, R = 65535 & P, !((A = P >>> 24) <= g2); ) {
                      if (f2 === 0)
                        break t;
                      f2--, w2 += l2[p3++] << g2, g2 += 8;
                    }
                    if (S && (240 & S) == 0) {
                      for (I = A, N = S, O = R; S = (P = r4.lencode[O + ((w2 & (1 << I + N) - 1) >> I)]) >>> 16 & 255, R = 65535 & P, !(I + (A = P >>> 24) <= g2); ) {
                        if (f2 === 0)
                          break t;
                        f2--, w2 += l2[p3++] << g2, g2 += 8;
                      }
                      w2 >>>= I, g2 -= I, r4.back += I;
                    }
                    if (w2 >>>= A, g2 -= A, r4.back += A, r4.length = R, S === 0) {
                      r4.mode = 26;
                      break;
                    }
                    if (32 & S) {
                      r4.back = -1, r4.mode = 12;
                      break;
                    }
                    if (64 & S) {
                      t4.msg = "invalid literal/length code", r4.mode = 30;
                      break;
                    }
                    r4.extra = 15 & S, r4.mode = 22;
                  case 22:
                    if (r4.extra) {
                      for (L = r4.extra; g2 < L; ) {
                        if (f2 === 0)
                          break t;
                        f2--, w2 += l2[p3++] << g2, g2 += 8;
                      }
                      r4.length += w2 & (1 << r4.extra) - 1, w2 >>>= r4.extra, g2 -= r4.extra, r4.back += r4.extra;
                    }
                    r4.was = r4.length, r4.mode = 23;
                  case 23:
                    for (; S = (P = r4.distcode[w2 & (1 << r4.distbits) - 1]) >>> 16 & 255, R = 65535 & P, !((A = P >>> 24) <= g2); ) {
                      if (f2 === 0)
                        break t;
                      f2--, w2 += l2[p3++] << g2, g2 += 8;
                    }
                    if ((240 & S) == 0) {
                      for (I = A, N = S, O = R; S = (P = r4.distcode[O + ((w2 & (1 << I + N) - 1) >> I)]) >>> 16 & 255, R = 65535 & P, !(I + (A = P >>> 24) <= g2); ) {
                        if (f2 === 0)
                          break t;
                        f2--, w2 += l2[p3++] << g2, g2 += 8;
                      }
                      w2 >>>= I, g2 -= I, r4.back += I;
                    }
                    if (w2 >>>= A, g2 -= A, r4.back += A, 64 & S) {
                      t4.msg = "invalid distance code", r4.mode = 30;
                      break;
                    }
                    r4.offset = R, r4.extra = 15 & S, r4.mode = 24;
                  case 24:
                    if (r4.extra) {
                      for (L = r4.extra; g2 < L; ) {
                        if (f2 === 0)
                          break t;
                        f2--, w2 += l2[p3++] << g2, g2 += 8;
                      }
                      r4.offset += w2 & (1 << r4.extra) - 1, w2 >>>= r4.extra, g2 -= r4.extra, r4.back += r4.extra;
                    }
                    if (r4.offset > r4.dmax) {
                      t4.msg = "invalid distance too far back", r4.mode = 30;
                      break;
                    }
                    r4.mode = 25;
                  case 25:
                    if (m2 === 0)
                      break t;
                    if (x = _ - m2, r4.offset > x) {
                      if ((x = r4.offset - x) > r4.whave && r4.sane) {
                        t4.msg = "invalid distance too far back", r4.mode = 30;
                        break;
                      }
                      E = x > r4.wnext ? (x -= r4.wnext, r4.wsize - x) : r4.wnext - x, x > r4.length && (x = r4.length), T = r4.window;
                    } else
                      T = h2, E = d2 - r4.offset, x = r4.length;
                    for (m2 < x && (x = m2), m2 -= x, r4.length -= x; h2[d2++] = T[E++], --x; )
                      ;
                    r4.length === 0 && (r4.mode = 21);
                    break;
                  case 26:
                    if (m2 === 0)
                      break t;
                    h2[d2++] = r4.length, m2--, r4.mode = 21;
                    break;
                  case 27:
                    if (r4.wrap) {
                      for (; g2 < 32; ) {
                        if (f2 === 0)
                          break t;
                        f2--, w2 |= l2[p3++] << g2, g2 += 8;
                      }
                      if (_ -= m2, t4.total_out += _, r4.total += _, _ && (t4.adler = r4.check = r4.flags ? i(r4.check, h2, _, d2 - _) : s(r4.check, h2, _, d2 - _)), _ = m2, (r4.flags ? w2 : u(w2)) !== r4.check) {
                        t4.msg = "incorrect data check", r4.mode = 30;
                        break;
                      }
                      g2 = w2 = 0;
                    }
                    r4.mode = 28;
                  case 28:
                    if (r4.wrap && r4.flags) {
                      for (; g2 < 32; ) {
                        if (f2 === 0)
                          break t;
                        f2--, w2 += l2[p3++] << g2, g2 += 8;
                      }
                      if (w2 !== (4294967295 & r4.total)) {
                        t4.msg = "incorrect length check", r4.mode = 30;
                        break;
                      }
                      g2 = w2 = 0;
                    }
                    r4.mode = 29;
                  case 29:
                    k = 1;
                    break t;
                  case 30:
                    k = -3;
                    break t;
                  case 31:
                    return -4;
                  default:
                    return c;
                }
            return t4.next_out = d2, t4.avail_out = m2, t4.next_in = p3, t4.avail_in = f2, r4.hold = w2, r4.bits = g2, (r4.wsize || _ !== t4.avail_out && r4.mode < 30 && (r4.mode < 27 || e4 !== 4)) && b(t4, t4.output, t4.next_out, _ - t4.avail_out) ? (r4.mode = 31, -4) : (v -= t4.avail_in, _ -= t4.avail_out, t4.total_in += v, t4.total_out += _, r4.total += _, r4.wrap && _ && (t4.adler = r4.check = r4.flags ? i(r4.check, h2, _, t4.next_out - _) : s(r4.check, h2, _, t4.next_out - _)), t4.data_type = r4.bits + (r4.last ? 64 : 0) + (r4.mode === 12 ? 128 : 0) + (r4.mode === 20 || r4.mode === 15 ? 256 : 0), (v == 0 && _ === 0 || e4 === 4) && k === 0 && (k = -5), k);
          }, r3.inflateEnd = function(t4) {
            if (!t4 || !t4.state)
              return c;
            var e4 = t4.state;
            return e4.window && (e4.window = null), t4.state = null, 0;
          }, r3.inflateGetHeader = function(t4, e4) {
            var r4;
            return t4 && t4.state ? (2 & (r4 = t4.state).wrap) == 0 ? c : ((r4.head = e4).done = false, 0) : c;
          }, r3.inflateSetDictionary = function(t4, e4) {
            var r4, n3 = e4.length;
            return t4 && t4.state ? (r4 = t4.state).wrap !== 0 && r4.mode !== 11 ? c : r4.mode === 11 && s(1, e4, n3, 0) !== r4.check ? -3 : b(t4, e4, n3, n3) ? (r4.mode = 31, -4) : (r4.havedict = 1, 0) : c;
          }, r3.inflateInfo = "pako inflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(t3, e3, r3) {
          var n2 = t3("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], i = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], a = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
          e3.exports = function(t4, e4, r4, c, u, l, h, p2) {
            var d, f, m, w, g, y, b, v, _, x = p2.bits, E = 0, T = 0, A = 0, S = 0, R = 0, I = 0, N = 0, O = 0, C = 0, k = 0, D = null, L = 0, P = new n2.Buf16(16), F = new n2.Buf16(16), B = null, M = 0;
            for (E = 0; E <= 15; E++)
              P[E] = 0;
            for (T = 0; T < c; T++)
              P[e4[r4 + T]]++;
            for (R = x, S = 15; 1 <= S && P[S] === 0; S--)
              ;
            if (S < R && (R = S), S === 0)
              return u[l++] = 20971520, u[l++] = 20971520, p2.bits = 1, 0;
            for (A = 1; A < S && P[A] === 0; A++)
              ;
            for (R < A && (R = A), E = O = 1; E <= 15; E++)
              if (O <<= 1, (O -= P[E]) < 0)
                return -1;
            if (0 < O && (t4 === 0 || S !== 1))
              return -1;
            for (F[1] = 0, E = 1; E < 15; E++)
              F[E + 1] = F[E] + P[E];
            for (T = 0; T < c; T++)
              e4[r4 + T] !== 0 && (h[F[e4[r4 + T]]++] = T);
            if (y = t4 === 0 ? (D = B = h, 19) : t4 === 1 ? (D = s, L -= 257, B = i, M -= 257, 256) : (D = o, B = a, -1), E = A, g = l, N = T = k = 0, m = -1, w = (C = 1 << (I = R)) - 1, t4 === 1 && 852 < C || t4 === 2 && 592 < C)
              return 1;
            for (; ; ) {
              for (b = E - N, _ = h[T] < y ? (v = 0, h[T]) : h[T] > y ? (v = B[M + h[T]], D[L + h[T]]) : (v = 96, 0), d = 1 << E - N, A = f = 1 << I; u[g + (k >> N) + (f -= d)] = b << 24 | v << 16 | _ | 0, f !== 0; )
                ;
              for (d = 1 << E - 1; k & d; )
                d >>= 1;
              if (d !== 0 ? (k &= d - 1, k += d) : k = 0, T++, --P[E] == 0) {
                if (E === S)
                  break;
                E = e4[r4 + h[T]];
              }
              if (R < E && (k & w) !== m) {
                for (N === 0 && (N = R), g += A, O = 1 << (I = E - N); I + N < S && !((O -= P[I + N]) <= 0); )
                  I++, O <<= 1;
                if (C += 1 << I, t4 === 1 && 852 < C || t4 === 2 && 592 < C)
                  return 1;
                u[m = k & w] = R << 24 | I << 16 | g - l | 0;
              }
            }
            return k !== 0 && (u[g + k] = E - N << 24 | 64 << 16 | 0), p2.bits = R, 0;
          };
        }, { "../utils/common": 41 }], 51: [function(t3, e3, r3) {
          e3.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
        }, {}], 52: [function(t3, e3, r3) {
          var n2 = t3("../utils/common");
          function s(t4) {
            for (var e4 = t4.length; 0 <= --e4; )
              t4[e4] = 0;
          }
          var i = 256, o = 286, a = 30, c = 15, u = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], l = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], h = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], p2 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], d = new Array(576);
          s(d);
          var f = new Array(60);
          s(f);
          var m = new Array(512);
          s(m);
          var w = new Array(256);
          s(w);
          var g = new Array(29);
          s(g);
          var y, b, v, _ = new Array(a);
          function x(t4, e4, r4, n3, s2) {
            this.static_tree = t4, this.extra_bits = e4, this.extra_base = r4, this.elems = n3, this.max_length = s2, this.has_stree = t4 && t4.length;
          }
          function E(t4, e4) {
            this.dyn_tree = t4, this.max_code = 0, this.stat_desc = e4;
          }
          function T(t4) {
            return t4 < 256 ? m[t4] : m[256 + (t4 >>> 7)];
          }
          function A(t4, e4) {
            t4.pending_buf[t4.pending++] = 255 & e4, t4.pending_buf[t4.pending++] = e4 >>> 8 & 255;
          }
          function S(t4, e4, r4) {
            t4.bi_valid > 16 - r4 ? (t4.bi_buf |= e4 << t4.bi_valid & 65535, A(t4, t4.bi_buf), t4.bi_buf = e4 >> 16 - t4.bi_valid, t4.bi_valid += r4 - 16) : (t4.bi_buf |= e4 << t4.bi_valid & 65535, t4.bi_valid += r4);
          }
          function R(t4, e4, r4) {
            S(t4, r4[2 * e4], r4[2 * e4 + 1]);
          }
          function I(t4, e4) {
            for (var r4 = 0; r4 |= 1 & t4, t4 >>>= 1, r4 <<= 1, 0 < --e4; )
              ;
            return r4 >>> 1;
          }
          function N(t4, e4, r4) {
            var n3, s2, i2 = new Array(16), o2 = 0;
            for (n3 = 1; n3 <= c; n3++)
              i2[n3] = o2 = o2 + r4[n3 - 1] << 1;
            for (s2 = 0; s2 <= e4; s2++) {
              var a2 = t4[2 * s2 + 1];
              a2 !== 0 && (t4[2 * s2] = I(i2[a2]++, a2));
            }
          }
          function O(t4) {
            var e4;
            for (e4 = 0; e4 < o; e4++)
              t4.dyn_ltree[2 * e4] = 0;
            for (e4 = 0; e4 < a; e4++)
              t4.dyn_dtree[2 * e4] = 0;
            for (e4 = 0; e4 < 19; e4++)
              t4.bl_tree[2 * e4] = 0;
            t4.dyn_ltree[512] = 1, t4.opt_len = t4.static_len = 0, t4.last_lit = t4.matches = 0;
          }
          function C(t4) {
            8 < t4.bi_valid ? A(t4, t4.bi_buf) : 0 < t4.bi_valid && (t4.pending_buf[t4.pending++] = t4.bi_buf), t4.bi_buf = 0, t4.bi_valid = 0;
          }
          function k(t4, e4, r4, n3) {
            var s2 = 2 * e4, i2 = 2 * r4;
            return t4[s2] < t4[i2] || t4[s2] === t4[i2] && n3[e4] <= n3[r4];
          }
          function D(t4, e4, r4) {
            for (var n3 = t4.heap[r4], s2 = r4 << 1; s2 <= t4.heap_len && (s2 < t4.heap_len && k(e4, t4.heap[s2 + 1], t4.heap[s2], t4.depth) && s2++, !k(e4, n3, t4.heap[s2], t4.depth)); )
              t4.heap[r4] = t4.heap[s2], r4 = s2, s2 <<= 1;
            t4.heap[r4] = n3;
          }
          function L(t4, e4, r4) {
            var n3, s2, o2, a2, c2 = 0;
            if (t4.last_lit !== 0)
              for (; n3 = t4.pending_buf[t4.d_buf + 2 * c2] << 8 | t4.pending_buf[t4.d_buf + 2 * c2 + 1], s2 = t4.pending_buf[t4.l_buf + c2], c2++, n3 === 0 ? R(t4, s2, e4) : (R(t4, (o2 = w[s2]) + i + 1, e4), (a2 = u[o2]) !== 0 && S(t4, s2 -= g[o2], a2), R(t4, o2 = T(--n3), r4), (a2 = l[o2]) !== 0 && S(t4, n3 -= _[o2], a2)), c2 < t4.last_lit; )
                ;
            R(t4, 256, e4);
          }
          function P(t4, e4) {
            var r4, n3, s2, i2 = e4.dyn_tree, o2 = e4.stat_desc.static_tree, a2 = e4.stat_desc.has_stree, u2 = e4.stat_desc.elems, l2 = -1;
            for (t4.heap_len = 0, t4.heap_max = 573, r4 = 0; r4 < u2; r4++)
              i2[2 * r4] !== 0 ? (t4.heap[++t4.heap_len] = l2 = r4, t4.depth[r4] = 0) : i2[2 * r4 + 1] = 0;
            for (; t4.heap_len < 2; )
              i2[2 * (s2 = t4.heap[++t4.heap_len] = l2 < 2 ? ++l2 : 0)] = 1, t4.depth[s2] = 0, t4.opt_len--, a2 && (t4.static_len -= o2[2 * s2 + 1]);
            for (e4.max_code = l2, r4 = t4.heap_len >> 1; 1 <= r4; r4--)
              D(t4, i2, r4);
            for (s2 = u2; r4 = t4.heap[1], t4.heap[1] = t4.heap[t4.heap_len--], D(t4, i2, 1), n3 = t4.heap[1], t4.heap[--t4.heap_max] = r4, t4.heap[--t4.heap_max] = n3, i2[2 * s2] = i2[2 * r4] + i2[2 * n3], t4.depth[s2] = (t4.depth[r4] >= t4.depth[n3] ? t4.depth[r4] : t4.depth[n3]) + 1, i2[2 * r4 + 1] = i2[2 * n3 + 1] = s2, t4.heap[1] = s2++, D(t4, i2, 1), 2 <= t4.heap_len; )
              ;
            t4.heap[--t4.heap_max] = t4.heap[1], function(t5, e5) {
              var r5, n4, s3, i3, o3, a3, u3 = e5.dyn_tree, l3 = e5.max_code, h2 = e5.stat_desc.static_tree, p3 = e5.stat_desc.has_stree, d2 = e5.stat_desc.extra_bits, f2 = e5.stat_desc.extra_base, m2 = e5.stat_desc.max_length, w2 = 0;
              for (i3 = 0; i3 <= c; i3++)
                t5.bl_count[i3] = 0;
              for (u3[2 * t5.heap[t5.heap_max] + 1] = 0, r5 = t5.heap_max + 1; r5 < 573; r5++)
                m2 < (i3 = u3[2 * u3[2 * (n4 = t5.heap[r5]) + 1] + 1] + 1) && (i3 = m2, w2++), u3[2 * n4 + 1] = i3, l3 < n4 || (t5.bl_count[i3]++, o3 = 0, f2 <= n4 && (o3 = d2[n4 - f2]), a3 = u3[2 * n4], t5.opt_len += a3 * (i3 + o3), p3 && (t5.static_len += a3 * (h2[2 * n4 + 1] + o3)));
              if (w2 !== 0) {
                do {
                  for (i3 = m2 - 1; t5.bl_count[i3] === 0; )
                    i3--;
                  t5.bl_count[i3]--, t5.bl_count[i3 + 1] += 2, t5.bl_count[m2]--, w2 -= 2;
                } while (0 < w2);
                for (i3 = m2; i3 !== 0; i3--)
                  for (n4 = t5.bl_count[i3]; n4 !== 0; )
                    l3 < (s3 = t5.heap[--r5]) || (u3[2 * s3 + 1] !== i3 && (t5.opt_len += (i3 - u3[2 * s3 + 1]) * u3[2 * s3], u3[2 * s3 + 1] = i3), n4--);
              }
            }(t4, e4), N(i2, l2, t4.bl_count);
          }
          function F(t4, e4, r4) {
            var n3, s2, i2 = -1, o2 = e4[1], a2 = 0, c2 = 7, u2 = 4;
            for (o2 === 0 && (c2 = 138, u2 = 3), e4[2 * (r4 + 1) + 1] = 65535, n3 = 0; n3 <= r4; n3++)
              s2 = o2, o2 = e4[2 * (n3 + 1) + 1], ++a2 < c2 && s2 === o2 || (a2 < u2 ? t4.bl_tree[2 * s2] += a2 : s2 !== 0 ? (s2 !== i2 && t4.bl_tree[2 * s2]++, t4.bl_tree[32]++) : a2 <= 10 ? t4.bl_tree[34]++ : t4.bl_tree[36]++, i2 = s2, u2 = (a2 = 0) === o2 ? (c2 = 138, 3) : s2 === o2 ? (c2 = 6, 3) : (c2 = 7, 4));
          }
          function B(t4, e4, r4) {
            var n3, s2, i2 = -1, o2 = e4[1], a2 = 0, c2 = 7, u2 = 4;
            for (o2 === 0 && (c2 = 138, u2 = 3), n3 = 0; n3 <= r4; n3++)
              if (s2 = o2, o2 = e4[2 * (n3 + 1) + 1], !(++a2 < c2 && s2 === o2)) {
                if (a2 < u2)
                  for (; R(t4, s2, t4.bl_tree), --a2 != 0; )
                    ;
                else
                  s2 !== 0 ? (s2 !== i2 && (R(t4, s2, t4.bl_tree), a2--), R(t4, 16, t4.bl_tree), S(t4, a2 - 3, 2)) : a2 <= 10 ? (R(t4, 17, t4.bl_tree), S(t4, a2 - 3, 3)) : (R(t4, 18, t4.bl_tree), S(t4, a2 - 11, 7));
                i2 = s2, u2 = (a2 = 0) === o2 ? (c2 = 138, 3) : s2 === o2 ? (c2 = 6, 3) : (c2 = 7, 4);
              }
          }
          s(_);
          var M = false;
          function U(t4, e4, r4, s2) {
            S(t4, 0 + (s2 ? 1 : 0), 3), function(t5, e5, r5, s3) {
              C(t5), A(t5, r5), A(t5, ~r5), n2.arraySet(t5.pending_buf, t5.window, e5, r5, t5.pending), t5.pending += r5;
            }(t4, e4, r4);
          }
          r3._tr_init = function(t4) {
            M || (function() {
              var t5, e4, r4, n3, s2, i2 = new Array(16);
              for (n3 = r4 = 0; n3 < 28; n3++)
                for (g[n3] = r4, t5 = 0; t5 < 1 << u[n3]; t5++)
                  w[r4++] = n3;
              for (w[r4 - 1] = n3, n3 = s2 = 0; n3 < 16; n3++)
                for (_[n3] = s2, t5 = 0; t5 < 1 << l[n3]; t5++)
                  m[s2++] = n3;
              for (s2 >>= 7; n3 < a; n3++)
                for (_[n3] = s2 << 7, t5 = 0; t5 < 1 << l[n3] - 7; t5++)
                  m[256 + s2++] = n3;
              for (e4 = 0; e4 <= c; e4++)
                i2[e4] = 0;
              for (t5 = 0; t5 <= 143; )
                d[2 * t5 + 1] = 8, t5++, i2[8]++;
              for (; t5 <= 255; )
                d[2 * t5 + 1] = 9, t5++, i2[9]++;
              for (; t5 <= 279; )
                d[2 * t5 + 1] = 7, t5++, i2[7]++;
              for (; t5 <= 287; )
                d[2 * t5 + 1] = 8, t5++, i2[8]++;
              for (N(d, 287, i2), t5 = 0; t5 < a; t5++)
                f[2 * t5 + 1] = 5, f[2 * t5] = I(t5, 5);
              y = new x(d, u, 257, o, c), b = new x(f, l, 0, a, c), v = new x(new Array(0), h, 0, 19, 7);
            }(), M = true), t4.l_desc = new E(t4.dyn_ltree, y), t4.d_desc = new E(t4.dyn_dtree, b), t4.bl_desc = new E(t4.bl_tree, v), t4.bi_buf = 0, t4.bi_valid = 0, O(t4);
          }, r3._tr_stored_block = U, r3._tr_flush_block = function(t4, e4, r4, n3) {
            var s2, o2, a2 = 0;
            0 < t4.level ? (t4.strm.data_type === 2 && (t4.strm.data_type = function(t5) {
              var e5, r5 = 4093624447;
              for (e5 = 0; e5 <= 31; e5++, r5 >>>= 1)
                if (1 & r5 && t5.dyn_ltree[2 * e5] !== 0)
                  return 0;
              if (t5.dyn_ltree[18] !== 0 || t5.dyn_ltree[20] !== 0 || t5.dyn_ltree[26] !== 0)
                return 1;
              for (e5 = 32; e5 < i; e5++)
                if (t5.dyn_ltree[2 * e5] !== 0)
                  return 1;
              return 0;
            }(t4)), P(t4, t4.l_desc), P(t4, t4.d_desc), a2 = function(t5) {
              var e5;
              for (F(t5, t5.dyn_ltree, t5.l_desc.max_code), F(t5, t5.dyn_dtree, t5.d_desc.max_code), P(t5, t5.bl_desc), e5 = 18; 3 <= e5 && t5.bl_tree[2 * p2[e5] + 1] === 0; e5--)
                ;
              return t5.opt_len += 3 * (e5 + 1) + 5 + 5 + 4, e5;
            }(t4), s2 = t4.opt_len + 3 + 7 >>> 3, (o2 = t4.static_len + 3 + 7 >>> 3) <= s2 && (s2 = o2)) : s2 = o2 = r4 + 5, r4 + 4 <= s2 && e4 !== -1 ? U(t4, e4, r4, n3) : t4.strategy === 4 || o2 === s2 ? (S(t4, 2 + (n3 ? 1 : 0), 3), L(t4, d, f)) : (S(t4, 4 + (n3 ? 1 : 0), 3), function(t5, e5, r5, n4) {
              var s3;
              for (S(t5, e5 - 257, 5), S(t5, r5 - 1, 5), S(t5, n4 - 4, 4), s3 = 0; s3 < n4; s3++)
                S(t5, t5.bl_tree[2 * p2[s3] + 1], 3);
              B(t5, t5.dyn_ltree, e5 - 1), B(t5, t5.dyn_dtree, r5 - 1);
            }(t4, t4.l_desc.max_code + 1, t4.d_desc.max_code + 1, a2 + 1), L(t4, t4.dyn_ltree, t4.dyn_dtree)), O(t4), n3 && C(t4);
          }, r3._tr_tally = function(t4, e4, r4) {
            return t4.pending_buf[t4.d_buf + 2 * t4.last_lit] = e4 >>> 8 & 255, t4.pending_buf[t4.d_buf + 2 * t4.last_lit + 1] = 255 & e4, t4.pending_buf[t4.l_buf + t4.last_lit] = 255 & r4, t4.last_lit++, e4 === 0 ? t4.dyn_ltree[2 * r4]++ : (t4.matches++, e4--, t4.dyn_ltree[2 * (w[r4] + i + 1)]++, t4.dyn_dtree[2 * T(e4)]++), t4.last_lit === t4.lit_bufsize - 1;
          }, r3._tr_align = function(t4) {
            S(t4, 2, 3), R(t4, 256, d), function(t5) {
              t5.bi_valid === 16 ? (A(t5, t5.bi_buf), t5.bi_buf = 0, t5.bi_valid = 0) : 8 <= t5.bi_valid && (t5.pending_buf[t5.pending++] = 255 & t5.bi_buf, t5.bi_buf >>= 8, t5.bi_valid -= 8);
            }(t4);
          };
        }, { "../utils/common": 41 }], 53: [function(t3, e3, r3) {
          e3.exports = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
          };
        }, {}], 54: [function(t3, e3, r3) {
          e3.exports = typeof setImmediate == "function" ? setImmediate : function() {
            var t4 = [].slice.apply(arguments);
            t4.splice(1, 0, 0), setTimeout.apply(null, t4);
          };
        }, {}] }, {}, [10])(10);
      }, 155: (t2) => {
        var e2, r2, n2 = t2.exports = {};
        function s() {
          throw new Error("setTimeout has not been defined");
        }
        function i() {
          throw new Error("clearTimeout has not been defined");
        }
        function o(t3) {
          if (e2 === setTimeout)
            return setTimeout(t3, 0);
          if ((e2 === s || !e2) && setTimeout)
            return e2 = setTimeout, setTimeout(t3, 0);
          try {
            return e2(t3, 0);
          } catch (r3) {
            try {
              return e2.call(null, t3, 0);
            } catch (r4) {
              return e2.call(this, t3, 0);
            }
          }
        }
        !function() {
          try {
            e2 = typeof setTimeout == "function" ? setTimeout : s;
          } catch (t3) {
            e2 = s;
          }
          try {
            r2 = typeof clearTimeout == "function" ? clearTimeout : i;
          } catch (t3) {
            r2 = i;
          }
        }();
        var a, c = [], u = false, l = -1;
        function h() {
          u && a && (u = false, a.length ? c = a.concat(c) : l = -1, c.length && p2());
        }
        function p2() {
          if (!u) {
            var t3 = o(h);
            u = true;
            for (var e3 = c.length; e3; ) {
              for (a = c, c = []; ++l < e3; )
                a && a[l].run();
              l = -1, e3 = c.length;
            }
            a = null, u = false, function(t4) {
              if (r2 === clearTimeout)
                return clearTimeout(t4);
              if ((r2 === i || !r2) && clearTimeout)
                return r2 = clearTimeout, clearTimeout(t4);
              try {
                r2(t4);
              } catch (e4) {
                try {
                  return r2.call(null, t4);
                } catch (e5) {
                  return r2.call(this, t4);
                }
              }
            }(t3);
          }
        }
        function d(t3, e3) {
          this.fun = t3, this.array = e3;
        }
        function f() {
        }
        n2.nextTick = function(t3) {
          var e3 = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var r3 = 1; r3 < arguments.length; r3++)
              e3[r3 - 1] = arguments[r3];
          c.push(new d(t3, e3)), c.length !== 1 || u || o(p2);
        }, d.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, n2.title = "browser", n2.browser = true, n2.env = {}, n2.argv = [], n2.version = "", n2.versions = {}, n2.on = f, n2.addListener = f, n2.once = f, n2.off = f, n2.removeListener = f, n2.removeAllListeners = f, n2.emit = f, n2.prependListener = f, n2.prependOnceListener = f, n2.listeners = function(t3) {
          return [];
        }, n2.binding = function(t3) {
          throw new Error("process.binding is not supported");
        }, n2.cwd = function() {
          return "/";
        }, n2.chdir = function(t3) {
          throw new Error("process.chdir is not supported");
        }, n2.umask = function() {
          return 0;
        };
      }, 509: (t2, e2, r2) => {
        var n2 = r2(764), s = n2.Buffer;
        function i(t3, e3) {
          for (var r3 in t3)
            e3[r3] = t3[r3];
        }
        function o(t3, e3, r3) {
          return s(t3, e3, r3);
        }
        s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow ? t2.exports = n2 : (i(n2, e2), e2.Buffer = o), i(s, o), o.from = function(t3, e3, r3) {
          if (typeof t3 == "number")
            throw new TypeError("Argument must not be a number");
          return s(t3, e3, r3);
        }, o.alloc = function(t3, e3, r3) {
          if (typeof t3 != "number")
            throw new TypeError("Argument must be a number");
          var n3 = s(t3);
          return e3 !== void 0 ? typeof r3 == "string" ? n3.fill(e3, r3) : n3.fill(e3) : n3.fill(0), n3;
        }, o.allocUnsafe = function(t3) {
          if (typeof t3 != "number")
            throw new TypeError("Argument must be a number");
          return s(t3);
        }, o.allocUnsafeSlow = function(t3) {
          if (typeof t3 != "number")
            throw new TypeError("Argument must be a number");
          return n2.SlowBuffer(t3);
        };
      }, 99: (t2, e2, r2) => {
        !function(t3) {
          t3.parser = function(t4, e4) {
            return new s(t4, e4);
          }, t3.SAXParser = s, t3.SAXStream = o, t3.createStream = function(t4, e4) {
            return new o(t4, e4);
          }, t3.MAX_BUFFER_LENGTH = 65536;
          var e3, n2 = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
          function s(e4, r3) {
            if (!(this instanceof s))
              return new s(e4, r3);
            var i2 = this;
            !function(t4) {
              for (var e5 = 0, r4 = n2.length; e5 < r4; e5++)
                t4[n2[e5]] = "";
            }(i2), i2.q = i2.c = "", i2.bufferCheckPosition = t3.MAX_BUFFER_LENGTH, i2.opt = r3 || {}, i2.opt.lowercase = i2.opt.lowercase || i2.opt.lowercasetags, i2.looseCase = i2.opt.lowercase ? "toLowerCase" : "toUpperCase", i2.tags = [], i2.closed = i2.closedRoot = i2.sawRoot = false, i2.tag = i2.error = null, i2.strict = !!e4, i2.noscript = !(!e4 && !i2.opt.noscript), i2.state = x.BEGIN, i2.strictEntities = i2.opt.strictEntities, i2.ENTITIES = i2.strictEntities ? Object.create(t3.XML_ENTITIES) : Object.create(t3.ENTITIES), i2.attribList = [], i2.opt.xmlns && (i2.ns = Object.create(u)), i2.trackPosition = i2.opt.position !== false, i2.trackPosition && (i2.position = i2.line = i2.column = 0), T(i2, "onready");
          }
          t3.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"], Object.create || (Object.create = function(t4) {
            function e4() {
            }
            return e4.prototype = t4, new e4();
          }), Object.keys || (Object.keys = function(t4) {
            var e4 = [];
            for (var r3 in t4)
              t4.hasOwnProperty(r3) && e4.push(r3);
            return e4;
          }), s.prototype = { end: function() {
            N(this);
          }, write: function(e4) {
            var r3 = this;
            if (this.error)
              throw this.error;
            if (r3.closed)
              return I(r3, "Cannot write after close. Assign an onready handler.");
            if (e4 === null)
              return N(r3);
            typeof e4 == "object" && (e4 = e4.toString());
            for (var s2 = 0, i2 = ""; i2 = M(e4, s2++), r3.c = i2, i2; )
              switch (r3.trackPosition && (r3.position++, i2 === "\n" ? (r3.line++, r3.column = 0) : r3.column++), r3.state) {
                case x.BEGIN:
                  if (r3.state = x.BEGIN_WHITESPACE, i2 === "\uFEFF")
                    continue;
                  B(r3, i2);
                  continue;
                case x.BEGIN_WHITESPACE:
                  B(r3, i2);
                  continue;
                case x.TEXT:
                  if (r3.sawRoot && !r3.closedRoot) {
                    for (var o2 = s2 - 1; i2 && i2 !== "<" && i2 !== "&"; )
                      (i2 = M(e4, s2++)) && r3.trackPosition && (r3.position++, i2 === "\n" ? (r3.line++, r3.column = 0) : r3.column++);
                    r3.textNode += e4.substring(o2, s2 - 1);
                  }
                  i2 !== "<" || r3.sawRoot && r3.closedRoot && !r3.strict ? (f(i2) || r3.sawRoot && !r3.closedRoot || O(r3, "Text data outside of root node."), i2 === "&" ? r3.state = x.TEXT_ENTITY : r3.textNode += i2) : (r3.state = x.OPEN_WAKA, r3.startTagPosition = r3.position);
                  continue;
                case x.SCRIPT:
                  i2 === "<" ? r3.state = x.SCRIPT_ENDING : r3.script += i2;
                  continue;
                case x.SCRIPT_ENDING:
                  i2 === "/" ? r3.state = x.CLOSE_TAG : (r3.script += "<" + i2, r3.state = x.SCRIPT);
                  continue;
                case x.OPEN_WAKA:
                  if (i2 === "!")
                    r3.state = x.SGML_DECL, r3.sgmlDecl = "";
                  else if (f(i2))
                    ;
                  else if (g(l, i2))
                    r3.state = x.OPEN_TAG, r3.tagName = i2;
                  else if (i2 === "/")
                    r3.state = x.CLOSE_TAG, r3.tagName = "";
                  else if (i2 === "?")
                    r3.state = x.PROC_INST, r3.procInstName = r3.procInstBody = "";
                  else {
                    if (O(r3, "Unencoded <"), r3.startTagPosition + 1 < r3.position) {
                      var a2 = r3.position - r3.startTagPosition;
                      i2 = new Array(a2).join(" ") + i2;
                    }
                    r3.textNode += "<" + i2, r3.state = x.TEXT;
                  }
                  continue;
                case x.SGML_DECL:
                  (r3.sgmlDecl + i2).toUpperCase() === "[CDATA[" ? (A(r3, "onopencdata"), r3.state = x.CDATA, r3.sgmlDecl = "", r3.cdata = "") : r3.sgmlDecl + i2 === "--" ? (r3.state = x.COMMENT, r3.comment = "", r3.sgmlDecl = "") : (r3.sgmlDecl + i2).toUpperCase() === "DOCTYPE" ? (r3.state = x.DOCTYPE, (r3.doctype || r3.sawRoot) && O(r3, "Inappropriately located doctype declaration"), r3.doctype = "", r3.sgmlDecl = "") : i2 === ">" ? (A(r3, "onsgmldeclaration", r3.sgmlDecl), r3.sgmlDecl = "", r3.state = x.TEXT) : m(i2) ? (r3.state = x.SGML_DECL_QUOTED, r3.sgmlDecl += i2) : r3.sgmlDecl += i2;
                  continue;
                case x.SGML_DECL_QUOTED:
                  i2 === r3.q && (r3.state = x.SGML_DECL, r3.q = ""), r3.sgmlDecl += i2;
                  continue;
                case x.DOCTYPE:
                  i2 === ">" ? (r3.state = x.TEXT, A(r3, "ondoctype", r3.doctype), r3.doctype = true) : (r3.doctype += i2, i2 === "[" ? r3.state = x.DOCTYPE_DTD : m(i2) && (r3.state = x.DOCTYPE_QUOTED, r3.q = i2));
                  continue;
                case x.DOCTYPE_QUOTED:
                  r3.doctype += i2, i2 === r3.q && (r3.q = "", r3.state = x.DOCTYPE);
                  continue;
                case x.DOCTYPE_DTD:
                  r3.doctype += i2, i2 === "]" ? r3.state = x.DOCTYPE : m(i2) && (r3.state = x.DOCTYPE_DTD_QUOTED, r3.q = i2);
                  continue;
                case x.DOCTYPE_DTD_QUOTED:
                  r3.doctype += i2, i2 === r3.q && (r3.state = x.DOCTYPE_DTD, r3.q = "");
                  continue;
                case x.COMMENT:
                  i2 === "-" ? r3.state = x.COMMENT_ENDING : r3.comment += i2;
                  continue;
                case x.COMMENT_ENDING:
                  i2 === "-" ? (r3.state = x.COMMENT_ENDED, r3.comment = R(r3.opt, r3.comment), r3.comment && A(r3, "oncomment", r3.comment), r3.comment = "") : (r3.comment += "-" + i2, r3.state = x.COMMENT);
                  continue;
                case x.COMMENT_ENDED:
                  i2 !== ">" ? (O(r3, "Malformed comment"), r3.comment += "--" + i2, r3.state = x.COMMENT) : r3.state = x.TEXT;
                  continue;
                case x.CDATA:
                  i2 === "]" ? r3.state = x.CDATA_ENDING : r3.cdata += i2;
                  continue;
                case x.CDATA_ENDING:
                  i2 === "]" ? r3.state = x.CDATA_ENDING_2 : (r3.cdata += "]" + i2, r3.state = x.CDATA);
                  continue;
                case x.CDATA_ENDING_2:
                  i2 === ">" ? (r3.cdata && A(r3, "oncdata", r3.cdata), A(r3, "onclosecdata"), r3.cdata = "", r3.state = x.TEXT) : i2 === "]" ? r3.cdata += "]" : (r3.cdata += "]]" + i2, r3.state = x.CDATA);
                  continue;
                case x.PROC_INST:
                  i2 === "?" ? r3.state = x.PROC_INST_ENDING : f(i2) ? r3.state = x.PROC_INST_BODY : r3.procInstName += i2;
                  continue;
                case x.PROC_INST_BODY:
                  if (!r3.procInstBody && f(i2))
                    continue;
                  i2 === "?" ? r3.state = x.PROC_INST_ENDING : r3.procInstBody += i2;
                  continue;
                case x.PROC_INST_ENDING:
                  i2 === ">" ? (A(r3, "onprocessinginstruction", { name: r3.procInstName, body: r3.procInstBody }), r3.procInstName = r3.procInstBody = "", r3.state = x.TEXT) : (r3.procInstBody += "?" + i2, r3.state = x.PROC_INST_BODY);
                  continue;
                case x.OPEN_TAG:
                  g(h, i2) ? r3.tagName += i2 : (C(r3), i2 === ">" ? L(r3) : i2 === "/" ? r3.state = x.OPEN_TAG_SLASH : (f(i2) || O(r3, "Invalid character in tag name"), r3.state = x.ATTRIB));
                  continue;
                case x.OPEN_TAG_SLASH:
                  i2 === ">" ? (L(r3, true), P(r3)) : (O(r3, "Forward-slash in opening tag not followed by >"), r3.state = x.ATTRIB);
                  continue;
                case x.ATTRIB:
                  if (f(i2))
                    continue;
                  i2 === ">" ? L(r3) : i2 === "/" ? r3.state = x.OPEN_TAG_SLASH : g(l, i2) ? (r3.attribName = i2, r3.attribValue = "", r3.state = x.ATTRIB_NAME) : O(r3, "Invalid attribute name");
                  continue;
                case x.ATTRIB_NAME:
                  i2 === "=" ? r3.state = x.ATTRIB_VALUE : i2 === ">" ? (O(r3, "Attribute without value"), r3.attribValue = r3.attribName, D(r3), L(r3)) : f(i2) ? r3.state = x.ATTRIB_NAME_SAW_WHITE : g(h, i2) ? r3.attribName += i2 : O(r3, "Invalid attribute name");
                  continue;
                case x.ATTRIB_NAME_SAW_WHITE:
                  if (i2 === "=")
                    r3.state = x.ATTRIB_VALUE;
                  else {
                    if (f(i2))
                      continue;
                    O(r3, "Attribute without value"), r3.tag.attributes[r3.attribName] = "", r3.attribValue = "", A(r3, "onattribute", { name: r3.attribName, value: "" }), r3.attribName = "", i2 === ">" ? L(r3) : g(l, i2) ? (r3.attribName = i2, r3.state = x.ATTRIB_NAME) : (O(r3, "Invalid attribute name"), r3.state = x.ATTRIB);
                  }
                  continue;
                case x.ATTRIB_VALUE:
                  if (f(i2))
                    continue;
                  m(i2) ? (r3.q = i2, r3.state = x.ATTRIB_VALUE_QUOTED) : (O(r3, "Unquoted attribute value"), r3.state = x.ATTRIB_VALUE_UNQUOTED, r3.attribValue = i2);
                  continue;
                case x.ATTRIB_VALUE_QUOTED:
                  if (i2 !== r3.q) {
                    i2 === "&" ? r3.state = x.ATTRIB_VALUE_ENTITY_Q : r3.attribValue += i2;
                    continue;
                  }
                  D(r3), r3.q = "", r3.state = x.ATTRIB_VALUE_CLOSED;
                  continue;
                case x.ATTRIB_VALUE_CLOSED:
                  f(i2) ? r3.state = x.ATTRIB : i2 === ">" ? L(r3) : i2 === "/" ? r3.state = x.OPEN_TAG_SLASH : g(l, i2) ? (O(r3, "No whitespace between attributes"), r3.attribName = i2, r3.attribValue = "", r3.state = x.ATTRIB_NAME) : O(r3, "Invalid attribute name");
                  continue;
                case x.ATTRIB_VALUE_UNQUOTED:
                  if (!w(i2)) {
                    i2 === "&" ? r3.state = x.ATTRIB_VALUE_ENTITY_U : r3.attribValue += i2;
                    continue;
                  }
                  D(r3), i2 === ">" ? L(r3) : r3.state = x.ATTRIB;
                  continue;
                case x.CLOSE_TAG:
                  if (r3.tagName)
                    i2 === ">" ? P(r3) : g(h, i2) ? r3.tagName += i2 : r3.script ? (r3.script += "</" + r3.tagName, r3.tagName = "", r3.state = x.SCRIPT) : (f(i2) || O(r3, "Invalid tagname in closing tag"), r3.state = x.CLOSE_TAG_SAW_WHITE);
                  else {
                    if (f(i2))
                      continue;
                    y(l, i2) ? r3.script ? (r3.script += "</" + i2, r3.state = x.SCRIPT) : O(r3, "Invalid tagname in closing tag.") : r3.tagName = i2;
                  }
                  continue;
                case x.CLOSE_TAG_SAW_WHITE:
                  if (f(i2))
                    continue;
                  i2 === ">" ? P(r3) : O(r3, "Invalid characters in closing tag");
                  continue;
                case x.TEXT_ENTITY:
                case x.ATTRIB_VALUE_ENTITY_Q:
                case x.ATTRIB_VALUE_ENTITY_U:
                  var c2, u2;
                  switch (r3.state) {
                    case x.TEXT_ENTITY:
                      c2 = x.TEXT, u2 = "textNode";
                      break;
                    case x.ATTRIB_VALUE_ENTITY_Q:
                      c2 = x.ATTRIB_VALUE_QUOTED, u2 = "attribValue";
                      break;
                    case x.ATTRIB_VALUE_ENTITY_U:
                      c2 = x.ATTRIB_VALUE_UNQUOTED, u2 = "attribValue";
                  }
                  i2 === ";" ? (r3[u2] += F(r3), r3.entity = "", r3.state = c2) : g(r3.entity.length ? d : p2, i2) ? r3.entity += i2 : (O(r3, "Invalid character in entity name"), r3[u2] += "&" + r3.entity + i2, r3.entity = "", r3.state = c2);
                  continue;
                default:
                  throw new Error(r3, "Unknown state: " + r3.state);
              }
            return r3.position >= r3.bufferCheckPosition && function(e5) {
              for (var r4 = Math.max(t3.MAX_BUFFER_LENGTH, 10), s3 = 0, i3 = 0, o3 = n2.length; i3 < o3; i3++) {
                var a3 = e5[n2[i3]].length;
                if (a3 > r4)
                  switch (n2[i3]) {
                    case "textNode":
                      S(e5);
                      break;
                    case "cdata":
                      A(e5, "oncdata", e5.cdata), e5.cdata = "";
                      break;
                    case "script":
                      A(e5, "onscript", e5.script), e5.script = "";
                      break;
                    default:
                      I(e5, "Max buffer length exceeded: " + n2[i3]);
                  }
                s3 = Math.max(s3, a3);
              }
              var c3 = t3.MAX_BUFFER_LENGTH - s3;
              e5.bufferCheckPosition = c3 + e5.position;
            }(r3), r3;
          }, resume: function() {
            return this.error = null, this;
          }, close: function() {
            return this.write(null);
          }, flush: function() {
            var t4;
            S(t4 = this), t4.cdata !== "" && (A(t4, "oncdata", t4.cdata), t4.cdata = ""), t4.script !== "" && (A(t4, "onscript", t4.script), t4.script = "");
          } };
          try {
            e3 = r2(830).Stream;
          } catch (t4) {
            e3 = function() {
            };
          }
          var i = t3.EVENTS.filter(function(t4) {
            return t4 !== "error" && t4 !== "end";
          });
          function o(t4, r3) {
            if (!(this instanceof o))
              return new o(t4, r3);
            e3.apply(this), this._parser = new s(t4, r3), this.writable = true, this.readable = true;
            var n3 = this;
            this._parser.onend = function() {
              n3.emit("end");
            }, this._parser.onerror = function(t5) {
              n3.emit("error", t5), n3._parser.error = null;
            }, this._decoder = null, i.forEach(function(t5) {
              Object.defineProperty(n3, "on" + t5, { get: function() {
                return n3._parser["on" + t5];
              }, set: function(e4) {
                if (!e4)
                  return n3.removeAllListeners(t5), n3._parser["on" + t5] = e4, e4;
                n3.on(t5, e4);
              }, enumerable: true, configurable: false });
            });
          }
          o.prototype = Object.create(e3.prototype, { constructor: { value: o } }), o.prototype.write = function(t4) {
            if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(t4)) {
              if (!this._decoder) {
                var e4 = r2(553).s;
                this._decoder = new e4("utf8");
              }
              t4 = this._decoder.write(t4);
            }
            return this._parser.write(t4.toString()), this.emit("data", t4), true;
          }, o.prototype.end = function(t4) {
            return t4 && t4.length && this.write(t4), this._parser.end(), true;
          }, o.prototype.on = function(t4, r3) {
            var n3 = this;
            return n3._parser["on" + t4] || i.indexOf(t4) === -1 || (n3._parser["on" + t4] = function() {
              var e4 = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
              e4.splice(0, 0, t4), n3.emit.apply(n3, e4);
            }), e3.prototype.on.call(n3, t4, r3);
          };
          var a = "http://www.w3.org/XML/1998/namespace", c = "http://www.w3.org/2000/xmlns/", u = { xml: a, xmlns: c }, l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, h = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, p2 = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, d = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
          function f(t4) {
            return t4 === " " || t4 === "\n" || t4 === "\r" || t4 === "	";
          }
          function m(t4) {
            return t4 === '"' || t4 === "'";
          }
          function w(t4) {
            return t4 === ">" || f(t4);
          }
          function g(t4, e4) {
            return t4.test(e4);
          }
          function y(t4, e4) {
            return !g(t4, e4);
          }
          var b, v, _, x = 0;
          for (var E in t3.STATE = { BEGIN: x++, BEGIN_WHITESPACE: x++, TEXT: x++, TEXT_ENTITY: x++, OPEN_WAKA: x++, SGML_DECL: x++, SGML_DECL_QUOTED: x++, DOCTYPE: x++, DOCTYPE_QUOTED: x++, DOCTYPE_DTD: x++, DOCTYPE_DTD_QUOTED: x++, COMMENT_STARTING: x++, COMMENT: x++, COMMENT_ENDING: x++, COMMENT_ENDED: x++, CDATA: x++, CDATA_ENDING: x++, CDATA_ENDING_2: x++, PROC_INST: x++, PROC_INST_BODY: x++, PROC_INST_ENDING: x++, OPEN_TAG: x++, OPEN_TAG_SLASH: x++, ATTRIB: x++, ATTRIB_NAME: x++, ATTRIB_NAME_SAW_WHITE: x++, ATTRIB_VALUE: x++, ATTRIB_VALUE_QUOTED: x++, ATTRIB_VALUE_CLOSED: x++, ATTRIB_VALUE_UNQUOTED: x++, ATTRIB_VALUE_ENTITY_Q: x++, ATTRIB_VALUE_ENTITY_U: x++, CLOSE_TAG: x++, CLOSE_TAG_SAW_WHITE: x++, SCRIPT: x++, SCRIPT_ENDING: x++ }, t3.XML_ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'" }, t3.ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'", AElig: 198, Aacute: 193, Acirc: 194, Agrave: 192, Aring: 197, Atilde: 195, Auml: 196, Ccedil: 199, ETH: 208, Eacute: 201, Ecirc: 202, Egrave: 200, Euml: 203, Iacute: 205, Icirc: 206, Igrave: 204, Iuml: 207, Ntilde: 209, Oacute: 211, Ocirc: 212, Ograve: 210, Oslash: 216, Otilde: 213, Ouml: 214, THORN: 222, Uacute: 218, Ucirc: 219, Ugrave: 217, Uuml: 220, Yacute: 221, aacute: 225, acirc: 226, aelig: 230, agrave: 224, aring: 229, atilde: 227, auml: 228, ccedil: 231, eacute: 233, ecirc: 234, egrave: 232, eth: 240, euml: 235, iacute: 237, icirc: 238, igrave: 236, iuml: 239, ntilde: 241, oacute: 243, ocirc: 244, ograve: 242, oslash: 248, otilde: 245, ouml: 246, szlig: 223, thorn: 254, uacute: 250, ucirc: 251, ugrave: 249, uuml: 252, yacute: 253, yuml: 255, copy: 169, reg: 174, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, ordf: 170, laquo: 171, not: 172, shy: 173, macr: 175, deg: 176, plusmn: 177, sup1: 185, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, times: 215, divide: 247, OElig: 338, oelig: 339, Scaron: 352, scaron: 353, Yuml: 376, fnof: 402, circ: 710, tilde: 732, Alpha: 913, Beta: 914, Gamma: 915, Delta: 916, Epsilon: 917, Zeta: 918, Eta: 919, Theta: 920, Iota: 921, Kappa: 922, Lambda: 923, Mu: 924, Nu: 925, Xi: 926, Omicron: 927, Pi: 928, Rho: 929, Sigma: 931, Tau: 932, Upsilon: 933, Phi: 934, Chi: 935, Psi: 936, Omega: 937, alpha: 945, beta: 946, gamma: 947, delta: 948, epsilon: 949, zeta: 950, eta: 951, theta: 952, iota: 953, kappa: 954, lambda: 955, mu: 956, nu: 957, xi: 958, omicron: 959, pi: 960, rho: 961, sigmaf: 962, sigma: 963, tau: 964, upsilon: 965, phi: 966, chi: 967, psi: 968, omega: 969, thetasym: 977, upsih: 978, piv: 982, ensp: 8194, emsp: 8195, thinsp: 8201, zwnj: 8204, zwj: 8205, lrm: 8206, rlm: 8207, ndash: 8211, mdash: 8212, lsquo: 8216, rsquo: 8217, sbquo: 8218, ldquo: 8220, rdquo: 8221, bdquo: 8222, dagger: 8224, Dagger: 8225, bull: 8226, hellip: 8230, permil: 8240, prime: 8242, Prime: 8243, lsaquo: 8249, rsaquo: 8250, oline: 8254, frasl: 8260, euro: 8364, image: 8465, weierp: 8472, real: 8476, trade: 8482, alefsym: 8501, larr: 8592, uarr: 8593, rarr: 8594, darr: 8595, harr: 8596, crarr: 8629, lArr: 8656, uArr: 8657, rArr: 8658, dArr: 8659, hArr: 8660, forall: 8704, part: 8706, exist: 8707, empty: 8709, nabla: 8711, isin: 8712, notin: 8713, ni: 8715, prod: 8719, sum: 8721, minus: 8722, lowast: 8727, radic: 8730, prop: 8733, infin: 8734, ang: 8736, and: 8743, or: 8744, cap: 8745, cup: 8746, int: 8747, there4: 8756, sim: 8764, cong: 8773, asymp: 8776, ne: 8800, equiv: 8801, le: 8804, ge: 8805, sub: 8834, sup: 8835, nsub: 8836, sube: 8838, supe: 8839, oplus: 8853, otimes: 8855, perp: 8869, sdot: 8901, lceil: 8968, rceil: 8969, lfloor: 8970, rfloor: 8971, lang: 9001, rang: 9002, loz: 9674, spades: 9824, clubs: 9827, hearts: 9829, diams: 9830 }, Object.keys(t3.ENTITIES).forEach(function(e4) {
            var r3 = t3.ENTITIES[e4], n3 = typeof r3 == "number" ? String.fromCharCode(r3) : r3;
            t3.ENTITIES[e4] = n3;
          }), t3.STATE)
            t3.STATE[t3.STATE[E]] = E;
          function T(t4, e4, r3) {
            t4[e4] && t4[e4](r3);
          }
          function A(t4, e4, r3) {
            t4.textNode && S(t4), T(t4, e4, r3);
          }
          function S(t4) {
            t4.textNode = R(t4.opt, t4.textNode), t4.textNode && T(t4, "ontext", t4.textNode), t4.textNode = "";
          }
          function R(t4, e4) {
            return t4.trim && (e4 = e4.trim()), t4.normalize && (e4 = e4.replace(/\s+/g, " ")), e4;
          }
          function I(t4, e4) {
            return S(t4), t4.trackPosition && (e4 += "\nLine: " + t4.line + "\nColumn: " + t4.column + "\nChar: " + t4.c), e4 = new Error(e4), t4.error = e4, T(t4, "onerror", e4), t4;
          }
          function N(t4) {
            return t4.sawRoot && !t4.closedRoot && O(t4, "Unclosed root tag"), t4.state !== x.BEGIN && t4.state !== x.BEGIN_WHITESPACE && t4.state !== x.TEXT && I(t4, "Unexpected end"), S(t4), t4.c = "", t4.closed = true, T(t4, "onend"), s.call(t4, t4.strict, t4.opt), t4;
          }
          function O(t4, e4) {
            if (typeof t4 != "object" || !(t4 instanceof s))
              throw new Error("bad call to strictFail");
            t4.strict && I(t4, e4);
          }
          function C(t4) {
            t4.strict || (t4.tagName = t4.tagName[t4.looseCase]());
            var e4 = t4.tags[t4.tags.length - 1] || t4, r3 = t4.tag = { name: t4.tagName, attributes: {} };
            t4.opt.xmlns && (r3.ns = e4.ns), t4.attribList.length = 0, A(t4, "onopentagstart", r3);
          }
          function k(t4, e4) {
            var r3 = t4.indexOf(":") < 0 ? ["", t4] : t4.split(":"), n3 = r3[0], s2 = r3[1];
            return e4 && t4 === "xmlns" && (n3 = "xmlns", s2 = ""), { prefix: n3, local: s2 };
          }
          function D(t4) {
            if (t4.strict || (t4.attribName = t4.attribName[t4.looseCase]()), t4.attribList.indexOf(t4.attribName) !== -1 || t4.tag.attributes.hasOwnProperty(t4.attribName))
              t4.attribName = t4.attribValue = "";
            else {
              if (t4.opt.xmlns) {
                var e4 = k(t4.attribName, true), r3 = e4.prefix, n3 = e4.local;
                if (r3 === "xmlns")
                  if (n3 === "xml" && t4.attribValue !== a)
                    O(t4, "xml: prefix must be bound to " + a + "\nActual: " + t4.attribValue);
                  else if (n3 === "xmlns" && t4.attribValue !== c)
                    O(t4, "xmlns: prefix must be bound to " + c + "\nActual: " + t4.attribValue);
                  else {
                    var s2 = t4.tag, i2 = t4.tags[t4.tags.length - 1] || t4;
                    s2.ns === i2.ns && (s2.ns = Object.create(i2.ns)), s2.ns[n3] = t4.attribValue;
                  }
                t4.attribList.push([t4.attribName, t4.attribValue]);
              } else
                t4.tag.attributes[t4.attribName] = t4.attribValue, A(t4, "onattribute", { name: t4.attribName, value: t4.attribValue });
              t4.attribName = t4.attribValue = "";
            }
          }
          function L(t4, e4) {
            if (t4.opt.xmlns) {
              var r3 = t4.tag, n3 = k(t4.tagName);
              r3.prefix = n3.prefix, r3.local = n3.local, r3.uri = r3.ns[n3.prefix] || "", r3.prefix && !r3.uri && (O(t4, "Unbound namespace prefix: " + JSON.stringify(t4.tagName)), r3.uri = n3.prefix);
              var s2 = t4.tags[t4.tags.length - 1] || t4;
              r3.ns && s2.ns !== r3.ns && Object.keys(r3.ns).forEach(function(e5) {
                A(t4, "onopennamespace", { prefix: e5, uri: r3.ns[e5] });
              });
              for (var i2 = 0, o2 = t4.attribList.length; i2 < o2; i2++) {
                var a2 = t4.attribList[i2], c2 = a2[0], u2 = a2[1], l2 = k(c2, true), h2 = l2.prefix, p3 = l2.local, d2 = h2 === "" ? "" : r3.ns[h2] || "", f2 = { name: c2, value: u2, prefix: h2, local: p3, uri: d2 };
                h2 && h2 !== "xmlns" && !d2 && (O(t4, "Unbound namespace prefix: " + JSON.stringify(h2)), f2.uri = h2), t4.tag.attributes[c2] = f2, A(t4, "onattribute", f2);
              }
              t4.attribList.length = 0;
            }
            t4.tag.isSelfClosing = !!e4, t4.sawRoot = true, t4.tags.push(t4.tag), A(t4, "onopentag", t4.tag), e4 || (t4.noscript || t4.tagName.toLowerCase() !== "script" ? t4.state = x.TEXT : t4.state = x.SCRIPT, t4.tag = null, t4.tagName = ""), t4.attribName = t4.attribValue = "", t4.attribList.length = 0;
          }
          function P(t4) {
            if (!t4.tagName)
              return O(t4, "Weird empty close tag."), t4.textNode += "</>", void (t4.state = x.TEXT);
            if (t4.script) {
              if (t4.tagName !== "script")
                return t4.script += "</" + t4.tagName + ">", t4.tagName = "", void (t4.state = x.SCRIPT);
              A(t4, "onscript", t4.script), t4.script = "";
            }
            var e4 = t4.tags.length, r3 = t4.tagName;
            t4.strict || (r3 = r3[t4.looseCase]());
            for (var n3 = r3; e4-- && t4.tags[e4].name !== n3; )
              O(t4, "Unexpected close tag");
            if (e4 < 0)
              return O(t4, "Unmatched closing tag: " + t4.tagName), t4.textNode += "</" + t4.tagName + ">", void (t4.state = x.TEXT);
            t4.tagName = r3;
            for (var s2 = t4.tags.length; s2-- > e4; ) {
              var i2 = t4.tag = t4.tags.pop();
              t4.tagName = t4.tag.name, A(t4, "onclosetag", t4.tagName);
              var o2 = {};
              for (var a2 in i2.ns)
                o2[a2] = i2.ns[a2];
              var c2 = t4.tags[t4.tags.length - 1] || t4;
              t4.opt.xmlns && i2.ns !== c2.ns && Object.keys(i2.ns).forEach(function(e5) {
                var r4 = i2.ns[e5];
                A(t4, "onclosenamespace", { prefix: e5, uri: r4 });
              });
            }
            e4 === 0 && (t4.closedRoot = true), t4.tagName = t4.attribValue = t4.attribName = "", t4.attribList.length = 0, t4.state = x.TEXT;
          }
          function F(t4) {
            var e4, r3 = t4.entity, n3 = r3.toLowerCase(), s2 = "";
            return t4.ENTITIES[r3] ? t4.ENTITIES[r3] : t4.ENTITIES[n3] ? t4.ENTITIES[n3] : ((r3 = n3).charAt(0) === "#" && (r3.charAt(1) === "x" ? (r3 = r3.slice(2), s2 = (e4 = parseInt(r3, 16)).toString(16)) : (r3 = r3.slice(1), s2 = (e4 = parseInt(r3, 10)).toString(10))), r3 = r3.replace(/^0+/, ""), isNaN(e4) || s2.toLowerCase() !== r3 ? (O(t4, "Invalid character entity"), "&" + t4.entity + ";") : String.fromCodePoint(e4));
          }
          function B(t4, e4) {
            e4 === "<" ? (t4.state = x.OPEN_WAKA, t4.startTagPosition = t4.position) : f(e4) || (O(t4, "Non-whitespace before first tag."), t4.textNode = e4, t4.state = x.TEXT);
          }
          function M(t4, e4) {
            var r3 = "";
            return e4 < t4.length && (r3 = t4.charAt(e4)), r3;
          }
          x = t3.STATE, String.fromCodePoint || (b = String.fromCharCode, v = Math.floor, _ = function() {
            var t4, e4, r3 = 16384, n3 = [], s2 = -1, i2 = arguments.length;
            if (!i2)
              return "";
            for (var o2 = ""; ++s2 < i2; ) {
              var a2 = Number(arguments[s2]);
              if (!isFinite(a2) || a2 < 0 || a2 > 1114111 || v(a2) !== a2)
                throw RangeError("Invalid code point: " + a2);
              a2 <= 65535 ? n3.push(a2) : (t4 = 55296 + ((a2 -= 65536) >> 10), e4 = a2 % 1024 + 56320, n3.push(t4, e4)), (s2 + 1 === i2 || n3.length > r3) && (o2 += b.apply(null, n3), n3.length = 0);
            }
            return o2;
          }, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", { value: _, configurable: true, writable: true }) : String.fromCodePoint = _);
        }(e2);
      }, 830: (t2, e2, r2) => {
        t2.exports = s;
        var n2 = r2(187).EventEmitter;
        function s() {
          n2.call(this);
        }
        r2(717)(s, n2), s.Readable = r2(577), s.Writable = r2(323), s.Duplex = r2(656), s.Transform = r2(473), s.PassThrough = r2(366), s.finished = r2(86), s.pipeline = r2(472), s.Stream = s, s.prototype.pipe = function(t3, e3) {
          var r3 = this;
          function s2(e4) {
            t3.writable && t3.write(e4) === false && r3.pause && r3.pause();
          }
          function i() {
            r3.readable && r3.resume && r3.resume();
          }
          r3.on("data", s2), t3.on("drain", i), t3._isStdio || e3 && e3.end === false || (r3.on("end", a), r3.on("close", c));
          var o = false;
          function a() {
            o || (o = true, t3.end());
          }
          function c() {
            o || (o = true, typeof t3.destroy == "function" && t3.destroy());
          }
          function u(t4) {
            if (l(), n2.listenerCount(this, "error") === 0)
              throw t4;
          }
          function l() {
            r3.removeListener("data", s2), t3.removeListener("drain", i), r3.removeListener("end", a), r3.removeListener("close", c), r3.removeListener("error", u), t3.removeListener("error", u), r3.removeListener("end", l), r3.removeListener("close", l), t3.removeListener("close", l);
          }
          return r3.on("error", u), t3.on("error", u), r3.on("end", l), r3.on("close", l), t3.on("close", l), t3.emit("pipe", r3), t3;
        };
      }, 106: (t2) => {
        var e2 = {};
        function r2(t3, r3, n3) {
          n3 || (n3 = Error);
          var s = function(t4) {
            var e3, n4;
            function s2(e4, n5, s3) {
              return t4.call(this, function(t5, e5, n6) {
                return typeof r3 == "string" ? r3 : r3(t5, e5, n6);
              }(e4, n5, s3)) || this;
            }
            return n4 = t4, (e3 = s2).prototype = Object.create(n4.prototype), e3.prototype.constructor = e3, e3.__proto__ = n4, s2;
          }(n3);
          s.prototype.name = n3.name, s.prototype.code = t3, e2[t3] = s;
        }
        function n2(t3, e3) {
          if (Array.isArray(t3)) {
            var r3 = t3.length;
            return t3 = t3.map(function(t4) {
              return String(t4);
            }), r3 > 2 ? "one of ".concat(e3, " ").concat(t3.slice(0, r3 - 1).join(", "), ", or ") + t3[r3 - 1] : r3 === 2 ? "one of ".concat(e3, " ").concat(t3[0], " or ").concat(t3[1]) : "of ".concat(e3, " ").concat(t3[0]);
          }
          return "of ".concat(e3, " ").concat(String(t3));
        }
        r2("ERR_INVALID_OPT_VALUE", function(t3, e3) {
          return 'The value "' + e3 + '" is invalid for option "' + t3 + '"';
        }, TypeError), r2("ERR_INVALID_ARG_TYPE", function(t3, e3, r3) {
          var s, i, o, a, c;
          if (typeof e3 == "string" && (i = "not ", e3.substr(0, i.length) === i) ? (s = "must not be", e3 = e3.replace(/^not /, "")) : s = "must be", function(t4, e4, r4) {
            return (r4 === void 0 || r4 > t4.length) && (r4 = t4.length), t4.substring(r4 - e4.length, r4) === e4;
          }(t3, " argument"))
            o = "The ".concat(t3, " ").concat(s, " ").concat(n2(e3, "type"));
          else {
            var u = (typeof c != "number" && (c = 0), c + ".".length > (a = t3).length || a.indexOf(".", c) === -1 ? "argument" : "property");
            o = 'The "'.concat(t3, '" ').concat(u, " ").concat(s, " ").concat(n2(e3, "type"));
          }
          return o + ". Received type ".concat(typeof r3);
        }, TypeError), r2("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r2("ERR_METHOD_NOT_IMPLEMENTED", function(t3) {
          return "The " + t3 + " method is not implemented";
        }), r2("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r2("ERR_STREAM_DESTROYED", function(t3) {
          return "Cannot call " + t3 + " after a stream was destroyed";
        }), r2("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r2("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), r2("ERR_STREAM_WRITE_AFTER_END", "write after end"), r2("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), r2("ERR_UNKNOWN_ENCODING", function(t3) {
          return "Unknown encoding: " + t3;
        }, TypeError), r2("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t2.exports.q = e2;
      }, 656: (t2, e2, r2) => {
        var n2 = r2(155), s = Object.keys || function(t3) {
          var e3 = [];
          for (var r3 in t3)
            e3.push(r3);
          return e3;
        };
        t2.exports = l;
        var i = r2(577), o = r2(323);
        r2(717)(l, i);
        for (var a = s(o.prototype), c = 0; c < a.length; c++) {
          var u = a[c];
          l.prototype[u] || (l.prototype[u] = o.prototype[u]);
        }
        function l(t3) {
          if (!(this instanceof l))
            return new l(t3);
          i.call(this, t3), o.call(this, t3), this.allowHalfOpen = true, t3 && (t3.readable === false && (this.readable = false), t3.writable === false && (this.writable = false), t3.allowHalfOpen === false && (this.allowHalfOpen = false, this.once("end", h)));
        }
        function h() {
          this._writableState.ended || n2.nextTick(p2, this);
        }
        function p2(t3) {
          t3.end();
        }
        Object.defineProperty(l.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
          return this._writableState.highWaterMark;
        } }), Object.defineProperty(l.prototype, "writableBuffer", { enumerable: false, get: function() {
          return this._writableState && this._writableState.getBuffer();
        } }), Object.defineProperty(l.prototype, "writableLength", { enumerable: false, get: function() {
          return this._writableState.length;
        } }), Object.defineProperty(l.prototype, "destroyed", { enumerable: false, get: function() {
          return this._readableState !== void 0 && this._writableState !== void 0 && this._readableState.destroyed && this._writableState.destroyed;
        }, set: function(t3) {
          this._readableState !== void 0 && this._writableState !== void 0 && (this._readableState.destroyed = t3, this._writableState.destroyed = t3);
        } });
      }, 366: (t2, e2, r2) => {
        t2.exports = s;
        var n2 = r2(473);
        function s(t3) {
          if (!(this instanceof s))
            return new s(t3);
          n2.call(this, t3);
        }
        r2(717)(s, n2), s.prototype._transform = function(t3, e3, r3) {
          r3(null, t3);
        };
      }, 577: (t2, e2, r2) => {
        var n2, s = r2(155);
        t2.exports = A, A.ReadableState = T, r2(187).EventEmitter;
        var i, o = function(t3, e3) {
          return t3.listeners(e3).length;
        }, a = r2(194), c = r2(764).Buffer, u = r2.g.Uint8Array || function() {
        }, l = r2(964);
        i = l && l.debuglog ? l.debuglog("stream") : function() {
        };
        var h, p2, d, f = r2(686), m = r2(29), w = r2(94).getHighWaterMark, g = r2(106).q, y = g.ERR_INVALID_ARG_TYPE, b = g.ERR_STREAM_PUSH_AFTER_EOF, v = g.ERR_METHOD_NOT_IMPLEMENTED, _ = g.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        r2(717)(A, a);
        var x = m.errorOrDestroy, E = ["error", "close", "destroy", "pause", "resume"];
        function T(t3, e3, s2) {
          n2 = n2 || r2(656), t3 = t3 || {}, typeof s2 != "boolean" && (s2 = e3 instanceof n2), this.objectMode = !!t3.objectMode, s2 && (this.objectMode = this.objectMode || !!t3.readableObjectMode), this.highWaterMark = w(this, t3, "readableHighWaterMark", s2), this.buffer = new f(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = t3.emitClose !== false, this.autoDestroy = !!t3.autoDestroy, this.destroyed = false, this.defaultEncoding = t3.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t3.encoding && (h || (h = r2(553).s), this.decoder = new h(t3.encoding), this.encoding = t3.encoding);
        }
        function A(t3) {
          if (n2 = n2 || r2(656), !(this instanceof A))
            return new A(t3);
          var e3 = this instanceof n2;
          this._readableState = new T(t3, this, e3), this.readable = true, t3 && (typeof t3.read == "function" && (this._read = t3.read), typeof t3.destroy == "function" && (this._destroy = t3.destroy)), a.call(this);
        }
        function S(t3, e3, r3, n3, s2) {
          i("readableAddChunk", e3);
          var o2, a2 = t3._readableState;
          if (e3 === null)
            a2.reading = false, function(t4, e4) {
              if (i("onEofChunk"), !e4.ended) {
                if (e4.decoder) {
                  var r4 = e4.decoder.end();
                  r4 && r4.length && (e4.buffer.push(r4), e4.length += e4.objectMode ? 1 : r4.length);
                }
                e4.ended = true, e4.sync ? O(t4) : (e4.needReadable = false, e4.emittedReadable || (e4.emittedReadable = true, C(t4)));
              }
            }(t3, a2);
          else if (s2 || (o2 = function(t4, e4) {
            var r4, n4;
            return n4 = e4, c.isBuffer(n4) || n4 instanceof u || typeof e4 == "string" || e4 === void 0 || t4.objectMode || (r4 = new y("chunk", ["string", "Buffer", "Uint8Array"], e4)), r4;
          }(a2, e3)), o2)
            x(t3, o2);
          else if (a2.objectMode || e3 && e3.length > 0)
            if (typeof e3 == "string" || a2.objectMode || Object.getPrototypeOf(e3) === c.prototype || (e3 = function(t4) {
              return c.from(t4);
            }(e3)), n3)
              a2.endEmitted ? x(t3, new _()) : R(t3, a2, e3, true);
            else if (a2.ended)
              x(t3, new b());
            else {
              if (a2.destroyed)
                return false;
              a2.reading = false, a2.decoder && !r3 ? (e3 = a2.decoder.write(e3), a2.objectMode || e3.length !== 0 ? R(t3, a2, e3, false) : k(t3, a2)) : R(t3, a2, e3, false);
            }
          else
            n3 || (a2.reading = false, k(t3, a2));
          return !a2.ended && (a2.length < a2.highWaterMark || a2.length === 0);
        }
        function R(t3, e3, r3, n3) {
          e3.flowing && e3.length === 0 && !e3.sync ? (e3.awaitDrain = 0, t3.emit("data", r3)) : (e3.length += e3.objectMode ? 1 : r3.length, n3 ? e3.buffer.unshift(r3) : e3.buffer.push(r3), e3.needReadable && O(t3)), k(t3, e3);
        }
        Object.defineProperty(A.prototype, "destroyed", { enumerable: false, get: function() {
          return this._readableState !== void 0 && this._readableState.destroyed;
        }, set: function(t3) {
          this._readableState && (this._readableState.destroyed = t3);
        } }), A.prototype.destroy = m.destroy, A.prototype._undestroy = m.undestroy, A.prototype._destroy = function(t3, e3) {
          e3(t3);
        }, A.prototype.push = function(t3, e3) {
          var r3, n3 = this._readableState;
          return n3.objectMode ? r3 = true : typeof t3 == "string" && ((e3 = e3 || n3.defaultEncoding) !== n3.encoding && (t3 = c.from(t3, e3), e3 = ""), r3 = true), S(this, t3, e3, false, r3);
        }, A.prototype.unshift = function(t3) {
          return S(this, t3, null, true, false);
        }, A.prototype.isPaused = function() {
          return this._readableState.flowing === false;
        }, A.prototype.setEncoding = function(t3) {
          h || (h = r2(553).s);
          var e3 = new h(t3);
          this._readableState.decoder = e3, this._readableState.encoding = this._readableState.decoder.encoding;
          for (var n3 = this._readableState.buffer.head, s2 = ""; n3 !== null; )
            s2 += e3.write(n3.data), n3 = n3.next;
          return this._readableState.buffer.clear(), s2 !== "" && this._readableState.buffer.push(s2), this._readableState.length = s2.length, this;
        };
        var I = 1073741824;
        function N(t3, e3) {
          return t3 <= 0 || e3.length === 0 && e3.ended ? 0 : e3.objectMode ? 1 : t3 != t3 ? e3.flowing && e3.length ? e3.buffer.head.data.length : e3.length : (t3 > e3.highWaterMark && (e3.highWaterMark = function(t4) {
            return t4 >= I ? t4 = I : (t4--, t4 |= t4 >>> 1, t4 |= t4 >>> 2, t4 |= t4 >>> 4, t4 |= t4 >>> 8, t4 |= t4 >>> 16, t4++), t4;
          }(t3)), t3 <= e3.length ? t3 : e3.ended ? e3.length : (e3.needReadable = true, 0));
        }
        function O(t3) {
          var e3 = t3._readableState;
          i("emitReadable", e3.needReadable, e3.emittedReadable), e3.needReadable = false, e3.emittedReadable || (i("emitReadable", e3.flowing), e3.emittedReadable = true, s.nextTick(C, t3));
        }
        function C(t3) {
          var e3 = t3._readableState;
          i("emitReadable_", e3.destroyed, e3.length, e3.ended), e3.destroyed || !e3.length && !e3.ended || (t3.emit("readable"), e3.emittedReadable = false), e3.needReadable = !e3.flowing && !e3.ended && e3.length <= e3.highWaterMark, B(t3);
        }
        function k(t3, e3) {
          e3.readingMore || (e3.readingMore = true, s.nextTick(D, t3, e3));
        }
        function D(t3, e3) {
          for (; !e3.reading && !e3.ended && (e3.length < e3.highWaterMark || e3.flowing && e3.length === 0); ) {
            var r3 = e3.length;
            if (i("maybeReadMore read 0"), t3.read(0), r3 === e3.length)
              break;
          }
          e3.readingMore = false;
        }
        function L(t3) {
          var e3 = t3._readableState;
          e3.readableListening = t3.listenerCount("readable") > 0, e3.resumeScheduled && !e3.paused ? e3.flowing = true : t3.listenerCount("data") > 0 && t3.resume();
        }
        function P(t3) {
          i("readable nexttick read 0"), t3.read(0);
        }
        function F(t3, e3) {
          i("resume", e3.reading), e3.reading || t3.read(0), e3.resumeScheduled = false, t3.emit("resume"), B(t3), e3.flowing && !e3.reading && t3.read(0);
        }
        function B(t3) {
          var e3 = t3._readableState;
          for (i("flow", e3.flowing); e3.flowing && t3.read() !== null; )
            ;
        }
        function M(t3, e3) {
          return e3.length === 0 ? null : (e3.objectMode ? r3 = e3.buffer.shift() : !t3 || t3 >= e3.length ? (r3 = e3.decoder ? e3.buffer.join("") : e3.buffer.length === 1 ? e3.buffer.first() : e3.buffer.concat(e3.length), e3.buffer.clear()) : r3 = e3.buffer.consume(t3, e3.decoder), r3);
          var r3;
        }
        function U(t3) {
          var e3 = t3._readableState;
          i("endReadable", e3.endEmitted), e3.endEmitted || (e3.ended = true, s.nextTick(z, e3, t3));
        }
        function z(t3, e3) {
          if (i("endReadableNT", t3.endEmitted, t3.length), !t3.endEmitted && t3.length === 0 && (t3.endEmitted = true, e3.readable = false, e3.emit("end"), t3.autoDestroy)) {
            var r3 = e3._writableState;
            (!r3 || r3.autoDestroy && r3.finished) && e3.destroy();
          }
        }
        function H(t3, e3) {
          for (var r3 = 0, n3 = t3.length; r3 < n3; r3++)
            if (t3[r3] === e3)
              return r3;
          return -1;
        }
        A.prototype.read = function(t3) {
          i("read", t3), t3 = parseInt(t3, 10);
          var e3 = this._readableState, r3 = t3;
          if (t3 !== 0 && (e3.emittedReadable = false), t3 === 0 && e3.needReadable && ((e3.highWaterMark !== 0 ? e3.length >= e3.highWaterMark : e3.length > 0) || e3.ended))
            return i("read: emitReadable", e3.length, e3.ended), e3.length === 0 && e3.ended ? U(this) : O(this), null;
          if ((t3 = N(t3, e3)) === 0 && e3.ended)
            return e3.length === 0 && U(this), null;
          var n3, s2 = e3.needReadable;
          return i("need readable", s2), (e3.length === 0 || e3.length - t3 < e3.highWaterMark) && i("length less than watermark", s2 = true), e3.ended || e3.reading ? i("reading or ended", s2 = false) : s2 && (i("do read"), e3.reading = true, e3.sync = true, e3.length === 0 && (e3.needReadable = true), this._read(e3.highWaterMark), e3.sync = false, e3.reading || (t3 = N(r3, e3))), (n3 = t3 > 0 ? M(t3, e3) : null) === null ? (e3.needReadable = e3.length <= e3.highWaterMark, t3 = 0) : (e3.length -= t3, e3.awaitDrain = 0), e3.length === 0 && (e3.ended || (e3.needReadable = true), r3 !== t3 && e3.ended && U(this)), n3 !== null && this.emit("data", n3), n3;
        }, A.prototype._read = function(t3) {
          x(this, new v("_read()"));
        }, A.prototype.pipe = function(t3, e3) {
          var r3 = this, n3 = this._readableState;
          switch (n3.pipesCount) {
            case 0:
              n3.pipes = t3;
              break;
            case 1:
              n3.pipes = [n3.pipes, t3];
              break;
            default:
              n3.pipes.push(t3);
          }
          n3.pipesCount += 1, i("pipe count=%d opts=%j", n3.pipesCount, e3);
          var a2 = e3 && e3.end === false || t3 === s.stdout || t3 === s.stderr ? m2 : c2;
          function c2() {
            i("onend"), t3.end();
          }
          n3.endEmitted ? s.nextTick(a2) : r3.once("end", a2), t3.on("unpipe", function e4(s2, o2) {
            i("onunpipe"), s2 === r3 && o2 && o2.hasUnpiped === false && (o2.hasUnpiped = true, i("cleanup"), t3.removeListener("close", d2), t3.removeListener("finish", f2), t3.removeListener("drain", u2), t3.removeListener("error", p3), t3.removeListener("unpipe", e4), r3.removeListener("end", c2), r3.removeListener("end", m2), r3.removeListener("data", h2), l2 = true, !n3.awaitDrain || t3._writableState && !t3._writableState.needDrain || u2());
          });
          var u2 = function(t4) {
            return function() {
              var e4 = t4._readableState;
              i("pipeOnDrain", e4.awaitDrain), e4.awaitDrain && e4.awaitDrain--, e4.awaitDrain === 0 && o(t4, "data") && (e4.flowing = true, B(t4));
            };
          }(r3);
          t3.on("drain", u2);
          var l2 = false;
          function h2(e4) {
            i("ondata");
            var s2 = t3.write(e4);
            i("dest.write", s2), s2 === false && ((n3.pipesCount === 1 && n3.pipes === t3 || n3.pipesCount > 1 && H(n3.pipes, t3) !== -1) && !l2 && (i("false write response, pause", n3.awaitDrain), n3.awaitDrain++), r3.pause());
          }
          function p3(e4) {
            i("onerror", e4), m2(), t3.removeListener("error", p3), o(t3, "error") === 0 && x(t3, e4);
          }
          function d2() {
            t3.removeListener("finish", f2), m2();
          }
          function f2() {
            i("onfinish"), t3.removeListener("close", d2), m2();
          }
          function m2() {
            i("unpipe"), r3.unpipe(t3);
          }
          return r3.on("data", h2), function(t4, e4, r4) {
            if (typeof t4.prependListener == "function")
              return t4.prependListener(e4, r4);
            t4._events && t4._events.error ? Array.isArray(t4._events.error) ? t4._events.error.unshift(r4) : t4._events.error = [r4, t4._events.error] : t4.on(e4, r4);
          }(t3, "error", p3), t3.once("close", d2), t3.once("finish", f2), t3.emit("pipe", r3), n3.flowing || (i("pipe resume"), r3.resume()), t3;
        }, A.prototype.unpipe = function(t3) {
          var e3 = this._readableState, r3 = { hasUnpiped: false };
          if (e3.pipesCount === 0)
            return this;
          if (e3.pipesCount === 1)
            return t3 && t3 !== e3.pipes || (t3 || (t3 = e3.pipes), e3.pipes = null, e3.pipesCount = 0, e3.flowing = false, t3 && t3.emit("unpipe", this, r3)), this;
          if (!t3) {
            var n3 = e3.pipes, s2 = e3.pipesCount;
            e3.pipes = null, e3.pipesCount = 0, e3.flowing = false;
            for (var i2 = 0; i2 < s2; i2++)
              n3[i2].emit("unpipe", this, { hasUnpiped: false });
            return this;
          }
          var o2 = H(e3.pipes, t3);
          return o2 === -1 || (e3.pipes.splice(o2, 1), e3.pipesCount -= 1, e3.pipesCount === 1 && (e3.pipes = e3.pipes[0]), t3.emit("unpipe", this, r3)), this;
        }, A.prototype.on = function(t3, e3) {
          var r3 = a.prototype.on.call(this, t3, e3), n3 = this._readableState;
          return t3 === "data" ? (n3.readableListening = this.listenerCount("readable") > 0, n3.flowing !== false && this.resume()) : t3 === "readable" && (n3.endEmitted || n3.readableListening || (n3.readableListening = n3.needReadable = true, n3.flowing = false, n3.emittedReadable = false, i("on readable", n3.length, n3.reading), n3.length ? O(this) : n3.reading || s.nextTick(P, this))), r3;
        }, A.prototype.addListener = A.prototype.on, A.prototype.removeListener = function(t3, e3) {
          var r3 = a.prototype.removeListener.call(this, t3, e3);
          return t3 === "readable" && s.nextTick(L, this), r3;
        }, A.prototype.removeAllListeners = function(t3) {
          var e3 = a.prototype.removeAllListeners.apply(this, arguments);
          return t3 !== "readable" && t3 !== void 0 || s.nextTick(L, this), e3;
        }, A.prototype.resume = function() {
          var t3 = this._readableState;
          return t3.flowing || (i("resume"), t3.flowing = !t3.readableListening, function(t4, e3) {
            e3.resumeScheduled || (e3.resumeScheduled = true, s.nextTick(F, t4, e3));
          }(this, t3)), t3.paused = false, this;
        }, A.prototype.pause = function() {
          return i("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (i("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
        }, A.prototype.wrap = function(t3) {
          var e3 = this, r3 = this._readableState, n3 = false;
          for (var s2 in t3.on("end", function() {
            if (i("wrapped end"), r3.decoder && !r3.ended) {
              var t4 = r3.decoder.end();
              t4 && t4.length && e3.push(t4);
            }
            e3.push(null);
          }), t3.on("data", function(s3) {
            i("wrapped data"), r3.decoder && (s3 = r3.decoder.write(s3)), r3.objectMode && s3 == null || (r3.objectMode || s3 && s3.length) && (e3.push(s3) || (n3 = true, t3.pause()));
          }), t3)
            this[s2] === void 0 && typeof t3[s2] == "function" && (this[s2] = function(e4) {
              return function() {
                return t3[e4].apply(t3, arguments);
              };
            }(s2));
          for (var o2 = 0; o2 < E.length; o2++)
            t3.on(E[o2], this.emit.bind(this, E[o2]));
          return this._read = function(e4) {
            i("wrapped _read", e4), n3 && (n3 = false, t3.resume());
          }, this;
        }, typeof Symbol == "function" && (A.prototype[Symbol.asyncIterator] = function() {
          return p2 === void 0 && (p2 = r2(828)), p2(this);
        }), Object.defineProperty(A.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
          return this._readableState.highWaterMark;
        } }), Object.defineProperty(A.prototype, "readableBuffer", { enumerable: false, get: function() {
          return this._readableState && this._readableState.buffer;
        } }), Object.defineProperty(A.prototype, "readableFlowing", { enumerable: false, get: function() {
          return this._readableState.flowing;
        }, set: function(t3) {
          this._readableState && (this._readableState.flowing = t3);
        } }), A._fromList = M, Object.defineProperty(A.prototype, "readableLength", { enumerable: false, get: function() {
          return this._readableState.length;
        } }), typeof Symbol == "function" && (A.from = function(t3, e3) {
          return d === void 0 && (d = r2(265)), d(A, t3, e3);
        });
      }, 473: (t2, e2, r2) => {
        t2.exports = l;
        var n2 = r2(106).q, s = n2.ERR_METHOD_NOT_IMPLEMENTED, i = n2.ERR_MULTIPLE_CALLBACK, o = n2.ERR_TRANSFORM_ALREADY_TRANSFORMING, a = n2.ERR_TRANSFORM_WITH_LENGTH_0, c = r2(656);
        function u(t3, e3) {
          var r3 = this._transformState;
          r3.transforming = false;
          var n3 = r3.writecb;
          if (n3 === null)
            return this.emit("error", new i());
          r3.writechunk = null, r3.writecb = null, e3 != null && this.push(e3), n3(t3);
          var s2 = this._readableState;
          s2.reading = false, (s2.needReadable || s2.length < s2.highWaterMark) && this._read(s2.highWaterMark);
        }
        function l(t3) {
          if (!(this instanceof l))
            return new l(t3);
          c.call(this, t3), this._transformState = { afterTransform: u.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, t3 && (typeof t3.transform == "function" && (this._transform = t3.transform), typeof t3.flush == "function" && (this._flush = t3.flush)), this.on("prefinish", h);
        }
        function h() {
          var t3 = this;
          typeof this._flush != "function" || this._readableState.destroyed ? p2(this, null, null) : this._flush(function(e3, r3) {
            p2(t3, e3, r3);
          });
        }
        function p2(t3, e3, r3) {
          if (e3)
            return t3.emit("error", e3);
          if (r3 != null && t3.push(r3), t3._writableState.length)
            throw new a();
          if (t3._transformState.transforming)
            throw new o();
          return t3.push(null);
        }
        r2(717)(l, c), l.prototype.push = function(t3, e3) {
          return this._transformState.needTransform = false, c.prototype.push.call(this, t3, e3);
        }, l.prototype._transform = function(t3, e3, r3) {
          r3(new s("_transform()"));
        }, l.prototype._write = function(t3, e3, r3) {
          var n3 = this._transformState;
          if (n3.writecb = r3, n3.writechunk = t3, n3.writeencoding = e3, !n3.transforming) {
            var s2 = this._readableState;
            (n3.needTransform || s2.needReadable || s2.length < s2.highWaterMark) && this._read(s2.highWaterMark);
          }
        }, l.prototype._read = function(t3) {
          var e3 = this._transformState;
          e3.writechunk === null || e3.transforming ? e3.needTransform = true : (e3.transforming = true, this._transform(e3.writechunk, e3.writeencoding, e3.afterTransform));
        }, l.prototype._destroy = function(t3, e3) {
          c.prototype._destroy.call(this, t3, function(t4) {
            e3(t4);
          });
        };
      }, 323: (t2, e2, r2) => {
        var n2, s = r2(155);
        function i(t3) {
          var e3 = this;
          this.next = null, this.entry = null, this.finish = function() {
            !function(t4, e4, r3) {
              var n3 = t4.entry;
              for (t4.entry = null; n3; ) {
                var s2 = n3.callback;
                e4.pendingcb--, s2(void 0), n3 = n3.next;
              }
              e4.corkedRequestsFree.next = t4;
            }(e3, t3);
          };
        }
        t2.exports = A, A.WritableState = T;
        var o, a = { deprecate: r2(927) }, c = r2(194), u = r2(764).Buffer, l = r2.g.Uint8Array || function() {
        }, h = r2(29), p2 = r2(94).getHighWaterMark, d = r2(106).q, f = d.ERR_INVALID_ARG_TYPE, m = d.ERR_METHOD_NOT_IMPLEMENTED, w = d.ERR_MULTIPLE_CALLBACK, g = d.ERR_STREAM_CANNOT_PIPE, y = d.ERR_STREAM_DESTROYED, b = d.ERR_STREAM_NULL_VALUES, v = d.ERR_STREAM_WRITE_AFTER_END, _ = d.ERR_UNKNOWN_ENCODING, x = h.errorOrDestroy;
        function E() {
        }
        function T(t3, e3, o2) {
          n2 = n2 || r2(656), t3 = t3 || {}, typeof o2 != "boolean" && (o2 = e3 instanceof n2), this.objectMode = !!t3.objectMode, o2 && (this.objectMode = this.objectMode || !!t3.writableObjectMode), this.highWaterMark = p2(this, t3, "writableHighWaterMark", o2), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
          var a2 = t3.decodeStrings === false;
          this.decodeStrings = !a2, this.defaultEncoding = t3.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(t4) {
            !function(t5, e4) {
              var r3 = t5._writableState, n3 = r3.sync, i2 = r3.writecb;
              if (typeof i2 != "function")
                throw new w();
              if (function(t6) {
                t6.writing = false, t6.writecb = null, t6.length -= t6.writelen, t6.writelen = 0;
              }(r3), e4)
                !function(t6, e5, r4, n4, i3) {
                  --e5.pendingcb, r4 ? (s.nextTick(i3, n4), s.nextTick(C, t6, e5), t6._writableState.errorEmitted = true, x(t6, n4)) : (i3(n4), t6._writableState.errorEmitted = true, x(t6, n4), C(t6, e5));
                }(t5, r3, n3, e4, i2);
              else {
                var o3 = N(r3) || t5.destroyed;
                o3 || r3.corked || r3.bufferProcessing || !r3.bufferedRequest || I(t5, r3), n3 ? s.nextTick(R, t5, r3, o3, i2) : R(t5, r3, o3, i2);
              }
            }(e3, t4);
          }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = t3.emitClose !== false, this.autoDestroy = !!t3.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this);
        }
        function A(t3) {
          var e3 = this instanceof (n2 = n2 || r2(656));
          if (!e3 && !o.call(A, this))
            return new A(t3);
          this._writableState = new T(t3, this, e3), this.writable = true, t3 && (typeof t3.write == "function" && (this._write = t3.write), typeof t3.writev == "function" && (this._writev = t3.writev), typeof t3.destroy == "function" && (this._destroy = t3.destroy), typeof t3.final == "function" && (this._final = t3.final)), c.call(this);
        }
        function S(t3, e3, r3, n3, s2, i2, o2) {
          e3.writelen = n3, e3.writecb = o2, e3.writing = true, e3.sync = true, e3.destroyed ? e3.onwrite(new y("write")) : r3 ? t3._writev(s2, e3.onwrite) : t3._write(s2, i2, e3.onwrite), e3.sync = false;
        }
        function R(t3, e3, r3, n3) {
          r3 || function(t4, e4) {
            e4.length === 0 && e4.needDrain && (e4.needDrain = false, t4.emit("drain"));
          }(t3, e3), e3.pendingcb--, n3(), C(t3, e3);
        }
        function I(t3, e3) {
          e3.bufferProcessing = true;
          var r3 = e3.bufferedRequest;
          if (t3._writev && r3 && r3.next) {
            var n3 = e3.bufferedRequestCount, s2 = new Array(n3), o2 = e3.corkedRequestsFree;
            o2.entry = r3;
            for (var a2 = 0, c2 = true; r3; )
              s2[a2] = r3, r3.isBuf || (c2 = false), r3 = r3.next, a2 += 1;
            s2.allBuffers = c2, S(t3, e3, true, e3.length, s2, "", o2.finish), e3.pendingcb++, e3.lastBufferedRequest = null, o2.next ? (e3.corkedRequestsFree = o2.next, o2.next = null) : e3.corkedRequestsFree = new i(e3), e3.bufferedRequestCount = 0;
          } else {
            for (; r3; ) {
              var u2 = r3.chunk, l2 = r3.encoding, h2 = r3.callback;
              if (S(t3, e3, false, e3.objectMode ? 1 : u2.length, u2, l2, h2), r3 = r3.next, e3.bufferedRequestCount--, e3.writing)
                break;
            }
            r3 === null && (e3.lastBufferedRequest = null);
          }
          e3.bufferedRequest = r3, e3.bufferProcessing = false;
        }
        function N(t3) {
          return t3.ending && t3.length === 0 && t3.bufferedRequest === null && !t3.finished && !t3.writing;
        }
        function O(t3, e3) {
          t3._final(function(r3) {
            e3.pendingcb--, r3 && x(t3, r3), e3.prefinished = true, t3.emit("prefinish"), C(t3, e3);
          });
        }
        function C(t3, e3) {
          var r3 = N(e3);
          if (r3 && (function(t4, e4) {
            e4.prefinished || e4.finalCalled || (typeof t4._final != "function" || e4.destroyed ? (e4.prefinished = true, t4.emit("prefinish")) : (e4.pendingcb++, e4.finalCalled = true, s.nextTick(O, t4, e4)));
          }(t3, e3), e3.pendingcb === 0 && (e3.finished = true, t3.emit("finish"), e3.autoDestroy))) {
            var n3 = t3._readableState;
            (!n3 || n3.autoDestroy && n3.endEmitted) && t3.destroy();
          }
          return r3;
        }
        r2(717)(A, c), T.prototype.getBuffer = function() {
          for (var t3 = this.bufferedRequest, e3 = []; t3; )
            e3.push(t3), t3 = t3.next;
          return e3;
        }, function() {
          try {
            Object.defineProperty(T.prototype, "buffer", { get: a.deprecate(function() {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
          } catch (t3) {
          }
        }(), typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (o = Function.prototype[Symbol.hasInstance], Object.defineProperty(A, Symbol.hasInstance, { value: function(t3) {
          return !!o.call(this, t3) || this === A && t3 && t3._writableState instanceof T;
        } })) : o = function(t3) {
          return t3 instanceof this;
        }, A.prototype.pipe = function() {
          x(this, new g());
        }, A.prototype.write = function(t3, e3, r3) {
          var n3, i2 = this._writableState, o2 = false, a2 = !i2.objectMode && (n3 = t3, u.isBuffer(n3) || n3 instanceof l);
          return a2 && !u.isBuffer(t3) && (t3 = function(t4) {
            return u.from(t4);
          }(t3)), typeof e3 == "function" && (r3 = e3, e3 = null), a2 ? e3 = "buffer" : e3 || (e3 = i2.defaultEncoding), typeof r3 != "function" && (r3 = E), i2.ending ? function(t4, e4) {
            var r4 = new v();
            x(t4, r4), s.nextTick(e4, r4);
          }(this, r3) : (a2 || function(t4, e4, r4, n4) {
            var i3;
            return r4 === null ? i3 = new b() : typeof r4 == "string" || e4.objectMode || (i3 = new f("chunk", ["string", "Buffer"], r4)), !i3 || (x(t4, i3), s.nextTick(n4, i3), false);
          }(this, i2, t3, r3)) && (i2.pendingcb++, o2 = function(t4, e4, r4, n4, s2, i3) {
            if (!r4) {
              var o3 = function(t5, e5, r5) {
                return t5.objectMode || t5.decodeStrings === false || typeof e5 != "string" || (e5 = u.from(e5, r5)), e5;
              }(e4, n4, s2);
              n4 !== o3 && (r4 = true, s2 = "buffer", n4 = o3);
            }
            var a3 = e4.objectMode ? 1 : n4.length;
            e4.length += a3;
            var c2 = e4.length < e4.highWaterMark;
            if (c2 || (e4.needDrain = true), e4.writing || e4.corked) {
              var l2 = e4.lastBufferedRequest;
              e4.lastBufferedRequest = { chunk: n4, encoding: s2, isBuf: r4, callback: i3, next: null }, l2 ? l2.next = e4.lastBufferedRequest : e4.bufferedRequest = e4.lastBufferedRequest, e4.bufferedRequestCount += 1;
            } else
              S(t4, e4, false, a3, n4, s2, i3);
            return c2;
          }(this, i2, a2, t3, e3, r3)), o2;
        }, A.prototype.cork = function() {
          this._writableState.corked++;
        }, A.prototype.uncork = function() {
          var t3 = this._writableState;
          t3.corked && (t3.corked--, t3.writing || t3.corked || t3.bufferProcessing || !t3.bufferedRequest || I(this, t3));
        }, A.prototype.setDefaultEncoding = function(t3) {
          if (typeof t3 == "string" && (t3 = t3.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t3 + "").toLowerCase()) > -1))
            throw new _(t3);
          return this._writableState.defaultEncoding = t3, this;
        }, Object.defineProperty(A.prototype, "writableBuffer", { enumerable: false, get: function() {
          return this._writableState && this._writableState.getBuffer();
        } }), Object.defineProperty(A.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
          return this._writableState.highWaterMark;
        } }), A.prototype._write = function(t3, e3, r3) {
          r3(new m("_write()"));
        }, A.prototype._writev = null, A.prototype.end = function(t3, e3, r3) {
          var n3 = this._writableState;
          return typeof t3 == "function" ? (r3 = t3, t3 = null, e3 = null) : typeof e3 == "function" && (r3 = e3, e3 = null), t3 != null && this.write(t3, e3), n3.corked && (n3.corked = 1, this.uncork()), n3.ending || function(t4, e4, r4) {
            e4.ending = true, C(t4, e4), r4 && (e4.finished ? s.nextTick(r4) : t4.once("finish", r4)), e4.ended = true, t4.writable = false;
          }(this, n3, r3), this;
        }, Object.defineProperty(A.prototype, "writableLength", { enumerable: false, get: function() {
          return this._writableState.length;
        } }), Object.defineProperty(A.prototype, "destroyed", { enumerable: false, get: function() {
          return this._writableState !== void 0 && this._writableState.destroyed;
        }, set: function(t3) {
          this._writableState && (this._writableState.destroyed = t3);
        } }), A.prototype.destroy = h.destroy, A.prototype._undestroy = h.undestroy, A.prototype._destroy = function(t3, e3) {
          e3(t3);
        };
      }, 828: (t2, e2, r2) => {
        var n2, s = r2(155);
        function i(t3, e3, r3) {
          return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        var o = r2(86), a = Symbol("lastResolve"), c = Symbol("lastReject"), u = Symbol("error"), l = Symbol("ended"), h = Symbol("lastPromise"), p2 = Symbol("handlePromise"), d = Symbol("stream");
        function f(t3, e3) {
          return { value: t3, done: e3 };
        }
        function m(t3) {
          var e3 = t3[a];
          if (e3 !== null) {
            var r3 = t3[d].read();
            r3 !== null && (t3[h] = null, t3[a] = null, t3[c] = null, e3(f(r3, false)));
          }
        }
        function w(t3) {
          s.nextTick(m, t3);
        }
        var g = Object.getPrototypeOf(function() {
        }), y = Object.setPrototypeOf((i(n2 = { get stream() {
          return this[d];
        }, next: function() {
          var t3 = this, e3 = this[u];
          if (e3 !== null)
            return Promise.reject(e3);
          if (this[l])
            return Promise.resolve(f(void 0, true));
          if (this[d].destroyed)
            return new Promise(function(e4, r4) {
              s.nextTick(function() {
                t3[u] ? r4(t3[u]) : e4(f(void 0, true));
              });
            });
          var r3, n3 = this[h];
          if (n3)
            r3 = new Promise(function(t4, e4) {
              return function(r4, n4) {
                t4.then(function() {
                  e4[l] ? r4(f(void 0, true)) : e4[p2](r4, n4);
                }, n4);
              };
            }(n3, this));
          else {
            var i2 = this[d].read();
            if (i2 !== null)
              return Promise.resolve(f(i2, false));
            r3 = new Promise(this[p2]);
          }
          return this[h] = r3, r3;
        } }, Symbol.asyncIterator, function() {
          return this;
        }), i(n2, "return", function() {
          var t3 = this;
          return new Promise(function(e3, r3) {
            t3[d].destroy(null, function(t4) {
              t4 ? r3(t4) : e3(f(void 0, true));
            });
          });
        }), n2), g);
        t2.exports = function(t3) {
          var e3, r3 = Object.create(y, (i(e3 = {}, d, { value: t3, writable: true }), i(e3, a, { value: null, writable: true }), i(e3, c, { value: null, writable: true }), i(e3, u, { value: null, writable: true }), i(e3, l, { value: t3._readableState.endEmitted, writable: true }), i(e3, p2, { value: function(t4, e4) {
            var n3 = r3[d].read();
            n3 ? (r3[h] = null, r3[a] = null, r3[c] = null, t4(f(n3, false))) : (r3[a] = t4, r3[c] = e4);
          }, writable: true }), e3));
          return r3[h] = null, o(t3, function(t4) {
            if (t4 && t4.code !== "ERR_STREAM_PREMATURE_CLOSE") {
              var e4 = r3[c];
              return e4 !== null && (r3[h] = null, r3[a] = null, r3[c] = null, e4(t4)), void (r3[u] = t4);
            }
            var n3 = r3[a];
            n3 !== null && (r3[h] = null, r3[a] = null, r3[c] = null, n3(f(void 0, true))), r3[l] = true;
          }), t3.on("readable", w.bind(null, r3)), r3;
        };
      }, 686: (t2, e2, r2) => {
        function n2(t3, e3) {
          var r3 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var n3 = Object.getOwnPropertySymbols(t3);
            e3 && (n3 = n3.filter(function(e4) {
              return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
            })), r3.push.apply(r3, n3);
          }
          return r3;
        }
        function s(t3, e3, r3) {
          return e3 in t3 ? Object.defineProperty(t3, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t3[e3] = r3, t3;
        }
        function i(t3, e3) {
          for (var r3 = 0; r3 < e3.length; r3++) {
            var n3 = e3[r3];
            n3.enumerable = n3.enumerable || false, n3.configurable = true, "value" in n3 && (n3.writable = true), Object.defineProperty(t3, n3.key, n3);
          }
        }
        var o = r2(764).Buffer, a = r2(862).inspect, c = a && a.custom || "inspect";
        t2.exports = function() {
          function t3() {
            !function(t4, e4) {
              if (!(t4 instanceof e4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3), this.head = null, this.tail = null, this.length = 0;
          }
          var e3, r3;
          return e3 = t3, r3 = [{ key: "push", value: function(t4) {
            var e4 = { data: t4, next: null };
            this.length > 0 ? this.tail.next = e4 : this.head = e4, this.tail = e4, ++this.length;
          } }, { key: "unshift", value: function(t4) {
            var e4 = { data: t4, next: this.head };
            this.length === 0 && (this.tail = e4), this.head = e4, ++this.length;
          } }, { key: "shift", value: function() {
            if (this.length !== 0) {
              var t4 = this.head.data;
              return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t4;
            }
          } }, { key: "clear", value: function() {
            this.head = this.tail = null, this.length = 0;
          } }, { key: "join", value: function(t4) {
            if (this.length === 0)
              return "";
            for (var e4 = this.head, r4 = "" + e4.data; e4 = e4.next; )
              r4 += t4 + e4.data;
            return r4;
          } }, { key: "concat", value: function(t4) {
            if (this.length === 0)
              return o.alloc(0);
            for (var e4, r4, n3, s2 = o.allocUnsafe(t4 >>> 0), i2 = this.head, a2 = 0; i2; )
              e4 = i2.data, r4 = s2, n3 = a2, o.prototype.copy.call(e4, r4, n3), a2 += i2.data.length, i2 = i2.next;
            return s2;
          } }, { key: "consume", value: function(t4, e4) {
            var r4;
            return t4 < this.head.data.length ? (r4 = this.head.data.slice(0, t4), this.head.data = this.head.data.slice(t4)) : r4 = t4 === this.head.data.length ? this.shift() : e4 ? this._getString(t4) : this._getBuffer(t4), r4;
          } }, { key: "first", value: function() {
            return this.head.data;
          } }, { key: "_getString", value: function(t4) {
            var e4 = this.head, r4 = 1, n3 = e4.data;
            for (t4 -= n3.length; e4 = e4.next; ) {
              var s2 = e4.data, i2 = t4 > s2.length ? s2.length : t4;
              if (i2 === s2.length ? n3 += s2 : n3 += s2.slice(0, t4), (t4 -= i2) == 0) {
                i2 === s2.length ? (++r4, e4.next ? this.head = e4.next : this.head = this.tail = null) : (this.head = e4, e4.data = s2.slice(i2));
                break;
              }
              ++r4;
            }
            return this.length -= r4, n3;
          } }, { key: "_getBuffer", value: function(t4) {
            var e4 = o.allocUnsafe(t4), r4 = this.head, n3 = 1;
            for (r4.data.copy(e4), t4 -= r4.data.length; r4 = r4.next; ) {
              var s2 = r4.data, i2 = t4 > s2.length ? s2.length : t4;
              if (s2.copy(e4, e4.length - t4, 0, i2), (t4 -= i2) == 0) {
                i2 === s2.length ? (++n3, r4.next ? this.head = r4.next : this.head = this.tail = null) : (this.head = r4, r4.data = s2.slice(i2));
                break;
              }
              ++n3;
            }
            return this.length -= n3, e4;
          } }, { key: c, value: function(t4, e4) {
            return a(this, function(t5) {
              for (var e5 = 1; e5 < arguments.length; e5++) {
                var r4 = arguments[e5] != null ? arguments[e5] : {};
                e5 % 2 ? n2(Object(r4), true).forEach(function(e6) {
                  s(t5, e6, r4[e6]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t5, Object.getOwnPropertyDescriptors(r4)) : n2(Object(r4)).forEach(function(e6) {
                  Object.defineProperty(t5, e6, Object.getOwnPropertyDescriptor(r4, e6));
                });
              }
              return t5;
            }({}, e4, { depth: 0, customInspect: false }));
          } }], r3 && i(e3.prototype, r3), t3;
        }();
      }, 29: (t2, e2, r2) => {
        var n2 = r2(155);
        function s(t3, e3) {
          o(t3, e3), i(t3);
        }
        function i(t3) {
          t3._writableState && !t3._writableState.emitClose || t3._readableState && !t3._readableState.emitClose || t3.emit("close");
        }
        function o(t3, e3) {
          t3.emit("error", e3);
        }
        t2.exports = { destroy: function(t3, e3) {
          var r3 = this, a = this._readableState && this._readableState.destroyed, c = this._writableState && this._writableState.destroyed;
          return a || c ? (e3 ? e3(t3) : t3 && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, n2.nextTick(o, this, t3)) : n2.nextTick(o, this, t3)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(t3 || null, function(t4) {
            !e3 && t4 ? r3._writableState ? r3._writableState.errorEmitted ? n2.nextTick(i, r3) : (r3._writableState.errorEmitted = true, n2.nextTick(s, r3, t4)) : n2.nextTick(s, r3, t4) : e3 ? (n2.nextTick(i, r3), e3(t4)) : n2.nextTick(i, r3);
          }), this);
        }, undestroy: function() {
          this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
        }, errorOrDestroy: function(t3, e3) {
          var r3 = t3._readableState, n3 = t3._writableState;
          r3 && r3.autoDestroy || n3 && n3.autoDestroy ? t3.destroy(e3) : t3.emit("error", e3);
        } };
      }, 86: (t2, e2, r2) => {
        var n2 = r2(106).q.ERR_STREAM_PREMATURE_CLOSE;
        function s() {
        }
        t2.exports = function t3(e3, r3, i) {
          if (typeof r3 == "function")
            return t3(e3, null, r3);
          r3 || (r3 = {}), i = function(t4) {
            var e4 = false;
            return function() {
              if (!e4) {
                e4 = true;
                for (var r4 = arguments.length, n3 = new Array(r4), s2 = 0; s2 < r4; s2++)
                  n3[s2] = arguments[s2];
                t4.apply(this, n3);
              }
            };
          }(i || s);
          var o = r3.readable || r3.readable !== false && e3.readable, a = r3.writable || r3.writable !== false && e3.writable, c = function() {
            e3.writable || l();
          }, u = e3._writableState && e3._writableState.finished, l = function() {
            a = false, u = true, o || i.call(e3);
          }, h = e3._readableState && e3._readableState.endEmitted, p2 = function() {
            o = false, h = true, a || i.call(e3);
          }, d = function(t4) {
            i.call(e3, t4);
          }, f = function() {
            var t4;
            return o && !h ? (e3._readableState && e3._readableState.ended || (t4 = new n2()), i.call(e3, t4)) : a && !u ? (e3._writableState && e3._writableState.ended || (t4 = new n2()), i.call(e3, t4)) : void 0;
          }, m = function() {
            e3.req.on("finish", l);
          };
          return function(t4) {
            return t4.setHeader && typeof t4.abort == "function";
          }(e3) ? (e3.on("complete", l), e3.on("abort", f), e3.req ? m() : e3.on("request", m)) : a && !e3._writableState && (e3.on("end", c), e3.on("close", c)), e3.on("end", p2), e3.on("finish", l), r3.error !== false && e3.on("error", d), e3.on("close", f), function() {
            e3.removeListener("complete", l), e3.removeListener("abort", f), e3.removeListener("request", m), e3.req && e3.req.removeListener("finish", l), e3.removeListener("end", c), e3.removeListener("close", c), e3.removeListener("finish", l), e3.removeListener("end", p2), e3.removeListener("error", d), e3.removeListener("close", f);
          };
        };
      }, 265: (t2) => {
        t2.exports = function() {
          throw new Error("Readable.from is not available in the browser");
        };
      }, 472: (t2, e2, r2) => {
        var n2, s = r2(106).q, i = s.ERR_MISSING_ARGS, o = s.ERR_STREAM_DESTROYED;
        function a(t3) {
          if (t3)
            throw t3;
        }
        function c(t3, e3, s2, i2) {
          i2 = function(t4) {
            var e4 = false;
            return function() {
              e4 || (e4 = true, t4.apply(void 0, arguments));
            };
          }(i2);
          var a2 = false;
          t3.on("close", function() {
            a2 = true;
          }), n2 === void 0 && (n2 = r2(86)), n2(t3, { readable: e3, writable: s2 }, function(t4) {
            if (t4)
              return i2(t4);
            a2 = true, i2();
          });
          var c2 = false;
          return function(e4) {
            if (!a2 && !c2)
              return c2 = true, function(t4) {
                return t4.setHeader && typeof t4.abort == "function";
              }(t3) ? t3.abort() : typeof t3.destroy == "function" ? t3.destroy() : void i2(e4 || new o("pipe"));
          };
        }
        function u(t3) {
          t3();
        }
        function l(t3, e3) {
          return t3.pipe(e3);
        }
        function h(t3) {
          return t3.length ? typeof t3[t3.length - 1] != "function" ? a : t3.pop() : a;
        }
        t2.exports = function() {
          for (var t3 = arguments.length, e3 = new Array(t3), r3 = 0; r3 < t3; r3++)
            e3[r3] = arguments[r3];
          var n3, s2 = h(e3);
          if (Array.isArray(e3[0]) && (e3 = e3[0]), e3.length < 2)
            throw new i("streams");
          var o2 = e3.map(function(t4, r4) {
            var i2 = r4 < e3.length - 1;
            return c(t4, i2, r4 > 0, function(t5) {
              n3 || (n3 = t5), t5 && o2.forEach(u), i2 || (o2.forEach(u), s2(n3));
            });
          });
          return e3.reduce(l);
        };
      }, 94: (t2, e2, r2) => {
        var n2 = r2(106).q.ERR_INVALID_OPT_VALUE;
        t2.exports = { getHighWaterMark: function(t3, e3, r3, s) {
          var i = function(t4, e4, r4) {
            return t4.highWaterMark != null ? t4.highWaterMark : e4 ? t4[r4] : null;
          }(e3, s, r3);
          if (i != null) {
            if (!isFinite(i) || Math.floor(i) !== i || i < 0)
              throw new n2(s ? r3 : "highWaterMark", i);
            return Math.floor(i);
          }
          return t3.objectMode ? 16 : 16384;
        } };
      }, 194: (t2, e2, r2) => {
        t2.exports = r2(187).EventEmitter;
      }, 553: (t2, e2, r2) => {
        var n2 = r2(509).Buffer, s = n2.isEncoding || function(t3) {
          switch ((t3 = "" + t3) && t3.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return true;
            default:
              return false;
          }
        };
        function i(t3) {
          var e3;
          switch (this.encoding = function(t4) {
            var e4 = function(t5) {
              if (!t5)
                return "utf8";
              for (var e5; ; )
                switch (t5) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t5;
                  default:
                    if (e5)
                      return;
                    t5 = ("" + t5).toLowerCase(), e5 = true;
                }
            }(t4);
            if (typeof e4 != "string" && (n2.isEncoding === s || !s(t4)))
              throw new Error("Unknown encoding: " + t4);
            return e4 || t4;
          }(t3), this.encoding) {
            case "utf16le":
              this.text = c, this.end = u, e3 = 4;
              break;
            case "utf8":
              this.fillLast = a, e3 = 4;
              break;
            case "base64":
              this.text = l, this.end = h, e3 = 3;
              break;
            default:
              return this.write = p2, void (this.end = d);
          }
          this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n2.allocUnsafe(e3);
        }
        function o(t3) {
          return t3 <= 127 ? 0 : t3 >> 5 == 6 ? 2 : t3 >> 4 == 14 ? 3 : t3 >> 3 == 30 ? 4 : t3 >> 6 == 2 ? -1 : -2;
        }
        function a(t3) {
          var e3 = this.lastTotal - this.lastNeed, r3 = function(t4, e4, r4) {
            if ((192 & e4[0]) != 128)
              return t4.lastNeed = 0, "\uFFFD";
            if (t4.lastNeed > 1 && e4.length > 1) {
              if ((192 & e4[1]) != 128)
                return t4.lastNeed = 1, "\uFFFD";
              if (t4.lastNeed > 2 && e4.length > 2 && (192 & e4[2]) != 128)
                return t4.lastNeed = 2, "\uFFFD";
            }
          }(this, t3);
          return r3 !== void 0 ? r3 : this.lastNeed <= t3.length ? (t3.copy(this.lastChar, e3, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t3.copy(this.lastChar, e3, 0, t3.length), void (this.lastNeed -= t3.length));
        }
        function c(t3, e3) {
          if ((t3.length - e3) % 2 == 0) {
            var r3 = t3.toString("utf16le", e3);
            if (r3) {
              var n3 = r3.charCodeAt(r3.length - 1);
              if (n3 >= 55296 && n3 <= 56319)
                return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t3[t3.length - 2], this.lastChar[1] = t3[t3.length - 1], r3.slice(0, -1);
            }
            return r3;
          }
          return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t3[t3.length - 1], t3.toString("utf16le", e3, t3.length - 1);
        }
        function u(t3) {
          var e3 = t3 && t3.length ? this.write(t3) : "";
          if (this.lastNeed) {
            var r3 = this.lastTotal - this.lastNeed;
            return e3 + this.lastChar.toString("utf16le", 0, r3);
          }
          return e3;
        }
        function l(t3, e3) {
          var r3 = (t3.length - e3) % 3;
          return r3 === 0 ? t3.toString("base64", e3) : (this.lastNeed = 3 - r3, this.lastTotal = 3, r3 === 1 ? this.lastChar[0] = t3[t3.length - 1] : (this.lastChar[0] = t3[t3.length - 2], this.lastChar[1] = t3[t3.length - 1]), t3.toString("base64", e3, t3.length - r3));
        }
        function h(t3) {
          var e3 = t3 && t3.length ? this.write(t3) : "";
          return this.lastNeed ? e3 + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e3;
        }
        function p2(t3) {
          return t3.toString(this.encoding);
        }
        function d(t3) {
          return t3 && t3.length ? this.write(t3) : "";
        }
        e2.s = i, i.prototype.write = function(t3) {
          if (t3.length === 0)
            return "";
          var e3, r3;
          if (this.lastNeed) {
            if ((e3 = this.fillLast(t3)) === void 0)
              return "";
            r3 = this.lastNeed, this.lastNeed = 0;
          } else
            r3 = 0;
          return r3 < t3.length ? e3 ? e3 + this.text(t3, r3) : this.text(t3, r3) : e3 || "";
        }, i.prototype.end = function(t3) {
          var e3 = t3 && t3.length ? this.write(t3) : "";
          return this.lastNeed ? e3 + "\uFFFD" : e3;
        }, i.prototype.text = function(t3, e3) {
          var r3 = function(t4, e4, r4) {
            var n4 = e4.length - 1;
            if (n4 < r4)
              return 0;
            var s2 = o(e4[n4]);
            return s2 >= 0 ? (s2 > 0 && (t4.lastNeed = s2 - 1), s2) : --n4 < r4 || s2 === -2 ? 0 : (s2 = o(e4[n4])) >= 0 ? (s2 > 0 && (t4.lastNeed = s2 - 2), s2) : --n4 < r4 || s2 === -2 ? 0 : (s2 = o(e4[n4])) >= 0 ? (s2 > 0 && (s2 === 2 ? s2 = 0 : t4.lastNeed = s2 - 3), s2) : 0;
          }(this, t3, e3);
          if (!this.lastNeed)
            return t3.toString("utf8", e3);
          this.lastTotal = r3;
          var n3 = t3.length - (r3 - this.lastNeed);
          return t3.copy(this.lastChar, 0, n3), t3.toString("utf8", e3, n3);
        }, i.prototype.fillLast = function(t3) {
          if (this.lastNeed <= t3.length)
            return t3.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
          t3.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t3.length), this.lastNeed -= t3.length;
        };
      }, 927: (t2, e2, r2) => {
        function n2(t3) {
          try {
            if (!r2.g.localStorage)
              return false;
          } catch (t4) {
            return false;
          }
          var e3 = r2.g.localStorage[t3];
          return e3 != null && String(e3).toLowerCase() === "true";
        }
        t2.exports = function(t3, e3) {
          if (n2("noDeprecation"))
            return t3;
          var r3 = false;
          return function() {
            if (!r3) {
              if (n2("throwDeprecation"))
                throw new Error(e3);
              n2("traceDeprecation") ? console.trace(e3) : console.warn(e3), r3 = true;
            }
            return t3.apply(this, arguments);
          };
        };
      }, 881: (t2) => {
        t2.exports = { isArray: function(t3) {
          return Array.isArray ? Array.isArray(t3) : Object.prototype.toString.call(t3) === "[object Array]";
        } };
      }, 888: (t2, e2, r2) => {
        var n2 = r2(229), s = r2(388), i = r2(501), o = r2(673);
        t2.exports = { xml2js: n2, xml2json: s, js2xml: i, json2xml: o };
      }, 501: (t2, e2, r2) => {
        var n2, s, i = r2(740), o = r2(881).isArray;
        function a(t3, e3, r3) {
          return (!r3 && t3.spaces ? "\n" : "") + Array(e3 + 1).join(t3.spaces);
        }
        function c(t3, e3, r3) {
          if (e3.ignoreAttributes)
            return "";
          "attributesFn" in e3 && (t3 = e3.attributesFn(t3, s, n2));
          var i2, o2, c2, u2, l2 = [];
          for (i2 in t3)
            t3.hasOwnProperty(i2) && t3[i2] !== null && t3[i2] !== void 0 && (u2 = e3.noQuotesForNativeAttributes && typeof t3[i2] != "string" ? "" : '"', o2 = (o2 = "" + t3[i2]).replace(/"/g, "&quot;"), c2 = "attributeNameFn" in e3 ? e3.attributeNameFn(i2, o2, s, n2) : i2, l2.push(e3.spaces && e3.indentAttributes ? a(e3, r3 + 1, false) : " "), l2.push(c2 + "=" + u2 + ("attributeValueFn" in e3 ? e3.attributeValueFn(o2, i2, s, n2) : o2) + u2));
          return t3 && Object.keys(t3).length && e3.spaces && e3.indentAttributes && l2.push(a(e3, r3, false)), l2.join("");
        }
        function u(t3, e3, r3) {
          return n2 = t3, s = "xml", e3.ignoreDeclaration ? "" : "<?xml" + c(t3[e3.attributesKey], e3, r3) + "?>";
        }
        function l(t3, e3, r3) {
          if (e3.ignoreInstruction)
            return "";
          var i2;
          for (i2 in t3)
            if (t3.hasOwnProperty(i2))
              break;
          var o2 = "instructionNameFn" in e3 ? e3.instructionNameFn(i2, t3[i2], s, n2) : i2;
          if (typeof t3[i2] == "object")
            return n2 = t3, s = o2, "<?" + o2 + c(t3[i2][e3.attributesKey], e3, r3) + "?>";
          var a2 = t3[i2] ? t3[i2] : "";
          return "instructionFn" in e3 && (a2 = e3.instructionFn(a2, i2, s, n2)), "<?" + o2 + (a2 ? " " + a2 : "") + "?>";
        }
        function h(t3, e3) {
          return e3.ignoreComment ? "" : "<!--" + ("commentFn" in e3 ? e3.commentFn(t3, s, n2) : t3) + "-->";
        }
        function p2(t3, e3) {
          return e3.ignoreCdata ? "" : "<![CDATA[" + ("cdataFn" in e3 ? e3.cdataFn(t3, s, n2) : t3.replace("]]>", "]]]]><![CDATA[>")) + "]]>";
        }
        function d(t3, e3) {
          return e3.ignoreDoctype ? "" : "<!DOCTYPE " + ("doctypeFn" in e3 ? e3.doctypeFn(t3, s, n2) : t3) + ">";
        }
        function f(t3, e3) {
          return e3.ignoreText ? "" : (t3 = (t3 = (t3 = "" + t3).replace(/&amp;/g, "&")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "textFn" in e3 ? e3.textFn(t3, s, n2) : t3);
        }
        function m(t3, e3, r3, i2) {
          return t3.reduce(function(t4, o2) {
            var u2 = a(e3, r3, i2 && !t4);
            switch (o2.type) {
              case "element":
                return t4 + u2 + function(t5, e4, r4) {
                  n2 = t5, s = t5.name;
                  var i3 = [], o3 = "elementNameFn" in e4 ? e4.elementNameFn(t5.name, t5) : t5.name;
                  i3.push("<" + o3), t5[e4.attributesKey] && i3.push(c(t5[e4.attributesKey], e4, r4));
                  var a2 = t5[e4.elementsKey] && t5[e4.elementsKey].length || t5[e4.attributesKey] && t5[e4.attributesKey]["xml:space"] === "preserve";
                  return a2 || (a2 = "fullTagEmptyElementFn" in e4 ? e4.fullTagEmptyElementFn(t5.name, t5) : e4.fullTagEmptyElement), a2 ? (i3.push(">"), t5[e4.elementsKey] && t5[e4.elementsKey].length && (i3.push(m(t5[e4.elementsKey], e4, r4 + 1)), n2 = t5, s = t5.name), i3.push(e4.spaces && function(t6, e5) {
                    var r5;
                    if (t6.elements && t6.elements.length)
                      for (r5 = 0; r5 < t6.elements.length; ++r5)
                        switch (t6.elements[r5][e5.typeKey]) {
                          case "text":
                            if (e5.indentText)
                              return true;
                            break;
                          case "cdata":
                            if (e5.indentCdata)
                              return true;
                            break;
                          case "instruction":
                            if (e5.indentInstruction)
                              return true;
                            break;
                          default:
                            return true;
                        }
                    return false;
                  }(t5, e4) ? "\n" + Array(r4 + 1).join(e4.spaces) : ""), i3.push("</" + o3 + ">")) : i3.push("/>"), i3.join("");
                }(o2, e3, r3);
              case "comment":
                return t4 + u2 + h(o2[e3.commentKey], e3);
              case "doctype":
                return t4 + u2 + d(o2[e3.doctypeKey], e3);
              case "cdata":
                return t4 + (e3.indentCdata ? u2 : "") + p2(o2[e3.cdataKey], e3);
              case "text":
                return t4 + (e3.indentText ? u2 : "") + f(o2[e3.textKey], e3);
              case "instruction":
                var w2 = {};
                return w2[o2[e3.nameKey]] = o2[e3.attributesKey] ? o2 : o2[e3.instructionKey], t4 + (e3.indentInstruction ? u2 : "") + l(w2, e3, r3);
            }
          }, "");
        }
        function w(t3, e3, r3) {
          var n3;
          for (n3 in t3)
            if (t3.hasOwnProperty(n3))
              switch (n3) {
                case e3.parentKey:
                case e3.attributesKey:
                  break;
                case e3.textKey:
                  if (e3.indentText || r3)
                    return true;
                  break;
                case e3.cdataKey:
                  if (e3.indentCdata || r3)
                    return true;
                  break;
                case e3.instructionKey:
                  if (e3.indentInstruction || r3)
                    return true;
                  break;
                case e3.doctypeKey:
                case e3.commentKey:
                default:
                  return true;
              }
          return false;
        }
        function g(t3, e3, r3, i2, o2) {
          n2 = t3, s = e3;
          var u2 = "elementNameFn" in r3 ? r3.elementNameFn(e3, t3) : e3;
          if (t3 == null || t3 === "")
            return "fullTagEmptyElementFn" in r3 && r3.fullTagEmptyElementFn(e3, t3) || r3.fullTagEmptyElement ? "<" + u2 + "></" + u2 + ">" : "<" + u2 + "/>";
          var l2 = [];
          if (e3) {
            if (l2.push("<" + u2), typeof t3 != "object")
              return l2.push(">" + f(t3, r3) + "</" + u2 + ">"), l2.join("");
            t3[r3.attributesKey] && l2.push(c(t3[r3.attributesKey], r3, i2));
            var h2 = w(t3, r3, true) || t3[r3.attributesKey] && t3[r3.attributesKey]["xml:space"] === "preserve";
            if (h2 || (h2 = "fullTagEmptyElementFn" in r3 ? r3.fullTagEmptyElementFn(e3, t3) : r3.fullTagEmptyElement), !h2)
              return l2.push("/>"), l2.join("");
            l2.push(">");
          }
          return l2.push(y(t3, r3, i2 + 1, false)), n2 = t3, s = e3, e3 && l2.push((o2 ? a(r3, i2, false) : "") + "</" + u2 + ">"), l2.join("");
        }
        function y(t3, e3, r3, n3) {
          var s2, i2, c2, m2 = [];
          for (i2 in t3)
            if (t3.hasOwnProperty(i2))
              for (c2 = o(t3[i2]) ? t3[i2] : [t3[i2]], s2 = 0; s2 < c2.length; ++s2) {
                switch (i2) {
                  case e3.declarationKey:
                    m2.push(u(c2[s2], e3, r3));
                    break;
                  case e3.instructionKey:
                    m2.push((e3.indentInstruction ? a(e3, r3, n3) : "") + l(c2[s2], e3, r3));
                    break;
                  case e3.attributesKey:
                  case e3.parentKey:
                    break;
                  case e3.textKey:
                    m2.push((e3.indentText ? a(e3, r3, n3) : "") + f(c2[s2], e3));
                    break;
                  case e3.cdataKey:
                    m2.push((e3.indentCdata ? a(e3, r3, n3) : "") + p2(c2[s2], e3));
                    break;
                  case e3.doctypeKey:
                    m2.push(a(e3, r3, n3) + d(c2[s2], e3));
                    break;
                  case e3.commentKey:
                    m2.push(a(e3, r3, n3) + h(c2[s2], e3));
                    break;
                  default:
                    m2.push(a(e3, r3, n3) + g(c2[s2], i2, e3, r3, w(c2[s2], e3)));
                }
                n3 = n3 && !m2.length;
              }
          return m2.join("");
        }
        t2.exports = function(t3, e3) {
          e3 = function(t4) {
            var e4 = i.copyOptions(t4);
            return i.ensureFlagExists("ignoreDeclaration", e4), i.ensureFlagExists("ignoreInstruction", e4), i.ensureFlagExists("ignoreAttributes", e4), i.ensureFlagExists("ignoreText", e4), i.ensureFlagExists("ignoreComment", e4), i.ensureFlagExists("ignoreCdata", e4), i.ensureFlagExists("ignoreDoctype", e4), i.ensureFlagExists("compact", e4), i.ensureFlagExists("indentText", e4), i.ensureFlagExists("indentCdata", e4), i.ensureFlagExists("indentAttributes", e4), i.ensureFlagExists("indentInstruction", e4), i.ensureFlagExists("fullTagEmptyElement", e4), i.ensureFlagExists("noQuotesForNativeAttributes", e4), i.ensureSpacesExists(e4), typeof e4.spaces == "number" && (e4.spaces = Array(e4.spaces + 1).join(" ")), i.ensureKeyExists("declaration", e4), i.ensureKeyExists("instruction", e4), i.ensureKeyExists("attributes", e4), i.ensureKeyExists("text", e4), i.ensureKeyExists("comment", e4), i.ensureKeyExists("cdata", e4), i.ensureKeyExists("doctype", e4), i.ensureKeyExists("type", e4), i.ensureKeyExists("name", e4), i.ensureKeyExists("elements", e4), i.checkFnExists("doctype", e4), i.checkFnExists("instruction", e4), i.checkFnExists("cdata", e4), i.checkFnExists("comment", e4), i.checkFnExists("text", e4), i.checkFnExists("instructionName", e4), i.checkFnExists("elementName", e4), i.checkFnExists("attributeName", e4), i.checkFnExists("attributeValue", e4), i.checkFnExists("attributes", e4), i.checkFnExists("fullTagEmptyElement", e4), e4;
          }(e3);
          var r3 = [];
          return n2 = t3, s = "_root_", e3.compact ? r3.push(y(t3, e3, 0, true)) : (t3[e3.declarationKey] && r3.push(u(t3[e3.declarationKey], e3, 0)), t3[e3.elementsKey] && t3[e3.elementsKey].length && r3.push(m(t3[e3.elementsKey], e3, 0, !r3.length))), r3.join("");
        };
      }, 673: (t2, e2, r2) => {
        var n2 = r2(501);
        t2.exports = function(t3, e3) {
          t3 instanceof Buffer && (t3 = t3.toString());
          var r3 = null;
          if (typeof t3 == "string")
            try {
              r3 = JSON.parse(t3);
            } catch (t4) {
              throw new Error("The JSON structure is invalid");
            }
          else
            r3 = t3;
          return n2(r3, e3);
        };
      }, 740: (t2, e2, r2) => {
        var n2 = r2(881).isArray;
        t2.exports = { copyOptions: function(t3) {
          var e3, r3 = {};
          for (e3 in t3)
            t3.hasOwnProperty(e3) && (r3[e3] = t3[e3]);
          return r3;
        }, ensureFlagExists: function(t3, e3) {
          t3 in e3 && typeof e3[t3] == "boolean" || (e3[t3] = false);
        }, ensureSpacesExists: function(t3) {
          (!("spaces" in t3) || typeof t3.spaces != "number" && typeof t3.spaces != "string") && (t3.spaces = 0);
        }, ensureAlwaysArrayExists: function(t3) {
          "alwaysArray" in t3 && (typeof t3.alwaysArray == "boolean" || n2(t3.alwaysArray)) || (t3.alwaysArray = false);
        }, ensureKeyExists: function(t3, e3) {
          t3 + "Key" in e3 && typeof e3[t3 + "Key"] == "string" || (e3[t3 + "Key"] = e3.compact ? "_" + t3 : t3);
        }, checkFnExists: function(t3, e3) {
          return t3 + "Fn" in e3;
        } };
      }, 229: (t2, e2, r2) => {
        var n2, s, i = r2(99), o = r2(740), a = r2(881).isArray;
        function c(t3) {
          var e3 = Number(t3);
          if (!isNaN(e3))
            return e3;
          var r3 = t3.toLowerCase();
          return r3 === "true" || r3 !== "false" && t3;
        }
        function u(t3, e3) {
          var r3;
          if (n2.compact) {
            if (!s[n2[t3 + "Key"]] && (a(n2.alwaysArray) ? n2.alwaysArray.indexOf(n2[t3 + "Key"]) !== -1 : n2.alwaysArray) && (s[n2[t3 + "Key"]] = []), s[n2[t3 + "Key"]] && !a(s[n2[t3 + "Key"]]) && (s[n2[t3 + "Key"]] = [s[n2[t3 + "Key"]]]), t3 + "Fn" in n2 && typeof e3 == "string" && (e3 = n2[t3 + "Fn"](e3, s)), t3 === "instruction" && ("instructionFn" in n2 || "instructionNameFn" in n2)) {
              for (r3 in e3)
                if (e3.hasOwnProperty(r3))
                  if ("instructionFn" in n2)
                    e3[r3] = n2.instructionFn(e3[r3], r3, s);
                  else {
                    var i2 = e3[r3];
                    delete e3[r3], e3[n2.instructionNameFn(r3, i2, s)] = i2;
                  }
            }
            a(s[n2[t3 + "Key"]]) ? s[n2[t3 + "Key"]].push(e3) : s[n2[t3 + "Key"]] = e3;
          } else {
            s[n2.elementsKey] || (s[n2.elementsKey] = []);
            var o2 = {};
            if (o2[n2.typeKey] = t3, t3 === "instruction") {
              for (r3 in e3)
                if (e3.hasOwnProperty(r3))
                  break;
              o2[n2.nameKey] = "instructionNameFn" in n2 ? n2.instructionNameFn(r3, e3, s) : r3, n2.instructionHasAttributes ? (o2[n2.attributesKey] = e3[r3][n2.attributesKey], "instructionFn" in n2 && (o2[n2.attributesKey] = n2.instructionFn(o2[n2.attributesKey], r3, s))) : ("instructionFn" in n2 && (e3[r3] = n2.instructionFn(e3[r3], r3, s)), o2[n2.instructionKey] = e3[r3]);
            } else
              t3 + "Fn" in n2 && (e3 = n2[t3 + "Fn"](e3, s)), o2[n2[t3 + "Key"]] = e3;
            n2.addParent && (o2[n2.parentKey] = s), s[n2.elementsKey].push(o2);
          }
        }
        function l(t3) {
          var e3;
          if ("attributesFn" in n2 && t3 && (t3 = n2.attributesFn(t3, s)), (n2.trim || "attributeValueFn" in n2 || "attributeNameFn" in n2 || n2.nativeTypeAttributes) && t3) {
            for (e3 in t3)
              if (t3.hasOwnProperty(e3) && (n2.trim && (t3[e3] = t3[e3].trim()), n2.nativeTypeAttributes && (t3[e3] = c(t3[e3])), "attributeValueFn" in n2 && (t3[e3] = n2.attributeValueFn(t3[e3], e3, s)), "attributeNameFn" in n2)) {
                var r3 = t3[e3];
                delete t3[e3], t3[n2.attributeNameFn(e3, t3[e3], s)] = r3;
              }
          }
          return t3;
        }
        function h(t3) {
          var e3 = {};
          if (t3.body && (t3.name.toLowerCase() === "xml" || n2.instructionHasAttributes)) {
            for (var r3, i2 = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g; (r3 = i2.exec(t3.body)) !== null; )
              e3[r3[1]] = r3[2] || r3[3] || r3[4];
            e3 = l(e3);
          }
          if (t3.name.toLowerCase() === "xml") {
            if (n2.ignoreDeclaration)
              return;
            s[n2.declarationKey] = {}, Object.keys(e3).length && (s[n2.declarationKey][n2.attributesKey] = e3), n2.addParent && (s[n2.declarationKey][n2.parentKey] = s);
          } else {
            if (n2.ignoreInstruction)
              return;
            n2.trim && (t3.body = t3.body.trim());
            var o2 = {};
            n2.instructionHasAttributes && Object.keys(e3).length ? (o2[t3.name] = {}, o2[t3.name][n2.attributesKey] = e3) : o2[t3.name] = t3.body, u("instruction", o2);
          }
        }
        function p2(t3, e3) {
          var r3;
          if (typeof t3 == "object" && (e3 = t3.attributes, t3 = t3.name), e3 = l(e3), "elementNameFn" in n2 && (t3 = n2.elementNameFn(t3, s)), n2.compact) {
            var i2;
            if (r3 = {}, !n2.ignoreAttributes && e3 && Object.keys(e3).length)
              for (i2 in r3[n2.attributesKey] = {}, e3)
                e3.hasOwnProperty(i2) && (r3[n2.attributesKey][i2] = e3[i2]);
            !(t3 in s) && (a(n2.alwaysArray) ? n2.alwaysArray.indexOf(t3) !== -1 : n2.alwaysArray) && (s[t3] = []), s[t3] && !a(s[t3]) && (s[t3] = [s[t3]]), a(s[t3]) ? s[t3].push(r3) : s[t3] = r3;
          } else
            s[n2.elementsKey] || (s[n2.elementsKey] = []), (r3 = {})[n2.typeKey] = "element", r3[n2.nameKey] = t3, !n2.ignoreAttributes && e3 && Object.keys(e3).length && (r3[n2.attributesKey] = e3), n2.alwaysChildren && (r3[n2.elementsKey] = []), s[n2.elementsKey].push(r3);
          r3[n2.parentKey] = s, s = r3;
        }
        function d(t3) {
          n2.ignoreText || (t3.trim() || n2.captureSpacesBetweenElements) && (n2.trim && (t3 = t3.trim()), n2.nativeType && (t3 = c(t3)), n2.sanitize && (t3 = t3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")), u("text", t3));
        }
        function f(t3) {
          n2.ignoreComment || (n2.trim && (t3 = t3.trim()), u("comment", t3));
        }
        function m(t3) {
          var e3 = s[n2.parentKey];
          n2.addParent || delete s[n2.parentKey], s = e3;
        }
        function w(t3) {
          n2.ignoreCdata || (n2.trim && (t3 = t3.trim()), u("cdata", t3));
        }
        function g(t3) {
          n2.ignoreDoctype || (t3 = t3.replace(/^ /, ""), n2.trim && (t3 = t3.trim()), u("doctype", t3));
        }
        function y(t3) {
          t3.note = t3;
        }
        t2.exports = function(t3, e3) {
          var r3 = i.parser(true, {}), a2 = {};
          if (s = a2, n2 = function(t4) {
            return n2 = o.copyOptions(t4), o.ensureFlagExists("ignoreDeclaration", n2), o.ensureFlagExists("ignoreInstruction", n2), o.ensureFlagExists("ignoreAttributes", n2), o.ensureFlagExists("ignoreText", n2), o.ensureFlagExists("ignoreComment", n2), o.ensureFlagExists("ignoreCdata", n2), o.ensureFlagExists("ignoreDoctype", n2), o.ensureFlagExists("compact", n2), o.ensureFlagExists("alwaysChildren", n2), o.ensureFlagExists("addParent", n2), o.ensureFlagExists("trim", n2), o.ensureFlagExists("nativeType", n2), o.ensureFlagExists("nativeTypeAttributes", n2), o.ensureFlagExists("sanitize", n2), o.ensureFlagExists("instructionHasAttributes", n2), o.ensureFlagExists("captureSpacesBetweenElements", n2), o.ensureAlwaysArrayExists(n2), o.ensureKeyExists("declaration", n2), o.ensureKeyExists("instruction", n2), o.ensureKeyExists("attributes", n2), o.ensureKeyExists("text", n2), o.ensureKeyExists("comment", n2), o.ensureKeyExists("cdata", n2), o.ensureKeyExists("doctype", n2), o.ensureKeyExists("type", n2), o.ensureKeyExists("name", n2), o.ensureKeyExists("elements", n2), o.ensureKeyExists("parent", n2), o.checkFnExists("doctype", n2), o.checkFnExists("instruction", n2), o.checkFnExists("cdata", n2), o.checkFnExists("comment", n2), o.checkFnExists("text", n2), o.checkFnExists("instructionName", n2), o.checkFnExists("elementName", n2), o.checkFnExists("attributeName", n2), o.checkFnExists("attributeValue", n2), o.checkFnExists("attributes", n2), n2;
          }(e3), r3.opt = { strictEntities: true }, r3.onopentag = p2, r3.ontext = d, r3.oncomment = f, r3.onclosetag = m, r3.onerror = y, r3.oncdata = w, r3.ondoctype = g, r3.onprocessinginstruction = h, r3.write(t3).close(), a2[n2.elementsKey]) {
            var c2 = a2[n2.elementsKey];
            delete a2[n2.elementsKey], a2[n2.elementsKey] = c2, delete a2.text;
          }
          return a2;
        };
      }, 388: (t2, e2, r2) => {
        var n2 = r2(740), s = r2(229);
        t2.exports = function(t3, e3) {
          var r3, i, o;
          return r3 = function(t4) {
            var e4 = n2.copyOptions(t4);
            return n2.ensureSpacesExists(e4), e4;
          }(e3), i = s(t3, r3), o = "compact" in r3 && r3.compact ? "_parent" : "parent", ("addParent" in r3 && r3.addParent ? JSON.stringify(i, function(t4, e4) {
            return t4 === o ? "_" : e4;
          }, r3.spaces) : JSON.stringify(i, null, r3.spaces)).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        };
      }, 255: (t2) => {
        var e2 = { "&": "&amp;", '"': "&quot;", "'": "&apos;", "<": "&lt;", ">": "&gt;" };
        t2.exports = function(t3) {
          return t3 && t3.replace ? t3.replace(/([&"<>'])/g, function(t4, r2) {
            return e2[r2];
          }) : t3;
        };
      }, 479: (t2, e2, r2) => {
        var n2 = r2(155), s = r2(255), i = r2(830).Stream;
        function o(t3, e3, r3) {
          r3 = r3 || 0;
          var n3, i2, a2 = (n3 = e3, new Array(r3 || 0).join(n3 || "")), c = t3;
          if (typeof t3 == "object" && (c = t3[i2 = Object.keys(t3)[0]]) && c._elem)
            return c._elem.name = i2, c._elem.icount = r3, c._elem.indent = e3, c._elem.indents = a2, c._elem.interrupt = c, c._elem;
          var u, l = [], h = [];
          function p2(t4) {
            Object.keys(t4).forEach(function(e4) {
              l.push(function(t5, e5) {
                return t5 + '="' + s(e5) + '"';
              }(e4, t4[e4]));
            });
          }
          switch (typeof c) {
            case "object":
              if (c === null)
                break;
              c._attr && p2(c._attr), c._cdata && h.push(("<![CDATA[" + c._cdata).replace(/\]\]>/g, "]]]]><![CDATA[>") + "]]>"), c.forEach && (u = false, h.push(""), c.forEach(function(t4) {
                typeof t4 == "object" ? Object.keys(t4)[0] == "_attr" ? p2(t4._attr) : h.push(o(t4, e3, r3 + 1)) : (h.pop(), u = true, h.push(s(t4)));
              }), u || h.push(""));
              break;
            default:
              h.push(s(c));
          }
          return { name: i2, interrupt: false, attributes: l, content: h, icount: r3, indents: a2, indent: e3 };
        }
        function a(t3, e3, r3) {
          if (typeof e3 != "object")
            return t3(false, e3);
          var n3 = e3.interrupt ? 1 : e3.content.length;
          function s2() {
            for (; e3.content.length; ) {
              var s3 = e3.content.shift();
              if (s3 !== void 0) {
                if (i2(s3))
                  return;
                a(t3, s3);
              }
            }
            t3(false, (n3 > 1 ? e3.indents : "") + (e3.name ? "</" + e3.name + ">" : "") + (e3.indent && !r3 ? "\n" : "")), r3 && r3();
          }
          function i2(e4) {
            return !!e4.interrupt && (e4.interrupt.append = t3, e4.interrupt.end = s2, e4.interrupt = false, t3(true), true);
          }
          if (t3(false, e3.indents + (e3.name ? "<" + e3.name : "") + (e3.attributes.length ? " " + e3.attributes.join(" ") : "") + (n3 ? e3.name ? ">" : "" : e3.name ? "/>" : "") + (e3.indent && n3 > 1 ? "\n" : "")), !n3)
            return t3(false, e3.indent ? "\n" : "");
          i2(e3) || s2();
        }
        t2.exports = function(t3, e3) {
          typeof e3 != "object" && (e3 = { indent: e3 });
          var r3, s2, c = e3.stream ? new i() : null, u = "", l = false, h = e3.indent ? e3.indent === true ? "    " : e3.indent : "", p2 = true;
          function d(t4) {
            p2 ? n2.nextTick(t4) : t4();
          }
          function f(t4, e4) {
            if (e4 !== void 0 && (u += e4), t4 && !l && (c = c || new i(), l = true), t4 && l) {
              var r4 = u;
              d(function() {
                c.emit("data", r4);
              }), u = "";
            }
          }
          function m(t4, e4) {
            a(f, o(t4, h, h ? 1 : 0), e4);
          }
          function w() {
            if (c) {
              var t4 = u;
              d(function() {
                c.emit("data", t4), c.emit("end"), c.readable = false, c.emit("close");
              });
            }
          }
          return d(function() {
            p2 = false;
          }), e3.declaration && (s2 = { version: "1.0", encoding: (r3 = e3.declaration).encoding || "UTF-8" }, r3.standalone && (s2.standalone = r3.standalone), m({ "?xml": { _attr: s2 } }), u = u.replace("/>", "?>")), t3 && t3.forEach ? t3.forEach(function(e4, r4) {
            var n3;
            r4 + 1 === t3.length && (n3 = w), m(e4, n3);
          }) : m(t3, w), c ? (c.readable = true, c) : u;
        }, t2.exports.element = t2.exports.Element = function() {
          var t3 = Array.prototype.slice.call(arguments), e3 = { _elem: o(t3), push: function(t4) {
            if (!this.append)
              throw new Error("not assigned to a parent!");
            var e4 = this, r3 = this._elem.indent;
            a(this.append, o(t4, r3, this._elem.icount + (r3 ? 1 : 0)), function() {
              e4.append(true);
            });
          }, close: function(t4) {
            t4 !== void 0 && this.push(t4), this.end && this.end();
          } };
          return e3;
        };
      }, 862: () => {
      }, 964: () => {
      } }, e = {};
      function r(n2) {
        var s = e[n2];
        if (s !== void 0)
          return s.exports;
        var i = e[n2] = { exports: {} };
        return t[n2](i, i.exports, r), i.exports;
      }
      r.d = (t2, e2) => {
        for (var n2 in e2)
          r.o(e2, n2) && !r.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e2[n2] });
      }, r.g = function() {
        if (typeof globalThis == "object")
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t2) {
          if (typeof window == "object")
            return window;
        }
      }(), r.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r.r = (t2) => {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      };
      var n = {};
      return (() => {
        r.r(n), r.d(n, { AbstractNumbering: () => uo, Alignment: () => X, AlignmentAttributes: () => $, AlignmentType: () => U, Attributes: () => a, BaseEmphasisMark: () => dt, BaseXmlComponent: () => t2, Body: () => xn, Bookmark: () => Kr, BookmarkEnd: () => Wr, BookmarkStart: () => Gr, Border: () => Y, BorderElement: () => q, BorderStyle: () => z, Column: () => Tn, ColumnAttributes: () => En, ColumnBreak: () => Tr, Columns: () => en, ColumnsAttributes: () => tn, ConcreteHyperlink: () => Mr, ConcreteNumbering: () => po, DeletedTextRun: () => ba, DocGridAttributes: () => rn, Document: () => Yo, DocumentAttributes: () => An, DocumentBackground: () => Rn, DocumentBackgroundAttributes: () => Sn, DocumentDefaults: () => Xo, DocumentGrid: () => nn, DocumentGridType: () => ee, DotEmphasisMark: () => mt, Drawing: () => dr, DropCapType: () => kn, EMPTY_OBJECT: () => e2, EmphasisMark: () => ft, EmphasisMarkType: () => G, ExternalHyperlink: () => zr, File: () => Yo, FootNoteReferenceRunAttributes: () => ua, FootNotes: () => Gi, Footer: () => ca, FooterWrapper: () => Li, FootnoteReference: () => la, FootnoteReferenceRun: () => ha, FrameAnchorType: () => Dn, FrameProperties: () => Fn, FramePropertiesAttributes: () => Pn, FrameWrap: () => Ln, GridSpan: () => js, Header: () => aa, HeaderFooterReference: () => Jr, HeaderFooterReferenceType: () => Jt, HeaderFooterType: () => te, HeaderWrapper: () => Xi, HeadingLevel: () => Vt, HeightRule: () => ii, HorizontalPosition: () => me, HorizontalPositionAlign: () => _a, HorizontalPositionRelativeFrom: () => zt, HpsMeasureElement: () => P, HyperlinkType: () => Yt, IgnoreIfEmptyXmlComponent: () => i, ImageRun: () => fr, ImportDotx: () => La, ImportedRootElementAttributes: () => p2, ImportedXmlComponent: () => h, Indent: () => tt, InitializableXmlComponent: () => f, InsertedTextRun: () => pa, InternalHyperlink: () => Ur, LeaderType: () => Xt, Level: () => io, LevelBase: () => so, LevelForOverride: () => oo, LevelFormat: () => Yi, LevelOverride: () => mo, LevelSuffix: () => Qi, LineNumberAttributes: () => sn, LineNumberRestartFormat: () => re, LineNumberType: () => on, LineRuleType: () => Wt, Math: () => Un, MathAccentCharacter: () => Vn, MathAngledBrackets: () => Ns, MathBase: () => $n, MathCurlyBrackets: () => Is, MathDegree: () => ds, MathDenominator: () => jn, MathFraction: () => Gn, MathFunction: () => vs, MathFunctionName: () => ys, MathFunctionProperties: () => bs, MathLimitLocation: () => qn, MathNArayProperties: () => ts, MathNumerator: () => Kn, MathPreSubSuperScript: () => hs, MathPreSubSuperScriptProperties: () => ls, MathRadical: () => gs, MathRadicalProperties: () => ws, MathRoundBrackets: () => Ss, MathRun: () => Hn, MathSquareBrackets: () => Rs, MathSubScript: () => as, MathSubScriptElement: () => es, MathSubScriptProperties: () => os, MathSubSuperScript: () => us, MathSubSuperScriptProperties: () => cs, MathSum: () => ns, MathSuperScript: () => is, MathSuperScriptElement: () => rs, MathSuperScriptProperties: () => ss, Media: () => qi, NumberFormat: () => Ea, NumberProperties: () => kr, NumberValueElement: () => B, Numbering: () => yo, OnOffElement: () => L, OutlineLevel: () => Vr, OverlapType: () => Qs, Packer: () => Oa, PageBorderDisplay: () => ne, PageBorderOffsetFrom: () => se, PageBorderZOrder: () => ie, PageBorders: () => cn, PageBreak: () => Er, PageBreakBefore: () => Ar, PageMargin: () => ln, PageMarginAttributes: () => un, PageNumber: () => V, PageNumberSeparator: () => oe, PageNumberType: () => pn, PageNumberTypeAttributes: () => hn, PageOrientation: () => ae, PageReference: () => qr, PageSize: () => fn, PageSizeAttributes: () => dn, PageTextDirection: () => wn, PageTextDirectionType: () => ce, Paragraph: () => Mn, ParagraphProperties: () => Bn, ParagraphPropertiesDefaults: () => Vo, RelativeHorizontalPosition: () => ri, RelativeVerticalPosition: () => ni, Run: () => Ot, RunFonts: () => _t, RunProperties: () => St, RunPropertiesChange: () => Rt, RunPropertiesDefaults: () => $o, SectionProperties: () => _n, SectionType: () => ue, SectionTypeAttributes: () => gn, SequentialIdentifier: () => gr, Shading: () => pt, ShadingType: () => K, SimpleField: () => vr, SimpleMailMergeField: () => _r, SimplePos: () => he, Spacing: () => Rr, StringContainer: () => M, StringValueElement: () => F, Style: () => Ir, StyleForCharacter: () => Oo, StyleForParagraph: () => No, StyleLevel: () => oa, Styles: () => Wo, SymbolRun: () => Lt, TDirection: () => Vs, Tab: () => yr, TabAttributes: () => Or, TabStop: () => Nr, TabStopItem: () => Cr, TabStopPosition: () => qt, TabStopType: () => $t, Table: () => pi, TableAnchorType: () => ei, TableBorders: () => Ys, TableCell: () => Xs, TableCellBorders: () => zs, TableFloatOptionsAttributes: () => ai, TableFloatProperties: () => ci, TableLayout: () => li, TableLayoutType: () => si, TableOfContents: () => ia, TableOverlap: () => ti, TableProperties: () => hi, TableRow: () => wi, TableRowHeight: () => fi, TableRowHeightAttributes: () => di, TableRowProperties: () => mi, TableWidthElement: () => Ms, TextDirection: () => Fs, TextRun: () => Ct, TextWrappingSide: () => Kt, TextWrappingType: () => jt, ThematicBreak: () => Q, Type: () => yn, Underline: () => At, UnderlineType: () => W, VerticalAlign: () => Qt, VerticalAlignAttributes: () => Zr, VerticalAlignElement: () => Yr, VerticalMerge: () => Gs, VerticalMergeType: () => Ps, VerticalPosition: () => ge, VerticalPositionAlign: () => xa, VerticalPositionRelativeFrom: () => Ht, WORKAROUND: () => Qo, WORKAROUND2: () => Zi, WORKAROUND3: () => d, WORKAROUND4: () => ps, WidthType: () => Ds, WrapNone: () => $e, WrapSquare: () => qe, WrapTight: () => Ye, WrapTopAndBottom: () => Je, XmlAttributeComponent: () => o, XmlComponent: () => s, convertInchesToTwip: () => Bt, convertMillimetersToTwip: () => Ft, convertToXmlComponent: () => u, dateTimeValue: () => D, decimalNumber: () => m, eighthPointMeasureValue: () => C, hexColorValue: () => T, hpsMeasureValue: () => S, longHexNumber: () => y, measurementOrPercentValue: () => O, percentageValue: () => N, pointMeasureValue: () => k, positiveUniversalMeasureValue: () => E, sectionMarginDefaults: () => bn, sectionPageSizeDefaults: () => vn, shortHexNumber: () => b, signedHpsMeasureValue: () => R, signedTwipsMeasureValue: () => A, twipsMeasureValue: () => I, uCharHexNumber: () => v, uniqueId: () => Ut, uniqueNumericId: () => Mt, universalMeasureValue: () => _, unsignedDecimalNumber: () => w });
        class t2 {
          constructor(t3) {
            this.rootKey = t3;
          }
        }
        const e2 = Object.seal({});
        class s extends t2 {
          constructor(t3) {
            super(t3), this.root = new Array();
          }
          prepForXml(r2) {
            var n2;
            const s2 = this.root.map((e3) => e3 instanceof t2 ? e3.prepForXml(r2) : e3).filter((t3) => t3 !== void 0);
            return { [this.rootKey]: s2.length ? s2.length === 1 && ((n2 = s2[0]) === null || n2 === void 0 ? void 0 : n2._attr) ? s2[0] : s2 : e2 };
          }
          addChildElement(t3) {
            return this.root.push(t3), this;
          }
        }
        class i extends s {
          prepForXml(t3) {
            const e3 = super.prepForXml(t3);
            if (e3 && (typeof e3[this.rootKey] != "object" || Object.keys(e3[this.rootKey]).length))
              return e3;
          }
        }
        class o extends t2 {
          constructor(t3) {
            super("_attr"), this.root = t3;
          }
          prepForXml(t3) {
            const e3 = {};
            return Object.keys(this.root).forEach((t4) => {
              const r2 = this.root[t4];
              if (r2 !== void 0) {
                const n2 = this.xmlKeys && this.xmlKeys[t4] || t4;
                e3[n2] = r2;
              }
            }), { _attr: e3 };
          }
          set(t3) {
            this.root = t3;
          }
        }
        class a extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { val: "w:val", color: "w:color", fill: "w:fill", space: "w:space", sz: "w:sz", type: "w:type", rsidR: "w:rsidR", rsidRPr: "w:rsidRPr", rsidSect: "w:rsidSect", w: "w:w", h: "w:h", top: "w:top", right: "w:right", bottom: "w:bottom", left: "w:left", header: "w:header", footer: "w:footer", gutter: "w:gutter", linePitch: "w:linePitch", pos: "w:pos" };
          }
        }
        var c = r(888);
        function u(t3) {
          switch (t3.type) {
            case void 0:
            case "element":
              const e3 = new h(t3.name, t3.attributes), r2 = t3.elements || [];
              for (const t4 of r2) {
                const r3 = u(t4);
                r3 !== void 0 && e3.push(r3);
              }
              return e3;
            case "text":
              return t3.text;
            default:
              return;
          }
        }
        class l extends o {
        }
        class h extends s {
          static fromXmlString(t3) {
            return u((0, c.xml2js)(t3, { compact: false }));
          }
          constructor(t3, e3) {
            super(t3), e3 && this.root.push(new l(e3));
          }
          push(t3) {
            this.root.push(t3);
          }
        }
        class p2 extends s {
          constructor(t3) {
            super(""), this._attr = t3;
          }
          prepForXml(t3) {
            return { _attr: this._attr };
          }
        }
        const d = "";
        class f extends s {
          constructor(t3, e3) {
            super(t3), e3 && (this.root = e3.root);
          }
        }
        function m(t3) {
          if (isNaN(t3))
            throw new Error(`Invalid value '${t3}' specified. Must be an integer.`);
          return Math.floor(t3);
        }
        function w(t3) {
          const e3 = m(t3);
          if (e3 < 0)
            throw new Error(`Invalid value '${t3}' specified. Must be a positive integer.`);
          return e3;
        }
        function g(t3, e3) {
          const r2 = 2 * e3;
          if (t3.length !== r2 || isNaN(Number("0x" + t3)))
            throw new Error(`Invalid hex value '${t3}'. Expected ${r2} digit hex value`);
          return t3;
        }
        function y(t3) {
          return g(t3, 4);
        }
        function b(t3) {
          return g(t3, 2);
        }
        function v(t3) {
          return g(t3, 1);
        }
        function _(t3) {
          const e3 = t3.slice(-2);
          if (!x.includes(e3))
            throw new Error(`Invalid unit '${e3}' specified. Valid units are ${x.join(", ")}`);
          const r2 = t3.substring(0, t3.length - 2);
          if (isNaN(Number(r2)))
            throw new Error(`Invalid value '${r2}' specified. Expected a valid number.`);
          return `${Number(r2)}${e3}`;
        }
        const x = ["mm", "cm", "in", "pt", "pc", "pi"];
        function E(t3) {
          const e3 = _(t3);
          if (parseFloat(e3) < 0)
            throw new Error(`Invalid value '${e3}' specified. Expected a positive number.`);
          return e3;
        }
        function T(t3) {
          return t3 === "auto" ? t3 : g(t3.charAt(0) === "#" ? t3.substring(1) : t3, 3);
        }
        function A(t3) {
          return typeof t3 == "string" ? _(t3) : m(t3);
        }
        function S(t3) {
          return typeof t3 == "string" ? E(t3) : w(t3);
        }
        function R(t3) {
          return typeof t3 == "string" ? _(t3) : m(t3);
        }
        function I(t3) {
          return typeof t3 == "string" ? E(t3) : w(t3);
        }
        function N(t3) {
          if (t3.slice(-1) !== "%")
            throw new Error(`Invalid value '${t3}'. Expected percentage value (eg '55%')`);
          const e3 = t3.substring(0, t3.length - 1);
          if (isNaN(Number(e3)))
            throw new Error(`Invalid value '${e3}' specified. Expected a valid number.`);
          return `${Number(e3)}%`;
        }
        function O(t3) {
          return typeof t3 == "number" ? m(t3) : t3.slice(-1) === "%" ? N(t3) : _(t3);
        }
        const C = w, k = w;
        function D(t3) {
          return t3.toISOString();
        }
        class L extends s {
          constructor(t3, e3 = true) {
            super(t3), e3 !== true && this.root.push(new a({ val: e3 }));
          }
        }
        class P extends s {
          constructor(t3, e3) {
            super(t3), this.root.push(new a({ val: S(e3) }));
          }
        }
        class F extends s {
          constructor(t3, e3) {
            super(t3), this.root.push(new a({ val: e3 }));
          }
        }
        class B extends s {
          constructor(t3, e3) {
            super(t3), this.root.push(new a({ val: e3 }));
          }
        }
        class M extends s {
          constructor(t3, e3) {
            super(t3), this.root.push(e3);
          }
        }
        var U, z, H, j, K, G, W, V;
        !function(t3) {
          t3.START = "start", t3.END = "end", t3.CENTER = "center", t3.BOTH = "both", t3.JUSTIFIED = "both", t3.DISTRIBUTE = "distribute", t3.LEFT = "left", t3.RIGHT = "right";
        }(U || (U = {}));
        class $ extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { val: "w:val" };
          }
        }
        class X extends s {
          constructor(t3) {
            super("w:jc"), this.root.push(new $({ val: t3 }));
          }
        }
        class q extends s {
          constructor(t3, { color: e3, size: r2, space: n2, style: s2 }) {
            super(t3), this.root.push(new Z({ style: s2, color: e3 === void 0 ? void 0 : T(e3), size: r2 === void 0 ? void 0 : C(r2), space: n2 === void 0 ? void 0 : k(n2) }));
          }
        }
        class Z extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { style: "w:val", color: "w:color", size: "w:sz", space: "w:space" };
          }
        }
        !function(t3) {
          t3.SINGLE = "single", t3.DASH_DOT_STROKED = "dashDotStroked", t3.DASHED = "dashed", t3.DASH_SMALL_GAP = "dashSmallGap", t3.DOT_DASH = "dotDash", t3.DOT_DOT_DASH = "dotDotDash", t3.DOTTED = "dotted", t3.DOUBLE = "double", t3.DOUBLE_WAVE = "doubleWave", t3.INSET = "inset", t3.NIL = "nil", t3.NONE = "none", t3.OUTSET = "outset", t3.THICK = "thick", t3.THICK_THIN_LARGE_GAP = "thickThinLargeGap", t3.THICK_THIN_MEDIUM_GAP = "thickThinMediumGap", t3.THICK_THIN_SMALL_GAP = "thickThinSmallGap", t3.THIN_THICK_LARGE_GAP = "thinThickLargeGap", t3.THIN_THICK_MEDIUM_GAP = "thinThickMediumGap", t3.THIN_THICK_SMALL_GAP = "thinThickSmallGap", t3.THIN_THICK_THIN_LARGE_GAP = "thinThickThinLargeGap", t3.THIN_THICK_THIN_MEDIUM_GAP = "thinThickThinMediumGap", t3.THIN_THICK_THIN_SMALL_GAP = "thinThickThinSmallGap", t3.THREE_D_EMBOSS = "threeDEmboss", t3.THREE_D_ENGRAVE = "threeDEngrave", t3.TRIPLE = "triple", t3.WAVE = "wave";
        }(z || (z = {}));
        class Y extends i {
          constructor(t3) {
            super("w:pBdr"), t3.top && this.root.push(new q("w:top", t3.top)), t3.bottom && this.root.push(new q("w:bottom", t3.bottom)), t3.left && this.root.push(new q("w:left", t3.left)), t3.right && this.root.push(new q("w:right", t3.right));
          }
        }
        class Q extends s {
          constructor() {
            super("w:pBdr");
            const t3 = new q("w:bottom", { color: "auto", space: 1, style: z.SINGLE, size: 6 });
            this.root.push(t3);
          }
        }
        class J extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { start: "w:start", end: "w:end", left: "w:left", right: "w:right", hanging: "w:hanging", firstLine: "w:firstLine" };
          }
        }
        class tt extends s {
          constructor({ start: t3, end: e3, left: r2, right: n2, hanging: s2, firstLine: i2 }) {
            super("w:ind"), this.root.push(new J({ start: t3 === void 0 ? void 0 : A(t3), end: e3 === void 0 ? void 0 : A(e3), left: r2 === void 0 ? void 0 : A(r2), right: n2 === void 0 ? void 0 : A(n2), hanging: s2 === void 0 ? void 0 : I(s2), firstLine: i2 === void 0 ? void 0 : I(i2) }));
          }
        }
        class et extends s {
          constructor() {
            super("w:br");
          }
        }
        !function(t3) {
          t3.BEGIN = "begin", t3.END = "end", t3.SEPARATE = "separate";
        }(H || (H = {}));
        class rt extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { type: "w:fldCharType", dirty: "w:dirty" };
          }
        }
        class nt extends s {
          constructor(t3) {
            super("w:fldChar"), this.root.push(new rt({ type: H.BEGIN, dirty: t3 }));
          }
        }
        class st extends s {
          constructor(t3) {
            super("w:fldChar"), this.root.push(new rt({ type: H.SEPARATE, dirty: t3 }));
          }
        }
        class it extends s {
          constructor(t3) {
            super("w:fldChar"), this.root.push(new rt({ type: H.END, dirty: t3 }));
          }
        }
        !function(t3) {
          t3.DEFAULT = "default", t3.PRESERVE = "preserve";
        }(j || (j = {}));
        class ot extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { space: "xml:space" };
          }
        }
        class at extends s {
          constructor() {
            super("w:instrText"), this.root.push(new ot({ space: j.PRESERVE })), this.root.push("PAGE");
          }
        }
        class ct extends s {
          constructor() {
            super("w:instrText"), this.root.push(new ot({ space: j.PRESERVE })), this.root.push("NUMPAGES");
          }
        }
        class ut extends s {
          constructor() {
            super("w:instrText"), this.root.push(new ot({ space: j.PRESERVE })), this.root.push("SECTIONPAGES");
          }
        }
        class lt extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { id: "w:id", author: "w:author", date: "w:date" };
          }
        }
        class ht extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { fill: "w:fill", color: "w:color", type: "w:val" };
          }
        }
        class pt extends s {
          constructor({ fill: t3, color: e3, type: r2 }) {
            super("w:shd"), this.root.push(new ht({ fill: t3 === void 0 ? void 0 : T(t3), color: e3 === void 0 ? void 0 : T(e3), type: r2 }));
          }
        }
        !function(t3) {
          t3.CLEAR = "clear", t3.DIAGONAL_CROSS = "diagCross", t3.DIAGONAL_STRIPE = "diagStripe", t3.HORIZONTAL_CROSS = "horzCross", t3.HORIZONTAL_STRIPE = "horzStripe", t3.NIL = "nil", t3.PERCENT_5 = "pct5", t3.PERCENT_10 = "pct10", t3.PERCENT_12 = "pct12", t3.PERCENT_15 = "pct15", t3.PERCENT_20 = "pct20", t3.PERCENT_25 = "pct25", t3.PERCENT_30 = "pct30", t3.PERCENT_35 = "pct35", t3.PERCENT_37 = "pct37", t3.PERCENT_40 = "pct40", t3.PERCENT_45 = "pct45", t3.PERCENT_50 = "pct50", t3.PERCENT_55 = "pct55", t3.PERCENT_60 = "pct60", t3.PERCENT_62 = "pct62", t3.PERCENT_65 = "pct65", t3.PERCENT_70 = "pct70", t3.PERCENT_75 = "pct75", t3.PERCENT_80 = "pct80", t3.PERCENT_85 = "pct85", t3.PERCENT_87 = "pct87", t3.PERCENT_90 = "pct90", t3.PERCENT_95 = "pct95", t3.REVERSE_DIAGONAL_STRIPE = "reverseDiagStripe", t3.SOLID = "solid", t3.THIN_DIAGONAL_CROSS = "thinDiagCross", t3.THIN_DIAGONAL_STRIPE = "thinDiagStripe", t3.THIN_HORIZONTAL_CROSS = "thinHorzCross", t3.THIN_REVERSE_DIAGONAL_STRIPE = "thinReverseDiagStripe", t3.THIN_VERTICAL_STRIPE = "thinVertStripe", t3.VERTICAL_STRIPE = "vertStripe";
        }(K || (K = {})), function(t3) {
          t3.DOT = "dot";
        }(G || (G = {}));
        class dt extends s {
          constructor(t3) {
            super("w:em"), this.root.push(new a({ val: t3 }));
          }
        }
        class ft extends dt {
          constructor(t3 = G.DOT) {
            super(t3);
          }
        }
        class mt extends dt {
          constructor() {
            super(G.DOT);
          }
        }
        class wt extends s {
          constructor(t3) {
            super("w:spacing"), this.root.push(new a({ val: A(t3) }));
          }
        }
        class gt extends s {
          constructor(t3) {
            super("w:color"), this.root.push(new a({ val: T(t3) }));
          }
        }
        class yt extends s {
          constructor(t3) {
            super("w:highlight"), this.root.push(new a({ val: t3 }));
          }
        }
        class bt extends s {
          constructor(t3) {
            super("w:highlightCs"), this.root.push(new a({ val: t3 }));
          }
        }
        class vt extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { ascii: "w:ascii", cs: "w:cs", eastAsia: "w:eastAsia", hAnsi: "w:hAnsi", hint: "w:hint" };
          }
        }
        class _t extends s {
          constructor(t3, e3) {
            if (super("w:rFonts"), typeof t3 == "string") {
              const r2 = t3;
              this.root.push(new vt({ ascii: r2, cs: r2, eastAsia: r2, hAnsi: r2, hint: e3 }));
            } else {
              const e4 = t3;
              this.root.push(new vt(e4));
            }
          }
        }
        class xt extends s {
          constructor(t3) {
            super("w:vertAlign"), this.root.push(new a({ val: t3 }));
          }
        }
        class Et extends xt {
          constructor() {
            super("superscript");
          }
        }
        class Tt extends xt {
          constructor() {
            super("subscript");
          }
        }
        !function(t3) {
          t3.SINGLE = "single", t3.WORDS = "words", t3.DOUBLE = "double", t3.THICK = "thick", t3.DOTTED = "dotted", t3.DOTTEDHEAVY = "dottedHeavy", t3.DASH = "dash", t3.DASHEDHEAVY = "dashedHeavy", t3.DASHLONG = "dashLong", t3.DASHLONGHEAVY = "dashLongHeavy", t3.DOTDASH = "dotDash", t3.DASHDOTHEAVY = "dashDotHeavy", t3.DOTDOTDASH = "dotDotDash", t3.DASHDOTDOTHEAVY = "dashDotDotHeavy", t3.WAVE = "wave", t3.WAVYHEAVY = "wavyHeavy", t3.WAVYDOUBLE = "wavyDouble";
        }(W || (W = {}));
        class At extends s {
          constructor(t3 = W.SINGLE, e3) {
            super("w:u"), this.root.push(new a({ val: t3, color: e3 === void 0 ? void 0 : T(e3) }));
          }
        }
        class St extends i {
          constructor(t3) {
            var e3, r2;
            if (super("w:rPr"), !t3)
              return;
            t3.bold !== void 0 && this.push(new L("w:b", t3.bold)), (t3.boldComplexScript === void 0 && t3.bold !== void 0 || t3.boldComplexScript) && this.push(new L("w:bCs", (e3 = t3.boldComplexScript) !== null && e3 !== void 0 ? e3 : t3.bold)), t3.italics !== void 0 && this.push(new L("w:i", t3.italics)), (t3.italicsComplexScript === void 0 && t3.italics !== void 0 || t3.italicsComplexScript) && this.push(new L("w:iCs", (r2 = t3.italicsComplexScript) !== null && r2 !== void 0 ? r2 : t3.italics)), t3.underline && this.push(new At(t3.underline.type, t3.underline.color)), t3.emphasisMark && this.push(new ft(t3.emphasisMark.type)), t3.color && this.push(new gt(t3.color)), t3.size !== void 0 && this.push(new P("w:sz", t3.size));
            const n2 = t3.sizeComplexScript === void 0 || t3.sizeComplexScript === true ? t3.size : t3.sizeComplexScript;
            n2 && this.push(new P("w:szCs", n2)), t3.rightToLeft !== void 0 && this.push(new L("w:rtl", t3.rightToLeft)), t3.smallCaps !== void 0 ? this.push(new L("w:smallCaps", t3.smallCaps)) : t3.allCaps !== void 0 && this.push(new L("w:caps", t3.allCaps)), t3.strike !== void 0 && this.push(new L("w:strike", t3.strike)), t3.doubleStrike !== void 0 && this.push(new L("w:dstrike", t3.doubleStrike)), t3.subScript && this.push(new Tt()), t3.superScript && this.push(new Et()), t3.style && this.push(new F("w:rStyle", t3.style)), t3.font && (typeof t3.font == "string" ? this.push(new _t(t3.font)) : "name" in t3.font ? this.push(new _t(t3.font.name, t3.font.hint)) : this.push(new _t(t3.font))), t3.highlight && this.push(new yt(t3.highlight));
            const s2 = t3.highlightComplexScript === void 0 || t3.highlightComplexScript === true ? t3.highlight : t3.highlightComplexScript;
            s2 && this.push(new bt(s2)), t3.characterSpacing && this.push(new wt(t3.characterSpacing)), t3.emboss !== void 0 && this.push(new L("w:emboss", t3.emboss)), t3.imprint !== void 0 && this.push(new L("w:imprint", t3.imprint)), t3.shading && this.push(new pt(t3.shading)), t3.revision && this.push(new Rt(t3.revision));
          }
          push(t3) {
            this.root.push(t3);
          }
        }
        class Rt extends s {
          constructor(t3) {
            super("w:rPrChange"), this.root.push(new lt({ id: t3.id, author: t3.author, date: t3.date })), this.addChildElement(new St(t3));
          }
        }
        class It extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { space: "xml:space" };
          }
        }
        class Nt extends s {
          constructor(t3) {
            super("w:t"), this.root.push(new It({ space: j.PRESERVE })), this.root.push(t3);
          }
        }
        !function(t3) {
          t3.CURRENT = "CURRENT", t3.TOTAL_PAGES = "TOTAL_PAGES", t3.TOTAL_PAGES_IN_SECTION = "TOTAL_PAGES_IN_SECTION";
        }(V || (V = {}));
        class Ot extends s {
          constructor(t3) {
            if (super("w:r"), this.properties = new St(t3), this.root.push(this.properties), t3.break)
              for (let e3 = 0; e3 < t3.break; e3++)
                this.root.push(new et());
            if (t3.children)
              for (const e3 of t3.children)
                if (typeof e3 != "string")
                  this.root.push(e3);
                else
                  switch (e3) {
                    case V.CURRENT:
                      this.root.push(new nt()), this.root.push(new at()), this.root.push(new st()), this.root.push(new it());
                      break;
                    case V.TOTAL_PAGES:
                      this.root.push(new nt()), this.root.push(new ct()), this.root.push(new st()), this.root.push(new it());
                      break;
                    case V.TOTAL_PAGES_IN_SECTION:
                      this.root.push(new nt()), this.root.push(new ut()), this.root.push(new st()), this.root.push(new it());
                      break;
                    default:
                      this.root.push(new Nt(e3));
                  }
            else
              t3.text && this.root.push(new Nt(t3.text));
          }
        }
        class Ct extends Ot {
          constructor(t3) {
            if (typeof t3 == "string")
              return super({}), this.root.push(new Nt(t3)), this;
            super(t3);
          }
        }
        class kt extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { char: "w:char", symbolfont: "w:font" };
          }
        }
        class Dt extends s {
          constructor(t3 = "", e3 = "Wingdings") {
            super("w:sym"), this.root.push(new kt({ char: t3, symbolfont: e3 }));
          }
        }
        class Lt extends Ot {
          constructor(t3) {
            if (typeof t3 == "string")
              return super({}), void this.root.push(new Dt(t3));
            super(t3), this.root.push(new Dt(t3.char, t3.symbolfont));
          }
        }
        let Pt = 0;
        const Ft = (t3) => Math.floor(t3 / 25.4 * 72 * 20), Bt = (t3) => Math.floor(72 * t3 * 20), Mt = () => ++Pt, Ut = () => ((t3 = 21) => {
          let e3 = "", r2 = t3;
          for (; r2--; )
            e3 += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64 * Math.random() | 0];
          return e3;
        })().toLowerCase();
        var zt, Ht, jt, Kt, Gt, Wt, Vt, $t, Xt, qt, Zt, Yt, Qt, Jt, te, ee, re, ne, se, ie, oe, ae, ce, ue;
        !function(t3) {
          t3.CHARACTER = "character", t3.COLUMN = "column", t3.INSIDE_MARGIN = "insideMargin", t3.LEFT_MARGIN = "leftMargin", t3.MARGIN = "margin", t3.OUTSIDE_MARGIN = "outsideMargin", t3.PAGE = "page", t3.RIGHT_MARGIN = "rightMargin";
        }(zt || (zt = {})), function(t3) {
          t3.BOTTOM_MARGIN = "bottomMargin", t3.INSIDE_MARGIN = "insideMargin", t3.LINE = "line", t3.MARGIN = "margin", t3.OUTSIDE_MARGIN = "outsideMargin", t3.PAGE = "page", t3.PARAGRAPH = "paragraph", t3.TOP_MARGIN = "topMargin";
        }(Ht || (Ht = {}));
        class le extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { x: "x", y: "y" };
          }
        }
        class he extends s {
          constructor() {
            super("wp:simplePos"), this.root.push(new le({ x: 0, y: 0 }));
          }
        }
        class pe extends s {
          constructor(t3) {
            super("wp:align"), this.root.push(t3);
          }
        }
        class de extends s {
          constructor(t3) {
            super("wp:posOffset"), this.root.push(t3.toString());
          }
        }
        class fe extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { relativeFrom: "relativeFrom" };
          }
        }
        class me extends s {
          constructor(t3) {
            if (super("wp:positionH"), this.root.push(new fe({ relativeFrom: t3.relative || zt.PAGE })), t3.align)
              this.root.push(new pe(t3.align));
            else {
              if (t3.offset === void 0)
                throw new Error("There is no configuration provided for floating position (Align or offset)");
              this.root.push(new de(t3.offset));
            }
          }
        }
        class we extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { relativeFrom: "relativeFrom" };
          }
        }
        class ge extends s {
          constructor(t3) {
            if (super("wp:positionV"), this.root.push(new we({ relativeFrom: t3.relative || Ht.PAGE })), t3.align)
              this.root.push(new pe(t3.align));
            else {
              if (t3.offset === void 0)
                throw new Error("There is no configuration provided for floating position (Align or offset)");
              this.root.push(new de(t3.offset));
            }
          }
        }
        class ye extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { uri: "uri" };
          }
        }
        class be extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { embed: "r:embed", cstate: "cstate" };
          }
        }
        class ve extends s {
          constructor(t3) {
            super("a:blip"), this.root.push(new be({ embed: `rId{${t3.fileName}}`, cstate: "none" }));
          }
        }
        class _e extends s {
          constructor() {
            super("a:srcRect");
          }
        }
        class xe extends s {
          constructor() {
            super("a:fillRect");
          }
        }
        class Ee extends s {
          constructor() {
            super("a:stretch"), this.root.push(new xe());
          }
        }
        class Te extends s {
          constructor(t3) {
            super("pic:blipFill"), this.root.push(new ve(t3)), this.root.push(new _e()), this.root.push(new Ee());
          }
        }
        class Ae extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { noChangeAspect: "noChangeAspect", noChangeArrowheads: "noChangeArrowheads" };
          }
        }
        class Se extends s {
          constructor() {
            super("a:picLocks"), this.root.push(new Ae({ noChangeAspect: 1, noChangeArrowheads: 1 }));
          }
        }
        class Re extends s {
          constructor() {
            super("pic:cNvPicPr"), this.root.push(new Se());
          }
        }
        class Ie extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { id: "id", name: "name", descr: "descr" };
          }
        }
        class Ne extends s {
          constructor() {
            super("pic:cNvPr"), this.root.push(new Ie({ id: 0, name: "", descr: "" }));
          }
        }
        class Oe extends s {
          constructor() {
            super("pic:nvPicPr"), this.root.push(new Ne()), this.root.push(new Re());
          }
        }
        class Ce extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { xmlns: "xmlns:pic" };
          }
        }
        class ke extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { cx: "cx", cy: "cy" };
          }
        }
        class De extends s {
          constructor(t3, e3) {
            super("a:ext"), this.attributes = new ke({ cx: t3, cy: e3 }), this.root.push(this.attributes);
          }
        }
        class Le extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { x: "x", y: "y" };
          }
        }
        class Pe extends s {
          constructor() {
            super("a:off"), this.root.push(new Le({ x: 0, y: 0 }));
          }
        }
        class Fe extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { flipVertical: "flipV", flipHorizontal: "flipH", rotation: "rot" };
          }
        }
        class Be extends s {
          constructor(t3) {
            var e3, r2;
            super("a:xfrm"), this.root.push(new Fe({ flipVertical: (e3 = t3.flip) === null || e3 === void 0 ? void 0 : e3.vertical, flipHorizontal: (r2 = t3.flip) === null || r2 === void 0 ? void 0 : r2.horizontal, rotation: t3.rotation })), this.extents = new De(t3.emus.x, t3.emus.y), this.root.push(new Pe()), this.root.push(this.extents);
          }
        }
        class Me extends s {
          constructor() {
            super("a:avLst");
          }
        }
        class Ue extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { prst: "prst" };
          }
        }
        class ze extends s {
          constructor() {
            super("a:prstGeom"), this.root.push(new Ue({ prst: "rect" })), this.root.push(new Me());
          }
        }
        class He extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { bwMode: "bwMode" };
          }
        }
        class je extends s {
          constructor(t3) {
            super("pic:spPr"), this.root.push(new He({ bwMode: "auto" })), this.form = new Be(t3), this.root.push(this.form), this.root.push(new ze());
          }
        }
        class Ke extends s {
          constructor(t3, e3) {
            super("pic:pic"), this.root.push(new Ce({ xmlns: "http://schemas.openxmlformats.org/drawingml/2006/picture" })), this.root.push(new Oe()), this.root.push(new Te(t3)), this.root.push(new je(e3));
          }
        }
        class Ge extends s {
          constructor(t3, e3) {
            super("a:graphicData"), this.root.push(new ye({ uri: "http://schemas.openxmlformats.org/drawingml/2006/picture" })), this.pic = new Ke(t3, e3), this.root.push(this.pic);
          }
        }
        class We extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { a: "xmlns:a" };
          }
        }
        class Ve extends s {
          constructor(t3, e3) {
            super("a:graphic"), this.root.push(new We({ a: "http://schemas.openxmlformats.org/drawingml/2006/main" })), this.data = new Ge(t3, e3), this.root.push(this.data);
          }
        }
        !function(t3) {
          t3[t3.NONE = 0] = "NONE", t3[t3.SQUARE = 1] = "SQUARE", t3[t3.TIGHT = 2] = "TIGHT", t3[t3.TOP_AND_BOTTOM = 3] = "TOP_AND_BOTTOM";
        }(jt || (jt = {})), function(t3) {
          t3.BOTH_SIDES = "bothSides", t3.LEFT = "left", t3.RIGHT = "right", t3.LARGEST = "largest";
        }(Kt || (Kt = {}));
        class $e extends s {
          constructor() {
            super("wp:wrapNone");
          }
        }
        class Xe extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { distT: "distT", distB: "distB", distL: "distL", distR: "distR", wrapText: "wrapText" };
          }
        }
        class qe extends s {
          constructor(t3, e3 = { top: 0, bottom: 0, left: 0, right: 0 }) {
            super("wp:wrapSquare"), this.root.push(new Xe({ wrapText: t3.side || Kt.BOTH_SIDES, distT: e3.top, distB: e3.bottom, distL: e3.left, distR: e3.right }));
          }
        }
        class Ze extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { distT: "distT", distB: "distB" };
          }
        }
        class Ye extends s {
          constructor(t3 = { top: 0, bottom: 0 }) {
            super("wp:wrapTight"), this.root.push(new Ze({ distT: t3.top, distB: t3.bottom }));
          }
        }
        class Qe extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { distT: "distT", distB: "distB" };
          }
        }
        class Je extends s {
          constructor(t3 = { top: 0, bottom: 0 }) {
            super("wp:wrapTopAndBottom"), this.root.push(new Qe({ distT: t3.top, distB: t3.bottom }));
          }
        }
        class tr extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { id: "id", name: "name", descr: "descr" };
          }
        }
        class er extends s {
          constructor() {
            super("wp:docPr"), this.root.push(new tr({ id: 0, name: "", descr: "" }));
          }
        }
        class rr extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { b: "b", l: "l", r: "r", t: "t" };
          }
        }
        class nr extends s {
          constructor() {
            super("wp:effectExtent"), this.root.push(new rr({ b: 0, l: 0, r: 0, t: 0 }));
          }
        }
        class sr extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { cx: "cx", cy: "cy" };
          }
        }
        class ir extends s {
          constructor(t3, e3) {
            super("wp:extent"), this.attributes = new sr({ cx: t3, cy: e3 }), this.root.push(this.attributes);
          }
        }
        class or extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { xmlns: "xmlns:a", noChangeAspect: "noChangeAspect" };
          }
        }
        class ar extends s {
          constructor() {
            super("a:graphicFrameLocks"), this.root.push(new or({ xmlns: "http://schemas.openxmlformats.org/drawingml/2006/main", noChangeAspect: 1 }));
          }
        }
        class cr extends s {
          constructor() {
            super("wp:cNvGraphicFramePr"), this.root.push(new ar());
          }
        }
        class ur extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { distT: "distT", distB: "distB", distL: "distL", distR: "distR", allowOverlap: "allowOverlap", behindDoc: "behindDoc", layoutInCell: "layoutInCell", locked: "locked", relativeHeight: "relativeHeight", simplePos: "simplePos" };
          }
        }
        class lr extends s {
          constructor(t3, e3, r2) {
            super("wp:anchor");
            const n2 = Object.assign({ allowOverlap: true, behindDocument: false, lockAnchor: false, layoutInCell: true, verticalPosition: {}, horizontalPosition: {} }, r2.floating);
            if (this.root.push(new ur({ distT: n2.margins && n2.margins.top || 0, distB: n2.margins && n2.margins.bottom || 0, distL: n2.margins && n2.margins.left || 0, distR: n2.margins && n2.margins.right || 0, simplePos: "0", allowOverlap: n2.allowOverlap === true ? "1" : "0", behindDoc: n2.behindDocument === true ? "1" : "0", locked: n2.lockAnchor === true ? "1" : "0", layoutInCell: n2.layoutInCell === true ? "1" : "0", relativeHeight: n2.zIndex ? n2.zIndex : e3.emus.y })), this.root.push(new he()), this.root.push(new me(n2.horizontalPosition)), this.root.push(new ge(n2.verticalPosition)), this.root.push(new ir(e3.emus.x, e3.emus.y)), this.root.push(new nr()), r2.floating !== void 0 && r2.floating.wrap !== void 0)
              switch (r2.floating.wrap.type) {
                case jt.SQUARE:
                  this.root.push(new qe(r2.floating.wrap, r2.floating.margins));
                  break;
                case jt.TIGHT:
                  this.root.push(new Ye(r2.floating.margins));
                  break;
                case jt.TOP_AND_BOTTOM:
                  this.root.push(new Je(r2.floating.margins));
                  break;
                case jt.NONE:
                default:
                  this.root.push(new $e());
              }
            else
              this.root.push(new $e());
            this.root.push(new er()), this.root.push(new cr()), this.root.push(new Ve(t3, e3));
          }
        }
        class hr extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { distT: "distT", distB: "distB", distL: "distL", distR: "distR" };
          }
        }
        class pr extends s {
          constructor(t3, e3) {
            super("wp:inline"), this.root.push(new hr({ distT: 0, distB: 0, distL: 0, distR: 0 })), this.extent = new ir(e3.emus.x, e3.emus.y), this.graphic = new Ve(t3, e3), this.root.push(this.extent), this.root.push(new nr()), this.root.push(new er()), this.root.push(new cr()), this.root.push(this.graphic);
          }
        }
        class dr extends s {
          constructor(t3, e3 = {}) {
            super("w:drawing"), e3.floating ? this.root.push(new lr(t3, t3.transformation, e3)) : (this.inline = new pr(t3, t3.transformation), this.root.push(this.inline));
          }
        }
        class fr extends Ot {
          constructor(t3) {
            super({}), this.key = `${Ut()}.png`;
            const e3 = typeof t3.data == "string" ? this.convertDataURIToBinary(t3.data) : t3.data;
            this.imageData = { stream: e3, fileName: this.key, transformation: { pixels: { x: Math.round(t3.transformation.width), y: Math.round(t3.transformation.height) }, emus: { x: Math.round(9525 * t3.transformation.width), y: Math.round(9525 * t3.transformation.height) }, flip: t3.transformation.flip, rotation: t3.transformation.rotation ? 6e4 * t3.transformation.rotation : void 0 } };
            const r2 = new dr(this.imageData, { floating: t3.floating });
            this.root.push(r2);
          }
          prepForXml(t3) {
            return t3.file.Media.addImage(this.key, this.imageData), super.prepForXml(t3);
          }
          convertDataURIToBinary(t3) {
            const e3 = ";base64,", n2 = t3.indexOf(e3) + e3.length;
            return typeof atob == "function" ? new Uint8Array(atob(t3.substring(n2)).split("").map((t4) => t4.charCodeAt(0))) : new (r(764)).Buffer(t3, "base64");
          }
        }
        class mr extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { space: "xml:space" };
          }
        }
        class wr extends s {
          constructor(t3) {
            super("w:instrText"), this.root.push(new mr({ space: j.PRESERVE })), this.root.push(`SEQ ${t3}`);
          }
        }
        class gr extends Ot {
          constructor(t3) {
            super({}), this.root.push(new nt(true)), this.root.push(new wr(t3)), this.root.push(new st()), this.root.push(new it());
          }
        }
        class yr extends s {
          constructor() {
            super("w:tab");
          }
        }
        class br extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { instr: "w:instr" };
          }
        }
        class vr extends s {
          constructor(t3, e3) {
            super("w:fldSimple"), this.root.push(new br({ instr: t3 })), e3 !== void 0 && this.root.push(new Ct(e3));
          }
        }
        class _r extends vr {
          constructor(t3) {
            super(` MERGEFIELD ${t3} `, `\xAB${t3}\xBB`);
          }
        }
        !function(t3) {
          t3.COLUMN = "column", t3.PAGE = "page";
        }(Gt || (Gt = {}));
        class xr extends s {
          constructor(t3) {
            super("w:br"), this.root.push(new a({ type: t3 }));
          }
        }
        class Er extends Ot {
          constructor() {
            super({}), this.root.push(new xr(Gt.PAGE));
          }
        }
        class Tr extends Ot {
          constructor() {
            super({}), this.root.push(new xr(Gt.COLUMN));
          }
        }
        class Ar extends s {
          constructor() {
            super("w:pageBreakBefore");
          }
        }
        !function(t3) {
          t3.AT_LEAST = "atLeast", t3.EXACTLY = "exactly", t3.AUTO = "auto";
        }(Wt || (Wt = {}));
        class Sr extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { after: "w:after", before: "w:before", line: "w:line", lineRule: "w:lineRule" };
          }
        }
        class Rr extends s {
          constructor(t3) {
            super("w:spacing"), this.root.push(new Sr(t3));
          }
        }
        !function(t3) {
          t3.HEADING_1 = "Heading1", t3.HEADING_2 = "Heading2", t3.HEADING_3 = "Heading3", t3.HEADING_4 = "Heading4", t3.HEADING_5 = "Heading5", t3.HEADING_6 = "Heading6", t3.TITLE = "Title";
        }(Vt || (Vt = {}));
        class Ir extends s {
          constructor(t3) {
            super("w:pStyle"), this.root.push(new a({ val: t3 }));
          }
        }
        class Nr extends s {
          constructor(t3, e3, r2) {
            super("w:tabs"), this.root.push(new Cr(t3, e3, r2));
          }
        }
        !function(t3) {
          t3.LEFT = "left", t3.RIGHT = "right", t3.CENTER = "center", t3.BAR = "bar", t3.CLEAR = "clear", t3.DECIMAL = "decimal", t3.END = "end", t3.NUM = "num", t3.START = "start";
        }($t || ($t = {})), function(t3) {
          t3.DOT = "dot", t3.HYPHEN = "hyphen", t3.MIDDLE_DOT = "middleDot", t3.NONE = "none", t3.UNDERSCORE = "underscore";
        }(Xt || (Xt = {})), function(t3) {
          t3[t3.MAX = 9026] = "MAX";
        }(qt || (qt = {}));
        class Or extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { val: "w:val", pos: "w:pos", leader: "w:leader" };
          }
        }
        class Cr extends s {
          constructor(t3, e3, r2) {
            super("w:tab"), this.root.push(new Or({ val: t3, pos: e3, leader: r2 }));
          }
        }
        class kr extends s {
          constructor(t3, e3) {
            super("w:numPr"), this.root.push(new Dr(e3)), this.root.push(new Lr(t3));
          }
        }
        class Dr extends s {
          constructor(t3) {
            if (super("w:ilvl"), t3 > 9)
              throw new Error("Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7");
            this.root.push(new a({ val: t3 }));
          }
        }
        class Lr extends s {
          constructor(t3) {
            super("w:numId"), this.root.push(new a({ val: typeof t3 == "string" ? `{${t3}}` : t3 }));
          }
        }
        class Pr extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { id: "Id", type: "Type", target: "Target", targetMode: "TargetMode" };
          }
        }
        !function(t3) {
          t3.EXTERNAL = "External";
        }(Zt || (Zt = {}));
        class Fr extends s {
          constructor(t3, e3, r2, n2) {
            super("Relationship"), this.root.push(new Pr({ id: t3, type: e3, target: r2, targetMode: n2 }));
          }
        }
        class Br extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { id: "r:id", history: "w:history", anchor: "w:anchor" };
          }
        }
        !function(t3) {
          t3.INTERNAL = "INTERNAL", t3.EXTERNAL = "EXTERNAL";
        }(Yt || (Yt = {}));
        class Mr extends s {
          constructor(t3, e3, r2) {
            super("w:hyperlink"), this.linkId = e3;
            const n2 = { history: 1, anchor: r2 || void 0, id: r2 ? void 0 : `rId${this.linkId}` }, s2 = new Br(n2);
            this.root.push(s2), t3.forEach((t4) => {
              this.root.push(t4);
            });
          }
        }
        class Ur extends Mr {
          constructor(t3) {
            super(t3.children, Ut(), t3.anchor);
          }
        }
        class zr {
          constructor(t3) {
            this.options = t3;
          }
        }
        class Hr extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { id: "w:id", name: "w:name" };
          }
        }
        class jr extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { id: "w:id" };
          }
        }
        class Kr {
          constructor(t3) {
            const e3 = Mt();
            this.start = new Gr(t3.id, e3), this.children = t3.children, this.end = new Wr(e3);
          }
        }
        class Gr extends s {
          constructor(t3, e3) {
            super("w:bookmarkStart");
            const r2 = new Hr({ name: t3, id: e3 });
            this.root.push(r2);
          }
        }
        class Wr extends s {
          constructor(t3) {
            super("w:bookmarkEnd");
            const e3 = new jr({ id: t3 });
            this.root.push(e3);
          }
        }
        class Vr extends s {
          constructor(t3) {
            super("w:outlineLvl"), this.level = t3, this.root.push(new a({ val: t3 }));
          }
        }
        class $r extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { space: "xml:space" };
          }
        }
        class Xr extends s {
          constructor(t3, e3 = {}) {
            super("w:instrText"), this.root.push(new $r({ space: j.PRESERVE }));
            let r2 = `PAGEREF ${t3}`;
            e3.hyperlink && (r2 = `${r2} \\h`), e3.useRelativePosition && (r2 = `${r2} \\p`), this.root.push(r2);
          }
        }
        class qr extends Ot {
          constructor(t3, e3 = {}) {
            super({ children: [new nt(true), new Xr(t3, e3), new it()] });
          }
        }
        !function(t3) {
          t3.BOTH = "both", t3.BOTTOM = "bottom", t3.CENTER = "center", t3.TOP = "top";
        }(Qt || (Qt = {}));
        class Zr extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { verticalAlign: "w:val" };
          }
        }
        class Yr extends s {
          constructor(t3) {
            super("w:vAlign"), this.root.push(new Zr({ verticalAlign: t3 }));
          }
        }
        !function(t3) {
          t3.DEFAULT = "default", t3.FIRST = "first", t3.EVEN = "even";
        }(Jt || (Jt = {}));
        class Qr extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { type: "w:type", id: "r:id" };
          }
        }
        !function(t3) {
          t3.HEADER = "w:headerReference", t3.FOOTER = "w:footerReference";
        }(te || (te = {}));
        class Jr extends s {
          constructor(t3, e3) {
            super(t3), this.root.push(new Qr({ type: e3.type || Jt.DEFAULT, id: `rId${e3.id}` }));
          }
        }
        class tn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { space: "w:space", count: "w:num", separate: "w:sep", equalWidth: "w:equalWidth" };
          }
        }
        class en extends s {
          constructor({ space: t3, count: e3, separate: r2, equalWidth: n2, children: s2 }) {
            super("w:cols"), this.root.push(new tn({ space: t3 === void 0 ? void 0 : I(t3), count: e3 === void 0 ? void 0 : m(e3), separate: r2, equalWidth: n2 })), !n2 && s2 && s2.forEach((t4) => this.addChildElement(t4));
          }
        }
        !function(t3) {
          t3.DEFAULT = "default", t3.LINES = "lines", t3.LINES_AND_CHARS = "linesAndChars", t3.SNAP_TO_CHARS = "snapToChars";
        }(ee || (ee = {}));
        class rn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { type: "w:type", linePitch: "w:linePitch", charSpace: "w:charSpace" };
          }
        }
        class nn extends s {
          constructor(t3, e3, r2) {
            super("w:docGrid"), this.root.push(new rn({ type: r2, linePitch: m(t3), charSpace: e3 ? m(e3) : void 0 }));
          }
        }
        !function(t3) {
          t3.NEW_PAGE = "newPage", t3.NEW_SECTION = "newSection", t3.CONTINUOUS = "continuous";
        }(re || (re = {}));
        class sn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { countBy: "w:countBy", start: "w:start", restart: "w:restart", distance: "w:distance" };
          }
        }
        class on extends s {
          constructor({ countBy: t3, start: e3, restart: r2, distance: n2 }) {
            super("w:lnNumType"), this.root.push(new sn({ countBy: t3 === void 0 ? void 0 : m(t3), start: e3 === void 0 ? void 0 : m(e3), restart: r2, distance: n2 === void 0 ? void 0 : I(n2) }));
          }
        }
        !function(t3) {
          t3.ALL_PAGES = "allPages", t3.FIRST_PAGE = "firstPage", t3.NOT_FIRST_PAGE = "notFirstPage";
        }(ne || (ne = {})), function(t3) {
          t3.PAGE = "page", t3.TEXT = "text";
        }(se || (se = {})), function(t3) {
          t3.BACK = "back", t3.FRONT = "front";
        }(ie || (ie = {}));
        class an extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { display: "w:display", offsetFrom: "w:offsetFrom", zOrder: "w:zOrder" };
          }
        }
        class cn extends i {
          constructor(t3) {
            super("w:pgBorders"), t3 && (t3.pageBorders ? this.root.push(new an({ display: t3.pageBorders.display, offsetFrom: t3.pageBorders.offsetFrom, zOrder: t3.pageBorders.zOrder })) : this.root.push(new an({})), t3.pageBorderTop && this.root.push(new q("w:top", t3.pageBorderTop)), t3.pageBorderLeft && this.root.push(new q("w:left", t3.pageBorderLeft)), t3.pageBorderBottom && this.root.push(new q("w:bottom", t3.pageBorderBottom)), t3.pageBorderRight && this.root.push(new q("w:right", t3.pageBorderRight)));
          }
        }
        class un extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { top: "w:top", right: "w:right", bottom: "w:bottom", left: "w:left", header: "w:header", footer: "w:footer", gutter: "w:gutter" };
          }
        }
        class ln extends s {
          constructor(t3, e3, r2, n2, s2, i2, o2) {
            super("w:pgMar"), this.root.push(new un({ top: A(t3), right: I(e3), bottom: A(r2), left: I(n2), header: I(s2), footer: I(i2), gutter: I(o2) }));
          }
        }
        !function(t3) {
          t3.HYPHEN = "hyphen", t3.PERIOD = "period", t3.COLON = "colon", t3.EM_DASH = "emDash", t3.EN_DASH = "endash";
        }(oe || (oe = {}));
        class hn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { start: "w:start", formatType: "w:fmt", separator: "w:chapSep" };
          }
        }
        class pn extends s {
          constructor({ start: t3, formatType: e3, separator: r2 }) {
            super("w:pgNumType"), this.root.push(new hn({ start: t3 === void 0 ? void 0 : m(t3), formatType: e3, separator: r2 }));
          }
        }
        !function(t3) {
          t3.PORTRAIT = "portrait", t3.LANDSCAPE = "landscape";
        }(ae || (ae = {}));
        class dn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { width: "w:w", height: "w:h", orientation: "w:orient" };
          }
        }
        class fn extends s {
          constructor(t3, e3, r2) {
            super("w:pgSz");
            const n2 = r2 === ae.LANDSCAPE, s2 = I(t3), i2 = I(e3);
            this.root.push(new dn({ width: n2 ? i2 : s2, height: n2 ? s2 : i2, orientation: r2 }));
          }
        }
        !function(t3) {
          t3.LEFT_TO_RIGHT_TOP_TO_BOTTOM = "lrTb", t3.TOP_TO_BOTTOM_RIGHT_TO_LEFT = "tbRl";
        }(ce || (ce = {}));
        class mn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { val: "w:val" };
          }
        }
        class wn extends s {
          constructor(t3) {
            super("w:textDirection"), this.root.push(new mn({ val: t3 }));
          }
        }
        !function(t3) {
          t3.NEXT_PAGE = "nextPage", t3.NEXT_COLUMN = "nextColumn", t3.CONTINUOUS = "continuous", t3.EVEN_PAGE = "evenPage", t3.ODD_PAGE = "oddPage";
        }(ue || (ue = {}));
        class gn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { val: "w:val" };
          }
        }
        class yn extends s {
          constructor(t3) {
            super("w:type"), this.root.push(new gn({ val: t3 }));
          }
        }
        const bn = { TOP: "1in", RIGHT: "1in", BOTTOM: "1in", LEFT: "1in", HEADER: 708, FOOTER: 708, GUTTER: 0 }, vn = { WIDTH: 11906, HEIGHT: 16838, ORIENTATION: ae.PORTRAIT };
        class _n extends s {
          constructor({ page: { size: { width: t3 = vn.WIDTH, height: e3 = vn.HEIGHT, orientation: r2 = vn.ORIENTATION } = {}, margin: { top: n2 = bn.TOP, right: s2 = bn.RIGHT, bottom: i2 = bn.BOTTOM, left: o2 = bn.LEFT, header: a2 = bn.HEADER, footer: c2 = bn.FOOTER, gutter: u2 = bn.GUTTER } = {}, pageNumbers: l2 = {}, borders: h2, textDirection: p3 } = {}, grid: { linePitch: d2 = 360, charSpace: f2, type: m2 } = {}, headerWrapperGroup: w2 = {}, footerWrapperGroup: g2 = {}, lineNumbers: y2, titlePage: b2, verticalAlign: v2, column: _2, type: x2 } = {}) {
            super("w:sectPr"), this.addHeaderFooterGroup(te.HEADER, w2), this.addHeaderFooterGroup(te.FOOTER, g2), x2 && this.root.push(new yn(x2)), this.root.push(new fn(t3, e3, r2)), this.root.push(new ln(n2, s2, i2, o2, a2, c2, u2)), h2 && this.root.push(new cn(h2)), y2 && this.root.push(new on(y2)), this.root.push(new pn(l2)), _2 && this.root.push(new en(_2)), v2 && this.root.push(new Yr(v2)), b2 !== void 0 && this.root.push(new L("w:titlePg", b2)), p3 && this.root.push(new wn(p3)), this.root.push(new nn(d2, f2, m2));
          }
          addHeaderFooterGroup(t3, e3) {
            e3.default && this.root.push(new Jr(t3, { type: Jt.DEFAULT, id: e3.default.View.ReferenceId })), e3.first && this.root.push(new Jr(t3, { type: Jt.FIRST, id: e3.first.View.ReferenceId })), e3.even && this.root.push(new Jr(t3, { type: Jt.EVEN, id: e3.even.View.ReferenceId }));
          }
        }
        class xn extends s {
          constructor() {
            super("w:body"), this.sections = [];
          }
          addSection(t3) {
            const e3 = this.sections.pop();
            this.root.push(this.createSectionParagraph(e3)), this.sections.push(new _n(t3));
          }
          prepForXml(t3) {
            return this.sections.length === 1 && (this.root.splice(0, 1), this.root.push(this.sections.pop())), super.prepForXml(t3);
          }
          push(t3) {
            this.root.push(t3);
          }
          createSectionParagraph(t3) {
            const e3 = new Mn({}), r2 = new Bn({});
            return r2.push(t3), e3.addChildElement(r2), e3;
          }
        }
        class En extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { width: "w:w", space: "w:space" };
          }
        }
        class Tn extends s {
          constructor({ width: t3, space: e3 }) {
            super("w:col"), this.root.push(new En({ width: I(t3), space: e3 === void 0 ? void 0 : I(e3) }));
          }
        }
        class An extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { wpc: "xmlns:wpc", mc: "xmlns:mc", o: "xmlns:o", r: "xmlns:r", m: "xmlns:m", v: "xmlns:v", wp14: "xmlns:wp14", wp: "xmlns:wp", w10: "xmlns:w10", w: "xmlns:w", w14: "xmlns:w14", w15: "xmlns:w15", wpg: "xmlns:wpg", wpi: "xmlns:wpi", wne: "xmlns:wne", wps: "xmlns:wps", Ignorable: "mc:Ignorable", cp: "xmlns:cp", dc: "xmlns:dc", dcterms: "xmlns:dcterms", dcmitype: "xmlns:dcmitype", xsi: "xmlns:xsi", type: "xsi:type" };
          }
        }
        class Sn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { color: "w:color", themeColor: "w:themeColor", themeShade: "w:themeShade", themeTint: "w:themeTint" };
          }
        }
        class Rn extends s {
          constructor(t3) {
            super("w:background"), this.root.push(new Sn({ color: t3.color === void 0 ? void 0 : T(t3.color), themeColor: t3.themeColor, themeShade: t3.themeShade === void 0 ? void 0 : v(t3.themeShade), themeTint: t3.themeTint === void 0 ? void 0 : v(t3.themeTint) }));
          }
        }
        class In extends s {
          constructor(t3) {
            super("w:document"), this.root.push(new An({ wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas", mc: "http://schemas.openxmlformats.org/markup-compatibility/2006", o: "urn:schemas-microsoft-com:office:office", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", m: "http://schemas.openxmlformats.org/officeDocument/2006/math", v: "urn:schemas-microsoft-com:vml", wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing", wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", w10: "urn:schemas-microsoft-com:office:word", w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main", w14: "http://schemas.microsoft.com/office/word/2010/wordml", w15: "http://schemas.microsoft.com/office/word/2012/wordml", wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup", wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk", wne: "http://schemas.microsoft.com/office/word/2006/wordml", wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape", Ignorable: "w14 w15 wp14" })), this.body = new xn(), this.root.push(new Rn(t3.background)), this.root.push(this.body);
          }
          add(t3) {
            return this.body.push(t3), this;
          }
          get Body() {
            return this.body;
          }
        }
        class Nn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { xmlns: "xmlns" };
          }
        }
        class On extends s {
          constructor() {
            super("Relationships"), this.root.push(new Nn({ xmlns: "http://schemas.openxmlformats.org/package/2006/relationships" }));
          }
          addRelationship(t3) {
            this.root.push(t3);
          }
          createRelationship(t3, e3, r2, n2) {
            const s2 = new Fr(`rId${t3}`, e3, r2, n2);
            return this.addRelationship(s2), s2;
          }
          get RelationshipCount() {
            return this.root.length - 1;
          }
        }
        class Cn {
          constructor(t3) {
            this.document = new In(t3), this.relationships = new On();
          }
          get View() {
            return this.document;
          }
          get Relationships() {
            return this.relationships;
          }
        }
        var kn, Dn, Ln;
        !function(t3) {
          t3.NONE = "none", t3.DROP = "drop", t3.MARGIN = "margin";
        }(kn || (kn = {})), function(t3) {
          t3.MARGIN = "margin", t3.PAGE = "page", t3.TEXT = "text";
        }(Dn || (Dn = {})), function(t3) {
          t3.AROUND = "around", t3.AUTO = "auto", t3.NONE = "none", t3.NOT_BESIDE = "notBeside", t3.THROUGH = "through", t3.TIGHT = "tight";
        }(Ln || (Ln = {}));
        class Pn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { anchorLock: "w:anchorLock", dropCap: "w:dropCap", width: "w:w", height: "w:h", x: "w:x", y: "w:y", anchorHorizontal: "w:hAnchor", anchorVertical: "w:vAnchor", spaceHorizontal: "w:hSpace", spaceVertical: "w:vSpace", rule: "w:hRule", alignmentX: "w:xAlign", alignmentY: "w:yAlign", lines: "w:lines", wrap: "w:wrap" };
          }
        }
        class Fn extends s {
          constructor(t3) {
            var e3, r2;
            super("w:framePr"), this.root.push(new Pn({ anchorLock: t3.anchorLock, dropCap: t3.dropCap, width: t3.width, height: t3.height, x: t3.position.x, y: t3.position.y, anchorHorizontal: t3.anchor.horizontal, anchorVertical: t3.anchor.vertical, spaceHorizontal: (e3 = t3.space) === null || e3 === void 0 ? void 0 : e3.horizontal, spaceVertical: (r2 = t3.space) === null || r2 === void 0 ? void 0 : r2.vertical, rule: t3.rule, alignmentX: t3.alignment.x, alignmentY: t3.alignment.y, lines: t3.lines, wrap: t3.wrap }));
          }
        }
        class Bn extends i {
          constructor(t3) {
            var e3, r2;
            if (super("w:pPr"), this.numberingReferences = [], !t3)
              return this;
            if (t3.heading && this.push(new Ir(t3.heading)), t3.bullet && this.push(new Ir("ListParagraph")), t3.numbering && (t3.style || t3.heading || t3.numbering.custom || this.push(new Ir("ListParagraph"))), t3.style && this.push(new Ir(t3.style)), t3.keepNext !== void 0 && this.push(new L("w:keepNext", t3.keepNext)), t3.keepLines !== void 0 && this.push(new L("w:keepLines", t3.keepLines)), t3.pageBreakBefore && this.push(new Ar()), t3.frame && this.push(new Fn(t3.frame)), t3.widowControl !== void 0 && this.push(new L("w:widowControl", t3.widowControl)), t3.bullet && this.push(new kr(1, t3.bullet.level)), t3.numbering && (this.numberingReferences.push({ reference: t3.numbering.reference, instance: (e3 = t3.numbering.instance) !== null && e3 !== void 0 ? e3 : 0 }), this.push(new kr(`${t3.numbering.reference}-${(r2 = t3.numbering.instance) !== null && r2 !== void 0 ? r2 : 0}`, t3.numbering.level))), t3.border && this.push(new Y(t3.border)), t3.thematicBreak && this.push(new Q()), t3.shading && this.push(new pt(t3.shading)), t3.rightTabStop && this.push(new Nr($t.RIGHT, t3.rightTabStop)), t3.tabStops)
              for (const e4 of t3.tabStops)
                this.push(new Nr(e4.type, e4.position, e4.leader));
            t3.leftTabStop && this.push(new Nr($t.LEFT, t3.leftTabStop)), t3.bidirectional !== void 0 && this.push(new L("w:bidi", t3.bidirectional)), t3.spacing && this.push(new Rr(t3.spacing)), t3.indent && this.push(new tt(t3.indent)), t3.contextualSpacing !== void 0 && this.push(new L("w:contextualSpacing", t3.contextualSpacing)), t3.alignment && this.push(new X(t3.alignment)), t3.outlineLevel !== void 0 && this.push(new Vr(t3.outlineLevel)), t3.suppressLineNumbers !== void 0 && this.push(new L("w:suppressLineNumbers", t3.suppressLineNumbers));
          }
          push(t3) {
            this.root.push(t3);
          }
          prepForXml(t3) {
            if (t3.viewWrapper instanceof Cn)
              for (const e3 of this.numberingReferences)
                t3.file.Numbering.createConcreteNumberingInstance(e3.reference, e3.instance);
            return super.prepForXml(t3);
          }
        }
        class Mn extends s {
          constructor(t3) {
            if (super("w:p"), typeof t3 == "string")
              return this.properties = new Bn({}), this.root.push(this.properties), this.root.push(new Ct(t3)), this;
            if (this.properties = new Bn(t3), this.root.push(this.properties), t3.text && this.root.push(new Ct(t3.text)), t3.children)
              for (const e3 of t3.children)
                if (e3 instanceof Kr) {
                  this.root.push(e3.start);
                  for (const t4 of e3.children)
                    this.root.push(t4);
                  this.root.push(e3.end);
                } else
                  this.root.push(e3);
          }
          prepForXml(t3) {
            for (const e3 of this.root)
              if (e3 instanceof zr) {
                const r2 = this.root.indexOf(e3), n2 = new Mr(e3.options.children, Ut());
                t3.viewWrapper.Relationships.createRelationship(n2.linkId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", e3.options.link, Zt.EXTERNAL), this.root[r2] = n2;
              }
            return super.prepForXml(t3);
          }
          addRunToFront(t3) {
            return this.root.splice(1, 0, t3), this;
          }
        }
        class Un extends s {
          constructor(t3) {
            super("m:oMath");
            for (const e3 of t3.children)
              this.root.push(e3);
          }
        }
        class zn extends s {
          constructor(t3) {
            super("m:t"), this.root.push(t3);
          }
        }
        class Hn extends s {
          constructor(t3) {
            super("m:r"), this.root.push(new zn(t3));
          }
        }
        class jn extends s {
          constructor(t3) {
            super("m:den");
            for (const e3 of t3)
              this.root.push(e3);
          }
        }
        class Kn extends s {
          constructor(t3) {
            super("m:num");
            for (const e3 of t3)
              this.root.push(e3);
          }
        }
        class Gn extends s {
          constructor(t3) {
            super("m:f"), this.root.push(new Kn(t3.numerator)), this.root.push(new jn(t3.denominator));
          }
        }
        class Wn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { accent: "m:val" };
          }
        }
        class Vn extends s {
          constructor(t3) {
            super("m:chr"), this.root.push(new Wn({ accent: t3 }));
          }
        }
        class $n extends s {
          constructor(t3) {
            super("m:e");
            for (const e3 of t3)
              this.root.push(e3);
          }
        }
        class Xn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { value: "m:val" };
          }
        }
        class qn extends s {
          constructor() {
            super("m:limLoc"), this.root.push(new Xn({ value: "undOvr" }));
          }
        }
        class Zn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { hide: "m:val" };
          }
        }
        class Yn extends s {
          constructor() {
            super("m:subHide"), this.root.push(new Zn({ hide: 1 }));
          }
        }
        class Qn extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { hide: "m:val" };
          }
        }
        class Jn extends s {
          constructor() {
            super("m:supHide"), this.root.push(new Qn({ hide: 1 }));
          }
        }
        class ts extends s {
          constructor(t3, e3, r2) {
            super("m:naryPr"), this.root.push(new Vn(t3)), this.root.push(new qn()), e3 || this.root.push(new Jn()), r2 || this.root.push(new Yn());
          }
        }
        class es extends s {
          constructor(t3) {
            super("m:sub");
            for (const e3 of t3)
              this.root.push(e3);
          }
        }
        class rs extends s {
          constructor(t3) {
            super("m:sup");
            for (const e3 of t3)
              this.root.push(e3);
          }
        }
        class ns extends s {
          constructor(t3) {
            super("m:nary"), this.root.push(new ts("\u2211", !!t3.superScript, !!t3.subScript)), t3.subScript && this.root.push(new es(t3.subScript)), t3.superScript && this.root.push(new rs(t3.superScript)), this.root.push(new $n(t3.children));
          }
        }
        class ss extends s {
          constructor() {
            super("m:sSupPr");
          }
        }
        class is extends s {
          constructor(t3) {
            super("m:sSup"), this.root.push(new ss()), this.root.push(new $n(t3.children)), this.root.push(new rs(t3.superScript));
          }
        }
        class os extends s {
          constructor() {
            super("m:sSubPr");
          }
        }
        class as extends s {
          constructor(t3) {
            super("m:sSub"), this.root.push(new os()), this.root.push(new $n(t3.children)), this.root.push(new es(t3.subScript));
          }
        }
        class cs extends s {
          constructor() {
            super("m:sSubSupPr");
          }
        }
        class us extends s {
          constructor(t3) {
            super("m:sSubSup"), this.root.push(new cs()), this.root.push(new $n(t3.children)), this.root.push(new es(t3.subScript)), this.root.push(new rs(t3.superScript));
          }
        }
        class ls extends s {
          constructor() {
            super("m:sPrePr");
          }
        }
        class hs extends s {
          constructor(t3) {
            super("m:sPre"), this.root.push(new ls()), this.root.push(new $n(t3.children)), this.root.push(new es(t3.subScript)), this.root.push(new rs(t3.superScript));
          }
        }
        const ps = "";
        class ds extends s {
          constructor(t3) {
            if (super("m:deg"), t3)
              for (const e3 of t3)
                this.root.push(e3);
          }
        }
        class fs extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { hide: "m:val" };
          }
        }
        class ms extends s {
          constructor() {
            super("m:degHide"), this.root.push(new fs({ hide: 1 }));
          }
        }
        class ws extends s {
          constructor(t3) {
            super("m:radPr"), t3 || this.root.push(new ms());
          }
        }
        class gs extends s {
          constructor(t3) {
            super("m:rad"), this.root.push(new ws(!!t3.degree)), this.root.push(new ds(t3.degree)), this.root.push(new $n(t3.children));
          }
        }
        class ys extends s {
          constructor(t3) {
            super("m:fName");
            for (const e3 of t3)
              this.root.push(e3);
          }
        }
        class bs extends s {
          constructor() {
            super("m:funcPr");
          }
        }
        class vs extends s {
          constructor(t3) {
            super("m:func"), this.root.push(new bs()), this.root.push(new ys(t3.name)), this.root.push(new $n(t3.children));
          }
        }
        class _s extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { character: "m:val" };
          }
        }
        class xs extends s {
          constructor(t3) {
            super("m:begChr"), this.root.push(new _s({ character: t3 }));
          }
        }
        class Es extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { character: "m:val" };
          }
        }
        class Ts extends s {
          constructor(t3) {
            super("m:endChr"), this.root.push(new Es({ character: t3 }));
          }
        }
        class As extends s {
          constructor(t3) {
            super("m:dPr"), t3 && (this.root.push(new xs(t3.beginningCharacter)), this.root.push(new Ts(t3.endingCharacter)));
          }
        }
        class Ss extends s {
          constructor(t3) {
            super("m:d"), this.root.push(new As()), this.root.push(new $n(t3.children));
          }
        }
        class Rs extends s {
          constructor(t3) {
            super("m:d"), this.root.push(new As({ beginningCharacter: "[", endingCharacter: "]" })), this.root.push(new $n(t3.children));
          }
        }
        class Is extends s {
          constructor(t3) {
            super("m:d"), this.root.push(new As({ beginningCharacter: "{", endingCharacter: "}" })), this.root.push(new $n(t3.children));
          }
        }
        class Ns extends s {
          constructor(t3) {
            super("m:d"), this.root.push(new As({ beginningCharacter: "\u2329", endingCharacter: "\u232A" })), this.root.push(new $n(t3.children));
          }
        }
        class Os extends s {
          constructor(t3) {
            super("w:tblGrid");
            for (const e3 of t3)
              this.root.push(new ks(e3));
          }
        }
        class Cs extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { w: "w:w" };
          }
        }
        class ks extends s {
          constructor(t3) {
            super("w:gridCol"), t3 !== void 0 && this.root.push(new Cs({ w: I(t3) }));
          }
        }
        var Ds, Ls, Ps, Fs;
        !function(t3) {
          t3.AUTO = "auto", t3.DXA = "dxa", t3.NIL = "nil", t3.PERCENTAGE = "pct";
        }(Ds || (Ds = {}));
        class Bs extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { type: "w:type", size: "w:w" };
          }
        }
        class Ms extends s {
          constructor(t3, { type: e3 = Ds.AUTO, size: r2 }) {
            super(t3);
            let n2 = r2;
            e3 === Ds.PERCENTAGE && typeof r2 == "number" && (n2 = `${r2}%`), this.root.push(new Bs({ type: e3, size: O(n2) }));
          }
        }
        !function(t3) {
          t3.TABLE = "w:tblCellMar", t3.TABLE_CELL = "w:tcMar";
        }(Ls || (Ls = {}));
        class Us extends i {
          constructor(t3, { marginUnitType: e3 = Ds.DXA, top: r2, left: n2, bottom: s2, right: i2 }) {
            super(t3), r2 !== void 0 && this.root.push(new Ms("w:top", { type: e3, size: r2 })), n2 !== void 0 && this.root.push(new Ms("w:left", { type: e3, size: n2 })), s2 !== void 0 && this.root.push(new Ms("w:bottom", { type: e3, size: s2 })), i2 !== void 0 && this.root.push(new Ms("w:right", { type: e3, size: i2 }));
          }
        }
        class zs extends i {
          constructor(t3) {
            super("w:tcBorders"), t3.top && this.root.push(new q("w:top", t3.top)), t3.start && this.root.push(new q("w:start", t3.start)), t3.left && this.root.push(new q("w:left", t3.left)), t3.bottom && this.root.push(new q("w:bottom", t3.bottom)), t3.end && this.root.push(new q("w:end", t3.end)), t3.right && this.root.push(new q("w:right", t3.right));
          }
        }
        class Hs extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { val: "w:val" };
          }
        }
        class js extends s {
          constructor(t3) {
            super("w:gridSpan"), this.root.push(new Hs({ val: m(t3) }));
          }
        }
        !function(t3) {
          t3.CONTINUE = "continue", t3.RESTART = "restart";
        }(Ps || (Ps = {}));
        class Ks extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { val: "w:val" };
          }
        }
        class Gs extends s {
          constructor(t3) {
            super("w:vMerge"), this.root.push(new Ks({ val: t3 }));
          }
        }
        !function(t3) {
          t3.BOTTOM_TO_TOP_LEFT_TO_RIGHT = "btLr", t3.LEFT_TO_RIGHT_TOP_TO_BOTTOM = "lrTb", t3.TOP_TO_BOTTOM_RIGHT_TO_LEFT = "tbRl";
        }(Fs || (Fs = {}));
        class Ws extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { val: "w:val" };
          }
        }
        class Vs extends s {
          constructor(t3) {
            super("w:textDirection"), this.root.push(new Ws({ val: t3 }));
          }
        }
        class $s extends i {
          constructor(t3) {
            super("w:tcPr"), t3.width && this.root.push(new Ms("w:tcW", t3.width)), t3.columnSpan && this.root.push(new js(t3.columnSpan)), t3.verticalMerge ? this.root.push(new Gs(t3.verticalMerge)) : t3.rowSpan && t3.rowSpan > 1 && this.root.push(new Gs(Ps.RESTART)), t3.borders && this.root.push(new zs(t3.borders)), t3.shading && this.root.push(new pt(t3.shading)), t3.margins && this.root.push(new Us(Ls.TABLE_CELL, t3.margins)), t3.textDirection && this.root.push(new Vs(t3.textDirection)), t3.verticalAlign && this.root.push(new Yr(t3.verticalAlign));
          }
        }
        class Xs extends s {
          constructor(t3) {
            super("w:tc"), this.options = t3, this.root.push(new $s(t3));
            for (const e3 of t3.children)
              this.root.push(e3);
          }
          prepForXml(t3) {
            return this.root[this.root.length - 1] instanceof Mn || this.root.push(new Mn({})), super.prepForXml(t3);
          }
        }
        const qs = { style: z.NONE, size: 0, color: "auto" }, Zs = { style: z.SINGLE, size: 4, color: "auto" };
        class Ys extends s {
          constructor(t3) {
            super("w:tblBorders"), t3.top ? this.root.push(new q("w:top", t3.top)) : this.root.push(new q("w:top", Zs)), t3.left ? this.root.push(new q("w:left", t3.left)) : this.root.push(new q("w:left", Zs)), t3.bottom ? this.root.push(new q("w:bottom", t3.bottom)) : this.root.push(new q("w:bottom", Zs)), t3.right ? this.root.push(new q("w:right", t3.right)) : this.root.push(new q("w:right", Zs)), t3.insideHorizontal ? this.root.push(new q("w:insideH", t3.insideHorizontal)) : this.root.push(new q("w:insideH", Zs)), t3.insideVertical ? this.root.push(new q("w:insideV", t3.insideVertical)) : this.root.push(new q("w:insideV", Zs));
          }
        }
        var Qs;
        Ys.NONE = { top: qs, bottom: qs, left: qs, right: qs, insideHorizontal: qs, insideVertical: qs }, function(t3) {
          t3.NEVER = "never", t3.OVERLAP = "overlap";
        }(Qs || (Qs = {}));
        class Js extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { val: "w:val" };
          }
        }
        class ti extends s {
          constructor(t3) {
            super("w:tblOverlap"), this.root.push(new Js({ val: t3 }));
          }
        }
        var ei, ri, ni, si, ii, oi;
        !function(t3) {
          t3.MARGIN = "margin", t3.PAGE = "page", t3.TEXT = "text";
        }(ei || (ei = {})), function(t3) {
          t3.CENTER = "center", t3.INSIDE = "inside", t3.LEFT = "left", t3.OUTSIDE = "outside", t3.RIGHT = "right";
        }(ri || (ri = {})), function(t3) {
          t3.CENTER = "center", t3.INSIDE = "inside", t3.BOTTOM = "bottom", t3.OUTSIDE = "outside", t3.INLINE = "inline", t3.TOP = "top";
        }(ni || (ni = {}));
        class ai extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { horizontalAnchor: "w:horzAnchor", verticalAnchor: "w:vertAnchor", absoluteHorizontalPosition: "w:tblpX", relativeHorizontalPosition: "w:tblpXSpec", absoluteVerticalPosition: "w:tblpY", relativeVerticalPosition: "w:tblpYSpec", bottomFromText: "w:bottomFromText", topFromText: "w:topFromText", leftFromText: "w:leftFromText", rightFromText: "w:rightFromText" };
          }
        }
        class ci extends s {
          constructor(t3) {
            var { leftFromText: e3, rightFromText: r2, topFromText: n2, bottomFromText: s2, absoluteHorizontalPosition: i2, absoluteVerticalPosition: o2 } = t3, a2 = function(t4, e4) {
              var r3 = {};
              for (var n3 in t4)
                Object.prototype.hasOwnProperty.call(t4, n3) && e4.indexOf(n3) < 0 && (r3[n3] = t4[n3]);
              if (t4 != null && typeof Object.getOwnPropertySymbols == "function") {
                var s3 = 0;
                for (n3 = Object.getOwnPropertySymbols(t4); s3 < n3.length; s3++)
                  e4.indexOf(n3[s3]) < 0 && Object.prototype.propertyIsEnumerable.call(t4, n3[s3]) && (r3[n3[s3]] = t4[n3[s3]]);
              }
              return r3;
            }(t3, ["leftFromText", "rightFromText", "topFromText", "bottomFromText", "absoluteHorizontalPosition", "absoluteVerticalPosition"]);
            super("w:tblpPr"), this.root.push(new ai(Object.assign({ leftFromText: e3 === void 0 ? void 0 : I(e3), rightFromText: r2 === void 0 ? void 0 : I(r2), topFromText: n2 === void 0 ? void 0 : I(n2), bottomFromText: s2 === void 0 ? void 0 : I(s2), absoluteHorizontalPosition: i2 === void 0 ? void 0 : A(i2), absoluteVerticalPosition: o2 === void 0 ? void 0 : A(o2) }, a2))), a2.overlap && this.root.push(new ti(a2.overlap));
          }
        }
        !function(t3) {
          t3.AUTOFIT = "autofit", t3.FIXED = "fixed";
        }(si || (si = {}));
        class ui extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { type: "w:type" };
          }
        }
        class li extends s {
          constructor(t3) {
            super("w:tblLayout"), this.root.push(new ui({ type: t3 }));
          }
        }
        class hi extends i {
          constructor(t3) {
            super("w:tblPr"), t3.style && this.root.push(new F("w:tblStyle", t3.style)), t3.float && this.root.push(new ci(t3.float)), t3.visuallyRightToLeft !== void 0 && this.root.push(new L("w:bidiVisual", t3.visuallyRightToLeft)), t3.width && this.root.push(new Ms("w:tblW", t3.width)), t3.alignment && this.root.push(new X(t3.alignment)), t3.indent && this.root.push(new Ms("w:tblInd", t3.indent)), t3.borders && this.root.push(new Ys(t3.borders)), t3.shading && this.root.push(new pt(t3.shading)), t3.layout && this.root.push(new li(t3.layout)), t3.cellMargin && this.root.push(new Us(Ls.TABLE, t3.cellMargin));
          }
        }
        class pi extends s {
          constructor({ rows: t3, width: e3, columnWidths: r2 = Array(Math.max(...t3.map((t4) => t4.CellCount))).fill(100), margins: n2, indent: s2, float: i2, layout: o2, style: a2, borders: c2, alignment: u2, visuallyRightToLeft: l2 }) {
            super("w:tbl"), this.root.push(new hi({ borders: c2 != null ? c2 : {}, width: e3 != null ? e3 : { size: 100 }, indent: s2, float: i2, layout: o2, style: a2, alignment: u2, cellMargin: n2, visuallyRightToLeft: l2 })), this.root.push(new Os(r2));
            for (const e4 of t3)
              this.root.push(e4);
            t3.forEach((e4, r3) => {
              if (r3 === t3.length - 1)
                return;
              let n3 = 0;
              e4.cells.forEach((e5) => {
                if (e5.options.rowSpan && e5.options.rowSpan > 1) {
                  const s3 = new Xs({ rowSpan: e5.options.rowSpan - 1, columnSpan: e5.options.columnSpan, borders: e5.options.borders, children: [], verticalMerge: Ps.CONTINUE });
                  t3[r3 + 1].addCellToColumnIndex(s3, n3);
                }
                n3 += e5.options.columnSpan || 1;
              });
            });
          }
        }
        !function(t3) {
          t3.AUTO = "auto", t3.ATLEAST = "atLeast", t3.EXACT = "exact";
        }(ii || (ii = {}));
        class di extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { value: "w:val", rule: "w:hRule" };
          }
        }
        class fi extends s {
          constructor(t3, e3) {
            super("w:trHeight"), this.root.push(new di({ value: I(t3), rule: e3 }));
          }
        }
        class mi extends i {
          constructor(t3) {
            super("w:trPr"), t3.cantSplit !== void 0 && this.root.push(new L("w:cantSplit", t3.cantSplit)), t3.tableHeader !== void 0 && this.root.push(new L("w:tblHeader", t3.tableHeader)), t3.height && this.root.push(new fi(t3.height.value, t3.height.rule));
          }
        }
        class wi extends s {
          constructor(t3) {
            super("w:tr"), this.options = t3, this.root.push(new mi(t3));
            for (const e3 of t3.children)
              this.root.push(e3);
          }
          get CellCount() {
            return this.options.children.length;
          }
          get cells() {
            return this.root.filter((t3) => t3 instanceof Xs);
          }
          addCellToIndex(t3, e3) {
            this.root.splice(e3 + 1, 0, t3);
          }
          addCellToColumnIndex(t3, e3) {
            const r2 = this.columnIndexToRootIndex(e3, true);
            this.addCellToIndex(t3, r2 - 1);
          }
          rootIndexToColumnIndex(t3) {
            if (t3 < 1 || t3 >= this.root.length)
              throw new Error("cell 'rootIndex' should between 1 to " + (this.root.length - 1));
            let e3 = 0;
            for (let r2 = 1; r2 < t3; r2++)
              e3 += this.root[r2].options.columnSpan || 1;
            return e3;
          }
          columnIndexToRootIndex(t3, e3 = false) {
            if (t3 < 0)
              throw new Error("cell 'columnIndex' should not less than zero");
            let r2 = 0, n2 = 1;
            for (; r2 <= t3; ) {
              if (n2 >= this.root.length) {
                if (e3)
                  return this.root.length;
                throw new Error("cell 'columnIndex' should not great than " + (r2 - 1));
              }
              const t4 = this.root[n2];
              n2 += 1, r2 += t4 && t4.options.columnSpan || 1;
            }
            return n2 - 1;
          }
        }
        class gi extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { xmlns: "xmlns", vt: "xmlns:vt" };
          }
        }
        class yi extends s {
          constructor() {
            super("Properties"), this.root.push(new gi({ xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties", vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes" }));
          }
        }
        class bi extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { xmlns: "xmlns" };
          }
        }
        class vi extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { contentType: "ContentType", extension: "Extension" };
          }
        }
        class _i extends s {
          constructor(t3, e3) {
            super("Default"), this.root.push(new vi({ contentType: t3, extension: e3 }));
          }
        }
        class xi extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { contentType: "ContentType", partName: "PartName" };
          }
        }
        class Ei extends s {
          constructor(t3, e3) {
            super("Override"), this.root.push(new xi({ contentType: t3, partName: e3 }));
          }
        }
        class Ti extends s {
          constructor() {
            super("Types"), this.root.push(new bi({ xmlns: "http://schemas.openxmlformats.org/package/2006/content-types" })), this.root.push(new _i("image/png", "png")), this.root.push(new _i("image/jpeg", "jpeg")), this.root.push(new _i("image/jpeg", "jpg")), this.root.push(new _i("image/bmp", "bmp")), this.root.push(new _i("image/gif", "gif")), this.root.push(new _i("application/vnd.openxmlformats-package.relationships+xml", "rels")), this.root.push(new _i("application/xml", "xml")), this.root.push(new Ei("application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml", "/word/document.xml")), this.root.push(new Ei("application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml", "/word/styles.xml")), this.root.push(new Ei("application/vnd.openxmlformats-package.core-properties+xml", "/docProps/core.xml")), this.root.push(new Ei("application/vnd.openxmlformats-officedocument.custom-properties+xml", "/docProps/custom.xml")), this.root.push(new Ei("application/vnd.openxmlformats-officedocument.extended-properties+xml", "/docProps/app.xml")), this.root.push(new Ei("application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml", "/word/numbering.xml")), this.root.push(new Ei("application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml", "/word/footnotes.xml")), this.root.push(new Ei("application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml", "/word/settings.xml"));
          }
          addFooter(t3) {
            this.root.push(new Ei("application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml", `/word/footer${t3}.xml`));
          }
          addHeader(t3) {
            this.root.push(new Ei("application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml", `/word/header${t3}.xml`));
          }
        }
        class Ai extends s {
          constructor(t3) {
            super("cp:coreProperties"), this.root.push(new An({ cp: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties", dc: "http://purl.org/dc/elements/1.1/", dcterms: "http://purl.org/dc/terms/", dcmitype: "http://purl.org/dc/dcmitype/", xsi: "http://www.w3.org/2001/XMLSchema-instance" })), t3.title && this.root.push(new M("dc:title", t3.title)), t3.subject && this.root.push(new M("dc:subject", t3.subject)), t3.creator && this.root.push(new M("dc:creator", t3.creator)), t3.keywords && this.root.push(new M("cp:keywords", t3.keywords)), t3.description && this.root.push(new M("dc:description", t3.description)), t3.lastModifiedBy && this.root.push(new M("cp:lastModifiedBy", t3.lastModifiedBy)), t3.revision && this.root.push(new M("cp:revision", String(t3.revision))), this.root.push(new Si("dcterms:created")), this.root.push(new Si("dcterms:modified"));
          }
        }
        class Si extends s {
          constructor(t3) {
            super(t3), this.root.push(new An({ type: "dcterms:W3CDTF" })), this.root.push(D(new Date()));
          }
        }
        class Ri extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { xmlns: "xmlns", vt: "xmlns:vt" };
          }
        }
        class Ii extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { fmtid: "fmtid", pid: "pid", name: "name" };
          }
        }
        class Ni extends s {
          constructor(t3, e3) {
            super("property"), this.root.push(new Ii({ fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}", pid: t3.toString(), name: e3.name })), this.root.push(new Oi(e3.value));
          }
        }
        class Oi extends s {
          constructor(t3) {
            super("vt:lpwstr"), this.root.push(t3);
          }
        }
        class Ci extends s {
          constructor(t3) {
            super("Properties"), this.properties = [], this.root.push(new Ri({ xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties", vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes" })), this.nextId = 2;
            for (const e3 of t3)
              this.addCustomProperty(e3);
          }
          prepForXml(t3) {
            return this.properties.forEach((t4) => this.root.push(t4)), super.prepForXml(t3);
          }
          addCustomProperty(t3) {
            this.properties.push(new Ni(this.nextId++, t3));
          }
        }
        class ki extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { wpc: "xmlns:wpc", mc: "xmlns:mc", o: "xmlns:o", r: "xmlns:r", m: "xmlns:m", v: "xmlns:v", wp14: "xmlns:wp14", wp: "xmlns:wp", w10: "xmlns:w10", w: "xmlns:w", w14: "xmlns:w14", w15: "xmlns:w15", wpg: "xmlns:wpg", wpi: "xmlns:wpi", wne: "xmlns:wne", wps: "xmlns:wps", cp: "xmlns:cp", dc: "xmlns:dc", dcterms: "xmlns:dcterms", dcmitype: "xmlns:dcmitype", xsi: "xmlns:xsi", type: "xsi:type" };
          }
        }
        class Di extends f {
          constructor(t3, e3) {
            super("w:ftr", e3), this.refId = t3, e3 || this.root.push(new ki({ wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas", mc: "http://schemas.openxmlformats.org/markup-compatibility/2006", o: "urn:schemas-microsoft-com:office:office", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", m: "http://schemas.openxmlformats.org/officeDocument/2006/math", v: "urn:schemas-microsoft-com:vml", wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing", wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", w10: "urn:schemas-microsoft-com:office:word", w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main", w14: "http://schemas.microsoft.com/office/word/2010/wordml", w15: "http://schemas.microsoft.com/office/word/2012/wordml", wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup", wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk", wne: "http://schemas.microsoft.com/office/word/2006/wordml", wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape" }));
          }
          get ReferenceId() {
            return this.refId;
          }
          add(t3) {
            this.root.push(t3);
          }
        }
        class Li {
          constructor(t3, e3, r2) {
            this.media = t3, this.footer = new Di(e3, r2), this.relationships = new On();
          }
          add(t3) {
            this.footer.add(t3);
          }
          addChildElement(t3) {
            this.footer.addChildElement(t3);
          }
          get View() {
            return this.footer;
          }
          get Relationships() {
            return this.relationships;
          }
          get Media() {
            return this.media;
          }
        }
        class Pi extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { type: "w:type", id: "w:id" };
          }
        }
        class Fi extends s {
          constructor() {
            super("w:footnoteRef");
          }
        }
        class Bi extends Ot {
          constructor() {
            super({ style: "FootnoteReference" }), this.root.push(new Fi());
          }
        }
        !function(t3) {
          t3.SEPERATOR = "separator", t3.CONTINUATION_SEPERATOR = "continuationSeparator";
        }(oi || (oi = {}));
        class Mi extends s {
          constructor(t3) {
            super("w:footnote"), this.root.push(new Pi({ type: t3.type, id: t3.id }));
            for (let e3 = 0; e3 < t3.children.length; e3++) {
              const r2 = t3.children[e3];
              e3 === 0 && r2.addRunToFront(new Bi()), this.root.push(r2);
            }
          }
        }
        class Ui extends s {
          constructor() {
            super("w:continuationSeparator");
          }
        }
        class zi extends Ot {
          constructor() {
            super({}), this.root.push(new Ui());
          }
        }
        class Hi extends s {
          constructor() {
            super("w:separator");
          }
        }
        class ji extends Ot {
          constructor() {
            super({}), this.root.push(new Hi());
          }
        }
        class Ki extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { wpc: "xmlns:wpc", mc: "xmlns:mc", o: "xmlns:o", r: "xmlns:r", m: "xmlns:m", v: "xmlns:v", wp14: "xmlns:wp14", wp: "xmlns:wp", w10: "xmlns:w10", w: "xmlns:w", w14: "xmlns:w14", w15: "xmlns:w15", wpg: "xmlns:wpg", wpi: "xmlns:wpi", wne: "xmlns:wne", wps: "xmlns:wps", Ignorable: "mc:Ignorable" };
          }
        }
        class Gi extends s {
          constructor() {
            super("w:footnotes"), this.root.push(new Ki({ wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas", mc: "http://schemas.openxmlformats.org/markup-compatibility/2006", o: "urn:schemas-microsoft-com:office:office", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", m: "http://schemas.openxmlformats.org/officeDocument/2006/math", v: "urn:schemas-microsoft-com:vml", wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing", wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", w10: "urn:schemas-microsoft-com:office:word", w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main", w14: "http://schemas.microsoft.com/office/word/2010/wordml", w15: "http://schemas.microsoft.com/office/word/2012/wordml", wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup", wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk", wne: "http://schemas.microsoft.com/office/word/2006/wordml", wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape", Ignorable: "w14 w15 wp14" }));
            const t3 = new Mi({ id: -1, type: oi.SEPERATOR, children: [new Mn({ spacing: { after: 0, line: 240, lineRule: Wt.AUTO }, children: [new ji()] })] });
            this.root.push(t3);
            const e3 = new Mi({ id: 0, type: oi.CONTINUATION_SEPERATOR, children: [new Mn({ spacing: { after: 0, line: 240, lineRule: Wt.AUTO }, children: [new zi()] })] });
            this.root.push(e3);
          }
          createFootNote(t3, e3) {
            const r2 = new Mi({ id: t3, children: e3 });
            this.root.push(r2);
          }
        }
        class Wi {
          constructor() {
            this.footnotess = new Gi(), this.relationships = new On();
          }
          get View() {
            return this.footnotess;
          }
          get Relationships() {
            return this.relationships;
          }
        }
        class Vi extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { wpc: "xmlns:wpc", mc: "xmlns:mc", o: "xmlns:o", r: "xmlns:r", m: "xmlns:m", v: "xmlns:v", wp14: "xmlns:wp14", wp: "xmlns:wp", w10: "xmlns:w10", w: "xmlns:w", w14: "xmlns:w14", w15: "xmlns:w15", wpg: "xmlns:wpg", wpi: "xmlns:wpi", wne: "xmlns:wne", wps: "xmlns:wps", cp: "xmlns:cp", dc: "xmlns:dc", dcterms: "xmlns:dcterms", dcmitype: "xmlns:dcmitype", xsi: "xmlns:xsi", type: "xsi:type", cx: "xmlns:cx", cx1: "xmlns:cx1", cx2: "xmlns:cx2", cx3: "xmlns:cx3", cx4: "xmlns:cx4", cx5: "xmlns:cx5", cx6: "xmlns:cx6", cx7: "xmlns:cx7", cx8: "xmlns:cx8", w16cid: "xmlns:w16cid", w16se: "xmlns:w16se" };
          }
        }
        class $i extends f {
          constructor(t3, e3) {
            super("w:hdr", e3), this.refId = t3, e3 || this.root.push(new Vi({ wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas", mc: "http://schemas.openxmlformats.org/markup-compatibility/2006", o: "urn:schemas-microsoft-com:office:office", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", m: "http://schemas.openxmlformats.org/officeDocument/2006/math", v: "urn:schemas-microsoft-com:vml", wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing", wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", w10: "urn:schemas-microsoft-com:office:word", w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main", w14: "http://schemas.microsoft.com/office/word/2010/wordml", w15: "http://schemas.microsoft.com/office/word/2012/wordml", wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup", wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk", wne: "http://schemas.microsoft.com/office/word/2006/wordml", wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape", cx: "http://schemas.microsoft.com/office/drawing/2014/chartex", cx1: "http://schemas.microsoft.com/office/drawing/2015/9/8/chartex", cx2: "http://schemas.microsoft.com/office/drawing/2015/10/21/chartex", cx3: "http://schemas.microsoft.com/office/drawing/2016/5/9/chartex", cx4: "http://schemas.microsoft.com/office/drawing/2016/5/10/chartex", cx5: "http://schemas.microsoft.com/office/drawing/2016/5/11/chartex", cx6: "http://schemas.microsoft.com/office/drawing/2016/5/12/chartex", cx7: "http://schemas.microsoft.com/office/drawing/2016/5/13/chartex", cx8: "http://schemas.microsoft.com/office/drawing/2016/5/14/chartex", w16cid: "http://schemas.microsoft.com/office/word/2016/wordml/cid", w16se: "http://schemas.microsoft.com/office/word/2015/wordml/symex" }));
          }
          get ReferenceId() {
            return this.refId;
          }
          add(t3) {
            this.root.push(t3);
          }
        }
        class Xi {
          constructor(t3, e3, r2) {
            this.media = t3, this.header = new $i(e3, r2), this.relationships = new On();
          }
          add(t3) {
            return this.header.add(t3), this;
          }
          addChildElement(t3) {
            this.header.addChildElement(t3);
          }
          get View() {
            return this.header;
          }
          get Relationships() {
            return this.relationships;
          }
          get Media() {
            return this.media;
          }
        }
        class qi {
          constructor() {
            this.map = /* @__PURE__ */ new Map();
          }
          addMedia(t3, e3) {
            const r2 = `${Ut()}.png`, n2 = { stream: typeof t3 == "string" ? this.convertDataURIToBinary(t3) : t3, fileName: r2, transformation: { pixels: { x: Math.round(e3.width), y: Math.round(e3.height) }, emus: { x: Math.round(9525 * e3.width), y: Math.round(9525 * e3.height) }, flip: e3.flip, rotation: e3.rotation ? 6e4 * e3.rotation : void 0 } };
            return this.map.set(r2, n2), n2;
          }
          addImage(t3, e3) {
            this.map.set(t3, e3);
          }
          get Array() {
            return Array.from(this.map.values());
          }
          convertDataURIToBinary(t3) {
            const e3 = ";base64,", n2 = t3.indexOf(e3) + e3.length;
            return typeof atob == "function" ? new Uint8Array(atob(t3.substring(n2)).split("").map((t4) => t4.charCodeAt(0))) : new (r(764)).Buffer(t3, "base64");
          }
        }
        const Zi = "";
        var Yi, Qi;
        !function(t3) {
          t3.BULLET = "bullet", t3.CARDINAL_TEXT = "cardinalText", t3.CHICAGO = "chicago", t3.DECIMAL = "decimal", t3.DECIMAL_ENCLOSED_CIRCLE = "decimalEnclosedCircle", t3.DECIMAL_ENCLOSED_FULLSTOP = "decimalEnclosedFullstop", t3.DECIMAL_ENCLOSED_PARENTHESES = "decimalEnclosedParen", t3.DECIMAL_ZERO = "decimalZero", t3.LOWER_LETTER = "lowerLetter", t3.LOWER_ROMAN = "lowerRoman", t3.NONE = "none", t3.ORDINAL_TEXT = "ordinalText", t3.UPPER_LETTER = "upperLetter", t3.UPPER_ROMAN = "upperRoman";
        }(Yi || (Yi = {}));
        class Ji extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { ilvl: "w:ilvl", tentative: "w15:tentative" };
          }
        }
        class to extends s {
          constructor(t3) {
            super("w:numFmt"), this.root.push(new a({ val: t3 }));
          }
        }
        class eo extends s {
          constructor(t3) {
            super("w:lvlText"), this.root.push(new a({ val: t3 }));
          }
        }
        class ro extends s {
          constructor(t3) {
            super("w:lvlJc"), this.root.push(new a({ val: t3 }));
          }
        }
        !function(t3) {
          t3.NOTHING = "nothing", t3.SPACE = "space", t3.TAB = "tab";
        }(Qi || (Qi = {}));
        class no extends s {
          constructor(t3) {
            super("w:suff"), this.root.push(new a({ val: t3 }));
          }
        }
        class so extends s {
          constructor({ level: t3, format: e3, text: r2, alignment: n2 = U.START, start: s2 = 1, style: i2, suffix: o2 }) {
            if (super("w:lvl"), this.root.push(new B("w:start", m(s2))), e3 && this.root.push(new to(e3)), o2 && this.root.push(new no(o2)), r2 && this.root.push(new eo(r2)), this.root.push(new ro(n2)), this.paragraphProperties = new Bn(i2 && i2.paragraph), this.runProperties = new St(i2 && i2.run), this.root.push(this.paragraphProperties), this.root.push(this.runProperties), t3 > 9)
              throw new Error("Level cannot be greater than 9. Read more here: https://answers.microsoft.com/en-us/msoffice/forum/all/does-word-support-more-than-9-list-levels/d130fdcd-1781-446d-8c84-c6c79124e4d7");
            this.root.push(new Ji({ ilvl: m(t3), tentative: 1 }));
          }
        }
        class io extends so {
          constructor(t3) {
            super(t3);
          }
        }
        class oo extends so {
        }
        class ao extends s {
          constructor(t3) {
            super("w:multiLevelType"), this.root.push(new a({ val: t3 }));
          }
        }
        class co extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { abstractNumId: "w:abstractNumId", restartNumberingAfterBreak: "w15:restartNumberingAfterBreak" };
          }
        }
        class uo extends s {
          constructor(t3, e3) {
            super("w:abstractNum"), this.root.push(new co({ abstractNumId: m(t3), restartNumberingAfterBreak: 0 })), this.root.push(new ao("hybridMultilevel")), this.id = t3;
            for (const t4 of e3)
              this.root.push(new io(t4));
          }
        }
        class lo extends s {
          constructor(t3) {
            super("w:abstractNumId"), this.root.push(new a({ val: t3 }));
          }
        }
        class ho extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { numId: "w:numId" };
          }
        }
        class po extends s {
          constructor(t3) {
            super("w:num"), this.numId = t3.numId, this.reference = t3.reference, this.instance = t3.instance, this.root.push(new ho({ numId: m(t3.numId) })), this.root.push(new lo(m(t3.abstractNumId))), t3.overrideLevel && this.root.push(new mo(t3.overrideLevel.num, t3.overrideLevel.start));
          }
        }
        class fo extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { ilvl: "w:ilvl" };
          }
        }
        class mo extends s {
          constructor(t3, e3) {
            super("w:lvlOverride"), this.root.push(new fo({ ilvl: t3 })), e3 !== void 0 && this.root.push(new go(e3));
          }
        }
        class wo extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { val: "w:val" };
          }
        }
        class go extends s {
          constructor(t3) {
            super("w:startOverride"), this.root.push(new wo({ val: t3 }));
          }
        }
        class yo extends s {
          constructor(t3) {
            super("w:numbering"), this.abstractNumberingMap = /* @__PURE__ */ new Map(), this.concreteNumberingMap = /* @__PURE__ */ new Map(), this.referenceConfigMap = /* @__PURE__ */ new Map(), this.root.push(new An({ wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas", mc: "http://schemas.openxmlformats.org/markup-compatibility/2006", o: "urn:schemas-microsoft-com:office:office", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", m: "http://schemas.openxmlformats.org/officeDocument/2006/math", v: "urn:schemas-microsoft-com:vml", wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing", wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", w10: "urn:schemas-microsoft-com:office:word", w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main", w14: "http://schemas.microsoft.com/office/word/2010/wordml", w15: "http://schemas.microsoft.com/office/word/2012/wordml", wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup", wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk", wne: "http://schemas.microsoft.com/office/word/2006/wordml", wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape", Ignorable: "w14 w15 wp14" }));
            const e3 = new uo(Mt(), [{ level: 0, format: Yi.BULLET, text: "\u25CF", alignment: U.LEFT, style: { paragraph: { indent: { left: Bt(0.5), hanging: Bt(0.25) } } } }, { level: 1, format: Yi.BULLET, text: "\u25CB", alignment: U.LEFT, style: { paragraph: { indent: { left: Bt(1), hanging: Bt(0.25) } } } }, { level: 2, format: Yi.BULLET, text: "\u25A0", alignment: U.LEFT, style: { paragraph: { indent: { left: 2160, hanging: Bt(0.25) } } } }, { level: 3, format: Yi.BULLET, text: "\u25CF", alignment: U.LEFT, style: { paragraph: { indent: { left: 2880, hanging: Bt(0.25) } } } }, { level: 4, format: Yi.BULLET, text: "\u25CB", alignment: U.LEFT, style: { paragraph: { indent: { left: 3600, hanging: Bt(0.25) } } } }, { level: 5, format: Yi.BULLET, text: "\u25A0", alignment: U.LEFT, style: { paragraph: { indent: { left: 4320, hanging: Bt(0.25) } } } }, { level: 6, format: Yi.BULLET, text: "\u25CF", alignment: U.LEFT, style: { paragraph: { indent: { left: 5040, hanging: Bt(0.25) } } } }, { level: 7, format: Yi.BULLET, text: "\u25CF", alignment: U.LEFT, style: { paragraph: { indent: { left: 5760, hanging: Bt(0.25) } } } }, { level: 8, format: Yi.BULLET, text: "\u25CF", alignment: U.LEFT, style: { paragraph: { indent: { left: 6480, hanging: Bt(0.25) } } } }]);
            this.concreteNumberingMap.set("default-bullet-numbering", new po({ numId: 1, abstractNumId: e3.id, reference: "default-bullet-numbering", instance: 0, overrideLevel: { num: 0, start: 1 } })), this.abstractNumberingMap.set("default-bullet-numbering", e3);
            for (const e4 of t3.config)
              this.abstractNumberingMap.set(e4.reference, new uo(Mt(), e4.levels)), this.referenceConfigMap.set(e4.reference, e4.levels);
          }
          prepForXml(t3) {
            for (const t4 of this.abstractNumberingMap.values())
              this.root.push(t4);
            for (const t4 of this.concreteNumberingMap.values())
              this.root.push(t4);
            return super.prepForXml(t3);
          }
          createConcreteNumberingInstance(t3, e3) {
            const r2 = this.abstractNumberingMap.get(t3);
            if (!r2)
              return;
            const n2 = `${t3}-${e3}`;
            if (this.concreteNumberingMap.has(n2))
              return;
            const s2 = { numId: Mt(), abstractNumId: r2.id, reference: t3, instance: e3, overrideLevel: { num: 0, start: 1 } }, i2 = this.referenceConfigMap.get(t3), o2 = i2 && i2[0].start;
            o2 && Number.isInteger(o2) && (s2.overrideLevel = { num: 0, start: o2 }), this.concreteNumberingMap.set(n2, new po(s2));
          }
          get ConcreteNumbering() {
            return Array.from(this.concreteNumberingMap.values());
          }
          get ReferenceConfig() {
            return Array.from(this.referenceConfigMap.values());
          }
        }
        class bo extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { version: "w:val", name: "w:name", uri: "w:uri" };
          }
        }
        class vo extends s {
          constructor(t3) {
            super("w:compatSetting"), this.root.push(new bo({ version: t3, uri: "http://schemas.microsoft.com/office/word", name: "compatibilityMode" }));
          }
        }
        class _o extends s {
          constructor(t3) {
            super("w:compat"), t3.doNotExpandShiftReturn !== void 0 && this.root.push(new L("w:doNotExpandShiftReturn", t3.doNotExpandShiftReturn)), t3.version && this.root.push(new vo(t3.version));
          }
        }
        class xo extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { wpc: "xmlns:wpc", mc: "xmlns:mc", o: "xmlns:o", r: "xmlns:r", m: "xmlns:m", v: "xmlns:v", wp14: "xmlns:wp14", wp: "xmlns:wp", w10: "xmlns:w10", w: "xmlns:w", w14: "xmlns:w14", w15: "xmlns:w15", wpg: "xmlns:wpg", wpi: "xmlns:wpi", wne: "xmlns:wne", wps: "xmlns:wps", Ignorable: "mc:Ignorable" };
          }
        }
        class Eo extends s {
          constructor(t3) {
            super("w:settings"), this.root.push(new xo({ wpc: "http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas", mc: "http://schemas.openxmlformats.org/markup-compatibility/2006", o: "urn:schemas-microsoft-com:office:office", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", m: "http://schemas.openxmlformats.org/officeDocument/2006/math", v: "urn:schemas-microsoft-com:vml", wp14: "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing", wp: "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing", w10: "urn:schemas-microsoft-com:office:word", w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main", w14: "http://schemas.microsoft.com/office/word/2010/wordml", w15: "http://schemas.microsoft.com/office/word/2012/wordml", wpg: "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup", wpi: "http://schemas.microsoft.com/office/word/2010/wordprocessingInk", wne: "http://schemas.microsoft.com/office/word/2006/wordml", wps: "http://schemas.microsoft.com/office/word/2010/wordprocessingShape", Ignorable: "w14 w15 wp14" })), this.root.push(new L("w:displayBackgroundShape", true)), t3.trackRevisions !== void 0 && this.root.push(new L("w:trackRevisions", t3.trackRevisions)), t3.evenAndOddHeaders !== void 0 && this.root.push(new L("w:evenAndOddHeaders", t3.evenAndOddHeaders)), t3.updateFields !== void 0 && this.root.push(new L("w:updateFields", t3.updateFields)), this.root.push(new _o({ version: t3.compatabilityModeVersion || 15 }));
          }
        }
        class To extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { val: "w:val" };
          }
        }
        class Ao extends s {
          constructor(t3) {
            super("w:name"), this.root.push(new To({ val: t3 }));
          }
        }
        class So extends s {
          constructor(t3) {
            super("w:uiPriority"), this.root.push(new To({ val: m(t3) }));
          }
        }
        class Ro extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { type: "w:type", styleId: "w:styleId", default: "w:default", customStyle: "w:customStyle" };
          }
        }
        class Io extends s {
          constructor(t3, e3) {
            super("w:style"), this.root.push(new Ro(t3)), e3.name && this.root.push(new Ao(e3.name)), e3.basedOn && this.root.push(new F("w:basedOn", e3.basedOn)), e3.next && this.root.push(new F("w:next", e3.next)), e3.link && this.root.push(new F("w:link", e3.link)), e3.uiPriority !== void 0 && this.root.push(new So(e3.uiPriority)), e3.semiHidden !== void 0 && this.root.push(new L("w:semiHidden", e3.semiHidden)), e3.unhideWhenUsed !== void 0 && this.root.push(new L("w:unhideWhenUsed", e3.unhideWhenUsed)), e3.quickFormat !== void 0 && this.root.push(new L("w:qFormat", e3.quickFormat));
          }
        }
        class No extends Io {
          constructor(t3) {
            super({ type: "paragraph", styleId: t3.id }, t3), this.paragraphProperties = new Bn(t3.paragraph), this.runProperties = new St(t3.run), this.root.push(this.paragraphProperties), this.root.push(this.runProperties);
          }
        }
        class Oo extends Io {
          constructor(t3) {
            super({ type: "character", styleId: t3.id }, Object.assign({ uiPriority: 99, unhideWhenUsed: true }, t3)), this.runProperties = new St(t3.run), this.root.push(this.runProperties);
          }
        }
        class Co extends No {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { basedOn: "Normal", next: "Normal", quickFormat: true }));
          }
        }
        class ko extends Co {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "Title", name: "Title" }));
          }
        }
        class Do extends Co {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "Heading1", name: "Heading 1" }));
          }
        }
        class Lo extends Co {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "Heading2", name: "Heading 2" }));
          }
        }
        class Po extends Co {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "Heading3", name: "Heading 3" }));
          }
        }
        class Fo extends Co {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "Heading4", name: "Heading 4" }));
          }
        }
        class Bo extends Co {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "Heading5", name: "Heading 5" }));
          }
        }
        class Mo extends Co {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "Heading6", name: "Heading 6" }));
          }
        }
        class Uo extends Co {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "Strong", name: "Strong" }));
          }
        }
        class zo extends No {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "ListParagraph", name: "List Paragraph", basedOn: "Normal", quickFormat: true }));
          }
        }
        class Ho extends No {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "FootnoteText", name: "footnote text", link: "FootnoteTextChar", basedOn: "Normal", uiPriority: 99, semiHidden: true, unhideWhenUsed: true, paragraph: { spacing: { after: 0, line: 240, lineRule: Wt.AUTO } }, run: { size: 20 } }));
          }
        }
        class jo extends Oo {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "FootnoteReference", name: "footnote reference", basedOn: "DefaultParagraphFont", semiHidden: true, run: { superScript: true } }));
          }
        }
        class Ko extends Oo {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "FootnoteTextChar", name: "Footnote Text Char", basedOn: "DefaultParagraphFont", link: "FootnoteText", semiHidden: true, run: { size: 20 } }));
          }
        }
        class Go extends Oo {
          constructor(t3) {
            super(Object.assign(Object.assign({}, t3), { id: "Hyperlink", name: "Hyperlink", basedOn: "DefaultParagraphFont", run: { color: "0563C1", underline: { type: W.SINGLE } } }));
          }
        }
        class Wo extends s {
          constructor(t3) {
            if (super("w:styles"), t3.initialStyles && this.root.push(t3.initialStyles), t3.importedStyles)
              for (const e3 of t3.importedStyles)
                this.root.push(e3);
            if (t3.paragraphStyles)
              for (const e3 of t3.paragraphStyles)
                this.root.push(new No(e3));
            if (t3.characterStyles)
              for (const e3 of t3.characterStyles)
                this.root.push(new Oo(e3));
          }
        }
        class Vo extends s {
          constructor(t3) {
            super("w:pPrDefault"), this.root.push(new Bn(t3));
          }
        }
        class $o extends s {
          constructor(t3) {
            super("w:rPrDefault"), this.root.push(new St(t3));
          }
        }
        class Xo extends s {
          constructor(t3) {
            super("w:docDefaults"), this.runPropertiesDefaults = new $o(t3.run), this.paragraphPropertiesDefaults = new Vo(t3.paragraph), this.root.push(this.runPropertiesDefaults), this.root.push(this.paragraphPropertiesDefaults);
          }
        }
        class qo {
          newInstance(t3) {
            const e3 = (0, c.xml2js)(t3, { compact: false });
            let r2;
            for (const t4 of e3.elements || [])
              t4.name === "w:styles" && (r2 = t4);
            if (r2 === void 0)
              throw new Error("can not find styles element");
            const n2 = r2.elements || [];
            return new Wo({ initialStyles: new p2(r2.attributes), importedStyles: n2.map((t4) => u(t4)) });
          }
        }
        class Zo {
          newInstance(t3 = {}) {
            var e3;
            return { initialStyles: new An({ mc: "http://schemas.openxmlformats.org/markup-compatibility/2006", r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships", w: "http://schemas.openxmlformats.org/wordprocessingml/2006/main", w14: "http://schemas.microsoft.com/office/word/2010/wordml", w15: "http://schemas.microsoft.com/office/word/2012/wordml", Ignorable: "w14 w15" }), importedStyles: [new Xo((e3 = t3.document) !== null && e3 !== void 0 ? e3 : {}), new ko(Object.assign({ run: { size: 56 } }, t3.title)), new Do(Object.assign({ run: { color: "2E74B5", size: 32 } }, t3.heading1)), new Lo(Object.assign({ run: { color: "2E74B5", size: 26 } }, t3.heading2)), new Po(Object.assign({ run: { color: "1F4D78", size: 24 } }, t3.heading3)), new Fo(Object.assign({ run: { color: "2E74B5", italics: true } }, t3.heading4)), new Bo(Object.assign({ run: { color: "2E74B5" } }, t3.heading5)), new Mo(Object.assign({ run: { color: "1F4D78" } }, t3.heading6)), new Uo(Object.assign({ run: { bold: true } }, t3.strong)), new zo(t3.listParagraph || {}), new Go(t3.hyperlink || {}), new jo(t3.footnoteReference || {}), new Ho(t3.footnoteText || {}), new Ko(t3.footnoteTextChar || {})] };
          }
        }
        class Yo {
          constructor(t3, e3 = {}) {
            var r2, n2, s2, i2, o2, a2;
            if (this.currentRelationshipId = 1, this.headers = [], this.footers = [], this.coreProperties = new Ai(Object.assign(Object.assign({}, t3), { creator: (r2 = t3.creator) !== null && r2 !== void 0 ? r2 : "Un-named", revision: (n2 = t3.revision) !== null && n2 !== void 0 ? n2 : 1, lastModifiedBy: (s2 = t3.lastModifiedBy) !== null && s2 !== void 0 ? s2 : "Un-named" })), this.numbering = new yo(t3.numbering ? t3.numbering : { config: [] }), this.fileRelationships = new On(), this.customProperties = new Ci((i2 = t3.customProperties) !== null && i2 !== void 0 ? i2 : []), this.appProperties = new yi(), this.footnotesWrapper = new Wi(), this.contentTypes = new Ti(), this.documentWrapper = new Cn({ background: t3.background || {} }), this.settings = new Eo({ compatabilityModeVersion: t3.compatabilityModeVersion, evenAndOddHeaders: !!t3.evenAndOddHeaderAndFooters, trackRevisions: (o2 = t3.features) === null || o2 === void 0 ? void 0 : o2.trackRevisions, updateFields: (a2 = t3.features) === null || a2 === void 0 ? void 0 : a2.updateFields }), this.media = e3.template && e3.template.media ? e3.template.media : new qi(), e3.template && (this.currentRelationshipId = e3.template.currentRelationshipId + 1), e3.template && t3.externalStyles)
              throw Error("can not use both template and external styles");
            if (e3.template) {
              const t4 = new qo();
              this.styles = t4.newInstance(e3.template.styles);
            } else if (t3.externalStyles) {
              const e4 = new qo();
              this.styles = e4.newInstance(t3.externalStyles);
            } else if (t3.styles) {
              const e4 = new Zo().newInstance(t3.styles.default);
              this.styles = new Wo(Object.assign(Object.assign({}, e4), t3.styles));
            } else {
              const t4 = new Zo();
              this.styles = new Wo(t4.newInstance());
            }
            if (this.addDefaultRelationships(), e3.template && e3.template.headers)
              for (const t4 of e3.template.headers)
                this.addHeaderToDocument(t4.header, t4.type);
            if (e3.template && e3.template.footers)
              for (const t4 of e3.template.footers)
                this.addFooterToDocument(t4.footer, t4.type);
            for (const e4 of t3.sections)
              this.addSection(e4);
            if (t3.footnotes)
              for (const e4 in t3.footnotes)
                this.footnotesWrapper.View.createFootNote(parseFloat(e4), t3.footnotes[e4].children);
          }
          addSection({ headers: t3 = {}, footers: e3 = {}, children: r2, properties: n2 }) {
            this.documentWrapper.View.Body.addSection(Object.assign(Object.assign({}, n2), { headerWrapperGroup: { default: t3.default ? this.createHeader(t3.default) : void 0, first: t3.first ? this.createHeader(t3.first) : void 0, even: t3.even ? this.createHeader(t3.even) : void 0 }, footerWrapperGroup: { default: e3.default ? this.createFooter(e3.default) : void 0, first: e3.first ? this.createFooter(e3.first) : void 0, even: e3.even ? this.createFooter(e3.even) : void 0 } }));
            for (const t4 of r2)
              this.documentWrapper.View.add(t4);
          }
          createHeader(t3) {
            const e3 = new Xi(this.media, this.currentRelationshipId++);
            for (const r2 of t3.options.children)
              e3.add(r2);
            return this.addHeaderToDocument(e3), e3;
          }
          createFooter(t3) {
            const e3 = new Li(this.media, this.currentRelationshipId++);
            for (const r2 of t3.options.children)
              e3.add(r2);
            return this.addFooterToDocument(e3), e3;
          }
          addHeaderToDocument(t3, e3 = Jt.DEFAULT) {
            this.headers.push({ header: t3, type: e3 }), this.documentWrapper.Relationships.createRelationship(t3.View.ReferenceId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", `header${this.headers.length}.xml`), this.contentTypes.addHeader(this.headers.length);
          }
          addFooterToDocument(t3, e3 = Jt.DEFAULT) {
            this.footers.push({ footer: t3, type: e3 }), this.documentWrapper.Relationships.createRelationship(t3.View.ReferenceId, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", `footer${this.footers.length}.xml`), this.contentTypes.addFooter(this.footers.length);
          }
          addDefaultRelationships() {
            this.fileRelationships.createRelationship(1, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", "word/document.xml"), this.fileRelationships.createRelationship(2, "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", "docProps/core.xml"), this.fileRelationships.createRelationship(3, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", "docProps/app.xml"), this.fileRelationships.createRelationship(4, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties", "docProps/custom.xml"), this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", "styles.xml"), this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", "numbering.xml"), this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", "footnotes.xml"), this.documentWrapper.Relationships.createRelationship(this.currentRelationshipId++, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", "settings.xml");
          }
          get Document() {
            return this.documentWrapper;
          }
          get Styles() {
            return this.styles;
          }
          get CoreProperties() {
            return this.coreProperties;
          }
          get Numbering() {
            return this.numbering;
          }
          get Media() {
            return this.media;
          }
          get FileRelationships() {
            return this.fileRelationships;
          }
          get Headers() {
            return this.headers.map((t3) => t3.header);
          }
          get Footers() {
            return this.footers.map((t3) => t3.footer);
          }
          get ContentTypes() {
            return this.contentTypes;
          }
          get CustomProperties() {
            return this.customProperties;
          }
          get AppProperties() {
            return this.appProperties;
          }
          get FootNotes() {
            return this.footnotesWrapper;
          }
          get Settings() {
            return this.settings;
          }
        }
        const Qo = "";
        class Jo extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { space: "xml:space" };
          }
        }
        class ta extends s {
          constructor(t3 = {}) {
            super("w:instrText"), this.properties = t3, this.root.push(new Jo({ space: j.PRESERVE }));
            let e3 = "TOC";
            this.properties.captionLabel && (e3 = `${e3} \\a "${this.properties.captionLabel}"`), this.properties.entriesFromBookmark && (e3 = `${e3} \\b "${this.properties.entriesFromBookmark}"`), this.properties.captionLabelIncludingNumbers && (e3 = `${e3} \\c "${this.properties.captionLabelIncludingNumbers}"`), this.properties.sequenceAndPageNumbersSeparator && (e3 = `${e3} \\d "${this.properties.sequenceAndPageNumbersSeparator}"`), this.properties.tcFieldIdentifier && (e3 = `${e3} \\f "${this.properties.tcFieldIdentifier}"`), this.properties.hyperlink && (e3 = `${e3} \\h`), this.properties.tcFieldLevelRange && (e3 = `${e3} \\l "${this.properties.tcFieldLevelRange}"`), this.properties.pageNumbersEntryLevelsRange && (e3 = `${e3} \\n "${this.properties.pageNumbersEntryLevelsRange}"`), this.properties.headingStyleRange && (e3 = `${e3} \\o "${this.properties.headingStyleRange}"`), this.properties.entryAndPageNumberSeparator && (e3 = `${e3} \\p "${this.properties.entryAndPageNumberSeparator}"`), this.properties.seqFieldIdentifierForPrefix && (e3 = `${e3} \\s "${this.properties.seqFieldIdentifierForPrefix}"`), this.properties.stylesWithLevels && this.properties.stylesWithLevels.length && (e3 = `${e3} \\t "${this.properties.stylesWithLevels.map((t4) => `${t4.styleName},${t4.level}`).join(",")}"`), this.properties.useAppliedParagraphOutlineLevel && (e3 = `${e3} \\u`), this.properties.preserveTabInEntries && (e3 = `${e3} \\w`), this.properties.preserveNewLineInEntries && (e3 = `${e3} \\x`), this.properties.hideTabAndPageNumbersInWebView && (e3 = `${e3} \\z`), this.root.push(e3);
          }
        }
        class ea extends s {
          constructor() {
            super("w:sdtContent");
          }
        }
        class ra extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { alias: "w:val" };
          }
        }
        class na extends s {
          constructor(t3) {
            super("w:alias"), this.root.push(new ra({ alias: t3 }));
          }
        }
        class sa extends s {
          constructor(t3) {
            super("w:sdtPr"), this.root.push(new na(t3));
          }
        }
        class ia extends s {
          constructor(t3 = "Table of Contents", e3) {
            super("w:sdt"), this.root.push(new sa(t3));
            const r2 = new ea(), n2 = new Mn({ children: [new Ot({ children: [new nt(true), new ta(e3), new st()] })] });
            r2.addChildElement(n2);
            const s2 = new Mn({ children: [new Ot({ children: [new it()] })] });
            r2.addChildElement(s2), this.root.push(r2);
          }
        }
        class oa {
          constructor(t3, e3) {
            this.styleName = t3, this.level = e3;
          }
        }
        class aa {
          constructor(t3 = { children: [] }) {
            this.options = t3;
          }
        }
        class ca {
          constructor(t3 = { children: [] }) {
            this.options = t3;
          }
        }
        class ua extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { id: "w:id" };
          }
        }
        class la extends s {
          constructor(t3) {
            super("w:footnoteReference"), this.root.push(new ua({ id: t3 }));
          }
        }
        class ha extends Ot {
          constructor(t3) {
            super({ style: "FootnoteReference" }), this.root.push(new la(t3));
          }
        }
        class pa extends s {
          constructor(t3) {
            super("w:ins"), this.root.push(new lt({ id: t3.id, author: t3.author, date: t3.date })), this.addChildElement(new Ct(t3));
          }
        }
        class da extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { space: "xml:space" };
          }
        }
        class fa extends s {
          constructor() {
            super("w:delInstrText"), this.root.push(new da({ space: j.PRESERVE })), this.root.push("PAGE");
          }
        }
        class ma extends s {
          constructor() {
            super("w:delInstrText"), this.root.push(new da({ space: j.PRESERVE })), this.root.push("NUMPAGES");
          }
        }
        class wa extends s {
          constructor() {
            super("w:delInstrText"), this.root.push(new da({ space: j.PRESERVE })), this.root.push("SECTIONPAGES");
          }
        }
        class ga extends o {
          constructor() {
            super(...arguments), this.xmlKeys = { space: "xml:space" };
          }
        }
        class ya extends s {
          constructor(t3) {
            super("w:delText"), this.root.push(new ga({ space: j.PRESERVE })), this.root.push(t3);
          }
        }
        class ba extends s {
          constructor(t3) {
            super("w:del"), this.root.push(new lt({ id: t3.id, author: t3.author, date: t3.date })), this.deletedTextRunWrapper = new va(t3), this.addChildElement(this.deletedTextRunWrapper);
          }
        }
        class va extends s {
          constructor(t3) {
            if (super("w:r"), this.root.push(new St(t3)), t3.children)
              for (const e3 of t3.children)
                if (typeof e3 != "string")
                  this.root.push(e3);
                else
                  switch (e3) {
                    case V.CURRENT:
                      this.root.push(new nt()), this.root.push(new fa()), this.root.push(new st()), this.root.push(new it());
                      break;
                    case V.TOTAL_PAGES:
                      this.root.push(new nt()), this.root.push(new ma()), this.root.push(new st()), this.root.push(new it());
                      break;
                    case V.TOTAL_PAGES_IN_SECTION:
                      this.root.push(new nt()), this.root.push(new wa()), this.root.push(new st()), this.root.push(new it());
                      break;
                    default:
                      this.root.push(new ya(e3));
                  }
            else
              t3.text && this.root.push(new ya(t3.text));
            if (t3.break)
              for (let e3 = 0; e3 < t3.break; e3++)
                this.root.splice(1, 0, new et());
          }
        }
        var _a, xa, Ea;
        !function(t3) {
          t3.CENTER = "center", t3.INSIDE = "inside", t3.LEFT = "left", t3.OUTSIDE = "outside", t3.RIGHT = "right";
        }(_a || (_a = {})), function(t3) {
          t3.BOTTOM = "bottom", t3.CENTER = "center", t3.INSIDE = "inside", t3.OUTSIDE = "outside", t3.TOP = "top";
        }(xa || (xa = {})), function(t3) {
          t3.DECIMAL = "decimal", t3.UPPER_ROMAN = "upperRoman", t3.LOWER_ROMAN = "lowerRoman", t3.UPPER_LETTER = "upperLetter", t3.LOWER_LETTER = "lowerLetter", t3.ORDINAL = "ordinal", t3.CARDINAL_TEXT = "cardinalText", t3.ORDINAL_TEXT = "ordinalText", t3.HEX = "hex", t3.CHICAGO = "chicago", t3.IDEOGRAPH_DIGITAL = "ideographDigital", t3.JAPANESE_COUNTING = "japaneseCounting", t3.AIUEO = "aiueo", t3.IROHA = "iroha", t3.DECIMAL_FULL_WIDTH = "decimalFullWidth", t3.DECIMAL_HALF_WIDTH = "decimalHalfWidth", t3.JAPANESE_LEGAL = "japaneseLegal", t3.JAPANESE_DIGITAL_TEN_THOUSAND = "japaneseDigitalTenThousand", t3.DECIMAL_ENCLOSED_CIRCLE = "decimalEnclosedCircle", t3.DECIMAL_FULL_WIDTH_2 = "decimalFullWidth2", t3.AIUEO_FULL_WIDTH = "aiueoFullWidth", t3.IROHA_FULL_WIDTH = "irohaFullWidth", t3.DECIMAL_ZERO = "decimalZero", t3.BULLET = "bullet", t3.GANADA = "ganada", t3.CHOSUNG = "chosung", t3.DECIMAL_ENCLOSED_FULL_STOP = "decimalEnclosedFullstop", t3.DECIMAL_ENCLOSED_PAREN = "decimalEnclosedParen", t3.DECIMAL_ENCLOSED_CIRCLE_CHINESE = "decimalEnclosedCircleChinese", t3.IDEOGRAPH_ENCLOSED_CIRCLE = "ideographEnclosedCircle", t3.IDEOGRAPH_TRADITIONAL = "ideographTraditional", t3.IDEOGRAPH_ZODIAC = "ideographZodiac", t3.IDEOGRAPH_ZODIAC_TRADITIONAL = "ideographZodiacTraditional", t3.TAIWANESE_COUNTING = "taiwaneseCounting", t3.IDEOGRAPH_LEGAL_TRADITIONAL = "ideographLegalTraditional", t3.TAIWANESE_COUNTING_THOUSAND = "taiwaneseCountingThousand", t3.TAIWANESE_DIGITAL = "taiwaneseDigital", t3.CHINESE_COUNTING = "chineseCounting", t3.CHINESE_LEGAL_SIMPLIFIED = "chineseLegalSimplified", t3.CHINESE_COUNTING_TEN_THOUSAND = "chineseCountingThousand", t3.KOREAN_DIGITAL = "koreanDigital", t3.KOREAN_COUNTING = "koreanCounting", t3.KOREAN_LEGAL = "koreanLegal", t3.KOREAN_DIGITAL_2 = "koreanDigital2", t3.VIETNAMESE_COUNTING = "vietnameseCounting", t3.RUSSIAN_LOWER = "russianLower", t3.RUSSIAN_UPPER = "russianUpper", t3.NONE = "none", t3.NUMBER_IN_DASH = "numberInDash", t3.HEBREW_1 = "hebrew1", t3.HEBREW_2 = "hebrew2", t3.ARABIC_ALPHA = "arabicAlpha", t3.ARABIC_ABJAD = "arabicAbjad", t3.HINDI_VOWELS = "hindiVowels", t3.HINDI_CONSONANTS = "hindiConsonants", t3.HINDI_NUMBERS = "hindiNumbers", t3.HINDI_COUNTING = "hindiCounting", t3.THAI_LETTERS = "thaiLetters", t3.THAI_NUMBERS = "thaiNumbers", t3.THAI_COUNTING = "thaiCounting", t3.BAHT_TEXT = "bahtText", t3.DOLLAR_TEXT = "dollarText";
        }(Ea || (Ea = {}));
        var Ta = r(733), Aa = r(479);
        class Sa {
          format(t3, e3 = {}) {
            const r2 = t3.prepForXml(e3);
            if (r2)
              return r2;
            throw Error("XMLComponent did not format correctly");
          }
        }
        class Ra {
          replace(t3, e3, r2) {
            let n2 = t3;
            return e3.forEach((t4, e4) => {
              n2 = n2.replace(new RegExp(`{${t4.fileName}}`, "g"), (r2 + e4).toString());
            }), n2;
          }
          getMediaData(t3, e3) {
            return e3.Array.filter((e4) => t3.search(`{${e4.fileName}}`) > 0);
          }
        }
        class Ia {
          replace(t3, e3) {
            let r2 = t3;
            for (const t4 of e3)
              r2 = r2.replace(new RegExp(`{${t4.reference}-${t4.instance}}`, "g"), t4.numId.toString());
            return r2;
          }
        }
        var Na = function(t3, e3, r2, n2) {
          return new (r2 || (r2 = Promise))(function(s2, i2) {
            function o2(t4) {
              try {
                c2(n2.next(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function a2(t4) {
              try {
                c2(n2.throw(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function c2(t4) {
              var e4;
              t4.done ? s2(t4.value) : (e4 = t4.value, e4 instanceof r2 ? e4 : new r2(function(t5) {
                t5(e4);
              })).then(o2, a2);
            }
            c2((n2 = n2.apply(t3, e3 || [])).next());
          });
        };
        class Oa {
          static toBuffer(t3, e3) {
            return Na(this, void 0, void 0, function* () {
              const r2 = this.compiler.compile(t3, e3);
              return yield r2.generateAsync({ type: "nodebuffer", mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", compression: "DEFLATE" });
            });
          }
          static toBase64String(t3, e3) {
            return Na(this, void 0, void 0, function* () {
              const r2 = this.compiler.compile(t3, e3);
              return yield r2.generateAsync({ type: "base64", mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", compression: "DEFLATE" });
            });
          }
          static toBlob(t3, e3) {
            return Na(this, void 0, void 0, function* () {
              const r2 = this.compiler.compile(t3, e3);
              return yield r2.generateAsync({ type: "blob", mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", compression: "DEFLATE" });
            });
          }
        }
        Oa.compiler = new class {
          constructor() {
            this.formatter = new Sa(), this.imageReplacer = new Ra(), this.numberingReplacer = new Ia();
          }
          compile(t3, e3) {
            const r2 = new Ta(), n2 = this.xmlifyFile(t3, e3), s2 = new Map(Object.entries(n2));
            for (const [, t4] of s2)
              if (Array.isArray(t4))
                for (const e4 of t4)
                  r2.file(e4.path, e4.data);
              else
                r2.file(t4.path, t4.data);
            for (const e4 of t3.Media.Array) {
              const t4 = e4.stream;
              r2.file(`word/media/${e4.fileName}`, t4);
            }
            return r2;
          }
          xmlifyFile(t3, e3) {
            const r2 = t3.Document.Relationships.RelationshipCount + 1, n2 = Aa(this.formatter.format(t3.Document.View, { viewWrapper: t3.Document, file: t3 }), { indent: e3, declaration: { standalone: "yes", encoding: "UTF-8" } }), s2 = this.imageReplacer.getMediaData(n2, t3.Media);
            return { Relationships: { data: (() => (s2.forEach((e4, n3) => {
              t3.Document.Relationships.createRelationship(r2 + n3, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", `media/${e4.fileName}`);
            }), Aa(this.formatter.format(t3.Document.Relationships, { viewWrapper: t3.Document, file: t3 }), { indent: e3, declaration: { encoding: "UTF-8" } })))(), path: "word/_rels/document.xml.rels" }, Document: { data: (() => {
              const e4 = this.imageReplacer.replace(n2, s2, r2);
              return this.numberingReplacer.replace(e4, t3.Numbering.ConcreteNumbering);
            })(), path: "word/document.xml" }, Styles: { data: (() => {
              const r3 = Aa(this.formatter.format(t3.Styles, { viewWrapper: t3.Document, file: t3 }), { indent: e3, declaration: { standalone: "yes", encoding: "UTF-8" } });
              return this.numberingReplacer.replace(r3, t3.Numbering.ConcreteNumbering);
            })(), path: "word/styles.xml" }, Properties: { data: Aa(this.formatter.format(t3.CoreProperties, { viewWrapper: t3.Document, file: t3 }), { indent: e3, declaration: { standalone: "yes", encoding: "UTF-8" } }), path: "docProps/core.xml" }, Numbering: { data: Aa(this.formatter.format(t3.Numbering, { viewWrapper: t3.Document, file: t3 }), { indent: e3, declaration: { standalone: "yes", encoding: "UTF-8" } }), path: "word/numbering.xml" }, FileRelationships: { data: Aa(this.formatter.format(t3.FileRelationships, { viewWrapper: t3.Document, file: t3 }), { indent: e3, declaration: { encoding: "UTF-8" } }), path: "_rels/.rels" }, HeaderRelationships: t3.Headers.map((r3, n3) => {
              const s3 = Aa(this.formatter.format(r3.View, { viewWrapper: r3, file: t3 }), { indent: e3, declaration: { encoding: "UTF-8" } });
              return this.imageReplacer.getMediaData(s3, t3.Media).forEach((t4, e4) => {
                r3.Relationships.createRelationship(e4, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", `media/${t4.fileName}`);
              }), { data: Aa(this.formatter.format(r3.Relationships, { viewWrapper: r3, file: t3 }), { indent: e3, declaration: { encoding: "UTF-8" } }), path: `word/_rels/header${n3 + 1}.xml.rels` };
            }), FooterRelationships: t3.Footers.map((r3, n3) => {
              const s3 = Aa(this.formatter.format(r3.View, { viewWrapper: r3, file: t3 }), { indent: e3, declaration: { encoding: "UTF-8" } });
              return this.imageReplacer.getMediaData(s3, t3.Media).forEach((t4, e4) => {
                r3.Relationships.createRelationship(e4, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", `media/${t4.fileName}`);
              }), { data: Aa(this.formatter.format(r3.Relationships, { viewWrapper: r3, file: t3 }), { indent: e3, declaration: { encoding: "UTF-8" } }), path: `word/_rels/footer${n3 + 1}.xml.rels` };
            }), Headers: t3.Headers.map((r3, n3) => {
              const s3 = Aa(this.formatter.format(r3.View, { viewWrapper: r3, file: t3 }), { indent: e3, declaration: { encoding: "UTF-8" } }), i2 = this.imageReplacer.getMediaData(s3, t3.Media);
              return { data: this.imageReplacer.replace(s3, i2, 0), path: `word/header${n3 + 1}.xml` };
            }), Footers: t3.Footers.map((r3, n3) => {
              const s3 = Aa(this.formatter.format(r3.View, { viewWrapper: r3, file: t3 }), { indent: e3, declaration: { encoding: "UTF-8" } }), i2 = this.imageReplacer.getMediaData(s3, t3.Media);
              return { data: this.imageReplacer.replace(s3, i2, 0), path: `word/footer${n3 + 1}.xml` };
            }), ContentTypes: { data: Aa(this.formatter.format(t3.ContentTypes, { viewWrapper: t3.Document, file: t3 }), { indent: e3, declaration: { encoding: "UTF-8" } }), path: "[Content_Types].xml" }, CustomProperties: { data: Aa(this.formatter.format(t3.CustomProperties, { viewWrapper: t3.Document, file: t3 }), { indent: e3, declaration: { standalone: "yes", encoding: "UTF-8" } }), path: "docProps/custom.xml" }, AppProperties: { data: Aa(this.formatter.format(t3.AppProperties, { viewWrapper: t3.Document, file: t3 }), { indent: e3, declaration: { standalone: "yes", encoding: "UTF-8" } }), path: "docProps/app.xml" }, FootNotes: { data: Aa(this.formatter.format(t3.FootNotes.View, { viewWrapper: t3.FootNotes, file: t3 }), { indent: e3, declaration: { encoding: "UTF-8" } }), path: "word/footnotes.xml" }, FootNotesRelationships: { data: Aa(this.formatter.format(t3.FootNotes.Relationships, { viewWrapper: t3.FootNotes, file: t3 }), { indent: e3, declaration: { encoding: "UTF-8" } }), path: "word/_rels/footnotes.xml.rels" }, Settings: { data: Aa(this.formatter.format(t3.Settings, { viewWrapper: t3.Document, file: t3 }), { indent: e3, declaration: { standalone: "yes", encoding: "UTF-8" } }), path: "word/settings.xml" } };
          }
        }();
        var Ca = function(t3, e3, r2, n2) {
          return new (r2 || (r2 = Promise))(function(s2, i2) {
            function o2(t4) {
              try {
                c2(n2.next(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function a2(t4) {
              try {
                c2(n2.throw(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function c2(t4) {
              var e4;
              t4.done ? s2(t4.value) : (e4 = t4.value, e4 instanceof r2 ? e4 : new r2(function(t5) {
                t5(e4);
              })).then(o2, a2);
            }
            c2((n2 = n2.apply(t3, e3 || [])).next());
          });
        };
        const ka = { "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header": "header", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer": "footer", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image": "image", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink": "hyperlink" };
        var Da;
        !function(t3) {
          t3.HEADER = "header", t3.FOOTER = "footer", t3.IMAGE = "image", t3.HYPERLINK = "hyperlink";
        }(Da || (Da = {}));
        class La {
          extract(t3) {
            return Ca(this, void 0, void 0, function* () {
              const e3 = yield Ta.loadAsync(t3), r2 = yield e3.files["word/document.xml"].async("text"), n2 = yield e3.files["word/_rels/document.xml.rels"].async("text"), s2 = this.extractDocumentRefs(r2), i2 = this.findReferenceFiles(n2), o2 = new qi();
              return { headers: yield this.createHeaders(e3, s2, i2, o2, 0), footers: yield this.createFooters(e3, s2, i2, o2, s2.headers.length), currentRelationshipId: s2.footers.length + s2.headers.length, styles: yield e3.files["word/styles.xml"].async("text"), titlePageIsDefined: this.checkIfTitlePageIsDefined(r2), media: o2 };
            });
          }
          createFooters(t3, e3, r2, n2, s2) {
            return Ca(this, void 0, void 0, function* () {
              const i2 = e3.footers.map((e4, i3) => Ca(this, void 0, void 0, function* () {
                const o2 = r2.find((t4) => t4.id === e4.id);
                if (o2 === null || !o2)
                  throw new Error(`Can not find target file for id ${e4.id}`);
                const a2 = yield t3.files[`word/${o2.target}`].async("text"), l2 = (0, c.xml2js)(a2, { compact: false, captureSpacesBetweenElements: true });
                if (!l2.elements)
                  return;
                const h2 = u(l2.elements.reduce((t4, e5) => e5.name === "w:ftr" ? e5 : t4)), p3 = new Li(n2, s2 + i3, h2);
                return yield this.addRelationshipToWrapper(o2, t3, p3, n2), { type: e4.type, footer: p3 };
              })).filter((t4) => !!t4);
              return Promise.all(i2);
            });
          }
          createHeaders(t3, e3, r2, n2, s2) {
            return Ca(this, void 0, void 0, function* () {
              const i2 = e3.headers.map((e4, i3) => Ca(this, void 0, void 0, function* () {
                const o2 = r2.find((t4) => t4.id === e4.id);
                if (o2 === null || !o2)
                  throw new Error(`Can not find target file for id ${e4.id}`);
                const a2 = yield t3.files[`word/${o2.target}`].async("text"), l2 = (0, c.xml2js)(a2, { compact: false, captureSpacesBetweenElements: true });
                if (!l2.elements)
                  return;
                const h2 = u(l2.elements.reduce((t4, e5) => e5.name === "w:hdr" ? e5 : t4)), p3 = new Xi(n2, s2 + i3, h2);
                return yield this.addRelationshipToWrapper(o2, t3, p3, n2), { type: e4.type, header: p3 };
              })).filter((t4) => !!t4);
              return Promise.all(i2);
            });
          }
          addRelationshipToWrapper(t3, e3, r2, n2) {
            return Ca(this, void 0, void 0, function* () {
              const s2 = e3.files[`word/_rels/${t3.target}.rels`];
              if (!s2)
                return;
              const i2 = yield s2.async("text"), o2 = this.findReferenceFiles(i2).filter((t4) => t4.type === Da.IMAGE), a2 = this.findReferenceFiles(i2).filter((t4) => t4.type === Da.HYPERLINK);
              for (const t4 of o2) {
                const s3 = yield e3.files[`word/${t4.target}`].async("nodebuffer"), i3 = n2.addMedia(s3, { width: 100, height: 100 });
                r2.Relationships.createRelationship(t4.id, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", `media/${i3.fileName}`);
              }
              for (const t4 of a2)
                r2.Relationships.createRelationship(t4.id, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", t4.target, Zt.EXTERNAL);
            });
          }
          findReferenceFiles(t3) {
            const e3 = (0, c.xml2js)(t3, { compact: true });
            return (Array.isArray(e3.Relationships.Relationship) ? e3.Relationships.Relationship : [e3.Relationships.Relationship]).map((t4) => {
              if (t4._attributes === void 0)
                throw Error("relationship element has no attributes");
              return { id: this.parseRefId(t4._attributes.Id), type: ka[t4._attributes.Type], target: t4._attributes.Target };
            }).filter((t4) => t4.type !== null);
          }
          extractDocumentRefs(t3) {
            const e3 = (0, c.xml2js)(t3, { compact: true })["w:document"]["w:body"]["w:sectPr"], r2 = e3["w:headerReference"];
            let n2;
            n2 = r2 === void 0 ? [] : Array.isArray(r2) ? r2 : [r2];
            const s2 = n2.map((t4) => {
              if (t4._attributes === void 0)
                throw Error("header reference element has no attributes");
              return { type: t4._attributes["w:type"], id: this.parseRefId(t4._attributes["r:id"]) };
            }), i2 = e3["w:footerReference"];
            let o2;
            return o2 = i2 === void 0 ? [] : Array.isArray(i2) ? i2 : [i2], { headers: s2, footers: o2.map((t4) => {
              if (t4._attributes === void 0)
                throw Error("footer reference element has no attributes");
              return { type: t4._attributes["w:type"], id: this.parseRefId(t4._attributes["r:id"]) };
            }) };
          }
          checkIfTitlePageIsDefined(t3) {
            return (0, c.xml2js)(t3, { compact: true })["w:document"]["w:body"]["w:sectPr"]["w:titlePg"] !== void 0;
          }
          parseRefId(t3) {
            const e3 = /^rId(\d+)$/.exec(t3);
            if (e3 === null)
              throw new Error("Invalid ref id");
            return parseInt(e3[1], 10);
          }
        }
      })(), n;
    })();
  });
})(build);
async function renderDocx(context) {
  const meetings = context.meetings.map((meeting) => new build.exports.Paragraph({
    heading: build.exports.HeadingLevel.HEADING_3,
    text: meeting
  }));
  const doc = new build.exports.Document({
    sections: [
      {
        children: [
          new build.exports.Paragraph({
            heading: build.exports.HeadingLevel.HEADING_1,
            text: `Course Syllabus - ${context.coursename}`
          }),
          new build.exports.Paragraph(context.introduction),
          new build.exports.Paragraph({
            heading: build.exports.HeadingLevel.HEADING_2,
            text: "Class Meetings"
          }),
          ...meetings
        ]
      }
    ]
  });
  return build.exports.Packer.toBlob(doc);
}
const renderHtml = `
<!doctype html>
<html lang="en">
<head>
<title>Course Syllabus</title>
</head>
  <body>
  <h1>Syllabus for {{ coursename }}</h1>
  <p>{{ introduction }}</p>
  
  {% for meeting in meetings -%}
  <h2>{{ meeting }}</h2>
  
  {% endfor %}
  </body>
  </html>
`;
const renderMd = `
# Syllabus for {{ coursename }}

{{ introduction }}

{% for meeting in meetings -%}
## {{ meeting }}

{% endfor %}
`;
const intro$1 = "Hello and welcome to this course! The Duke Honor Code applies to all assignments, quizzes, and exams.";
async function generateFile(data) {
  const meetings = getMeetDates(Number(data.get("termNum")), data.getAll("weekday").map((val) => Number(val)), data.get("dateformat"));
  const coursename = data.get("coursename");
  const context = {
    introduction: intro$1,
    meetings,
    coursename
  };
  let blob;
  switch (data.get("fileformat")) {
    case ".md":
      blob = new Blob([nunjucks.renderString(renderMd, context)], {
        type: "octet/stream"
      });
      break;
    case ".html":
      blob = new Blob([nunjucks.renderString(renderHtml, context)], {
        type: "octet/stream"
      });
      break;
    case ".docx":
      blob = await renderDocx(context);
      break;
    default:
      blob = new Blob([meetings.join("\n")], { type: "octet/stream" });
  }
  return blob;
}
const renderPreview = `
  <h4>Syllabus for {{ coursename }}</h4>
  <p>{{ introduction }}</p>

  {% for meeting in meetings -%}
  <h5>{{ meeting }}</h5>

  {% endfor %}
`;
const intro = "Hello and welcome to this course! The Duke Honor Code applies to all assignments, quizzes, and exams.";
async function generatePreview(data) {
  const meetings = getMeetDates(Number(data.get("termNum")), data.getAll("weekday").map((val) => Number(val)), data.get("dateformat"));
  const coursename = data.get("coursename");
  const context = {
    introduction: intro,
    meetings,
    coursename
  };
  const output = nunjucks.renderString(renderPreview, context);
  return output;
}
var app = "";
(function main() {
  window.onload = () => {
    const terms2 = document.getElementById("terms");
    calendar.terms.forEach((term, index) => {
      const opt = document.createElement("option");
      opt.setAttribute("value", String(index));
      opt.innerHTML = term.name;
      terms2 == null ? void 0 : terms2.appendChild(opt);
    });
    const form = document.querySelector("form");
    const enableSchedule = document.getElementById("enableSchedule");
    if (form) {
      form.onsubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        if (!enableSchedule.checked) {
          data.delete("weekday");
        }
        const blob = await generateFile(data);
        FileSaver_min.exports.saveAs(blob, `syllabus${data.get("fileformat") || ".txt"}`);
      };
    }
    const fileformat = document.getElementById("fileformat");
    function toggleDownloadState(e) {
      const option = e.target.value;
      const download = document.getElementById("download");
      if (option !== 0 && download) {
        download.disabled = false;
      }
      if (option === 0) {
        download.disabled = true;
      }
    }
    fileformat == null ? void 0 : fileformat.addEventListener("change", toggleDownloadState);
    if (form) {
      enableSchedule.onchange = async (e) => {
        var _a, _b;
        if (e.target.checked) {
          (_a = document.getElementById("schedule")) == null ? void 0 : _a.classList.remove("d-none");
        }
        if (!e.target.checked) {
          (_b = document.getElementById("schedule")) == null ? void 0 : _b.classList.add("d-none");
        }
      };
      form.onchange = async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        if (!enableSchedule.checked) {
          data.delete("weekday");
        }
        const response = await generatePreview(data);
        const generated = document.getElementById("generated");
        if (generated) {
          generated.innerHTML = response;
        }
      };
    }
  };
})();
