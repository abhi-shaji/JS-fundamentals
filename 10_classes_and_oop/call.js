function setUsername (username) {
    this.username = username
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const user1 = new createUser("Abhi","abhi@g.com",123)
console.log(user1);
