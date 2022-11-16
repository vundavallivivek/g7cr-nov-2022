import { addEmployee, filterEmployees } from "./manager/manager"
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";
import { employees } from "./data/repository";

const successFn = function (status) {
    console.log(status ? 'added' : 'could not add')
    console.log(employees)
}
const failureFn = function (e) {
    console.log(e.message)
}

async function add(emp) {
    try {
        const status = await addEmployee(emp)
        successFn(status)
    } catch (error) {
        failureFn(error)
    }
}

async function filterData() {
    try {
        const filteredArray = await filterEmployees(12000)
        if (filteredArray !== undefined && filteredArray.length > 0) {
            console.log(filteredArray)
        }
    } catch (error) {
        failureFn(error)
    }
}

const anilEmployee = new Developer('anil', 1, 1000, 2000, 3000, 4000)
anilEmployee.calculateSalary()
add(anilEmployee)

const joyEmployee = new Hr('joydip', 2, 2000, 3000, 4000, 5000)
joyEmployee.calculateSalary()
add(joyEmployee)

filterData()
console.log('end')