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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/coinbaseWallet */ \"wagmi/connectors/coinbaseWallet\");\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleAuth = async (wal)=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        console.log(\"Connect To Site Via Wallet\");\n        const userData = {\n            network: \"evm\"\n        };\n        if (wal === \"meta\") {\n            const { account , chain  } = await connectAsync({\n                connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__.MetaMaskConnector({})\n            });\n            userData.address = account;\n            userData.chain = chain.id;\n        }\n        if (wal === \"coin\") {\n            const { account: account1 , chain: chain1  } = await connectAsync({\n                connector: new wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__.CoinbaseWalletConnector({})\n            });\n            userData.address = account1;\n            userData.chain = chain1.id;\n        }\n        if (wal === \"wal\") {\n            const { account: account2 , chain: chain2  } = await connectAsync({\n                connector: new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__.WalletConnectConnector({\n                    options: {\n                        qrcode: true\n                    }\n                })\n            });\n            userData.address = account2;\n            userData.chain = chain2.id;\n        }\n        console.log(\"Sending Connected Account and Chain ID to Moralis Auth API\");\n        console.log(userData);\n        console.log(userData[\"address\"]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"/home/john/repos/FlexiPay/pages/signin.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"http://code.jquery.com/jquery-1.11.0.min.js\"\n            }, void 0, false, {\n                fileName: \"/home/john/repos/FlexiPay/pages/signin.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"button-34\",\n                onClick: ()=>handleAuth(\"meta\"),\n                children: \"Authenticate via Metamask\"\n            }, void 0, false, {\n                fileName: \"/home/john/repos/FlexiPay/pages/signin.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/john/repos/FlexiPay/pages/signin.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"button-35\",\n                onClick: ()=>handleAuth(\"coin\"),\n                children: \"Authenticate via Coinbase\"\n            }, void 0, false, {\n                fileName: \"/home/john/repos/FlexiPay/pages/signin.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/john/repos/FlexiPay/pages/signin.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"button-36\",\n                onClick: ()=>handleAuth(\"wal\"),\n                children: \"Authenticate via Wallet Connect\"\n            }, void 0, false, {\n                fileName: \"/home/john/repos/FlexiPay/pages/signin.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/john/repos/FlexiPay/pages/signin.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQU07Z0JBQUNDLEtBQUssRUFBQyxXQUFXO2dCQUFDQyxPQUFPLEVBQUUsSUFBTW5CLFVBQVUsQ0FBQyxNQUFNLENBQUM7MEJBQUUsMkJBRTdEOzs7OztvQkFBUzswQkFDVCw4REFBQ29CLElBQUU7Ozs7b0JBQUU7MEJBQ0wsOERBQUNILFFBQU07Z0JBQUNDLEtBQUssRUFBQyxXQUFXO2dCQUFDQyxPQUFPLEVBQUUsSUFBTW5CLFVBQVUsQ0FBQyxLQUFLLENBQUM7MEJBQUUsaUNBRTVEOzs7OztvQkFBUzs7Ozs7O1lBQ0wsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZU4sTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViM2F1dGgvLi9wYWdlcy9zaWduaW4uanM/NzhmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb25uZWN0LCB1c2VTaWduTWVzc2FnZSwgdXNlRGlzY29ubmVjdCB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBNZXRhTWFza0Nvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL21ldGFNYXNrXCI7XG5pbXBvcnQgeyBDb2luYmFzZVdhbGxldENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL2NvaW5iYXNlV2FsbGV0XCI7XG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yIH0gZnJvbSBcIndhZ21pL2Nvbm5lY3RvcnMvd2FsbGV0Q29ubmVjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5cblxuZnVuY3Rpb24gU2lnbkluKCkge1xuICBjb25zdCB7IGNvbm5lY3RBc3luYyB9ID0gdXNlQ29ubmVjdCgpO1xuICBjb25zdCB7IGRpc2Nvbm5lY3RBc3luYyB9ID0gdXNlRGlzY29ubmVjdCgpO1xuICBjb25zdCB7IGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XG4gIGNvbnN0IHsgc2lnbk1lc3NhZ2VBc3luYyB9ID0gdXNlU2lnbk1lc3NhZ2UoKTtcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVBdXRoID0gYXN5bmMgKHdhbCkgPT4ge1xuICAgIGlmIChpc0Nvbm5lY3RlZCkge1xuICAgICAgYXdhaXQgZGlzY29ubmVjdEFzeW5jKCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0IFRvIFNpdGUgVmlhIFdhbGxldFwiKTtcblxuICAgIGNvbnN0IHVzZXJEYXRhID0geyBuZXR3b3JrOiBcImV2bVwiIH07XG5cbiAgICBpZiAod2FsID09PSBcIm1ldGFcIikge1xuICAgICAgY29uc3QgeyBhY2NvdW50LCBjaGFpbiB9ID0gYXdhaXQgY29ubmVjdEFzeW5jKHtcbiAgICAgICAgY29ubmVjdG9yOiBuZXcgTWV0YU1hc2tDb25uZWN0b3Ioe30pLFxuICAgICAgfSk7XG4gICAgICB1c2VyRGF0YS5hZGRyZXNzID0gYWNjb3VudDtcbiAgICAgIHVzZXJEYXRhLmNoYWluID0gY2hhaW4uaWQ7XG4gICAgfVxuXG4gICAgaWYgKHdhbCA9PT0gXCJjb2luXCIpIHtcbiAgICAgIGNvbnN0IHsgYWNjb3VudCwgY2hhaW4gfSA9IGF3YWl0IGNvbm5lY3RBc3luYyh7XG4gICAgICAgIGNvbm5lY3RvcjogbmV3IENvaW5iYXNlV2FsbGV0Q29ubmVjdG9yKHt9KSxcbiAgICAgIH0pO1xuICAgICAgdXNlckRhdGEuYWRkcmVzcyA9IGFjY291bnQ7XG4gICAgICB1c2VyRGF0YS5jaGFpbiA9IGNoYWluLmlkO1xuICAgIH1cblxuICAgIGlmICh3YWwgPT09IFwid2FsXCIpIHtcbiAgICAgIGNvbnN0IHsgYWNjb3VudCwgY2hhaW4gfSA9IGF3YWl0IGNvbm5lY3RBc3luYyh7XG4gICAgICAgIGNvbm5lY3RvcjogbmV3IFdhbGxldENvbm5lY3RDb25uZWN0b3IoeyBvcHRpb25zOiB7IHFyY29kZTogdHJ1ZSB9IH0pLFxuICAgICAgfSk7XG4gICAgICB1c2VyRGF0YS5hZGRyZXNzID0gYWNjb3VudDtcbiAgICAgIHVzZXJEYXRhLmNoYWluID0gY2hhaW4uaWQ7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJTZW5kaW5nIENvbm5lY3RlZCBBY2NvdW50IGFuZCBDaGFpbiBJRCB0byBNb3JhbGlzIEF1dGggQVBJXCIpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgIFxuXG5cbiAgICBjb25zb2xlLmxvZyh1c2VyRGF0YVsnYWRkcmVzcyddKVxuXG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+V2ViMyBBdXRoZW50aWNhdGlvbjwvaDM+XG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHA6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTEuMTEuMC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24tMzRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoKFwibWV0YVwiKX0+XG4gICAgICAgIEF1dGhlbnRpY2F0ZSB2aWEgTWV0YW1hc2tcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLTM1XCIgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aChcImNvaW5cIil9PlxuICAgICAgICBBdXRoZW50aWNhdGUgdmlhIENvaW5iYXNlXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxici8+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLTM2XCIgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aChcIndhbFwiKX0+XG4gICAgICAgIEF1dGhlbnRpY2F0ZSB2aWEgV2FsbGV0IENvbm5lY3RcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XG4iXSwibmFtZXMiOlsic2lnbkluIiwidXNlQWNjb3VudCIsInVzZUNvbm5lY3QiLCJ1c2VTaWduTWVzc2FnZSIsInVzZURpc2Nvbm5lY3QiLCJ1c2VSb3V0ZXIiLCJNZXRhTWFza0Nvbm5lY3RvciIsIkNvaW5iYXNlV2FsbGV0Q29ubmVjdG9yIiwiV2FsbGV0Q29ubmVjdENvbm5lY3RvciIsImF4aW9zIiwiU2lnbkluIiwiY29ubmVjdEFzeW5jIiwiZGlzY29ubmVjdEFzeW5jIiwiaXNDb25uZWN0ZWQiLCJzaWduTWVzc2FnZUFzeW5jIiwicHVzaCIsImhhbmRsZUF1dGgiLCJ3YWwiLCJjb25zb2xlIiwibG9nIiwidXNlckRhdGEiLCJuZXR3b3JrIiwiYWNjb3VudCIsImNoYWluIiwiY29ubmVjdG9yIiwiYWRkcmVzcyIsImlkIiwib3B0aW9ucyIsInFyY29kZSIsImRpdiIsImgzIiwic2NyaXB0Iiwic3JjIiwiYnV0dG9uIiwiY2xhc3MiLCJvbkNsaWNrIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

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