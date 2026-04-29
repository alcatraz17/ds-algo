function arrayMax(arr) {
  let arrMax = arr[0];

  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > arrMax) arrMax = arr[i];
  }

  return arrMax;
}

console.log(arrayMax([1, 3, 2, 5, 489, 885, 56, 64, 654, 6, 5]));
