//1.Funcgtion Declarition

function sum1(a,b) {
    return a + b;
}
sum1(1,2);
//2.Function Expression
let sum2 = function (a,b) {
    return a + b;
}
sum2(4,2);
//3.Arrow function
let sum3 = (a,b) => {
    return a + b;
}
sum3(5,2);
//4.IIFE function
(function (a,b) {
    return a + b;
})(3,4);

// 5.Function Constructor
let sum4 = new Function(
    'a',
    'b',
    'return a + b;'
);
sum4(5,2);