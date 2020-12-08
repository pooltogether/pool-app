webpackHotUpdate_N_E("pages/pools/[symbol]",{

/***/ "./lib/hooks/useEthereumLootBoxQuery.js":
/*!**********************************************!*\
  !*** ./lib/hooks/useEthereumLootBoxQuery.js ***!
  \**********************************************/
/*! exports provided: useEthereumLootBoxQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useEthereumLootBoxQuery\", function() { return useEthereumLootBoxQuery; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/constants */ \"./lib/constants.jsx\");\n/* harmony import */ var lib_components_contextProviders_AuthControllerContextProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/components/contextProviders/AuthControllerContextProvider */ \"./lib/components/contextProviders/AuthControllerContextProvider.jsx\");\n/* harmony import */ var lib_utils_fetchExternalLootBoxData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils/fetchExternalLootBoxData */ \"./lib/utils/fetchExternalLootBoxData.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction useEthereumLootBoxQuery() {\n  _s();\n\n  var _pool, _pool$prizeStrategy, _pool$prizeStrategy$e, _erc721$tokenIds;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(lib_components_contextProviders_AuthControllerContextProvider__WEBPACK_IMPORTED_MODULE_5__[\"AuthControllerContext\"]),\n      chainId = _useContext.chainId,\n      pauseQueries = _useContext.pauseQueries;\n\n  var filterAddress = lib_constants__WEBPACK_IMPORTED_MODULE_4__[\"CONTRACT_ADDRESSES\"][chainId].LootBox;\n  var erc721 = (_pool = pool) === null || _pool === void 0 ? void 0 : (_pool$prizeStrategy = _pool.prizeStrategy) === null || _pool$prizeStrategy === void 0 ? void 0 : (_pool$prizeStrategy$e = _pool$prizeStrategy.externalErc721Awards) === null || _pool$prizeStrategy$e === void 0 ? void 0 : _pool$prizeStrategy$e.find(function (erc721) {\n    return erc721.address === filterAddress;\n  });\n  console.log(filterAddress);\n  console.log(erc721s); // const { lootBoxAddress, tokenId } = useGraphLootBoxQuery(lootBoxAddress, tokenId)\n\n  var tokenId = erc721 === null || erc721 === void 0 ? void 0 : (_erc721$tokenIds = erc721.tokenIds) === null || _erc721$tokenIds === void 0 ? void 0 : _erc721$tokenIds[0];\n  var enabled = !pauseQueries && chainId && Boolean(filterAddress) && Boolean(tokenId);\n  return Object(react_query__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])([lib_constants__WEBPACK_IMPORTED_MODULE_4__[\"QUERY_KEYS\"].ethereumLootBoxQuery, chainId, filterAddress, tokenId, -1], /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Object(lib_utils_fetchExternalLootBoxData__WEBPACK_IMPORTED_MODULE_6__[\"fetchExternalLootBoxData\"])(provider, filterAddress, tokenId);\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), {\n    enabled: enabled,\n    refetchInterval: lib_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAINNET_POLLING_INTERVAL\"]\n  });\n}\n\n_s(useEthereumLootBoxQuery, \"JKHAEGSCLogn+w2V1V2fdHRgCGk=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZUV0aGVyZXVtTG9vdEJveFF1ZXJ5LmpzP2ExZGMiXSwibmFtZXMiOlsidXNlRXRoZXJldW1Mb290Qm94UXVlcnkiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRyb2xsZXJDb250ZXh0IiwiY2hhaW5JZCIsInBhdXNlUXVlcmllcyIsImZpbHRlckFkZHJlc3MiLCJDT05UUkFDVF9BRERSRVNTRVMiLCJMb290Qm94IiwiZXJjNzIxIiwicG9vbCIsInByaXplU3RyYXRlZ3kiLCJleHRlcm5hbEVyYzcyMUF3YXJkcyIsImZpbmQiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImVyYzcyMXMiLCJ0b2tlbklkIiwidG9rZW5JZHMiLCJlbmFibGVkIiwiQm9vbGVhbiIsInVzZVF1ZXJ5IiwiUVVFUllfS0VZUyIsImV0aGVyZXVtTG9vdEJveFF1ZXJ5IiwiZmV0Y2hFeHRlcm5hbExvb3RCb3hEYXRhIiwicHJvdmlkZXIiLCJyZWZldGNoSW50ZXJ2YWwiLCJNQUlOTkVUX1BPTExJTkdfSU5URVJWQUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRU8sU0FBU0EsdUJBQVQsR0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxvQkFDTkMsd0RBQVUsQ0FBQ0MsbUhBQUQsQ0FESjtBQUFBLE1BQ2hDQyxPQURnQyxlQUNoQ0EsT0FEZ0M7QUFBQSxNQUN2QkMsWUFEdUIsZUFDdkJBLFlBRHVCOztBQUd4QyxNQUFNQyxhQUFhLEdBQUdDLGdFQUFrQixDQUFDSCxPQUFELENBQWxCLENBQTRCSSxPQUFsRDtBQUNBLE1BQU1DLE1BQU0sWUFBR0MsSUFBSCxpRUFBRyxNQUFNQyxhQUFULGlGQUFHLG9CQUFxQkMsb0JBQXhCLDBEQUFHLHNCQUEyQ0MsSUFBM0MsQ0FBZ0QsVUFBQUosTUFBTTtBQUFBLFdBQUlBLE1BQU0sQ0FBQ0ssT0FBUCxLQUFtQlIsYUFBdkI7QUFBQSxHQUF0RCxDQUFmO0FBQ0FTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixhQUFaO0FBQ0FTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFaLEVBTndDLENBUXhDOztBQUNBLE1BQU1DLE9BQU8sR0FBR1QsTUFBSCxhQUFHQSxNQUFILDJDQUFHQSxNQUFNLENBQUVVLFFBQVgscURBQUcsaUJBQW1CLENBQW5CLENBQWhCO0FBRUEsTUFBTUMsT0FBTyxHQUFHLENBQUNmLFlBQUQsSUFDZEQsT0FEYyxJQUVkaUIsT0FBTyxDQUFDZixhQUFELENBRk8sSUFHZGUsT0FBTyxDQUFDSCxPQUFELENBSFQ7QUFLQSxTQUFPSSw0REFBUSxDQUNiLENBQUNDLHdEQUFVLENBQUNDLG9CQUFaLEVBQWtDcEIsT0FBbEMsRUFBMkNFLGFBQTNDLEVBQTBEWSxPQUExRCxFQUFtRSxDQUFDLENBQXBFLENBRGEsZ01BRWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWtCTyxtR0FBd0IsQ0FBQ0MsUUFBRCxFQUFXcEIsYUFBWCxFQUEwQlksT0FBMUIsQ0FBMUM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUZhLElBR2I7QUFDRUUsV0FBTyxFQUFQQSxPQURGO0FBRUVPLG1CQUFlLEVBQUVDLHNFQUF3QkE7QUFGM0MsR0FIYSxDQUFmO0FBUUQ7O0dBeEJlM0IsdUI7VUFnQlBxQixvRCIsImZpbGUiOiIuL2xpYi9ob29rcy91c2VFdGhlcmV1bUxvb3RCb3hRdWVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknXG5cbmltcG9ydCB7XG4gIENPTlRSQUNUX0FERFJFU1NFUyxcbiAgTUFJTk5FVF9QT0xMSU5HX0lOVEVSVkFMLFxuICBRVUVSWV9LRVlTLFxufSBmcm9tICdsaWIvY29uc3RhbnRzJ1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXJDb250ZXh0IH0gZnJvbSAnbGliL2NvbXBvbmVudHMvY29udGV4dFByb3ZpZGVycy9BdXRoQ29udHJvbGxlckNvbnRleHRQcm92aWRlcidcbmltcG9ydCB7IGZldGNoRXh0ZXJuYWxMb290Qm94RGF0YSB9IGZyb20gJ2xpYi91dGlscy9mZXRjaEV4dGVybmFsTG9vdEJveERhdGEnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VFdGhlcmV1bUxvb3RCb3hRdWVyeSgpIHtcbiAgY29uc3QgeyBjaGFpbklkLCBwYXVzZVF1ZXJpZXMgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRyb2xsZXJDb250ZXh0KVxuXG4gIGNvbnN0IGZpbHRlckFkZHJlc3MgPSBDT05UUkFDVF9BRERSRVNTRVNbY2hhaW5JZF0uTG9vdEJveFxuICBjb25zdCBlcmM3MjEgPSBwb29sPy5wcml6ZVN0cmF0ZWd5Py5leHRlcm5hbEVyYzcyMUF3YXJkcz8uZmluZChlcmM3MjEgPT4gZXJjNzIxLmFkZHJlc3MgPT09IGZpbHRlckFkZHJlc3MpXG4gIGNvbnNvbGUubG9nKGZpbHRlckFkZHJlc3MpXG4gIGNvbnNvbGUubG9nKGVyYzcyMXMpXG5cbiAgLy8gY29uc3QgeyBsb290Qm94QWRkcmVzcywgdG9rZW5JZCB9ID0gdXNlR3JhcGhMb290Qm94UXVlcnkobG9vdEJveEFkZHJlc3MsIHRva2VuSWQpXG4gIGNvbnN0IHRva2VuSWQgPSBlcmM3MjE/LnRva2VuSWRzPy5bMF1cbiAgXG4gIGNvbnN0IGVuYWJsZWQgPSAhcGF1c2VRdWVyaWVzICYmXG4gICAgY2hhaW5JZCAmJlxuICAgIEJvb2xlYW4oZmlsdGVyQWRkcmVzcykgJiZcbiAgICBCb29sZWFuKHRva2VuSWQpXG5cbiAgcmV0dXJuIHVzZVF1ZXJ5KFxuICAgIFtRVUVSWV9LRVlTLmV0aGVyZXVtTG9vdEJveFF1ZXJ5LCBjaGFpbklkLCBmaWx0ZXJBZGRyZXNzLCB0b2tlbklkLCAtMV0sXG4gICAgYXN5bmMgKCkgPT4gYXdhaXQgZmV0Y2hFeHRlcm5hbExvb3RCb3hEYXRhKHByb3ZpZGVyLCBmaWx0ZXJBZGRyZXNzLCB0b2tlbklkKSxcbiAgICB7XG4gICAgICBlbmFibGVkLFxuICAgICAgcmVmZXRjaEludGVydmFsOiBNQUlOTkVUX1BPTExJTkdfSU5URVJWQUxcbiAgICB9XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/hooks/useEthereumLootBoxQuery.js\n");

/***/ })

})