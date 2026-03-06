//! 4
let exampleNumber4 = 1234;
let yigindi = 0;

while (exampleNumber4 > 0) {
  const oxrSon = exampleNumber4 % 10;
  yigindi += oxrSon;
  exampleNumber4 = Math.floor(exampleNumber4 / 10);
}
console.log(yigindi);
