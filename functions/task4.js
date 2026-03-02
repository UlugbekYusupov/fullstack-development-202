function isPalindrome(digit) {
    let tempDigits = digit;
    let reversedNumber = 0;
    while(tempDigits>0) {
        reversedNumber = reversedNumber*10+tempDigits%10;
        tempDigits = Math.floor(tempDigits/10);
    }
    return reversedNumber===digit;
}

console.log(isPalindrome(131));