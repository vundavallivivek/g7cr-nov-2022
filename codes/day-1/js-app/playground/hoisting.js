console.log(x)//undefined
var x //(hoisted)
x = 10
console.log(x) //10
var i //(hoisted)
for (i = 0; i < 1; i++) {
    var x //(not hoisted)
    x = 20
    console.log(x)//20
}
console.log(x)//20

call('joydip')
//function declaration (hoisted)
function call(name) {
    console.log(name)
}

console.log(add(10, 2))
//function expression
var add //(hoisted)
add = function (a, b) {
    return a + b
}