/*
 * Question: Sum of First N Natural Numbers
 * Write a recursive function that returns the sum of the first n natural numbers (shown with both a tail-recursive and a plain recursive version).
 *
 * Examples:
 * Input: sumTail(5), sumRec(5)
 * Output: 15, 15
 */

function sumTail(n, acc = 0) {
  if (n == 0) {
    return acc;
  }

  return sumTail(n - 1, n + acc);
}

console.log(sumTail(5));

function sumRec(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumRec(n - 1);
}

console.log(sumRec(5));
