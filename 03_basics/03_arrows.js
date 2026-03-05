const user = {
    username: "Abhinav",
    price: 99,

    welcomeMessage: function () {
        console.log(`${this.username} Welcome to the webpage`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

function chai3 () {
    console.log(this);
}

// chai3()

const chai = function () {}
const chai2 = () => {
    console.log(this);

}
// chai2()

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(3,4));

const addThree = (num1, num2) =>  num1 + num2 //implicit return return keyword isautomatically taken no needto mention as one line code is written
const addFour = (num1, num2) =>  ( num1 + num2 ) //implicit return return keyword isautomatically taken no needto mention as one line code is written enclosed in ()
console.log(addThree(3,45));

const returnObject = () => ({username:"Abhinav"})
console.log(returnObject());

const myArray = [2, 3, 5, 7, 8]