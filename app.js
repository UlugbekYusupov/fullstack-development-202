function first(arr, n) {

  if (n === undefined) {
    return arr[0];
  }

  if (n < 0) {
    return [];
  }

  return arr.slice(0, n);
}

// Misollar
console.log(first([7, 9, 0, -2])); 
console.log(first([], 0));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

function last(arr, n) {

  if (n === undefined) {
    return arr[arr.length - 1];
  }

  return arr.slice(Math.max(arr.length - n, 0));
}

// Misollar
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join());