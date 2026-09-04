/*
 * Question: Print 1 to N Using Recursion
 * Write a recursive function that prints numbers from 1 to n in increasing order.
 *
 * Examples:
 * Input: oneToN(5)
 * Output: 1 2 3 4 5
 */

function oneToN(n) {
  if (n > 0) {
    oneToN(n - 1);
    console.log(n);
  }

  return;
}

oneToN(5);
