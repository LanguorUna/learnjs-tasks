function makeArmy() {
    const shooters = []

    let i = 0
    while (i < 10) {
        let j = i
        let shooter = function () {
            console.log(j)
        }
        shooters.push(shooter)
        i++
    }
    return shooters
}

let army = makeArmy()

army[0]()
army[5]()