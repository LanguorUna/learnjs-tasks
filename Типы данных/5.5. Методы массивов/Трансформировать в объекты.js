const vasya = {name: 'Вася', surname: 'Пупкин', id: 1}
const petya = {name: 'Петя', surname: 'Иванов', id: 2}
const masha = {name: 'Маша', surname: 'Петрова', id: 3}

const users = [vasya, petya, masha]

const usersMapped = users.map((user) => ({
    id: user.id,
    fullName: `${user.name} ${user.surname}`
}))

console.log(usersMapped[0].id)
console.log((usersMapped[0].fullName))