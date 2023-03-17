function f(x) {
    console.log(x)
}

const f1000 = delay(f, 1000)
const f1500 = delay(f, 1500)

f1000("test")
f1500("test")

function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms)
    }
}