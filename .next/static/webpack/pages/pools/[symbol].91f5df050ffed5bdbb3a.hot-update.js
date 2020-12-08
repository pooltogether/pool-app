webpackHotUpdate_N_E("pages/pools/[symbol]",{

/***/ "./lib/utils/fetchExternalLootBoxData.js":
/*!***********************************************!*\
  !*** ./lib/utils/fetchExternalLootBoxData.js ***!
  \***********************************************/
/*! exports provided: fetchExternalLootBoxData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchExternalLootBoxData\", function() { return fetchExternalLootBoxData; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _pooltogether_etherplex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pooltogether/etherplex */ \"./node_modules/@pooltogether/etherplex/index.js\");\n/* harmony import */ var _pooltogether_etherplex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pooltogether_etherplex__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pooltogether_loot_box_abis_LootBoxController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pooltogether/loot-box/abis/LootBoxController */ \"./node_modules/@pooltogether/loot-box/abis/LootBoxController.json\");\nvar _pooltogether_loot_box_abis_LootBoxController__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! @pooltogether/loot-box/abis/LootBoxController */ \"./node_modules/@pooltogether/loot-box/abis/LootBoxController.json\", 1);\n\n\n\n\n\nvar debug = __webpack_require__(/*! debug */ \"./node_modules/debug/src/browser.js\")('pool-app:fetchExternalLootBoxData');\n\nvar fetchExternalLootBoxData = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n    var provider, lootBoxAddress, tokenId, _values$lootBoxContro, _values$lootBoxContro2, etherplexLootBoxControllerContract, values;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            provider = _ref.provider, lootBoxAddress = _ref.lootBoxAddress, tokenId = _ref.tokenId;\n            console.log(provider);\n            console.log(lootBoxAddress);\n            console.log(tokenId);\n            _context.prev = 4;\n            etherplexLootBoxControllerContract = Object(_pooltogether_etherplex__WEBPACK_IMPORTED_MODULE_2__[\"contract\"])('lootBoxController', _pooltogether_loot_box_abis_LootBoxController__WEBPACK_IMPORTED_MODULE_3__, lootBoxAddress);\n            _context.next = 8;\n            return Object(_pooltogether_etherplex__WEBPACK_IMPORTED_MODULE_2__[\"batch\"])(provider, etherplexLootBoxControllerContract.computeAddress(lootBoxAddress, tokenId));\n\n          case 8:\n            values = _context.sent;\n            console.log(values);\n            return _context.abrupt(\"return\", {\n              computedLootBoxAddress: values === null || values === void 0 ? void 0 : (_values$lootBoxContro = values.lootBoxController) === null || _values$lootBoxContro === void 0 ? void 0 : (_values$lootBoxContro2 = _values$lootBoxContro.computeAddress) === null || _values$lootBoxContro2 === void 0 ? void 0 : _values$lootBoxContro2[0],\n              loading: false\n            });\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](4);\n            throw {\n              name: 'fetchExternalLootBoxData Error',\n              message: \"Error from Infura was: \".concat(_context.t0.message)\n            };\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[4, 13]]);\n  }));\n\n  return function fetchExternalLootBoxData(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzL2ZldGNoRXh0ZXJuYWxMb290Qm94RGF0YS5qcz82ZWViIl0sIm5hbWVzIjpbImRlYnVnIiwicmVxdWlyZSIsImZldGNoRXh0ZXJuYWxMb290Qm94RGF0YSIsInByb3ZpZGVyIiwibG9vdEJveEFkZHJlc3MiLCJ0b2tlbklkIiwiY29uc29sZSIsImxvZyIsImV0aGVycGxleExvb3RCb3hDb250cm9sbGVyQ29udHJhY3QiLCJjb250cmFjdCIsIkxvb3RCb3hDb250cm9sbGVyQWJpIiwiYmF0Y2giLCJjb21wdXRlQWRkcmVzcyIsInZhbHVlcyIsImNvbXB1dGVkTG9vdEJveEFkZHJlc3MiLCJsb290Qm94Q29udHJvbGxlciIsImxvYWRpbmciLCJuYW1lIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxrREFBRCxDQUFQLENBQWlCLG1DQUFqQixDQUFkOztBQUVPLElBQU1DLHdCQUF3QjtBQUFBLCtMQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdENDLG9CQURzQyxRQUN0Q0EsUUFEc0MsRUFFdENDLGNBRnNDLFFBRXRDQSxjQUZzQyxFQUd0Q0MsT0FIc0MsUUFHdENBLE9BSHNDO0FBS3RDQyxtQkFBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQUcsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxjQUFaO0FBQ0FFLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQVBzQztBQVU5QkcsOENBVjhCLEdBVU9DLHdFQUFRLENBQ2pELG1CQURpRCxFQUVqREMsMEVBRmlELEVBR2pETixjQUhpRCxDQVZmO0FBQUE7QUFBQSxtQkFnQmZPLHFFQUFLLENBQ3hCUixRQUR3QixFQUV4Qkssa0NBQWtDLENBQy9CSSxjQURILENBQ2tCUixjQURsQixFQUNrQ0MsT0FEbEMsQ0FGd0IsQ0FoQlU7O0FBQUE7QUFnQjlCUSxrQkFoQjhCO0FBcUJwQ1AsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxNQUFaO0FBckJvQyw2Q0F1QjdCO0FBQ0xDLG9DQUFzQixFQUFFRCxNQUFGLGFBQUVBLE1BQUYsZ0RBQUVBLE1BQU0sQ0FBRUUsaUJBQVYsb0ZBQUUsc0JBQTJCSCxjQUE3QiwyREFBRSx1QkFBNEMsQ0FBNUMsQ0FEbkI7QUFFTEkscUJBQU8sRUFBRTtBQUZKLGFBdkI2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE0QjlCO0FBQ0pDLGtCQUFJLEVBQUUsZ0NBREY7QUFFSkMscUJBQU8sbUNBQTRCLFlBQUVBLE9BQTlCO0FBRkgsYUE1QjhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQXhCaEIsd0JBQXdCO0FBQUE7QUFBQTtBQUFBLEdBQTlCIiwiZmlsZSI6Ii4vbGliL3V0aWxzL2ZldGNoRXh0ZXJuYWxMb290Qm94RGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhdGNoLCBjb250cmFjdCB9IGZyb20gJ0Bwb29sdG9nZXRoZXIvZXRoZXJwbGV4J1xuXG5pbXBvcnQgTG9vdEJveENvbnRyb2xsZXJBYmkgZnJvbSAnQHBvb2x0b2dldGhlci9sb290LWJveC9hYmlzL0xvb3RCb3hDb250cm9sbGVyJ1xuXG5jb25zdCBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3Bvb2wtYXBwOmZldGNoRXh0ZXJuYWxMb290Qm94RGF0YScpXG5cbmV4cG9ydCBjb25zdCBmZXRjaEV4dGVybmFsTG9vdEJveERhdGEgPSBhc3luYyAoe1xuICBwcm92aWRlcixcbiAgbG9vdEJveEFkZHJlc3MsXG4gIHRva2VuSWQsXG59KSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3ZpZGVyKVxuICBjb25zb2xlLmxvZyhsb290Qm94QWRkcmVzcylcbiAgY29uc29sZS5sb2codG9rZW5JZClcblxuICB0cnkge1xuICAgIGNvbnN0IGV0aGVycGxleExvb3RCb3hDb250cm9sbGVyQ29udHJhY3QgPSBjb250cmFjdChcbiAgICAgICdsb290Qm94Q29udHJvbGxlcicsXG4gICAgICBMb290Qm94Q29udHJvbGxlckFiaSxcbiAgICAgIGxvb3RCb3hBZGRyZXNzXG4gICAgKVxuXG4gICAgY29uc3QgdmFsdWVzID0gYXdhaXQgYmF0Y2goXG4gICAgICBwcm92aWRlcixcbiAgICAgIGV0aGVycGxleExvb3RCb3hDb250cm9sbGVyQ29udHJhY3RcbiAgICAgICAgLmNvbXB1dGVBZGRyZXNzKGxvb3RCb3hBZGRyZXNzLCB0b2tlbklkKVxuICAgIClcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY29tcHV0ZWRMb290Qm94QWRkcmVzczogdmFsdWVzPy5sb290Qm94Q29udHJvbGxlcj8uY29tcHV0ZUFkZHJlc3M/LlswXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cge1xuICAgICAgbmFtZTogJ2ZldGNoRXh0ZXJuYWxMb290Qm94RGF0YSBFcnJvcicsXG4gICAgICBtZXNzYWdlOiBgRXJyb3IgZnJvbSBJbmZ1cmEgd2FzOiAke2UubWVzc2FnZX1gXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/utils/fetchExternalLootBoxData.js\n");

/***/ })

})