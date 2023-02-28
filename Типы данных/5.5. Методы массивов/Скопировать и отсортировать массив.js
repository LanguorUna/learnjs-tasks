function copySorted(arr) {
    return [...arr].sort()
}

const arr = ["HTML", "JavaScript", "CSS"]

const sorted = copySorted(arr)

console.log(sorted)
console.log(arr)