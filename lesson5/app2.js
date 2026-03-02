function isPrime(num) {
  if (num <= 1 || num % 2 === 0) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  const limit = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}


console.log(isPrime(17))