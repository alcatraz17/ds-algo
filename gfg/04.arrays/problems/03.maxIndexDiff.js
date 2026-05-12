function maxIndexDiff(arr) {
  let length = arr.length;

  let leftMinimum = new Array(length);
  let rightMaximum = new Array(length);

  leftMinimum[0] = arr[0];
  rightMaximum[length - 1] = arr[length - 1];

  let leftIndex = 0;
  let rightIndex = 0;
  let maxDistance = -1;

  for (let i = 1; i < length; i++) {
    leftMinimum[i] = Math.min(leftMinimum[i - 1], arr[i]);
  }
  for (let j = length - 2; j >= 0; j--) {
    rightMaximum[j] = Math.max(rightMaximum[j + 1], arr[j]);
  }

  while (leftIndex < length && rightIndex < length) {
    if (leftMinimum[leftIndex] <= rightMaximum[rightIndex]) {
      maxDistance = Math.max(maxDistance, rightIndex - leftIndex);
      rightIndex++;
    } else {
      leftIndex++;
    }
  }

  return maxDistance;
}

console.log(maxIndexDiff([2, 1, 1, 4, 2, 6, 4, 5, 1]));
