// const add = require("./operate");
// const sub = require("./operate");
// console.log(add(3, 4));
// When we call the function,these passed numbers are called arguments.
// console.log(add(2, 1));
// console.log(sub(2, 1));

// Suppose you want to use all the functions from the other directory
// const operate = require("./operate");
// console.log(operate);

// console.log(operate.add(2, 5));
// console.log(operate.sub(2, 1));

// You can do this too
const { add, sub } = require("./operate");

console.log(add(2, 5));
