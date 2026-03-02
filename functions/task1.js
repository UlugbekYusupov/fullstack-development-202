
let firstName = 'BUJI BUJI';

function greet1(name) {
    return "Hello "+name;
}
console.log(greet1(firstName));

let greet2 = function (name) {
    return "Hello "+name;
}
console.log(greet2(firstName));

let greet3 = (name) => {
    return "Hello "+name;
}
console.log(greet3(firstName));

(function (name) {
    return "Hello "+name;
})(firstName);


let greet5 = new Function(
    'name',
    'return "Hello World!"+name;'
);
console.log(greet5(firstName));