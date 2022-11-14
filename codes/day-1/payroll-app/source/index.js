const anilEmployee = new employee('anil', 1, 1000, 2000, 3000)
anilEmployee.calculateSalary()
console.log(addEmployee(anilEmployee) === true ? 'added' : 'not')

const joyEmployee = new employee('joydip', 2, 2000, 3000, 4000)
joyEmployee.calculateSalary()
console.log(addEmployee(joyEmployee) === true ? 'added' : 'not')

const filteredArray = filterEmployees(6000)
if (filteredArray !== undefined && filteredArray.length > 0) {
    console.log(filteredArray)
}
