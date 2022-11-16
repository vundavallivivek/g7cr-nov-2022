var some = 50
function outer() {
    var a
    a = 100

    var inner
    inner = function () {
        var b
        b = 200
        var res
        res = a + b + some
        console.log(res)
    }

    return inner
}

var fnRef = outer()
fnRef()