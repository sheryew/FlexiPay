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
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/coinbaseWallet */ \"wagmi/connectors/coinbaseWallet\");\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleAuth = async (wal)=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        console.log(\"Connect To Site Via Wallet\");\n        const userData = {\n            network: \"evm\"\n        };\n        if (wal === \"meta\") {\n            const { account , chain  } = await connectAsync({\n                connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__.MetaMaskConnector({})\n            });\n            userData.address = account;\n            userData.chain = chain.id;\n        }\n        if (wal === \"coin\") {\n            const { account: account1 , chain: chain1  } = await connectAsync({\n                connector: new wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__.CoinbaseWalletConnector({})\n            });\n            userData.address = account1;\n            userData.chain = chain1.id;\n        }\n        if (wal === \"wal\") {\n            const { account: account2 , chain: chain2  } = await connectAsync({\n                connector: new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__.WalletConnectConnector({\n                    options: {\n                        qrcode: true\n                    }\n                })\n            });\n            userData.address = account2;\n            userData.chain = chain2.id;\n        }\n        console.log(\"Sending Connected Account and Chain ID to Moralis Auth API\");\n        console.log(userData);\n        console.log(userData[\"address\"]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"http://code.jquery.com/jquery-1.11.0.min.js\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"button-34\",\n                onClick: ()=>handleAuth(\"meta\"),\n                children: \"Authenticate via Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"button-34\",\n                onClick: ()=>handleAuth(\"coin\"),\n                children: \"Authenticate via Coinbase\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"button-34\",\n                onClick: ()=>handleAuth(\"wal\"),\n                children: \"Authenticate via Wallet Connect\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVc7Z0JBQUNDLE9BQU8sRUFBRSxJQUFNbkIsVUFBVSxDQUFDLE1BQU0sQ0FBQzswQkFBRSwyQkFFN0Q7Ozs7O29CQUFTOzBCQUNULDhEQUFDb0IsSUFBRTs7OztvQkFBRTswQkFDTCw4REFBQ0gsUUFBTTtnQkFBQ0MsS0FBSyxFQUFDLFdBQVc7Z0JBQUNDLE9BQU8sRUFBRSxJQUFNbkIsVUFBVSxDQUFDLEtBQUssQ0FBQzswQkFBRSxpQ0FFNUQ7Ozs7O29CQUFTOzs7Ozs7WUFDTCxDQUNOO0NBQ0g7QUFFRCxpRUFBZU4sTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViM2F1dGgvLi9wYWdlcy9zaWduaW4uanM/NzhmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbm5lY3QsIHVzZVNpZ25NZXNzYWdlLCB1c2VEaXNjb25uZWN0IH0gZnJvbSBcIndhZ21pXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBNZXRhTWFza0Nvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL21ldGFNYXNrXCI7XHJcbmltcG9ydCB7IENvaW5iYXNlV2FsbGV0Q29ubmVjdG9yIH0gZnJvbSBcIndhZ21pL2Nvbm5lY3RvcnMvY29pbmJhc2VXYWxsZXRcIjtcclxuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL3dhbGxldENvbm5lY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgY29uc3QgeyBjb25uZWN0QXN5bmMgfSA9IHVzZUNvbm5lY3QoKTtcclxuICBjb25zdCB7IGRpc2Nvbm5lY3RBc3luYyB9ID0gdXNlRGlzY29ubmVjdCgpO1xyXG4gIGNvbnN0IHsgaXNDb25uZWN0ZWQgfSA9IHVzZUFjY291bnQoKTtcclxuICBjb25zdCB7IHNpZ25NZXNzYWdlQXN5bmMgfSA9IHVzZVNpZ25NZXNzYWdlKCk7XHJcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQXV0aCA9IGFzeW5jICh3YWwpID0+IHtcclxuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xyXG4gICAgICBhd2FpdCBkaXNjb25uZWN0QXN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3QgVG8gU2l0ZSBWaWEgV2FsbGV0XCIpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJEYXRhID0geyBuZXR3b3JrOiBcImV2bVwiIH07XHJcblxyXG4gICAgaWYgKHdhbCA9PT0gXCJtZXRhXCIpIHtcclxuICAgICAgY29uc3QgeyBhY2NvdW50LCBjaGFpbiB9ID0gYXdhaXQgY29ubmVjdEFzeW5jKHtcclxuICAgICAgICBjb25uZWN0b3I6IG5ldyBNZXRhTWFza0Nvbm5lY3Rvcih7fSksXHJcbiAgICAgIH0pO1xyXG4gICAgICB1c2VyRGF0YS5hZGRyZXNzID0gYWNjb3VudDtcclxuICAgICAgdXNlckRhdGEuY2hhaW4gPSBjaGFpbi5pZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2FsID09PSBcImNvaW5cIikge1xyXG4gICAgICBjb25zdCB7IGFjY291bnQsIGNoYWluIH0gPSBhd2FpdCBjb25uZWN0QXN5bmMoe1xyXG4gICAgICAgIGNvbm5lY3RvcjogbmV3IENvaW5iYXNlV2FsbGV0Q29ubmVjdG9yKHt9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIHVzZXJEYXRhLmFkZHJlc3MgPSBhY2NvdW50O1xyXG4gICAgICB1c2VyRGF0YS5jaGFpbiA9IGNoYWluLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3YWwgPT09IFwid2FsXCIpIHtcclxuICAgICAgY29uc3QgeyBhY2NvdW50LCBjaGFpbiB9ID0gYXdhaXQgY29ubmVjdEFzeW5jKHtcclxuICAgICAgICBjb25uZWN0b3I6IG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHsgb3B0aW9uczogeyBxcmNvZGU6IHRydWUgfSB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIHVzZXJEYXRhLmFkZHJlc3MgPSBhY2NvdW50O1xyXG4gICAgICB1c2VyRGF0YS5jaGFpbiA9IGNoYWluLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBDb25uZWN0ZWQgQWNjb3VudCBhbmQgQ2hhaW4gSUQgdG8gTW9yYWxpcyBBdXRoIEFQSVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxyXG4gICAgXHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhWydhZGRyZXNzJ10pXHJcblxyXG5cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPldlYjMgQXV0aGVudGljYXRpb248L2gzPlxyXG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHA6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTEuMTEuMC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi0zNFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGgoXCJtZXRhXCIpfT5cclxuICAgICAgICBBdXRoZW50aWNhdGUgdmlhIE1ldGFtYXNrXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi0zNFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGgoXCJjb2luXCIpfT5cclxuICAgICAgICBBdXRoZW50aWNhdGUgdmlhIENvaW5iYXNlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLTM0XCIgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aChcIndhbFwiKX0+XHJcbiAgICAgICAgQXV0aGVudGljYXRlIHZpYSBXYWxsZXQgQ29ubmVjdFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcclxuIl0sIm5hbWVzIjpbInNpZ25JbiIsInVzZUFjY291bnQiLCJ1c2VDb25uZWN0IiwidXNlU2lnbk1lc3NhZ2UiLCJ1c2VEaXNjb25uZWN0IiwidXNlUm91dGVyIiwiTWV0YU1hc2tDb25uZWN0b3IiLCJDb2luYmFzZVdhbGxldENvbm5lY3RvciIsIldhbGxldENvbm5lY3RDb25uZWN0b3IiLCJheGlvcyIsIlNpZ25JbiIsImNvbm5lY3RBc3luYyIsImRpc2Nvbm5lY3RBc3luYyIsImlzQ29ubmVjdGVkIiwic2lnbk1lc3NhZ2VBc3luYyIsInB1c2giLCJoYW5kbGVBdXRoIiwid2FsIiwiY29uc29sZSIsImxvZyIsInVzZXJEYXRhIiwibmV0d29yayIsImFjY291bnQiLCJjaGFpbiIsImNvbm5lY3RvciIsImFkZHJlc3MiLCJpZCIsIm9wdGlvbnMiLCJxcmNvZGUiLCJkaXYiLCJoMyIsInNjcmlwdCIsInNyYyIsImJ1dHRvbiIsImNsYXNzIiwib25DbGljayIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/connectors/coinbaseWallet":
/*!**************************************************!*\
  !*** external "wagmi/connectors/coinbaseWallet" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/coinbaseWallet");

/***/ }),

/***/ "wagmi/connectors/metaMask":
/*!********************************************!*\
  !*** external "wagmi/connectors/metaMask" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/metaMask");

/***/ }),

/***/ "wagmi/connectors/walletConnect":
/*!*************************************************!*\
  !*** external "wagmi/connectors/walletConnect" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("wagmi/connectors/walletConnect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.js"));
module.exports = __webpack_exports__;

})();