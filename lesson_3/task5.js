let number = 31987;

let tempNumber = number;
let count = 0;

while(tempNumber>0) {
    count++;
    tempNumber = Math.floor(tempNumber/10);
}

console.log(count);
