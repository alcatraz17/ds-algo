/*
 * Question: Factorial of a Number (Recursive)
 * Write a recursive function that returns the factorial of a given number.
 *
 * Examples:
 * Input: 5
 * Output: 120
 */
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(5));
