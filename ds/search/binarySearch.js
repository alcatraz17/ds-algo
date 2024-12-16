const sortedNums = [
  1, 2, 3, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46,
  47, 48, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 67,
  68, 71, 72, 73, 74, 75, 76, 77, 78, 79, 82, 83, 84, 85, 86, 87, 88, 89, 95,
  96, 97, 98, 99,
];

const binarySearch = (arr, number) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === number) {
      return `${number} found at ${mid + 1} index`;
    } else if (arr[mid] > number) {
      end = mid - 1;
    } else start = mid + 1;
  }
  return `${number} not found inside the array!`;
};

console.log(binarySearch(sortedNums, 21));

const reverseArray = (arr) => {
  const newArr = [];
  let index = arr.length - 1;
  while (index >= 0) {
    newArr.push(arr[index]);
    index--;
  }

  return newArr;
};

console.log(reverseArray(sortedNums));
