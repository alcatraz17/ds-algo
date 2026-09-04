/*
 * Question: Insertion Sort
 * Write a function that sorts an array of numbers in ascending order
 * using the insertion sort algorithm.
 *
 * Examples:
 * Input: arr = [5, 6, 3, 2, 1]
 * Output: [1, 2, 3, 5, 6]
 */
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([5, 6, 3, 2, 1]));
