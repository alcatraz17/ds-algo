/*
 * Question: Square Root using Binary Search
 * Write a function that finds the floor of the square root of a given
 * number using binary search.
 *
 * Examples:
 * Input: num = 10
 * Output: 3
 */

function sq(num) {
  if (num === 0 || num === 1) return num;

  let ans;
  let start = 1;
  let end = num / 2;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sqr = mid * mid;

    if (sqr === num) {
      return mid;
    }

    if (sqr < num) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

console.log(sq(10));
