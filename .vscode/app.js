// console.log(a)
// var a = 20

const { version } = require("react");

// Challenge
// console.log("5"+5); Result: 55
// console.log("5"-5); Result: 0
// console.log("5"*"2"); Result: 10
// console.log("10"/2); Result: 5
// console.log("10" - true); Result: 9
// console.log("5"+true) Result: 5true
// console.log(5+null) Result: 5
// console.log(5+undefined); Result: NaN

//1-topshiriq
// let list = [34,13,9,5,14,45,67,72,39,63]

// let jcount = 0
// let tcount = 0

// for (let i=0; i<list.length; i++){
//     if (list[i] > 50){
//         jcount++
//     } else {
//         tcount++
//     }
// }
// console.log("Juft son",jcount)
// console.log("Toq son",tcount)

//2-topshiriq
 // for (let i = 0; i < list.length; i++) {
//     if (list[i] % 2 == 0) {
//         juft += 1
//     } else {
//         toq += 1
//     }
// }
// console.log("Juft:", juft)
// console.log("Toq:", toq)

//3-topshiriq
// let son = 583274;

// let max = 0;

// while (son > 0) {
//     let raqam = son % 10;  
    
//     if (raqam > max) {
//         max = raqam;       
//     }
    
//     son = Math.floor(son / 10); 
// }

// console.log("Eng katta raqam:", max);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let a = 0;
// while (a < 10) {
//     console.log(a);
//     a++;
// }

// let b = 0;
// do {
//     console.log(b);
//     b++;
// } while (b < 10);

// const user = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// for (let key in user) {
//     const element = user[key];
//     console.log(key, element);
// }

// let a = 10;
// let b = 20;

// if (a > b) {    
//     console.log("Max : ",a);
// } else {
//     console.log("Max : ",b);
// }

