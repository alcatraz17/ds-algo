function insertAtIndex(arr, val, index) {
  for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1];
  }

  arr[index] = val;

  return arr;
}

let myArr = [1, 2, 3, 4, 5];

console.log(insertAtIndex(myArr, 2, 4));
