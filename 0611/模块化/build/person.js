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