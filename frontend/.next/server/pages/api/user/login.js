"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/user/login";
exports.ids = ["pages/api/user/login"];
exports.modules = {

/***/ "crypto-js":
/*!****************************!*\
  !*** external "crypto-js" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("crypto-js");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "nextjs-cors":
/*!******************************!*\
  !*** external "nextjs-cors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ "(api)/./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = mongoose.Schema({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a username\"\n        ],\n        maxLength: [\n            30,\n            \"Username cannot exceed 30 characters\"\n        ],\n        minLength: [\n            4,\n            \"Username should have more than 4 characters\"\n        ],\n        unique: [\n            true,\n            \"This username is already in use\"\n        ]\n    },\n    phone: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please enter a valid email address\"\n        ],\n        unique: [\n            true,\n            \"This email address is already in use\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please Enter Your Password\"\n        ],\n        minLength: [\n            8,\n            \"Password should be greater than 8 characters\"\n        ]\n    },\n    role: {\n        type: String,\n        default: \"user\"\n    },\n    firstname: {\n        type: String\n    },\n    lastname: {\n        type: String\n    },\n    title: {\n        type: String\n    },\n    gender: {\n        type: String\n    },\n    date_of_birth: {\n        type: String\n    },\n    newsletter_sub_email: {\n        type: Boolean,\n        default: false,\n        required: true\n    },\n    newsletter_sub_phone: {\n        type: Boolean,\n        default: false,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLGFBQWFGLFNBQVNHLE1BQU0sQ0FBQztJQUMvQkMsVUFBVTtRQUNOQyxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQTBCO1FBQzNDQyxXQUFXO1lBQUM7WUFBSTtTQUF1QztRQUN2REMsV0FBVztZQUFDO1lBQUc7U0FBOEM7UUFDN0RDLFFBQVE7WUFBQyxJQUFJO1lBQUU7U0FBa0M7SUFDckQ7SUFDQUMsT0FBTztRQUNITixNQUFNQztRQUNOQyxVQUFVLElBQUk7SUFDbEI7SUFDQUssT0FBTztRQUNIUCxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQXFDO1FBQ3RERyxRQUFRO1lBQUMsSUFBSTtZQUFFO1NBQXVDO0lBQzFEO0lBQ0FHLFVBQVU7UUFDTlIsTUFBTUM7UUFDTkMsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUE2QjtRQUM5Q0UsV0FBVztZQUFDO1lBQUc7U0FBK0M7SUFDbEU7SUFDQUssTUFBTTtRQUNGVCxNQUFNQztRQUNOUyxTQUFTO0lBQ2I7SUFDQUMsV0FBVztRQUNQWCxNQUFNQztJQUNWO0lBQ0FXLFVBQVU7UUFDTlosTUFBTUM7SUFDVjtJQUNBWSxPQUFPO1FBQ0hiLE1BQU1DO0lBQ1Y7SUFDQWEsUUFBUTtRQUNKZCxNQUFNQztJQUNWO0lBQ0FjLGVBQWU7UUFDWGYsTUFBTUM7SUFDVjtJQUNBZSxzQkFBc0I7UUFDbEJoQixNQUFNaUI7UUFDTlAsU0FBUyxLQUFLO1FBQ2RSLFVBQVUsSUFBSTtJQUNsQjtJQUNBZ0Isc0JBQXNCO1FBQ2xCbEIsTUFBTWlCO1FBQ05QLFNBQVMsS0FBSztRQUNkUixVQUFVLElBQUk7SUFDbEI7QUFDSixHQUFHO0lBQUVpQixZQUFZLElBQUk7QUFBQztBQUV0QkMsT0FBT0MsT0FBTyxHQUFHMUIsU0FBUzJCLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJNUIsU0FBUzZCLEtBQUssQ0FBQyxRQUFRM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91cmJhbi1maXRzLy4vbW9kZWxzL3VzZXIuanM/NjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdXNlcm5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBhIHVzZXJuYW1lXCJdLFxyXG4gICAgICAgIG1heExlbmd0aDogWzMwLCBcIlVzZXJuYW1lIGNhbm5vdCBleGNlZWQgMzAgY2hhcmFjdGVyc1wiXSxcclxuICAgICAgICBtaW5MZW5ndGg6IFs0LCBcIlVzZXJuYW1lIHNob3VsZCBoYXZlIG1vcmUgdGhhbiA0IGNoYXJhY3RlcnNcIl0sXHJcbiAgICAgICAgdW5pcXVlOiBbdHJ1ZSwgXCJUaGlzIHVzZXJuYW1lIGlzIGFscmVhZHkgaW4gdXNlXCJdXHJcbiAgICB9LFxyXG4gICAgcGhvbmU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1wiXSxcclxuICAgICAgICB1bmlxdWU6IFt0cnVlLCBcIlRoaXMgZW1haWwgYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZVwiXSxcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIEVudGVyIFlvdXIgUGFzc3dvcmRcIl0sXHJcbiAgICAgICAgbWluTGVuZ3RoOiBbOCwgXCJQYXNzd29yZCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuIDggY2hhcmFjdGVyc1wiXSxcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6IFwidXNlclwiXHJcbiAgICB9LFxyXG4gICAgZmlyc3RuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgbGFzdG5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGdlbmRlcjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZ1xyXG4gICAgfSxcclxuICAgIGRhdGVfb2ZfYmlydGg6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBuZXdzbGV0dGVyX3N1Yl9lbWFpbDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBuZXdzbGV0dGVyX3N1Yl9waG9uZToge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH1cclxufSwgeyB0aW1lc3RhbXBzOiB0cnVlIH0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKSJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJtaW5MZW5ndGgiLCJ1bmlxdWUiLCJwaG9uZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyb2xlIiwiZGVmYXVsdCIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwidGl0bGUiLCJnZW5kZXIiLCJkYXRlX29mX2JpcnRoIiwibmV3c2xldHRlcl9zdWJfZW1haWwiLCJCb29sZWFuIiwibmV3c2xldHRlcl9zdWJfcGhvbmUiLCJ0aW1lc3RhbXBzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/user.js\n");

/***/ }),

