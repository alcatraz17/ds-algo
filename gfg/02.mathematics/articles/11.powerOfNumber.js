/*
 * Question: Computing Power (Recursive)
 * Write a recursive function that computes x raised to the power y (x^y).
 *
 * Examples:
 * Input: 2, 7
 * Output: 128
 */
const computePower = (x, y) => {
  if (y === 0) return 1;

  let temp = computePower(x, Math.floor(y / 2));

  if (y % 2 === 0) {
    return temp * temp;
  }

  return x * temp * temp;
};

console.log(computePower(2, 7));
