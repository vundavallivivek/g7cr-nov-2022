window.addEventListener(
    'DOMContentLoaded',
    function () {
        const btnObj = document.getElementById('btnCall')
        btnObj.addEventListener(
            'click',
            function () {
                window.alert('clicked')
            }
        )
    }
)


const numbers = [1, 4, 2, 5, 6, 3, 8, 7, 9, 0]
const isEven = function (num) {
    return num % 2 === 0
}
/**
 * unction filter(fnRef) {
    const filteredArray = []
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        const status = fnRef(element)
        if (status) {
            filteredArray.push(element)
        }
    }
    return filteredArray
}
 */
const evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)
console.log(numbers)



/*
function sort(fnRef) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const compValue = fnRef(numbers[i], numbers[j])
            if (compValue > 0) {
                let temp = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = temp
            }
        }

    }
}
*/
const sortNumbers = function (a, b) {
    return a - b
}
const resultant = numbers.sort(sortNumbers)
console.log(resultant)
console.log(numbers)



console.log('end of road')