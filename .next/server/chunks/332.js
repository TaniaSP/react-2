exports.id = 332;
exports.ids = [332];
exports.modules = {

/***/ 9435:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bailoutToClientRendering = bailoutToClientRendering;

var _dynamicNoSsr = __webpack_require__(2122);

var _staticGenerationAsyncStorage = __webpack_require__(9374);

function bailoutToClientRendering() {
  var staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage && 'getStore' in _staticGenerationAsyncStorage.staticGenerationAsyncStorage ? _staticGenerationAsyncStorage.staticGenerationAsyncStorage == null ? void 0 : _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore() : _staticGenerationAsyncStorage.staticGenerationAsyncStorage;

  if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
    return true;
  }

  if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
    (0, _dynamicNoSsr).suspense();
  }

  return false;
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 2128:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSearchParams = useSearchParams;
exports.usePathname = usePathname;
Object.defineProperty(exports, "ServerInsertedHTMLContext", ({
  enumerable: true,
  get: function get() {
    return _serverInsertedHtml.ServerInsertedHTMLContext;
  }
}));
Object.defineProperty(exports, "useServerInsertedHTML", ({
  enumerable: true,
  get: function get() {
    return _serverInsertedHtml.useServerInsertedHTML;
  }
}));
exports.useRouter = useRouter;
exports.useSelectedLayoutSegments = useSelectedLayoutSegments;
exports.useSelectedLayoutSegment = useSelectedLayoutSegment;
Object.defineProperty(exports, "redirect", ({
  enumerable: true,
  get: function get() {
    return _redirect.redirect;
  }
}));
Object.defineProperty(exports, "notFound", ({
  enumerable: true,
  get: function get() {
    return _notFound.notFound;
  }
}));

var _react = __webpack_require__(6689);

var _appRouterContext = __webpack_require__(3280);

var _hooksClientContext = __webpack_require__(9274);

var _bailoutToClientRendering = __webpack_require__(9435);

var _serverInsertedHtml = __webpack_require__(3349);

var _redirect = __webpack_require__(9580);

var _notFound = __webpack_require__(52);

var INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol('internal for urlsearchparams readonly');

function readonlyURLSearchParamsError() {
  return new Error('ReadonlyURLSearchParams cannot be modified');
}

