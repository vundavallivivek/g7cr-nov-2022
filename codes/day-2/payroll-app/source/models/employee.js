function employee(name, id, basic, da, hra) {
    this.name = name
    this.id = id
    this.basicPay = basic
    this.daPay = da
    this.hraPay = hra
    this.totalSalary = 0
}
employee.prototype.calculateSalary = function () {
    this.totalSalary = this.basicPay + this.daPay + this.hraPay
}