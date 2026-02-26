let number = 123;

let tempNumber = number;
let reversed = 0;

while(tempNumber>0) {
    reversed=reversed*10+tempNumber%10;
    tempNumber = Math.floor(tempNumber/10);
}
console.log(reversed);
