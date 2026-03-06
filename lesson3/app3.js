//! 3
let maxNumber = 0;
let exampleNumber3 = 1234;

while (exampleNumber3 > 0) {
  const oxrSon = exampleNumber3 % 10;
  if (oxrSon > maxNumber) maxNumber = oxrSon;
  exampleNumber3 = Math.floor(exampleNumber3 / 10);
}
console.log(maxNumber);
