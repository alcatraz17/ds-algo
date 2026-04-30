function remDup(arr) {
  let temp = [arr[0]];
  let res = 1;

  for (let i = 1; i < arr.length; i++) {
    if (temp[res - 1] !== arr[i]) {
      temp[res] = arr[i];
      res++;
    }
  }

  for (let i = 0; i < res; i++) {
    arr[i] = temp[i];
  }

  return res;
}

let arr = [1, 1, 1, 2, 3, 4];
console.log(arr);

const lastDup = remDup(arr);

console.log(arr.slice(0, lastDup));
