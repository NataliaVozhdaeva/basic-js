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
  let arr = str.split('');
  let current = [];
  for (let i = 0, count = 1; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) count++;
    else {
      if (count === 1) {
        current.push([arr[i]]);
      } else {
        current.push([count + arr[i]]);
      }
      count = 1;
    }
  }
  return current.join('');
}

module.exports = {
  encodeLine,
};
