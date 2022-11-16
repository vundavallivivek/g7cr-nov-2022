//1. solution-1: store reference of outer context in a local variable and use the same in inner function
// function outer() {
//     this.a = 100
//     console.log(this)
//     const ref = this
//     let inner = function () {
//         this.b = 200
//         console.log(this)
//         //let res = this.a + this.b
//         let res = ref.a + this.b
//         console.log(res)
//     }

//     inner()
// }

//2. solution-2: bind inner function using bind() method and passinbg the reference of the outer function context as an argument to that bind() method. bind() method will bind the inner function to the same context as that of the outer and returns the reference of that bound function (does not call the funct after binding)
// function outer() {
//     this.a = 100
//     console.log(this)

//     let inner = function () {
//         this.b = 200
//         console.log(this)
//         let res = this.a + this.b
//         console.log(res)
//     }
//     inner = inner.bind(this)
//     inner()
// }

//3. solution-3: 
function outer() {
    this.a = 100
    console.log(this)

    let inner = () => {
        this.b = 200
        console.log(this)
        let res = this.a + this.b
        console.log(res)
    }
    inner()
}

new outer()


class Person {
    constructor(name, id, salary) {
        this.personName = name
        this.personId = id
        this.personSalary = salary
    }
    printInfo() {
        console.log(this)
        return `${this.personName}`
    }
}
console.log(Person.prototype)
class Trainer extends Person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.trainerSubject = subject
    }
    printInfo() {
        return `${super.printInfo()}, ${this.trainerSubject}`
    }
}
console.log(Trainer.prototype)
const people = [
    new Trainer('anil', 1, 1000, 'JS'),
    new Trainer('sunil', 2, 2000, 'React'),
    new Trainer('mahesh', 3, 3000, 'NodeJS')
]

function printSalary(fnRef) {
    const info = fnRef()
    console.log(info)
}

people.forEach(
    function (p) {
        printSalary(p.printInfo)
    }
)