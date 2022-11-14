//1. object-literal syntax
const obj = {
    //value properties
    name: 'joydip',
    id: 1,
    salary: 10000,
    //functional properties
    display: function () {
        return this.name
    }
}

console.log(obj.salary)
console.log(obj['salary'])
console.log(obj.display())

// console.log(obj['display']())