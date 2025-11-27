function rob(nums) {
  if (nums.length <= 2) return Math.max(...nums);
  let prev2 = nums[0], prev1 = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    const curr = Math.max(prev1, prev2 + nums[i]);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}
console.log(rob([2,7,9,3,1]));

const _v = 36;
