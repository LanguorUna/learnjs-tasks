function askPassword(ok, fail) {
    const password = prompt("Password?", '')
    if (password === "rockstar")
        ok()
    else
        fail()
}

const user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`)
    },

    loginFail() {
        alert(`${this.name} failed to log in`)
    },
}

askPassword(user.loginOk.bind(user), user.loginFail.bind(user))