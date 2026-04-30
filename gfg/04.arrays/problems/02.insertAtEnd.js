function insertAtEnd(arr, ele) {
  arr[arr.length] = ele;

  return arr;
}

console.log(insertAtEnd([1, 2, 3], 5));
