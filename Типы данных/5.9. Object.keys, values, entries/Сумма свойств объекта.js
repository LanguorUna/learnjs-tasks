const salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250
}

console.log(sumSalaries(salaries))

function sumSalaries(salaries) {
    let sum = 0
    for (const salary of Object.values(salaries)) {
        sum += salary
    }
    return sum
}