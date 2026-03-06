function last(arr, n = null) {
  if (n === undefined) {
    return arr[arr.length - 1];
  }

  if (n > arr.length) {
    n = arr.length;
  }

  var newArr = arr.reverse();
  return newArr.slice(-n);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
