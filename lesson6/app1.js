function first(arr, n = null) {
  if (arr.length === 0) {
    return [];
  } else if (n < 0) {
    return n;
  } else if (n > arr.length) {
    n = arr.length;
  }
  return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
