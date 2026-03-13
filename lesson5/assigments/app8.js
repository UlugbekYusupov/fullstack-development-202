function soliqHisoblash(income) {
  if (income < 10000) {
    return 0;
  } else if (income <= 50000) {
    return income * 0.1;
  } else {
    return income * 0.2;
  }
}

console.log(soliqHisoblash(8000));
