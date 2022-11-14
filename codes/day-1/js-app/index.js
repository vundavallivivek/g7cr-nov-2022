let result
result = add(10, 2)
console.log(result)

function add(a, b) {
    console.log(arguments)
    let res
    res = a + b
    return res
}
