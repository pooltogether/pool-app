webpackHotUpdate_N_E("pages/pools/[symbol]",{

/***/ "./lib/components/ContributeToLootBoxDropdown.jsx":
/*!********************************************************!*\
  !*** ./lib/components/ContributeToLootBoxDropdown.jsx ***!
  \********************************************************/
/*! exports provided: ContributeToLootBoxDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContributeToLootBoxDropdown\", function() { return ContributeToLootBoxDropdown; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lib_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/../i18n */ \"./i18n/client.js\");\n/* harmony import */ var lib_components_DropdownGeneric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/components/DropdownGeneric */ \"./lib/components/DropdownGeneric.jsx\");\n/* harmony import */ var lib_components_PTCopyToClipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/components/PTCopyToClipboard */ \"./lib/components/PTCopyToClipboard.jsx\");\n/* harmony import */ var lib_hooks_useEthereumLootBoxQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/hooks/useEthereumLootBoxQuery */ \"./lib/hooks/useEthereumLootBoxQuery.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction ContributeToLootBoxDropdown(props) {\n  _s();\n\n  var _useTranslation = Object(lib_i18n__WEBPACK_IMPORTED_MODULE_1__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  var pool = props.pool; // const { lootBoxAddress, tokenId } = useGraphLootBoxQuery(lootBoxAddress, tokenId)\n\n  var _useEthereumLootBoxQu = Object(lib_hooks_useEthereumLootBoxQuery__WEBPACK_IMPORTED_MODULE_4__[\"useEthereumLootBoxQuery\"])(lootBoxAddress, tokenId),\n      computedLootBoxAddress = _useEthereumLootBoxQu.computedLootBoxAddress;\n\n  var addressToCopy = computedLootBoxAddress; // const addressToCopy = computedLootBoxAddress || pool.poolAddress\n\n  if (!Boolean(addressToCopy)) {}\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(lib_components_DropdownGeneric__WEBPACK_IMPORTED_MODULE_2__[\"DropdownGeneric\"], {\n    id: \"erc-20-awards-contribute-dropdown\",\n    className: \"mt-2 xs:mt-0 text-xxs sm:text-base text-lg\",\n    label: t('contributeToTheLootBox')\n  }, __jsx(\"div\", {\n    className: \"text-inverse text-xxs xs:text-xs mr-4 xs:mr-10 w-64 xs:w-auto sm:w-auto px-5 py-3 bg-card border-2 border-secondary rounded-lg\"\n  }, __jsx(\"div\", {\n    className: \"mb-2\"\n  }, t('transferTokensToLootBoxContractAddress')), __jsx(lib_components_PTCopyToClipboard__WEBPACK_IMPORTED_MODULE_3__[\"PTCopyToClipboard\"], {\n    widths: \"w-full\",\n    text: addressToCopy\n  }))));\n}\n\n_s(ContributeToLootBoxDropdown, \"3YixTCSe0iduUHMdSxZVVKgnrNs=\", false, function () {\n  return [lib_i18n__WEBPACK_IMPORTED_MODULE_1__[\"useTranslation\"], lib_hooks_useEthereumLootBoxQuery__WEBPACK_IMPORTED_MODULE_4__[\"useEthereumLootBoxQuery\"]];\n});\n\n_c = ContributeToLootBoxDropdown;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContributeToLootBoxDropdown\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbXBvbmVudHMvQ29udHJpYnV0ZVRvTG9vdEJveERyb3Bkb3duLmpzeD8yYTI1Il0sIm5hbWVzIjpbIkNvbnRyaWJ1dGVUb0xvb3RCb3hEcm9wZG93biIsInByb3BzIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwicG9vbCIsInVzZUV0aGVyZXVtTG9vdEJveFF1ZXJ5IiwibG9vdEJveEFkZHJlc3MiLCJ0b2tlbklkIiwiY29tcHV0ZWRMb290Qm94QWRkcmVzcyIsImFkZHJlc3NUb0NvcHkiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSwyQkFBVCxDQUFxQ0MsS0FBckMsRUFBNEM7QUFBQTs7QUFBQSx3QkFDbkNDLCtEQUFjLEVBRHFCO0FBQUEsTUFDekNDLENBRHlDLG1CQUN6Q0EsQ0FEeUM7O0FBQUEsTUFHekNDLElBSHlDLEdBR2hDSCxLQUhnQyxDQUd6Q0csSUFIeUMsRUFLakQ7O0FBTGlELDhCQU9kQyxpR0FBdUIsQ0FBQ0MsY0FBRCxFQUFpQkMsT0FBakIsQ0FQVDtBQUFBLE1BT3pDQyxzQkFQeUMseUJBT3pDQSxzQkFQeUM7O0FBU2pELE1BQU1DLGFBQWEsR0FBR0Qsc0JBQXRCLENBVGlELENBVWpEOztBQUVBLE1BQUksQ0FBQ0UsT0FBTyxDQUFDRCxhQUFELENBQVosRUFBNkIsQ0FFNUI7O0FBRUQsU0FBTyxtRUFDTCxNQUFDLDhFQUFEO0FBQ0UsTUFBRSxFQUFDLG1DQURMO0FBRUUsYUFBUyxFQUFDLDRDQUZaO0FBR0UsU0FBSyxFQUFFTixDQUFDLENBQUMsd0JBQUQ7QUFIVixLQUtFO0FBQ0UsYUFBUyxFQUFDO0FBRFosS0FHRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0dBLENBQUMsQ0FBQyx3Q0FBRCxDQURKLENBSEYsRUFPRSxNQUFDLGtGQUFEO0FBQ0UsVUFBTSxFQUFDLFFBRFQ7QUFFRSxRQUFJLEVBQUVNO0FBRlIsSUFQRixDQUxGLENBREssQ0FBUDtBQW9CRDs7R0FwQ2VULDJCO1VBQ0FFLHVELEVBTXFCRyx5Rjs7O0tBUHJCTCwyQiIsImZpbGUiOiIuL2xpYi9jb21wb25lbnRzL0NvbnRyaWJ1dGVUb0xvb3RCb3hEcm9wZG93bi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnbGliLy4uL2kxOG4nXG5pbXBvcnQgeyBEcm9wZG93bkdlbmVyaWMgfSBmcm9tICdsaWIvY29tcG9uZW50cy9Ecm9wZG93bkdlbmVyaWMnXG5pbXBvcnQgeyBQVENvcHlUb0NsaXBib2FyZCB9IGZyb20gJ2xpYi9jb21wb25lbnRzL1BUQ29weVRvQ2xpcGJvYXJkJ1xuaW1wb3J0IHsgdXNlRXRoZXJldW1Mb290Qm94UXVlcnkgfSBmcm9tICdsaWIvaG9va3MvdXNlRXRoZXJldW1Mb290Qm94UXVlcnknXG5cbmV4cG9ydCBmdW5jdGlvbiBDb250cmlidXRlVG9Mb290Qm94RHJvcGRvd24ocHJvcHMpIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgeyBwb29sIH0gPSBwcm9wc1xuXG4gIC8vIGNvbnN0IHsgbG9vdEJveEFkZHJlc3MsIHRva2VuSWQgfSA9IHVzZUdyYXBoTG9vdEJveFF1ZXJ5KGxvb3RCb3hBZGRyZXNzLCB0b2tlbklkKVxuXG4gIGNvbnN0IHsgY29tcHV0ZWRMb290Qm94QWRkcmVzcyB9ID0gdXNlRXRoZXJldW1Mb290Qm94UXVlcnkobG9vdEJveEFkZHJlc3MsIHRva2VuSWQpXG5cbiAgY29uc3QgYWRkcmVzc1RvQ29weSA9IGNvbXB1dGVkTG9vdEJveEFkZHJlc3NcbiAgLy8gY29uc3QgYWRkcmVzc1RvQ29weSA9IGNvbXB1dGVkTG9vdEJveEFkZHJlc3MgfHwgcG9vbC5wb29sQWRkcmVzc1xuXG4gIGlmICghQm9vbGVhbihhZGRyZXNzVG9Db3B5KSkge1xuXG4gIH1cblxuICByZXR1cm4gPD5cbiAgICA8RHJvcGRvd25HZW5lcmljXG4gICAgICBpZD0nZXJjLTIwLWF3YXJkcy1jb250cmlidXRlLWRyb3Bkb3duJ1xuICAgICAgY2xhc3NOYW1lPSdtdC0yIHhzOm10LTAgdGV4dC14eHMgc206dGV4dC1iYXNlIHRleHQtbGcnXG4gICAgICBsYWJlbD17dCgnY29udHJpYnV0ZVRvVGhlTG9vdEJveCcpfVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWludmVyc2UgdGV4dC14eHMgeHM6dGV4dC14cyBtci00IHhzOm1yLTEwIHctNjQgeHM6dy1hdXRvIHNtOnctYXV0byBweC01IHB5LTMgYmctY2FyZCBib3JkZXItMiBib3JkZXItc2Vjb25kYXJ5IHJvdW5kZWQtbGcnXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0yJz5cbiAgICAgICAgICB7dCgndHJhbnNmZXJUb2tlbnNUb0xvb3RCb3hDb250cmFjdEFkZHJlc3MnKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFBUQ29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgd2lkdGhzPSd3LWZ1bGwnXG4gICAgICAgICAgdGV4dD17YWRkcmVzc1RvQ29weX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRHJvcGRvd25HZW5lcmljPlxuICA8Lz5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/components/ContributeToLootBoxDropdown.jsx\n");

/***/ })

})