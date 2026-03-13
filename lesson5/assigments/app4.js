function svetafor() {
  let colors = ["Red", "Green", "Yellow"];
  let times = [5000, 3000, 2000];

  let i = 0;

  while (true) {
    setTimeout(() => {
      console.log(colors[i]);
    }, times[i]);

    i++;

    if (i === colors.length) {
      i = 0;
    }

    break;
  }
}

svetafor();
