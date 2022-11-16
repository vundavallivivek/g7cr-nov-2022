define([], function () {
  "use strict";

  var _require = require('./calculation'),
    add = _require.add,
    subtract = _require.subtract;
  console.log(add(10, 20));
  console.log(subtract(10, 2));
});