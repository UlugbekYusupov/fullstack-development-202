// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * 5);
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);

// 1

// const minusSon = [-5, -10, -15, -20, 10, 30, 25, 5];

// for (let i = 0; i < minusSon.length; i++){
//     if(minusSon[i] < 0){
//         console.log(minusSon[i], "manfiy son");
//     }else{
//         console.log(minusSon[i], "musbat son");
//     }
// }

// let a = 0;
// let b = -1;
// let c = 4;

// let result;

// if (a >= b && a >= c) {
//     if (b >= c) {
//         result = `${a}, ${b}, ${c}`;
//     } else {
//         result = `${a}, ${c}, ${b}`;
//     }
// } else if (b >= a && b >= c) {
//     if (a >= c) {
//         result = `${b}, ${a}, ${c}`;
//     } else {
//         result = `${b}, ${c}, ${a}`;
//     }
// } else {
//     if (a >= b) {
//         result = `${c}, ${a}, ${b}`;
//     } else {
//         result = `${c}, ${b}, ${a}`;
//     }
// }

// console.log(result)

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i, "juft son");
//   } else {
//     console.log(i, "toq son");
//   }
// }


// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, "FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log(i, "Fizz");
//   } else if (i % 5 === 0) {
//     console.log(i, "Buzz");
//   } else {
//     console.log(i);
//   }
// }


// const uchXonaliSon = 391;

// const yuzlar = Math.floor(uchXonaliSon / 100);
// const onlar = Math.floor(uchXonaliSon / 10) % 10
// const birlik = uchXonaliSon % 10

// const daraja = (yuzlar ** 3) + (onlar ** 3) + (birlik ** 3);

// if (daraja === uchXonaliSon) {
//     console.log(uchXonaliSon, "Armstrong son");
// } else {
//     console.log(uchXonaliSon, `Armstrong son emas - ${daraja}`);
// }