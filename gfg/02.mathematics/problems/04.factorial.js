/*
 * Question: Factorial of a Number
 * Given a non-negative integer n, return n! (the product of all positive
 * integers up to n). Note: 0! = 1.
 *
 * Examples:
 * Input: n = 4
 * Output: 24
 *
 * Constraints:
 * 0 <= n <= 12
 */
class Mathematics {
  getFactorial(n) {
    if (n < 0) {
      return 'Please enter a whole number';
    }

    let fact = 1;

    for (let i = n; i >= 2; i--) {
      fact = fact * i;
    }

    return fact;
  }
}

const mathematics = new Mathematics();

const factorial = mathematics.getFactorial(0);
console.log(factorial);

/*
 * Explanation
 * -----------
 * Approach: Compute the factorial iteratively by multiplying all numbers from n down to 2.
 * How it works:
 *   1. Reject negative inputs with an error message.
 *   2. Start fact = 1 and loop i from n down to 2, multiplying fact by i each step.
 *   3. Return fact (note: 0! and 1! correctly return 1 since the loop doesn't run).
 * Example: getFactorial(4) -> fact = 4*3*2 = 24.
 * Time Complexity: O(n)
 * Auxiliary Space: O(1)
 */
