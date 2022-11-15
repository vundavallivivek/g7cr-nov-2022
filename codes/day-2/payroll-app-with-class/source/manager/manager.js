function addEmployee(empObj) {
    if (employees) {
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
    } else
        throw new Error('repository not defined')
}

function filterEmployees(salary) {
    let result = []
    if (employees.length > 0) {
        result = employees.filter(function (emp) {
            return emp.totalSalary > salary
        })
    }
    return result
}