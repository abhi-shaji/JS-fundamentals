// const numbers = [2, 4, 6, 8];


// numbers.forEach( (num) => console.log(num*3))

// const numbers = [5, 10, 15, 20];
// let totalSum = 0
// numbers.forEach((num) => totalSum+=num )
// console.log(totalSum);

// const users = [
//   {name: "Aman", age: 22},
//   {name: "Riya", age: 24},
//   {name: "John", age: 20}
// ];

// users.forEach( (user) => console.log(user.name))

const fruits = ["apple", "banana", "mango"];

let newFruits = fruits.map((fruit) => fruit.toUpperCase())
// console.log(newFruits);

const products = [
  {name: "Laptop", price: 50000},
  {name: "Phone", price: 20000},
  {name: "Tablet", price: 15000}
];

let priceArray = products.map((pr) => pr.price)
// console.log(priceArray);

// const users = [
//   {name: "Aman"},
//   {name: "Riya"},
//   {name: "John"}
// ];

// const updatedUsers = users.map(user => {
//   return {
//     ...user,
//     active: true
//   };
// });

// const updatedUsers = users.map((user) => ({...user, active:true}))

// console.log(updatedUsers);

// const numbers = [1,2,3,4,5,6,7,8];

// const newNumbes = numbers
//                         .filter((num) => num % 2 ==0)
//                         .map((num) => num * 2)
// // console.log(newNumbes);

// const users = [
//   {name: "Aman", age: 17},
//   {name: "Riya", age: 22},
//   {name: "John", age: 15},
//   {name: "Sara", age: 30}
// ];

// const adultUsers= users.filter( (user) => user.age >= 18)
// console.log(adultUsers);

// const numbers = [5, 12, 8, 20, 3];

// const newNums = numbers.filter((num) => num > 10)
//                         .map((num) => num * 2)
// console.log(newNums);

const users = [
 {name: "Aman", age: 17},
 {name: "Riya", age: 22},
 {name: "John", age: 19},
 {name: "Sara", age: 15}
];
                        
const adultUsersName = users.filter((user) => user.age > 18)
                            .map((user) => user.name)
console.log(adultUsersName);
