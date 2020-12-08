webpackHotUpdate_N_E("pages/pools/[symbol]",{

/***/ "./lib/hooks/useEthereumLootBoxQuery.js":
/*!**********************************************!*\
  !*** ./lib/hooks/useEthereumLootBoxQuery.js ***!
  \**********************************************/
/*! exports provided: useEthereumLootBoxQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useEthereumLootBoxQuery\", function() { return useEthereumLootBoxQuery; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var lib_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/constants */ \"./lib/constants.jsx\");\n/* harmony import */ var lib_components_contextProviders_AuthControllerContextProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/components/contextProviders/AuthControllerContextProvider */ \"./lib/components/contextProviders/AuthControllerContextProvider.jsx\");\n/* harmony import */ var lib_utils_fetchExternalLootBoxData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils/fetchExternalLootBoxData */ \"./lib/utils/fetchExternalLootBoxData.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction useEthereumLootBoxQuery(pool) {\n  _s();\n\n  var _pool$prizeStrategy, _pool$prizeStrategy$e, _erc721$tokenIds;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(lib_components_contextProviders_AuthControllerContextProvider__WEBPACK_IMPORTED_MODULE_5__[\"AuthControllerContext\"]),\n      chainId = _useContext.chainId,\n      pauseQueries = _useContext.pauseQueries,\n      provider = _useContext.provider;\n\n  var filterAddress = lib_constants__WEBPACK_IMPORTED_MODULE_4__[\"CONTRACT_ADDRESSES\"][chainId].LootBox;\n  var erc721 = pool === null || pool === void 0 ? void 0 : (_pool$prizeStrategy = pool.prizeStrategy) === null || _pool$prizeStrategy === void 0 ? void 0 : (_pool$prizeStrategy$e = _pool$prizeStrategy.externalErc721Awards) === null || _pool$prizeStrategy$e === void 0 ? void 0 : _pool$prizeStrategy$e.find(function (erc721) {\n    return erc721.address === filterAddress;\n  }); // const { lootBoxAddress, tokenId } = useGraphLootBoxQuery(lootBoxAddress, tokenId)\n\n  var tokenId = erc721 === null || erc721 === void 0 ? void 0 : (_erc721$tokenIds = erc721.tokenIds) === null || _erc721$tokenIds === void 0 ? void 0 : _erc721$tokenIds[0];\n  var enabled = !pauseQueries && chainId && Boolean(filterAddress) && Boolean(tokenId);\n  var lootBoxControllerAddress = lib_constants__WEBPACK_IMPORTED_MODULE_4__[\"CONTRACT_ADDRESSES\"][chainId].LootBox;\n  return Object(react_query__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])([lib_constants__WEBPACK_IMPORTED_MODULE_4__[\"QUERY_KEYS\"].ethereumLootBoxQuery, chainId, filterAddress, tokenId, -1], /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Object(lib_utils_fetchExternalLootBoxData__WEBPACK_IMPORTED_MODULE_6__[\"fetchExternalLootBoxData\"])(provider, lootBoxControllerAddress, tokenId);\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), {\n    enabled: enabled,\n    refetchInterval: lib_constants__WEBPACK_IMPORTED_MODULE_4__[\"MAINNET_POLLING_INTERVAL\"]\n  });\n}\n\n_s(useEthereumLootBoxQuery, \"iK6nysCWVzFwqNGlKi6I5toQ/DE=\", false, function () {\n  return [react_query__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"]];\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZUV0aGVyZXVtTG9vdEJveFF1ZXJ5LmpzP2ExZGMiXSwibmFtZXMiOlsidXNlRXRoZXJldW1Mb290Qm94UXVlcnkiLCJwb29sIiwidXNlQ29udGV4dCIsIkF1dGhDb250cm9sbGVyQ29udGV4dCIsImNoYWluSWQiLCJwYXVzZVF1ZXJpZXMiLCJwcm92aWRlciIsImZpbHRlckFkZHJlc3MiLCJDT05UUkFDVF9BRERSRVNTRVMiLCJMb290Qm94IiwiZXJjNzIxIiwicHJpemVTdHJhdGVneSIsImV4dGVybmFsRXJjNzIxQXdhcmRzIiwiZmluZCIsImFkZHJlc3MiLCJ0b2tlbklkIiwidG9rZW5JZHMiLCJlbmFibGVkIiwiQm9vbGVhbiIsImxvb3RCb3hDb250cm9sbGVyQWRkcmVzcyIsInVzZVF1ZXJ5IiwiUVVFUllfS0VZUyIsImV0aGVyZXVtTG9vdEJveFF1ZXJ5IiwiZmV0Y2hFeHRlcm5hbExvb3RCb3hEYXRhIiwicmVmZXRjaEludGVydmFsIiwiTUFJTk5FVF9QT0xMSU5HX0lOVEVSVkFMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVPLFNBQVNBLHVCQUFULENBQWlDQyxJQUFqQyxFQUF1QztBQUFBOztBQUFBOztBQUFBLG9CQUNBQyx3REFBVSxDQUFDQyxtSEFBRCxDQURWO0FBQUEsTUFDcENDLE9BRG9DLGVBQ3BDQSxPQURvQztBQUFBLE1BQzNCQyxZQUQyQixlQUMzQkEsWUFEMkI7QUFBQSxNQUNiQyxRQURhLGVBQ2JBLFFBRGE7O0FBRzVDLE1BQU1DLGFBQWEsR0FBR0MsZ0VBQWtCLENBQUNKLE9BQUQsQ0FBbEIsQ0FBNEJLLE9BQWxEO0FBQ0EsTUFBTUMsTUFBTSxHQUFHVCxJQUFILGFBQUdBLElBQUgsOENBQUdBLElBQUksQ0FBRVUsYUFBVCxpRkFBRyxvQkFBcUJDLG9CQUF4QiwwREFBRyxzQkFBMkNDLElBQTNDLENBQWdELFVBQUFILE1BQU07QUFBQSxXQUFJQSxNQUFNLENBQUNJLE9BQVAsS0FBbUJQLGFBQXZCO0FBQUEsR0FBdEQsQ0FBZixDQUo0QyxDQU01Qzs7QUFDQSxNQUFNUSxPQUFPLEdBQUdMLE1BQUgsYUFBR0EsTUFBSCwyQ0FBR0EsTUFBTSxDQUFFTSxRQUFYLHFEQUFHLGlCQUFtQixDQUFuQixDQUFoQjtBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUFDWixZQUFELElBQ2RELE9BRGMsSUFFZGMsT0FBTyxDQUFDWCxhQUFELENBRk8sSUFHZFcsT0FBTyxDQUFDSCxPQUFELENBSFQ7QUFLQSxNQUFNSSx3QkFBd0IsR0FBR1gsZ0VBQWtCLENBQUNKLE9BQUQsQ0FBbEIsQ0FBNEJLLE9BQTdEO0FBRUEsU0FBT1csNERBQVEsQ0FDYixDQUFDQyx3REFBVSxDQUFDQyxvQkFBWixFQUFrQ2xCLE9BQWxDLEVBQTJDRyxhQUEzQyxFQUEwRFEsT0FBMUQsRUFBbUUsQ0FBQyxDQUFwRSxDQURhLGdNQUViO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFrQlEsbUdBQXdCLENBQUNqQixRQUFELEVBQVdhLHdCQUFYLEVBQXFDSixPQUFyQyxDQUExQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRmEsSUFHYjtBQUNFRSxXQUFPLEVBQVBBLE9BREY7QUFFRU8sbUJBQWUsRUFBRUMsc0VBQXdCQTtBQUYzQyxHQUhhLENBQWY7QUFRRDs7R0F4QmV6Qix1QjtVQWdCUG9CLG9EIiwiZmlsZSI6Ii4vbGliL2hvb2tzL3VzZUV0aGVyZXVtTG9vdEJveFF1ZXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSdcblxuaW1wb3J0IHtcbiAgQ09OVFJBQ1RfQUREUkVTU0VTLFxuICBNQUlOTkVUX1BPTExJTkdfSU5URVJWQUwsXG4gIFFVRVJZX0tFWVMsXG59IGZyb20gJ2xpYi9jb25zdGFudHMnXG5pbXBvcnQgeyBBdXRoQ29udHJvbGxlckNvbnRleHQgfSBmcm9tICdsaWIvY29tcG9uZW50cy9jb250ZXh0UHJvdmlkZXJzL0F1dGhDb250cm9sbGVyQ29udGV4dFByb3ZpZGVyJ1xuaW1wb3J0IHsgZmV0Y2hFeHRlcm5hbExvb3RCb3hEYXRhIH0gZnJvbSAnbGliL3V0aWxzL2ZldGNoRXh0ZXJuYWxMb290Qm94RGF0YSdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUV0aGVyZXVtTG9vdEJveFF1ZXJ5KHBvb2wpIHtcbiAgY29uc3QgeyBjaGFpbklkLCBwYXVzZVF1ZXJpZXMsIHByb3ZpZGVyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250cm9sbGVyQ29udGV4dClcblxuICBjb25zdCBmaWx0ZXJBZGRyZXNzID0gQ09OVFJBQ1RfQUREUkVTU0VTW2NoYWluSWRdLkxvb3RCb3hcbiAgY29uc3QgZXJjNzIxID0gcG9vbD8ucHJpemVTdHJhdGVneT8uZXh0ZXJuYWxFcmM3MjFBd2FyZHM/LmZpbmQoZXJjNzIxID0+IGVyYzcyMS5hZGRyZXNzID09PSBmaWx0ZXJBZGRyZXNzKVxuXG4gIC8vIGNvbnN0IHsgbG9vdEJveEFkZHJlc3MsIHRva2VuSWQgfSA9IHVzZUdyYXBoTG9vdEJveFF1ZXJ5KGxvb3RCb3hBZGRyZXNzLCB0b2tlbklkKVxuICBjb25zdCB0b2tlbklkID0gZXJjNzIxPy50b2tlbklkcz8uWzBdXG5cbiAgY29uc3QgZW5hYmxlZCA9ICFwYXVzZVF1ZXJpZXMgJiZcbiAgICBjaGFpbklkICYmXG4gICAgQm9vbGVhbihmaWx0ZXJBZGRyZXNzKSAmJlxuICAgIEJvb2xlYW4odG9rZW5JZClcblxuICBjb25zdCBsb290Qm94Q29udHJvbGxlckFkZHJlc3MgPSBDT05UUkFDVF9BRERSRVNTRVNbY2hhaW5JZF0uTG9vdEJveFxuXG4gIHJldHVybiB1c2VRdWVyeShcbiAgICBbUVVFUllfS0VZUy5ldGhlcmV1bUxvb3RCb3hRdWVyeSwgY2hhaW5JZCwgZmlsdGVyQWRkcmVzcywgdG9rZW5JZCwgLTFdLFxuICAgIGFzeW5jICgpID0+IGF3YWl0IGZldGNoRXh0ZXJuYWxMb290Qm94RGF0YShwcm92aWRlciwgbG9vdEJveENvbnRyb2xsZXJBZGRyZXNzLCB0b2tlbklkKSxcbiAgICB7XG4gICAgICBlbmFibGVkLFxuICAgICAgcmVmZXRjaEludGVydmFsOiBNQUlOTkVUX1BPTExJTkdfSU5URVJWQUxcbiAgICB9XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/hooks/useEthereumLootBoxQuery.js\n");

/***/ })

})