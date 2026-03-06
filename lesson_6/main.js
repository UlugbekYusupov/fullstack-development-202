// // challenge 1
// function first(arr, n) {

//     if (arr.length == 0) {
//         return [];
//     }

//     if (n == undefined) {
//         return arr[0];
//     }

//     if (n < 0) {
//         return [];
//     }

//     return arr.slice(0, n);
// }


// console.log(first([7, 9, 0, -2]));       
// console.log(first([], 3));               
// console.log(first([7, 9, 0, -2], 3));    
// console.log(first([7, 9, 0, -2], 6));   
// console.log(first([7, 9, 0, -2], -3));  


// // challenge 2
// function last(arr, n) {

//     if (arr.length == 0) {
//         return [];
//     }

//     if (n == undefined) {
//         return arr.pop();
//     }

//     return arr.slice(- n);
// }

// console.log(last([7, 9, 0, -2]));    
// console.log(last([7, 9, 0, -2], 3));   
// console.log(last([7, 9, 0, -2], 6));   


// // challenge 3
// let myColor = ["Red", "Green", "White", "Black"];

// let result = myColor.join(",");

// console.log(result); 


// // challenge 4
// let number = "025468";

// let result = number.split("").join("-");

// console.log(result);


// // challenge 5
// let arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// arr1.sort(function(a, b) {
//     return a - b;
// });

// console.log(arr1);



// // challenge 6
// let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// let count = {};
// let maxItem;
// let maxCount = 0;

// for (let i = 0; i < arr1.length; i++) {

//     let item = arr1[i];

//     if (count[item]) {
//         count[item]++;
//     } else {
//         count[item] = 1;
//     }

//     if (count[item] > maxCount) {
//         maxCount = count[item];
//         maxItem = item;
//     }
// }

// console.log(maxItem + " (" + maxCount + " times)");



// // challenge 7
// let text = "MenniNg BiriNchi ProJectim Bu";

// let result = "";

// for (let i = 0; i < text.length; i++) {

//     let char = text[i];

//     if (char === char.toUpperCase()) {
//         result += char.toLowerCase();
//     } else {
//         result += char.toUpperCase();
//     }
// }

// console.log(result);



// // challenge 8
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// let o = ["th","st","nd","rd"];

// for (let i = 0; i < color.length; i++) {

//     let position = i + 1; 
//     let suffix = o[0]; 

//     if (position === 1) {
//         suffix = o[1];
//     } 
//     else if (position === 2) {
//         suffix = o[2];
//     } 
//     else if (position === 3) {
//         suffix = o[3];
//     }

//     console.log(position + suffix + " choice is " + color[i]);
// }


// // challenge 9
// let array1 = [1,0,2,3,4];
// let array2 = [3,5,6,7,8,13];

// let result = [];

// let maxLength = Math.max(array1.length, array2.length);

// for (let i = 0; i < maxLength; i++) {

//     let num1 = array1[i] || 0; 
//     let num2 = array2[i] || 0;

//     result.push(num1 + num2); 
// }

// console.log(result);
