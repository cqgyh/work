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