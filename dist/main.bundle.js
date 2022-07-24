/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/cookie.js":
/*!**************************!*\
  !*** ./src/js/cookie.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cookie)\n/* harmony export */ });\nlet block = document.querySelector('.cookie');\nlet button = document.querySelector('.cookie__btn');\n\nfunction cookie () {\n    let timer = setTimeout(() => {\n        block.style.bottom = '0px';\n    }, 2000);\n    button.addEventListener('click', () => {\n        block.style.display = 'none';\n    });\n}\n\n//# sourceURL=webpack://test-project/./src/js/cookie.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ \"./src/js/validation.js\");\n/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie */ \"./src/js/cookie.js\");\n/* harmony import */ var _phone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone */ \"./src/js/phone.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    (0,_validation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_phone__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\n\n\n//# sourceURL=webpack://test-project/./src/js/index.js?");

/***/ }),

/***/ "./src/js/phone.js":
/*!*************************!*\
  !*** ./src/js/phone.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ phoneAnimation)\n/* harmony export */ });\nlet img = document.querySelector('.mission__about-phone');\nlet block = document.querySelector('.mission__about-content');\nlet container = document.querySelector('.mission');\n\nfunction phoneAnimation () {\n    if (window.screen.width < 900) {\n        return false\n    }\n\n    let offset = container.getBoundingClientRect().top + document.documentElement.scrollTop;\n    let contOffset = container.offsetHeight;\n    \n    window.addEventListener('scroll', (e) => {\n        console.log(document.documentElement.scrollTop);\n        console.log(offset);\n        console.log(contOffset);\n        console.log(container.getBoundingClientRect().top)\n        if (container.getBoundingClientRect().top < 0) {\n            console.log('done');\n            img.style.animationName = 'phone';\n            block.style.animationName = 'text';\n            \n        }\n    });\n}\n\n//# sourceURL=webpack://test-project/./src/js/phone.js?");

/***/ }),

/***/ "./src/js/validation.js":
/*!******************************!*\
  !*** ./src/js/validation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ validation)\n/* harmony export */ });\nlet inputs = document.querySelectorAll('.input');\nlet form = document.querySelector('form');\n\n\n\nfunction validation () {\n    form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        let form = [];\n        inputs.forEach((input) => {\n            if (!input.value) {\n                input.classList.add('invalid')\n            } else {\n                input.classList.remove('invalid')\n                form.push(`${input.name}: ${input.value}`)\n            }\n        })\n        console.log(form);\n        if (form.length < 7) return false;\n    });\n}\n\n//# sourceURL=webpack://test-project/./src/js/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;