// singleton -> when object is created using consructor
// Object.create

// object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "Abhinav",
    age: 23,
    email: "abhinav@google.com",
    [mySym]: "myKey1",
    location: "Kozhikode",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    0:"Hi"
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser[0]);
// console.log(jsUser[mySym]);

// jsUser.email = "abhinav@microsoft.com"
// Object.freeze(jsUser)
// jsUser.email = "abhinav@chatgpt.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hi All");
}

jsUser.greetingTwo = function(){
    console.log(`Hi ${this.name}`);
}

console.log(jsUser.greetingTwo());
