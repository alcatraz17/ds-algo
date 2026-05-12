function mSMax(arr) {
  let max = arr[0];
  let secondMax = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  return [max, secondMax];
}

console.log(
  mSMax([30, 11, 49, 41, 29, 15, 12, 46, 27, 6, 21, 50, 45, 6, 22, 38, 5])
);
