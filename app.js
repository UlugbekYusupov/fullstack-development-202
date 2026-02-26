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

let n = 15;
let juftSoni = 0;
let toqSoni = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    juftSoni++;
  } else {
    toqSoni++;
  }
}
console.log("Juft sonlar soni: " + juftSoni);
console.log("Toq sonlar soni: " + toqSoni);

let number = 1234;
let reversed = 0;

while (number > 0) {
  let lastDigit = number % 10;
  reversed = reversed * 10 + lastDigit;
  number = Math.floor(number / 10);
}

console.log("Teskari son: " + reversed);

let num = 3852;
let maxDigit = 0;

while (num > 0) {
  let currentDigit = num % 10;

  if (currentDigit > maxDigit) {
    maxDigit = currentDigit;
  }

  num = Math.floor(num / 10);
}

console.log("Eng katta raqam: " + maxDigit);

const students = [
  { name: "David", marks: 80 },
  { name: "Vinoth", marks: 77 },
  { name: "Divya", marks: 88 },
  { name: "Ishitha", marks: 95 },
  { name: "Thomas", marks: 68 },
];

let sum = 0;
students.forEach((student) => {
  sum += student.marks;
});
let average = sum / students.length;

let grade;
if (average < 60) {
  grade = "F";
} else if (average < 70) {
  grade = "D";
} else if (average < 80) {
  grade = "C";
} else if (average < 90) {
  grade = "B";
} else {
  grade = "A";
}

console.log("Average marks:", average.toFixed(2));
console.log("Grade:", grade);
