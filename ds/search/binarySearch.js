const binarySearch = (array, target) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      high = mid - 1;
    } else low = mid + 1;
  }

  return "Not found!🙁";
};

const sortedNums = [
  1, 2, 3, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25,
  27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46,
  47, 48, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 67,
  68, 71, 72, 73, 74, 75, 76, 77, 78, 79, 82, 83, 84, 85, 86, 87, 88, 89, 95,
  96, 97, 98, 99,
];

// console.log(binarySearch(sortedNums, num));

// const binSearch = (sortedNums, num) => {
//   let low = 0;
//   let high = sortedNums[sortedNums.length - 1];
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (sortedNums[mid] === num) {
//       return mid;
//     } else if (sortedNums[mid] > num) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }

//   return "Not found";
// };

// const photonboxxSearch = (arr, num) => {
//   let low = 0;
//   let high = arr.length;

//   for (let i = 0; low <= high; i++) {
//     let mid = Math.floor((low + high) / 2);
//     if (arr[mid] === num) {
//       return mid;
//     } else if (mid > num) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }

//   return "Not found";
// };

// const photonboxxSearch = (arr, target) => {
//   let low = 0;
//   let high = arr.length - 1;

//   for (let i = 0; low <= high; i++) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] > target) {
//       high = mid - 1;
//     } else low = mid + 1;
//   }

//   return "Not Found!!";
// };

function photonboxxSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
      high = mid - 1;
    } else low = mid + 1;
  }

  return "Not found!";
}

console.log(photonboxxSearch(sortedNums, 100));
