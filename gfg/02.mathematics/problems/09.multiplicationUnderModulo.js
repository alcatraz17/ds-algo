/*
 * Question: Multiplication Under Modulo
 * Given three numbers a, b and c, find the product of a and b modulo c,
 * i.e. (a * b) % c.
 *
 * Examples:
 * Input: a = 5, b = 8, c = 7
 * Output: 5
 *
 * Constraints:
 * 1 <= a, b, c <= 10^18
 */
class Solution {
  multiplicationModulo(a, b, c) {
    return (a * b) % c;
  }
}

const solution = new Solution();
const multiplicationModulo = console.log(
  solution.multiplicationModulo(5, 8, 7)
);

/*
 * Explanation
 * -----------
 * Approach: Direct modular multiplication using the identity (a * b) % c.
 * How it works: Multiply a and b, then take the remainder modulo c with the %
 *   operator to keep the result within the range [0, c-1].
 * Example: multiplicationModulo(5, 8, 7) -> (5 * 8) % 7 = 40 % 7 = 5.
 * Time Complexity: O(1)
 * Auxiliary Space: O(1)
 */
