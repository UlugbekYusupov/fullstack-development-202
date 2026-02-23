let n1 = 4;
let n2 = -14;
let n3 = 7;

let max = 0;
let min = 0;

if(n1>n2) {
    let temp = n1;
    n1 = n2;
    n2 = n3;
    n3 = temp
}

if(n1>n3) {
    let temp = n1;
    n1 = n3;
    n3 = temp
}

if(n2>n3) {
    let temp = n2;
    n2 = n3;
    n3 = temp
}

console.log(n3, n2, n1);