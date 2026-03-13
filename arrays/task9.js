let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
let length=0;

if(array1.length<array2.length)length = array2.length;
else length = array1.length;

let newArray = [];

for(let i = 0; i<length; i++){
    let value = (array1[i]===undefined?0:array1[i]) + (array2[i]===undefined?0:array2[i]);
    newArray.push(value);
}
console.log(newArray);
