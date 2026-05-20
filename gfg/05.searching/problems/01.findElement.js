function findElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }

  return -1;
}

console.log(findElement([1, 2, 45, 4, 89, 8], 2));
