const sortedArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};

console.log(sortedArray([1, 1, 2, 3, 4, 5]));
