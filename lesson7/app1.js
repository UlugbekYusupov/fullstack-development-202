const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [150, 60, 70] },
  { name: "Charlie", scores: [30, 40, 20] },
];

function ortachaQiymatOlish(scores) {
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum / scores.length;
}

let maxBall = 0;
let maxIsm = "";
let ismBall = [];
for (i in students) {
  let ball = ortachaQiymatOlish(students[i].scores);
  ismBall.push({
    name: students[i].name,
    score: ball,
  });
  if (ball > maxBall) {
    maxBall = ball;
    maxIsm = students[i].name;
  }
}
console.log(`maxbalning ismi ` + maxIsm);
console.log(ismBall);
