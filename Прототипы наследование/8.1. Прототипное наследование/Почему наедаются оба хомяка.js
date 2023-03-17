const hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food)
    }
}

const speedy = {
    __proto__: hamster,
    stomach: []
}

const lazy = {
    __proto__: hamster,
    stomach: []
}

speedy.eat("apple")
console.log(speedy.stomach)
console.log(lazy.stomach)