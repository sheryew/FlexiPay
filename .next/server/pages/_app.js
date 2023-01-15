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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_buttons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/buttons.css */ \"./styles/buttons.css\");\n/* harmony import */ var _styles_buttons_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_buttons_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nconst { provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.configureChains)(wagmi__WEBPACK_IMPORTED_MODULE_1__.defaultChains, [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_2__.publicProvider)()\n]);\nconst client = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    provider,\n    webSocketProvider,\n    autoConnect: true\n});\nfunction MyApp({ Component , pageProps  }) {\n    const theme = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.createTheme)({\n        type: \"dark\",\n        theme: {\n            colors: {\n                // brand colors\n                primaryLight: \"$green200\",\n                primaryLightHover: \"$green300\",\n                primaryLightActive: \"$green400\",\n                primaryLightContrast: \"$green600\",\n                primary: \"#4ADE7B\",\n                primaryBorder: \"$green500\",\n                primaryBorderHover: \"$green600\",\n                primarySolidHover: \"$green700\",\n                primarySolidContrast: \"$white\",\n                primaryShadow: \"$green500\",\n                gradient: \"linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)\",\n                link: \"#5E1DAD\",\n                // you can also create your own color\n                myColor: \"#ff4ecd\"\n            },\n            space: {},\n            fonts: {}\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.NextUIProvider, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_1__.WagmiConfig, {\n            client: client,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n                session: pageProps.session,\n                refetchInterval: 0,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\_app.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\_app.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\_app.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lai_p\\\\Documents\\\\GitHub\\\\FlexiPay\\\\pages\\\\_app.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtGO0FBQzFCO0FBQ047QUFDYztBQUVsQztBQUNBO0FBQ0k7QUFFbEMsTUFBTSxFQUFFUSxRQUFRLEdBQUVDLGlCQUFpQixHQUFFLEdBQUdSLHNEQUFlLENBQUNDLGdEQUFhLEVBQUU7SUFBQ0Usc0VBQWMsRUFBRTtDQUFDLENBQUM7QUFFMUYsTUFBTU0sTUFBTSxHQUFHVixtREFBWSxDQUFDO0lBQzFCUSxRQUFRO0lBQ1JDLGlCQUFpQjtJQUNqQkUsV0FBVyxFQUFFLElBQUk7Q0FDbEIsQ0FBQztBQUVGLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLE1BQU1DLEtBQUssR0FBR1IsOERBQVcsQ0FBQztRQUN4QlMsSUFBSSxFQUFFLE1BQU07UUFDWkQsS0FBSyxFQUFFO1lBQ0xFLE1BQU0sRUFBRTtnQkFDTixlQUFlO2dCQUNmQyxZQUFZLEVBQUUsV0FBVztnQkFDekJDLGlCQUFpQixFQUFFLFdBQVc7Z0JBQzlCQyxrQkFBa0IsRUFBRSxXQUFXO2dCQUMvQkMsb0JBQW9CLEVBQUUsV0FBVztnQkFDakNDLE9BQU8sRUFBRSxTQUFTO2dCQUNsQkMsYUFBYSxFQUFFLFdBQVc7Z0JBQzFCQyxrQkFBa0IsRUFBRSxXQUFXO2dCQUMvQkMsaUJBQWlCLEVBQUUsV0FBVztnQkFDOUJDLG9CQUFvQixFQUFFLFFBQVE7Z0JBQzlCQyxhQUFhLEVBQUUsV0FBVztnQkFFMUJDLFFBQVEsRUFBRSx1RUFBdUU7Z0JBQ2pGQyxJQUFJLEVBQUUsU0FBUztnQkFFZixxQ0FBcUM7Z0JBQ3JDQyxPQUFPLEVBQUUsU0FBUzthQUduQjtZQUNEQyxLQUFLLEVBQUUsRUFBRTtZQUNUQyxLQUFLLEVBQUUsRUFBRTtTQUNWO0tBQ0YsQ0FBQztJQUNGLHFCQUNFLDhEQUFDMUIsNkRBQWM7UUFBQ1MsS0FBSyxFQUFFQSxLQUFLO2tCQUMxQiw0RUFBQ1osOENBQVc7WUFBQ08sTUFBTSxFQUFFQSxNQUFNO3NCQUN6Qiw0RUFBQ0wsNERBQWU7Z0JBQUM0QixPQUFPLEVBQUVuQixTQUFTLENBQUNtQixPQUFPO2dCQUFFQyxlQUFlLEVBQUUsQ0FBQzswQkFDN0QsNEVBQUNyQixTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJOzs7OztvQkFDWjs7Ozs7Z0JBQ047Ozs7O1lBQ0MsQ0FDakI7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIzYXV0aC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQsIGNvbmZpZ3VyZUNoYWlucywgZGVmYXVsdENoYWlucywgV2FnbWlDb25maWcgfSBmcm9tICd3YWdtaSc7XHJcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL3B1YmxpYyc7XHJcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCB7IE5leHRVSVByb3ZpZGVyLCBjcmVhdGVUaGVtZSB9IGZyb20gJ0BuZXh0dWktb3JnL3JlYWN0JztcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL2J1dHRvbnMuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgeyBwcm92aWRlciwgd2ViU29ja2V0UHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhkZWZhdWx0Q2hhaW5zLCBbcHVibGljUHJvdmlkZXIoKV0pO1xyXG5cclxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcclxuICBwcm92aWRlcixcclxuICB3ZWJTb2NrZXRQcm92aWRlcixcclxuICBhdXRvQ29ubmVjdDogdHJ1ZSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICAgIHR5cGU6IFwiZGFya1wiLCAvLyBpdCBjb3VsZCBiZSBcImxpZ2h0XCIgb3IgXCJkYXJrXCJcclxuICAgIHRoZW1lOiB7XHJcbiAgICAgIGNvbG9yczoge1xyXG4gICAgICAgIC8vIGJyYW5kIGNvbG9yc1xyXG4gICAgICAgIHByaW1hcnlMaWdodDogJyRncmVlbjIwMCcsXHJcbiAgICAgICAgcHJpbWFyeUxpZ2h0SG92ZXI6ICckZ3JlZW4zMDAnLFxyXG4gICAgICAgIHByaW1hcnlMaWdodEFjdGl2ZTogJyRncmVlbjQwMCcsXHJcbiAgICAgICAgcHJpbWFyeUxpZ2h0Q29udHJhc3Q6ICckZ3JlZW42MDAnLFxyXG4gICAgICAgIHByaW1hcnk6ICcjNEFERTdCJyxcclxuICAgICAgICBwcmltYXJ5Qm9yZGVyOiAnJGdyZWVuNTAwJyxcclxuICAgICAgICBwcmltYXJ5Qm9yZGVySG92ZXI6ICckZ3JlZW42MDAnLFxyXG4gICAgICAgIHByaW1hcnlTb2xpZEhvdmVyOiAnJGdyZWVuNzAwJyxcclxuICAgICAgICBwcmltYXJ5U29saWRDb250cmFzdDogJyR3aGl0ZScsXHJcbiAgICAgICAgcHJpbWFyeVNoYWRvdzogJyRncmVlbjUwMCcsXHJcbiAgXHJcbiAgICAgICAgZ3JhZGllbnQ6ICdsaW5lYXItZ3JhZGllbnQoMTEyZGVnLCAkYmx1ZTEwMCAtMjUlLCAkcGluazUwMCAtMTAlLCAkcHVycGxlNTAwIDgwJSknLFxyXG4gICAgICAgIGxpbms6ICcjNUUxREFEJyxcclxuICBcclxuICAgICAgICAvLyB5b3UgY2FuIGFsc28gY3JlYXRlIHlvdXIgb3duIGNvbG9yXHJcbiAgICAgICAgbXlDb2xvcjogJyNmZjRlY2QnXHJcbiAgXHJcbiAgICAgICAgLy8gLi4uICBtb3JlIGNvbG9yc1xyXG4gICAgICB9LFxyXG4gICAgICBzcGFjZToge30sXHJcbiAgICAgIGZvbnRzOiB7fVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0VUlQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8V2FnbWlDb25maWcgY2xpZW50PXtjbGllbnR9PlxyXG4gICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259IHJlZmV0Y2hJbnRlcnZhbD17MH0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XHJcbiAgICAgIDwvV2FnbWlDb25maWc+XHJcbiAgICA8L05leHRVSVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJjb25maWd1cmVDaGFpbnMiLCJkZWZhdWx0Q2hhaW5zIiwiV2FnbWlDb25maWciLCJwdWJsaWNQcm92aWRlciIsIlNlc3Npb25Qcm92aWRlciIsIk5leHRVSVByb3ZpZGVyIiwiY3JlYXRlVGhlbWUiLCJwcm92aWRlciIsIndlYlNvY2tldFByb3ZpZGVyIiwiY2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwidHlwZSIsImNvbG9ycyIsInByaW1hcnlMaWdodCIsInByaW1hcnlMaWdodEhvdmVyIiwicHJpbWFyeUxpZ2h0QWN0aXZlIiwicHJpbWFyeUxpZ2h0Q29udHJhc3QiLCJwcmltYXJ5IiwicHJpbWFyeUJvcmRlciIsInByaW1hcnlCb3JkZXJIb3ZlciIsInByaW1hcnlTb2xpZEhvdmVyIiwicHJpbWFyeVNvbGlkQ29udHJhc3QiLCJwcmltYXJ5U2hhZG93IiwiZ3JhZGllbnQiLCJsaW5rIiwibXlDb2xvciIsInNwYWNlIiwiZm9udHMiLCJzZXNzaW9uIiwicmVmZXRjaEludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/buttons.css":
/*!****************************!*\
  !*** ./styles/buttons.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@nextui-org/react":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nextui-org/react");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();