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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/carousel */ \"./components/carousel.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_cardCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/cardCarousel */ \"./components/cardCarousel.js\");\n/* harmony import */ var _components_picCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/picCard */ \"./components/picCard.js\");\n/* harmony import */ var _public_card_imgs_card_img5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/card imgs/card img5.jpg */ \"./public/card imgs/card img5.jpg\");\n/* harmony import */ var _public_card_imgs_card_img6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/card imgs/card img6.jpg */ \"./public/card imgs/card img6.jpg\");\n/* harmony import */ var _public_card_imgs_card_img7_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/card imgs/card img7.jpg */ \"./public/card imgs/card img7.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// imports for images\n\n\n\nfunction Home() {\n    _s();\n    // state for navbar expansion\n    const [expand, setExpand] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [resize, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // expand === true ? setMove(true) : setMove(false)\n        window.addEventListener(\"scroll\", ()=>{\n            let position = document.documentElement.scrollTop;\n            if (position >> 0) {\n                setSize(true);\n            } else {}\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"w-full h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setExpand: setExpand,\n                classes: resize === true ? \"\" : \"opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"\".concat(expand === true ? \"w-3/4\" : \"w-full lg:w-[94.6%]\", \" bg-gray-100 absolute right-0 top-0 flex flex-col justify-center items-center space-y-5 transition-all duration-700\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        classes: resize === true ? \"w-11/12 h-[80vh] md:h-[90vh] rounded-[2rem] m-10\" : \"w-full\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"relative w-full h-screen p-3 md:p-5 md:pr-0 flex flex-col md:flex-row font_futuraLT\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-[35%] md:h-full p-5 flex flex-col justify-center items-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-2xl md:text-5xl word-wrap leading-tight\",\n                                        children: \"Newest Gear to Work\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"font_futuraLTlite text-lg\",\n                                        children: \"Innovation and Comfort for Women\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-[65%] h-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cardCarousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute w-1/5 h-full top-0 right-0 bg-gradient-to-l from-white to-transparent pointer-events-none\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"w-full h-screen p-3 md:p-10 flex flex-col md:flex-row justify-between font_futuraLT\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_picCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                img: _public_card_imgs_card_img5_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_picCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                img: _public_card_imgs_card_img6_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\binar\\\\My Projects\\\\Client Projects\\\\project Urbanfits\\\\Urbanfits\\\\frontend\\\\pages\\\\home.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"NULPqmiiSdWK2HVMvkNDTsuQKKQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBa0Q7QUFDTDtBQUNKO0FBQ0E7QUFDWTtBQUNWO0FBRTNDLHFCQUFxQjtBQUNpQztBQUNBO0FBQ0E7QUFFdkMsU0FBU1csT0FBTzs7SUFDM0IsNkJBQTZCO0lBQzdCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTFDLE1BQU0sQ0FBQ1ksUUFBUUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3hDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osbURBQW1EO1FBQ25EZSxPQUFPQyxnQkFBZ0IsQ0FBQyxVQUFVLElBQU07WUFDcEMsSUFBSUMsV0FBV0MsU0FBU0MsZUFBZSxDQUFDQyxTQUFTO1lBQ2pELElBQUlILFlBQVksR0FBRztnQkFDZkgsUUFBUSxJQUFJO1lBQ2hCLE9BQ0ssQ0FBRSxDQUFDO1FBQ1o7SUFDSjtJQUVBLHFCQUNJLDhEQUFDTztRQUFLQyxXQUFVOzswQkFDWiw4REFBQ25CLDBEQUFNQTtnQkFBQ1MsV0FBV0E7Z0JBQVdXLFNBQVNWLFdBQVcsSUFBSSxHQUFHLEtBQUsscUVBQXFFOzs7Ozs7MEJBQ25JLDhEQUFDVztnQkFBUUYsV0FBVyxHQUFxRCxPQUFsRFgsV0FBVyxJQUFJLEdBQUcsVUFBVSxxQkFBcUIsRUFBQzs7a0NBQ3JFLDhEQUFDVCw0REFBUUE7d0JBQUNxQixTQUFTVixXQUFXLElBQUksR0FBRyxxREFBcUQsUUFBUTs7Ozs7O2tDQUVsRyw4REFBQ1c7d0JBQVFGLFdBQVU7OzBDQUNmLDhEQUFDRztnQ0FBSUgsV0FBVTs7a0RBQ1gsOERBQUNJO3dDQUFHSixXQUFVO2tEQUErQzs7Ozs7O2tEQUM3RCw4REFBQ0s7d0NBQUdMLFdBQVU7a0RBQTRCOzs7Ozs7Ozs7Ozs7MENBRTlDLDhEQUFDRztnQ0FBSUgsV0FBVTswQ0FDWCw0RUFBQ2pCLGdFQUFZQTs7Ozs7Ozs7OzswQ0FFakIsOERBQUNvQjtnQ0FBSUgsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUVuQiw4REFBQ0U7d0JBQVFGLFdBQVU7OzBDQUNmLDhEQUFDaEIsMkRBQU9BO2dDQUFDc0IsS0FBS3JCLHVFQUFNQTs7Ozs7OzBDQUNwQiw4REFBQ0QsMkRBQU9BO2dDQUFDc0IsS0FBS3BCLHVFQUFNQTs7Ozs7Ozs7Ozs7O2tDQUV4Qiw4REFBQ0osMERBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QixDQUFDO0dBeEN1Qk07S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS5qcz8xNjc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdAL2NvbXBvbmVudHMvY2Fyb3VzZWwnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgQ2FyZENhcm91c2VsIGZyb20gJ0AvY29tcG9uZW50cy9jYXJkQ2Fyb3VzZWwnO1xyXG5pbXBvcnQgUGljQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvcGljQ2FyZCc7XHJcblxyXG4vLyBpbXBvcnRzIGZvciBpbWFnZXNcclxuaW1wb3J0IGltYWdlMSBmcm9tICcuLi9wdWJsaWMvY2FyZCBpbWdzL2NhcmQgaW1nNS5qcGcnXHJcbmltcG9ydCBpbWFnZTIgZnJvbSAnLi4vcHVibGljL2NhcmQgaW1ncy9jYXJkIGltZzYuanBnJ1xyXG5pbXBvcnQgaW1hZ2UzIGZyb20gJy4uL3B1YmxpYy9jYXJkIGltZ3MvY2FyZCBpbWc3LmpwZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICAvLyBzdGF0ZSBmb3IgbmF2YmFyIGV4cGFuc2lvblxyXG4gICAgY29uc3QgW2V4cGFuZCwgc2V0RXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtyZXNpemUsIHNldFNpemVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGV4cGFuZCA9PT0gdHJ1ZSA/IHNldE1vdmUodHJ1ZSkgOiBzZXRNb3ZlKGZhbHNlKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID4+IDApIHtcclxuICAgICAgICAgICAgICAgIHNldFNpemUodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHsgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICA8TmF2YmFyIHNldEV4cGFuZD17c2V0RXhwYW5kfSBjbGFzc2VzPXtyZXNpemUgPT09IHRydWUgPyBcIlwiIDogXCJvcGFjaXR5LTAgbGc6b3BhY2l0eS0xMDAgcG9pbnRlci1ldmVudHMtbm9uZSBsZzpwb2ludGVyLWV2ZW50cy1hdXRvXCJ9IC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7ZXhwYW5kID09PSB0cnVlID8gJ3ctMy80JyA6ICd3LWZ1bGwgbGc6dy1bOTQuNiVdJ30gYmctZ3JheS0xMDAgYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS15LTUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwYH0+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgY2xhc3Nlcz17cmVzaXplID09PSB0cnVlID8gXCJ3LTExLzEyIGgtWzgwdmhdIG1kOmgtWzkwdmhdIHJvdW5kZWQtWzJyZW1dIG0tMTBcIiA6IFwidy1mdWxsXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICB7LyogQXV0byBzY3JvbGwgQ2Fyb3VzZWwgICovfVxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtc2NyZWVuIHAtMyBtZDpwLTUgbWQ6cHItMCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGZvbnRfZnV0dXJhTFRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LVszNSVdIG1kOmgtZnVsbCBwLTUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC01eGwgd29yZC13cmFwIGxlYWRpbmctdGlnaHRcIj5OZXdlc3QgR2VhciB0byBXb3JrPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnRfZnV0dXJhTFRsaXRlIHRleHQtbGdcIj5Jbm5vdmF0aW9uIGFuZCBDb21mb3J0IGZvciBXb21lbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1bNjUlXSBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDYXJvdXNlbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy0xLzUgaC1mdWxsIHRvcC0wIHJpZ2h0LTAgYmctZ3JhZGllbnQtdG8tbCBmcm9tLXdoaXRlIHRvLXRyYW5zcGFyZW50IHBvaW50ZXItZXZlbnRzLW5vbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlbiBwLTMgbWQ6cC0xMCBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBmb250X2Z1dHVyYUxUXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBpY0NhcmQgaW1nPXtpbWFnZTF9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBpY0NhcmQgaW1nPXtpbWFnZTJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJvdXNlbCIsIk5hdmJhciIsIkZvb3RlciIsIkNhcmRDYXJvdXNlbCIsIlBpY0NhcmQiLCJpbWFnZTEiLCJpbWFnZTIiLCJpbWFnZTMiLCJIb21lIiwiZXhwYW5kIiwic2V0RXhwYW5kIiwicmVzaXplIiwic2V0U2l6ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwb3NpdGlvbiIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwibWFpbiIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJzZWN0aW9uIiwiZGl2IiwiaDIiLCJoNCIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});