function isArmstrong(n) {
  const s = String(n);
  const numDigits = s.length;

  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(s[i], 10);
    sum += Math.pow(digit, numDigits);
  }

  return sum === n;
}

const num1 = 153;
const num2 = 9;
const num3 = 370;
const num4 = 123;

console.log(`${num1} armstrong? ${isArmstrong(num1)}`);
console.log(`${num2} armstrong? ${isArmstrong(num2)}`);
console.log(`${num3} armstrong? ${isArmstrong(num3)}`);
console.log(`${num4} armstrong? ${isArmstrong(num4)}`);
