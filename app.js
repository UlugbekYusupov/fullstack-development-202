// let n = Number(prompt("Son kiriting:"));

// let juftlar = [];
// let toqlar = [];

// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         juftlar.push(i);
//     } else {
//         toqlar.push(i);
//     }
// }

// console.log("Juft sonlar:", juftlar.join(", "));
// console.log("Toq sonlar:", toqlar.join(", "));


// let n = 1234;
// let reversed = 0;

// while (n > 0){
//     let four = n%10;
//     reversed = reversed * 10 +four;
//     n = Math.floor(n/10);
// }
// console.log(reversed);


// let n = 78945;  
// let max = 0;
// while (n > 0) {
//     let digit = n % 10;

//     if (digit > max) {   
//         max = digit;
//     }

//     n = Math.floor(n / 10);
// }

// console.log("Eng katta raqam:", max);


// let n = 53827;
// let sum = 0;

// while (n > 0) {

//     let digit = n % 10;
//     sum = sum + digit;    

//     n = Math.floor(n / 10);
// }

// console.log("Raqamlar yig'indisi:", sum);


// let n = 53827;
// let count = 0;

// if (n === 0) {
//     count = 1;
// }

// while (n > 0) {
//     n = Math.floor(n / 10);
//     count = count + 1; 
// }

// console.log("Raqamlar soni:", count);


for (let i = 0; i <10; i++){
    console.log(i)
}

// let a = 0;
// while (a < 10){
//     console.log(a)
//     a++;
// }


// let a = 10;
// let b = 20;

// if (a > b) {    
//     console.log("Max : ",a);
// } else {
//     console.log("Max : ",b);
// }

let a = [-1, 2, 3, -4, 5]
let sum = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        sum += 1;

    }
}
console.log("Manfiy sonlar: ", sum," ta");