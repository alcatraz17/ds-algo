function binSearch(arr, start, end, element) {
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === element) {
    return mid;
  } else if (arr[mid] > element) {
    return binSearch(arr, start, mid - 1, element);
  } else {
    return binSearch(arr, mid + 1, end, element);
  }
}

console.log(binSearch([1, 2, 3, 4, 5], 0, 5, 2));
