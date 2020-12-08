webpackHotUpdate_N_E("pages/pools/[symbol]",{

/***/ "./lib/utils/fetchExternalLootBoxData.js":
/*!***********************************************!*\
  !*** ./lib/utils/fetchExternalLootBoxData.js ***!
  \***********************************************/
/*! exports provided: fetchExternalLootBoxData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchExternalLootBoxData\", function() { return fetchExternalLootBoxData; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _pooltogether_etherplex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pooltogether/etherplex */ \"./node_modules/@pooltogether/etherplex/index.js\");\n/* harmony import */ var _pooltogether_etherplex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pooltogether_etherplex__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pooltogether_loot_box_abis_LootBoxController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pooltogether/loot-box/abis/LootBoxController */ \"./node_modules/@pooltogether/loot-box/abis/LootBoxController.json\");\nvar _pooltogether_loot_box_abis_LootBoxController__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @pooltogether/loot-box/abis/LootBoxController */ \"./node_modules/@pooltogether/loot-box/abis/LootBoxController.json\", 1);\n\n\n\n\n\nvar debug = __webpack_require__(/*! debug */ \"./node_modules/debug/src/browser.js\")('pool-app:fetchExternalLootBoxData');\n\nvar fetchExternalLootBoxData = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(provider, lootBoxControllerAddress, lootBoxAddress, tokenId) {\n    var _values$lootBoxContro, _values$lootBoxContro2, _values$lootBoxContro3, _values$lootBoxContro4, etherplexLootBoxControllerContract, values;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            etherplexLootBoxControllerContract = Object(_pooltogether_etherplex__WEBPACK_IMPORTED_MODULE_2__[\"contract\"])('lootBoxController', _pooltogether_loot_box_abis_LootBoxController__WEBPACK_IMPORTED_MODULE_3__, lootBoxControllerAddress);\n            console.log(lootBoxAddress, tokenId);\n            _context.next = 5;\n            return Object(_pooltogether_etherplex__WEBPACK_IMPORTED_MODULE_2__[\"batch\"])(provider, etherplexLootBoxControllerContract.computeAddress(lootBoxAddress, tokenId));\n\n          case 5:\n            values = _context.sent;\n            console.log(values === null || values === void 0 ? void 0 : (_values$lootBoxContro = values.lootBoxController) === null || _values$lootBoxContro === void 0 ? void 0 : (_values$lootBoxContro2 = _values$lootBoxContro.computeAddress) === null || _values$lootBoxContro2 === void 0 ? void 0 : _values$lootBoxContro2[0]);\n            return _context.abrupt(\"return\", {\n              computedLootBoxAddress: values === null || values === void 0 ? void 0 : (_values$lootBoxContro3 = values.lootBoxController) === null || _values$lootBoxContro3 === void 0 ? void 0 : (_values$lootBoxContro4 = _values$lootBoxContro3.computeAddress) === null || _values$lootBoxContro4 === void 0 ? void 0 : _values$lootBoxContro4[0],\n              loading: false\n            });\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(_context.t0);\n            throw {\n              name: 'fetchExternalLootBoxData Error',\n              message: \"Error from Infura was: \".concat(_context.t0.message)\n            };\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 10]]);\n  }));\n\n  return function fetchExternalLootBoxData(_x, _x2, _x3, _x4) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzL2ZldGNoRXh0ZXJuYWxMb290Qm94RGF0YS5qcz82ZWViIl0sIm5hbWVzIjpbImRlYnVnIiwicmVxdWlyZSIsImZldGNoRXh0ZXJuYWxMb290Qm94RGF0YSIsInByb3ZpZGVyIiwibG9vdEJveENvbnRyb2xsZXJBZGRyZXNzIiwibG9vdEJveEFkZHJlc3MiLCJ0b2tlbklkIiwiZXRoZXJwbGV4TG9vdEJveENvbnRyb2xsZXJDb250cmFjdCIsImNvbnRyYWN0IiwiTG9vdEJveENvbnRyb2xsZXJBYmkiLCJjb25zb2xlIiwibG9nIiwiYmF0Y2giLCJjb21wdXRlQWRkcmVzcyIsInZhbHVlcyIsImxvb3RCb3hDb250cm9sbGVyIiwiY29tcHV0ZWRMb290Qm94QWRkcmVzcyIsImxvYWRpbmciLCJlcnJvciIsIm5hbWUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLGtEQUFELENBQVAsQ0FBaUIsbUNBQWpCLENBQWQ7O0FBRU8sSUFBTUMsd0JBQXdCO0FBQUEsOExBQUcsaUJBQ3RDQyxRQURzQyxFQUV0Q0Msd0JBRnNDLEVBR3RDQyxjQUhzQyxFQUl0Q0MsT0FKc0M7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTzlCQyw4Q0FQOEIsR0FPT0Msd0VBQVEsQ0FDakQsbUJBRGlELEVBRWpEQywwRUFGaUQsRUFHakRMLHdCQUhpRCxDQVBmO0FBWXBDTSxtQkFBTyxDQUFDQyxHQUFSLENBQVlOLGNBQVosRUFBNEJDLE9BQTVCO0FBWm9DO0FBQUEsbUJBY2ZNLHFFQUFLLENBQ3hCVCxRQUR3QixFQUV4Qkksa0NBQWtDLENBQy9CTSxjQURILENBQ2tCUixjQURsQixFQUNrQ0MsT0FEbEMsQ0FGd0IsQ0FkVTs7QUFBQTtBQWM5QlEsa0JBZDhCO0FBbUJwQ0osbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxNQUFaLGFBQVlBLE1BQVosZ0RBQVlBLE1BQU0sQ0FBRUMsaUJBQXBCLG9GQUFZLHNCQUEyQkYsY0FBdkMsMkRBQVksdUJBQTRDLENBQTVDLENBQVo7QUFuQm9DLDZDQXFCN0I7QUFDTEcsb0NBQXNCLEVBQUVGLE1BQUYsYUFBRUEsTUFBRixpREFBRUEsTUFBTSxDQUFFQyxpQkFBVixxRkFBRSx1QkFBMkJGLGNBQTdCLDJEQUFFLHVCQUE0QyxDQUE1QyxDQURuQjtBQUVMSSxxQkFBTyxFQUFFO0FBRkosYUFyQjZCOztBQUFBO0FBQUE7QUFBQTtBQTBCcENQLG1CQUFPLENBQUNRLEtBQVI7QUExQm9DLGtCQTJCOUI7QUFDSkMsa0JBQUksRUFBRSxnQ0FERjtBQUVKQyxxQkFBTyxtQ0FBNEIsWUFBRUEsT0FBOUI7QUFGSCxhQTNCOEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBeEJsQix3QkFBd0I7QUFBQTtBQUFBO0FBQUEsR0FBOUIiLCJmaWxlIjoiLi9saWIvdXRpbHMvZmV0Y2hFeHRlcm5hbExvb3RCb3hEYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmF0Y2gsIGNvbnRyYWN0IH0gZnJvbSAnQHBvb2x0b2dldGhlci9ldGhlcnBsZXgnXG5cbmltcG9ydCBMb290Qm94Q29udHJvbGxlckFiaSBmcm9tICdAcG9vbHRvZ2V0aGVyL2xvb3QtYm94L2FiaXMvTG9vdEJveENvbnRyb2xsZXInXG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgncG9vbC1hcHA6ZmV0Y2hFeHRlcm5hbExvb3RCb3hEYXRhJylcblxuZXhwb3J0IGNvbnN0IGZldGNoRXh0ZXJuYWxMb290Qm94RGF0YSA9IGFzeW5jIChcbiAgcHJvdmlkZXIsXG4gIGxvb3RCb3hDb250cm9sbGVyQWRkcmVzcyxcbiAgbG9vdEJveEFkZHJlc3MsXG4gIHRva2VuSWQsXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBldGhlcnBsZXhMb290Qm94Q29udHJvbGxlckNvbnRyYWN0ID0gY29udHJhY3QoXG4gICAgICAnbG9vdEJveENvbnRyb2xsZXInLFxuICAgICAgTG9vdEJveENvbnRyb2xsZXJBYmksXG4gICAgICBsb290Qm94Q29udHJvbGxlckFkZHJlc3NcbiAgICApXG4gICAgY29uc29sZS5sb2cobG9vdEJveEFkZHJlc3MsIHRva2VuSWQpXG5cbiAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBiYXRjaChcbiAgICAgIHByb3ZpZGVyLFxuICAgICAgZXRoZXJwbGV4TG9vdEJveENvbnRyb2xsZXJDb250cmFjdFxuICAgICAgICAuY29tcHV0ZUFkZHJlc3MobG9vdEJveEFkZHJlc3MsIHRva2VuSWQpXG4gICAgKVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcz8ubG9vdEJveENvbnRyb2xsZXI/LmNvbXB1dGVBZGRyZXNzPy5bMF0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29tcHV0ZWRMb290Qm94QWRkcmVzczogdmFsdWVzPy5sb290Qm94Q29udHJvbGxlcj8uY29tcHV0ZUFkZHJlc3M/LlswXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKVxuICAgIHRocm93IHtcbiAgICAgIG5hbWU6ICdmZXRjaEV4dGVybmFsTG9vdEJveERhdGEgRXJyb3InLFxuICAgICAgbWVzc2FnZTogYEVycm9yIGZyb20gSW5mdXJhIHdhczogJHtlLm1lc3NhZ2V9YFxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/utils/fetchExternalLootBoxData.js\n");

/***/ })

})