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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            name: \"MoralisAuth\",\n            credentials: {\n                message: {\n                    label: \"Message\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                },\n                signature: {\n                    label: \"Signature\",\n                    type: \"text\",\n                    placeholder: \"0x0\"\n                }\n            },\n            async authorize (credentials) {\n                try {\n                    // \"message\" and \"signature\" are needed for authorisation\n                    // we described them in \"credentials\" above\n                    const { message , signature  } = credentials;\n                    await moralis__WEBPACK_IMPORTED_MODULE_2___default().start({\n                        apiKey: process.env.MORALIS_API_KEY\n                    });\n                    const { address , profileId  } = (await moralis__WEBPACK_IMPORTED_MODULE_2___default().Auth.verify({\n                        message,\n                        signature,\n                        network: \"evm\"\n                    })).raw;\n                    const user = {\n                        address,\n                        profileId,\n                        signature\n                    };\n                    // returning the user object and creating  a session\n                    return user;\n                } catch (e) {\n                    console.error(e);\n                    return null;\n                }\n            }\n        }), \n    ],\n    // adding user info to the user session object\n    callbacks: {\n        async jwt ({ token , user  }) {\n            user && (token.user = user);\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user = token.user;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFDakM7QUFDSDtBQUU5QixpRUFBZUMsZ0RBQVEsQ0FBQztJQUNwQkUsU0FBUyxFQUFFO1FBQ1BILHNFQUFtQixDQUFDO1lBQ2hCSSxJQUFJLEVBQUUsYUFBYTtZQUNuQkMsV0FBVyxFQUFFO2dCQUNUQyxPQUFPLEVBQUU7b0JBQ0xDLEtBQUssRUFBRSxTQUFTO29CQUNoQkMsSUFBSSxFQUFFLE1BQU07b0JBQ1pDLFdBQVcsRUFBRSxLQUFLO2lCQUNyQjtnQkFDREMsU0FBUyxFQUFFO29CQUNQSCxLQUFLLEVBQUUsV0FBVztvQkFDbEJDLElBQUksRUFBRSxNQUFNO29CQUNaQyxXQUFXLEVBQUUsS0FBSztpQkFDckI7YUFDSjtZQUNDLE1BQU1FLFNBQVMsRUFBQ04sV0FBVyxFQUFFO2dCQUMzQixJQUFJO29CQUNGLHlEQUF5RDtvQkFDekQsMkNBQTJDO29CQUMzQyxNQUFNLEVBQUVDLE9BQU8sR0FBRUksU0FBUyxHQUFFLEdBQUdMLFdBQVc7b0JBRTFDLE1BQU1ILG9EQUFhLENBQUM7d0JBQUVXLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7cUJBQUUsQ0FBQyxDQUFDO29CQUU3RCxNQUFNLEVBQUVDLE9BQU8sR0FBRUMsU0FBUyxHQUFFLEdBQUcsQ0FDN0IsTUFBTWhCLDBEQUFtQixDQUFDO3dCQUFFSSxPQUFPO3dCQUFFSSxTQUFTO3dCQUFFVyxPQUFPLEVBQUUsS0FBSztxQkFBRSxDQUFDLEVBQ2pFQyxHQUFHO29CQUVMLE1BQU1DLElBQUksR0FBRzt3QkFBRU4sT0FBTzt3QkFBRUMsU0FBUzt3QkFBRVIsU0FBUztxQkFBRTtvQkFDOUMsb0RBQW9EO29CQUNwRCxPQUFPYSxJQUFJLENBQUM7Z0JBQ2QsRUFBRSxPQUFPQyxDQUFDLEVBQUU7b0JBQ1ZDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUMsQ0FBQztvQkFDakIsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztZQUNILENBQUM7U0FDTixDQUFDO0tBQ0w7SUFDRCw4Q0FBOEM7SUFDOUNHLFNBQVMsRUFBRTtRQUNQLE1BQU1DLEdBQUcsRUFBQyxFQUFFQyxLQUFLLEdBQUVOLElBQUksR0FBRSxFQUFFO1lBQ3ZCQSxJQUFJLElBQUtNLENBQUFBLEtBQUssQ0FBQ04sSUFBSSxHQUFHQSxJQUFJLEVBQUU7WUFDNUIsT0FBT00sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFDRCxNQUFNQyxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFRCxLQUFLLEdBQUUsRUFBRTtZQUM5QkMsT0FBTyxDQUFDUCxJQUFJLEdBQUdNLEtBQUssQ0FBQ04sSUFBSSxDQUFDO1lBQzFCLE9BQU9PLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQ0o7Q0FDSixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIzYXV0aC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IE1vcmFsaXMgZnJvbSAnbW9yYWxpcyc7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICAgICBuYW1lOiAnTW9yYWxpc0F1dGgnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTWVzc2FnZScsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcweDAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2lnbmF0dXJlOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2lnbmF0dXJlJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJzB4MCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAvLyBcIm1lc3NhZ2VcIiBhbmQgXCJzaWduYXR1cmVcIiBhcmUgbmVlZGVkIGZvciBhdXRob3Jpc2F0aW9uXG4gICAgICAgICAgICAgICAgICAvLyB3ZSBkZXNjcmliZWQgdGhlbSBpbiBcImNyZWRlbnRpYWxzXCIgYWJvdmVcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZSwgc2lnbmF0dXJlIH0gPSBjcmVkZW50aWFscztcblxuICAgICAgICAgICAgICAgICAgYXdhaXQgTW9yYWxpcy5zdGFydCh7IGFwaUtleTogcHJvY2Vzcy5lbnYuTU9SQUxJU19BUElfS0VZIH0pO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCB7IGFkZHJlc3MsIHByb2ZpbGVJZCB9ID0gKFxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBNb3JhbGlzLkF1dGgudmVyaWZ5KHsgbWVzc2FnZSwgc2lnbmF0dXJlLCBuZXR3b3JrOiAnZXZtJyB9KVxuICAgICAgICAgICAgICAgICAgKS5yYXc7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7IGFkZHJlc3MsIHByb2ZpbGVJZCwgc2lnbmF0dXJlIH07XG4gICAgICAgICAgICAgICAgICAvLyByZXR1cm5pbmcgdGhlIHVzZXIgb2JqZWN0IGFuZCBjcmVhdGluZyAgYSBzZXNzaW9uXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIC8vIGFkZGluZyB1c2VyIGluZm8gdG8gdGhlIHVzZXIgc2Vzc2lvbiBvYmplY3RcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgICAgICAgdXNlciAmJiAodG9rZW4udXNlciA9IHVzZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlcjtcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgICB9LFxuICAgIH0sXG59KTsiXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsIk5leHRBdXRoIiwiTW9yYWxpcyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsIm1lc3NhZ2UiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNpZ25hdHVyZSIsImF1dGhvcml6ZSIsInN0YXJ0IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk1PUkFMSVNfQVBJX0tFWSIsImFkZHJlc3MiLCJwcm9maWxlSWQiLCJBdXRoIiwidmVyaWZ5IiwibmV0d29yayIsInJhdyIsInVzZXIiLCJlIiwiY29uc29sZSIsImVycm9yIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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