const insertionSort = (arr) => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let key = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
};

console.log(insertionSort([1, 2, 3, 1, 0, 5, 2, 9, 8, 7, 6]));
