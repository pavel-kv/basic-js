const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringArr = n.toString().split("");
  let newArr = [];

  for (let i = 0; i < stringArr.length; i += 1) {
    const newNumber = Number((stringArr.slice(0, i).concat(stringArr.slice(i + 1))).join(""));
    newArr.push(newNumber);
  }
  return Math.max(...newArr);
}

module.exports = {
  deleteDigit
};
