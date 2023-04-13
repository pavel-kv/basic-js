const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const string = convertString(str);
  options.addition = convertString(options.addition);
  options.separator || (options.separator = "+");
  options.additionSeparator || (options.additionSeparator = "|");
  options.repeatTimes || (options.repeatTimes = 1);
  options.additionRepeatTimes || (options.additionRepeatTimes = 1);

  const repeatedArray = [];
  for (let i = 0; i < options.repeatTimes; i += 1) {
    repeatedArray.push(string);
    if (options.addition) {
      for (let j = 0; j < options.additionRepeatTimes; j += 1) {
        repeatedArray.push(options.addition);
        repeatedArray.push(options.additionSeparator);
      }
      repeatedArray.pop();
    }
    repeatedArray.push(options.separator);
  }
  repeatedArray.pop();

  return repeatedArray.join("");

  function convertString(string) {
    if (string === null) {
      string = "null";
    } else if (typeof (str) !== "string") {
      string = `${string}`;
    }
    return string;
  }
}

module.exports = {
  repeater
};
