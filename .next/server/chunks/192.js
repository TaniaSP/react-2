exports.id = 192;
exports.ids = [192];
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

/***/ 9938:
/***/ ((module, exports, __webpack_require__) => {

"use client";
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);

var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);

var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);

var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);

var _react = _interop_require_wildcard(__webpack_require__(6689));

var _head = _interop_require_default(__webpack_require__(6505));

var _imageBlurSvg = __webpack_require__(4486);

var _imageConfig = __webpack_require__(5843);

var _imageConfigContext = __webpack_require__(744);

var _warnOnce = __webpack_require__(618);

var _imageLoader = _interop_require_default(__webpack_require__(9552));

var configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
var allImgs = new Map();
var perfObserver;

if (true) {
  globalThis.__NEXT_IMAGE_IMPORTED = true;
}

var VALID_LOADING_VALUES = (/* unused pure expression or super */ null && (['lazy', 'eager', undefined]));

function isStaticRequire(src) {
  return src["default"] !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return _typeof(src) === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

function getWidths(_ref, width, sizes) {
  var deviceSizes = _ref.deviceSizes,
      allSizes = _ref.allSizes;

  if (sizes) {
    // Find all the "vw" percent sizes used in the sizes prop
    var viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    var percentSizes = [];

    for (var match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      var smallestRatio = Math.min.apply(Math, percentSizes) * 0.01;
      return {
        widths: allSizes.filter(function (s) {
          return s >= deviceSizes[0] * smallestRatio;
        }),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number') {
    return {
      widths: deviceSizes,
      kind: 'w'
    };
  }

  var widths = _toConsumableArray(new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    widths: widths,
    kind: 'x'
  };
}

function generateImgAttrs(_ref2) {
  var config = _ref2.config,
      src = _ref2.src,
      unoptimized = _ref2.unoptimized,
      width = _ref2.width,
      quality = _ref2.quality,
      sizes = _ref2.sizes,
      loader = _ref2.loader;

  if (unoptimized) {
    return {
      src: src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  var _getWidths = getWidths(config, width, sizes),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map(function (w, i) {
      return "".concat(loader({
        config: config,
        src: src,
        quality: quality,
        width: w
      }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
    }).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      config: config,
      src: src,
      quality: quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number' || typeof x === 'undefined') {
    return x;
  }

  if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
    return parseInt(x, 10);
  }

  return NaN;
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
  if (!img || img['data-loaded-src'] === src) {
    return;
  }

  img['data-loaded-src'] = src;
  var p = 'decode' in img ? img.decode() : Promise.resolve();
  p["catch"](function () {}).then(function () {
    if (!img.parentNode) {
      // Exit early in case of race condition:
      // - onload() is called
      // - decode() is called but incomplete
      // - unmount is called
      // - decode() completes
      return;
    }

    if (placeholder === 'blur') {
      setBlurComplete(true);
    }

    if (onLoadRef == null ? void 0 : onLoadRef.current) {
      // Since we don't have the SyntheticEvent here,
      // we must create one with the same shape.
      // See https://reactjs.org/docs/events.html
      var event = new Event('load');
      Object.defineProperty(event, 'target', {
        writable: false,
        value: img
      });
      var prevented = false;
      var stopped = false;
      onLoadRef.current(_extends({}, event, {
        nativeEvent: event,
        currentTarget: img,
        target: img,
        isDefaultPrevented: function isDefaultPrevented() {
          return prevented;
        },
        isPropagationStopped: function isPropagationStopped() {
          return stopped;
        },
        persist: function persist() {},
        preventDefault: function preventDefault() {
          prevented = true;
          event.preventDefault();
        },
        stopPropagation: function stopPropagation() {
          stopped = true;
          event.stopPropagation();
        }
      }));
    }

    if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
      onLoadingCompleteRef.current(img);
    }

    if (false) { var widthModified, heightModified, valid, _window$getComputedSt, position, widthViewportRatio; }
  });
}

var ImageElement = /*#__PURE__*/(0, _react).forwardRef(function (_param, forwardedRef) {
  var imgAttributes = _param.imgAttributes,
      heightInt = _param.heightInt,
      widthInt = _param.widthInt,
      qualityInt = _param.qualityInt,
      className = _param.className,
      imgStyle = _param.imgStyle,
      blurStyle = _param.blurStyle,
      isLazy = _param.isLazy,
      fill = _param.fill,
      placeholder = _param.placeholder,
      loading = _param.loading,
      srcString = _param.srcString,
      config = _param.config,
      unoptimized = _param.unoptimized,
      loader = _param.loader,
      onLoadRef = _param.onLoadRef,
      onLoadingCompleteRef = _param.onLoadingCompleteRef,
      setBlurComplete = _param.setBlurComplete,
      setShowAltText = _param.setShowAltText,
      onLoad = _param.onLoad,
      _onError = _param.onError,
      rest = _object_without_properties_loose(_param, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);

  loading = isLazy ? 'lazy' : loading;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    width: widthInt,
    height: heightInt,
    decoding: "async",
    "data-nimg": fill ? 'fill' : '1',
    className: className,
    // @ts-ignore - TODO: upgrade to `@types/react@17`
    loading: loading,
    style: _extends({}, imgStyle, blurStyle),
    ref: (0, _react).useCallback(function (img) {
      if (forwardedRef) {
        if (typeof forwardedRef === 'function') forwardedRef(img);else if (_typeof(forwardedRef) === 'object') {
          // @ts-ignore - .current is read only it's usually assigned by react internally
          forwardedRef.current = img;
        }
      }

      if (!img) {
        return;
      }

      if (_onError) {
        // If the image has an error before react hydrates, then the error is lost.
        // The workaround is to wait until the image is mounted which is after hydration,
        // then we set the src again to trigger the error handler (if there was an error).
        // eslint-disable-next-line no-self-assign
        img.src = img.src;
      }

      if (false) {}

      if (img.complete) {
        handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
      }
    }, [srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, _onError, unoptimized, forwardedRef]),
    onLoad: function onLoad(event) {
      var img = event.currentTarget;
      handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
    },
    onError: function onError(event) {
      // if the real image fails to load, this will ensure "alt" is visible
      setShowAltText(true);

      if (placeholder === 'blur') {
        // If the real image fails to load, this will still remove the placeholder.
        setBlurComplete(true);
      }

      if (_onError) {
        _onError(event);
      }
    }
  })));
});
var Image = /*#__PURE__*/(0, _react).forwardRef(function (_param, forwardedRef) {
  var src = _param.src,
      sizes = _param.sizes,
      _param$unoptimized = _param.unoptimized,
      unoptimized = _param$unoptimized === void 0 ? false : _param$unoptimized,
      _param$priority = _param.priority,
      priority = _param$priority === void 0 ? false : _param$priority,
      loading = _param.loading,
      className = _param.className,
      quality = _param.quality,
      width = _param.width,
      height = _param.height,
      fill = _param.fill,
      style = _param.style,
      onLoad = _param.onLoad,
      onLoadingComplete = _param.onLoadingComplete,
      _param$placeholder = _param.placeholder,
      placeholder = _param$placeholder === void 0 ? 'empty' : _param$placeholder,
      blurDataURL = _param.blurDataURL,
      layout = _param.layout,
      objectFit = _param.objectFit,
      objectPosition = _param.objectPosition,
      lazyBoundary = _param.lazyBoundary,
      lazyRoot = _param.lazyRoot,
      all = _object_without_properties_loose(_param, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);

  var configContext = (0, _react).useContext(_imageConfigContext.ImageConfigContext);
  var config = (0, _react).useMemo(function () {
    var c = configEnv || configContext || _imageConfig.imageConfigDefault;
    var allSizes = [].concat(_toConsumableArray(c.deviceSizes), _toConsumableArray(c.imageSizes)).sort(function (a, b) {
      return a - b;
    });
    var deviceSizes = c.deviceSizes.sort(function (a, b) {
      return a - b;
    });
    return _extends({}, c, {
      allSizes: allSizes,
      deviceSizes: deviceSizes
    });
  }, [configContext]);
  var rest = all;
  var loader = rest.loader || _imageLoader["default"]; // Remove property so it's not spread on <img> element

  delete rest.loader; // This special value indicates that the user
  // didn't define a "loader" prop or "loader" config.

  var isDefaultLoader = ('__next_img_default' in loader);

  if (isDefaultLoader) {
    if (config.loader === 'custom') {
      throw new Error("Image with src \"".concat(src, "\" is missing \"loader\" prop.") + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
    }
  } else {
    // The user defined a "loader" prop or config.
    // Since the config object is internal only, we
    // must not pass it to the user-defined "loader".
    var customImageLoader = loader;

    var _tmp;

    _tmp = function _tmp(obj) {
      var _ = obj.config,
          opts = _object_without_properties_loose(obj, ["config"]);

      return customImageLoader(opts);
    }, loader = _tmp, _tmp;
  }

  if (layout) {
    if (layout === 'fill') {
      fill = true;
    }

    var layoutToStyle = {
      intrinsic: {
        maxWidth: '100%',
        height: 'auto'
      },
      responsive: {
        width: '100%',
        height: 'auto'
      }
    };
    var layoutToSizes = {
      responsive: '100vw',
      fill: '100vw'
    };
    var layoutStyle = layoutToStyle[layout];

    if (layoutStyle) {
      style = _extends({}, style, layoutStyle);
    }

    var layoutSizes = layoutToSizes[layout];

    if (layoutSizes && !sizes) {
      sizes = layoutSizes;
    }
  }

  var staticSrc = '';
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var blurWidth;
  var blurHeight;

  if (isStaticImport(src)) {
    var staticImageData = isStaticRequire(src) ? src["default"] : src;

    if (!staticImageData.src) {
      throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(staticImageData)));
    }

    if (!staticImageData.height || !staticImageData.width) {
      throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(staticImageData)));
    }

    blurWidth = staticImageData.blurWidth;
    blurHeight = staticImageData.blurHeight;
    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!fill) {
      if (!widthInt && !heightInt) {
        widthInt = staticImageData.width;
        heightInt = staticImageData.height;
      } else if (widthInt && !heightInt) {
        var ratio = widthInt / staticImageData.width;
        heightInt = Math.round(staticImageData.height * ratio);
      } else if (!widthInt && heightInt) {
        var _ratio = heightInt / staticImageData.height;

        widthInt = Math.round(staticImageData.width * _ratio);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (config.unoptimized) {
    unoptimized = true;
  }

  if (isDefaultLoader && src.endsWith('.svg') && !config.dangerouslyAllowSVG) {
    // Special case to make svg serve as-is to avoid proxying
    // through the built-in Image Optimization API.
    unoptimized = true;
  }

  var _useState = (0, _react).useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      blurComplete = _useState2[0],
      setBlurComplete = _useState2[1];

  var _useState3 = (0, _react).useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showAltText = _useState4[0],
      setShowAltText = _useState4[1];

  var qualityInt = getInt(quality);

  if (false) { var _Object$entries$_i, legacyKey, legacyValue, _i2, _Object$entries, url, urlStr, VALID_BLUR_EXT; }

  var imgStyle = Object.assign(fill ? {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    objectFit: objectFit,
    objectPosition: objectPosition
  } : {}, showAltText ? {} : {
    color: 'transparent'
  }, style);
  var blurStyle = placeholder === 'blur' && blurDataURL && !blurComplete ? {
    backgroundSize: imgStyle.objectFit || 'cover',
    backgroundPosition: imgStyle.objectPosition || '50% 50%',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,".concat((0, _imageBlurSvg).getImageBlurSvg({
      widthInt: widthInt,
      heightInt: heightInt,
      blurWidth: blurWidth,
      blurHeight: blurHeight,
      blurDataURL: blurDataURL
    }), "\")")
  } : {};

  if (false) {}

  var imgAttributes = generateImgAttrs({
    config: config,
    src: src,
    unoptimized: unoptimized,
    width: widthInt,
    quality: qualityInt,
    sizes: sizes,
    loader: loader
  });
  var srcString = src;

  if (false) { var fullUrl; }

  var linkProps = {
    // @ts-expect-error upgrade react types to react 18
    imageSrcSet: imgAttributes.srcSet,
    imageSizes: imgAttributes.sizes,
    crossOrigin: rest.crossOrigin
  };
  var onLoadRef = (0, _react).useRef(onLoad);
  (0, _react).useEffect(function () {
    onLoadRef.current = onLoad;
  }, [onLoad]);
  var onLoadingCompleteRef = (0, _react).useRef(onLoadingComplete);
  (0, _react).useEffect(function () {
    onLoadingCompleteRef.current = onLoadingComplete;
  }, [onLoadingComplete]);

  var imgElementArgs = _extends({
    isLazy: isLazy,
    imgAttributes: imgAttributes,
    heightInt: heightInt,
    widthInt: widthInt,
    qualityInt: qualityInt,
    className: className,
    imgStyle: imgStyle,
    blurStyle: blurStyle,
    loading: loading,
    config: config,
    fill: fill,
    unoptimized: unoptimized,
    placeholder: placeholder,
    loader: loader,
    srcString: srcString,
    onLoadRef: onLoadRef,
    onLoadingCompleteRef: onLoadingCompleteRef,
    setBlurComplete: setBlurComplete,
    setShowAltText: setShowAltText
  }, rest);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(ImageElement, Object.assign({}, imgElementArgs, {
    ref: forwardedRef
  })), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", Object.assign({
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src
  }, linkProps))) : null);
});
var _default = Image;
exports["default"] = _default;

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

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(9938)


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