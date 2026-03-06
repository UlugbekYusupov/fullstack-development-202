//! 2
let exampleNumber2 = 1234;
let reversed = 0;

while (exampleNumber2 > 0) {
  const oxrSon = exampleNumber2 % 10;
  reversed = reversed * 10 + oxrSon;
  exampleNumber2 = Math.floor(exampleNumber2 / 10);
}

console.log(reversed);
