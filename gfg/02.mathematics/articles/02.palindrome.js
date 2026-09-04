/*
 * Question: Palindrome Number
 * Write a function that checks whether a given number is a palindrome
 * (reads the same forwards and backwards).
 *
 * Examples:
 * Input: 1213
 * Output: false
 */
const isPalindrome = (num) => {
  let number = num;
  let reverse = 0;

  while (number > 0) {
    let mod = number % 10;

    reverse = reverse * 10 + mod;

    number = Math.floor(number / 10);
  }

  return reverse === num;
};

console.log(isPalindrome(1213));
