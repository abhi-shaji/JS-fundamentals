const myArray = [1,2,3,4,5]



// const myTotal = myArray.reduce(function (acc,currVal) {
//     return acc + currVal
// }, 0)

const myTotal = myArray.reduce( (acc,currVal) => acc + currVal , 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalCartAmount = shoppingCart.reduce((acc, item) => acc+ item.price, 0)
console.log(totalCartAmount);
