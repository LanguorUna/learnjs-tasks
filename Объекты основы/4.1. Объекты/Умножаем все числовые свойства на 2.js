const menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

multiplyNumeric(menu)

console.log(menu)

function multiplyNumeric(obj) {
    for (const objKey in obj) {
        if (typeof obj[objKey] === 'number') {
            obj[objKey] *= 2
        }
    }
}