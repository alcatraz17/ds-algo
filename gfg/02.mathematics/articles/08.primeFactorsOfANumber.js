/*
 * Question: Prime Factors of a Number
 * Write a function that finds all the prime factors of a given number.
 *
 * Examples:
 * Input: 20
 * Output: 2, 5
 */
const primeFactorsOfANumber = (num) => {
  let factors = new Set();
  let n = num;

  while (n % 2 === 0) {
    factors.add(2);
    n = n / 2;
  }

  while (n % 3 === 0) {
    factors.add(3);
    n = n / 3;
  }

  for (let i = 5; i * i <= n; i += 6) {
    while (n % i === 0) {
      factors.add(i);
      n /= i;
    }
    while (n % (i + 2) === 0) {
      factors.add(i + 2);
      n = n / (i + 2);
    }
  }

  if (n > 3) {
    factors.add(n);
  }
  return factors;
};

console.log(primeFactorsOfANumber(20));
