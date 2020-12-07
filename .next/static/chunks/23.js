(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[23],{

/***/ "./node_modules/@pooltogether/bnc-onboard/dist/esm/content-e75b9e34.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@pooltogether/bnc-onboard/dist/esm/content-e75b9e34.js ***!
  \*****************************************************************************/
/*! exports provided: e, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return extensionInstallMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"m\", function() { return mobileWalletInstallMessage; });\nvar extensionInstallMessage = function extensionInstallMessage(helpers) {\n  var currentWallet = helpers.currentWallet,\n      selectedWallet = helpers.selectedWallet;\n\n  if (currentWallet) {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    We have detected that you already have\\n    <b>\".concat(currentWallet, \"</b>\\n    installed. If you would prefer to use\\n    <b>\").concat(selectedWallet, \"</b>\\n    instead, then click below to install.\\n    </p>\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    <b>Tip:</b>\\n    If you already have \").concat(selectedWallet, \" installed, check your\\n    browser extension settings to make sure that you have it enabled\\n    and that you have disabled any other browser extension wallets.\\n    <span\\n      class=\\\"bn-onboard-clickable\\\"\\n      style=\\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\\"\\n      onclick=\\\"window.location.reload();\\\">\\n      Then refresh the page.\\n    </span>\\n    </p>\\n    \");\n  } else {\n    return \"\\n    <p style=\\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\\">\\n    You'll need to open or install <b>\".concat(selectedWallet, \"</b> to continue.\\n    \").concat(selectedWallet === 'Opera' ? '<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style=\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\" class=\"bn-onboard-clickable\" href=\"https://help.opera.com/en/touch/crypto-wallet/\" rel=\"noreferrer noopener\" target=\"_blank\">enabled</a></i>' : '', \"\\n    </p>\\n    \");\n  }\n};\n\nvar mobileWalletInstallMessage = function mobileWalletInstallMessage(helpers) {\n  var selectedWallet = helpers.selectedWallet;\n  return \"\\n  <p style=\\\"font-size: 0.889rem;\\\">\\n    You'll need to open or install <b>\".concat(selectedWallet, \"</b> to continue. Click below to open this Dapp with <b>\").concat(selectedWallet, \"</b>.\\n  </p>\\n  \");\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bwb29sdG9nZXRoZXIvYm5jLW9uYm9hcmQvZGlzdC9lc20vY29udGVudC1lNzViOWUzNC5qcz9hNmNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxzQkFBc0Isb0JBQW9CLGtRQUFrUSxzQkFBc0Isb0JBQW9CLDBUQUEwVCxxQkFBcUIsc0JBQXNCLDZDQUE2QztBQUN6eEIsR0FBRztBQUNILGlEQUFpRCxzQkFBc0Isb0JBQW9CLHNQQUFzUCxxQkFBcUIsc0JBQXNCO0FBQzVYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AcG9vbHRvZ2V0aGVyL2JuYy1vbmJvYXJkL2Rpc3QvZXNtL2NvbnRlbnQtZTc1YjllMzQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXh0ZW5zaW9uSW5zdGFsbE1lc3NhZ2UgPSBmdW5jdGlvbiBleHRlbnNpb25JbnN0YWxsTWVzc2FnZShoZWxwZXJzKSB7XG4gIHZhciBjdXJyZW50V2FsbGV0ID0gaGVscGVycy5jdXJyZW50V2FsbGV0LFxuICAgICAgc2VsZWN0ZWRXYWxsZXQgPSBoZWxwZXJzLnNlbGVjdGVkV2FsbGV0O1xuXG4gIGlmIChjdXJyZW50V2FsbGV0KSB7XG4gICAgcmV0dXJuIFwiXFxuICAgIDxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDsgbWFyZ2luOiAwLjg4OXJlbSAwO1xcXCI+XFxuICAgIFdlIGhhdmUgZGV0ZWN0ZWQgdGhhdCB5b3UgYWxyZWFkeSBoYXZlXFxuICAgIDxiPlwiLmNvbmNhdChjdXJyZW50V2FsbGV0LCBcIjwvYj5cXG4gICAgaW5zdGFsbGVkLiBJZiB5b3Ugd291bGQgcHJlZmVyIHRvIHVzZVxcbiAgICA8Yj5cIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj5cXG4gICAgaW5zdGVhZCwgdGhlbiBjbGljayBiZWxvdyB0byBpbnN0YWxsLlxcbiAgICA8L3A+XFxuICAgIDxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDsgbWFyZ2luOiAwLjg4OXJlbSAwO1xcXCI+XFxuICAgIDxiPlRpcDo8L2I+XFxuICAgIElmIHlvdSBhbHJlYWR5IGhhdmUgXCIpLmNvbmNhdChzZWxlY3RlZFdhbGxldCwgXCIgaW5zdGFsbGVkLCBjaGVjayB5b3VyXFxuICAgIGJyb3dzZXIgZXh0ZW5zaW9uIHNldHRpbmdzIHRvIG1ha2Ugc3VyZSB0aGF0IHlvdSBoYXZlIGl0IGVuYWJsZWRcXG4gICAgYW5kIHRoYXQgeW91IGhhdmUgZGlzYWJsZWQgYW55IG90aGVyIGJyb3dzZXIgZXh0ZW5zaW9uIHdhbGxldHMuXFxuICAgIDxzcGFuXFxuICAgICAgY2xhc3M9XFxcImJuLW9uYm9hcmQtY2xpY2thYmxlXFxcIlxcbiAgICAgIHN0eWxlPVxcXCJjb2xvcjogIzRhOTBlMjsgZm9udC1zaXplOiAwLjg4OXJlbTsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxcIlxcbiAgICAgIG9uY2xpY2s9XFxcIndpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcXFwiPlxcbiAgICAgIFRoZW4gcmVmcmVzaCB0aGUgcGFnZS5cXG4gICAgPC9zcGFuPlxcbiAgICA8L3A+XFxuICAgIFwiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJcXG4gICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBtYXJnaW46IDAuODg5cmVtIDA7XFxcIj5cXG4gICAgWW91J2xsIG5lZWQgdG8gb3BlbiBvciBpbnN0YWxsIDxiPlwiLmNvbmNhdChzZWxlY3RlZFdhbGxldCwgXCI8L2I+IHRvIGNvbnRpbnVlLlxcbiAgICBcIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0ID09PSAnT3BlcmEnID8gJzxicj48YnI+PGk+SGludDogSWYgeW91IGFscmVhZHkgaGF2ZSBPcGVyYSBpbnN0YWxsZWQsIG1ha2Ugc3VyZSB0aGF0IHlvdXIgd2ViMyB3YWxsZXQgaXMgPGEgc3R5bGU9XCJjb2xvcjogIzRhOTBlMjsgZm9udC1zaXplOiAwLjg4OXJlbTsgZm9udC1mYW1pbHk6IGluaGVyaXQ7XCIgY2xhc3M9XCJibi1vbmJvYXJkLWNsaWNrYWJsZVwiIGhyZWY9XCJodHRwczovL2hlbHAub3BlcmEuY29tL2VuL3RvdWNoL2NyeXB0by13YWxsZXQvXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiPmVuYWJsZWQ8L2E+PC9pPicgOiAnJywgXCJcXG4gICAgPC9wPlxcbiAgICBcIik7XG4gIH1cbn07XG5cbnZhciBtb2JpbGVXYWxsZXRJbnN0YWxsTWVzc2FnZSA9IGZ1bmN0aW9uIG1vYmlsZVdhbGxldEluc3RhbGxNZXNzYWdlKGhlbHBlcnMpIHtcbiAgdmFyIHNlbGVjdGVkV2FsbGV0ID0gaGVscGVycy5zZWxlY3RlZFdhbGxldDtcbiAgcmV0dXJuIFwiXFxuICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjg4OXJlbTtcXFwiPlxcbiAgICBZb3UnbGwgbmVlZCB0byBvcGVuIG9yIGluc3RhbGwgPGI+XCIuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4gdG8gY29udGludWUuIENsaWNrIGJlbG93IHRvIG9wZW4gdGhpcyBEYXBwIHdpdGggPGI+XCIpLmNvbmNhdChzZWxlY3RlZFdhbGxldCwgXCI8L2I+LlxcbiAgPC9wPlxcbiAgXCIpO1xufTtcblxuZXhwb3J0IHsgZXh0ZW5zaW9uSW5zdGFsbE1lc3NhZ2UgYXMgZSwgbW9iaWxlV2FsbGV0SW5zdGFsbE1lc3NhZ2UgYXMgbSB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@pooltogether/bnc-onboard/dist/esm/content-e75b9e34.js\n");

/***/ }),

