"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps),
  "movieContext": () => (/* binding */ movieContext)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/public/header_bg.png
/* harmony default export */ const header_bg = ({"src":"/_next/static/media/header_bg.fecde43e.png","height":792,"width":2400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAT0lEQVR42hXIRw6AIBAAQBK9WCgrdQkioBAx/v99xjkOAcYEpx61R6ckb+16754Ckn+drfkwxs5CLuPg1lUCENgg7qHnFDWq8wl0rsuEpXzzbwaRowbwrgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./src/components/DeleteMovie.tsx

function DeleteMvoie(_ref) {
  var onConfirm = _ref.onConfirm,
      onClose = _ref.onClose;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "delete-movie-box modal"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    className: "close",
    onClick: function onClick() {
      return onClose();
    }
  }, "x"), /*#__PURE__*/external_react_default().createElement("h2", null, "Delete Movie"), /*#__PURE__*/external_react_default().createElement("p", null, "Are you sure you want to delete this movie?"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "modal-buttons"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    className: "confirm",
    onClick: function onClick() {
      return onConfirm();
    }
  }, "Confirm"))));
}
;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/services/hooks.ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useComponentVisible(initialIsVisible) {
  var _useState = (0,external_react_.useState)(initialIsVisible),
      _useState2 = _slicedToArray(_useState, 2),
      isComponentVisible = _useState2[0],
      setIsComponentVisible = _useState2[1];

  var ref = (0,external_react_.useRef)(null);

  var handleClickOutside = function handleClickOutside(event) {
    if (ref.current !== null && ref.current !== undefined && ref.current.contains(event.target) === false) {
      setIsComponentVisible(false);
    } else {
      setIsComponentVisible(true);
    }
  };

  (0,external_react_.useEffect)(function () {
    document.addEventListener('click', handleClickOutside, true);
    return function () {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  return {
    ref: ref,
    isComponentVisible: isComponentVisible,
    setIsComponentVisible: setIsComponentVisible
  };
}
;// CONCATENATED MODULE: ./src/components/CheckList.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CheckList_slicedToArray(arr, i) { return CheckList_arrayWithHoles(arr) || CheckList_iterableToArrayLimit(arr, i) || CheckList_unsupportedIterableToArray(arr, i) || CheckList_nonIterableRest(); }

function CheckList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function CheckList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return CheckList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return CheckList_arrayLikeToArray(o, minLen); }

function CheckList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CheckList_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function CheckList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function CheckList(_ref) {
  var value = _ref.value,
      onSelected = _ref.onSelected;

  var _useComponentVisible = useComponentVisible(true),
      ref = _useComponentVisible.ref,
      isComponentVisible = _useComponentVisible.isComponentVisible;

  var DEFAULT_GENRES = ['Adventure', 'Comedy', 'Drama', 'Science Fiction', 'War', 'Romance', 'Horror', 'Action', 'Thriller', 'Mystery', 'Fantasy', 'Animation', 'Family', 'Music', 'Crime', 'Western', 'History'];
  var opts = DEFAULT_GENRES.map(function (x) {
    return {
      checked: value.find(function (v) {
        return v === x;
      }) !== undefined,
      value: x
    };
  });

  var _useState = (0,external_react_.useState)(false),
      _useState2 = CheckList_slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var updateSelcted = function updateSelcted(item) {
    var updated = opts.map(function (x) {
      return _objectSpread(_objectSpread({}, x), {}, {
        checked: x.value === item ? !x.checked : x.checked
      });
    });
    onSelected(updated.filter(function (x) {
      return x.checked;
    }).map(function (x) {
      return x.value;
    }));
  };

  (0,external_react_.useEffect)(function () {
    if (!isComponentVisible) {
      setIsOpen(false);
    }
  }, [isComponentVisible]);
  var fullSelection = (0,external_react_.useMemo)(function () {
    return value.length > 0 ? value.join(', ') : 'Select Genre';
  }, [value]);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "list-droprown"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: isOpen ? 'open' : '',
    title: fullSelection
  }, fullSelection), isOpen && /*#__PURE__*/external_react_default().createElement("ul", {
    ref: ref,
    className: "checkbox-list"
  }, opts.map(function (x, i) {
    return /*#__PURE__*/external_react_default().createElement("li", {
      key: x.value
    }, " ", /*#__PURE__*/external_react_default().createElement("label", {
      htmlFor: "check".concat(i)
    }, " ", /*#__PURE__*/external_react_default().createElement("input", {
      id: "check".concat(i),
      type: "checkbox",
      checked: x.checked,
      onChange: function onChange() {
        return updateSelcted(x.value);
      }
    }), x.value));
  })));
}
CheckList.defaultProps = {
  value: []
};
CheckList.propTypes = {
  value: (external_prop_types_default()).array
};
// EXTERNAL MODULE: ./src/services/moviesService.ts
var moviesService = __webpack_require__(6256);
;// CONCATENATED MODULE: ./src/components/EditMovie.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function EditMovie_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EditMovie_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EditMovie_ownKeys(Object(source), !0).forEach(function (key) { EditMovie_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EditMovie_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function EditMovie_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function EditMovie_slicedToArray(arr, i) { return EditMovie_arrayWithHoles(arr) || EditMovie_iterableToArrayLimit(arr, i) || EditMovie_unsupportedIterableToArray(arr, i) || EditMovie_nonIterableRest(); }

