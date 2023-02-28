function aclean(arr) {
    const map = new Map()

    let hash
    arr.forEach(word => {
        hash = word.toLowerCase().split('').sort().join('')
        map.set(hash, word)
    })

    return Array.from(map.values())
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

console.log(aclean(arr))