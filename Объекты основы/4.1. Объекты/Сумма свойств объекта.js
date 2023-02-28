const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const result = Object.values(salaries)
    .reduce((sum, current) => sum + current, 0)

console.log(result)
