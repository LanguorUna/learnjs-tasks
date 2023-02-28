function Calculator() {
    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    }

    this.calculate = (str) => {
        const split = str.split(' ')
        const a = +split[0]
        const operator = split[1]
        const b = +split[2]

        if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
            return NaN
        }

        return this.methods[operator](a, b)
    }

    this.addMethod = (name, func) => {
        this.methods[name] = func
    }
}

const calc = new Calculator()
console.log(calc.calculate('3 + 7'))

calc.addMethod('*', (a, b) => a * b)
calc.addMethod('/', (a, b) => a / b)
calc.addMethod('**', (a, b) => a ** b)


console.log( calc.calculate('2 ** 3') )