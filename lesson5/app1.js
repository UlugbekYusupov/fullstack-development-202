function great1(name) {
  return "Hello, " + name;
}
console.log(great1("Bexruz1"));

let great2 = function (name) {
  return "Hello, " + name;
};
console.log(great2("Bexruz2"));

let great3 = (name) => {
  return "Hello, " + name;
};
console.log(great3("Bexruz3"));

console.log(
  (function (name) {
    return "Hello, " + name;
  })("Bexru4"),
);

let name = new Function("name", 'return "Hello, " + name');
console.log(name("bexruz5"));

