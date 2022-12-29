"use strict";
exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 6256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Im": () => (/* binding */ useEditMovieMutation),
/* harmony export */   "U9": () => (/* binding */ useGetMoviesQuery),
/* harmony export */   "gk": () => (/* binding */ apiSlice),
/* harmony export */   "nv": () => (/* binding */ useAddMovieMutation),
/* harmony export */   "oC": () => (/* binding */ useDeleteMovieMutation)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);


var apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
  baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
    baseUrl: 'http://localhost:4000'
  }),
  extractRehydrationInfo: function extractRehydrationInfo(action, _ref) {
    var reducerPath = _ref.reducerPath;

    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ['Movies'],
  endpoints: function endpoints(build) {
    return {
      getMovies: build.query({
        query: function query(_ref2) {
          var sortBy = _ref2.sortBy,
              filter = _ref2.filter,
              search = _ref2.search;
          var filterQuery = filter !== '' ? "&filter=".concat(filter) : '';
          var searchQuery = search !== '' ? "&searchBy=title&search=".concat(search) : '';
          return {
            url: "movies?limit=120&sortOrder=desc&sortBy=".concat(sortBy).concat(filterQuery).concat(searchQuery)
          };
        },
        transformResponse: function transformResponse(response) {
          return response.data;
        },
        providesTags: ['Movies']
      }),
      addMovie: build.mutation({
        query: function query(movie) {
          return {
            url: 'movies',
            method: 'POST',
            body: movie
          };
        },
        invalidatesTags: ['Movies']
      }),
      editMovie: build.mutation({
        query: function query(movie) {
          return {
            url: 'movies',
            method: 'PUT',
            body: movie
          };
        },
        invalidatesTags: ['Movies']
      }),
      deleteMovie: build.mutation({
        query: function query(movieId) {
          return {
            url: "movies/".concat(movieId),
            method: 'DELETE'
          };
        },
        invalidatesTags: ['Movies']
      })
    };
  }
});
var useGetMoviesQuery = apiSlice.useGetMoviesQuery,
    useAddMovieMutation = apiSlice.useAddMovieMutation,
    useEditMovieMutation = apiSlice.useEditMovieMutation,
    useDeleteMovieMutation = apiSlice.useDeleteMovieMutation;


/***/ }),

/***/ 9633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ wrapper)
/* harmony export */ });
/* unused harmony export makeStore */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_moviesService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6256);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var makeStore = function makeStore() {
  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: _defineProperty({}, _services_moviesService__WEBPACK_IMPORTED_MODULE_1__/* .apiSlice.reducerPath */ .gk.reducerPath, _services_moviesService__WEBPACK_IMPORTED_MODULE_1__/* .apiSlice.reducer */ .gk.reducer),
    middleware: function middleware(getDefaultMiddleware) {
      return getDefaultMiddleware().concat(_services_moviesService__WEBPACK_IMPORTED_MODULE_1__/* .apiSlice.middleware */ .gk.middleware);
    }
  });
};
var wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(makeStore, {
  debug: true
});

/***/ })

};
;