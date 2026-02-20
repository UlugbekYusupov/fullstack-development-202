// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * 5);
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);

let numbers = [12, 5, 7, 8];

let juft = 0;
let toq = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        juft++;
    } else {
        toq++;
    }
}

console.log("Juft:", juft);
console.log("Toq:", toq);
