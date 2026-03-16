// // // // for (let i = 0; i < 10; i++) {
// // // //   console.log(i);
// // // // }

// // // // let a = 0;
// // // // while (a < 10) {
// // // //   console.log(a);
// // // //   a++;
// // // // }

// // // // let b = 0;
// // // // do {
// // // //   console.log(b);
// // // //   b++;
// // // // } while (b < 10);

// // // // const arr = [1, 2, 3, 4, 5];

// // // // for (const element of arr) {
// // // //   console.log(element);
// // // // }

// // // // const user = {
// // // //   name: "Ulugbek",
// // // //   age: 29,
// // // //   country: "Uzbekistan",
// // // // };

// // // // for (const key in user) {
// // // //   const element = user[key];
// // // //   console.log(element);
// // // // }

// // // // function myFunction(){
// // // //     console.log("Salom");
// // // // }

// // // // myFunction()

// // // // function outer() {
// // // //   let firstname = "Mirzoulugbek";

// // // //   return function() {
// // // //     const fullname = firstname + "Yusupov";
// // // //     console.log(fullname);
// // // //   };
// // // // }

// // // // let inner = outer();

// // // // inner()

// // // // function isPalindrome(number) {
// // // //   let tempN = number;
// // // //   let reversedN = 0;
// // // //   while(tempN>0) {
// // // //     reversedN = reversedN*10 + tempN%10
// // // //     tempN = Math.floor(tempN/10);
// // // //   }
// // // //   return number===reversedN;
// // // // }

// // // // console.log(isPalindrome(1201));

// // // const arr = [
// // //   [1, 2, 3],
// // //   [4, 5, [6]],
// // //   [7, 8, 9],
// // // ];

// // // arr[1][2][0];

// // // let colors = ["red", "blue", "green"];
// // // console.log(colors);

// // // let nums = new Array(5);
// // // console.log(nums);

// // // let names = new Array("ALice", "Bob");
// // // console.log(names);

// // // console.log(Array.prototype);
// // // console.log(nums.__proto__);

// // // let original = [1, 2, 3, 4];
// // // let copy = [...original];

// // // console.log(original === copy);

// // // let numbers = Array.of(5);
// // // console.log(numbers);

// // // original.push(5);
// // // console.log(original);

// // // let newArr = original.map((item) => item ** 2);

// // // console.log(newArr);
// // // console.log(original);

// // // const words = ["spray", "elite", "exuberant", "destruction", "present"];

// // // const result = words.filter((word) => word.length > 6);

// // // console.log(result);

// // // const array = [1, 2, 3, 4];

// // // // 0 + 1 + 2 + 3 + 4
// // // const initialValue = 0;

// // // const sumWithInitial = array.reduce(
// // //   (accumulator, currentValue) => accumulator + currentValue,
// // //   initialValue,
// // // );

// // // // console.log(sumWithInitial);

// // // // const animals = ["ant", "bison", "camel", "duck", "elephant"];

// // // // console.log(animals.slice(2));

// // // // console.log(animals.slice(2, 4));
// // // // console.log(animals.slice(1, 5));
// // // // console.log(animals.slice(-2));
// // // // console.log(animals.slice(2, -1));
// // // // console.log(animals.slice());

// // // // const months = ["Jan", "March", "April", "June"];
// // // // months.splice(-1, 2, "Feb");

// // // // console.log(months);

// // // // months.splice(4, 1, "May");
// // // // console.log(months);

// // function first(arr, n = 0) {
// //   if (n == 0) {
// //     return arr[n];
// //   }

// //   if (arr.length == 0) {
// //     return [];
// //   }
// //   if (n < 0) {
// //     return n;
// //   }
// //   return arr.slice(0, n);
// // }

// // console.log(first([7, 9, 0, -2]));
// // console.log(first([], 3));
// // console.log(first([7, 9, 0, -2], 3));
// // console.log(first([7, 9, 0, -2], 6));
// // console.log(first([7, 9, 0, -2], -3));

// // function last(arr, n=null) {
// //   if (n == null){
// //     return arr.pop();
// //   }

// //   if (arr.length == 0){
// //     return [];
// //   }
// //   if (n < 0){
// //     return n;
// //   }
// //   return arr.slice(-n);
// // }

// // console.log(last([7, 9, 0, -2]));
// // console.log(last([7, 9, 0, -2],3));
// // console.log(last([7, 9, 0, -2],6));

// // let myColor = ["Red", "Green", "White", "Black"];

// // let result = myColor.join(",")

// // console.log(result);

// const heading = document.getElementById("header");
// // header.textContent = "Hello worldni ozgartirdik";
// // header.innerHTML = `
// //     <div><div/>
// // `;
// // header.style.color = "red";

// // const headings = document.getElementsByTagName("h1");
// // const headTitle = document.createElement("h1");
// // headTitle.textContent = "bu js orqali yaratilgan h1 elementi";
// // card[1].appendChild(headTitle);

// let cards = document.getElementsByClassName("card");
// console.log(cards);

// const button = document.createElement("button");
// document.body.append(button);

// button.textContent = "Click me";

// button.addEventListener("click", function () {
//   for (let index = 0; index < cards.length; index++) {
//     const element = cards[index];
//     element.classList.add("cards");
//   }

//   //   cards.map(function (element) {
//   //     element.classList.add("cards");
//   //   });
// });
