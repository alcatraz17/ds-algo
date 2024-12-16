const reverseSortedNums = [
  99, 98, 97, 96, 95, 89, 88, 87, 86, 85, 84, 83, 82, 79, 78, 77, 76, 75, 74,
  73, 72, 71, 68, 67, 66, 65, 64, 63, 62, 61, 60, 58, 57, 56, 55, 54, 53, 52,
  51, 50, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 37, 36, 35, 34, 33, 32, 31,
  30, 29, 28, 27, 25, 24, 23, 22, 21, 19, 18, 17, 16, 15, 14, 12, 11, 10, 9, 8,
  7, 5, 3, 2, 1,
];

const reverseBinarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `${target} found at ${mid} index!`;
    } else if (arr[mid] > target) {
      start = mid + 1;
    } else end = mid - 1;
  }

  return `${target} not found inside the array!`;
};

console.log(reverseBinarySearch(reverseSortedNums, 99));
