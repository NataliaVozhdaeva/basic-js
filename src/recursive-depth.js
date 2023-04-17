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
    let total = 1;
    let elems = arr;

    let count = (elems) => {
      elems.forEach((el) => {
        if (Array.isArray(el)) {
          total++;
          el.forEach((el) => {
            if (Array.isArray(el)) {
              total++;
              count(el);
            }
          });
        }
      });
    };

    count(elems);

    return total;
  }
}

module.exports = {
  DepthCalculator,
};