var ReadonlyURLSearchParams = /*#__PURE__*/function (_Symbol$iterator) {
  function ReadonlyURLSearchParams(urlSearchParams) {
    _classCallCheck(this, ReadonlyURLSearchParams);

    // Since `new Headers` uses `this.append()` to fill the headers object ReadonlyHeaders can't extend from Headers directly as it would throw.
    this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
    this.entries = urlSearchParams.entries.bind(urlSearchParams);
    this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
    this.get = urlSearchParams.get.bind(urlSearchParams);
    this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
    this.has = urlSearchParams.has.bind(urlSearchParams);
    this.keys = urlSearchParams.keys.bind(urlSearchParams);
    this.values = urlSearchParams.values.bind(urlSearchParams);
    this.toString = urlSearchParams.toString.bind(urlSearchParams);
  }

  _createClass(ReadonlyURLSearchParams, [{
    key: _Symbol$iterator,
    value: function value() {
      return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
  }, {
    key: "append",
    value: function append() {
      throw readonlyURLSearchParamsError();
    }
  }, {
    key: "delete",
    value: function _delete() {
      throw readonlyURLSearchParamsError();
    }
  }, {
    key: "set",
    value: function set() {
      throw readonlyURLSearchParamsError();
    }
  }, {
    key: "sort",
    value: function sort() {
      throw readonlyURLSearchParamsError();
    }
  }]);

  return ReadonlyURLSearchParams;
}(Symbol.iterator);

function useSearchParams() {
  var searchParams = (0, _react).useContext(_hooksClientContext.SearchParamsContext);
  var readonlySearchParams = (0, _react).useMemo(function () {
    return new ReadonlyURLSearchParams(searchParams || new URLSearchParams());
  }, [searchParams]);

  if ((0, _bailoutToClientRendering).bailoutToClientRendering()) {
    // TODO-APP: handle dynamic = 'force-static' here and on the client
    return readonlySearchParams;
  }

  if (!searchParams) {
    throw new Error('invariant expected search params to be mounted');
  }

  return readonlySearchParams;
}

function usePathname() {
  return (0, _react).useContext(_hooksClientContext.PathnameContext);
}

function useRouter() {
  var router = (0, _react).useContext(_appRouterContext.AppRouterContext);

  if (router === null) {
    throw new Error('invariant expected app router to be mounted');
  }

  return router;
} // TODO-APP: handle parallel routes


function getSelectedLayoutSegmentPath(tree, parallelRouteKey) {
  var first = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var segmentPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var node;

  if (first) {
    // Use the provided parallel route key on the first parallel route
    node = tree[1][parallelRouteKey];
  } else {
    // After first parallel route prefer children, if there's no children pick the first parallel route.
    var parallelRoutes = tree[1];

    var _children;

    node = (_children = parallelRoutes.children) != null ? _children : Object.values(parallelRoutes)[0];
  }

  if (!node) return segmentPath;
  var segment = node[0];
  var segmentValue = Array.isArray(segment) ? segment[1] : segment;
  if (!segmentValue) return segmentPath;
  segmentPath.push(segmentValue);
  return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}

function useSelectedLayoutSegments() {
  var parallelRouteKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'children';

  var _useContext = (0, _react).useContext(_appRouterContext.LayoutRouterContext),
      tree = _useContext.tree;

  return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}

function useSelectedLayoutSegment() {
  var parallelRouteKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'children';
  var selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);

  if (selectedLayoutSegments.length === 0) {
    return null;
  }

  return selectedLayoutSegments[0];
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 52:
/***/ ((module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.notFound = notFound;
exports.NOT_FOUND_ERROR_CODE = void 0;
var NOT_FOUND_ERROR_CODE = 'NEXT_NOT_FOUND';
exports.NOT_FOUND_ERROR_CODE = NOT_FOUND_ERROR_CODE;

function notFound() {
  // eslint-disable-next-line no-throw-literal
  var error = new Error(NOT_FOUND_ERROR_CODE);
  error.digest = NOT_FOUND_ERROR_CODE;
  throw error;
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 9580:
/***/ ((module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.redirect = redirect;
exports.REDIRECT_ERROR_CODE = void 0;
var REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
exports.REDIRECT_ERROR_CODE = REDIRECT_ERROR_CODE;

function redirect(url) {
  // eslint-disable-next-line no-throw-literal
  var error = new Error(REDIRECT_ERROR_CODE);
  error.digest = REDIRECT_ERROR_CODE + ';' + url;
  throw error;
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ }),

/***/ 2122:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use client";
"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = NoSSR;
exports.suspense = suspense;

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _react = _interop_require_default(__webpack_require__(6689));

var _noSsrError = __webpack_require__(7342);

function NoSSR(_ref) {
  var children = _ref.children;

  if (true) {
    suspense();
  }

  return children;
}

function suspense() {
  var error = new Error(_noSsrError.NEXT_DYNAMIC_NO_SSR_CODE);
  error.digest = _noSsrError.NEXT_DYNAMIC_NO_SSR_CODE;
  throw error;
}

/***/ }),

/***/ 9332:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2128)


/***/ }),

/***/ 9374:
/***/ ((module, exports) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.staticGenerationAsyncStorage = void 0;
var staticGenerationAsyncStorage = {};
exports.staticGenerationAsyncStorage = staticGenerationAsyncStorage; // @ts-expect-error we provide this on globalThis in
// the edge and node runtime

if (globalThis.AsyncLocalStorage) {
  exports.staticGenerationAsyncStorage = staticGenerationAsyncStorage = new globalThis.AsyncLocalStorage();
}

if ((typeof exports["default"] === 'function' || _typeof(exports["default"]) === 'object' && exports["default"] !== null) && typeof exports["default"].__esModule === 'undefined') {
  Object.defineProperty(exports["default"], '__esModule', {
    value: true
  });
  Object.assign(exports["default"], exports);
  module.exports = exports["default"];
}

/***/ })

};
;