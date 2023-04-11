const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const columns = matrix[0].length;
  const rows = matrix.length;
  let sumElements = 0;

  for (let i = 0; i < columns; i += 1) {
    let sumColumn = 0;
    let previousElement = 1;

    for (let j = 0; j < rows; j += 1) {
      if (previousElement !== 0) {
        sumColumn += matrix[j][i];
      }

      previousElement = matrix[j][i];
    }

    sumElements += sumColumn;
  }

  return sumElements;
}

module.exports = {
  getMatrixElementsSum
};
