/*
 * Question: Merge Two Sorted Arrays
 * Write a function that takes two sorted arrays and returns a single
 * sorted array containing all their elements.
 *
 * Examples:
 * Input: arr1 = [1, 3, 5, 7, 9], arr2 = [2, 4, 6, 8, 10]
 * Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
function merge(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;

  let arr3 = [];

  let i = 0,
    j = 0,
    k = 0;

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      arr3[k] = arr1[i];
      i++;
      k++;
    } else {
      arr3[k] = arr2[j];
      j++;
      k++;
    }
  }

  while (i < m) {
    arr3[k] = arr1[i];
    i++;
    k++;
  }

  while (j < n) {
    arr3[k] = arr2[j];
    j++;
    k++;
  }

  return arr3;
}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

console.log(merge(arr1, arr2));
