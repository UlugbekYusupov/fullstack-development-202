// // console.log("5"+5)
// // console.log("5"-5)
// // console.log("5"*"2")
// // console.log("10"/2)
// // console.log(5+ true)
// // console.log("10"-true)
// // console.log("5"+true)
// // console.log(5+null)
// // console.log(5+undefined)


           
// let number = 124;

// let evenqiymat = 0;
// let oddqiymat = 0;

// for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//         evenqiymat++;
//     } else {
//         oddqiymat++;
//     }
// }

// console.log("Even numbers count: " + evenqiymat);
// console.log("Odd numbers count: " + oddqiymat);




// 2----------------------------------------misol


// let num = 9865;
// let originalNum = num;
// let reversed = 0;

// if (num < 0) {
//     num = num * -1;  
// }


// while (num > 0) {
//     let lastDigit = num % 10;        
//     reversed = reversed * 10 + lastDigit;  
//     num = Math.floor(num / 10);       
// }


// if (originalNum < 0) {
//     reversed = reversed * -1;
// }

// console.log("Original number: " + originalNum);
// console.log("Reversed number: " + reversed);



// 3-------------------------------misol


// let son = 1234;
// let maxRaqam = 0;
// let originalSon = son;


// if (son < 0) {
//     son = son * -1;
// }


// while (son > 0) {
//     let oxirgiRaqam = son % 10;         
//     if (oxirgiRaqam > maxRaqam) {       
//         maxRaqam = oxirgiRaqam;         
//     }
//     son = Math.floor(son / 10);         
// }

// console.log(originalSon + " sonining eng katta raqami: " + maxRaqam);


// 4--------------------------misol


// let son = 1234567;
// let originalSon = son;
// let yigindi = 0;

// if (son < 0) {
//     son = son * -1;
// }

// while (son > 0) {
//     let oxirgiRaqam = son % 10;        
//     yigindi = yigindi + oxirgiRaqam;    
//     son = Math.floor(son / 10);        
// }

// console.log(originalSon + " raqamlar yig'indisi = " + yigindi);


// 5------------------------misol

let son = 122213;
let originalSon = son;
let uzunlik = 0;


if (son < 0) {
    son = son * -1;
}


if (son === 0) {
    uzunlik = 1;
} else {
    while (son > 0) {
        son = Math.floor(son / 10);  
        uzunlik++;                   
    }
}

console.log(originalSon + " sonining uzunligi: " + uzunlik + " ta raqam");


