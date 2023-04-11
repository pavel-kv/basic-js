const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
    const depthsOfSubArrays = [];

    if (arr.length === 0) {
      return 1;
    }

    arr.forEach(item => {
      let depth = 1;
      if (Array.isArray(item)) {
        depth += this.calculateDepth(item);
      }
      depthsOfSubArrays.push(depth);
    })

    return Math.max(...depthsOfSubArrays);
  }

}

module.exports = {
  DepthCalculator
};
