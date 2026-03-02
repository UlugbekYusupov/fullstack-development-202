function countDigits(digit) {
    let count = 0;
    while (digit > 0) {
        count++;
        digit = Math.floor(digit/10);
    }
    return count;
}

console.log(countDigits(120));