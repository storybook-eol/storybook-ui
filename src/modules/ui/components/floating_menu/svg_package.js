/* eslint-disable */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["svg_package"] = factory();
	else
		root["svg_package"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uOSAyLTJWNWMwLTEuMS0uODktMi0yLTJ6bS05IDE0bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6Ii8+Cjwvc3ZnPg=="

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yeiIvPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4="

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik00IDE4bDguNS02TDQgNnYxMnptOS0xMnYxMmw4LjUtNkwxMyA2eiIvPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4="

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMSAxOFY2bC04LjUgNiA4LjUgNnptLjUtNmw4LjUgNlY2bC04LjUgNnoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+"

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0xMSAxOGgydi0yaC0ydjJ6bTEtMTZDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4em0wLTE0Yy0yLjIxIDAtNCAxLjc5LTQgNGgyYzAtMS4xLjktMiAyLTJzMiAuOSAyIDJjMCAyLTMgMS43NS0zIDVoMmMwLTIuMjUgMy0yLjUgMy01IDAtMi4yMS0xLjc5LTQtNC00eiIvPgo8L3N2Zz4="

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzeiIvPgo8L3N2Zz4="

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik02IDE4bDguNS02TDYgNnYxMnpNMTYgNnYxMmgyVjZoLTJ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik02IDZoMnYxMkg2em0zLjUgNmw4LjUgNlY2eiIvPgogICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4="

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ic_check_box_black_24px_svg__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ic_check_box_black_24px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ic_check_box_black_24px_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ic_check_box_outline_blank_black_24px_svg__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ic_check_box_outline_blank_black_24px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ic_check_box_outline_blank_black_24px_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ic_fast_forward_black_18px_svg__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ic_fast_forward_black_18px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ic_fast_forward_black_18px_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ic_fast_rewind_black_18px_svg__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ic_fast_rewind_black_18px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ic_fast_rewind_black_18px_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ic_menu_black_18px_svg__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ic_menu_black_18px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ic_menu_black_18px_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ic_skip_next_black_18px_svg__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ic_skip_next_black_18px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ic_skip_next_black_18px_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ic_skip_previous_black_18px_svg__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ic_skip_previous_black_18px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ic_skip_previous_black_18px_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ic_help_outline_black_18px_svg__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ic_help_outline_black_18px_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ic_help_outline_black_18px_svg__);









const images = {
  checked_box: __WEBPACK_IMPORTED_MODULE_0__ic_check_box_black_24px_svg___default.a,
  unchecked_box: __WEBPACK_IMPORTED_MODULE_1__ic_check_box_outline_blank_black_24px_svg___default.a,
  fast_forward: __WEBPACK_IMPORTED_MODULE_2__ic_fast_forward_black_18px_svg___default.a,
  fast_rewind: __WEBPACK_IMPORTED_MODULE_3__ic_fast_rewind_black_18px_svg___default.a,
  menu: __WEBPACK_IMPORTED_MODULE_4__ic_menu_black_18px_svg___default.a,
  skip_next: __WEBPACK_IMPORTED_MODULE_5__ic_skip_next_black_18px_svg___default.a,
  skip_previous: __WEBPACK_IMPORTED_MODULE_6__ic_skip_previous_black_18px_svg___default.a,
  help: __WEBPACK_IMPORTED_MODULE_7__ic_help_outline_black_18px_svg___default.a,
};

/* harmony default export */ exports["default"] = images;


/***/ }
/******/ ]);
});
