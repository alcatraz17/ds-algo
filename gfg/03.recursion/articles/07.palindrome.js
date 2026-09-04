/*
 * Question: Palindrome Check Using Recursion
 * Write a recursive function that checks whether a given string is a palindrome by comparing characters from both ends.
 *
 * Examples:
 * Input: isPal('abba', 0, 3)
 * Output: true
 */

function isPal(str, start, end) {
  if (start >= end) {
    return true;
  }

  return str[start] === str[end] && isPal(str, start + 1, end - 1);
}

console.log(isPal('abba', 0, 3));