// let a = [-1, 2, 3, -4, 5]
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] < 0) {
//         sum += 1;

//     }
// }
// console.log("Manfiy sonlar: ", sum," ta");    

 // 1-mashq
// let list = [2,5,-9]
// for (let i in list) {
//     if (list[i] < 0) {
//         console.log(list[i])
//     }
// }

// 2-mashq
// let list = [4,5,7,2,-2,0]
// let katta = 0
// for (let i in list) {
//     if (list[i] < katta)
//         list[i]=katta
//     console.log(katta)
// }

// 3-mashq
// let juft = 0
// let toq = 0
// for (let i=0;i<=15;i++) {
//     if (i%2==0) {
//         juft++
//         console.log(i)
//     } else {
//         toq++
//     }
// }
// console.log("Juft : ",juft)
// console.log("Toq : ",toq)

// 4-mashq
// for (let i=0;i<=100;i++) {
//     if (i%3==0 && i%5==0) {
//         console.log("FIZZBUZZ")
//     } else if (i%3==0) {
//         console.log("FIZZ")
//     } else if (i%5==0) {
//         console.log("BUZZ")
//     }
// }

//5-mashq

// for (let i = 1; i <= 100; i++) {

//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } 
//   else if (i % 3 === 0) {
//     console.log("Fizz");
//   } 
//   else if (i % 5 === 0) {
//     console.log("Buzz");
//   } 
//   else {
//     console.log(i);
//   }

// }

//6-mashq

// for (let num = 100; num <= 999; num++) {

//   let temp = num;
//   let sum = 0;

//   while (temp > 0) {
//     let digit = temp % 10;        
//     sum += digit * digit * digit; 
//     temp = Math.floor(temp / 10); 
//   }

//   if (sum === num) {
//     console.log(num);
//   }

// }

//7-mashq

// const students = [
//   { name: "David", marks: 80 },
//   { name: "Vinoth", marks: 77 },
//   { name: "Divya", marks: 88 },
//   { name: "Ishitha", marks: 95 },
//   { name: "Thomas", marks: 68 }
// ];

// let total = 0;

// for (let i = 0; i < students.length; i++) {
//   total += students[i].marks;
// }

// let average = total / students.length;

// console.log("Average Marks:", average);

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

// console.log("Grade:", grade);



// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(7, 14));

// const firstname = "Shuhrat";
// let lastname = "Salimov";

// function greet(nametoGreet){
//     const fullname = nametoGreet + " " + lastname;
//     return "Hello, " + fullname + "!";
// }
// greet(firstname);

// console.log(greet(firstname));  

//2-topshiriq 

// function isPrime(n){
//     if (n <= 1) return false;
//     if (n == 2) return true;
//     if (n % 2 == 0) return false;

//     if (let i=3; i <= Math.sqrt(n); i+=2) {
//         if (n % i == 0) return false;
// }
// return false;
// }



//3-topshiriq

// function countDigits(num) {
//     if (num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }
// console.log(countDigits(12345)); 

//4-topshiriq

//  function isPalindrome(n) {
// //     //let digit = 0;
// //       let k = n;

// //     while (n > 0) {
// //         digit = k % 10;
// //         k = Math.floor(k / 10);
// //     }

// let tempN = n;
// let reversedN = 0;
// while (tempN > 0) {
//     reversedN = reversedN*10 + tempN%10;
//     tempN = Math.floor(tempN/10);
// }
// return n === reversedN;

// }

// console.log(isPalindrome(121));

// const arr = [
//     [1,2,3]
//     [6,7,8]
// ];
//  arr [1] [2] [3] = 10;
//  let colors = ["red", "green", "blue"];
//  console.log(colors);

// const animals = ["cat", "dog", "rabbit" , "hamster" , "parrot"];

// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);
// console.log(animals[4]);
// console.log(animals.slice(0, 3));
// console.log(animals.slice(2, 5));

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// months.splice(2, 0, "February");

// console.log(months);

// 1-topshiriq

// function first(arr, n) {
//   if (arr.length === 0) {
//     return [];
//   }

//   if (n === undefined) {
//     return arr[0];
//   }

//   if (n < 0) {
//     return n;
//   }

//   return arr.slice(0, n);
// }


// console.log(first([7, 9, 0, -2]));       
// console.log(first([], 3));               
// console.log(first([7, 9, 0, -2], 3));    
// console.log(first([7, 9, 0, -2], 6));    
// console.log(first([7, 9, 0, -2], -3));   


//2-topshiriq
// function checkPS(password) {
//   let hasUpper = false;
//   let hasNumber = false;
//   let hasSpecial = false;

//   let specialChars = "!@#$%^&*()_+{}|:<>?";

//   for (let i = 0; i < password.length; i++) {
//     let char = password[i];

//     if (char >= 'A' && char <= 'Z') {

//       hasUpper = true;

//       if(char >= '0' && char <= '9') {
//         hasNumber = true;
//       }
//       if (specialChars.includes(char)) {
//         hasSpecial = true;
//       }
//     }
//     let score =0;

//     if (password.length >= 8) score++;
//     if (hasUpper) score++;
//     if (hasNumber) score++;
//     if (hasSpecial) score++;

//     if(score <= 2) return "Ortacha";
//     if(score === 3) return "Yaxshi";
//     return "Zo'r";
//   }
//   console.log(checkPS("Abc123!"));
//   console.log(checkPS("Afhdgfvsbh!23"));  
// }

//3-topshiriq

// function atmcheck(amount) {
//   if (amount % 10 !==0){
//     return "Xato";
//   }
//   let count = [100 , 50 , 20 , 10];
//   let result = {};

//   for (let i = 0; i < count.length; i++) {

//     let mix = Math.floor(amount / count[i]);

//     if (mix > 0) {
//     result[count[i]] = mix;
//     amount -= mix * count[i];
//     }
// }
//  return result;
// }
// console.log(atmcheck(150));
// console.log(atmcheck(130));

//4-topshiriq

// function trafficLight() {
//     console.log("Red");
//     setTimeout(() => {
//         console.log("Green");
//         setTimeout(() => {
//             console.log("Yellow");
//             setTimeout(() => {
                
//                 trafficLight();
//             }, 2000); 
//         }, 3000); 
//     }, 5000); 
// }


// trafficLight();



// let car = {
//     brand: "Tesla",
//     model: "Model S",
//     year: 2022,
//     start: function() {
//         console.log("Car started");
//     }
// };
// console.log(car.brand);
// car.start();


// let person = new Object();
// person.name = "Alice";
// person.age = 30;
// person.greet = function() {
// return 'Hello, my name is   ${this.name}';

// };
// console.log(person.greet());

// function createPerson(name, age) {
//     return {
//         name,
//         age,
//         greet(){
//             return `Hello, my name is ${this.name} and I am ${this.age} years old.`;

//         }
//     };
// }
// let person1 = createPerson["Bob", 25];
// let person2 = createPerson["Charlie", 35];
// console.log[person1.greet()];
// console.log[person2.greet()];

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;

//     };
// }
// let person1 = new Person["David", 40];
// let person2 = new Person["Eve", 28];
// console.log[person1.greet()];
// console.log[person2.greet()];

// let animal = {
//     type: "Mammal",
//     makeSound(){
//         console.log("Some generic animal sound");
        
//     }
// };

// let dog = Object.create(animal);
// dog.bread = "Labrador";
// dog.makeSound();
// console.log(dog.type);

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    
//     }
// }

// let person1 = new Person("Frank", 45);
// console.log(person1.greet);

// const config = Object.freeze({
//     theme: "dark",
//     version: "1.0.0"
// });

// config.theme = "light";
// console.log(config.theme);

//1-challenge

// const students = [
//  { name: "Alice", scores: [80, 90, 100] },
//  { name: "Bob", scores: [50, 60, 70] },
//  { name: "Charlie", scores: [30, 40, 20] }
// ];

// let topStudent = "";
// let highestAvg = 0;

// for (let i = 0; i < students.length; i++) {

//     let scores = students[i].scores;
//     let sum = 0;

//     for (let j = 0; j < scores.length; j++) {
//         sum += scores[j];
//     }

//     let avg = sum / scores.length;

//     console.log(students[i].name + " average:", avg);

//     if (avg >= 50) {
//         console.log(students[i].name + " passed");
//     } else {
//         console.log(students[i].name + " failed");
//     }

//     if (avg > highestAvg) {
//         highestAvg = avg;
//         topStudent = students[i].name;
//     }
// }

// console.log(topStudent + " has the highest average:", highestAvg);



// const cart = [
//  { id: 1, name: "Laptop", price: 900, quantity: 1 },
//  { id: 2, name: "Mouse", price: 50, quantity: 2 },
//  { id: 3, name: "Keyboard", price: 100, quantity: 1 }
// ];

// let total = 0;
// let mostExpensive = cart[0];

// for (let i = 0; i < cart.length; i++) {

//   total += cart[i].price * cart[i].quantity;

//   if (cart[i].price > mostExpensive.price) {
//     mostExpensive = cart[i];
//   }

// }

// if (total > 100) {
//   total = total * 0.9;
// }

// console.log("Total Price:", total);
// console.log("Most Expensive Item:", mostExpensive.name);


// const posts = [
//     { author: "Alice", likes: 100, comments: 20, shares: 5 },
//     { author: "Bob", likes: 200, comments: 50, shares: 10 },
//     { author: "Charlie", likes: 150, comments: 30, shares: 8 }
// ];


// function findMostLikedPost(posts) {
//     let mostLiked = posts[0];

//     for (let i = 1; i < posts.length; i++) {
//         if (posts[i].likes > mostLiked.likes) {
//             mostLiked = posts[i];
//         }
//     }

//     return mostLiked;
// }


// function totalEngagement(posts) {
//     let total = 0;

//     for (let post of posts) {
//         total += post.likes + post.comments + post.shares;
//     }

//     return total;
// }

// const mostLikedPost = findMostLikedPost(posts);
// console.log("Eng ko'p like olgan post:", mostLikedPost);

// const engagement = totalEngagement(posts);
// console.log("Umumiy engagement:", engagement);



// const teams = [
//     { name: "Team A", wins: 5, losses: 2, points: 15, goalsScored: 10, goalsConceded: 5 },
//     { name: "Team B", wins: 6, losses: 1, points: 18, goalsScored: 12, goalsConceded: 4 },
//     { name: "Team C", wins: 4, losses: 3, points: 12, goalsScored: 8, goalsConceded: 7 }
// ];


// function sortTeamsByRanking(teams) {
//     return teams.sort((a, b) => b.points - a.points);
// }


// function findBestTeam(teams) {
//     let best = teams[0];

//     for (let i = 1; i < teams.length; i++) {
//         if (teams[i].points > best.points) {
//             best = teams[i];
//         }
//     }

//     return best;
// }


// const sortedTeams = sortTeamsByRanking(teams);
// console.log("Ranking bo‘yicha jamoalar:", sortedTeams);

// const bestTeam = findBestTeam(teams);
// console.log("Eng yaxshi jamoa:", bestTeam);



// const inventory = [
//   { itemName: "Laptop", category: "Electronics", stock: 5 },
//   { itemName: "Phone", category: "Electronics", stock: 10 },
//   { itemName: "Table", category: "Furniture", stock: 3 },
//   { itemName: "Chair", category: "Furniture", stock: 8 }
// ];


// function totalStockByCategory(category) {
//   return inventory
//     .filter(item => item.category === category)
//     .reduce((sum, item) => sum + item.stock, 0);
// }

// function lowStockAlert() {
//   const lowItems = inventory.filter(item => item.stock < 5);

//   if (lowItems.length === 0) {
//     console.log("Low stock yo‘q");
//   } else {
//     console.log("Kam qolgan mahsulotlar:");
//     lowItems.forEach(item => {
//       console.log(item.itemName + " - stock: " + item.stock);
//     });
//   }
// }


// console.log("Electronics total stock:", totalStockByCategory("Electronics"));
// console.log("Furniture total stock:", totalStockByCategory("Furniture"));

// lowStockAlert();



