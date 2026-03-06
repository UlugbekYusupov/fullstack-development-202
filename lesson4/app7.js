//! 7
let studentName = [
  {
    name: "David",
    mark: 80,
  },
  {
    name: "Vinoth",
    mark: 77,
  },
  {
    name: "Divya",
    mark: 88,
  },
  {
    name: "Ishitha",
    mark: 95,
  },
  {
    name: "Thomas",
    mark: 68,
  },
];

for (let i of studentName) {
  let mark = i["mark"];
  if (mark <= 60) console.log(`${i["name"]} grade F`);
  else if (mark > 60 && mark < 70) console.log(`${i["name"]} grade D`);
  else if (mark >= 70 && mark < 80) console.log(`${i["name"]} grade C`);
  else if (mark >= 80 && mark < 90) console.log(`${i["name"]} grade B`);
  else if (mark >= 90 && mark <= 100) console.log(`${i["name"]} grade A`);
}
