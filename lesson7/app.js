// let car = {
//   brand: "Tesla",
//   model: "Model S",
//   year: 2024,
//   start: function () {
//     console.log("Car is starting...");
//   },
// };

// console.log(car.brand);
// car.start();

// let person = new Object();
// person.name = "Alice";
// person.age = 25;
// person.greet = function () {
//   return `Hello, my name is ${this.name}`;
// };
// console.log(person.greet());

// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       return `Hi, I'm ${this.name}, and I'm ${this.age} years old`;
//     },
//   };
// }

// let person1 = createPerson("Alice", 25);
// let person2 = createPerson("Bob", 30);

// console.log(person1.greet());
// console.log(person2.greet());

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function () {
//     return `Hi, I'm ${this.name}, and I'm ${this.age} years old`;
//   };
// }

// let person1 = new Person("Alice", 25);
// let person2 = new Person("Bob", 38);
// console.log(person1.greet());
// console.log(person2.greet());

// let animal = {
//   type: "Mammal",
//   makeSound() {
//     console.log("Some generic animal sound");
//   },
// };

// let dog = Object.create(animal);
// dog.breed = "Golden Retriever";
// dog.makeSound();
// console.log(dog.type);

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
// console.log(person1.greet());

// const config = Object.freeze({
//   theme: "dark",
//   version: "1.0.0",
// });
// config.theme = "light";
// console.log(config.theme);
