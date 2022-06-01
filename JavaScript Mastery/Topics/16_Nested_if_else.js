// nested if else

// Program of winning number and winning number is 19

let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if (userGuess === winningNumber) {
  console.log("Your guess is right");
} else {
  if (userGuess < winningNumber) {
    console.log("too low !!");
  } else {
    console.log("too high !!");
  }
}
