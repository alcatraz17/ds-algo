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
