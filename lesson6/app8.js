let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
  let num = i + 1;
  let suffix;

  if (num === 1) suffix = "st";
  else if (num === 2) suffix = "nd";
  else if (num === 3) suffix = "rd";
  else suffix = "th";

  console.log(num + suffix + " choice is " + color[i]);
}
