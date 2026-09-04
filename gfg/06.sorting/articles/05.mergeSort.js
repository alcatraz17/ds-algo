/*
 * Question: Merge Sort
 * Write a function that sorts an array of numbers in ascending order
 * using the merge sort algorithm (divide and conquer with a merge helper).
 *
 * Examples:
 * Input: arr = [10, 15, 20, 40, 5, 6, 6, 10, 15]
 * Output: [5, 6, 6, 10, 10, 15, 15, 20, 40]
 */
function merge(arr1, arr2) {
  let arr3 = [];
  let m = arr1.length;
  let n = arr2.length;

  let i = 0,
    j = 0,
    k = 0;

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      arr3[k] = arr1[i];
      k++;
      i++;
    } else {
      arr3[k] = arr2[j];
      k++;
      j++;
    }
  }

  while (i < m) {
    arr3[k] = arr1[i];
    k++;
    i++;
  }

  while (j < n) {
    arr3[k] = arr2[j];
    k++;
    j++;
  }

  return arr3;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

let a = [10, 15, 20, 40];
let b = [5, 6, 6, 10, 15];

let combinedArray = a.concat(b);

let sortedArray = mergeSort(combinedArray);

console.log(sortedArray);
