function addEmployee(empObj) {
    return new Promise(
        function (resolveFn, rejectFn) {
            if (employees) {
                try {
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
                        resolveFn(true)
                    } else
                        resolveFn(false)
                } catch (error) {
                    rejectFn(error)
                }
            } else
                rejectFn(new Error('repository not defined'))
        }
    )
}

function filterEmployees(salary) {
    return new Promise(
        function (resolveFn, rejectFn) {
            if (employees) {
                try {
                    let result = []
                    if (employees.length > 0) {
                        result = employees.filter(function (emp) {
                            return emp.totalSalary > salary
                        })
                    }
                    resolveFn(result)
                } catch (error) {
                    rejectFn(error)
                }
            } else
                rejectFn(new Error('repository not defined'))
        }
    )
}