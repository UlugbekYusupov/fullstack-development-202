// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 0;
// while (a < 10) {
//   console.log(a);
//   a++;
// }

// let b = 0;
// do {
//   console.log(b);
//   b++;
// } while (b < 10);

// const arr = [1, 2, 3, 4, 5];

// for (const element of arr) {
//   console.log(element);
// }

// const user = {
//   name: "Ulugbek",
//   age: 29,
//   country: "Uzbekistan",
// };

// for (const key in user) {
//   const element = user[key];
//   console.log(element);
// }

// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * 5);
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);

// let n = 15;
// let juftSoni = 0;
// let toqSoni = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     juftSoni++;
//   } else {
//     toqSoni++;
//   }
// }
// console.log("Juft sonlar soni: " + juftSoni);
// console.log("Toq sonlar soni: " + toqSoni);

// let number = 1234;
// let reversed = 0;

// while (number > 0) {
//   let lastDigit = number % 10;
//   reversed = reversed * 10 + lastDigit;
//   number = Math.floor(number / 10);
// }

// console.log("Teskari son: " + reversed);

// let num = 3852;
// let maxDigit = 0;

// while (num > 0) {
//   let currentDigit = num % 10;

//   if (currentDigit > maxDigit) {
//     maxDigit = currentDigit;
//   }

//   num = Math.floor(num / 10);
// }

// console.log("Eng katta raqam: " + maxDigit);

// const students = [
//   { name: "David", marks: 80 },
//   { name: "Vinoth", marks: 77 },
//   { name: "Divya", marks: 88 },
//   { name: "Ishitha", marks: 95 },
//   { name: "Thomas", marks: 68 },
// ];

// let sum = 0;
// students.forEach((student) => {
//   sum += student.marks;
// });
// let average = sum / students.length;

// let grade;
// if (average < 60) {
//   grade = "F";
// } else if (average < 70) {
//   grade = "D";
// } else if (average < 80) {
//   grade = "C";
// } else if (average < 90) {
//   grade = "B";
// } else {
//   grade = "A";
// }

// console.log("Average marks:", average.toFixed(2));
// console.log("Grade:", grade);

// 1-topshiriq
// function sum(a, b) {
//   return a + b;
// }
// sum(2, 3);
// //5

// let sum = function (a, b) {
//   return a + b;
// };
// sum(2, 3);
// //5

// let sum = (a, b) => {
//   return a + b;
// };
// sum(
//   2,
//   3,
// )(
//   //5

//   function (a, b) {
//     return a + b;
//   },
// )(2, 3);
// //5

// let sum = new Function("a", "b", "return a + b");
// sum(2, 3);
// //5

// function outer() {
//   let firsname = "Dostonbek";
//   function inner() {
//     const fullname = firsname + " Nabiyev";
//     console.log(fullname);
//   }
//   inner();
// }
// outer();

// 2-topshiriq

function tob(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// 3-topshiriq
function countDigits(n) {
  n = Math.abs(n); // manfiy sonlar uchun
  return n.toString().length;
}

// 4-topshiriq
function isPalindrome(n) {
  n = Math.abs(n);
  let str = n.toString();
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

// 5-topshiriq
function isArmstrong(n) {
  let str = Math.abs(n).toString();
  let power = str.length;

  let sum = str.split("").reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), power);
  }, 0);

  return sum === Math.abs(n);
}

// 6 - topshiriq
function createCounter(start = 0) {
  let count = start;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    },
  };
}

// 7 - topshiriq

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

// 8 - topshiriq
function lazyAdder(a) {
  return function (b) {
    return a + b;
  };
}

// 1 - bonus
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// 2 - bonus
function throttle(fn, interval) {
  let lastTime = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastTime >= interval) {
      lastTime = now;
      fn(...args);
    }
  };
}
// 3- bonus
function taskScheduler() {
  let tasks = [];

  return {
    schedule(task, delay) {
      const id = setTimeout(task, delay);
      tasks.push(id);
    },

    cancelAll() {
      tasks.forEach((id) => clearTimeout(id));
      tasks = [];
    },
  };
}
