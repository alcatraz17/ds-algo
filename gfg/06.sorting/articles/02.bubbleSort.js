/*
 * Question: Bubble Sort
 * Write a function that sorts an array of numbers in ascending order
 * using the bubble sort algorithm (with an early-exit optimization).
 *
 * Examples:
 * Input: arr = [1, 4, 5, 1, 9, 8, 5, 7, 9]
 * Output: [1, 1, 4, 5, 5, 7, 8, 9, 9]
 */
function bubbleSort(arr) {
  let length = arr.length;
  let swapped = false;

  for (let i = 0; i < length; i++) {
    swapped = false;
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (swapped === false) break;
  }

  return arr;
}

console.log(bubbleSort([1, 4, 5, 1, 9, 8, 5, 7, 9]));
