//1-misol 

// let a = 12
// let b = -13
// let c = 1

// if (a < 0) {
//     console.log(a)
// } else if (b < 0){
//     console.log(b)
// }else(c) 

// 2-misol

// let a = 15;
// let b = 10;
// let c = -20;

// if (a >= b && a >= c) {

//     console.log(a);
//     if (b >= c) {
//         console.log(b);
//         console.log(c);
//     } else {
//         console.log(c);
//         console.log(b);
//     }
// } 
// else if (b >= a && b >= c) {
//     console.log(b);
//     if (a >= c) {
//         console.log(a);
//         console.log(c);
//     } else {
//         console.log(c);
//         console.log(a);
//     }
// } 
// else {
//     console.log(c);
//     if (a >= b) {
//         console.log(a);
//         console.log(b);
//     } else {
//         console.log(b);
//         console.log(a);
//     }
// }

// 3-misol 

// for ( let i = 0 ; i <= 15 ; i++) {
//     if (i % 2 == 0) {
//         console.log(i + "bu juft son")
//     } else {
//         console.log(i + "bu toq son")
//     }
// }

//4-misol

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 != 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0 && i % 3 != 0) {
//         console.log("Buzz");
//     } else if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else {
//         console.log(i); 
//     }
// }
//  5-misol

for (let i = 100; i <= 999; i++) {
    let yuzlik = Math.floor(i / 100);
    let onlik = Math.floor((i % 100) / 10);
    let birlik = i % 10;
    let umumiy = (yuzlik * yuzlik * yuzlik) + (onlik * onlik * onlik) + (birlik * birlik * birlik);
    
    if (umumiy === i) {
        console.log(i + " - Armstrong soni");
    }
}