/***/ "./node_modules/@pooltogether/bnc-onboard/dist/esm/opera-touch-36d44122.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@pooltogether/bnc-onboard/dist/esm/opera-touch-36d44122.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_e75b9e34_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-e75b9e34.js */ \"./node_modules/@pooltogether/bnc-onboard/dist/esm/content-e75b9e34.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar img = \"data:image/png;base64,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\";\nvar img$1 = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAC/VBMVEVHcEzOTrltPOlRVPBhH4y7PdJ4OMRhNclZFotlOe/VT7pjPPVhO/hfOvdgOfZhK8lWF4A0m+bhYaFPHJRYGHxMDpNPbvVkPfPLRrc/oe1hN/VaUvBAGnxiQPNAmvBxIps4p/FdEnRbFoZyG5uxOdCVMbtnOvK3P8xkOPVfMOA4qfBdDW3fXa+5NNmjNsfAPdBlOfDjYqE7qPd4N8KjMcZdDnCyUZ21OtViEnA4sPY1p+2lNMfcXafHSsFhNNdMePhhOvNNdPa4O9E/GHjoYp5kJKSJNb7wbZE4r/j7dYo3s/elSJhXVfdVWvKaN79qJ5vWVbI6tPpWIJK1O89aNesuLoc3FHDxa5RYL+aVL7lhFG9yNdE0sfChM8ZoJKhWWvRWW/jra5C4Ps17J6dDjfN7K6dmI5w+kexqJKeZL7pDU8GJKrJcHY2tN87wa5Q2tPUxW7FkI5hqJplMcfdhOvPHRce2OtXKSsHVVLFdEG5NXOVSYvdXL7fUXKVMHZs7s/tkN/XrZptdNvM9iuXjY582FG86EWtMGouqN8yPL7c7etJYFpJVXPZgJ8ROGYcwDWYyS6SNLrRtG42KLLJaGYROFqdHaNs+tv85tfw4GXc8FHU1KIZhOfdhOPVhN/RhNey3O9VhNvDZWaqRMLjkY5zERsXRUrS1OtRgL9tgMuOpN8qvOc+gM8OXMbz0codbEHtiOflfNOhdHZ9cF46rOM3pZ5WcM7/vbJD9eIKnNshdH6mzOtLISr/fX6KML7NfLNFfK8xfKcZeJryiNcVeIrHxboy/Qcv/f32/WJBOFqhWH7V5LplOH8eNO5xVKNNMKujVZYvobYZEi/Y+o/guQ5lHjvxUXPYsEWhAmvc1bcNaSfVSZfZCk/UyFW9wJp52J6JaTvY9nvV6KaZXVvZdII9YUfZcRfUkAVM5juBPbPZ/KqlOHIQnCl9SYvZLd/aILbBIgPVKe/VmI5deQPY4s/g8FnVMcvZFGXxfPPVXH4qELa5gIpFtJZo6qvVHhvYqRtQTAAAAnHRSTlMA/h0MF/4DBgwsGH/e8tfARTFiJTD+fz0KF800Y2AjUEjukiLH7KVmbfCE2RAreEZQKWv+h8P93WXDWLqz1Hhxs+yTsUQ3qeid1dH78rjNwovwgank/JmX/WOo/rXgoi3Y9Xl0vvDUlo4/vJD11rD7+ufzxsDv6srxf1j1cNBb5JHP/eXr9s7N6sH+4pzp9d391GDivOv+/tXsubCKGPWSAAAG50lEQVR4XqTSW2siSRiA4cKWanc1YBNJEE3HzUIIkovgnblxRQISIqKgMINEIUYnJhAnyc0kQ1wIiSBhYjLLzDjzrzyfzfl8Ps3skS1b2e0qNW12n+qiQbpf6qMFgmiWYTTDiIZhlBD8P0pGo9OaXXr9KKJ3ucxalKXAfwOVLJfTfwrZZjm20ChK6jQM+/yTQkixOrPeds8zW7/ZXNphJfXMJKvxh2x/Nrj/yJm1fdIyStA2mtWOhmw7idpCF7erpcTOcc2OLaTXtTs4o/Hrqx0ernkcyeWC0SQSjQZzkRWvVsMCYbRSZ84ixSwPyhUjwaSjlDnnZDKOZDS34h8WPiTFeIvZIi6RyEaijswRcl53VFVKBv1CRVa3EscVU9njXDLDHYuAfloNLD75cRiDN05IpdDpYhtVqyUkg3btxhUdX9SdoBVIGbx/8VyjHY/fRGMbayan02la24ihJs9DqXReMqkloAWqy3hNSF1/iDnlitorYoX68+pDg1irospgvMFdpj4E7AqxhAYcSEvEy861xmLzqVnD/CXhxhh4K8cH6pS/CX8lmdTiJvOi3iPu0hiQNz4pVodjRPDMtAwBgVYZTwiPRosYgkZQbXp3hnsXbnhSNE/kCifGLhFoipb3nZHFl8Qoqq6lQuECrdrFMbhp0JxE8cuvhB+WsQ9DLVoKF7iCR0WBFqDEPkME9/vk/KHd6xfpdJq/00s9WI8AwzP7uBk7f+h1TxrZ4+0lCw2e0uv7nWC1/zuB2zO2R/AMgSdJxn23uDmf+J/gYkNvzCICT4Jb1lvC6xEIaijLAWlBCgR0bpX/wM29ous91dg24WDADYSMWMuE1/V/t0i6nSfIumkgRDxRqZQrPOW5F99zQfdPeZLlOyBocGqywrdbqUz/CBDYLTvE5fNSERAERb5d3KlVAasT9+TJYEc3BYQNjk+e4iZ7JSg49PP2Ha5DJoJAGD3x/jfc1cQIAHCg/xDvHXYsUKANdO/mFRGc7oWAli7c3X3Dlqy/rSCc2rwi/F16/f6kdcUBHL4beIEL90rARcJijEiFRhGMQkmkxhB+xJg4MkzQNmuCSRubDZMl1B9JXaYxWU3TJd3WdxeQ1g51HQPnlOrablMnWrT2H9gfsJfbG9P4YgeUes9XJqfxuTch4cUn5+Rwz7l4+qWUuoFLHQihoFxCkRBPPwem0Tq7wywIprgasqDE8+0j3H3PTcqijSAH+St6UPjkOQtNEfn0PghemO6najgeRdD99uK11YTBtp5HP2Iu9PRTRgWfzwlpZaTBdhBc7mmm5IpUNIIhDza3LwOftJUIRt8h+GT5CQYFzzfCdby3fu4RruOeoqDxHCMcaH8KhJrzPxs8GE1p0fZKgm7TLyxgvTt6A2Xh4IxTxD9sZ2gBlw9Wh1keLxI/erT/zhIu5DdT7zcoUiCo6CALMu1LP2CW9E5TfvuKACzZ9kWZ9SiI8Rs0+Q0W9HjCDZY2hNYAp5nOHwE8XBayI4BuvpTAe4kBU+GQSoFehOyQ0viHE2sJgbWEuQkFJdWKSVQR4FmyY/TSWmJGGJzRmwozk3WiHq6T5KA3DydmTqB0hdN0/CrC47nIJMmrCDOAepgKA3P8ssRGAd5YfogmfQUwXFxLaSeLzTke5cPysj3Dn7jHt5ya4ullYfl49ORCSTZcblkM/sfArZt0cb1kHBsXjhDdnKXMkjgvw94IQ73VwMXjsbgQGz57WcyXfwVGBqgTsi/jQIw982+FZOQ9yMcIgqKazngM4M54XJp8o98DPjM2JZk8Bk0aZfT/9VocsDeqagHPkTaN99KxXjlTuqdx+R4Cow7m1N/b3nR6/uRG+nobShdVjofQOENTgMgYTs9j0n0XPa7TySbV+NQzwKFCPcjUEZ7H9aGiwaXBcoxLNTH7bBbdAg5Vyal82HFxDjf/6mqPr6VJczwdmtYwrsDELDRVXBCAFsHii7lXc61TAVdLcXFVQ8FfgJUVr0owCVisfAHs7V21ebu6hgKBwNCE1xtcwSUzK0NYDxRlHZW/AXt7rbastwvxBjdxSSToAPMF1Lfv/Q7kcq3Ps5vJTCYJoa+C4/1ltiWRu/LeH0Aul3tj289sIZljW3mvs92e+rJbu0R8+9rGzs6G0A6y8Xd3dv91cqsgk9zP2navD34hJjlv3bXXbqwCO9urq3+93O22ZY907+5e/2hQqaaIiNSDNz5fhLaRxX8OXyKHh4sPHnz1MZousXql7u5nP5/2wZGv7+rcYupd0BKp2q6z1v1UQt13um/qpTRNkAGro66qHdNdsTbW1RXC6KPRemXMrqyqB2tBjBZX1dpR0tpYYD3KSanzkEirlHb7WIHdrlRLy43tP42uE11Kpf02AAAAAElFTkSuQmCC\";\n\nfunction operaTouch(options) {\n  var preferred = options.preferred,\n      label = options.label,\n      iconSrc = options.iconSrc,\n      svg = options.svg;\n  return {\n    name: label || 'Opera Touch',\n    iconSrc: iconSrc || img,\n    iconSrcSet: iconSrc || img$1,\n    svg: svg,\n    wallet: function () {\n      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {\n        var getProviderName, getAddress, getBalance, getNetwork, provider, enabled;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                getProviderName = helpers.getProviderName, getAddress = helpers.getAddress, getBalance = helpers.getBalance, getNetwork = helpers.getNetwork;\n                provider = window.ethereum || window.web3 && window.web3.currentProvider;\n                enabled = false;\n                return _context.abrupt(\"return\", {\n                  provider: provider,\n                  \"interface\": provider && getProviderName(provider) === undefined ? {\n                    name: 'Opera Touch',\n                    connect: function connect() {\n                      return provider.enable().then(function (res) {\n                        enabled = true;\n                        return res;\n                      });\n                    },\n                    address: {\n                      get: function get() {\n                        return enabled ? getAddress(provider) : Promise.resolve(null);\n                      }\n                    },\n                    network: {\n                      get: function get() {\n                        return enabled ? getNetwork(provider) : Promise.resolve(null);\n                      }\n                    },\n                    balance: {\n                      get: function get() {\n                        return enabled ? getBalance(provider) : Promise.resolve(null);\n                      }\n                    }\n                  } : null\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function wallet(_x) {\n        return _wallet.apply(this, arguments);\n      }\n\n      return wallet;\n    }(),\n    type: 'injected',\n    link: 'https://www.opera.com/mobile/touch',\n    installMessage: _content_e75b9e34_js__WEBPACK_IMPORTED_MODULE_0__[\"e\"],\n    mobile: true,\n    preferred: preferred,\n    osExclusions: ['Android']\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (operaTouch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bwb29sdG9nZXRoZXIvYm5jLW9uYm9hcmQvZGlzdC9lc20vb3BlcmEtdG91Y2gtMzZkNDQxMjIuanM/ZjQ2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsNEVBQTRFLE1BQU0sMEJBQTBCLHdCQUF3QixFQUFFLGdCQUFnQixlQUFlLFFBQVEsRUFBRSxpQkFBaUIsZ0JBQWdCLEVBQUUsT0FBTyw0Q0FBNEMsRUFBRTs7QUFFdlEsZ0NBQWdDLHFCQUFxQixtQ0FBbUMsZ0RBQWdELGdDQUFnQyx3QkFBd0Isd0VBQXdFLEVBQUUsdUJBQXVCLHVFQUF1RSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsR0FBRzs7QUFFOVQ7QUFDckUsMEJBQTBCO0FBQzFCLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUseUVBQVUiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHBvb2x0b2dldGhlci9ibmMtb25ib2FyZC9kaXN0L2VzbS9vcGVyYS10b3VjaC0zNmQ0NDEyMi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHsgdHJ5IHsgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpOyB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlOyB9IGNhdGNoIChlcnJvcikgeyByZWplY3QoZXJyb3IpOyByZXR1cm47IH0gaWYgKGluZm8uZG9uZSkgeyByZXNvbHZlKHZhbHVlKTsgfSBlbHNlIHsgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpOyB9IH1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzOyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7IGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTsgfSBmdW5jdGlvbiBfdGhyb3coZXJyKSB7IGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpOyB9IF9uZXh0KHVuZGVmaW5lZCk7IH0pOyB9OyB9XG5cbmltcG9ydCB7IGUgYXMgZXh0ZW5zaW9uSW5zdGFsbE1lc3NhZ2UgfSBmcm9tICcuL2NvbnRlbnQtZTc1YjllMzQuanMnO1xudmFyIGltZyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFvQ0FZQUFBQ00vcmh0QUFBR0pVbEVRVlI0QWNXWmMzeWpTUnlIZTdadmJadHhVdHQyMDNodDI3WnRlOVA5Vkd2YnRxMjZRWlc1ZnJQTVpkNGl5WDN1ajZkSjVqZHY1aGxQcG5aZVBmMHRabXhjd2xldEUzTXJzWmVuT2JWYzlWVEJUc3pwRDFwdmVTb1ZKdWdGaUNHUE5XVlk5QkFLNXlYbWpSSWtGKzdnSldwdjhsTDA2ZHhrbmVGemVFbTZORjZTOWhyeVFMcmxyTk50L2xQQlFOYis3eHkzNWdVSzEya1NSVnYwR2ZZSlJlUUR3czA2RTVEbXNKT1k0TGk3SUEyeStBNjBxazBGMFlYT3kvUzdYWllYRXBjTlJjUnhtY2FNejJQOFllY0pKeTZKTkhXWVpRTFN1SU5PRmJwT3o5cU1YckJhc0t0MzVvK3VNN1dEWFdkazZTSGdPbHREQlRIazRZVnNJeTFxRHlRTnY0MHRFZVJodVMxNTdkRGpaQWVVWVpGZ3VQanBYNmlwMTdSQzRqRlJTd1V4WUd5WkNyMWV0ZnhlZmhMZ2Zkc0tQUWdUclg5dVp3VHZPZlZHTCtKWDZQUnp1UVFoNXpkWXIvWWRXMFM4UjJpb0lPWTdQSXU0T0szZnk3VVRTOXorN0ZZVDR4U2dRT2VLQTl5Y0tnMWNBVm1IU2dPSnFHSS9jLzdxYlh4RlBpWkphcmRDTG1pQWdmajMwMUF4eHZwa1p2czRxL3ZRdnZqelNRQlJuMnFqem5sVkhVVThxZ3lsZ2hnazhWeXBnc0ZkZEtNaEVOUk55MGh3ejRLczRMQ0wvbVdkaVdoZFNBWlVIMHRLSXJMV3dNNGxDb1lwZEo2aEtwMmhOQ0tsZWtsNTF6Tlp4WUhOSW10T2VSeFpheXFKcURYSkRLVEgxUm1UNWwxaEs1Y3FpSzZOak5hZGlKSVpTSGk4aGdwaWtmRzY5WmJ1RHUxcXpJcVYxSmxKbUdoZmJ3RnBYMzllRXNheG1TQmFKVGFpa0VSRmFrdEE5MUxwckc5ZzZiWUlJQUNSa3VoWmY0MkhpU0NNMFhvUWpBbldVRUVzMmoxakl2SmJBd3J2MFhpbHBudURwWVFKVk1KRVVPYVU1UjNucDlmRyttb0pFM0YrMmx5cDZHVXJhd1Z2UlU3OWFVRGpOY2NHTmxsUCtqVmViUWJTVVlGNTFWTTRId1VWSXYwOHFiZUJ4SHRvcUNBbWRkWWRwcTc2RmpDbzZiclJZNXB2SThPYWJxQ0NHUElZQlZFb0NwZTVGeEdKaTRZS1lncWhicEpsUXZSdUh0ZHN1dzRpTkthMFRDVGptcWxUTWZUczBHMXlvZmFsMUZGTFNrTEpUNWZZU25CT200U3FVMW9rUG9RSUU0anZZUjF1YmhmRnZhYVU4L1VGTXBHV01DSG5hM01WRG0rRXRoTEViSjdaT3ZYTXJOWTdDVE1wbWN2NXV6cmFvZXNVZ3Z4aUNRMk5ENEpwOU9YRmNsYTJQYnAxUWR1OXBDUldzbzlPTVU2UWtnU1ZmTDFSVU1YVlZMZTE0Q3JPVWJLTWRaQ1IxZXpqUy85WHdYWGNVd1NTTkJDRElMMkxLWUsyN21JMS8xektGdDQ1c29GN2toRmpGMk4yWXBKQWhobmJUNUlkZ3NzbjFJS0xCa2pTMk13N200Vko4bkdaS2FrVlVRRmJMak9QSXJaWDN5Njg4RHhSZUpsQTh0KzhTNzl3MjdqTVlLRXVicUVUU2tFaG82QkthTERwUXIzWDlaem5CeEVhZSt6dkVBd0J0UFRIclE0U0pRbGl0L2x3RExLV0ZOSDFNWkJJRmw2bGdoanltQndXU2grSHRqa3NvTWN3L2lDUktycE9aWmZvV3RaeHYrTmNrK09XbkoxOTBqZ09lVGxVTUFSczBjM28za011bC9QMk9aOGpORTU1bmpYc2NicGtldHdDbUFSR1FXNFdWUkN0aU1sa3pYS0RNWFU0WUU4cUpJNTZIaVUwRUVNbHFFZCt0Q0xXUFVqU1FFekdmcnZKMGlQLy9vQ0RuYzRHN0NWTVhBMCtRbEFCbkJuTkJEK09SYXg1M1BSaW9UUUdzaXc2MldESnVCYWU5T0pLV0NKaEFuR012UkovZHVKWUR3a1o2eVVkOWhzaVpxVm56UGU0NUZPZWRlK2haTU9aQitKdDVIYnNKaXFJdldtM3BFT1pmcmlqR3lFaWEvdVlDa1NWck1kWjZMSVAzY0ZFV29lVlRwQjdwVnBQSHNsV1VrSHNxWHoxRWd5ZE1sOTl5RnRjVjBORzJ1bzJJNm8yZDQxakJqVkhLMEgyQXhCNzAybkJrcmVkNTZhOTdiaVF2T3d3M3d5azUvZWVWZnk2YUMxVFJmR25STW40cGxlSnRQbDVLb2lCbFQ2SkJDTDZYbE91RmZTZGRnU3ZhZDJuR2JLNlR5ZE1RQXl2OTFXTGxwVFVDNlZlV2lxYkhoZ21hM1F3UzlMb0FHRWlwTTR4MHFuNVBySTFZQkdCbUdIb0tGSVN5TE12YXRFYkhBWksyNTNLL0NOSFdsZDlVRko3S3ltSndDbzdqSy9qZU11TnNzZmpwcEx6aWdua2duS2k4VDNTRUZQV1daMkNLdzZiWHdIajZnSmZIbGxoWGtaODVkbUVpZEEvRnBpQlp3SitYNloyL1dGZFFIbjJkSXQyZy9ZVkIzS2tmM1FmTC81OVlJcjR0MzQzeGIvMnpSRC8xcWZvYzVDR0dQSklmeDg2RE05WWY0bHVvYXpxank0S0NFdC83YlFZNEQzU2NLTmw3YjhoL2dHbGM4NTI2S2lvWkFBQUFBQkpSVTVFcmtKZ2dnPT1cIjtcbnZhciBpbWckMSA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGQUFBQUJRQ0FNQUFBQzV6d0tmQUFBQy9WQk1WRVZIY0V6T1RybHRQT2xSVlBCaEg0eTdQZEo0T01SaE5jbFpGb3RsT2UvVlQ3cGpQUFZoTy9oZk92ZGdPZlpoSzhsV0Y0QTBtK2JoWWFGUEhKUllHSHhNRHBOUGJ2VmtQZlBMUnJjL29lMWhOL1ZhVXZCQUdueGlRUE5BbXZCeElwczRwL0ZkRW5SYkZvWnlHNXV4T2RDVk1idG5PdkszUDh4a09QVmZNT0E0cWZCZERXM2ZYYSs1Tk5tak5zZkFQZEJsT2ZEallxRTdxUGQ0TjhLak1jWmREbkN5VVoyMU90VmlFbkE0c1BZMXArMmxOTWZjWGFmSFNzRmhOTmRNZVBoaE92Tk5kUGE0TzlFL0dIam9ZcDVrSktTSk5iN3diWkU0ci9qN2RZbzNzL2VsU0poWFZmZFZXdkthTjc5cUo1dldWYkk2dFBwV0lKSzFPODlhTmVzdUxvYzNGSER4YTVSWUwrYVZMN2xoRkc5eU5kRTBzZkNoTThab0pLaFdXdlJXVy9qcmE1QzRQczE3SjZkRGpmTjdLNmRtSTV3K2tleHFKS2VaTDdwRFU4R0pLckpjSFkydE44N3dhNVEydFBVeFc3RmtJNWhxSnBsTWNmZGhPdlBIUmNlMk90WEtTc0hWVkxGZEVHNU5YT1ZTWXZkWEw3ZlVYS1ZNSFpzN3MvdGtOL1hyWnB0ZE52TTlpdVhqWTU4MkZHODZFV3RNR291cU44eVBMN2M3ZXRKWUZwSlZYUFpnSjhST0dZY3dEV1l5UzZTTkxyUnRHNDJLTExKYUdZUk9GcWRIYU5zK3R2ODV0Znc0R1hjOEZIVTFLSVpoT2ZkaE9QVmhOL1JoTmV5M085VmhOdkRaV2FxUk1MamtZNXpFUnNYUlVyUzFPdFJnTDl0Z011T3BOOHF2T2MrZ004T1hNYnowY29kYkVIdGlPZmxmTk9oZEhaOWNGNDZyT00zcFo1V2NNNy92YkpEOWVJS25Oc2hkSDZtek90TElTci9mWDZLTUw3TmZMTkZmSzh4ZktjWmVKcnlpTmNWZUlySHhib3kvUWN2L2YzMi9XSkJPRnFoV0g3VjVMcGxPSDhlTk81eFZLTk5NS3VqVlpZdm9iWVpFaS9ZK28vZ3VRNWxIanZ4VVhQWXNFV2hBbXZjMWJjTmFTZlZTWmZaQ2svVXlGVzl3SnA1Mko2SmFUdlk5bnZWNkthWlhWdlpkSUk5WVVmWmNSZlVrQVZNNWp1QlBiUFovS3FsT0hJUW5DbDlTWXZaTGQvYUlMYkJJZ1BWS2UvVm1JNWRlUVBZNHMvZzhGblZNY3ZaRkdYeGZQUFZYSDRxRUxhNWdJcEZ0SlpvNnF2VkhodllxUnRRVEFBQUFuSFJTVGxNQS9oME1GLzREQmd3c0dIL2U4dGZBUlRGaUpURCtmejBLRjgwMFkyQWpVRWp1a2lMSDdLVm1iZkNFMlJBcmVFWlFLV3YraDhQOTNXWERXTHF6MUhoeHMreVRzVVEzcWVpZDFkSDc4cmpOd292d2dhbmsvSm1YL1dPby9yWGdvaTNZOVhsMHZ2RFVsbzQvdkpEMTFyRDcrdWZ6eHNEdjZzcnhmMWoxY05CYjVKSFAvZVhyOXM3TjZzSCs0cHpwOWQzOTFHRGl2T3YrL3RYc3ViQ0tHUFdTQUFBRzUwbEVRVlI0WHFUU1cyc2lTUmlBNGNLV2FuYzFZQk5KRUUzSHpVSUlrb3ZnbmJseFJRSVNJcUtnTUlORUlVWW5KaEFueWMwa1Exd0lpU0JoWWpMTHpEanpyenlmemZsOFBzM3NrUzFiMmUwcU5XMTJuK3FpUWJwZjZxTUZnbWlXWVRURGlJWmhsQkQ4UDBwR285T2FYWHI5S0tKM3VjeGFsS1hBZndPVkxKZlRmd3JaWmptMjBDaEs2alFNKy95VFFraXhPclBlZHM4elc3L1pYTnBoSmZYTUpLdnhoMngvTnJqL3lKbTFmZEl5U3RBMm10V09obXc3aWRwQ0Y3ZXJwY1RPY2MyT0xhVFh0VHM0by9IcnF4MGVybmtjeWVXQzBTUVNqUVp6a1JXdlZzTUNZYlJTWjg0aXhTd1B5aFVqd2FTamxEbm5aREtPWkRTMzRoOFdQaVRGZUl2WklpNlJ5RWFpanN3UmNsNTNWRlZLQnYxQ1JWYTNFc2NWVTlualhETERIWXVBZmxvTkxENzVjUmlETjA1SXBkRHBZaHRWcXlVa2czYnR4aFVkWDlTZG9CVklHYngvOFZ5akhZL2ZSR01iYXlhbjAybGEyNGloSnM5RHFYUmVNcWtsb0FXcXkzaE5TRjEvaURubGl0b3JZb1g2OCtwRGcxaXJvc3Bndk1GZHBqNEU3QXF4aEFZY1NFdkV5ODYxeG1MenFWbkQvQ1hoeGhoNEs4Y0g2cFMvQ1g4bG1kVGlKdk9pM2lQdTBoaVFOejRwVm9kalJQRE10QXdCZ1ZZWlR3aVBSb3NZZ2taUWJYcDNobnNYYm5oU05FL2tDaWZHTGhGb2lwYjNuWkhGbDhRb3FxNmxRdUVDcmRyRk1iaHAwSnhFOGN1dmhCK1dzUTlETFZvS0Y3aUNSMFdCRnFERVBrTUU5L3ZrL0tIZDZ4ZnBkSnEvMDBzOVdJOEF3elA3dUJrN2YraDFUeHJaNCswbEN3MmUwdXY3bldDMS96dUIyek8yUi9BTWdTZEp4bjIzdURtZitKL2dZa052ekNJQ1Q0SmIxbHZDNnhFSWFpakxBV2xCQ2dSMGJwWC93TTI5b3VzOTFkZzI0V0RBRFlTTVdNdUUxL1YvdDBpNm5TZkl1bWtnUkR4UnFaUXJQT1c1Rjk5elFmZFBlWkxsT3lCb2NHcXl3cmRicVV6L0NCRFlMVHZFNWZOU0VSQUVSYjVkM0tsVkFhc1Q5K1RKWUVjM0JZUU5qaytlNGlaN0pTZzQ5UFAySGE1REpvSkFHRDN4L2pmYzFjUUlBSENnL3hEdkhYWXNVS0FOZE8vbUZSR2M3b1dBbGk3YzNYM0RscXkvclNDYzJyd2kvRjE2L2Y2a2RjVUJITDRiZUlFTDkwckFSY0ppakVpRlJoR01Ra21reGhCK3hKZzRNa3pRTm11Q1NSdWJEWk1sMUI5SlhhWXhXVTNUSmQzV2R4ZVExZzUxSFFQbmxPcmFibE1uV3JUMkg5Z2ZzSmZiRzlQNFlnZVVlczlYSnFmeHVUY2g0Y1VuNStSd3o3bDQrcVdVdW9GTEhRaWhvRnhDa1JCUFB3ZW0wVHE3d3l3SXByZ2FzcURFOCswajNIM1BUY3FpalNBSCtTdDZVUGprT1F0TkVmbjBQZ2hlbU82bmFqZ2VSZEQ5OXVLMTFZVEJ0cDVIUDJJdTlQUlRSZ1dmendscFphVEJkaEJjN21tbTVJcFVOSUloRHphM0x3T2Z0SlVJUnQ4aCtHVDVDUVlGenpmQ2RieTNmdTRScnVPZW9xRHhIQ01jYUg4S2hKcnpQeHM4R0UxcDBmWktnbTdUTHl4Z3ZUdDZBMlhoNEl4VHhEOXNaMmdCbHc5V2gxa2VMeEkvZXJUL3poSXU1RGRUN3pjb1VpQ282Q0FMTXUxTFAyQ1c5RTVUZnZ1S0FDelo5a1daOVNpSThSczArUTBXOUhqQ0RaWTJoTllBcDVuT0h3RThYQmF5STRCdXZwVEFlNGtCVStHUVNvRmVoT3lRMHZpSEUyc0pnYldFdVFrRkpkV0tTVlFSNEZteVkvVFNXbUpHR0p6Um13b3prM1dpSHE2VDVLQTNEeWRtVHFCMGhkTjAvQ3JDNDduSUpNbXJDRE9BZXBnS0EzUDhzc1JHQWQ1WWZvZ21mUVV3WEZ4TGFTZUx6VGtlNWNQeXNqM0RuN2pIdDV5YTR1bGxZZmw0OU9SQ1NUWmNibGtNL3NmQXJadDBjYjFrSEJzWGpoRGRuS1hNa2pndnc5NElRNzNWd01YanNiZ1FHejU3V2N5WGZ3VkdCcWdUc2kvalFJdzk4MitGWk9ROXlNY0lncUthem5nTTRNNTRYSnA4bzk4RFBqTTJKWms4QmswYVpmVC85Vm9jc0RlcWFnSFBrVGFOOTlLeFhqbFR1cWR4K1I0Q293N20xTi9iM25SNi91Ukcrbm9iU2hkVmpvZlFPRU5UZ01nWVRzOWowbjBYUGE3VHlTYlYrTlF6d0tGQ1BjalVFWjdIOWFHaXdhWEJjb3hMTlRIN2JCYmRBZzVWeWFsODJIRnhEamYvNm1xUHI2VkpjendkbXRZd3JzREVMRFJWWEJDQUZzSGlpN2xYYzYxVEFWZExjWEZWUThGZmdKVVZyMG93Q1Zpc2ZBSHM3VjIxZWJ1NmhnS0J3TkNFMXh0Y3dTVXpLME5ZRHhSbEhaVy9BWHQ3cmJhc3R3dnhCamR4U1NUb0FQTUYxTGZ2L1E3a2NxM1BzNXZKVENZSm9hK0M0LzFsdGlXUnUvTGVIMEF1bDN0ajI4OXNJWmxqVzNtdnM5MmUrckpidTBSOCs5ckd6czZHMEE2eThYZDNkdjkxY3FzZ2s5elAybmF2RDM0aEpqbHYzYlhYYnF3Q085dXJxMys5M08yMlpZOTA3KzVlLzJoUXFhYUlpTlNETno1ZmhMYVJ4WDhPWHlLSGg0c1BIbnoxTVpvdXNYcWw3dTVuUDUvMndaR3Y3K3JjWXVwZDBCS3AycTZ6MXYxVVF0MTN1bS9xcFRSTmtBR3JvNjZxSGROZHNUYlcxUlhDNktQUmVtWE1ycXlxQjJ0QmpCWlgxZHBSMHRwWVlEM0tTYW56a0VpcmxIYjdXSUhkcmxSTHk0M3RQNDJ1RTExS3BmMDJBQUFBQUVsRlRrU3VRbUNDXCI7XG5cbmZ1bmN0aW9uIG9wZXJhVG91Y2gob3B0aW9ucykge1xuICB2YXIgcHJlZmVycmVkID0gb3B0aW9ucy5wcmVmZXJyZWQsXG4gICAgICBsYWJlbCA9IG9wdGlvbnMubGFiZWwsXG4gICAgICBpY29uU3JjID0gb3B0aW9ucy5pY29uU3JjLFxuICAgICAgc3ZnID0gb3B0aW9ucy5zdmc7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbGFiZWwgfHwgJ09wZXJhIFRvdWNoJyxcbiAgICBpY29uU3JjOiBpY29uU3JjIHx8IGltZyxcbiAgICBpY29uU3JjU2V0OiBpY29uU3JjIHx8IGltZyQxLFxuICAgIHN2Zzogc3ZnLFxuICAgIHdhbGxldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF93YWxsZXQgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL3JlZ2VuZXJhdG9yUnVudGltZS5tYXJrKGZ1bmN0aW9uIF9jYWxsZWUoaGVscGVycykge1xuICAgICAgICB2YXIgZ2V0UHJvdmlkZXJOYW1lLCBnZXRBZGRyZXNzLCBnZXRCYWxhbmNlLCBnZXROZXR3b3JrLCBwcm92aWRlciwgZW5hYmxlZDtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGdldFByb3ZpZGVyTmFtZSA9IGhlbHBlcnMuZ2V0UHJvdmlkZXJOYW1lLCBnZXRBZGRyZXNzID0gaGVscGVycy5nZXRBZGRyZXNzLCBnZXRCYWxhbmNlID0gaGVscGVycy5nZXRCYWxhbmNlLCBnZXROZXR3b3JrID0gaGVscGVycy5nZXROZXR3b3JrO1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gd2luZG93LmV0aGVyZXVtIHx8IHdpbmRvdy53ZWIzICYmIHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcjtcbiAgICAgICAgICAgICAgICBlbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICBcImludGVyZmFjZVwiOiBwcm92aWRlciAmJiBnZXRQcm92aWRlck5hbWUocHJvdmlkZXIpID09PSB1bmRlZmluZWQgPyB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdPcGVyYSBUb3VjaCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyLmVuYWJsZSgpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5hYmxlZCA/IGdldEFkZHJlc3MocHJvdmlkZXIpIDogUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuYWJsZWQgPyBnZXROZXR3b3JrKHByb3ZpZGVyKSA6IFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmFibGVkID8gZ2V0QmFsYW5jZShwcm92aWRlcikgOiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IDogbnVsbFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBfY2FsbGVlKTtcbiAgICAgIH0pKTtcblxuICAgICAgZnVuY3Rpb24gd2FsbGV0KF94KSB7XG4gICAgICAgIHJldHVybiBfd2FsbGV0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB3YWxsZXQ7XG4gICAgfSgpLFxuICAgIHR5cGU6ICdpbmplY3RlZCcsXG4gICAgbGluazogJ2h0dHBzOi8vd3d3Lm9wZXJhLmNvbS9tb2JpbGUvdG91Y2gnLFxuICAgIGluc3RhbGxNZXNzYWdlOiBleHRlbnNpb25JbnN0YWxsTWVzc2FnZSxcbiAgICBtb2JpbGU6IHRydWUsXG4gICAgcHJlZmVycmVkOiBwcmVmZXJyZWQsXG4gICAgb3NFeGNsdXNpb25zOiBbJ0FuZHJvaWQnXVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBvcGVyYVRvdWNoOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@pooltogether/bnc-onboard/dist/esm/opera-touch-36d44122.js\n");

/***/ })

}]);