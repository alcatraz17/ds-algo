function sortedRotated(arr) {
  const n = arr.length;
  let descents = 0;
  let ascents = 0;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) descents++;
    else ascents++;
  }

  return (
    (descents === 1 && arr[n - 1] < arr[0]) ||
    (ascents === 1 && arr[n - 1] > arr[0])
  );
}
