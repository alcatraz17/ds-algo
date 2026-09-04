/*
 * Question: Trailing Zeroes of a Factorial
 * Write a function that counts the number of trailing zeroes in the
 * factorial of a given number.
 *
 * Examples:
 * Input: 125
 * Output: 31
 */
const countTrailingZeroes = (n) => {
  let res = 0;
  for (let i = 5; i <= n; i = i * 5) {
    res = res + Math.floor(n / i);
  }

  return res;
};

console.log(countTrailingZeroes(125));
