// let a = [1,2,3,4,-5,6,7,-8,9,10,-7,-3,-1,0]

// for (let i of a) {
//     if (i < 0) {
//         console.log(i);
//     }
// }

// for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//         if (a[i] < a[j]) {
//             let temp = a[i];
//             a[i] = a[j];
//             a[j] = temp;
//         }
//     }
// }

// console.log(a);

// for (let i of a) {
//     if (i % 2 == 0) {
//         console.log(`${i} is even`);
//     }
//     else {
//         console.log(`${i} is odd`);
//     }
// }

// let b = 0

// while (b < 100) {
//     if (b % 3 == 0 && b % 5 == 0) {
//         console.log(`${b} is divisible by both 3 and 5`);
//     }
//     else if (b % 3 == 0) {
//         console.log(`${b} is divisible by 3`);
//     }
//     else if (b % 5 == 0) {
//         console.log(`${b} is divisible by 5`);
//     }
//     b++;
// }

// let son = prompt("Enter a number:");
// let n = parseInt(son);
// let b = n;               
// let strong = 0;
// let len = son.length;          

// while (b > 0) {
//     let oxirgi = b % 10;
//     strong += oxirgi ** len;
//     b = Math.floor(b / 10);
// }

// if (strong === n) {
//     console.log("Bu son Armstrong son");
// } else {
//     console.log("Bu son Armstrong son emas");
// }
