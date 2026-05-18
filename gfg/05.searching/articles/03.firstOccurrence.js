// a) If (high >= low)
// b) Calculate  mid = low + (high – low)/2;
// c) If ((mid == 0 || x > arr[mid-1]) && arr[mid] == x)
//         return mid;
// d) Else if (x > arr[mid])
//        return first(arr, (mid + 1), high, x, n);
// e) Else
//        return first(arr, low, (mid -1), x, n);
// f) Otherwise return -1;

function firstOccurrence(arr, element) {
  const length = arr.length;
  let low = 0;
  let high = length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === element) {
      if (mid === 0 || arr[mid - 1] !== element) {
        return mid;
      } else {
        high = mid - 1;
      }
    } else if (arr[mid] < element) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(firstOccurrence([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7], 7));
