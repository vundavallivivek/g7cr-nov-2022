Object.prototype.sayHi = function () {
    console.log('Hi....')
}
function test() {
    this.a = 100
    //this.sayHi = function () { }
}
test.prototype.sayHi = function () {
    console.log('Hi...')
}
const testObjFirst = new test()
// Object.setPrototypeOf(testObjFirst, Object.prototype)
console.log(testObjFirst.__proto__)
testObjFirst.sayHi()

const testObjSecond = new test()
// Object.setPrototypeOf(testObjFirst, Object.prototype)
testObjSecond.sayHi()