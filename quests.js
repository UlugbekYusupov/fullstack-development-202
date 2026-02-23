// //1
// // console.log("5" + 5);
// // //2
// // console.log("5" - 5);
// // //3
// // console.log("5" * "2");
// // //4
// // console.log("10" / 2);
// // //5
// // console.log(5 + true);
// // //6
// // console.log("10" - true);
// // //7
// // console.log("5"-true);
// // //8
// // console.log(5+null);
// // //9
// // console.log(5+undefined);
//
// //lesson 2
//
// //task 1
// //quest 1
// let n = 22
// let even = Math.floor(n/2);
// let odd = n-even;
//
// console.log(odd)
// console.log(even)
//
// //quest 2
// let num = 123;
// let reversed = num.toString().split("").reverse().join("");
//
// console.log(reversed);
// //quest 3
// let numbers = [3, 7, 2, 9, 5];
//
// let max = numbers[0];
// let min = numbers[0];
//
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }
//
// console.log("Max:", max);
// console.log("Min:", min);
//
// console.log("O'zbekiston letzzzzz gouuuuuu")
// for(let i = 1; i < numbers.length; i++){
//     if(numbers[i] % 2 == 0){
//         numbers[i] += juft;
//     }
//     if(numbers[i] % 2 != 0){
//         numbers[i] += toq;
//     }
// }


const n = 10;

let evenCount = 0;
let oddCount = 0;

for (let num = 1; num <= n; num++) {
    num % 2 === 0 ? evenCount++ : oddCount++;
}

console.log("Juft:", evenCount);
console.log("Toq:", oddCount);



let number = 1234;
let reversedNumber = 0;

while (number > 0) {
    reversedNumber = reversedNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
}

console.log(reversedNumber);

let num1 = 1234;
let maxDigit = 0;

while (num1 > 0) {
    const digit = num1 % 10;
    if (digit > maxDigit) maxDigit = digit;
    num1 = Math.floor(num1 / 10);
}

console.log(maxDigit);


let num2 = 1234;
let sum = 0;

while (num2 > 0) {
    sum += num2 % 10;
    num2 = Math.floor(num2 / 10);
}

console.log(sum);let num2 = 1234;
let sum = 0;

while (num2 > 0) {
    sum += num2 % 10;
    num2 = Math.floor(num2 / 10);
}

console.log(sum);

let num3 = 12345;
let digitCount = 0;

while (num3 > 0) {
    digitCount++;
    num3 = Math.floor(num3 / 10);
}

console.log(digitCount);