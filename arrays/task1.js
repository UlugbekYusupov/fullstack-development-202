function first(list,n) {
    if(n<0) return n;
    if(n === undefined) return list[0];
    return list.slice(0,n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
