function A() {
    return globalThis
}

function B() {
    return globalThis
}

const a = new A()
const b = new B()

console.log(a === b)