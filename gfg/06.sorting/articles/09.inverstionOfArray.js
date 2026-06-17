//////////// NAIVE SOLUTION ////////////////
// const inversion = (arr) => {
//   let n = arr.length;

//   let count = 0;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[i] > arr[j]) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

// console.log(inversion([4, 3, 2, 1]));

function countInversion(arr, l, r) {
  let res = 0;

  if (l < r) {
    let m = Math.floor((l + r) / 2);
    res += countInversion(arr, l, m);
    res += countInversion(arr, m + 1, r);
    res += cMerge(arr, l, m, r);
  }

  return res;
}

function cMerge(arr, l, m, r) {
  let left = [],
    right = [];
  for (let i = l; i <= m; i++) {
    left.push(arr[i]);
  }

  for (let i = m + 1; i <= r; i++) {
    right.push(arr[i]);
  }

  let res = 0,
    i = 0,
    j = 0,
    k = l;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      k++;
      i++;
    } else {
      arr[k] = right[j];
      k++;
      j++;
      res += left.length - i;
    }
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }

  return res;
}

let arr = [2, 4, 1, 3, 5];

let n = arr.length;

console.log(countInversion(arr, 0, n - 1));
