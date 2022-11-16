const add = function (a, b) {
    return a + b
}

const divide = async function (a, b) {
    const res = a / b
    if (res === Infinity) {
        //rejectFnRef('denominator should not be zero')
        throw new Error('denominator should not be zero')
        //return 'denominator should not be zero'
    }
    return res
}

console.log('begining')
async function call() {
    try {
        const data = await divide(12, 0)
        console.log(data)
    } catch (error) {
        console.log('in catch')
        console.log(error.message)
    }
}
call()
//const divPromise = divide(12, 0)
// divPromise
//     .then(
//         function (data) {
//             console.log(data)
//         },
//         function (e) {
//             //console.log(e)
//             console.log(e.message)
//         }
//     )

const addRes = add(12, 3)
console.log(addRes)

console.log('global end')

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const arr = await response.json()
        console.log(arr.slice(0, 10))
    } catch (error) {
        console.log(error.message)
    }
}
fetchData()
/*
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
*/