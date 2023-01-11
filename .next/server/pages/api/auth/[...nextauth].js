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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            name: \"MoralisAuth\",\n            credentials: {\n                message: {\n                    label: \"Message\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                },\n                signature: {\n                    label: \"Signature\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    // \"message\" and \"signature\" are needed for authorisation\n                    // we described them in \"credentials\" above\n                    const { message , signature  } = credentials;\n                    await moralis__WEBPACK_IMPORTED_MODULE_2___default().start({\n                        apiKey: process.env.MORALIS_API_KEY\n                    });\n                    const { address , profileId  } = (await moralis__WEBPACK_IMPORTED_MODULE_2___default().Auth.verify({\n                        message,\n                        signature,\n                        network: \"evm\"\n                    })).raw;\n                    const user = {\n                        address,\n                        profileId,\n                        signature\n                    };\n                    // returning the user object and creating  a session\n                    return user;\n                } catch (e) {\n                    console.error(e);\n                    return null;\n                }\n            }\n        }), \n    ],\n    // adding user info to the user session object\n    callbacks: {\n        async jwt ({ token , user  }) {\n            user && (token.user = user);\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user = token.user;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFDakM7QUFDSDtBQUU5QixpRUFBZUMsZ0RBQVEsQ0FBQztJQUNwQkUsU0FBUyxFQUFFO1FBQ1BILHNFQUFtQixDQUFDO1lBQ2hCSSxJQUFJLEVBQUUsYUFBYTtZQUNuQkMsV0FBVyxFQUFFO2dCQUNUQyxPQUFPLEVBQUU7b0JBQ0xDLEtBQUssRUFBRSxTQUFTO29CQUNoQkMsSUFBSSxFQUFFLE1BQU07b0JBQ1pDLFdBQVcsRUFBRSxLQUFLO2lCQUNyQjtnQkFDREMsU0FBUyxFQUFFO29CQUNQSCxLQUFLLEVBQUUsV0FBVztvQkFDbEJDLElBQUksRUFBRSxNQUFNO29CQUNaQyxXQUFXLEVBQUUsS0FBSztpQkFDckI7YUFDSjtZQUNDLE1BQU1FLFNBQVMsRUFBQ04sV0FBVyxFQUFFO2dCQUMzQixJQUFJO29CQUNGLHlEQUF5RDtvQkFDekQsMkNBQTJDO29CQUMzQyxNQUFNLEVBQUVDLE9BQU8sR0FBRUksU0FBUyxHQUFFLEdBQUdMLFdBQVc7b0JBRTFDLE1BQU1ILG9EQUFhLENBQUM7d0JBQUVXLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7cUJBQUUsQ0FBQyxDQUFDO29CQUU3RCxNQUFNLEVBQUVDLE9BQU8sR0FBRUMsU0FBUyxHQUFFLEdBQUcsQ0FDN0IsTUFBTWhCLDBEQUFtQixDQUFDO3dCQUFFSSxPQUFPO3dCQUFFSSxTQUFTO3dCQUFFVyxPQUFPLEVBQUUsS0FBSztxQkFBRSxDQUFDLENBQ2xFLENBQUNDLEdBQUc7b0JBRUwsTUFBTUMsSUFBSSxHQUFHO3dCQUFFTixPQUFPO3dCQUFFQyxTQUFTO3dCQUFFUixTQUFTO3FCQUFFO29CQUM5QyxvREFBb0Q7b0JBQ3BELE9BQU9hLElBQUksQ0FBQztpQkFDYixDQUFDLE9BQU9DLENBQUMsRUFBRTtvQkFDVkMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQyxDQUFDO29CQUNqQixPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGO1NBQ04sQ0FBQztLQUNMO0lBQ0QsOENBQThDO0lBQzlDRyxTQUFTLEVBQUU7UUFDUCxNQUFNQyxHQUFHLEVBQUMsRUFBRUMsS0FBSyxHQUFFTixJQUFJLEdBQUUsRUFBRTtZQUN2QkEsSUFBSSxJQUFJLENBQUNNLEtBQUssQ0FBQ04sSUFBSSxHQUFHQSxJQUFJLENBQUMsQ0FBQztZQUM1QixPQUFPTSxLQUFLLENBQUM7U0FDaEI7UUFDRCxNQUFNQyxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFRCxLQUFLLEdBQUUsRUFBRTtZQUM5QkMsT0FBTyxDQUFDUCxJQUFJLEdBQUdNLEtBQUssQ0FBQ04sSUFBSSxDQUFDO1lBQzFCLE9BQU9PLE9BQU8sQ0FBQztTQUNsQjtLQUNKO0NBQ0osQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViM2F1dGgvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgTW9yYWxpcyBmcm9tICdtb3JhbGlzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICBuYW1lOiAnTW9yYWxpc0F1dGgnLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMHgwJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzaWduYXR1cmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NpZ25hdHVyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnMHgwJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAvLyBcIm1lc3NhZ2VcIiBhbmQgXCJzaWduYXR1cmVcIiBhcmUgbmVlZGVkIGZvciBhdXRob3Jpc2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgIC8vIHdlIGRlc2NyaWJlZCB0aGVtIGluIFwiY3JlZGVudGlhbHNcIiBhYm92ZVxyXG4gICAgICAgICAgICAgICAgICBjb25zdCB7IG1lc3NhZ2UsIHNpZ25hdHVyZSB9ID0gY3JlZGVudGlhbHM7XHJcblxyXG4gICAgICAgICAgICAgICAgICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHByb2ZpbGVJZCB9ID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IE1vcmFsaXMuQXV0aC52ZXJpZnkoeyBtZXNzYWdlLCBzaWduYXR1cmUsIG5ldHdvcms6ICdldm0nIH0pXHJcbiAgICAgICAgICAgICAgICAgICkucmF3O1xyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHsgYWRkcmVzcywgcHJvZmlsZUlkLCBzaWduYXR1cmUgfTtcclxuICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuaW5nIHRoZSB1c2VyIG9iamVjdCBhbmQgY3JlYXRpbmcgIGEgc2Vzc2lvblxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIF0sXHJcbiAgICAvLyBhZGRpbmcgdXNlciBpbmZvIHRvIHRoZSB1c2VyIHNlc3Npb24gb2JqZWN0XHJcbiAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgICAgICAgIHVzZXIgJiYgKHRva2VuLnVzZXIgPSB1c2VyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pOyJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiTmV4dEF1dGgiLCJNb3JhbGlzIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwibWVzc2FnZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic2lnbmF0dXJlIiwiYXV0aG9yaXplIiwic3RhcnQiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTU9SQUxJU19BUElfS0VZIiwiYWRkcmVzcyIsInByb2ZpbGVJZCIsIkF1dGgiLCJ2ZXJpZnkiLCJuZXR3b3JrIiwicmF3IiwidXNlciIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();