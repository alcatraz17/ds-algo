/*
 * Question: Sum of Digits
 * Given a non-negative integer n, find the sum of its digits using recursion.
 *
 * Examples:
 * Input: n = 110
 * Output: 2
 * Input: n = 12345
 * Output: 15
 *
 * Constraints:
 * 1 <= n <= 10^9
 */
function sumOfDigits(n) {
  if (n === 0) return 0;

  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(110));

/*
 * Explanation
 * -----------
 * Approach: Sum the digits of a number recursively — peel off the last digit
 * and add it to the sum of the remaining digits.
 * How it works: If n is 0, return 0 (base case). Otherwise return the last
 * digit (n % 10) plus the recursive sum of Math.floor(n / 10).
 * Example: sumOfDigits(110) -> 0 + sum(11) -> 0 + 1 + sum(1) -> 0 + 1 + 1 = 2.
 * Time Complexity: O(d) where d is the number of digits, i.e. O(log10 n)
 * Auxiliary Space: O(d) (recursion call stack)
 */
