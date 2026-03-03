function sayMyame() {
  console.log("Abhinav");
  console.log("Shaji");
}

// sayMyame()

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(3, 4);
// console.log(result);

function loginUseMessage(username) {   //if default value is passed no undefined scenarion will be present
  if (!username) {
    console.log("Please enter Username");
    return;
  }
  return `${username} has LoggedIn`;
}

// console.log(loginUseMessage());

function calculateCartValue (val1, ...num1) {
    return num1
}

// console.log(calculateCartValue(100, 200, 300));

const user = {
    username: "Abhinav",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username:"Anil",
    price: 200
})

const myNewArray = [100, 200, 300, 600]

function returnSecondValue (anyArray) {
    return anyArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3, 4]));