function EditMovie_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function EditMovie_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return EditMovie_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return EditMovie_arrayLikeToArray(o, minLen); }

function EditMovie_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function EditMovie_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function EditMovie_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function EditMovie(_ref) {
  var movie = _ref.movie,
      isEdit = _ref.isEdit,
      onClose = _ref.onClose;

  var _useAddMovieMutation = (0,moviesService/* useAddMovieMutation */.nv)(),
      _useAddMovieMutation2 = EditMovie_slicedToArray(_useAddMovieMutation, 2),
      addMovieCall = _useAddMovieMutation2[0],
      _useAddMovieMutation3 = _useAddMovieMutation2[1],
      error = _useAddMovieMutation3.error,
      isSuccess = _useAddMovieMutation3.isSuccess;

  var _useEditMovieMutation = (0,moviesService/* useEditMovieMutation */.Im)(),
      _useEditMovieMutation2 = EditMovie_slicedToArray(_useEditMovieMutation, 2),
      editMovieCall = _useEditMovieMutation2[0],
      _useEditMovieMutation3 = _useEditMovieMutation2[1],
      errorEdit = _useEditMovieMutation3.error,
      isSuccessEdit = _useEditMovieMutation3.isSuccess;

  var _useState = (0,external_react_.useState)([]),
      _useState2 = EditMovie_slicedToArray(_useState, 2),
      updateErrors = _useState2[0],
      setUpdateErrors = _useState2[1];

  var formatDate = function formatDate(date) {
    var offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - offset * 60 * 1000);
    return date.toISOString().split('T')[0];
  };

  var clearForm = {
    title: '',
    poster_path: '',
    release_date: formatDate(new Date()),
    vote_average: 0,
    runtime: 0,
    overview: '',
    genres: []
  };
  var title = movie.title,
      poster_path = movie.poster_path,
      release_date = movie.release_date,
      vote_average = movie.vote_average,
      runtime = movie.runtime,
      overview = movie.overview,
      genres = movie.genres; // eslint-disable-line @typescript-eslint/naming-convention

  var initialValues = {
    title: title,
    poster_path: poster_path,
    release_date: release_date,
    vote_average: vote_average,
    runtime: runtime,
    overview: overview,
    genres: genres
  }; // eslint-disable-line @typescript-eslint/naming-convention

  (0,external_react_.useEffect)(function () {
    if (isSuccess || isSuccessEdit) {
      onClose();
    }
  }, [onClose, isSuccess, isSuccessEdit]);
  (0,external_react_.useEffect)(function () {
    var errorMessages = {
      messages: []
    };

    if (error !== undefined && 'data' in error) {
      errorMessages = error.data;
    }

    if (errorEdit !== undefined && 'data' in errorEdit) {
      errorMessages = errorEdit.data;
    }

    setUpdateErrors(errorMessages.messages);
  }, [error, errorEdit]);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "edit-movie-box modal"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    className: "close",
    onClick: function onClick() {
      return onClose();
    }
  }, "x"), /*#__PURE__*/external_react_default().createElement("h2", null, isEdit ? 'Edit' : 'Add', " Movie"), /*#__PURE__*/external_react_default().createElement(external_formik_namespaceObject.Formik, {
    initialValues: initialValues,
    onSubmit: /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!isEdit) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return editMovieCall(EditMovie_objectSpread({
                  id: movie.id
                }, values));

              case 3:
                _context.next = 7;
                break;

              case 5:
                _context.next = 7;
                return addMovieCall(values);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  }, function (_ref3) {
    var values = _ref3.values,
        handleChange = _ref3.handleChange,
        handleBlur = _ref3.handleBlur,
        handleSubmit = _ref3.handleSubmit,
        setFieldValue = _ref3.setFieldValue,
        resetForm = _ref3.resetForm;
    return /*#__PURE__*/external_react_default().createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/external_react_default().createElement("div", {
      className: "layout"
    }, /*#__PURE__*/external_react_default().createElement("div", {
      className: "top-errors"
    }, updateErrors.length > 0 && /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("ul", null, updateErrors.map(function (x, i) {
      return /*#__PURE__*/external_react_default().createElement("li", {
        key: i
      }, x);
    })))), /*#__PURE__*/external_react_default().createElement("div", {
      className: "left"
    }, /*#__PURE__*/external_react_default().createElement("label", null, "Title:", /*#__PURE__*/external_react_default().createElement("input", {
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.title,
      type: "text",
      name: "title",
      placeholder: "Select Title"
    })), /*#__PURE__*/external_react_default().createElement("label", null, "Movie URL:", /*#__PURE__*/external_react_default().createElement("input", {
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.poster_path,
      type: "text",
      name: "poster_path",
      placeholder: "https://"
    })), /*#__PURE__*/external_react_default().createElement("span", null, "Genre:", /*#__PURE__*/external_react_default().createElement(CheckList, {
      onSelected: function onSelected(vals) {
        return setFieldValue('genres', vals);
      },
      value: values.genres
    }))), /*#__PURE__*/external_react_default().createElement("div", {
      className: "right"
    }, /*#__PURE__*/external_react_default().createElement("label", null, "Release Date:", /*#__PURE__*/external_react_default().createElement("input", {
      onChange: function onChange(e) {
        return setFieldValue('release_date', e.target.value);
      },
      onBlur: handleBlur,
      value: values.release_date,
      type: "date",
      name: "release_date"
    })), /*#__PURE__*/external_react_default().createElement("label", null, "Rating:", /*#__PURE__*/external_react_default().createElement("input", {
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.vote_average,
      type: "number",
      name: "vote_average",
      placeholder: "7.8"
    })), /*#__PURE__*/external_react_default().createElement("label", null, "Runtime:", /*#__PURE__*/external_react_default().createElement("input", {
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.runtime,
      type: "number",
      name: "runtime",
      placeholder: "minutes"
    }))), /*#__PURE__*/external_react_default().createElement("div", {
      className: "bottom"
    }, /*#__PURE__*/external_react_default().createElement("label", null, "Overview:", /*#__PURE__*/external_react_default().createElement("textarea", {
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.overview,
      rows: 5,
      name: "overview",
      placeholder: "Movie description"
    })))), /*#__PURE__*/external_react_default().createElement("div", {
      className: "modal-buttons"
    }, /*#__PURE__*/external_react_default().createElement("button", {
      type: "reset",
      onClick: function onClick() {
        return resetForm({
          values: clearForm
        });
      }
    }, "Reset"), /*#__PURE__*/external_react_default().createElement("button", {
      type: "submit",
      className: "confirm"
    }, "Submit")));
  })));
}
EditMovie.defaultProps = {
  isEdit: false
};
EditMovie.propTypes = {
  isEdit: (external_prop_types_default()).bool,
  movie: (external_prop_types_default()).object
};
;// CONCATENATED MODULE: ./src/components/ErrorBoundary.tsx
function ErrorBoundary_typeof(obj) { "@babel/helpers - typeof"; return ErrorBoundary_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ErrorBoundary_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (ErrorBoundary_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ErrorBoundary = /*#__PURE__*/function (_Component) {
  _inherits(ErrorBoundary, _Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "render",
    value: // componentDidCatch(args: any): void {
    //   // You can also log the error to an error reporting service
    //   //  logErrorToMyService(error, errorInfo);
    //   this.setState({ hasError: true });
    // }
    function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return /*#__PURE__*/external_react_default().createElement("p", null, "Something went wrong.");
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      console.log(error);
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(external_react_.Component);


// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Logo.tsx


function Logo() {
  return /*#__PURE__*/external_react_default().createElement((link_default()), {
    href: "/"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: "logo"
  }, /*#__PURE__*/external_react_default().createElement("b", null, "netflix"), "roulette"));
}
;// CONCATENATED MODULE: ./src/components/Footer.tsx


function Footer() {
  return /*#__PURE__*/external_react_default().createElement("footer", null, /*#__PURE__*/external_react_default().createElement(Logo, null));
}
;// CONCATENATED MODULE: ./src/components/Header.tsx



function Header(_ref) {
  var onAddMovie = _ref.onAddMovie;

  var _useContext = (0,external_react_.useContext)(movieContext),
      clickMovie = _useContext.clickMovie,
      setClickedMovie = _useContext.setClickedMovie;

  return /*#__PURE__*/external_react_default().createElement("header", null, /*#__PURE__*/external_react_default().createElement(Logo, null), clickMovie !== null ? /*#__PURE__*/external_react_default().createElement("button", {
    onClick: function onClick() {
      return setClickedMovie(null);
    },
    className: "search-icon"
  }) : /*#__PURE__*/external_react_default().createElement("button", {
    onClick: function onClick() {
      return onAddMovie();
    },
    className: "btn"
  }, "+ Add Movie"));
}
;// CONCATENATED MODULE: ./src/models/interfaces.ts
var IMG_FALLBACK = 'https://via.placeholder.com/320x455';
;// CONCATENATED MODULE: ./src/models/mocks.ts
var genres = ['all', 'documentary', 'comedy', 'horror', 'crime'];
var EmptyMovie = {
  budget: 0,
  genres: [],
  id: 0,
  overview: '',
  poster_path: '',
  release_date: '',
  revenue: 0,
  runtime: 0,
  tagline: '',
  title: '',
  vote_average: 0,
  vote_count: 0
};
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/components/Movie.tsx
function Movie_slicedToArray(arr, i) { return Movie_arrayWithHoles(arr) || Movie_iterableToArrayLimit(arr, i) || Movie_unsupportedIterableToArray(arr, i) || Movie_nonIterableRest(); }

function Movie_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Movie_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Movie_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Movie_arrayLikeToArray(o, minLen); }

function Movie_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Movie_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Movie_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Movie(_ref) {
  var movie = _ref.movie,
      deleteMovie = _ref.deleteMovie,
      editMovie = _ref.editMovie;
  var router = (0,router_namespaceObject.useRouter)();
  var year = new Date(movie.release_date).getFullYear();

  var _useState = (0,external_react_.useState)(false),
      _useState2 = Movie_slicedToArray(_useState, 2),
      openMenu = _useState2[0],
      setOpenMenu = _useState2[1];

  var flipMenu = function flipMenu() {
    return setOpenMenu(!openMenu);
  };

  var goTo = function goTo() {
    var search = "movieId=".concat(movie.id);
    void router.push("/search?".concat(search));
  };

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "movie-wrapper"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "img-wrapper"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    onClick: function onClick() {
      return flipMenu();
    }
  }), openMenu && /*#__PURE__*/external_react_default().createElement("div", {
    className: "movie-opts"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    className: "close",
    onClick: function onClick() {
      return flipMenu();
    }
  }, "x"), /*#__PURE__*/external_react_default().createElement("ul", null, /*#__PURE__*/external_react_default().createElement("li", null, /*#__PURE__*/external_react_default().createElement("button", {
    onClick: function onClick() {
      flipMenu();
      editMovie();
    }
  }, "Edit")), /*#__PURE__*/external_react_default().createElement("li", null, /*#__PURE__*/external_react_default().createElement("button", {
    onClick: function onClick() {
      flipMenu();
      deleteMovie();
    }
  }, "Delete")))), /*#__PURE__*/external_react_default().createElement("img", {
    onClick: function onClick() {
      return goTo();
    },
    onError: function onError(_ref2) {
      var currentTarget = _ref2.currentTarget;
      currentTarget.onerror = null;
      currentTarget.src = IMG_FALLBACK;
    },
    src: movie.poster_path,
    width: "100%",
    height: "100%",
    alt: movie.title
  })), /*#__PURE__*/external_react_default().createElement("h5", null, movie.title, " ", /*#__PURE__*/external_react_default().createElement("span", null, year)), /*#__PURE__*/external_react_default().createElement("h6", null, movie.genres.join(', ')));
}
Movie.defaultProps = {
  movie: EmptyMovie
};
Movie.propTypes = {
  movie: (external_prop_types_default()).object.isRequired,
  deleteMovie: (external_prop_types_default()).func.isRequired,
  editMovie: (external_prop_types_default()).func.isRequired
};
;// CONCATENATED MODULE: ./src/components/MovieControls.tsx
function MovieControls_slicedToArray(arr, i) { return MovieControls_arrayWithHoles(arr) || MovieControls_iterableToArrayLimit(arr, i) || MovieControls_unsupportedIterableToArray(arr, i) || MovieControls_nonIterableRest(); }