/***/ "(api)/./pages/api/user/login.js":
/*!*********************************!*\
  !*** ./pages/api/user/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_connect_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/connect_db */ \"(api)/./utils/connect_db.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user */ \"(api)/./models/user.js\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_user__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_2__);\n\n\nconst CryptoJS = __webpack_require__(/*! crypto-js */ \"crypto-js\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst Login = async (req, res)=>{\n    // await NextCors(req, res, {\n    //     // Options\n    //     methods: ['POST'],\n    //     origin: '*',\n    //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204\n    // })\n    try {\n        if (req.method === \"POST\") {\n            await (0,_utils_connect_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            let user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                email: req.body.email\n            });\n            if (!user) user = await _models_user__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                username: req.body.email\n            });\n            if (!user) return res.status(404).json({\n                success: false,\n                msg: \"User not found, please create an account\"\n            });\n            const bytes = CryptoJS.AES.decrypt(user.password, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\");\n            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);\n            if (req.body.password !== originalPassword) return res.status(404).json({\n                success: false,\n                msg: \"Your password is incorrect\"\n            });\n            const payload = jwt.sign({\n                ...user\n            }, \"MuhammadBilawalAshrafOwnsUrbanFisBrand\");\n            res.status(200).json({\n                success: true,\n                msg: \"You are Logged in successfully !\",\n                payload\n            });\n        } else {\n            res.status(400).json({\n                success: false,\n                msg: \"bad request, you are using wrong request method!\"\n            });\n        }\n    } catch (error) {\n        console.log(error);\n        res.status(500).json({\n            success: false,\n            msg: \"Internal server error occured, please try again later\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFDVjtBQUNoQyxNQUFNRSxXQUFXQyxtQkFBT0EsQ0FBQyw0QkFBVztBQUNEO0FBQ25DLE1BQU1FLE1BQU1GLG1CQUFPQSxDQUFDLGtDQUFjO0FBRWxDLE1BQU1HLFFBQVEsT0FBT0MsS0FBS0MsTUFBUTtJQUM5Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsK0ZBQStGO0lBQy9GLEtBQUs7SUFDTCxJQUFJO1FBQ0EsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7WUFDdkIsTUFBTVQsNkRBQVNBO1lBQ2YsSUFBSVUsT0FBTyxNQUFNVCwyREFBWSxDQUFDO2dCQUFFVyxPQUFPTCxJQUFJTSxJQUFJLENBQUNELEtBQUs7WUFBQztZQUN0RCxJQUFJLENBQUNGLE1BQU1BLE9BQU8sTUFBTVQsMkRBQVksQ0FBQztnQkFBRWEsVUFBVVAsSUFBSU0sSUFBSSxDQUFDRCxLQUFLO1lBQUM7WUFDaEUsSUFBSSxDQUFDRixNQUFNLE9BQU9GLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUMsS0FBSztZQUEyQztZQUN6RyxNQUFNQyxRQUFRakIsU0FBU2tCLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDWCxLQUFLWSxRQUFRLEVBQUVDLHdDQUFzQjtZQUN4RSxNQUFNRyxtQkFBbUJQLE1BQU1RLFFBQVEsQ0FBQ3pCLFNBQVMwQixHQUFHLENBQUNDLElBQUk7WUFDekQsSUFBSXRCLElBQUlNLElBQUksQ0FBQ1MsUUFBUSxLQUFLSSxrQkFBa0IsT0FBT2xCLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUMsS0FBSztZQUE2QjtZQUM1SCxNQUFNWSxVQUFVekIsSUFBSTBCLElBQUksQ0FBQztnQkFBRSxHQUFHckIsSUFBSTtZQUFDLEdBQUdhLHdDQUFzQjtZQUM1RGYsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDakJDLFNBQVMsSUFBSTtnQkFDYkMsS0FBSztnQkFDTFk7WUFDSjtRQUNKLE9BQ0s7WUFDRHRCLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVMsS0FBSztnQkFBRUMsS0FBSztZQUFtRDtRQUNuRyxDQUFDO0lBQ0wsRUFDQSxPQUFPYyxPQUFPO1FBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWnhCLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUyxLQUFLO1lBQUVDLEtBQUs7UUFBd0Q7SUFDeEc7QUFDSjtBQUNBLGlFQUFlWixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXJiYW4tZml0cy8uL3BhZ2VzL2FwaS91c2VyL2xvZ2luLmpzP2U4YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbm5lY3REQiBmcm9tIFwiQC91dGlscy9jb25uZWN0X2RiXCJcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzZXJcIlxyXG5jb25zdCBDcnlwdG9KUyA9IHJlcXVpcmUoXCJjcnlwdG8tanNcIilcclxuaW1wb3J0IE5leHRDb3JzIGZyb20gJ25leHRqcy1jb3JzJztcclxuY29uc3Qgand0ID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKVxyXG5cclxuY29uc3QgTG9naW4gPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIC8vIGF3YWl0IE5leHRDb3JzKHJlcSwgcmVzLCB7XHJcbiAgICAvLyAgICAgLy8gT3B0aW9uc1xyXG4gICAgLy8gICAgIG1ldGhvZHM6IFsnUE9TVCddLFxyXG4gICAgLy8gICAgIG9yaWdpbjogJyonLFxyXG4gICAgLy8gICAgIG9wdGlvbnNTdWNjZXNzU3RhdHVzOiAyMDAsIC8vIHNvbWUgbGVnYWN5IGJyb3dzZXJzIChJRTExLCB2YXJpb3VzIFNtYXJ0VFZzKSBjaG9rZSBvbiAyMDRcclxuICAgIC8vIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICAgICAgYXdhaXQgQ29ubmVjdERCKClcclxuICAgICAgICAgICAgbGV0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSlcclxuICAgICAgICAgICAgaWYgKCF1c2VyKSB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgdXNlcm5hbWU6IHJlcS5ib2R5LmVtYWlsIH0pXHJcbiAgICAgICAgICAgIGlmICghdXNlcikgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJVc2VyIG5vdCBmb3VuZCwgcGxlYXNlIGNyZWF0ZSBhbiBhY2NvdW50XCIgfSlcclxuICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh1c2VyLnBhc3N3b3JkLCBwcm9jZXNzLmVudi5TRUNSRVRfS0VZKVxyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFBhc3N3b3JkID0gYnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpXHJcbiAgICAgICAgICAgIGlmIChyZXEuYm9keS5wYXNzd29yZCAhPT0gb3JpZ2luYWxQYXNzd29yZCkgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1zZzogXCJZb3VyIHBhc3N3b3JkIGlzIGluY29ycmVjdFwiIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBqd3Quc2lnbih7IC4uLnVzZXIgfSwgcHJvY2Vzcy5lbnYuU0VDUkVUX0tFWSlcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1zZzogXCJZb3UgYXJlIExvZ2dlZCBpbiBzdWNjZXNzZnVsbHkgIVwiLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcImJhZCByZXF1ZXN0LCB5b3UgYXJlIHVzaW5nIHdyb25nIHJlcXVlc3QgbWV0aG9kIVwiIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbXNnOiBcIkludGVybmFsIHNlcnZlciBlcnJvciBvY2N1cmVkLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyXCIgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiJdLCJuYW1lcyI6WyJDb25uZWN0REIiLCJVc2VyIiwiQ3J5cHRvSlMiLCJyZXF1aXJlIiwiTmV4dENvcnMiLCJqd3QiLCJMb2dpbiIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXIiLCJmaW5kT25lIiwiZW1haWwiLCJib2R5IiwidXNlcm5hbWUiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1zZyIsImJ5dGVzIiwiQUVTIiwiZGVjcnlwdCIsInBhc3N3b3JkIiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVF9LRVkiLCJvcmlnaW5hbFBhc3N3b3JkIiwidG9TdHJpbmciLCJlbmMiLCJVdGY4IiwicGF5bG9hZCIsInNpZ24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/login.js\n");

