function person(name, id, salary) {
    this.pName = name
    this.pId = id
    this.pSalary = salary
}
person.prototype.printInfo = function () {
    return `${this.pName}, ${this.pId}, ${this.pSalary}`
}


function trainer(name, id, salary, subjectToTeach) {
    person.call(this, name, id, salary)
    this.subjectToTeach = subjectToTeach
    this.printInfo = function () {
        return this.__proto__.printInfo.apply(this) + ' ' + this.subjectToTeach
        // return person.prototype.printInfo.apply(this) + ' ' + this.subjectToTeach
    }
}
function trainee(name, id, salary, domain) {
    person.call(this, name, id, salary)
    this.domain = domain
    this.printInfo = function () {
        // return `${this.pName}, ${this.pId}, ${this.pSalary}, ${this.domain}`
        //return person.prototype.printInfo.apply(this) + ' ' + this.domain
        return this.__proto__.printInfo.apply(this) + ' ' + this.domain
    }
}

Object.setPrototypeOf(trainer.prototype, person.prototype)
Object.setPrototypeOf(trainee.prototype, person.prototype)

const joydipTrainer = new trainer('joydip', 1, 1000, 'JavaScript')
console.log(joydipTrainer.printInfo())

const rajendraTrainee = new trainee('Rajendra', 2, 2000, 'React JS')
console.log(rajendraTrainee.printInfo())


