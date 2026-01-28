function maxArea(height) {
  let max = 0, left = 0, right = height.length - 1;
  while (left < right) {
    const w = right - left;
    const h = Math.min(height[left], height[right]);
    max = Math.max(max, w * h);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

const _v = 205;
