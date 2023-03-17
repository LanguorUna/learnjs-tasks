function sumTo1(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}

function sumTo2(n) {
    return n === 1
        ? 1
        : n + sumTo2(n - 1)
}

function sumTo3(n) {
    return n * (n + 1) / 2
}

console.log(sumTo2(3))