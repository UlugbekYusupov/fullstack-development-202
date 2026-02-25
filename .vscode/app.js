// console.log(a)
// var a = 20

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


