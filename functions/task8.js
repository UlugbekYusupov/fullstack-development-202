
function lazyAdder(number){
    let n = number;

    return function(addingNumber){
        return n+addingNumber;
    };
}

const add5 = lazyAdder(5);
console.log(add5(10));
console.log(add5(20));
