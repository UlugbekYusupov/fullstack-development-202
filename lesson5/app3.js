function countDigits(n) {
  let count = 0;
  let absNum = Math.abs(n);

  if (absNum === 0) return 1;

  while (absNum > 0) {
    absNum = Math.floor(absNum / 10);
    count++;
  }
  return count;
}

console.log(countDigits(123445));
console.log(countDigits(0));
