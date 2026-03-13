function atmWithdraw(amount) {
  if (amount % 10 !== 0) {
    return "xatolik";
  }

  let count100 = 0;
  let count50 = 0;
  let count20 = 0;
  let count10 = 0;

  while (amount > 0) {
    if (amount >= 100) {
      amount -= 100;
      count100++;
    } else if (amount >= 50) {
      amount -= 50;
      count50++;
    } else if (amount >= 20) {
      amount -= 20;
      count20++;
    } else if (amount >= 10) {
      amount -= 10;
      count10++;
    }
  }

  return {
    "\$100": count100,
    "\$50": count50,
    "\$20": count20,
    "\$10": count10,
  };
}

console.log(atmWithdraw(130));
