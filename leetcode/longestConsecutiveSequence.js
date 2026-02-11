function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let len = 1;
      while (set.has(num + len)) len++;
      longest = Math.max(longest, len);
    }
  }
  return longest;
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

const _v = 244;
