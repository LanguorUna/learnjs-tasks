function getMaxSubSum(arr) {
    let maxSum = 0
    let currentSum = 0

    arr.forEach((value) => {
        currentSum += value
        maxSum = Math.max(maxSum, currentSum)
        currentSum = Math.max(currentSum, 0)
    })

    return maxSum
}

console.log(getMaxSubSum([-1, 2, 3, -9]))
console.log(getMaxSubSum([-1, 2, 3, -9, 11]))
console.log(getMaxSubSum([-2, -1, 1, 2]))
console.log(getMaxSubSum([100, -9, 2, -3, 5]))
console.log(getMaxSubSum([1, 2, 3]))
console.log(getMaxSubSum([-1, -2, -3]))