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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/carousel */ \"./components/carousel.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_cardCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/cardCarousel */ \"./components/cardCarousel.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    // state for navbar expansion\n    const [expand, setExpand] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // state to move the slide on resize\n    const [move, setMove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [resize, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        expand === true ? setMove(true) : setMove(false);\n        window.addEventListener(\"scroll\", ()=>{\n            let position = document.documentElement.scrollTop;\n            if (position >> 0) {\n                setSize(true);\n                setMove(true);\n            } else {}\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setExpand: setExpand,\n                classes: resize === true ? \"\" : \"opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"\".concat(expand === true ? \"w-3/4\" : \"w-full lg:w-[94.6%]\", \" bg-gray-100 absolute right-0 top-0 flex flex-col justify-center items-center space-y-5 transition-all duration-700\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        move: move,\n                        setMove: setMove,\n                        classes: resize === true ? \"w-11/12 h-[80vh] md:h-[90vh] rounded-[2rem] m-10\" : \"w-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"relative w-full h-screen p-3 md:p-5 md:pr-0 flex flex-col md:flex-row font_futuraLT\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-[35%] md:h-full p-5 flex flex-col justify-center items-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-2xl md:text-5xl word-wrap leading-tight\",\n                                        children: \"Newest Gear to Work\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"font_futuraLTlite text-lg\",\n                                        children: \"Innovation and Comfort for Women\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-[65%] h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cardCarousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute w-1/5 h-full top-0 right-0 bg-gradient-to-l from-white to-transparent pointer-events-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"8pXFdl28+MC98WbLouFOcAX5xkI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFrRDtBQUNMO0FBQ0o7QUFDQTtBQUNZO0FBRXRDLFNBQVNPLE9BQU87O0lBQzNCLDZCQUE2QjtJQUM3QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxvQ0FBb0M7SUFDcEMsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFFdEMsTUFBTSxDQUFDVSxRQUFRQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDeENELGdEQUFTQSxDQUFDLElBQU07UUFDWk8sV0FBVyxJQUFJLEdBQUdHLFFBQVEsSUFBSSxJQUFJQSxRQUFRLEtBQUssQ0FBQztRQUNoREcsT0FBT0MsZ0JBQWdCLENBQUMsVUFBVSxJQUFNO1lBQ3BDLElBQUlDLFdBQVdDLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUztZQUNqRCxJQUFJSCxZQUFZLEdBQUc7Z0JBQ2ZILFFBQVEsSUFBSTtnQkFDWkYsUUFBUSxJQUFJO1lBQ2hCLE9BQ0ssQ0FBRSxDQUFDO1FBQ1o7SUFDSjtJQUdBLHFCQUNJLDhEQUFDUztRQUFLQyxXQUFVOzswQkFDWiw4REFBQ2pCLDBEQUFNQTtnQkFBQ0ssV0FBV0E7Z0JBQVdhLFNBQVNWLFdBQVcsSUFBSSxHQUFHLEtBQUsscUVBQXFFOzs7Ozs7MEJBQ25JLDhEQUFDVztnQkFBUUYsV0FBVyxHQUFxRCxPQUFsRGIsV0FBVyxJQUFJLEdBQUcsVUFBVSxxQkFBcUIsRUFBQzs7a0NBQ3JFLDhEQUFDTCw0REFBUUE7d0JBQUNPLE1BQU1BO3dCQUFNQyxTQUFTQTt3QkFBU1csU0FBU1YsV0FBVyxJQUFJLEdBQUcscURBQXFELFFBQVE7Ozs7OztrQ0FFaEksOERBQUNXO3dCQUFRRixXQUFVOzswQ0FDZiw4REFBQ0c7Z0NBQUlILFdBQVU7O2tEQUNYLDhEQUFDSTt3Q0FBR0osV0FBVTtrREFBK0M7Ozs7OztrREFDN0QsOERBQUNLO3dDQUFHTCxXQUFVO2tEQUE0Qjs7Ozs7Ozs7Ozs7OzBDQUU5Qyw4REFBQ0c7Z0NBQUlILFdBQVU7MENBQ1gsNEVBQUNmLGdFQUFZQTs7Ozs7Ozs7OzswQ0FFakIsOERBQUNrQjtnQ0FBSUgsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUVuQiw4REFBQ2hCLDBEQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkIsQ0FBQztHQXhDdUJFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanM/MTY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnQC9jb21wb25lbnRzL2Nhcm91c2VsJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IENhcmRDYXJvdXNlbCBmcm9tICdAL2NvbXBvbmVudHMvY2FyZENhcm91c2VsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICAvLyBzdGF0ZSBmb3IgbmF2YmFyIGV4cGFuc2lvblxyXG4gICAgY29uc3QgW2V4cGFuZCwgc2V0RXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgLy8gc3RhdGUgdG8gbW92ZSB0aGUgc2xpZGUgb24gcmVzaXplXHJcbiAgICBjb25zdCBbbW92ZSwgc2V0TW92ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbcmVzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBleHBhbmQgPT09IHRydWUgPyBzZXRNb3ZlKHRydWUpIDogc2V0TW92ZShmYWxzZSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+PiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaXplKHRydWUpXHJcbiAgICAgICAgICAgICAgICBzZXRNb3ZlKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgc2V0RXhwYW5kPXtzZXRFeHBhbmR9IGNsYXNzZXM9e3Jlc2l6ZSA9PT0gdHJ1ZSA/IFwiXCIgOiBcIm9wYWNpdHktMCBsZzpvcGFjaXR5LTEwMCBwb2ludGVyLWV2ZW50cy1ub25lIGxnOnBvaW50ZXItZXZlbnRzLWF1dG9cIn0gLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHtleHBhbmQgPT09IHRydWUgPyAndy0zLzQnIDogJ3ctZnVsbCBsZzp3LVs5NC42JV0nfSBiZy1ncmF5LTEwMCBhYnNvbHV0ZSByaWdodC0wIHRvcC0wIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXktNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDBgfT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBtb3ZlPXttb3ZlfSBzZXRNb3ZlPXtzZXRNb3ZlfSBjbGFzc2VzPXtyZXNpemUgPT09IHRydWUgPyBcInctMTEvMTIgaC1bODB2aF0gbWQ6aC1bOTB2aF0gcm91bmRlZC1bMnJlbV0gbS0xMFwiIDogXCJ3LWZ1bGxcIn0gLz5cclxuICAgICAgICAgICAgICAgIHsvKiBBdXRvIHNjcm9sbCBDYXJvdXNlbCAgKi99XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgaC1zY3JlZW4gcC0zIG1kOnAtNSBtZDpwci0wIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZm9udF9mdXR1cmFMVFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctWzM1JV0gbWQ6aC1mdWxsIHAtNSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTV4bCB3b3JkLXdyYXAgbGVhZGluZy10aWdodFwiPk5ld2VzdCBHZWFyIHRvIFdvcms8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udF9mdXR1cmFMVGxpdGUgdGV4dC1sZ1wiPklubm92YXRpb24gYW5kIENvbWZvcnQgZm9yIFdvbWVuPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LVs2NSVdIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENhcm91c2VsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTEvNSBoLWZ1bGwgdG9wLTAgcmlnaHQtMCBiZy1ncmFkaWVudC10by1sIGZyb20td2hpdGUgdG8tdHJhbnNwYXJlbnQgcG9pbnRlci1ldmVudHMtbm9uZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2Fyb3VzZWwiLCJOYXZiYXIiLCJGb290ZXIiLCJDYXJkQ2Fyb3VzZWwiLCJIb21lIiwiZXhwYW5kIiwic2V0RXhwYW5kIiwibW92ZSIsInNldE1vdmUiLCJyZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvc2l0aW9uIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJtYWluIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsInNlY3Rpb24iLCJkaXYiLCJoMiIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});