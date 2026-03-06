//! 3
const prompt = require("prompt-sync")();

let numbers = [];

while (true) {
  let result = Number(prompt("Raqam kiriting (to'xtash uchun 0): "));

  if (result === 0) break;

  numbers.push(result);
}

numbers.sort((a, b) => a - b);

console.log(numbers.reverse());
