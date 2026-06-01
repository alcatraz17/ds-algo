function union(a, b) {
  let m = a.length;
  let n = b.length;

  let arr = [];
  let i = 0,
    j = 0,
    k = 0;

  while (i < m && j < n) {
    if (a[i] === b[j]) {
      arr[k] = a[i];
      i++;
      j++;
      k++;
    } else if (a[i] < b[j]) {
      arr[k] = a[i];
      i++;
      k++;
    } else {
      arr[k] = b[j];
      j++;
      k++;
    }
  }

  while (i < m) {
    arr[k] = a[i];
    i++;
    k++;
  }

  while (j < n) {
    arr[k] = b[j];
    j++;
    k++;
  }

  return arr;
}

const arr1 = [1, 2, 3];
const arr2 = [2, 4];

console.log(union(arr1, arr2));
