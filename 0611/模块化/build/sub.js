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