const successFn = function (status) {
    console.log(status ? 'added' : 'not')
    console.log(employees)
}
const failureFn = function (e) {
    console.log(e.message)
}

const anilEmployee = new Developer('anil', 1, 1000, 2000, 3000, 4000)
anilEmployee.calculateSalary()
addEmployee(anilEmployee).then(successFn, failureFn)
//console.log(addEmployee(anilEmployee) === true ? 'added' : 'not')

const joyEmployee = new Hr('joydip', 2, 2000, 3000, 4000, 5000)
joyEmployee.calculateSalary()
addEmployee(joyEmployee).then(successFn, failureFn)
//console.log(addEmployee(joyEmployee) === true ? 'added' : 'not')

//const filteredArray = filterEmployees(12000)
filterEmployees(12000)
    .then(
        function (filteredArray) {
            if (filteredArray !== undefined && filteredArray.length > 0) {
                console.log(filteredArray)
            }
        },
        failureFn
    )


