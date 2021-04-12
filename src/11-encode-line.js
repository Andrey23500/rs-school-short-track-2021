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
  let strOut = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      if (count !== 1) strOut += count;
      strOut += str[i];
      count = 1;
    }
  }
  return strOut;
}

module.exports = encodeLine;
