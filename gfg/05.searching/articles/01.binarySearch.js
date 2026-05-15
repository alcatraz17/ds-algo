function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === element) {
      return mid;
    } else if (arr[mid] > element) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 3));
