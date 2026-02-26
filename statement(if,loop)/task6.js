let n = 1000;


for(let i=1;i<=n;i++) {
    if(isArmstrong(i)) console.log(i);
}

function isArmstrong(number) {
    let sum= 0;
    let tempNumber = number;
    let count=0
    while(tempNumber>0) {
        count++;
        tempNumber=Math.floor(tempNumber/10);
    }
    tempNumber = number
    while(tempNumber>0) {
        sum += (tempNumber%10)**count;
        tempNumber=Math.floor(tempNumber/10);
    }
    return sum===number;
}