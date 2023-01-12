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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/connectors/coinbaseWallet */ \"wagmi/connectors/coinbaseWallet\");\n/* harmony import */ var wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/walletConnect */ \"wagmi/connectors/walletConnect\");\n/* harmony import */ var wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/server */ \"next/server\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_server__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSignMessage)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleAuth = async (wal)=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        console.log(\"Connect To Site Via Wallet\");\n        const userData = {\n            network: \"evm\"\n        };\n        if (wal === \"meta\") {\n            const { account , chain  } = await connectAsync({\n                connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_4__.MetaMaskConnector({})\n            });\n            userData.address = account;\n            userData.chain = chain.id;\n        }\n        if (wal === \"coin\") {\n            const { account: account1 , chain: chain1  } = await connectAsync({\n                connector: new wagmi_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_5__.CoinbaseWalletConnector({})\n            });\n            userData.address = account1;\n            userData.chain = chain1.id;\n        }\n        if (wal === \"wal\") {\n            const { account: account2 , chain: chain2  } = await connectAsync({\n                connector: new wagmi_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_6__.WalletConnectConnector({\n                    options: {\n                        qrcode: true\n                    }\n                })\n            });\n            userData.address = account2;\n            userData.chain = chain2.id;\n        }\n        console.log(\"Sending Connected Account and Chain ID to Moralis Auth API\");\n        console.log(userData);\n        const userWallet = userData[\"address\"];\n        function sendProps() {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push({\n                pathname: \"/\",\n                query: {\n                    userWallet: userWallet\n                }\n            });\n        }\n        sendProps();\n        push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                src: \"http://code.jquery.com/jquery-1.11.0.min.js\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"button-34\",\n                onClick: ()=>handleAuth(\"meta\"),\n                children: \"Authenticate via Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"button-35\",\n                onClick: ()=>handleAuth(\"coin\"),\n                children: \"Authenticate via Coinbase\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"button-36\",\n                onClick: ()=>handleAuth(\"wal\"),\n                children: \"Authenticate via Wallet Connect\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\signin.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZDOzs7OztvQkFBVTswQkFDbkUsOERBQUNDLFFBQU07Z0JBQUNDLEtBQUssRUFBQyxXQUFXO2dCQUFDQyxPQUFPLEVBQUUsSUFBTXZCLFVBQVUsQ0FBQyxNQUFNLENBQUM7MEJBQUUsMkJBRTdEOzs7OztvQkFBUzswQkFDVCw4REFBQ3dCLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNILFFBQU07Z0JBQUNDLEtBQUssRUFBQyxXQUFXO2dCQUFDQyxPQUFPLEVBQUUsSUFBTXZCLFVBQVUsQ0FBQyxNQUFNLENBQUM7MEJBQUUsMkJBRTdEOzs7OztvQkFBUzswQkFDVCw4REFBQ3dCLElBQUU7Ozs7b0JBQUU7MEJBQ0wsOERBQUNILFFBQU07Z0JBQUNDLEtBQUssRUFBQyxXQUFXO2dCQUFDQyxPQUFPLEVBQUUsSUFBTXZCLFVBQVUsQ0FBQyxLQUFLLENBQUM7MEJBQUUsaUNBRTVEOzs7OztvQkFBUzs7Ozs7O1lBQ0wsQ0FDTjtDQUNIO0FBRUQsaUVBQWVOLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjNhdXRoLy4vcGFnZXMvc2lnbmluLmpzPzc4ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb25uZWN0LCB1c2VTaWduTWVzc2FnZSwgdXNlRGlzY29ubmVjdCB9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTWV0YU1hc2tDb25uZWN0b3IgfSBmcm9tIFwid2FnbWkvY29ubmVjdG9ycy9tZXRhTWFza1wiO1xyXG5pbXBvcnQgeyBDb2luYmFzZVdhbGxldENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL2NvaW5iYXNlV2FsbGV0XCI7XHJcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tIFwid2FnbWkvY29ubmVjdG9ycy93YWxsZXRDb25uZWN0XCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSwgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gU2lnbkluKCkge1xyXG4gIGNvbnN0IHsgY29ubmVjdEFzeW5jIH0gPSB1c2VDb25uZWN0KCk7XHJcbiAgY29uc3QgeyBkaXNjb25uZWN0QXN5bmMgfSA9IHVzZURpc2Nvbm5lY3QoKTtcclxuICBjb25zdCB7IGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XHJcbiAgY29uc3QgeyBzaWduTWVzc2FnZUFzeW5jIH0gPSB1c2VTaWduTWVzc2FnZSgpO1xyXG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUF1dGggPSBhc3luYyAod2FsKSA9PiB7XHJcbiAgICBpZiAoaXNDb25uZWN0ZWQpIHtcclxuICAgICAgYXdhaXQgZGlzY29ubmVjdEFzeW5jKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0IFRvIFNpdGUgVmlhIFdhbGxldFwiKTtcclxuXHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHsgbmV0d29yazogXCJldm1cIiB9O1xyXG5cclxuICAgIGlmICh3YWwgPT09IFwibWV0YVwiKSB7XHJcbiAgICAgIGNvbnN0IHsgYWNjb3VudCwgY2hhaW4gfSA9IGF3YWl0IGNvbm5lY3RBc3luYyh7XHJcbiAgICAgICAgY29ubmVjdG9yOiBuZXcgTWV0YU1hc2tDb25uZWN0b3Ioe30pLFxyXG4gICAgICB9KTtcclxuICAgICAgdXNlckRhdGEuYWRkcmVzcyA9IGFjY291bnQ7XHJcbiAgICAgIHVzZXJEYXRhLmNoYWluID0gY2hhaW4uaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdhbCA9PT0gXCJjb2luXCIpIHtcclxuICAgICAgY29uc3QgeyBhY2NvdW50LCBjaGFpbiB9ID0gYXdhaXQgY29ubmVjdEFzeW5jKHtcclxuICAgICAgICBjb25uZWN0b3I6IG5ldyBDb2luYmFzZVdhbGxldENvbm5lY3Rvcih7fSksXHJcbiAgICAgIH0pO1xyXG4gICAgICB1c2VyRGF0YS5hZGRyZXNzID0gYWNjb3VudDtcclxuICAgICAgdXNlckRhdGEuY2hhaW4gPSBjaGFpbi5pZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2FsID09PSBcIndhbFwiKSB7XHJcbiAgICAgIGNvbnN0IHsgYWNjb3VudCwgY2hhaW4gfSA9IGF3YWl0IGNvbm5lY3RBc3luYyh7XHJcbiAgICAgICAgY29ubmVjdG9yOiBuZXcgV2FsbGV0Q29ubmVjdENvbm5lY3Rvcih7IG9wdGlvbnM6IHsgcXJjb2RlOiB0cnVlIH0gfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICB1c2VyRGF0YS5hZGRyZXNzID0gYWNjb3VudDtcclxuICAgICAgdXNlckRhdGEuY2hhaW4gPSBjaGFpbi5pZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgQ29ubmVjdGVkIEFjY291bnQgYW5kIENoYWluIElEIHRvIE1vcmFsaXMgQXV0aCBBUElcIik7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcclxuICAgIGNvbnN0IHVzZXJXYWxsZXQgPSB1c2VyRGF0YVsnYWRkcmVzcyddXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNlbmRQcm9wcygpIHtcclxuICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgdXNlcldhbGxldDogdXNlcldhbGxldFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzZW5kUHJvcHMoKTtcclxuICAgIHB1c2goJy8nKVxyXG5cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgzPldlYjMgQXV0aGVudGljYXRpb248L2gzPlxyXG4gICAgICA8c2NyaXB0IHNyYz1cImh0dHA6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTEuMTEuMC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi0zNFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGgoXCJtZXRhXCIpfT5cclxuICAgICAgICBBdXRoZW50aWNhdGUgdmlhIE1ldGFtYXNrXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbi0zNVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGgoXCJjb2luXCIpfT5cclxuICAgICAgICBBdXRoZW50aWNhdGUgdmlhIENvaW5iYXNlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnIvPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uLTM2XCIgb25DbGljaz17KCkgPT4gaGFuZGxlQXV0aChcIndhbFwiKX0+XHJcbiAgICAgICAgQXV0aGVudGljYXRlIHZpYSBXYWxsZXQgQ29ubmVjdFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcclxuIl0sIm5hbWVzIjpbInNpZ25JbiIsInVzZUFjY291bnQiLCJ1c2VDb25uZWN0IiwidXNlU2lnbk1lc3NhZ2UiLCJ1c2VEaXNjb25uZWN0IiwidXNlUm91dGVyIiwiTWV0YU1hc2tDb25uZWN0b3IiLCJDb2luYmFzZVdhbGxldENvbm5lY3RvciIsIldhbGxldENvbm5lY3RDb25uZWN0b3IiLCJOZXh0UmVzcG9uc2UiLCJOZXh0UmVxdWVzdCIsInVzZUVmZmVjdCIsImF4aW9zIiwiUm91dGVyIiwiU2lnbkluIiwiY29ubmVjdEFzeW5jIiwiZGlzY29ubmVjdEFzeW5jIiwiaXNDb25uZWN0ZWQiLCJzaWduTWVzc2FnZUFzeW5jIiwicHVzaCIsImhhbmRsZUF1dGgiLCJ3YWwiLCJjb25zb2xlIiwibG9nIiwidXNlckRhdGEiLCJuZXR3b3JrIiwiYWNjb3VudCIsImNoYWluIiwiY29ubmVjdG9yIiwiYWRkcmVzcyIsImlkIiwib3B0aW9ucyIsInFyY29kZSIsInVzZXJXYWxsZXQiLCJzZW5kUHJvcHMiLCJwYXRobmFtZSIsInF1ZXJ5IiwiZGl2IiwiaDMiLCJzY3JpcHQiLCJzcmMiLCJidXR0b24iLCJjbGFzcyIsIm9uQ2xpY2siLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

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

/***/ "next/server":
/*!******************************!*\
  !*** external "next/server" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/server");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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