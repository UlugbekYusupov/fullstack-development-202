// // 1️ Object yaratish

// let car = {
//   brand: "Tesla",
//   model: "Model S",
//   year: 2024,
//   start: function () {
//     console.log("Car is starting...");
//   }
// };

// console.log(car.brand); // Tesla
// car.start(); // "Car is starting..."


// // 2️ new Object() orqali object yaratish

// let person = new Object();
// person.name = "Alice";
// person.age = 25;
// person.greet = function () {
//   return `Hello, my name is ${this.name}`;
// };

// console.log(person.greet()); // "Hello, my name is Alice"


// // 3️ Factory Function

// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
//     }
//   };
// }

// let person1 = createPerson("Alice", 25);
// let person2 = createPerson("Bob", 30);

// console.log(person1.greet()); // "Hi, I'm Alice, and I'm 25 years old."
// console.log(person2.greet()); // "Hi, I'm Bob, and I'm 30 years old."


// // 4️ Constructor Function

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
//   };
// }

// let person1 = new Person("Alice", 25);
// let person2 = new Person("Bob", 30);

// console.log(person1.greet()); // "Hi, I'm Alice, and I'm 25 years old."
// console.log(person2.greet()); // "Hi, I'm Bob, and I'm 30 years old."


// // 5️ Object.create() (Prototype)

// let animal = {
//   type: "Mammal",
//   makeSound() {
//     console.log("Some generic animal sound");
//   }
// };

// let dog = Object.create(animal);
// dog.breed = "Golden Retriever";

// dog.makeSound(); // "Some generic animal sound"
// console.log(dog.type); // "Mammal"


// // 6️ Class ishlatish

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return `Hello, my name is ${this.name}`;
//   }
// }

// let person1 = new Person("Alice", 25);

// console.log(person1.greet()); // "Hello, my name is Alice"


// // 7️ Object.freeze()

// const config = Object.freeze({
//   theme: "dark",
//   version: "1.0.0"
// });

// config.theme = "light"; // No effect, since it's frozen

// console.log(config.theme); // "dark"




// Challenge 1 — Student Grade Management System

// const students = [
//   { name: "Alice", scores: [80, 90, 100] },
//   { name: "Bob", scores: [50, 60, 70] },
//   { name: "Charlie", scores: [30, 40, 20] }
// ];

// function studentInfo(students) {

//   let topName = "";
//   let topAverage = 0;

//   for (let i = 0; i < students.length; i++) {

//     let sum = 0;

//     for (let j = 0; j < students[i].scores.length; j++) {
//       sum = sum + students[i].scores[j];
//     }

//     let average = sum / students[i].scores.length;

//     if (average >= 50) {
//       console.log(students[i].name + " passed with average: " + average);
//     } else {
//       console.log(students[i].name + " failed with average: " + average);
//     }

//     if (average > topAverage) {
//       topAverage = average;
//       topName = students[i].name;
//     }
//   }

//   console.log(topName + " has the highest average: " + topAverage);
// }

// studentInfo(students);