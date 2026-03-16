// let car = {
//     brand:"Tesla",
//     model:"Tesla S",
//     year:2024,
//     start: function () {
//         console.log("Car is starting...")
//     }
// };
//
// console.log(car.brand);
// car.start();


// let person = new Object();
// person.name = "Alice";
// person.age = 25;
// person.greet = function () {
//     return `Hello, my name is ${this.name}`
// }
// console.log(person.greet());


// function createPerson(name,age) {
//     return {
//         name,
//         age,
//         greet(){
//             return `Hi, I'm ${this.name}, and I'm ${this.age} years odl`
//         }
//     };
// }
//
// let person1 = createPerson("Alice",25);
// console.log(person1.greet());


// function Person(name,age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function (){
//         return `Hi, I'm ${this.name}, and I'm ${this.age} years odl`
//     }
// }
//
// let person1 = new Person("Alice",25);
// console.log(person1.greet());


// let animal = {
//   type: "Mammal",
//     makeSound(){
//         console.log("Some generic animal sound")
//     }
// };
//
// let dog = Object.create(animal);
// dog.breed = "Golden Retriever";
// dog.makeSound();
// console.log(dog.type);


// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greet(){
//         return `My name is ${this.name}`;
//     }
// }
//
// let person1 = new Person("Alice",25);
// console.log(person1.greet());



// const config = Object.freeze({
//     theme: "dark",
//     version:'1.0.0'
// });
//
// config.theme = "light";
// console.log(config.theme)


//_________________________________
//Object literal
// let user = {
//     name:"Hakimbek"
// }
//
// console.log(user)

//using new object
// let user = {};
// user.age = 19;
// user.year = 1999;
// console.log(user);

//factory function
// function createUser(name,age) {
//     return {
//         name,
//         age,
//         greet() {
//             console.log(`Salom ${name}`)
//         }
//     };
// }
//
// let user = createUser("Toshpo'lat",90);
// user.greet();
//


// let animal = {
//     isPet: false,
//     isMammal: false,
//     name:"Animal",
//     makeSound(){console.log(`${this.name} can sound`)}
// };
//
// let dog = Object.create(animal);
// dog.name = "Reks";
// dog.age = 3;
// dog.isPet = true;
// console.log(dog.isPet)
// dog.makeSound();

// class Animal {
//     constructor() {
//         this.name = 'Animal';
//         this.isPet = false;
//         this.isMammal = false;
//     }
//
//     makeSound(){
//         console.log(`${this.name} can sound`)
//     }
// }
//
//
//
// class Dog extends Animal{
//     constructor(age) {
//         super();
//         this.age = age
//     }
// }
//
// let dog1 = new Dog(3)
// dog1.name = "Reks"
// dog1.makeSound()



