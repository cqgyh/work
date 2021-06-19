/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 195:
/***/ (() => {


;// CONCATENATED MODULE: ./src/js/add.js
function add(a,b) {
    console.log(a+b)

}
/* harmony default export */ const js_add = (add);

;// CONCATENATED MODULE: ./src/js/person.json
const person_namespaceObject = JSON.parse('{"name":"laowang","age":"18"}');
;// CONCATENATED MODULE: ./src/js/index.js



//将所有的less文件引入到入口文件，让webpack进行统一编译,webpack会将他们写入的js中然后 以js的方式重新写入style标签中重新插入的页面





js_add(6,4);
console.log(person_namespaceObject);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[195]();
/******/ 	
/******/ })()
;