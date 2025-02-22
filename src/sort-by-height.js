const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let index = [];

  arr.forEach((el, i) => {
    if (el === -1) {
      index.push(i);
    }
  });

  arr.sort((a, b) => a - b);

  arr.splice(0, index.length);

  for (let i = 0; i < index.length + arr.length; i++) {
    if (index.includes(i)) {
      arr.splice(i, 0, -1);
    }
  }

  return arr;
}

module.exports = {
  sortByHeight,
};
