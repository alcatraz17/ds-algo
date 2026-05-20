function countOnes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let firstZero = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 0) {
      firstZero = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return firstZero;
}

console.log(countOnes([1, 1, 1, 1, 0, 0, 0, 0, 0]));
