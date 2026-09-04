/*
 * Question: Print N to 1 Using Recursion
 * Write a recursive function that prints numbers from n down to 1.
 *
 * Examples:
 * Input: nToOne(5)
 * Output: 5 4 3 2 1
 */

function nToOne(n) {
  if (n === 1) {
    return 1;
  }

  console.log(n);
  return nToOne(n - 1);
}

console.log(nToOne(5));
