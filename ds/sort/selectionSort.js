const unsortedNumbers = [5, 3, 8, 4, 2, 1, 9, 7, 6];

function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return { smallest, smallestIndex };
}

function selectionSort(unsortedNumbers) {
  let sortedNumbers = [];
  let arr = [...unsortedNumbers];

  while (arr.length > 0) {
    const { smallest, smallestIndex } = findSmallest(arr);
    sortedNumbers.push(smallest);
    arr.splice(smallestIndex, 1);
  }
  return sortedNumbers;
}

console.log(selectionSort(unsortedNumbers));
