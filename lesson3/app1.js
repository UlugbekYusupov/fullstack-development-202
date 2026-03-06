//! 1
const inputNumber = 10;
let juft = 0;
let toq = 0;
for (let i = 1; i <= inputNumber; i++) {
  if (i % 2 == 0) juft++;
  else toq++;
}
console.log("juftlar: " + juft);
console.log("toqlar: " + toq);
