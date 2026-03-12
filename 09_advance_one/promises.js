// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Async task completed");
//         resolve()
//     }, 1000)
// })


// promiseOne.then(function () {
//     console.log("Promise consumed");
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Asyn2 task completed");
//         resolve("Abhi")
//     }, 1000)
// }).then((a) => {
//     console.log("Promise 2 consumed", a);
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({username:"Abhinav", emailId:"abhinavshaji16@gmail.com"})
//     }, 1000)
// })

// promiseThree.then((user) => {
//     console.log(user.username,user.emailId);
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error= true
//         if(!error) {
//             resolve({username:"Abhinav", password:"12345678"})
//         }else {
//             reject("No data received")
//         }
        
//     },2000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((errMsg) => console.log(errMsg))
// .finally(() => {
//     console.log("Promise was rejected or resolved");
// })

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error) {
//             resolve({username:"Javascript", password:"12345678"})
//         }else {
//             reject("JS went wrong")
//         }
//     }, 1000)
// })

// async function consumePromiseFive () {
//     try {
//         const response = await promiseFive
//         console.log(response); 
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumePromiseFive()

// async function getAllUsers() {
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users')
//      const data = await response.json()
//      console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)) 