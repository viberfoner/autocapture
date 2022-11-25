/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/autocap.js":
/*!************************!*\
  !*** ./src/autocap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _p5cap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p5cap */ \"./src/p5cap.js\");\n\n\nconst autocap =  options => {\n  return new Promise((resolve, reject) => {\n  p5.prototype.createP5Cap = function() {\n  const p5cap = new _p5cap__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, options);\n\n    this.Cap = p5cap;\n  }\n\n  p5.prototype.captureCurrentFrame = function() {\n    this.Cap.captureCurrentFrame();\n\n    if (this.frameCount >= this.Cap.totalFrames) {\n      this.Cap.getFrames().then(function(frames) {\n        resolve(frames);\n      })\n    }\n  }\n\n  p5.prototype.registerMethod('init', p5.prototype.createP5Cap);\n  p5.prototype.registerMethod('post', p5.prototype.captureCurrentFrame);\n});\n}\n \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (autocap);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV0b2NhcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFLOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUVBQWUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvLWV4cG9ydC8uL3NyYy9hdXRvY2FwLmpzP2I4ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFA1Q2FwIGZyb20gJy4vcDVjYXAnO1xuXG5jb25zdCBhdXRvY2FwID0gIG9wdGlvbnMgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICBwNS5wcm90b3R5cGUuY3JlYXRlUDVDYXAgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgcDVjYXAgPSBuZXcgUDVDYXAodGhpcywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLkNhcCA9IHA1Y2FwO1xuICB9XG5cbiAgcDUucHJvdG90eXBlLmNhcHR1cmVDdXJyZW50RnJhbWUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLkNhcC5jYXB0dXJlQ3VycmVudEZyYW1lKCk7XG5cbiAgICBpZiAodGhpcy5mcmFtZUNvdW50ID49IHRoaXMuQ2FwLnRvdGFsRnJhbWVzKSB7XG4gICAgICB0aGlzLkNhcC5nZXRGcmFtZXMoKS50aGVuKGZ1bmN0aW9uKGZyYW1lcykge1xuICAgICAgICByZXNvbHZlKGZyYW1lcyk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHA1LnByb3RvdHlwZS5yZWdpc3Rlck1ldGhvZCgnaW5pdCcsIHA1LnByb3RvdHlwZS5jcmVhdGVQNUNhcCk7XG4gIHA1LnByb3RvdHlwZS5yZWdpc3Rlck1ldGhvZCgncG9zdCcsIHA1LnByb3RvdHlwZS5jYXB0dXJlQ3VycmVudEZyYW1lKTtcbn0pO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgYXV0b2NhcDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/autocap.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _autocap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocap */ \"./src/autocap.js\");\n\n\n(0,_autocap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({numFrames: 10}).then(frames => {\n  console.log(frames);\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBZ0M7O0FBRWhDLG9EQUFPLEVBQUUsY0FBYztBQUN2QjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlby1leHBvcnQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0b2NhcCBmcm9tICcuL2F1dG9jYXAnO1xuXG5hdXRvY2FwKHtudW1GcmFtZXM6IDEwfSkudGhlbihmcmFtZXMgPT4ge1xuICBjb25zb2xlLmxvZyhmcmFtZXMpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/p5cap.js":
