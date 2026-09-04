/*
 * Question: Number of Digits
 * Write a function that counts the number of digits in a given number.
 *
 * Examples:
 * Input: 1234
 * Output: 4
 */
const numberOfDigits = (num) => {
  let digits = 0;
  while (num > 0) {
    num = Math.floor(num / 10);

    digits++;
  }

  return digits;
};

console.log(numberOfDigits(1234));
