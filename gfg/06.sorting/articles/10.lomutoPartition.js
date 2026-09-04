/*
 * Question: Lomuto Partition
 * Write a function that partitions an array around its last element (pivot)
 * using the Lomuto partition scheme, so that all elements smaller than the
 * pivot come before it and all larger elements come after it.
 *
 * Examples:
 * Input: arr = [10, 80, 30, 90, 40, 50, 70], l = 0, h = 6
 * Output: [10, 30, 40, 50, 70, 90, 80]
 */
let arr = [10, 80, 30, 90, 40, 50, 70];

function lomutoPartition(arr, l, h) {
  let pivot = arr[h];
  let i = l - 1;
  for (let j = l; j <= h - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[h]] = [arr[h], arr[i + 1]];
  return arr;
}

let n = arr.length;

arr = lomutoPartition(arr, 0, n - 1);
console.log(arr);
