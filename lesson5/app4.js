function isPalindrome(n) {
  const str = String(n);

  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

console.log(`palindrome? ${isPalindrome(121)}`);
console.log(`palindrome? ${isPalindrome(-121)}`);
console.log(`palindrome? ${isPalindrome(1234)}`);
console.log(`palindrome? ${isPalindrome(1221)}`);
