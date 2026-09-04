/*
 * Question: Factorial of a Number (Iterative)
 * Write a function that returns the factorial of a given number using a loop.
 *
 * Examples:
 * Input: 5
 * Output: 120
 */
const factorial = (num) => {
  let factorial = 1;
  while (num > 0) {
    factorial = num * factorial;
    num--;
  }

  return factorial;
};

console.log(factorial(5));
