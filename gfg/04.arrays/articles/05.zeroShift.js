function zeroShift(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }

  return arr;
}

console.log(zeroShift([1, 2, 0, 3, 0, 4, 5, 6, 0, 7, 0, 8, 0, 9]));
