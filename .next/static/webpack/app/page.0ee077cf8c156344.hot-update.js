"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app\\page",{

/***/ "./_components/pagewrapper.tsx":
/*!*************************************!*\
  !*** ./_components/pagewrapper.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PageWrapper; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/value/use-spring.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\"use client\";\n\nvar _jsxFileName = \"C:\\\\Users\\\\HP\\\\Desktop\\\\ferdinand-frontend\\\\_components\\\\pagewrapper.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction PageWrapper(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setTimeout(function () {\n      return setLoading(false);\n    }, 3500);\n  });\n\n  var _useScroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)(),\n      scrollYProgress = _useScroll.scrollYProgress;\n\n  var scaleX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring)(scrollYProgress, {\n    stiffness: 100,\n    damping: 30,\n    restDelta: 0.001\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: loading ? \"page loading\" : \"page\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(PageWrapper, \"YFyti8KMHomcsz2jC6AV7DOHHLY=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll, framer_motion__WEBPACK_IMPORTED_MODULE_3__.useSpring];\n});\n\n_c = PageWrapper;\n{\n  /* {loading ? (\r\n        <Loading />\r\n      ) : (\r\n        <div className={loading ? \"page loading\" : \"page\"}>\r\n          <motion.div>{children}</motion.div>\r\n        </div>\r\n      )} */\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"PageWrapper\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fY29tcG9uZW50cy9wYWdld3JhcHBlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7OztBQUVBO0FBQ0E7OztBQUdlLFNBQVNLLFdBQVQsT0FJWjtFQUFBOztFQUFBLElBSERDLFFBR0MsUUFIREEsUUFHQzs7RUFDRCxnQkFBOEJOLCtDQUFRLENBQUMsSUFBRCxDQUF0QztFQUFBLElBQU9PLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBQ0FQLGdEQUFTLENBQUMsWUFBTTtJQUNkUSxVQUFVLENBQUM7TUFBQSxPQUFNRCxVQUFVLENBQUMsS0FBRCxDQUFoQjtJQUFBLENBQUQsRUFBMEIsSUFBMUIsQ0FBVjtFQUNELENBRlEsQ0FBVDs7RUFHQSxpQkFBNEJMLHdEQUFTLEVBQXJDO0VBQUEsSUFBUU8sZUFBUixjQUFRQSxlQUFSOztFQUNBLElBQU1DLE1BQU0sR0FBR1Asd0RBQVMsQ0FBQ00sZUFBRCxFQUFrQjtJQUN4Q0UsU0FBUyxFQUFFLEdBRDZCO0lBRXhDQyxPQUFPLEVBQUUsRUFGK0I7SUFHeENDLFNBQVMsRUFBRTtFQUg2QixDQUFsQixDQUF4QjtFQUtBLG9CQUNFO0lBQUEsdUJBQ0U7TUFBSyxTQUFTLEVBQUVQLE9BQU8sR0FBRyxjQUFILEdBQW9CLE1BQTNDO01BQUEsdUJBQ0UsOERBQUMscURBQUQ7UUFBQSxVQUFhRDtNQUFiO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREYsaUJBREY7QUFPRDs7R0F0QnVCRDtVQVNNRixzREFDYkM7OztLQVZPQztBQXdCeEI7RUFDRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL19jb21wb25lbnRzL3BhZ2V3cmFwcGVyLnRzeD81Njg2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCwgdXNlU3ByaW5nIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2FwcC9sb2FkaW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlV3JhcHBlcih7XHJcbiAgY2hpbGRyZW4sXHJcbn06IHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59KSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSksIDM1MDApO1xyXG4gIH0pO1xyXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoKTtcclxuICBjb25zdCBzY2FsZVggPSB1c2VTcHJpbmcoc2Nyb2xsWVByb2dyZXNzLCB7XHJcbiAgICBzdGlmZm5lc3M6IDEwMCxcclxuICAgIGRhbXBpbmc6IDMwLFxyXG4gICAgcmVzdERlbHRhOiAwLjAwMSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2xvYWRpbmcgPyBcInBhZ2UgbG9hZGluZ1wiIDogXCJwYWdlXCJ9PlxyXG4gICAgICAgIDxtb3Rpb24uZGl2PntjaGlsZHJlbn08L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxue1xyXG4gIC8qIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xvYWRpbmcgPyBcInBhZ2UgbG9hZGluZ1wiIDogXCJwYWdlXCJ9PlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXY+e2NoaWxkcmVufTwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX0gKi9cclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJ1c2VTcHJpbmciLCJQYWdlV3JhcHBlciIsImNoaWxkcmVuIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRUaW1lb3V0Iiwic2Nyb2xsWVByb2dyZXNzIiwic2NhbGVYIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInJlc3REZWx0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./_components/pagewrapper.tsx\n"));

/***/ })

});