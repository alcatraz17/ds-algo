function isPal(str, start, end) {
  if (start >= end) {
    return true;
  }

  return str[start] === str[end] && isPal(str, start + 1, end - 1);
}

console.log(isPal('abba', 0, 3));