function MovieControls_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function MovieControls_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return MovieControls_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return MovieControls_arrayLikeToArray(o, minLen); }

function MovieControls_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MovieControls_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function MovieControls_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function MovieContros(_ref) {
  var genres = _ref.genres,
      selected = _ref.selected,
      count = _ref.count,
      sortSelected = _ref.sortSelected;
  var router = (0,router_namespaceObject.useRouter)();
  var sortOpts = ['Release Date', 'Rating', 'Popular'];

  var _useState = (0,external_react_.useState)(genres[0]),
      _useState2 = MovieControls_slicedToArray(_useState, 2),
      selectedGenre = _useState2[0],
      setSelectedGenre = _useState2[1];

  var _useState3 = (0,external_react_.useState)(false),
      _useState4 = MovieControls_slicedToArray(_useState3, 2),
      openBox = _useState4[0],
      setOpenBox = _useState4[1];

  var _useState5 = (0,external_react_.useState)(sortOpts[0]),
      _useState6 = MovieControls_slicedToArray(_useState5, 2),
      selectedSort = _useState6[0],
      setSelectedSort = _useState6[1];

  var _useState7 = (0,external_react_.useState)(''),
      _useState8 = MovieControls_slicedToArray(_useState7, 2),
      selectedSortDisplay = _useState8[0],
      setSelectedSortDisplay = _useState8[1];

  var goTo = function goTo(search) {
    var basePath = router.asPath.split('?')[0];
    void router.push("".concat(basePath).concat(search));
  };

  var handleClick = function handleClick(selected) {
    var genre = selected !== 'all' ? selected.toLocaleLowerCase() : '';
    var selectedSortByQuery = "?sortBy=".concat(selectedSort);
    var selectedGenreQuery = genre !== '' ? "&genre=".concat(genre) : '';
    goTo(selectedSortByQuery + selectedGenreQuery);
  };

  var handleSortSelected = function handleSortSelected(selected) {
    var selectedSortBy = '';

    switch (selected) {
      case 'Release Date':
        selectedSortBy = 'release_date';
        break;

      case 'Rating':
        selectedSortBy = 'vote_average';
        break;

      case 'Popular':
        selectedSortBy = 'vote_count';
        break;

      default:
        selectedSortBy = selected;
    }

    var selectedSortByQuery = "?sortBy=".concat(selectedSortBy);
    var selectedGenreQuery = selectedGenre !== '' ? "&genre=".concat(selectedGenre) : '';
    setOpenBox(false);
    goTo(selectedSortByQuery + selectedGenreQuery);
  };

  (0,external_react_.useEffect)(function () {
    setSelectedGenre(selected);
    setSelectedSort(sortSelected);

    switch (sortSelected) {
      case 'release_date':
        setSelectedSortDisplay('Release Date');
        break;

      case 'vote_average':
        setSelectedSortDisplay('Rating');
        break;

      case 'vote_count':
        setSelectedSortDisplay('Popular');
        break;

      default:
        setSelectedSortDisplay(sortSelected);
    }
  }, [selected, sortSelected]);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "controls"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "genre-selector"
  }, genres.map(function (x, i) {
    return /*#__PURE__*/external_react_default().createElement("button", {
      onClick: function onClick() {
        return handleClick(x);
      },
      className: selectedGenre === x ? 'selected' : '',
      key: i
    }, x);
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "sort-selector"
  }, /*#__PURE__*/external_react_default().createElement("span", null, "Sort By:"), " ", /*#__PURE__*/external_react_default().createElement("button", {
    onClick: function onClick() {
      return setOpenBox(!openBox);
    }
  }, selectedSortDisplay), openBox && /*#__PURE__*/external_react_default().createElement("ul", {
    className: "sort-options"
  }, sortOpts.map(function (x, i) {
    return /*#__PURE__*/external_react_default().createElement("li", {
      key: i
    }, /*#__PURE__*/external_react_default().createElement("button", {
      onClick: function onClick() {
        return handleSortSelected(x);
      }
    }, x));
  }))), /*#__PURE__*/external_react_default().createElement("p", {
    className: "result-count"
  }, /*#__PURE__*/external_react_default().createElement("b", null, count), " movies found"));
}
MovieContros.defaultProps = {
  count: 0,
  genres: [],
  selected: '',
  sortSelected: ''
};
MovieContros.propTypes = {
  count: (external_prop_types_default()).number.isRequired,
  genres: external_prop_types_default().arrayOf((external_prop_types_default()).string).isRequired
};
;// CONCATENATED MODULE: ./src/components/Search.tsx
function Search_slicedToArray(arr, i) { return Search_arrayWithHoles(arr) || Search_iterableToArrayLimit(arr, i) || Search_unsupportedIterableToArray(arr, i) || Search_nonIterableRest(); }

