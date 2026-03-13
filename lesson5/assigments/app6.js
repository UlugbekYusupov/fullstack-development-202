function bankamat(initialBalance) {
  let balance = initialBalance;

  return {
    depazit(amount) {
      balance += amount;
    },

    pulYechish(amount) {
      if (amount <= balance) {
        balance -= amount;
      } else {
        console.log("balansda pul yo");
      }
    },

    pulniKorish() {
      return balance;
    },
  };
}

let account = bankamat(500);

account.depazit(200);
account.pulYechish(100);

console.log(account.pulniKorish());
