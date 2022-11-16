define([], function () {
  "use strict";

  var add = function add(a, b) {
    return a + b;
  };
  var subtract = function subtract(a, b) {
    return a - b;
  };
  module.exports = {
    add: add,
    subtract: subtract
  };
});