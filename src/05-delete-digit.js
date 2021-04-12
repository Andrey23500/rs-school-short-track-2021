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
  const str = n.toString();
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  const min = Math.min.apply(null, arr);
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min) index = i;
  }
  arr.splice(index, 1);
  return Number(arr.join(''));
}

module.exports = deleteDigit;
