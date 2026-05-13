function revArray(arr, k) {
  const length = arr.length;

  for (let i = 0; i < length; i += k) {
    let left = i;
    let right = Math.min(i + k - 1, length - 1);

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr;
}

console.log(revArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 6));
