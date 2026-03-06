function first(arr, n) {

  if (arr.length === 0) {
    return [];
  }

  if (n === undefined) {
    return arr[0];
  }

  if (n < 0) {
    return n;
  }

  if (n > arr.length) {
    n = arr.length;
  }

  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));