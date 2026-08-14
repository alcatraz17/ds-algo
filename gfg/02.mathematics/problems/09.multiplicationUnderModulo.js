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
class Solution {
  multiplicationModulo(a, b, c) {
    return (a * b) % c;
  }
}

const solution = new Solution();
const multiplicationModulo = console.log(
  solution.multiplicationModulo(5, 8, 7)
);
