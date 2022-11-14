function addEmployee(empObj) {
    let index = -1
    if (employees.length > 0) {
        index = employees.findIndex(
            function (emp) {
                return emp.id === empObj.id
            }
        )
    }

    if (index === -1 || employees.length === 0) {
        employees.push(empObj)
        return true
    } else
        return false
}

function filterBySalary(emp) {
    return emp.totalSalary > salary
}
// const filterBySalary = function (emp) {
//     return emp.totalSalary > salary
// }
// const filterBySalary = (emp) => {
//     return emp.totalSalary > salary
// }
// const filterBySalary = (emp) => emp.totalSalary > salary

function filterEmployees(salary) {
    let result = []
    if (employees.length > 0) {
        result = employees.filter(filterBySalary)
    }
    return result
}