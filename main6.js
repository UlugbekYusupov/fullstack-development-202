// let arrey = [1,2,3,4,5,6,7,8,9]
// function get_first(n) {
//     return  arrey.slice(n)
// }
// console.log(get_first(5))



// let mycolor = ["green", "blue", "pink", "purple"];
//
// function colore(a){
//     return a.toString().split(",").join(",");
// }
// console.log(colore(mycolor));


// let a = 123456
//
// let result = String(a).split("").join("-");
// console.log(result);


// var a  = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//
// for (i in a){
//     for (j in a){
//         if (a[i] < a[j]){
//            b = a[i]
//            a[i] = a[j]
//            a[j] = b
//         }
//     }
// }
// console.log(a)


// let a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//
// function find_a(a){
//     let b = 0;
//     for (i of a){
//         if (i === "a"){
//            b += 1
//         }
//     }
//     return b;
// }
// console.log(find_a(a));


// let a = "The Quick Brown Fox";
// let b = "";
//
// for (let i of a.split(" ")) {
//     let r = i[0].toLowerCase() + i.toUpperCase().slice(1);
//     b = b + " " + r;
// }
//
// console.log(b.trim());



// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// let o = ["th","st","nd","rd"];
//
// for (let i = 0; i < color.length; i++){
//     if (i === 0){
//         console.log("%s choice is %s", (i+1)+o[1] , color[i]);
//     }else if (i === 1){
//         console.log("%s choice is %s", (i+1)+o[2] , color[i]);
//     }else if (i === 2){
//         console.log("%s choice is %s", (i+1)+o[3] , color[i]);
//     }else{
//         console.log("%s choice is %s", (i+1)+o[0] , color[i]);
//     }
// }



// let array1 = [1,0,2,3,4];
// let array2 = [3,5,6,7,8,13];
//
// let result = [];
//
// let maxLength = Math.max(array1.length, array2.length);
//
// for (let i = 0; i < maxLength; i++) {
//     let a = array1[i] || 0;
//     let b = array2[i] || 0;
//     result.push(a + b);
// }
//
// console.log(result);