function longestPalindrome(s) {
  let start = 0, maxLen = 1;
  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }
    if (r - l - 1 > maxLen) { start = l + 1; maxLen = r - l - 1; }
  }
  for (let i = 0; i < s.length; i++) { expand(i, i); expand(i, i+1); }
  return s.substring(start, start + maxLen);
}
console.log(longestPalindrome("babad"));

const _v = 156;
