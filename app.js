// 1 Function declaration 
// function sum (a,b) {
//     return a + b;
// }

// sum(2,3)


// 2 function expression 
// let sum = function (a,b ) {
//     return a + b;
// }
// sum(2,3)


// 3 arrow function 
// let sum = (a, b) => {
//     return a + b;
// }
// sum(2,3)

// 4 iife function 
// (function (a, b) {
//     return a + b ;

// })(2,3)

// 5 function constructor 
// let sum = new Function(
//     'a',
//     'b',
//     'return a + b'
// );
// sum(2,3)


// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n === 2) return true;
//     if (n % 2 === 0) return false;

//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(7));  
// console.log(isPrime(10)); 
// console.log(isPrime(2));  
// console.log(isPrime(1));  



// function countDegits(n) {
//     if (n === 0) return 1;
//     let count = 0;  
//     while (n > 0) {
//         n = (n / 10);
//         count++;
//     }
//     return count;
// }
// console.log(countDegits(12345));
// console.log(countDegits(0));
// console.log(countDegits(9));



// function isPalindrome(n) {
//     if (n < 0) return false;

//     let haqiqiy = n;
//     let teskari = 0;

//     while (haqiqiy > 0) { 
//         const qoldiq = haqiqiy % 10;    
//         teskari = teskari * 10 + qoldiq;
//         haqiqiy = Math.floor(haqiqiy / 10);
//     }
//     return n === teskari;

// }

// console.log(isPalindrome(121));   
// console.log(isPalindrome(12321)); 
// console.log(isPalindrome(12345)); 
// console.log(isPalindrome(1));     
// console.log(isPalindrome(0));     
// console.log(isPalindrome(-121));  
// console.log(isPalindrome(1221));   




//     function createCounter(start) {
//     let count = start;
    
//     return {
//         increment: function() {
//             count++;
//         },
//         decrement: function() {
//             count--;
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// }

// const counter = createCounter(5);
// console.log(counter.getCount()); 
// counter.increment();
// console.log(counter.getCount()); 
// counter.increment();
// console.log(counter.getCount()); 
// counter.decrement();
// console.log(counter.getCount()); 

// const readline = require('readline');

// function orderFood() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     let userData = {};

//     rl.question("Ismingizni kiriting: ", (name) => {
//         userData.name = name;
        
//         rl.question("Manzilingizni kiriting: ", (address) => {
//             userData.address = address;
            
//             rl.question("Nima buyurtma qilmoqchisiz? ", (food) => {
//                 userData.food = food;
                
//                 let result = `Dear ${userData.name}, your ordered food ${userData.food} will be ready in 15 minutes and will be delivered to your address: ${userData.address}`;
                
//                 console.log("\n" + result);
//                 rl.close();
//             });
//         });
//     });
// }

// orderFood();

// function lazyAdder(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// const add5 = lazyAdder(5);
// console.log(add5(10));  
// console.log(add5(20));  

// const add10 = lazyAdder(10);
// console.log(add10(15)); 
// console.log(add10(30)); 