function Search_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Search_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Search_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Search_arrayLikeToArray(o, minLen); }

function Search_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Search_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Search_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Search(_ref) {
  var query = _ref.query;
  var router = (0,router_namespaceObject.useRouter)();

  var _useState = (0,external_react_.useState)(''),
      _useState2 = Search_slicedToArray(_useState, 2),
      searchValue = _useState2[0],
      setSearchValue = _useState2[1];

  var search = function search() {
    void router.push("/search".concat(searchValue !== '' ? "/".concat(searchValue) : ''));
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      search();
    }
  };

  (0,external_react_.useEffect)(function () {
    setSearchValue(query);
  }, [query]);
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "search-box"
  }, /*#__PURE__*/external_react_default().createElement("h3", null, "Find your movie"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "search-input"
  }, /*#__PURE__*/external_react_default().createElement("input", {
    value: searchValue,
    onKeyDown: function onKeyDown(e) {
      return handleKeyDown(e);
    },
    onChange: function onChange(e) {
      return setSearchValue(e.target.value);
    },
    placeholder: "What do you want to search?"
  }), /*#__PURE__*/external_react_default().createElement("button", {
    className: "btn",
    onClick: function onClick() {
      return search();
    }
  }, "Search")));
}
;// CONCATENATED MODULE: ./src/components/SelectedMovie.tsx


