/* Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

 

Example 1:


Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
Example 2:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]] */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (matrix) {
  const endRow = matrix.length;
  const endCol = matrix[0].length;

  for (let row = 0; row < endRow; row++) {
    for (let col = 0; col < endCol; col++) {
      if (matrix[row][col] === 0) continue;
      const top = row - 1 >= 0 ? matrix[row - 1][col] : Infinity;
      const left = col - 1 >= 0 ? matrix[row][col - 1] : Infinity;
      matrix[row][col] = Math.min(top, left) + 1;
    }
  }

  for (let row = endRow - 1; row >= 0; row--) {
    for (let col = endCol - 1; col >= 0; col--) {
      if (matrix[row][col] === 0) continue;
      const bottom = row + 1 < endRow ? matrix[row + 1][col] : Infinity;
      const right = col + 1 < endCol ? matrix[row][col + 1] : Infinity;
      matrix[row][col] = Math.min(
        matrix[row][col],
        Math.min(bottom, right) + 1
      );
    }
  }

  return matrix;
};
