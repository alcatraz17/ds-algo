function countOnes(arr) {
  const length = arr.length;

  let left = 0;
  let right = length - 1;
  let foundIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
      foundIndex = mid;
    }
  }

  return foundIndex + 1;
}

console.log(countOnes([1, 1, 1, 1, 1, 1, 1, 0, 0, 0]));
