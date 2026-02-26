
// challange 1

// a = 5;
// b = 9;

// if (a > b) {
//     console.log("Katta son ", a)
// } else {
//     console.log("Katta son ", b)
// }

// challange 2

// num1 = 5;
// num2 = -4;
// num3 = 1;

// if((num1 * num2 * num3) > 0){
//     console.log("ishora musbat")
// } else {
//     console.log("ishora manfiy")
// }


// challange 3

// let a = +prompt("1-son = ");
// let b = +prompt("2-son = ");
// let c = +prompt("3-son = ");
// let min = 0;
// let max = 0;
// let mid = 0;
// if (a >= b && a >= c) {
//     max = a;

//     if (b >= c) {
//         mid = b;
//         min = c;
//     } else {
//         mid = c;
//         min = b;
//     }

// } else if (b >= a && b >= c) {
//     max = b;

//     if (a >= c) {
//         mid = a;
//         min = c;
//     } else {
//         mid = c;
//         min = a;
//     }

// } else {
//     max = c;

//     if (a >= b) {
//         mid = a;
//         min = b;
//     } else {
//         mid = b;
//         min = a;
//     }
// }

// console.log(max, mid, min);


// challange 4

// for (let i = 0; i <= 15; i++)
// {
//     if(i % 2 == 0){
//         console.log(i, " even")
//     } else {
//         console.log(i, " odd")
//     }
// }


// challange 5

// for (let i = 1; i <= 100; i++) {

//   if (i % 3 === 0 && i % 5 === 0)
//   {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) 
//     {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }

// }


// challange 6 

// let num = +prompt("3 xonali son = ")

// xona1 = 0;
// xona2 = 0;
// xona3 = 0;

// xona1 = num % 10;
// xona2 = Math.floor(num / 10) % 10;
// xona3 = Math.floor(num / 100);
// result = Math.pow(xona1,3) + (Math.pow(xona2,3) + (Math.pow(xona3,3)))

// if(result == num){
//     console.log(result)
// }else{
//     console.log("xato")
// }


// challange 7

let David = 90;
let Vinoth = 77;
let Divya = 88;
let Ishitha = 95;
let Thomas = 68;

let average = (David + Vinoth + Divya + Ishitha + Thomas) / 5;

let range;

if (average < 60){
    console.log("F")
} else if (average < 70){
    console.log("D")
} else if (average < 80){
    console.log("C")
} else if (average < 90){
    console.log("B")
} else {
    console.log("A")
}