/*!**********************!*\
  !*** ./src/p5cap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass P5Cap {\n\n  constructor(p, options) {\n    this.p = p;\n    this._pendingFrames = [];\n    this.frames = [];\n    this.totalFrames = options?.numFrames || 60;\n    this.onComplete = null;\n  }\n\n  // push a promise that will resolve to a blob to the\n  // frames array (this is done so that the frames stay\n  // in order, since the canvas.toBlob function returns\n  // asynchronously)\n  captureCurrentFrame() {\n    const canvas = this.p._curElement.elt;\n\n    const blob = canvasToBlobPromise(canvas);\n    this._pendingFrames.push(blob);\n  }\n\n  // stop the draw loop when frameCount reaches numFrames\n  // then resolve the promise array to a blob array\n  // containing the frames\n  stop(){\n    this.p.noLoop();\n  }\n\n  async getFrames() {\n    this.stop();\n    this.frames = await resolveFrames(this._pendingFrames);\n    return this.frames;\n  }\n\n}\n\n// promisify canvas.toBlob\nfunction canvasToBlobPromise(canvas) {\n  return new Promise((resolve, reject) => {\n    canvas.toBlob(blob => {\n      resolve(blob);\n    });\n  });\n}\n\n// resolve an array of promises and return a new array\n// with the results\nasync function resolveFrames(arr) {\n  const resolvedArr = [];\n  for (let i = 0; i < arr.length; i++) {\n    resolvedArr[i] = await arr[i];\n  }\n  return resolvedArr;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (P5Cap);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcDVjYXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlby1leHBvcnQvLi9zcmMvcDVjYXAuanM/NzQ2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQNUNhcCB7XG5cbiAgY29uc3RydWN0b3IocCwgb3B0aW9ucykge1xuICAgIHRoaXMucCA9IHA7XG4gICAgdGhpcy5fcGVuZGluZ0ZyYW1lcyA9IFtdO1xuICAgIHRoaXMuZnJhbWVzID0gW107XG4gICAgdGhpcy50b3RhbEZyYW1lcyA9IG9wdGlvbnM/Lm51bUZyYW1lcyB8fCA2MDtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBudWxsO1xuICB9XG5cbiAgLy8gcHVzaCBhIHByb21pc2UgdGhhdCB3aWxsIHJlc29sdmUgdG8gYSBibG9iIHRvIHRoZVxuICAvLyBmcmFtZXMgYXJyYXkgKHRoaXMgaXMgZG9uZSBzbyB0aGF0IHRoZSBmcmFtZXMgc3RheVxuICAvLyBpbiBvcmRlciwgc2luY2UgdGhlIGNhbnZhcy50b0Jsb2IgZnVuY3Rpb24gcmV0dXJuc1xuICAvLyBhc3luY2hyb25vdXNseSlcbiAgY2FwdHVyZUN1cnJlbnRGcmFtZSgpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLnAuX2N1ckVsZW1lbnQuZWx0O1xuXG4gICAgY29uc3QgYmxvYiA9IGNhbnZhc1RvQmxvYlByb21pc2UoY2FudmFzKTtcbiAgICB0aGlzLl9wZW5kaW5nRnJhbWVzLnB1c2goYmxvYik7XG4gIH1cblxuICAvLyBzdG9wIHRoZSBkcmF3IGxvb3Agd2hlbiBmcmFtZUNvdW50IHJlYWNoZXMgbnVtRnJhbWVzXG4gIC8vIHRoZW4gcmVzb2x2ZSB0aGUgcHJvbWlzZSBhcnJheSB0byBhIGJsb2IgYXJyYXlcbiAgLy8gY29udGFpbmluZyB0aGUgZnJhbWVzXG4gIHN0b3AoKXtcbiAgICB0aGlzLnAubm9Mb29wKCk7XG4gIH1cblxuICBhc3luYyBnZXRGcmFtZXMoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5mcmFtZXMgPSBhd2FpdCByZXNvbHZlRnJhbWVzKHRoaXMuX3BlbmRpbmdGcmFtZXMpO1xuICAgIHJldHVybiB0aGlzLmZyYW1lcztcbiAgfVxuXG59XG5cbi8vIHByb21pc2lmeSBjYW52YXMudG9CbG9iXG5mdW5jdGlvbiBjYW52YXNUb0Jsb2JQcm9taXNlKGNhbnZhcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XG4gICAgICByZXNvbHZlKGJsb2IpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gcmVzb2x2ZSBhbiBhcnJheSBvZiBwcm9taXNlcyBhbmQgcmV0dXJuIGEgbmV3IGFycmF5XG4vLyB3aXRoIHRoZSByZXN1bHRzXG5hc3luYyBmdW5jdGlvbiByZXNvbHZlRnJhbWVzKGFycikge1xuICBjb25zdCByZXNvbHZlZEFyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIHJlc29sdmVkQXJyW2ldID0gYXdhaXQgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXNvbHZlZEFycjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUDVDYXA7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/p5cap.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;