function checkSpam(str) {
    const normalized = str?.toLowerCase()
    return normalized?.includes('viagra') || normalized?.includes('xxx')
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))