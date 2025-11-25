function rotate(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++)
    for (let j = i; j < n; j++)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  for (const row of matrix) row.reverse();
  return matrix;
}
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));

const _v = 28;
