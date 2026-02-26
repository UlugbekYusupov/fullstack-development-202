let number = 31987;

let tempNumber = number;
let max = -1;

while(tempNumber>0) {
    let qoldiq = tempNumber%10;
    if(qoldiq > max) max = qoldiq;
    tempNumber = Math.floor(tempNumber/10);
}

console.log(max);
