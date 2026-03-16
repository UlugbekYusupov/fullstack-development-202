// // 1️ Object yaratish

let car = {
  brand: "Tesla",
  model: "Model S",
  year: 2024,
  start: function () {
    console.log("Car is starting...");
  }
};

console.log(car.brand); // Tesla
car.start(); // "Car is starting..."



// // 2️ new Object() orqali object yaratish

let person = new Object();
person.name = "Alice";
person.age = 25;
person.greet = function () {
  return `Hello, my name is ${this.name}`;
};

console.log(person.greet()); // "Hello, my name is Alice"



// // 3️ Factory Function

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
    }
  };
}

let person1 = createPerson("Alice", 25);
let person2 = createPerson("Bob", 30);

console.log(person1.greet()); // "Hi, I'm Alice, and I'm 25 years old."
console.log(person2.greet()); // "Hi, I'm Bob, and I'm 30 years old."



// // 4️ Constructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
  };
}

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

console.log(person1.greet()); // "Hi, I'm Alice, and I'm 25 years old."
console.log(person2.greet()); // "Hi, I'm Bob, and I'm 30 years old."



// // 5️ Object.create() (Prototype)

let animal = {
  type: "Mammal",
  makeSound() {
    console.log("Some generic animal sound");
  }
};

let dog = Object.create(animal);
dog.breed = "Golden Retriever";

dog.makeSound(); // "Some generic animal sound"
console.log(dog.type); // "Mammal"



// // 6️ Class ishlatish

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

let person1 = new Person("Alice", 25);

console.log(person1.greet()); // "Hello, my name is Alice"



// // 7️ Object.freeze()

const config = Object.freeze({
  theme: "dark",
  version: "1.0.0"
});

config.theme = "light"; // No effect, since it's frozen

console.log(config.theme); // "dark"




// Challenge 1 — Student Grade Management

let students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [50, 60, 70] },
  { name: "Charlie", scores: [30, 40, 20] }
];

let bestName = "";
let bestAvg = 0;

for (let i = 0; i < students.length; i++) {

  let sum = 0;

  for (let j = 0; j < students[i].scores.length; j++) {
    sum += students[i].scores[j];
  }

  let avg = sum / students[i].scores.length;

  if (avg >= 50) {
    console.log(students[i].name + " passed");
  } else {
    console.log(students[i].name + " failed");
  }

  if (avg > bestAvg) {
    bestAvg = avg;
    bestName = students[i].name;
  }
}

console.log("Top student:", bestName, bestAvg);



// Challenge 2 - E-Commerce Cart

let savat = [
  { id: 1, nom: "Laptop", narx: 900, soni: 1 },
  { id: 2, nom: "Mouse", narx: 50, soni: 2 },
  { id: 3, nom: "Keyboard", narx: 100, soni: 1 }
];

let umumiyNarx = 0;
let engQimmat = "";
let engQimmatNarx = 0;

for (let i = 0; i < savat.length; i++) {

  umumiyNarx += savat[i].narx * savat[i].soni;

  if (savat[i].narx > engQimmatNarx) {
    engQimmatNarx = savat[i].narx;
    engQimmat = savat[i].nom;
  }
}

if (umumiyNarx > 100) {
  umumiyNarx = umumiyNarx * 0.9;
}

console.log("Umumiy narx:", umumiyNarx);
console.log("Eng qimmat mahsulot:", engQimmat);



// Challenge 3️ - Ombor (Inventory)

let mahsulotlar = [
  { id: 1, nom: "Laptop", qoldiq: 5 },
  { id: 2, nom: "Mouse", qoldiq: 10 }
];

mahsulotlar.push({ id: 3, nom: "Keyboard", qoldiq: 7 });

for (let i = 0; i < mahsulotlar.length; i++) {

  if (mahsulotlar[i].id === 1) {
    mahsulotlar[i].qoldiq = 8;
  }
}

console.log(mahsulotlar);



// Challenge 4️ - Ijtimoiy tarmoq postlari

let postlar = [
  { muallif: "Ali", layk: 50 },
  { muallif: "Vali", layk: 80 }
];

let engKopLayk = 0;
let engMashhur = "";

for (let i = 0; i < postlar.length; i++) {

  if (postlar[i].layk > engKopLayk) {
    engKopLayk = postlar[i].layk;
    engMashhur = postlar[i].muallif;
  }
}

console.log("Eng ko;p layk olgan:", engMashhur);



// Challenge 5️ - Sport jamoalari

let jamoalar = [
  { nom: "Team A", ochko: 15 },
  { nom: "Team B", ochko: 12 },
  { nom: "Team C", ochko: 18 }
];

let engYaxshiJamoa = "";
let engKopOchko = 0;

for (let i = 0; i < jamoalar.length; i++) {

  if (jamoalar[i].ochko > engKopOchko) {
    engKopOchko = jamoalar[i].ochko;
    engYaxshiJamoa = jamoalar[i].nom;
  }
}

console.log("Eng yaxshi jamoa:", engYaxshiJamoa);



// Challenge 6️ - Ombor qoldiqlari

let ombor = [
  { nom: "Laptop", kategoriya: "Elektronika", qoldiq: 5 },
  { nom: "Mouse", kategoriya: "Elektronika", qoldiq: 20 },
  { nom: "Stul", kategoriya: "Mebel", qoldiq: 3 }
];

let jami = 0;

for (let i = 0; i < ombor.length; i++) {

  if (ombor[i].kategoriya === "Mebel") {
    jami += ombor[i].qoldiq;
  }

  if (ombor[i].qoldiq < 5) {
    console.log("Qoldiq kam:", ombor[i].nom);
  }
}

console.log("Elektronika jami:", jami);


