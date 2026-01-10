function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) { i++; [arr[i], arr[j]] = [arr[j], arr[i]]; }
  }
  [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
  return i + 1;
}
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) { const pi = partition(arr, low, high); quickSort(arr, low, pi-1); quickSort(arr, pi+1, high); }
  return arr;
}
console.log(quickSort([10, 7, 8, 9, 1, 5]));

const _v = 164;
