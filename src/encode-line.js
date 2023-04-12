const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return "";
  } else if (str.length === 1) {
    return str;
  }

  let currentSymbol = str[0];
  let repeatSymbol = 1;
  let encodedString = "";


  for (let i = 1; i < str.length; i++) {

    if (str[i] === currentSymbol) {
      repeatSymbol++;
    } else {
      encodedString += (repeatSymbol > 1) ? `${repeatSymbol}${currentSymbol}` : currentSymbol;
      currentSymbol = str[i];
      repeatSymbol = 1;
    }
  }

  encodedString += (repeatSymbol > 1) ? `${repeatSymbol}${currentSymbol}` : currentSymbol;

  return encodedString;
}

module.exports = {
  encodeLine
};
