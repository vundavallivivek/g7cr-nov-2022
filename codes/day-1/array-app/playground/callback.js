const x = 100
//x = 200
console.log(x)


function filterValues(arr, fnRef) {
    const filteredArray = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const status = fnRef(element)
        if (status) {
            filteredArray.push(element)
        }
    }
    return filteredArray
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// const numbers = new Array(1, 2, 3, 4)
const isEven = function (num) {
    return num % 2 === 0 ? true : false
}

//call tne function and pass the array. the function will filter only even numbers out of that array and return a new array with only even number
const result = filterValues(numbers, isEven)

//print the even numbers
for (let index = 0; index < result.length; index++) {
    const element = result[index];
    console.log(element)
}

const isOdd = function (num) {
    return num % 2 !== 0
}
const oddNumbers = filterValues(numbers, isOdd)
console.log(oddNumbers)

