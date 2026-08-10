/*
 * Question: Digits in Factorial
 * Given an integer num, find the number of digits in num! without computing
 * the factorial itself.
 *
 * Examples:
 * Input: num = 4
 * Output: 2
 * (4! = 24 has 2 digits)
 *
 * Constraints:
 * 1 <= num <= 10^5
 */
function digitsOfAFactorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;

  let digits = 0;
  for (let i = 2; i <= num; i++) {
    digits += Math.log10(i);
  }

  return Math.floor(digits) + 1;
}

console.log(digitsOfAFactorial(4));

/*
 * Explanation
 * -----------
 * Approach: Count the digits of num! without computing the huge factorial, using
 *   the logarithm identity: digits of a number = floor(log10(number)) + 1.
 * How it works:
 *   1. Handle edge cases: negative -> 0, 0 or 1 -> 1 digit (0! = 1! = 1).
 *   2. Since log10(num!) = log10(1*2*...*num) = sum of log10(i), accumulate
 *      Math.log10(i) for i from 2 to num.
 *   3. Return floor(sum) + 1.
 * Example: digitsOfAFactorial(4) -> 4! = 24; log10(2)+log10(3)+log10(4) ~= 1.38 -> floor(1.38)+1 = 2.
 * Time Complexity: O(n)
 * Auxiliary Space: O(1)
 */
