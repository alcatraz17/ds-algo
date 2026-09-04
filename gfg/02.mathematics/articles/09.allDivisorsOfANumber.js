/*
 * Question: All Divisors of a Number
 * Write a function that prints all the divisors of a given number.
 *
 * Examples:
 * Input: 24
 * Output: 1 24 2 12 3 8 4 6
 */
const allDivisors = (num) => {
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      console.log(i);

      if (i !== num / i) {
        console.log(num / i);
      }
    }
  }
};

allDivisors(24);
