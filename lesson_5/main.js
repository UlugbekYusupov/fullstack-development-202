// // Topshiriq 1
// function greet(name) {
//     return "Hello, " + name + "!";
// }

// console.log(greet("Ali"));


// // Topshiriq 2
// function isPrime(n) {

//     if (n <= 1) {
//         return false;
//     }

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPrime(7));  
// console.log(isPrime(10)); 


// // Topshiriq 3
// function countDigits(n) {

//     let count = 0;

//     n = Math.abs(n); 

//     while (n > 0) {
//         count++;
//         n = Math.floor(n / 10);
//     }

//     return count;
// }

// console.log(countDigits(12345)); 


// // Topshiriq 4
// function isPalindrome(n) {

//     let k = n;
//     let s = 0;

//     while (n > 0) {
//         s = s * 10 + n % 10;
//         n = Math.floor(n / 10);
//     }

//     return k === s;
// }

// console.log(isPalindrome(121)); 
// console.log(isPalindrome(123)); 


// // Topshiriq 5
// function isArmstrong(n) {

//     let original = n;
//     let sum = 0;
//     let digits = 0;

//     let temp = n;
//     while (temp > 0) {
//         digits++;
//         temp = Math.floor(temp / 10);
//     }

//     temp = n;
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += digit ** digits;
//         temp = Math.floor(temp / 10);
//     }

//     return sum === original;
// }

// console.log(isArmstrong(153)); 
// console.log(isArmstrong(123)); 


// // Topshiriq 6
// function createCounter(start) {

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

// const counter = createCounter(10);

// counter.increment();
// counter.increment();
// counter.decrement();

// console.log(counter.getCount()); // 11


// // // Topshiriq 7
// function once(fn) {

//     let executed = false; 

//     return function() {

//         if (!executed) {
//             executed = true;
//             return fn();
//         }

//         console.log("Function already executed!");
//     };
// }

// function sayHello() {
//     console.log("Hello!");
// }

// const runOnce = once(sayHello);

// runOnce(); 
// runOnce(); 
// runOnce(); 


// // // Topshiriq 8
// function lazyAdder(a) {

//     return function(b) {
//         return a + b;
//     };
// }

// const add5 = lazyAdder(5);

// console.log(add5(10)); // 15
// console.log(add5(20)); // 25


// // Debounce Function 1
// function debounce(fn, delay) {

//     let timer = null; 

//     return function() {

//         if (timer !== null) {
//             clearTimeout(timer);
//         }

//         timer = setTimeout(function() {
//             fn();
//         }, delay);
//     };
// }


// function salom() {
//     console.log("Salom ishladi");
// }

// let yangiFunksiya = debounce(salom, 1000);

// yangiFunksiya();
// yangiFunksiya();
// yangiFunksiya();


// // Throttle Function 2
// function throttle(fn, interval) {

//     let oxirgiVaqt = 0;

//     return function() {

//         let hozir = Date.now();

//         if (hozir - oxirgiVaqt >= interval) {
//             oxirgiVaqt = hozir;
//             fn();
//         }
//     };
// }


// function yoz() {
//     console.log("Ishladi");
// }

// let yangi = throttle(yoz, 2000);

// setInterval(yangi, 500);


// Task Scheduler 3
function taskScheduler() {

    let royxat = []; 

    return {

        schedule: function(task, delay) {

            let id = setTimeout(function() {
                task();
            }, delay);

            royxat.push(id);
        },

        cancelAll: function() {

            for (let i = 0; i < royxat.length; i++) {
                clearTimeout(royxat[i]);
            }

            royxat = [];
            console.log("Hamma vazifalar bekor qilindi");
        }
    };
}


let scheduler = taskScheduler();

scheduler.schedule(function() {
    console.log("1-vazifa");
}, 2000);

scheduler.schedule(function() {
    console.log("2-vazifa");
}, 4000);

setTimeout(function() {
    scheduler.cancelAll();
}, 1000);