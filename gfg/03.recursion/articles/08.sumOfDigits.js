/*
 * Question: Sum of Digits Using Recursion
 * Write a recursive function that returns the sum of all digits of a given number.
 *
 * Examples:
 * Input: sumOfDigits(253)
 * Output: 10
 */

function sumOfDigits(n) {
  if (n < 9) {
    return n;
  }

  let lastDigit = n % 10;
  let remaining = Math.floor(n / 10);

  return sumOfDigits(remaining) + lastDigit;
}

console.log(sumOfDigits(253));
