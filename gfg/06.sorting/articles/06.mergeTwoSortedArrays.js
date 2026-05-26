function merge(arr1, arr2) {
  let m = arr1.length;
  let n = arr2.length;

  let arr3 = [];

  let i = 0,
    j = 0,
    k = 0;

  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      arr3[k] = arr1[i];
      i++;
      k++;
    } else {
      arr3[k] = arr2[j];
      j++;
      k++;
    }
  }

  while (i < m) {
    arr3[k] = arr1[i];
    i++;
    k++;
  }

  while (j < n) {
    arr3[k] = arr2[j];
    j++;
    k++;
  }

  return arr3;
}

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

console.log(merge(arr1, arr2));
