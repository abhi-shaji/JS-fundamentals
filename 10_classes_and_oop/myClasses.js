// class User {
//     constructor (username, email, password) {
//         this.username = username
//         this.password = password
//         this.email = email
//     }

//     encryptPassword() {
//         return `${this.password}ABC`
//     }

//     changeUserCaps () {
//         return `${this.username.toUpperCase()}`
//     }
// }
 
// const user1 = new User("abhi","abhi@g.vom",12345)
// console.log(user1);
// console.log(user1.encryptPassword());
// console.log(user1.changeUserCaps());

//behind the scene 

function User (username,email,password) {
     this.username = username
     this.username = username
     this.password = password
     this.email = email
}

User.prototype.encryptPassword = function () {
        return `${this.password}ABC`
    }
User.prototype.changeUserCaps = function () {
    return `${this.username.toUpperCase()}`
}

const user1 = new User("shaji","abhi@g.vom",12345)
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUserCaps());