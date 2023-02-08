"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/carousel */ \"./components/carousel.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_cardCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/cardCarousel */ \"./components/cardCarousel.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    // state for navbar expansion\n    const [expand, setExpand] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // state to move the slide on resize\n    const [move, setMove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [resize, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", ()=>{\n            let position = document.documentElement.scrollTop;\n            if (position >> 0) {\n                setSize(true);\n                setMove(true);\n            } else {}\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setExpand: setExpand,\n                classes: resize === true ? \"\" : \"opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"\".concat(expand === true ? \"w-3/4\" : \"w-full lg:w-[94.6%]\", \" bg-gray-100 absolute right-0 top-0 flex flex-col justify-center items-center space-y-5 transition-all duration-700\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        move: move,\n                        setMove: setMove,\n                        classes: resize === true ? \"w-11/12 h-[80vh] md:h-[90vh] rounded-[2rem] m-10\" : \"w-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"relative w-full h-screen p-3 md:p-5 md:pr-0 flex flex-col md:flex-row font_futuraLT\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-[35%] md:h-full p-5 flex flex-col justify-center items-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-2xl md:text-5xl word-wrap leading-tight\",\n                                        children: \"Newest Gear to Work\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"font_futuraLTlite text-lg\",\n                                        children: \"Innovation and Comfort for Women\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-[65%] h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cardCarousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute w-1/5 h-full top-0 right-0 bg-gradient-to-l from-white to-transparent pointer-events-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"8pXFdl28+MC98WbLouFOcAX5xkI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFrRDtBQUNMO0FBQ0o7QUFDQTtBQUNZO0FBRXRDLFNBQVNPLE9BQU87O0lBQzNCLDZCQUE2QjtJQUM3QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxvQ0FBb0M7SUFDcEMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFFdEMsTUFBTSxDQUFDVSxRQUFRQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDeENELGdEQUFTQSxDQUFDLElBQU07UUFDWmEsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVSxJQUFNO1lBQ3BDLElBQUlDLFdBQVdDLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUztZQUNqRCxJQUFJSCxZQUFZLEdBQUU7Z0JBQ2RILFFBQVEsSUFBSTtnQkFDWkYsUUFBUSxJQUFJO1lBQ2hCLE9BQ0ssQ0FBRSxDQUFDO1FBQ1o7SUFDSjtJQUdBLHFCQUNJLDhEQUFDUztRQUFLQyxXQUFVOzswQkFDWiw4REFBQ2pCLDBEQUFNQTtnQkFBQ0ssV0FBV0E7Z0JBQVdhLFNBQVNWLFdBQVcsSUFBSSxHQUFHLEtBQUsscUVBQXFFOzs7Ozs7MEJBQ25JLDhEQUFDVztnQkFBUUYsV0FBVyxHQUFxRCxPQUFsRGIsV0FBVyxJQUFJLEdBQUcsVUFBVSxxQkFBcUIsRUFBQzs7a0NBQ3JFLDhEQUFDTCw0REFBUUE7d0JBQUNPLE1BQU1BO3dCQUFNQyxTQUFTQTt3QkFBU1csU0FBU1YsV0FBVyxJQUFJLEdBQUcscURBQXFELFFBQVE7Ozs7OztrQ0FFaEksOERBQUNXO3dCQUFRRixXQUFVOzswQ0FDZiw4REFBQ0c7Z0NBQUlILFdBQVU7O2tEQUNYLDhEQUFDSTt3Q0FBR0osV0FBVTtrREFBK0M7Ozs7OztrREFDN0QsOERBQUNLO3dDQUFHTCxXQUFVO2tEQUE0Qjs7Ozs7Ozs7Ozs7OzBDQUU5Qyw4REFBQ0c7Z0NBQUlILFdBQVU7MENBQ1gsNEVBQUNmLGdFQUFZQTs7Ozs7Ozs7OzswQ0FFakIsOERBQUNrQjtnQ0FBSUgsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUVuQiw4REFBQ2hCLDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkIsQ0FBQztHQXZDdUJFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanM/MTY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnQC9jb21wb25lbnRzL2Nhcm91c2VsJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IENhcmRDYXJvdXNlbCBmcm9tICdAL2NvbXBvbmVudHMvY2FyZENhcm91c2VsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICAvLyBzdGF0ZSBmb3IgbmF2YmFyIGV4cGFuc2lvblxyXG4gICAgY29uc3QgW2V4cGFuZCwgc2V0RXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gc3RhdGUgdG8gbW92ZSB0aGUgc2xpZGUgb24gcmVzaXplXHJcbiAgICBjb25zdCBbbW92ZSwgc2V0TW92ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbcmVzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+PiAwKXtcclxuICAgICAgICAgICAgICAgIHNldFNpemUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIHNldE1vdmUodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHsgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgPE5hdmJhciBzZXRFeHBhbmQ9e3NldEV4cGFuZH0gY2xhc3Nlcz17cmVzaXplID09PSB0cnVlID8gXCJcIiA6IFwib3BhY2l0eS0wIGxnOm9wYWNpdHktMTAwIHBvaW50ZXItZXZlbnRzLW5vbmUgbGc6cG9pbnRlci1ldmVudHMtYXV0b1wifSAvPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake2V4cGFuZCA9PT0gdHJ1ZSA/ICd3LTMvNCcgOiAndy1mdWxsIGxnOnctWzk0LjYlXSd9IGJnLWdyYXktMTAwIGFic29sdXRlIHJpZ2h0LTAgdG9wLTAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteS01IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTcwMGB9PlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIG1vdmU9e21vdmV9IHNldE1vdmU9e3NldE1vdmV9IGNsYXNzZXM9e3Jlc2l6ZSA9PT0gdHJ1ZSA/IFwidy0xMS8xMiBoLVs4MHZoXSBtZDpoLVs5MHZoXSByb3VuZGVkLVsycmVtXSBtLTEwXCIgOiBcInctZnVsbFwifSAvPlxyXG4gICAgICAgICAgICAgICAgey8qIEF1dG8gc2Nyb2xsIENhcm91c2VsICAqL31cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLXNjcmVlbiBwLTMgbWQ6cC01IG1kOnByLTAgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBmb250X2Z1dHVyYUxUXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1bMzUlXSBtZDpoLWZ1bGwgcC01IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtNXhsIHdvcmQtd3JhcCBsZWFkaW5nLXRpZ2h0XCI+TmV3ZXN0IEdlYXIgdG8gV29yazwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250X2Z1dHVyYUxUbGl0ZSB0ZXh0LWxnXCI+SW5ub3ZhdGlvbiBhbmQgQ29tZm9ydCBmb3IgV29tZW48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctWzY1JV0gaC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ2Fyb3VzZWwgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctMS81IGgtZnVsbCB0b3AtMCByaWdodC0wIGJnLWdyYWRpZW50LXRvLWwgZnJvbS13aGl0ZSB0by10cmFuc3BhcmVudCBwb2ludGVyLWV2ZW50cy1ub25lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJvdXNlbCIsIk5hdmJhciIsIkZvb3RlciIsIkNhcmRDYXJvdXNlbCIsIkhvbWUiLCJleHBhbmQiLCJzZXRFeHBhbmQiLCJtb3ZlIiwic2V0TW92ZSIsInJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicG9zaXRpb24iLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsIm1haW4iLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwic2VjdGlvbiIsImRpdiIsImgyIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});