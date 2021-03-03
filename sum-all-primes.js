function sumPrimes(num) {
  // create an array with all numbers
  let numbers = [];
  for (let i=1; i<=num; i++) {
    numbers.push(i);
  }
  // filter to get only primes
  let primes = numbers.filter(number => {
    if (number <2) return false; // start at 2
    for (let i=2; i<number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  
  // reduce to sum
  return primes.reduce((acc, cur) => acc+cur);
}

console.log(sumPrimes(10));