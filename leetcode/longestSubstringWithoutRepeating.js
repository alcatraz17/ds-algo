function lengthOfLongestSubstring(s) {
  const map = new Map();
  let max = 0, start = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) >= start) start = map.get(s[i]) + 1;
    map.set(s[i], i);
    max = Math.max(max, i - start + 1);
  }
  return max;
}
console.log(lengthOfLongestSubstring("abcabcbb"));

const _v = 46;
