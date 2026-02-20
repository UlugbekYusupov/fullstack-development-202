let number = 12345;

let tempNumber = number;
let sum=0;
while(tempNumber>0) {
    sum+=tempNumber%10;
    tempNumber = Math.floor(tempNumber/10);
}
console.log(sum);