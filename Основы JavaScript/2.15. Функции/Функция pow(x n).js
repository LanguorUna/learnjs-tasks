function pow(x, n) {
    if (!Number.isInteger(n) || n <= 0) {
        throw `n = ${n} не натуральное число`
    }

    let result = x
    for (let i = 1; i < n; i++) {
        result *= x
    }

    // x**n
    return result
}

console.log(pow(2, 2))