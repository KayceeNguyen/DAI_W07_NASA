"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _comps_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/comps/header */ \"./comps/header.js\");\n/* harmony import */ var _comps_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/comps/carousel */ \"./comps/carousel.js\");\n/* harmony import */ var _comps_galaxy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/comps/galaxy */ \"./comps/galaxy.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const apiKey = \"qO706hvtrjKPLwTwuCZ9XYxHnUPvhtQHSM6Ncmu8\";\n    const url = \"https://api.nasa.gov/techtransfer/patent/?q=10&engine&api_key=\".concat(apiKey);\n    const getTechTransferData = async ()=>{\n        const res = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(url);\n        const info = await res.data;\n        console.log(info);\n        setData(info);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getTechTransferData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"NASA TechPort & EPIC API\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"The website showcases NASA's technologies using the TechPort and PIC API and offers daily full disc imagery of the Earth and unique astronomical events. Users can discover the technologies NASA is developing in propulsion, nanotechnology, robotics, and human health while enjoying stunning images of the universe.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/galaxy.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_galaxy__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Techport\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().bigCont),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().centeredPara),\n                                children: [\n                                    \"Welcome to TechPort - NASA's resource for collecting and sharing information about NASA-funded technology development. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 67\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 76\n                                    }, this),\n                                    \" Techport allows the public to discover the technologies NASA is working on every day to explore space, understand the universe, and improve aeronautics. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 81\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 90\n                                    }, this),\n                                    \"NASA is developing technologies in areas such as propulsion, nanotechnology, robotics, and human health. NASA is committed to making its data available and machine-readable through an Application Programming Interface (API) to better serve its user communities. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 79\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 88\n                                    }, this),\n                                    \" As such, the NASA TechPort system provides a RESTful web services API to make technology project data available in a machine-readable format. This API can be used to export TechPort data into either an XML or a JSON format, which can then be further processed and analyzed. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 76\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 85\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Complete documentation (in Swagger 2.0 format) of the available objects, properties, RESTful URIs is available in the online API specification at:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 24\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Techport API Demo Key: https://api.nasa.gov/techport/api/specification?api_key=DEMO_KEY.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 24\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        children: \"The below photos are using data from one of the example querries:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 24\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Techport API Project: https://api.nasa.gov/techport/api/projects/17792?api_key=DEMO_KEY\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_carousel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nguyennhu/Library/Mobile Documents/com~apple~CloudDocs/1. MACBOOK/DIGITAL DESIGN/TERM 4/DAI/WEEK07/GITHUB-NASA/DAI_W07_NASA/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"WZ2PO9A64oHRexE1CE+yX3ebuoA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0U7QUFFZTtBQUNaO0FBQ0Q7QUFDUDtBQUNHO0FBQ1U7QUFDQztBQUNKO0FBRXBCLFNBQVNVLE9BQU87O0lBRTNCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUE7SUFFaEMsTUFBTVMsU0FBUztJQUNmLE1BQU1DLE1BQU0saUVBQXdFLE9BQVBEO0lBRTdFLE1BQU1FLHNCQUFzQixVQUFZO1FBQ3RDLE1BQU1DLE1BQU0sTUFBTVgsaURBQVMsQ0FBQ1M7UUFDNUIsTUFBTUksT0FBTyxNQUFNRixJQUFJTCxJQUFJO1FBQzNCUSxRQUFRQyxHQUFHLENBQUNGO1FBQ1pOLFFBQVFNO0lBQ1Y7SUFFQWYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkWTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ2Ysa0RBQUlBOztrQ0FDSCw4REFBQ3FCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNwQixxREFBU0E7Ozs7OzBCQUVWLDhEQUFDRSxxREFBTUE7Ozs7OzBCQUVQLDhEQUFDbUI7Z0JBQUtDLFdBQVczQixxRUFBVzs7a0NBQzFCLDhEQUFDNEI7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQUlGLFdBQVczQix3RUFBYzs7MENBQzVCLDhEQUFDK0I7Z0NBQUVKLFdBQVczQiw2RUFBbUI7O29DQUFFO2tEQUVtQiw4REFBQ2lDOzs7OztrREFBUSw4REFBQ0E7Ozs7O29DQUFRO2tEQUVKLDhEQUFDQTs7Ozs7a0RBQVEsOERBQUNBOzs7OztvQ0FBUTtrREFJcEIsOERBQUNBOzs7OztrREFBUSw4REFBQ0E7Ozs7O29DQUFRO2tEQUlyQiw4REFBQ0E7Ozs7O2tEQUFRLDhEQUFDQTs7Ozs7Ozs7Ozs7MENBR3pFLDhEQUFDSjs7a0RBQ0MsOERBQUNFO2tEQUFFOzs7Ozs7a0RBSUgsOERBQUNFOzs7OztrREFBUSw4REFBQ0E7Ozs7O2tEQUNWLDhEQUFDRjtrREFBRTs7Ozs7O2tEQUNILDhEQUFDRTs7Ozs7a0RBQVEsOERBQUNBOzs7OztrREFDViw4REFBQ0M7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0Q7Ozs7O2tEQUFRLDhEQUFDQTs7Ozs7a0RBQ1YsOERBQUNGO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBU1AsOERBQUN6Qix1REFBUUE7Ozs7Ozs7Ozs7Ozs7QUFLakIsQ0FBQztHQXhFcUJFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gJ0BuZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZGVyQmFyIGZyb20gJ0AvY29tcHMvaGVhZGVyJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ0AvY29tcHMvY2Fyb3VzZWwnXG5pbXBvcnQgR2FsYXh5IGZyb20gJ0AvY29tcHMvZ2FsYXh5J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcbiAgXG4gICAgY29uc3QgYXBpS2V5ID0gXCJxTzcwNmh2dHJqS1BMd1R3dUNaOVhZeEhuVVB2aHRRSFNNNk5jbXU4XCI7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm5hc2EuZ292L3RlY2h0cmFuc2Zlci9wYXRlbnQvP3E9MTAmZW5naW5lJmFwaV9rZXk9JHthcGlLZXl9YFxuICBcbiAgICBjb25zdCBnZXRUZWNoVHJhbnNmZXJEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgICBjb25zdCBpbmZvID0gYXdhaXQgcmVzLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhpbmZvKVxuICAgICAgc2V0RGF0YShpbmZvKVxuICAgIH1cbiAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGdldFRlY2hUcmFuc2ZlckRhdGEoKTtcbiAgICB9LCBbXSlcbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5OQVNBIFRlY2hQb3J0ICYgRVBJQyBBUEk8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGUgd2Vic2l0ZSBzaG93Y2FzZXMgTkFTQSdzIHRlY2hub2xvZ2llcyB1c2luZyB0aGUgVGVjaFBvcnQgYW5kIFBJQyBBUEkgYW5kIG9mZmVycyBkYWlseSBmdWxsIGRpc2MgaW1hZ2VyeSBvZiB0aGUgRWFydGggYW5kIHVuaXF1ZSBhc3Ryb25vbWljYWwgZXZlbnRzLiBVc2VycyBjYW4gZGlzY292ZXIgdGhlIHRlY2hub2xvZ2llcyBOQVNBIGlzIGRldmVsb3BpbmcgaW4gcHJvcHVsc2lvbiwgbmFub3RlY2hub2xvZ3ksIHJvYm90aWNzLCBhbmQgaHVtYW4gaGVhbHRoIHdoaWxlIGVuam95aW5nIHN0dW5uaW5nIGltYWdlcyBvZiB0aGUgdW5pdmVyc2UuXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2dhbGF4eS5wbmdcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxIZWFkZXJCYXIgLz5cblxuICAgICAgICA8R2FsYXh5IC8+XG5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgPGgxPlRlY2hwb3J0PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJpZ0NvbnR9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyZWRQYXJhfT5cbiAgICAgICAgICAgIFdlbGNvbWUgdG8gVGVjaFBvcnQgLSBOQVNBJ3MgcmVzb3VyY2UgZm9yIGNvbGxlY3RpbmcgYW5kIHNoYXJpbmcgXG4gICAgICAgICAgICBpbmZvcm1hdGlvbiBhYm91dCBOQVNBLWZ1bmRlZCB0ZWNobm9sb2d5IGRldmVsb3BtZW50LiA8YnI+PC9icj48YnI+PC9icj4gVGVjaHBvcnQgYWxsb3dzIFxuICAgICAgICAgICAgdGhlIHB1YmxpYyB0byBkaXNjb3ZlciB0aGUgdGVjaG5vbG9naWVzIE5BU0EgaXMgd29ya2luZyBvbiBldmVyeSBkYXkgXG4gICAgICAgICAgICB0byBleHBsb3JlIHNwYWNlLCB1bmRlcnN0YW5kIHRoZSB1bml2ZXJzZSwgYW5kIGltcHJvdmUgYWVyb25hdXRpY3MuIDxicj48L2JyPjxicj48L2JyPiBcbiAgICAgICAgICAgIE5BU0EgaXMgZGV2ZWxvcGluZyB0ZWNobm9sb2dpZXMgaW4gYXJlYXMgc3VjaCBhcyBwcm9wdWxzaW9uLCBcbiAgICAgICAgICAgIG5hbm90ZWNobm9sb2d5LCByb2JvdGljcywgYW5kIGh1bWFuIGhlYWx0aC4gTkFTQSBpcyBjb21taXR0ZWQgdG8gXG4gICAgICAgICAgICBtYWtpbmcgaXRzIGRhdGEgYXZhaWxhYmxlIGFuZCBtYWNoaW5lLXJlYWRhYmxlIHRocm91Z2ggYW4gQXBwbGljYXRpb24gXG4gICAgICAgICAgICBQcm9ncmFtbWluZyBJbnRlcmZhY2UgKEFQSSkgdG8gYmV0dGVyIHNlcnZlIGl0cyB1c2VyIGNvbW11bml0aWVzLiA8YnI+PC9icj48YnI+PC9icj4gQXMgXG4gICAgICAgICAgICBzdWNoLCB0aGUgTkFTQSBUZWNoUG9ydCBzeXN0ZW0gcHJvdmlkZXMgYSBSRVNUZnVsIHdlYiBzZXJ2aWNlcyBBUEkgdG8gXG4gICAgICAgICAgICBtYWtlIHRlY2hub2xvZ3kgcHJvamVjdCBkYXRhIGF2YWlsYWJsZSBpbiBhIG1hY2hpbmUtcmVhZGFibGUgZm9ybWF0LiBcbiAgICAgICAgICAgIFRoaXMgQVBJIGNhbiBiZSB1c2VkIHRvIGV4cG9ydCBUZWNoUG9ydCBkYXRhIGludG8gZWl0aGVyIGFuIFhNTCBvciBhIFxuICAgICAgICAgICAgSlNPTiBmb3JtYXQsIHdoaWNoIGNhbiB0aGVuIGJlIGZ1cnRoZXIgcHJvY2Vzc2VkIGFuZCBhbmFseXplZC4gPGJyPjwvYnI+PGJyPjwvYnI+XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwPkNvbXBsZXRlIFxuICAgICAgICAgICAgICAgIGRvY3VtZW50YXRpb24gKGluIFN3YWdnZXIgMi4wIGZvcm1hdCkgb2YgdGhlIGF2YWlsYWJsZSBvYmplY3RzLCBcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLCBSRVNUZnVsIFVSSXMgaXMgYXZhaWxhYmxlIGluIHRoZSBvbmxpbmUgQVBJIHNwZWNpZmljYXRpb24gYXQ6XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+PGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxwPlRlY2hwb3J0IEFQSSBEZW1vIEtleTogaHR0cHM6Ly9hcGkubmFzYS5nb3YvdGVjaHBvcnQvYXBpL3NwZWNpZmljYXRpb24/YXBpX2tleT1ERU1PX0tFWS48L3A+XG4gICAgICAgICAgICAgIDxicj48L2JyPjxicj48L2JyPlxuICAgICAgICAgICAgICA8aDQ+VGhlIGJlbG93IHBob3RvcyBhcmUgdXNpbmcgZGF0YSBmcm9tIG9uZSBvZiB0aGUgZXhhbXBsZSBxdWVycmllczo8L2g0PlxuICAgICAgICAgICAgICA8YnI+PC9icj48YnI+PC9icj5cbiAgICAgICAgICAgICAgPHA+VGVjaHBvcnQgQVBJIFByb2plY3Q6IGh0dHBzOi8vYXBpLm5hc2EuZ292L3RlY2hwb3J0L2FwaS9wcm9qZWN0cy8xNzc5Mj9hcGlfa2V5PURFTU9fS0VZPC9wPlxuXG5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxMaW5rIGhyZWY9Jy9wb2x5Y2hyb21hdGljJz5Qb2x5Y2hyb21hdGljPC9MaW5rPiAqL31cbiAgICAgICAgICA8Q2Fyb3VzZWwgLz5cbiAgICAgICAgPC9tYWluPlxuXG4gICAgICA8Lz5cbiAgICApXG4gIH1cbiAgIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMaW5rIiwiSGVhZGVyQmFyIiwiQ2Fyb3VzZWwiLCJHYWxheHkiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJhcGlLZXkiLCJ1cmwiLCJnZXRUZWNoVHJhbnNmZXJEYXRhIiwicmVzIiwiZ2V0IiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiZGl2IiwiYmlnQ29udCIsInAiLCJjZW50ZXJlZFBhcmEiLCJiciIsImg0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});