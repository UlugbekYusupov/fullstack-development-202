//! 6
let n = 1000;

for (let i = 1; i <= n; i++) {
  let number = i;
  let temp = i;
  let digitCount = 0;
  let sum = 0;

  while (temp > 0) {
    digitCount++;
    temp = Math.floor(temp / 10);
  }

  temp = number;

  while (temp > 0) {
    let digit = temp % 10;
    sum = sum + digit ** digitCount;
    temp = Math.floor(temp / 10);
  }

  if (sum === number) {
    console.log(number);
  }
}
