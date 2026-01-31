function exponentialSearch(arr, target) {
  if (arr[0] === target) return 0;
  let i = 1;
  while (i < arr.length && arr[i] <= target) i *= 2;
  let left = Math.floor(i/2), right = Math.min(i, arr.length-1);
  while (left <= right) {
    const mid = Math.floor((left+right)/2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid+1; else right = mid-1;
  }
  return -1;
}
console.log(exponentialSearch([2,4,6,8,10,12,14], 10));

const _v = 217;
