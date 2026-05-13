// function meanMedian(arr) {
//   let middleElement = Math.floor(arr.length / 2);
//   const median = (arr[middleElement] + arr[middleElement + 1]) / 2;

//   const sum = arr.reduce((acc, ele) => {
//     return acc + ele;
//   }, 0);

//   return [sum / arr.length, middleElement];
// }

// console.log(
//   meanMedian([30, 11, 49, 41, 29, 15, 12, 46, 27, 6, 21, 50, 45, 6, 22, 38, 5])
// );

class Sol {
  mean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum / arr.length;
  }

  median(arr) {
    const sortedArr = arr.sort((a, b) => a - b);

    if (sortedArr.length % 2 === 1) {
      return sortedArr[Math.floor(sortedArr.length / 2)];
    } else {
      return Math.floor(
        (sortedArr[length / 2 - 1] + sortedArr[length / 2]) / 2
      );
    }
  }
}

const sol = new Sol();
console.log(
  sol.mean([30, 11, 49, 41, 29, 15, 12, 46, 27, 6, 21, 50, 45, 6, 22, 38, 5])
);
console.log(
  sol.median([30, 11, 49, 41, 29, 15, 12, 46, 27, 6, 21, 50, 45, 6, 22, 38, 5])
);