/***/ }),

/***/ "(api)/./utils/connect_db.js":
/*!*****************************!*\
  !*** ./utils/connect_db.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ConnectDB = async ()=>{\n    if (mongoose.connections[0].readyState) return console.log(\"Success! Connection already exists\\n\");\n    else return mongoose.connect(\"mongodb+srv://darkreaper:s19114666d@cluster0.eyxeosm.mongodb.net/Urbanfits?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n        dbName: \"Urbanfits\"\n    }, console.log(\"Connected to the mongodb successfully!\\n\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0X2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV6QixNQUFNQyxZQUFZLFVBQVU7SUFDeEIsSUFBR0YsU0FBU0csV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsVUFBVSxFQUFFLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQztTQUNyRCxPQUFPTixTQUFTTyxPQUFPLENBQUNDLHdHQUFxQixFQUFDO1FBQy9DRyxpQkFBaUIsSUFBSTtRQUNyQkMsb0JBQW9CLElBQUk7UUFDeEJDLFFBQVE7SUFDVixHQUFHUixRQUFRQyxHQUFHLENBQUM7QUFDckI7QUFFQSxpRUFBZUosU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3VyYmFuLWZpdHMvLi91dGlscy9jb25uZWN0X2RiLmpzP2NlZmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCBDb25uZWN0REIgPSBhc3luYyAoKT0+e1xyXG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkgcmV0dXJuIGNvbnNvbGUubG9nKFwiU3VjY2VzcyEgQ29ubmVjdGlvbiBhbHJlYWR5IGV4aXN0c1xcblwiKVxyXG4gICAgZWxzZSByZXR1cm4gbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkse1xyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgICAgZGJOYW1lOiBcIlVyYmFuZml0c1wiXHJcbiAgICAgIH0sIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIHRoZSBtb25nb2RiIHN1Y2Nlc3NmdWxseSFcXG5cIikpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3REQiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJDb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJkYk5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/connect_db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/login.js"));
module.exports = __webpack_exports__;

})();