function developer(name, id, basic, da, hra, incentive) {
    employee.call(this, name, id, basic, da, hra)
    this.incentivePay = incentive
    this.calculateSalary = function () {
        this.__proto__.calculateSalary.apply(this)
        this.totalSalary += this.incentivePay
    }
}
Object.setPrototypeOf(developer.prototype, employee.prototype)