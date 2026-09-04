/*
 * Question: Greatest Common Divisor (GCD)
 * Write a function that finds the greatest common divisor of two numbers
 * using the Euclidean algorithm.
 *
 * Examples:
 * Input: 5, 3
 * Output: 1
 */
// const greatestCommonDivisor = (a, b) => {
//   if (b === 0) {
//     return a;
//   }

//   return greatestCommonDivisor(b, a % b);
// };

// console.log(greatestCommonDivisor(6, 87));

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

console.log(gcd(5, 3));
