/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let Rlim = array.length;
  let Llim = 0;
  let mid = (Rlim + Llim) / 2;
  while ((array[Math.round(mid)] !== value) && (Rlim - Llim > 1)) {
    if (array[Math.round(mid)] < value) Llim = mid;
    else Rlim = mid;

    mid = (Llim + Rlim) / 2;
  }
  return Math.round(mid);
}

module.exports = findIndex;
