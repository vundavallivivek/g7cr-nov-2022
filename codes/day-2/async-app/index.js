const add = function (a, b) {
    return a + b
}
// const divide = function (a, b) {
//     setTimeout(
//         function () {
//             const res = a / b
//             if (res === Infinity) {
//                 console.log('denominator can not be zero')
//             }
//             console.log(res)
//         }
//     )
//     console.log('over')
// }

const divide = function (a, b) {
    const p = new Promise(
        //executor function
        function (resolveFnRef, rejectFnRef) {
            const res = a / b
            if (res === Infinity) {
                //rejectFnRef('denominator should not be zero')
                rejectFnRef(new Error('denominator should not be zero'))
            }
            resolveFnRef(res)
        }
    )
    console.log('over')
    return p
}

console.log('begining')

const divPromise = divide(12, 3)
divPromise.then(
    function (data) {
        console.log(data)
    },
    function (e) {
        //console.log(e)
        console.log(e.message)
    }
)

const addRes = add(12, 3)
console.log(addRes)

console.log('global end')

const fetchPromise = fetch('https://jsonplaceholder.typicode.com/todos')
fetchPromise.then(
    function (resp) {
        const another = resp.json()
        another.then(
            function (arr) {
                console.log(arr.slice(0, 10))
            },
            function (err) {
                console.log(err.message)
            }
        )
    },
    function (e) {
        console.log(e.message)
    }
)