var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let counts = {};

let maxCount= 0;
let maxElement= 0;

for(const i of arr1) {
    if(counts[i]===undefined)counts[i]=1;
    else counts[i]++;
    if(counts[i]>maxCount){
        maxCount = counts[i];
        maxElement = i;
    }
}
console.log(`${maxElement} (${maxCount} times)`);
