// // Topshiriq 1
// let a = 12;
// let b = 7;

// if (a > b) {
//     console.log("Eng katta son:", a);
// } else if (b > a) {
//     console.log("Eng kichik son:", b);
// } else {
//     console.log("Ikkala son teng");
// }

// // Topshiriq 2
// let x = 3;
// let y = -7;
// let z = 2;

// let kopaytma = x * y * z;

// if (kopaytma > 0) {
//     console.log("Qo'shish belgisi: +");
// } else if (kopaytma < 0) {
//     console.log("Ayirish belgisi: -");
// } else {
//     console.log("Natija 0 ga teng");
// }

// // Topshiriq 3
// let a = 0;
// let b = -1;
// let c = 4;

// let first, second, third;

// if (a >= b && a >= c) {
//     first = a;
//     if (b >= c) {
//         second = b;
//         third = c;
//     } else {
//         second = c;
//         third = b;
//     }
// } else if (b >= a && b >= c) {
//     first = b;
//     if (a >= c) {
//         second = a;
//         third = c;
//     } else {
//         second = c;
//         third = a;
//     }
// } else {
//     first = c;
//     if (a >= b) {
//         second = a;
//         third = b;
//     } else {
//         second = b;
//         third = a;
//     }
// }

// console.log(first + ", " + second + ", " + third);

// // Topshiriq 4
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " Juft son");
//     } else {
//         console.log(i + " Toq son");
//     }
// }

// // Topshiriq 5
// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

// // Topshiriq 6
// for (let son = 100; son <= 999; son++) {

//     let yuzlik = Math.floor(son / 100);          
//     let onlik = Math.floor((son % 100) / 10);    
//     let birlik = son % 10;                       

//     let kubYigindi =
//         yuzlik * yuzlik * yuzlik +
//         onlik * onlik * onlik +
//         birlik * birlik * birlik;

//     if (kubYigindi === son) {
//         console.log(son + " — Armstrong son");
//     }
// }

// // Topshiriq 7 PRACTISE
// Talabalar ro‘yxati (ism va ball)
let talabalar = [
    { ism: "Abdulloh", ball: 80 },
    { ism: "Doston", ball: 77 },
    { ism: "Bexruz", ball: 88 },
    { ism: "Abdulaziz", ball: 95 },
    { ism: "Diyorbek", ball: 68 }
];

for (let i = 0; i < talabalar.length; i++) {

    let ball = talabalar[i].ball;
    let baho = "";

    if (ball < 60) {
        baho = "F";
    } else if (ball < 70) {
        baho = "D";
    } else if (ball < 80) {
        baho = "C";
    } else if (ball < 90) {
        baho = "B";
    } else {
        baho = "A";
    }

    console.log(
        "Talaba: " +
        talabalar[i].ism +
        " | Ball: " +
        ball +
        " | Baho: " +
        baho
    );
}