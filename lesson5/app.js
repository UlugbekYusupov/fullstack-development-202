//? Function Declaration
function sum(a, b) {
  return a + b;
}
sum(2, 3);

//? Function Expression
let sum = function (a, b) {
  return a + b;
};
sum(2, 3);

//? Arrow function
let sum = (a, b) => {
  return a + b;
};
sum(2, 3);

//? IIFE Function
(function (a, b) {
  return a + b;
})(2, 3);

//? Function Constructor
let sum = new Function("a", "b", "return a + b");
sum(2, 3);
