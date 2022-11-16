define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Employee = void 0;
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  var Employee = /*#__PURE__*/function () {
    function Employee(name, id, basic, da, hra) {
      _classCallCheck(this, Employee);
      this.name = name;
      this.id = id;
      this.basicPay = basic;
      this.daPay = da;
      this.hraPay = hra;
      this.totalSalary = 0;
    }
    _createClass(Employee, [{
      key: "calculateSalary",
      value: function calculateSalary() {
        this.totalSalary = this.basicPay + this.daPay + this.hraPay;
      }
    }]);
    return Employee;
  }();
  _exports.Employee = Employee;
});