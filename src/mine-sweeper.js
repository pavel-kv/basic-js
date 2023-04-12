const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const setupArr = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const subArray = [];
    for (let j = 0; j < matrix[0].length; j += 1) {
      subArray.push(countMinesNear(i, j));
    }
    setupArr.push(subArray);
  }

  return setupArr;

  function countMinesNear(row, column) {
    let sum = 0;
    for (let i = - 1; i <= 1; i += 1) {
      for (let j = - 1; j <= 1; j += 1) {
        if (!(row + i === row && column + j === column)) {
          if (isInMatrix(row + i, column + j) && matrix[row + i][column + j]) {
            sum += 1;
          }
        }
      }
    }

    return sum;
  }

  function isInMatrix(row, column) {
    return (row >= 0 && row < matrix.length) && (column >= 0 && column < matrix[0].length);
  }
}

module.exports = {
  minesweeper
};
