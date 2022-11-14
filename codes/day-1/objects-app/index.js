//'use strict'
/*
function add(a, b) {
    this.res = a + b
    var result
    result = res
    console.log(this)
    return res
}
var r = add(10, 2)
console.log(r)
console.log(this)
*/

//obj.display()

//1. ref-var.fn()
//2. new fn()
//3. fn()
'use strict'
function person(name, id, salary) {
    this.name = name
    this.id = id
    this.salary = salary
    this.display = function () {
        return this.name
    }
    console.log(this)
}
const joydipObj = new person('joydip', 1, 1000)
const anilObj = new person('anil', 2, 2000)

console.log(joydipObj.name)
console.log(anilObj.salary)
console.log(joydipObj.display())
