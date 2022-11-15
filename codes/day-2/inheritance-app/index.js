class Person {
    constructor(name, id, salary) {
        this.pName = name
        this.pId = id
        this.pSalary = salary
    }
    printInfo() {
        return `${this.pName}, ${this.pId}, ${this.pSalary}`
    }
}

//console.log(Person.prototype)
class Trainer extends Person {
    constructor(name, id, salary, subjectToTeach) {
        super(name, id, salary)
        this.subjectToTeach = subjectToTeach
    }
    printInfo() {
        return `${super.printInfo()}, ${this.subjectToTeach}`
    }
}

class Trainee extends Person {
    constructor(name, id, salary, domain) {
        super(name, id, salary)
        this.domain = domain
    }
    printInfo() {
        return `${super.printInfo()}, ${this.domain}`
    }
}


const joydipTrainer = new Trainer('joydip', 1, 1000, 'JavaScript')
console.log(joydipTrainer.printInfo())

const rajendraTrainee = new Trainee('Rajendra', 2, 2000, 'React JS')
console.log(rajendraTrainee.printInfo())


const utility1 = {
    name: 'anil',
    sayHi: function () {
        console.log('Hi...' + ' ' + this.name)
    }
}
const copyOfUtility1 = {
    ...utility1
}

const utility2 = {
    sayBye: function () {
        console.log('Bye...')
    }
}

// const combined = {
//     test: function () {
//         console.log('test')
//     }
// }

// for (const propName in utility1) {
//     const propValue = utility1[propName]
//     combined[propName] = propValue
// }
// for (const propName in utility2) {
//     const propValue = utility1[propName]
//     combined[propName] = propValue
// }

//mixin
// Object.assign(combined, utility1, utility2)


const combined = {
    test: function () {
        console.log('test')
    },
    ...utility1,
    ...utility2
}
console.log(combined)

const numbers = [1, 2, 3, 4]
const copyOfNumbers = [...numbers, 10, 20]
