                                                                                            
// challange1
// let number = 15;
// let even = 0;
// let odd = 0;

// for(let i = 1; i <= number; i++)
// {
//     if(i % 2 == 0){
//         even++;
//     } else {
//         odd++;
//     }
// }

// console.log("even = ", even)
// console.log("odd = ", odd)


//chalange2
// let numbers = 1234567890;
// let reverseNumber = 0;

// while (numbers > 0) {
//     reverseNumber = reverseNumber * 10 + (numbers % 10);
//     numbers = Math.floor(numbers / 10);
// }
// console.log(reverseNumber);


//challange3
// let number = 325922;
// let max = 0;

// while (number > 0) {
//     let digit = number % 10;
//     if (digit > max) {
//         max = digit;
//     }

//     number = (number / 10) | 0;
// }

// console.log(max);

//challange4
// let number = 12345;
// let sum = 0;

// while (number > 0){
//     sum = sum + (number % 10);
//     number = (number / 10) | 0;
// }
// console.log(sum);


//challange5

let number = 12345;
let count = 0;

while (number > 0){
    number = (number / 10) | 0;
    count++;
}
console.log(count);


