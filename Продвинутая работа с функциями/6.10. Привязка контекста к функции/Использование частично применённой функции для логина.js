function askPassword(ok, fail) {
    const password = prompt("Password?", '')
    if (password === "rockstar")
        ok()
    else
        fail()
}

const user = {
    name: 'John',

    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'))
    }
}

askPassword(user.login.bind(user, true), user.login.bind(user, false))