"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app\\layout",{

/***/ "./_components/header.tsx":
/*!********************************!*\
  !*** ./_components/header.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/value/use-spring.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileMenu */ \"./_components/MobileMenu.tsx\");\n/* harmony import */ var _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/images/logo.svg */ \"./public/images/logo.svg\");\n/* harmony import */ var _FixedLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FixedLink */ \"./_components/FixedLink.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\"use client\";\n\nvar _jsxFileName = \"C:\\\\Users\\\\HP\\\\Desktop\\\\ferdinand-frontend\\\\_components\\\\header.tsx\",\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Header() {\n  _s2();\n\n  var _s = $RefreshSig$();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      isTop = _useState[0],\n      setIsTop = _useState[1];\n\n  if (true) window.addEventListener(\"scroll\", function () {\n    var distanceToTop = window.pageYOffset;\n    if (distanceToTop > 100) setIsTop(false);else setIsTop(true);\n  });\n\n  function useScrollDirection() {\n    _s();\n\n    var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"up\"),\n        scrollDirection = _useState2[0],\n        setScrollDirection = _useState2[1];\n\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n      var lastScrollY = 0;\n      if (true) lastScrollY = window.pageYOffset;\n\n      var updateScrollDirection = function updateScrollDirection() {\n        var scrollY = 0;\n        if (true) scrollY = window.pageYOffset;\n        var direction = scrollY > lastScrollY ? \"down\" : \"up\";\n\n        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {\n          setScrollDirection(direction);\n        }\n\n        lastScrollY = scrollY > 0 ? scrollY : 0;\n      };\n\n      if (true) window.addEventListener(\"scroll\", updateScrollDirection); // add event listener\n\n      return function () {\n        if (true) window.removeEventListener(\"scroll\", updateScrollDirection); // clean up\n      };\n    }, [scrollDirection]);\n    return scrollDirection;\n  }\n\n  _s(useScrollDirection, \"ltP/wDNNJ5qAva3kS7UItJ1/RuY=\");\n\n  var scrollDirection = useScrollDirection();\n\n  var _useScroll = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useScroll)(),\n      scrollYProgress = _useScroll.scrollYProgress;\n\n  var scaleX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(scrollYProgress, {\n    stiffness: 100,\n    damping: 30,\n    restDelta: 0.001\n  });\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      parentStatus = _useState3[0],\n      setParentStatus = _useState3[1];\n\n  var updateStatus = function updateStatus() {\n    setParentStatus(!parentStatus);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"header\", {\n      className: \"\".concat(isTop ? \"\" : \"scrolled\", \" \\n          \").concat(scrollDirection === \"down\" ? \"hide\" : \"show\", \"\\n          \").concat(parentStatus ? \"shown\" : \"\"),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"header_wrap\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: \"container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"wrapper header_wrapper\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"select\", {\n              name: \"Language\",\n              className: \"header_select\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"option\", {\n                value: \"\\u0420\\u0423\\u0421\",\n                children: \"\\u0420\\u0423\\u0421\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"option\", {\n                value: \"ENG\",\n                children: \"ENG\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n              src: _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n              width: 170,\n              alt: \"Ferdinand\",\n              className: \"header_logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 15\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MobileMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n              updateStatus: updateStatus\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n          className: \"progress-bar \".concat(scrollDirection === \"down\" ? \"hide-bar\" : \"show-bar\"),\n          style: {\n            scaleX: scaleX,\n            transform: \"scaleX(0)\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_FixedLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s2(Header, \"ev947NxCC71DkMW1ICACkJL4ynY=\", true, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_6__.useScroll, framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring];\n});\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRzL2hlYWRlci50c3g/N2VlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVNwcmluZyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9Nb2JpbGVNZW51XCI7XHJcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9wdWJsaWMvaW1hZ2VzL2xvZ28uc3ZnXCI7XHJcbmltcG9ydCBGaXhlZExpbmsgZnJvbSBcIi4vRml4ZWRMaW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW2lzVG9wLCBzZXRJc1RvcF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgbGV0IGRpc3RhbmNlVG9Ub3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgIGlmIChkaXN0YW5jZVRvVG9wID4gMTAwKSBzZXRJc1RvcChmYWxzZSk7XHJcbiAgICAgIGVsc2Ugc2V0SXNUb3AodHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gdXNlU2Nyb2xsRGlyZWN0aW9uKCkge1xyXG4gICAgY29uc3QgW3Njcm9sbERpcmVjdGlvbiwgc2V0U2Nyb2xsRGlyZWN0aW9uXSA9IHVzZVN0YXRlKFwidXBcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbGV0IGxhc3RTY3JvbGxZID0gMDtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIGxhc3RTY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlU2Nyb2xsRGlyZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBzY3JvbGxZID0gMDtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBzY3JvbGxZID4gbGFzdFNjcm9sbFkgPyBcImRvd25cIiA6IFwidXBcIjtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBkaXJlY3Rpb24gIT09IHNjcm9sbERpcmVjdGlvbiAmJlxyXG4gICAgICAgICAgKHNjcm9sbFkgLSBsYXN0U2Nyb2xsWSA+IDEwIHx8IHNjcm9sbFkgLSBsYXN0U2Nyb2xsWSA8IC0xMClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHNldFNjcm9sbERpcmVjdGlvbihkaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYXN0U2Nyb2xsWSA9IHNjcm9sbFkgPiAwID8gc2Nyb2xsWSA6IDA7XHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHVwZGF0ZVNjcm9sbERpcmVjdGlvbik7IC8vIGFkZCBldmVudCBsaXN0ZW5lclxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlU2Nyb2xsRGlyZWN0aW9uKTsgLy8gY2xlYW4gdXBcclxuICAgICAgfTtcclxuICAgIH0sIFtzY3JvbGxEaXJlY3Rpb25dKTtcclxuXHJcbiAgICByZXR1cm4gc2Nyb2xsRGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2Nyb2xsRGlyZWN0aW9uID0gdXNlU2Nyb2xsRGlyZWN0aW9uKCk7XHJcblxyXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwoKTtcclxuICBjb25zdCBzY2FsZVggPSB1c2VTcHJpbmcoc2Nyb2xsWVByb2dyZXNzLCB7XHJcbiAgICBzdGlmZm5lc3M6IDEwMCxcclxuICAgIGRhbXBpbmc6IDMwLFxyXG4gICAgcmVzdERlbHRhOiAwLjAwMSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3BhcmVudFN0YXR1cywgc2V0UGFyZW50U3RhdHVzXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlU3RhdHVzID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgc2V0UGFyZW50U3RhdHVzKCFwYXJlbnRTdGF0dXMpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtpc1RvcCA/IFwiXCIgOiBcInNjcm9sbGVkXCJ9IFxyXG4gICAgICAgICAgJHtzY3JvbGxEaXJlY3Rpb24gPT09IFwiZG93blwiID8gXCJoaWRlXCIgOiBcInNob3dcIn1cclxuICAgICAgICAgICR7cGFyZW50U3RhdHVzID8gXCJzaG93blwiIDogXCJcIn1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfd3JhcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyIGhlYWRlcl93cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiTGFuZ3VhZ2VcIiBjbGFzc05hbWU9XCJoZWFkZXJfc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi0KDQo9ChXCI+0KDQo9ChPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRU5HXCI+RU5HPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e2xvZ299XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTcwfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiRmVyZGluYW5kXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9sb2dvXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxNb2JpbGVNZW51IHVwZGF0ZVN0YXR1cz17dXBkYXRlU3RhdHVzfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZ3Jlc3MtYmFyICR7XHJcbiAgICAgICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uID09PSBcImRvd25cIiA/IFwiaGlkZS1iYXJcIiA6IFwic2hvdy1iYXJcIlxyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3sgc2NhbGVYLCB0cmFuc2Zvcm06IFwic2NhbGVYKDApXCIgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8Rml4ZWRMaW5rIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsInVzZVNjcm9sbCIsInVzZVNwcmluZyIsIkltYWdlIiwiTW9iaWxlTWVudSIsImxvZ28iLCJGaXhlZExpbmsiLCJIZWFkZXIiLCJpc1RvcCIsInNldElzVG9wIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3RhbmNlVG9Ub3AiLCJwYWdlWU9mZnNldCIsInVzZVNjcm9sbERpcmVjdGlvbiIsInNjcm9sbERpcmVjdGlvbiIsInNldFNjcm9sbERpcmVjdGlvbiIsImxhc3RTY3JvbGxZIiwidXBkYXRlU2Nyb2xsRGlyZWN0aW9uIiwic2Nyb2xsWSIsImRpcmVjdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJzY2FsZVgiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwicmVzdERlbHRhIiwicGFyZW50U3RhdHVzIiwic2V0UGFyZW50U3RhdHVzIiwidXBkYXRlU3RhdHVzIiwidHJhbnNmb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./_components/header.tsx\n"));

/***/ })

});