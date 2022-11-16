
const obj = {
    name: 'anil',
    id: 1,
    salary: 10000,
    friend: {
        name: 'joy'
    }
}

// const name = obj.name
// const id = obj.id

// const { name: pName, id: pId, friend: { name: fname } } = obj
// console.log(pName)
// console.log(pId)
// console.log(fname)

// const { name: name, id: id, friend: { name: fname } } = obj
// console.log(name)
// console.log(id)
// console.log(fname)

const { name, id, friend: { name: fname } } = obj
console.log(name)
console.log(id)
console.log(fname)

const numbers = [1, 2, 3, 4, 5, 6]
const [, x, , , y] = numbers
console.log(x, y)

const people = [{
    name: 'anil',
    id: 1,
    salary: 10000,
    friend: {
        name: 'joy'
    }
}, {
    name: 'sunil',
    id: 2,
    salary: 20000,
    friend: {
        name: 'anil'
    }
}, {
    name: 'joy',
    id: 3,
    salary: 30000,
    friend: {
        name: 'anil'
    }
}]

const [, { name: pName, friend: { name: friendname } },] = people
console.log(pName, friendname)

