// //! Push
// console.log("//Push");
// const animals = ["pigs", "goats", "sheep"];

// const count = animals.push("cows");
// console.log(count);
// console.log(animals);

// animals.push("chickens", "cats", "dogs");
// console.log(animals);

// //! Pop
// console.log("//Pop");
// const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

// console.log(plants.pop());
// console.log(plants);
// plants.pop();
// console.log(plants);

// //! Shift
// console.log("//Shift");
// const array = [1, 2, 3];

// const firstElement = array.shift();
// console.log(array);
// console.log(firstElement);

// //! Unshift
// console.log("//Unshift");
// console.log(array.unshift(4, 5));
// console.log(array);

// //! Map
// console.log("//Map");
// const mapped = array.map((x) => x * 2);
// console.log(mapped);

// //! Filter
// console.log("//Filter");
// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);

// //! Reduse
// console.log("//Reduse");
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

// //! Sort
// console.log("//Sort");
// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);

// const arrayy = [1, 30, 4, 21, 100000];
// arrayy.sort();
// console.log(arrayy);

// //! reverse
// console.log("//reverse");
// const array = ["one", "two", "three"];
// console.log("array:", array);
// const reversed = array.reverse();
// console.log("reversed:", reversed);
// console.log("array:", array);

// //! slice
// console.log("//slice");
// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));
// console.log(animals.slice(-2));
// console.log(animals.slice(2, -1));

// console.log(animals.slice());

// //! splice
// console.log("//splice");
// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// console.log(months);

// months.splice(4, 1, "May");
// console.log(months);

// //! find
// console.log("//find");
// const array = [5, 12, 8, 130, 44];

// const found = array.find((element) => element > 10);

// console.log(found);

// //! findIndex
// console.log("//findIndex)");
// const array = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array.findIndex(isLargeNumber));

//! includes
console.log("//includes");
const array = [1, 2, 3];

console.log(array.includes(2));

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));

console.log(pets.includes("at"));
