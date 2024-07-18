"use strict";

var hello = 'hello';
var getMessage = function getMessage() {
  return "".concat(hello, " Word");
};
document.getElementById('output').innerHTML = getMessage();