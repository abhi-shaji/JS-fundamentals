const userEmail = []

// if (userEmail) {
//     console.log("User has email");
// } else {
//     console.log("User doesnot have eamil");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function() {}

// if (userEmail.length ===0) {
//     console.log("Array is empty");
// } 

const emptyObject = {}

// if(Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }

let val1
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
// console.log(val1);

val1 = null ?? 100 ?? 20
// console.log(val1);

// Terinary Operator

// condition ? true : false

const teaPrice = 200

teaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");
