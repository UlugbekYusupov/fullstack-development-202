function createCounter(start) {
    let count = start;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getCount() {
            return count;
        }
    };
}

let counter = createCounter(3);
counter.decrement();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());