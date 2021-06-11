(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function add(a, b) {
  console.log('默认暴露:' + (a + b));
} //默认暴露


var _default = add;
exports["default"] = _default;
},{}],2:[function(require,module,exports){
"use strict";

var _add = _interopRequireDefault(require("./add"));

var _sub = require("./sub");

var _person = require("./person");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _add["default"])(1, 2);
(0, _sub.sub1)();
(0, _sub.sub2)();
console.log(_person.age);
console.log(_person.name);
(0, _person.say)();
},{"./add":1,"./person":3,"./sub":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.say = say;
exports.age = exports.name = void 0;
//全部暴露  要暴露出完整的定义
var name = '张三';
exports.name = name;
var age = 18;
exports.age = age;

function say() {
  console.log('全部暴露');
}
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub1 = sub1;
exports.sub2 = sub2;
//统一暴露
var a = 10,
    b = 20;

function sub1() {
  console.log('统一暴露' + (a - b));
}

function sub2() {
  console.log('统一暴露' + (b - a));
}
},{}]},{},[2]);
