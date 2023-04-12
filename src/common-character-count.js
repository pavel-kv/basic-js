const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrStr1 = Object.entries(reduceToObject(s1));
  const objStr2 = reduceToObject(s2);

  return arrStr1.reduce((sum, item) => {
    sum += Math.min(item[1], objStr2[item[0]] || 0);
    return sum;
  }, 0);

  function reduceToObject(str) {
    return [...str].reduce((acc, char) => {
      acc[char] = acc[char] ? acc[char] + 1 : 1;
      return acc;
    }, {});
  }
}

module.exports = {
  getCommonCharacterCount
};
