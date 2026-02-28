// function greet1(name) {
//     return "Hello, " + name + "!";
// }
//
// const greet2 = function (name) {
//     return "Hello, " + name + "!";
// };
//
// const greet3 = (name) => {
//     return `Hello, ${name}!`;
// };
//
// const greet4 = name => `Hello, ${name}!`;
//
// let greet5;
// greet5 = function (name) {
//     return "Hello, " + name + "!";
// };


// 2
// function isPrime(n) {
//     if (n <= 1) return false;
//
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isPrime(13));

// 3
// function countDigits(n) {
//     n = Math.abs(n);
//     let count = 0;
//
//     if (n === 0) return 1;
//
//     for (; n > 0; n = Math.floor(n / 10)) {
//         count++;
//     }
//
//     return count;
// }

// 4
// function isPalindrome(n) {
//     let original = n;
//     let reverse = 0;
//
//     for (; n > 0; n = Math.floor(n / 10)) {
//         let digit = n % 10;
//         reverse = reverse * 10 + digit;
//     }
//
//     return original === reverse;
// }

// 5
// function isArmstrong(n) {
//     let original = n;
//     let digits = 0;
//     let temp = n;
//
//     for (; temp > 0; temp = Math.floor(temp / 10)) {
//         digits++;
//     }
//
//     let sum = 0;
//     temp = n;
//
//     for (; temp > 0; temp = Math.floor(temp / 10)) {
//         let digit = temp % 10;
//         sum += digit ** digits;
//     }
//
//     return sum === original;
// }

// 6
// function createCounter(start) {
//     let count = start;
//
//     return {
//         increment() {
//             count++;
//         },
//         decrement() {
//             count--;
//         },
//         getCount() {
//             return count;
//         }
//     };
// }

// const counter = createCounter(10);
//
// counter.increment();
// counter.increment();
// counter.decrement();
//
// console.log(counter.getCount());

// 7
// function once(fn) {
//     let called = false;
//
//     return function (...args) {
//         if (!called) {
//             called = true;
//             return fn(...args);
//         }
//     };
// }

// function sayHello() {
//     console.log("Hello!");
// }
//
// const sayHelloOnce = once(sayHello);
//
// sayHelloOnce();
// sayHelloOnce();
// sayHelloOnce();

// 8
// function lazyAdder(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// const add5 = lazyAdder(5);
//
// console.log(add5(10));
// console.log(add5(20));

// 9
// function debounce(fn, delay) {
//     let timerId = null;
//
//     return function (...args) {
//         const ctx = this;
//
//         if (timerId !== null) clearTimeout(timerId);
//
//         timerId = setTimeout(() => {
//             fn.apply(ctx, args);
//         }, delay);
//     };
// }

// const onSearch = debounce((q) => console.log("Search:", q), 500);
//
// onSearch("a");
// onSearch("ab");
// onSearch("abc");

// 10
// function throttle(fn, interval) {
//     let lastTime = 0;
//
//     return function (...args) {
//         const now = Date.now();
//         const ctx = this;
//
//         if (now - lastTime >= interval) {
//             lastTime = now;
//             fn.apply(ctx, args);
//         }
//     };
// }

// const onScroll = throttle(() => console.log("scroll"), 1000);
//
// onScroll();
// onScroll();

// 11
// function taskScheduler() {
//     const timers = [];
//
//     return {
//         schedule(task, delay) {
//             const id = setTimeout(() => {
//                 task();
//             }, delay);
//
//             timers.push(id);
//             return id;
//         },
//
//         cancelAll() {
//             for (let i = 0; i < timers.length; i++) {
//                 clearTimeout(timers[i]);
//             }
//             timers.length = 0;
//         }
//     };
// }

// const scheduler = taskScheduler();
//
// scheduler.schedule(() => console.log("Task 1"), 1000);
// scheduler.schedule(() => console.log("Task 2"), 2000);
//
// setTimeout(() => {
//     scheduler.cancelAll();
//     console.log("Canceled all tasks");
// }, 1500);