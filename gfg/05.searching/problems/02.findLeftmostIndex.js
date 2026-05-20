function leftMostIndex(arr, X) {
  const length = arr.length;

  let left = 0;
  let right = length - 1;
  let foundIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === X) {
      foundIndex = mid;
      if (mid === 0) {
        return mid;
      } else {
        right = mid - 1;
      }
    } else if (arr[mid] < X) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return foundIndex;
}

console.log(leftMostIndex([1, 1, 2, 2, 2, 3, 4, 5], 2));
