function createCounter(start) {
  let count = start;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

const countr = createCounter(10);

countr.increment();
countr.increment();
console.log(countr.getCount());

countr.decrement();
console.log(countr.getCount());
