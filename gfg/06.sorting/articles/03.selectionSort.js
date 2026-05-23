function selectionSort(arr) {
  let length = arr.length;

  for (let i = 1; i < length; i++) {
    let minInd = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minInd]) {
        minInd = j;
      }
    }
    [arr[minInd], arr[i]] = [arr[i], arr[minInd]];
  }

  return arr;
}

console.log(selectionSort([1, 2, 1, 5, 6, 9, 8, 4, 2, 3]));
