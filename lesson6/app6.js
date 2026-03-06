let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let count = {};
let max = 0;
let most;

for (let i = 0; i < arr.length; i++) {

  let item = arr[i];

  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }

  if (count[item] > max) {
    max = count[item];
    most = item;
  }
}

console.log(most + " (" + max + " times)");