function last(list,n=null) {
    if(n<0) return n;
    if(n === null) return list.pop();
    return list.slice(-n);
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
