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
  const arr1 = arr.filter((el) => el !== -1);
  const arrOut = arr;
  for (let j = arr1.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr1[i] > arr1[i + 1]) {
        const temp = arr1[i];
        arr1[i] = arr1[i + 1];
        arr1[i + 1] = temp;
      }
    }
  }
  let k = 0;
  for (let m = 0; m < arrOut.length; m++) {
    if (arr1.length !== 0) {
      if (arrOut[m] !== -1) {
        arrOut[m] = arr1[k];
        k++;
      }
    } else {
      for (let j = arrOut.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          if (arrOut[i] > arrOut[i + 1]) {
            const temp = arrOut[i];
            arrOut[i] = arrOut[i + 1];
            arrOut[i + 1] = temp;
          }
        }
      }
    }
  }

  return arrOut;
}

module.exports = sortByHeight;
