/*
 * Question: Addition Under Modulo
 * Given three numbers a, b and c, find the sum of a and b modulo c,
 * i.e. (a + b) % c.
 *
 * Examples:
 * Input: a = 5, b = 3, c = 3
 * Output: 2
 *
 * Constraints:
 * 1 <= a, b, c <= 10^18
 */
class Solution {
  additionUnderModulo(a, b, c) {
    return (a + b) % c;
  }
}

const solution = new Solution();
const additionUnderModulo = console.log(solution.additionUnderModulo(5, 3, 3));

/*
 * Explanation
 * -----------
 * Approach: Direct modular addition using the identity (a + b) % c.
 * How it works: Add a and b, then take the remainder modulo c with the % operator
 *   to keep the result within the range [0, c-1].
 * Example: additionUnderModulo(5, 3, 3) -> (5 + 3) % 3 = 8 % 3 = 2.
 * Time Complexity: O(1)
 * Auxiliary Space: O(1)
 */
