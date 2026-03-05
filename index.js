// let a = 3;
// let b = 15;

// let juftCount = 0;
// let toqCount = 0;


// let start = Math.min(a, b);
// let end = Math.max(a, b);

// for (let i = start + 1; i < end; i++) {

//     if (i % 2 === 0) {
//         juftCount++;
//     } else {
//         toqCount++;
//     }

// }

// console.log("Juft sonlar soni:", juftCount);
// console.log("Toq sonlar soni:", toqCount);

// let a = 10;
// let b = 25;

// if (a > b) {
//   console.log("Largest number is: " + a);
// } else if (b > a) {
//   console.log("Largest number is: " + b);
// } else {
//   console.log("Both numbers are equal");
// }



// let x = 3;
// let y = -2;
// let z = 2;

// let product = x * y * z;

// if (product > 0) {
//   alert("The sign is +");
// } else if (product < 0) {
//   alert("The sign is -");
// } else {
//   alert("The sign is 0");
// }



// let aa = 0;
// let bb = -1;
// let c = 4;

// if (aa >= bb && a >= c) {
//   if (bb >= c) {
//     alert(aa + ", " + bb + ", " + c);
//   } else {
//     alert(aa + ", " + c + ", " + bb);
//   }
// } else if (bb >= aa && bb >= c) {
//   if (aa >= c) {
//     alert(bb + ", " + aa + ", " + c);
//   } else {
//     alert(bb + ", " + c + ", " + aa);
//   }
// } else {
//   if (aa >= bb) {
//     alert(c + ", " + aa + ", " + bb);
//   } else {
//     alert(c + ", " + bb + ", " + aa);
//   }
// }





// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }





// for (let i = 1; i <= 100; i++) {

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } 
//   else if (i % 3 === 0) {
//     console.log("Fizz");
//   } 
//   else if (i % 5 === 0) {
//     console.log("Buzz");
//   } 
//   else {
//     console.log(i);
//   }

// }



// for (let num = 100; num <= 999; num++) {

//   let hundreds = Math.floor(num / 100);
//   let tens = Math.floor((num % 100) / 10);
//   let ones = num % 10;

//   let sum = (hundreds ** 3) + (tens ** 3) + (ones ** 3);

//   if (sum === num) {
//     console.log(num + " is an Armstrong number");
//   }

// }


// let a = 3;
// let b = 15;

// let juftCount = 0;
// let toqCount = 0;


// let start = Math.min(a, b);
// let end = Math.max(a, b);

// for (let i = start + 1; i < end; i++) {

//     if (i % 2 === 0) {
//         juftCount++;
//     } else {
//         toqCount++;
//     }

// }

// console.log("Juft sonlar soni:", juftCount);
// console.log("Toq sonlar soni:", toqCount);

// let a = 10;
// let b = 25;

// if (a > b) {
//   console.log("Largest number is: " + a);
// } else if (b > a) {
//   console.log("Largest number is: " + b);
// } else {
//   console.log("Both numbers are equal");
// }



// let x = 3;
// let y = -2;
// let z = 2;

// let product = x * y * z;

// if (product > 0) {
//   alert("The sign is +");
// } else if (product < 0) {
//   alert("The sign is -");
// } else {
//   alert("The sign is 0");
// }



// let aa = 0;
// let bb = -1;
// let c = 4;

// if (aa >= bb && a >= c) {
//   if (bb >= c) {
//     alert(aa + ", " + bb + ", " + c);
//   } else {
//     alert(aa + ", " + c + ", " + bb);
//   }
// } else if (bb >= aa && bb >= c) {
//   if (aa >= c) {
//     alert(bb + ", " + aa + ", " + c);
//   } else {
//     alert(bb + ", " + c + ", " + aa);
//   }
// } else {
//   if (aa >= bb) {
//     alert(c + ", " + aa + ", " + bb);
//   } else {
//     alert(c + ", " + bb + ", " + aa);
//   }
// }





// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }





// for (let i = 1; i <= 100; i++) {

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } 
//   else if (i % 3 === 0) {
//     console.log("Fizz");
//   } 
//   else if (i % 5 === 0) {
//     console.log("Buzz");
//   } 
//   else {
//     console.log(i);
//   }

// }



// for (let num = 100; num <= 999; num++) {

//   let hundreds = Math.floor(num / 100);
//   let tens = Math.floor((num % 100) / 10);
//   let ones = num % 10;

//   let sum = (hundreds ** 3) + (tens ** 3) + (ones ** 3);

//   if (sum === num) {
//     console.log(num + " is an Armstrong number");
//   }

// }


// function sum (a, b){
//     return a + b
// }

// sum(2, 3)


// function first(arr, n) {
//     if (n === undefined) return arr[0];
//     if (arr.length === 0) return [];
//     if (n < 0) return -3;
//     return arr.slice(0, n);
// }

// console.log(first([2, 3, 4, 6, 7], 3));



// function last(arr, n) {
//     if (n === undefined) return arr[arr.length - 1];
//     return arr.slice(-n);
// }

// console.log(last(5, 54, 7, 3, 8, 3, 9,));



let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(",--> "));
