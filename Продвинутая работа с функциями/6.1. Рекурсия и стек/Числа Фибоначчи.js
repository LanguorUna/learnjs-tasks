function fib1(n) {
    return (n === 0 || n === 1)
        ? n
        : fib1(n - 1) + fib1(n - 2)
}

function fib2(n) {
    let prev2 = 1
    let prev1 = 1
    let current
    for (let i = 3; i <= n; i++) {
        current = prev2 + prev1
        prev2 = prev1
        prev1 = current
    }
    return current
}

console.log(fib2(77))