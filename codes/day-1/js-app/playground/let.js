// console.log(m)
// m = 10
//console.log(x)//undefined
let x
x = 10
console.log(x) //10

for (let i = 0; i < 1; i++) {
    let x //(not hoisted)
    x = 20
    console.log(x)//20
}
console.log(x)//10

call('joydip')
//function declaration (hoisted)
function call(name) {
    console.log(name)
}

//console.log(add(10, 2))
//function expression
let add //(hoisted)
add = function (a, b) {
    return a + b
}
console.log(add(10, 2))