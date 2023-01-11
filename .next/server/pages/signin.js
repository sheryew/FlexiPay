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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/coinbaseWallet */ \"wagmi/connectors/coinbaseWallet\");\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleAuth = async (wal)=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        console.log(\"Connect To Site Via Wallet\");\n        const userData = {\n            network: \"evm\"\n        };\n        if (wal === \"meta\") {\n            const { account , chain  } = await connectAsync({\n                connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__.MetaMaskConnector({})\n            });\n            userData.address = account;\n            userData.chain = chain.id;\n        }\n        if (wal === \"coin\") {\n            const { account: account1 , chain: chain1  } = await connectAsync({\n                connector: new wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__.CoinbaseWalletConnector({})\n            });\n            userData.address = account1;\n            userData.chain = chain1.id;\n        }\n        if (wal === \"wal\") {\n            const { account: account2 , chain: chain2  } = await connectAsync({\n                connector: new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__.WalletConnectConnector({\n                    options: {\n                        qrcode: true\n                    }\n                })\n            });\n            userData.address = account2;\n            userData.chain = chain2.id;\n        }\n        console.log(\"Sending Connected Account and Chain ID to Moralis Auth API\");\n        console.log(userData);\n        console.log(userData[\"address\"]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(\"meta\"),\n                children: \"Authenticate via Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(\"coin\"),\n                children: \"Authenticate via Coinbase\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleAuth(\"wal\"),\n                children: \"Authenticate via Wallet Connect\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBCQUNMLDhEQUFDRixRQUFNO2dCQUFDQyxPQUFPLEVBQUUsSUFBTWhCLFVBQVUsQ0FBQyxLQUFLLENBQUM7MEJBQUUsaUNBRTFDOzs7OztvQkFBUzs7Ozs7O1lBQ0wsQ0FDTjtDQUNIO0FBRUQsaUVBQWVOLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjNhdXRoLy4vcGFnZXMvc2lnbmluLmpzPzc4ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb25uZWN0LCB1c2VTaWduTWVzc2FnZSwgdXNlRGlzY29ubmVjdCB9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWV0YU1hc2tDb25uZWN0b3IgfSBmcm9tIFwid2FnbWkvY29ubmVjdG9ycy9tZXRhTWFza1wiO1xyXG5pbXBvcnQgeyBDb2luYmFzZVdhbGxldENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL2NvaW5iYXNlV2FsbGV0XCI7XHJcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tIFwid2FnbWkvY29ubmVjdG9ycy93YWxsZXRDb25uZWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICBjb25zdCB7IGNvbm5lY3RBc3luYyB9ID0gdXNlQ29ubmVjdCgpO1xyXG4gIGNvbnN0IHsgZGlzY29ubmVjdEFzeW5jIH0gPSB1c2VEaXNjb25uZWN0KCk7XHJcbiAgY29uc3QgeyBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xyXG4gIGNvbnN0IHsgc2lnbk1lc3NhZ2VBc3luYyB9ID0gdXNlU2lnbk1lc3NhZ2UoKTtcclxuICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBdXRoID0gYXN5bmMgKHdhbCkgPT4ge1xyXG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XHJcbiAgICAgIGF3YWl0IGRpc2Nvbm5lY3RBc3luYygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdCBUbyBTaXRlIFZpYSBXYWxsZXRcIik7XHJcblxyXG4gICAgY29uc3QgdXNlckRhdGEgPSB7IG5ldHdvcms6IFwiZXZtXCIgfTtcclxuXHJcbiAgICBpZiAod2FsID09PSBcIm1ldGFcIikge1xyXG4gICAgICBjb25zdCB7IGFjY291bnQsIGNoYWluIH0gPSBhd2FpdCBjb25uZWN0QXN5bmMoe1xyXG4gICAgICAgIGNvbm5lY3RvcjogbmV3IE1ldGFNYXNrQ29ubmVjdG9yKHt9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIHVzZXJEYXRhLmFkZHJlc3MgPSBhY2NvdW50O1xyXG4gICAgICB1c2VyRGF0YS5jaGFpbiA9IGNoYWluLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3YWwgPT09IFwiY29pblwiKSB7XHJcbiAgICAgIGNvbnN0IHsgYWNjb3VudCwgY2hhaW4gfSA9IGF3YWl0IGNvbm5lY3RBc3luYyh7XHJcbiAgICAgICAgY29ubmVjdG9yOiBuZXcgQ29pbmJhc2VXYWxsZXRDb25uZWN0b3Ioe30pLFxyXG4gICAgICB9KTtcclxuICAgICAgdXNlckRhdGEuYWRkcmVzcyA9IGFjY291bnQ7XHJcbiAgICAgIHVzZXJEYXRhLmNoYWluID0gY2hhaW4uaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdhbCA9PT0gXCJ3YWxcIikge1xyXG4gICAgICBjb25zdCB7IGFjY291bnQsIGNoYWluIH0gPSBhd2FpdCBjb25uZWN0QXN5bmMoe1xyXG4gICAgICAgIGNvbm5lY3RvcjogbmV3IFdhbGxldENvbm5lY3RDb25uZWN0b3IoeyBvcHRpb25zOiB7IHFyY29kZTogdHJ1ZSB9IH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgdXNlckRhdGEuYWRkcmVzcyA9IGFjY291bnQ7XHJcbiAgICAgIHVzZXJEYXRhLmNoYWluID0gY2hhaW4uaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJTZW5kaW5nIENvbm5lY3RlZCBBY2NvdW50IGFuZCBDaGFpbiBJRCB0byBNb3JhbGlzIEF1dGggQVBJXCIpO1xyXG4gICAgY29uc29sZS5sb2codXNlckRhdGEpXHJcbiAgICBcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2codXNlckRhdGFbJ2FkZHJlc3MnXSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPldlYjMgQXV0aGVudGljYXRpb248L2gzPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGgoXCJtZXRhXCIpfT5cclxuICAgICAgICBBdXRoZW50aWNhdGUgdmlhIE1ldGFtYXNrXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoKFwiY29pblwiKX0+XHJcbiAgICAgICAgQXV0aGVudGljYXRlIHZpYSBDb2luYmFzZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBdXRoKFwid2FsXCIpfT5cclxuICAgICAgICBBdXRoZW50aWNhdGUgdmlhIFdhbGxldCBDb25uZWN0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xyXG4iXSwibmFtZXMiOlsic2lnbkluIiwidXNlQWNjb3VudCIsInVzZUNvbm5lY3QiLCJ1c2VTaWduTWVzc2FnZSIsInVzZURpc2Nvbm5lY3QiLCJ1c2VSb3V0ZXIiLCJNZXRhTWFza0Nvbm5lY3RvciIsIkNvaW5iYXNlV2FsbGV0Q29ubmVjdG9yIiwiV2FsbGV0Q29ubmVjdENvbm5lY3RvciIsImF4aW9zIiwiU2lnbkluIiwiY29ubmVjdEFzeW5jIiwiZGlzY29ubmVjdEFzeW5jIiwiaXNDb25uZWN0ZWQiLCJzaWduTWVzc2FnZUFzeW5jIiwicHVzaCIsImhhbmRsZUF1dGgiLCJ3YWwiLCJjb25zb2xlIiwibG9nIiwidXNlckRhdGEiLCJuZXR3b3JrIiwiYWNjb3VudCIsImNoYWluIiwiY29ubmVjdG9yIiwiYWRkcmVzcyIsImlkIiwib3B0aW9ucyIsInFyY29kZSIsImRpdiIsImgzIiwiYnV0dG9uIiwib25DbGljayIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

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