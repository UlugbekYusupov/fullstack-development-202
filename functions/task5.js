function isArmstrong(n) {
    let tempN = n;
    let sum= 0;
    let isEven = n%2===0;
    for(let i = isEven?0:1; i < n; i+=2){
        if(n%i===0)sum+=i;
    }
    return sum===n;
}

console.log(isArmstrong(23));