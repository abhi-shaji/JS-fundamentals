
// const user = {
//     userName:"Abhinav",
//     loginCount:8,
//     signedIn:true,
//     getUserDetails: function () {
//         console.log(`got user details: ${this.userName}`);
//     }
// }

// console.log(user.userName);
// user.getUserDetails()


function User (username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}

const userOne = new User("Abhinav",10,true)
const userTwo = new User("Shaji",10,true)
console.log(userOne);
