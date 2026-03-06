let num = "025468";
let result = "";

for (let i = 0; i < num.length; i++) {

  result += num[i];

  if (i < num.length - 1) {
    result += "-";
  }

}

console.log(result);