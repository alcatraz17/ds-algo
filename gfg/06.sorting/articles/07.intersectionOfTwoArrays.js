function intersection(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;

  let i = 0,
    j = 0,
    k = 0;

  let arr = [];

  while (i < m && j < n) {
    if (i > 0 && arr1[i - 1] === arr1[i]) {
      i++;
      continue;
    }
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr[j]) {
      j++;
    } else {
      arr[k] = arr1[i];
      i++;
      j++;
      k++;
    }
  }

  return arr;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
const arr2 = [2, 4, 6, 8];

console.log(intersection(arr1, arr2));
