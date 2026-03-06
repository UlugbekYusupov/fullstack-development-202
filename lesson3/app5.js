//! 5
let exampleNumber5 = 12345;
let uzunlik = 0;

while (exampleNumber5 > 0) {
  uzunlik++;
  exampleNumber5 = Math.floor(exampleNumber5 / 10);
}
console.log(uzunlik);
