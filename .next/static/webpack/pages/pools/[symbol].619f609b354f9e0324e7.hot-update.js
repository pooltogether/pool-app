webpackHotUpdate_N_E("pages/pools/[symbol]",{

/***/ "./lib/components/ContributeToLootBoxDropdown.jsx":
/*!********************************************************!*\
  !*** ./lib/components/ContributeToLootBoxDropdown.jsx ***!
  \********************************************************/
/*! exports provided: ContributeToLootBoxDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContributeToLootBoxDropdown\", function() { return ContributeToLootBoxDropdown; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/../i18n */ \"./i18n/client.js\");\n/* harmony import */ var lib_components_DropdownGeneric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/components/DropdownGeneric */ \"./lib/components/DropdownGeneric.jsx\");\n/* harmony import */ var lib_components_PTCopyToClipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/components/PTCopyToClipboard */ \"./lib/components/PTCopyToClipboard.jsx\");\n/* harmony import */ var lib_components_V3LoadingDots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/components/V3LoadingDots */ \"./lib/components/V3LoadingDots.jsx\");\n/* harmony import */ var lib_hooks_useEthereumLootBoxQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/hooks/useEthereumLootBoxQuery */ \"./lib/hooks/useEthereumLootBoxQuery.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction ContributeToLootBoxDropdown(props) {\n  _s();\n\n  var _useTranslation = Object(lib_i18n__WEBPACK_IMPORTED_MODULE_1__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  var pool = props.pool;\n\n  var _useEthereumLootBoxQu = Object(lib_hooks_useEthereumLootBoxQuery__WEBPACK_IMPORTED_MODULE_5__[\"useEthereumLootBoxQuery\"])(),\n      computedLootBoxAddress = _useEthereumLootBoxQu.computedLootBoxAddress; // const addressToCopy = computedLootBoxAddress || pool.poolAddress\n\n\n  if (!Boolean(computedLootBoxAddress)) {\n    return __jsx(lib_components_V3LoadingDots__WEBPACK_IMPORTED_MODULE_4__[\"V3LoadingDots\"], null);\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(lib_components_DropdownGeneric__WEBPACK_IMPORTED_MODULE_2__[\"DropdownGeneric\"], {\n    id: \"erc-20-awards-contribute-dropdown\",\n    className: \"mt-2 xs:mt-0 text-xxs sm:text-base text-lg\",\n    label: t('contributeToTheLootBox')\n  }, __jsx(\"div\", {\n    className: \"text-inverse text-xxs xs:text-xs mr-4 xs:mr-10 w-64 xs:w-auto sm:w-auto px-5 py-3 bg-card border-2 border-secondary rounded-lg\"\n  }, __jsx(\"div\", {\n    className: \"mb-2\"\n  }, t('transferTokensToLootBoxContractAddress')), __jsx(lib_components_PTCopyToClipboard__WEBPACK_IMPORTED_MODULE_3__[\"PTCopyToClipboard\"], {\n    widths: \"w-full\",\n    text: computedLootBoxAddress\n  }))));\n}\n\n_s(ContributeToLootBoxDropdown, \"3YixTCSe0iduUHMdSxZVVKgnrNs=\", false, function () {\n  return [lib_i18n__WEBPACK_IMPORTED_MODULE_1__[\"useTranslation\"], lib_hooks_useEthereumLootBoxQuery__WEBPACK_IMPORTED_MODULE_5__[\"useEthereumLootBoxQuery\"]];\n});\n\n_c = ContributeToLootBoxDropdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContributeToLootBoxDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbXBvbmVudHMvQ29udHJpYnV0ZVRvTG9vdEJveERyb3Bkb3duLmpzeD8yYTI1Il0sIm5hbWVzIjpbIkNvbnRyaWJ1dGVUb0xvb3RCb3hEcm9wZG93biIsInByb3BzIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwicG9vbCIsInVzZUV0aGVyZXVtTG9vdEJveFF1ZXJ5IiwiY29tcHV0ZWRMb290Qm94QWRkcmVzcyIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLDJCQUFULENBQXFDQyxLQUFyQyxFQUE0QztBQUFBOztBQUFBLHdCQUNuQ0MsK0RBQWMsRUFEcUI7QUFBQSxNQUN6Q0MsQ0FEeUMsbUJBQ3pDQSxDQUR5Qzs7QUFBQSxNQUd6Q0MsSUFIeUMsR0FHaENILEtBSGdDLENBR3pDRyxJQUh5Qzs7QUFBQSw4QkFLZEMsaUdBQXVCLEVBTFQ7QUFBQSxNQUt6Q0Msc0JBTHlDLHlCQUt6Q0Esc0JBTHlDLEVBT2pEOzs7QUFFQSxNQUFJLENBQUNDLE9BQU8sQ0FBQ0Qsc0JBQUQsQ0FBWixFQUFzQztBQUNwQyxXQUFPLE1BQUMsMEVBQUQsT0FBUDtBQUNEOztBQUVELFNBQU8sbUVBQ0wsTUFBQyw4RUFBRDtBQUNFLE1BQUUsRUFBQyxtQ0FETDtBQUVFLGFBQVMsRUFBQyw0Q0FGWjtBQUdFLFNBQUssRUFBRUgsQ0FBQyxDQUFDLHdCQUFEO0FBSFYsS0FLRTtBQUNFLGFBQVMsRUFBQztBQURaLEtBR0U7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHQSxDQUFDLENBQUMsd0NBQUQsQ0FESixDQUhGLEVBT0UsTUFBQyxrRkFBRDtBQUNFLFVBQU0sRUFBQyxRQURUO0FBRUUsUUFBSSxFQUFFRztBQUZSLElBUEYsQ0FMRixDQURLLENBQVA7QUFvQkQ7O0dBakNlTiwyQjtVQUNBRSx1RCxFQUlxQkcseUY7OztLQUxyQkwsMkIiLCJmaWxlIjoiLi9saWIvY29tcG9uZW50cy9Db250cmlidXRlVG9Mb290Qm94RHJvcGRvd24uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2xpYi8uLi9pMThuJ1xuaW1wb3J0IHsgRHJvcGRvd25HZW5lcmljIH0gZnJvbSAnbGliL2NvbXBvbmVudHMvRHJvcGRvd25HZW5lcmljJ1xuaW1wb3J0IHsgUFRDb3B5VG9DbGlwYm9hcmQgfSBmcm9tICdsaWIvY29tcG9uZW50cy9QVENvcHlUb0NsaXBib2FyZCdcbmltcG9ydCB7IFYzTG9hZGluZ0RvdHMgfSBmcm9tICdsaWIvY29tcG9uZW50cy9WM0xvYWRpbmdEb3RzJ1xuaW1wb3J0IHsgdXNlRXRoZXJldW1Mb290Qm94UXVlcnkgfSBmcm9tICdsaWIvaG9va3MvdXNlRXRoZXJldW1Mb290Qm94UXVlcnknXG5cbmV4cG9ydCBmdW5jdGlvbiBDb250cmlidXRlVG9Mb290Qm94RHJvcGRvd24ocHJvcHMpIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgeyBwb29sIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgY29tcHV0ZWRMb290Qm94QWRkcmVzcyB9ID0gdXNlRXRoZXJldW1Mb290Qm94UXVlcnkoKVxuXG4gIC8vIGNvbnN0IGFkZHJlc3NUb0NvcHkgPSBjb21wdXRlZExvb3RCb3hBZGRyZXNzIHx8IHBvb2wucG9vbEFkZHJlc3NcblxuICBpZiAoIUJvb2xlYW4oY29tcHV0ZWRMb290Qm94QWRkcmVzcykpIHtcbiAgICByZXR1cm4gPFYzTG9hZGluZ0RvdHMgLz5cbiAgfVxuXG4gIHJldHVybiA8PlxuICAgIDxEcm9wZG93bkdlbmVyaWNcbiAgICAgIGlkPSdlcmMtMjAtYXdhcmRzLWNvbnRyaWJ1dGUtZHJvcGRvd24nXG4gICAgICBjbGFzc05hbWU9J210LTIgeHM6bXQtMCB0ZXh0LXh4cyBzbTp0ZXh0LWJhc2UgdGV4dC1sZydcbiAgICAgIGxhYmVsPXt0KCdjb250cmlidXRlVG9UaGVMb290Qm94Jyl9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J3RleHQtaW52ZXJzZSB0ZXh0LXh4cyB4czp0ZXh0LXhzIG1yLTQgeHM6bXItMTAgdy02NCB4czp3LWF1dG8gc206dy1hdXRvIHB4LTUgcHktMyBiZy1jYXJkIGJvcmRlci0yIGJvcmRlci1zZWNvbmRhcnkgcm91bmRlZC1sZydcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTInPlxuICAgICAgICAgIHt0KCd0cmFuc2ZlclRva2Vuc1RvTG9vdEJveENvbnRyYWN0QWRkcmVzcycpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8UFRDb3B5VG9DbGlwYm9hcmRcbiAgICAgICAgICB3aWR0aHM9J3ctZnVsbCdcbiAgICAgICAgICB0ZXh0PXtjb21wdXRlZExvb3RCb3hBZGRyZXNzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Ecm9wZG93bkdlbmVyaWM+XG4gIDwvPlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/components/ContributeToLootBoxDropdown.jsx\n");

/***/ })

})