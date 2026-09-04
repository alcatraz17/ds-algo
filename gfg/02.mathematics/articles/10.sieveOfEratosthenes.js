/*
 * Question: Sieve of Eratosthenes
 * Write a function that finds all prime numbers up to a given number
 * using the Sieve of Eratosthenes.
 *
 * Examples:
 * Input: 11
 * Output: 2, 3, 5, 7, 11
 */
const sieveOfEratosthenes = (num) => {
  let arr = new Array(num + 1).fill(true);

  let results = [];

  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i * i <= num; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }

  for (let k = 0; k <= num; k++) {
    if (arr[k]) {
      results.push(k);
    }
  }

  return results;
};

console.log(sieveOfEratosthenes(11));
