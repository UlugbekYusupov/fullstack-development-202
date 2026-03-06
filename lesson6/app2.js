function last(arr, n) {

  if (n === undefined) {
    return arr[arr.length - 1];
  }

  if (n > arr.length) {
    n = arr.length;
  }

  let result = [];

  for (let i = arr.length - n; i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));