function SelectedMovie(_ref) {
  var movie = _ref.movie;
  var year = new Date(movie.release_date).getFullYear();
  var hours = Math.floor(movie.runtime / 60);
  var minutes = movie.runtime % 60;
  var runtime = "".concat(hours, "h").concat(minutes > 0 ? " ".concat(minutes, "m") : '');
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "top-selected-movie"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/external_react_default().createElement("img", {
    onError: function onError(_ref2) {
      var currentTarget = _ref2.currentTarget;
      currentTarget.onerror = null;
      currentTarget.src = IMG_FALLBACK;
    },
    src: movie.poster_path,
    width: "100%",
    height: "100%"
  })), /*#__PURE__*/external_react_default().createElement("div", {
    className: "right"
  }, /*#__PURE__*/external_react_default().createElement("h3", null, movie.title, " ", /*#__PURE__*/external_react_default().createElement("span", null, movie.vote_average)), /*#__PURE__*/external_react_default().createElement("p", {
    className: "genre"
  }, movie.genres.join(', ')), /*#__PURE__*/external_react_default().createElement("p", {
    className: "meta"
  }, year, " ", /*#__PURE__*/external_react_default().createElement("span", {
    className: "runtime"
  }, runtime)), /*#__PURE__*/external_react_default().createElement("p", {
    className: "summary"
  }, movie.overview)));
}
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9332);
// EXTERNAL MODULE: ./src/store/store.ts
var store = __webpack_require__(9633);
;// CONCATENATED MODULE: ./src/pages/index.tsx
function pages_typeof(obj) { "@babel/helpers - typeof"; return pages_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, pages_typeof(obj); }

