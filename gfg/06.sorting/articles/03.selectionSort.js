/*
 * Question: Selection Sort
 * Write a function that sorts an array of numbers in ascending order
 * using the selection sort algorithm.
 *
 * Examples:
 * Input: arr = [1, 2, 1, 5, 6, 9, 8, 4, 2, 3]
 * Output: [1, 1, 2, 2, 3, 4, 5, 6, 8, 9]
 */
function selectionSort(arr) {
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    let minInd = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minInd]) {
        minInd = j;
      }
    }
    [arr[minInd], arr[i]] = [arr[i], arr[minInd]];
  }

  return arr;
}

console.log(selectionSort([1, 2, 1, 5, 6, 9, 8, 4, 2, 3]));
