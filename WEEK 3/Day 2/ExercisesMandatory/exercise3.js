let userInput = prompt("Enter a number:");
let number = Number(userInput);

while (number < 10) {
  userInput = prompt("Enter a number greater than or equal to 10:");
  number = Number(userInput);
}

console.log("Final number entered:", number);
console.log("Type of final input:", typeof number);
