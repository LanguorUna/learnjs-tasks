function Obj() {
    this.isObj = true
}

let obj = new Obj()
let obj2 = new obj.constructor()

console.log(obj2.isObj)

Obj.prototype = {a: 1}

obj = new Obj()
obj2 = new obj.constructor()

console.log(obj2.isObj)