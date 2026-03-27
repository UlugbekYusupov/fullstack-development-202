const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

let current = 0;

setInterval(() => {
  red.style.background = "gray";
  yellow.style.background = "gray";
  green.style.background = "gray";

  if (current === 0) {
    red.style.background = "red";
  } else if (current === 1) {
    yellow.style.background = "yellow";
  } else {
    green.style.background = "green";
  }

  current++;

  if (current > 2) {
    current = 0;
  }
}, 1000);
