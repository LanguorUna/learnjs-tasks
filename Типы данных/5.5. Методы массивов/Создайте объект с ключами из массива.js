const users = [
    {id: 'john', name: 'John Smith', age: 20},
    {id: 'ann', name: 'Ann Smith', age: 24},
    {id: 'pete', name: 'Pete Peterson', age: 31},
]

const usersById = groupById(users)

function groupById(arr) {
    return arr.reduce((result, value) => {
        result[value.id] = value
        return result
    }, {})
}

console.log(usersById)