function pages_slicedToArray(arr, i) { return pages_arrayWithHoles(arr) || pages_iterableToArrayLimit(arr, i) || pages_unsupportedIterableToArray(arr, i) || pages_nonIterableRest(); }

function pages_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function pages_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return pages_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return pages_arrayLikeToArray(o, minLen); }

function pages_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function pages_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function pages_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function pages_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ pages_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == pages_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function pages_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function pages_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { pages_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { pages_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

















var movieContext = /*#__PURE__*/external_react_default().createContext(null);
var getServerSideProps = store/* wrapper.getServerSideProps */.Y.getServerSideProps(function (store) {
  return /*#__PURE__*/function () {
    var _ref = pages_asyncToGenerator( /*#__PURE__*/pages_regeneratorRuntime().mark(function _callee(context) {
      var params, query, sortBy, filter, search, _params$genre, _params$sortByQuery, genre, sortByQuery, args;

      return pages_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = context.params, query = context.query;
              sortBy = 'vote_count';
              filter = '';
              search = '';

              if (query !== undefined) {
                search = query.queryParam !== undefined ? query.queryParam[0] : '';
              }

              if (params !== undefined) {
                genre = (_params$genre = params.genre) !== null && _params$genre !== void 0 ? _params$genre : '';
                sortByQuery = (_params$sortByQuery = params.sortByQuery) !== null && _params$sortByQuery !== void 0 ? _params$sortByQuery : ''; // const movieId = params.movieId ?? ''

                if (genre.length > 0) {
                  filter = genre[0] === 'All' ? '' : genre[0];
                }

                if (sortByQuery.length > 0) {
                  sortBy = sortByQuery[0];
                }
              }

              args = {
                sortBy: sortBy,
                filter: filter,
                search: search
              };
              store.dispatch(moviesService/* apiSlice.endpoints.getMovies.initiate */.gk.endpoints.getMovies.initiate(args));
              _context.next = 10;
              return Promise.all(store.dispatch(moviesService/* apiSlice.util.getRunningQueriesThunk */.gk.util.getRunningQueriesThunk()));

            case 10:
              return _context.abrupt("return", {
                props: {}
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
});

function HomePage() {
  var router = (0,router_namespaceObject.useRouter)();
  var searchParams = (0,navigation.useSearchParams)();

  var _useState = (0,external_react_.useState)(false),
      _useState2 = pages_slicedToArray(_useState, 2),
      openConfirmBox = _useState2[0],
      setOpenConfirmBox = _useState2[1];

  var _useState3 = (0,external_react_.useState)(false),
      _useState4 = pages_slicedToArray(_useState3, 2),
      openEditBox = _useState4[0],
      setOpenEditBox = _useState4[1];

  var _useState5 = (0,external_react_.useState)(false),
      _useState6 = pages_slicedToArray(_useState5, 2),
      isEditMovie = _useState6[0],
      setIsEditMovie = _useState6[1];

  var _useState7 = (0,external_react_.useState)(EmptyMovie),
      _useState8 = pages_slicedToArray(_useState7, 2),
      selectedMovie = _useState8[0],
      setSelectedMovie = _useState8[1];

  var _useState9 = (0,external_react_.useState)(null),
      _useState10 = pages_slicedToArray(_useState9, 2),
      clickMovie = _useState10[0],
      setClickedMovie = _useState10[1];

  var _useState11 = (0,external_react_.useState)('vote_count'),
      _useState12 = pages_slicedToArray(_useState11, 2),
      sortBy = _useState12[0],
      setSortBy = _useState12[1];

  var _useState13 = (0,external_react_.useState)(''),
      _useState14 = pages_slicedToArray(_useState13, 2),
      filter = _useState14[0],
      setFilter = _useState14[1];

  var _useState15 = (0,external_react_.useState)(''),
      _useState16 = pages_slicedToArray(_useState15, 2),
      search = _useState16[0],
      setSearch = _useState16[1];

  var _useGetMoviesQuery = (0,moviesService/* useGetMoviesQuery */.U9)({
    sortBy: sortBy,
    filter: filter,
    search: search
  }),
      movies = _useGetMoviesQuery.data;

  var _useDeleteMovieMutati = (0,moviesService/* useDeleteMovieMutation */.oC)(),
      _useDeleteMovieMutati2 = pages_slicedToArray(_useDeleteMovieMutati, 1),
      deleteMovieCall = _useDeleteMovieMutati2[0];

  var _editMovie = (0,external_react_.useCallback)(function (movie) {
    setSelectedMovie(movie);
    setOpenEditBox(true);
    setIsEditMovie(true);
  }, []);

  var _deleteMovie = (0,external_react_.useCallback)(function (movie) {
    setOpenConfirmBox(true);
    setSelectedMovie(movie);
  }, []);

  var onConfirm = /*#__PURE__*/function () {
    var _ref2 = pages_asyncToGenerator( /*#__PURE__*/pages_regeneratorRuntime().mark(function _callee2() {
      return pages_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return deleteMovieCall(selectedMovie.id);

            case 2:
              setOpenConfirmBox(false);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onConfirm() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onClose = function onClose() {
    setOpenConfirmBox(false);
    setOpenEditBox(false);
  };

  var addMovie = function addMovie() {
    setOpenEditBox(true);
    setSelectedMovie(EmptyMovie);
    setIsEditMovie(false);
  };

  var queryMatcher = '';
  (0,external_react_.useEffect)(function () {
    var _searchParams$get, _searchParams$get2, _searchParams$get3;

    var queryParam = router.query.queryParam;
    var dataquery = queryParam !== undefined ? queryParam[0] : '';
    setSearch(dataquery);
    var genre = (_searchParams$get = searchParams.get('genre')) !== null && _searchParams$get !== void 0 ? _searchParams$get : '';
    var sortByQuery = (_searchParams$get2 = searchParams.get('sortBy')) !== null && _searchParams$get2 !== void 0 ? _searchParams$get2 : '';
    var movieId = (_searchParams$get3 = searchParams.get('movieId')) !== null && _searchParams$get3 !== void 0 ? _searchParams$get3 : '';

    if (genre !== '') {
      genre === 'All' ? setFilter('') : setFilter(genre);
    }

    if (sortByQuery !== '') {
      setSortBy(sortByQuery);
    }

    if (movieId !== '') {
      var foundMovie = movies === null || movies === void 0 ? void 0 : movies.find(function (x) {
        return x.id === +movieId;
      });

      if (foundMovie !== undefined) {
        setClickedMovie(foundMovie);
      }
    }
  }, [queryMatcher, searchParams, movies]);
  return /*#__PURE__*/external_react_default().createElement((external_react_default()).Fragment, null, /*#__PURE__*/external_react_default().createElement("div", {
    className: "main"
  }, /*#__PURE__*/external_react_default().createElement(movieContext.Provider, {
    value: {
      clickMovie: clickMovie,
      setClickedMovie: setClickedMovie
    }
  }, openConfirmBox && /*#__PURE__*/external_react_default().createElement(DeleteMvoie, {
    onConfirm: onConfirm,
    onClose: onClose
  }), openEditBox && /*#__PURE__*/external_react_default().createElement(EditMovie, {
    movie: selectedMovie,
    isEdit: isEditMovie,
    onClose: onClose
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: clickMovie != null ? 'selected-movie top-content' : 'top-content',
    style: {
      backgroundImage: clickMovie != null ? '' : "url('".concat(header_bg.src, "')")
    }
  }, /*#__PURE__*/external_react_default().createElement(Header, {
    onAddMovie: addMovie
  }), /*#__PURE__*/external_react_default().createElement(ErrorBoundary, null, clickMovie != null ? /*#__PURE__*/external_react_default().createElement(SelectedMovie, {
    movie: clickMovie
  }) : /*#__PURE__*/external_react_default().createElement(Search, {
    query: search
  })))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "main-content"
  }, /*#__PURE__*/external_react_default().createElement(MovieContros, {
    count: movies === null || movies === void 0 ? void 0 : movies.length,
    genres: genres,
    selected: filter,
    sortSelected: sortBy
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "movie-tiles"
  }, movies === null || movies === void 0 ? void 0 : movies.map(function (movie) {
    return /*#__PURE__*/external_react_default().createElement(ErrorBoundary, {
      key: movie.id
    }, /*#__PURE__*/external_react_default().createElement(Movie, {
      key: movie.id,
      movie: movie,
      editMovie: function editMovie() {
        return _editMovie(movie);
      },
      deleteMovie: function deleteMovie() {
        return _deleteMovie(movie);
      }
    }));
  }))), /*#__PURE__*/external_react_default().createElement(Footer, null)));
}


/* harmony default export */ const pages = (HomePage);

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 9274:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/hooks-client-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 7342:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-ssr-error.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3349:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/server-inserted-html.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,332,633], () => (__webpack_exec__(9254)));
module.exports = __webpack_exports__;

})();