const salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250
}

function topSalary(salaries) {
    const entries = Object.entries(salaries)
    if (!entries.length)
        return null

    let max = 0
    let maxName

    for (const [name, salary] of entries) {
        if (salary > max) {
            max = salary
            maxName = name
        }
    }

    return maxName
}

console.log(topSalary(salaries))