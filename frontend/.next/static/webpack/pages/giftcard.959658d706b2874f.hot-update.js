"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/giftcard",{

/***/ "./pages/_navbar.js":
/*!**************************!*\
  !*** ./pages/_navbar.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Navbar() {\n    _s();\n    const [bars, setBars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"-translate-x-full\");\n    const handleMenu = ()=>{\n        if (bars === \"\") {\n            setBars(\"open\");\n            setMenu(\"\");\n        }\n        if (bars === \"open\") {\n            setBars(\"\");\n            setMenu(\"-translate-x-full\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \" fixed z-20 bottom-8 left-1/2 lg:left-0 lg:top-0 lg:rounded-none rounded-3xl w-4/5 lg:w-[5.4%] h-12 lg:h-full lg:py-5 shadow-md bg-white flex lg:flex-col lg:justify-between items-center transition duration-700 lg:space-y-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"#\",\n                        onClick: handleMenu,\n                        className: \"hidden lg:block text-xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"\".concat(bars, \" menu btn6\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"icon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full lg:h-1/3 text-xl flex lg:flex-col justify-around items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"#\",\n                                className: \"lg:hidden\",\n                                onClick: handleMenu,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-solid fa-bars lg:hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 80\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-sharp fa-solid fa-magnifying-glass\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 36\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-solid fa-bag-shopping\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 36\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-solid fa-user\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 36\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"hidden lg:block\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" \".concat(menu, \" w-1/2 lg:w-1/3 h-full fixed m-0 left-0 top-0 z-10 transition duration-700 bg-white\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\_navbar.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Navbar, \"PLmvDWfYiVxrgJMx2w7q8MtaCEM=\");\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fbmF2YmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDWjtBQUViLFNBQVNHLFNBQVM7O0lBQzdCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTU8sYUFBYSxJQUFNO1FBQ3JCLElBQUlKLFNBQVMsSUFBSTtZQUNiQyxRQUFRO1lBQ1JFLFFBQVE7UUFDWixDQUFDO1FBQ0QsSUFBSUgsU0FBUyxRQUFRO1lBQ2pCQyxRQUFRO1lBQ1JFLFFBQVE7UUFDWixDQUFDO0lBQ0w7SUFDQSxxQkFDSTs7MEJBQ0ksOERBQUNFO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1Isa0RBQUlBO3dCQUFDUyxNQUFLO3dCQUFJQyxTQUFTSjt3QkFBWUUsV0FBWTtrQ0FDNUMsNEVBQUNHOzRCQUFJQyxPQUFPLEdBQVEsT0FBTFYsTUFBSztzQ0FDaEIsNEVBQUNTO2dDQUFJQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUduQiw4REFBQ0Q7d0JBQUlILFdBQVU7OzBDQUNYLDhEQUFDUixrREFBSUE7Z0NBQUNTLE1BQUs7Z0NBQUlELFdBQVU7Z0NBQVlFLFNBQVNKOzBDQUFhLDRFQUFDTztvQ0FBRUwsV0FBVTs7Ozs7Ozs7Ozs7MENBQ3hFLDhEQUFDUixrREFBSUE7Z0NBQUNTLE1BQUs7MENBQUksNEVBQUNJO29DQUFFTCxXQUFVOzs7Ozs7Ozs7OzswQ0FDNUIsOERBQUNSLGtEQUFJQTtnQ0FBQ1MsTUFBSzswQ0FBSSw0RUFBQ0k7b0NBQUVMLFdBQVU7Ozs7Ozs7Ozs7OzBDQUM1Qiw4REFBQ1Isa0RBQUlBO2dDQUFDUyxNQUFLOzBDQUFJLDRFQUFDSTtvQ0FBRUwsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRWhDLDhEQUFDSzt3QkFBRUwsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUdqQiw4REFBQ0c7Z0JBQUlILFdBQVcsSUFBUyxPQUFMSixNQUFLOzs7Ozs7OztBQUlyQyxDQUFDO0dBbEN1Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX25hdmJhci5qcz8zZTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gICAgY29uc3QgW2JhcnMsIHNldEJhcnNdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbbWVudSwgc2V0TWVudV0gPSB1c2VTdGF0ZSgnLXRyYW5zbGF0ZS14LWZ1bGwnKVxyXG4gICAgY29uc3QgaGFuZGxlTWVudSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYmFycyA9PT0gJycpIHtcclxuICAgICAgICAgICAgc2V0QmFycygnb3BlbicpXHJcbiAgICAgICAgICAgIHNldE1lbnUoJycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiYXJzID09PSAnb3BlbicpIHtcclxuICAgICAgICAgICAgc2V0QmFycygnJylcclxuICAgICAgICAgICAgc2V0TWVudSgnLXRyYW5zbGF0ZS14LWZ1bGwnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCIgZml4ZWQgei0yMCBib3R0b20tOCBsZWZ0LTEvMiBsZzpsZWZ0LTAgbGc6dG9wLTAgbGc6cm91bmRlZC1ub25lIHJvdW5kZWQtM3hsIHctNC81IGxnOnctWzUuNCVdIGgtMTIgbGc6aC1mdWxsIGxnOnB5LTUgc2hhZG93LW1kIGJnLXdoaXRlIGZsZXggbGc6ZmxleC1jb2wgbGc6anVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMCBsZzpzcGFjZS15LTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScjJyBvbkNsaWNrPXtoYW5kbGVNZW51fSBjbGFzc05hbWU9e2BoaWRkZW4gbGc6YmxvY2sgdGV4dC14bGB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9e2Ake2JhcnN9IG1lbnUgYnRuNmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGxnOmgtMS8zIHRleHQteGwgZmxleCBsZzpmbGV4LWNvbCBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScjJyBjbGFzc05hbWU9J2xnOmhpZGRlbicgb25DbGljaz17aGFuZGxlTWVudX0gPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWJhcnMgbGc6aGlkZGVuXCIgLz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+PGkgY2xhc3NOYW1lPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtbWFnbmlmeWluZy1nbGFzc1wiIC8+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWJhZy1zaG9wcGluZ1wiIC8+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXVzZXJcIiAvPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdoaWRkZW4gbGc6YmxvY2snIC8+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2AgJHttZW51fSB3LTEvMiBsZzp3LTEvMyBoLWZ1bGwgZml4ZWQgbS0wIGxlZnQtMCB0b3AtMCB6LTEwIHRyYW5zaXRpb24gZHVyYXRpb24tNzAwIGJnLXdoaXRlYH0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIk5hdmJhciIsImJhcnMiLCJzZXRCYXJzIiwibWVudSIsInNldE1lbnUiLCJoYW5kbGVNZW51IiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzcyIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_navbar.js\n"));

/***/ })

});