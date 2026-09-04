/*
 * Question: Iterative Power (Binary Exponentiation)
 * Write an iterative function that computes x raised to the power y (x^y)
 * using binary exponentiation.
 *
 * Examples:
 * Input: 2, 3
 * Output: 8
 */
const binaryExponentiation = (x, y) => {
  let result = 1;

  while (y > 0) {
    if (y & 1) {
      result = result * x;
    }

    y = y >> 1;
    x = x * x;
  }

  return result;
};

console.log(binaryExponentiation(2, 3));
