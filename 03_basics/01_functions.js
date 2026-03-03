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

function loginUseMessage(username) {
  if (!username) {
    console.log("Please enter Username");
    return;
  }
  return `${username} has LoggedIn`;
}

console.log(loginUseMessage());


