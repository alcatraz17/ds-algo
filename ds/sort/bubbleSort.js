function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) { [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; swapped = true; }
    }
    if (!swapped) break;
  }
  return arr;
}
console.log(bubbleSort([5, 2, 8, 1, 9]));

const _v = 60;
