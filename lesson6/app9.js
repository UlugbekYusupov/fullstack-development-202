let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

let result = [];

let maxLength;

if (array1.length > array2.length) {
  maxLength = array1.length;
} else {
  maxLength = array2.length;
}

for (let i = 0; i < maxLength; i++) {
  let a = array1[i] || 0;
  let b = array2[i] || 0;

  result.push(a + b);
}

console.log(result);
