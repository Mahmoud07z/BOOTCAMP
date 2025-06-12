// const _ = require("lodash");
// const math = require("./math");

// const sum = math.add(5, 3);
// const product = math.multiply(4, 6);

// console.log(`Sum: ${sum}`);
// console.log(`Product: ${product}`);

// const numbers = [10, 20, 30, 40];
// const mean = _.mean(numbers);
// console.log(`Mean: ${mean}`);

// app.js
const _ = require('lodash');
const { add, multiply } = require('./math.js');

const num1 = 10;
const num2 = 5;

// Using custom math functions
const sum = add(num1, num2);
const product = multiply(num1, num2);

// Using lodash
const numbers = [10, 5, 15, 20];
const maxNumber = _.max(numbers);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Max Number (using lodash): ${maxNumber}`);