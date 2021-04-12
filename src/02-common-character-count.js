/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const str1 = s1.split('');
  const str2 = s2.split('');
  let countLength = str2.length;
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < countLength; j++) {
      if (str1[i] === str2[j]) {
        count += 1;
        countLength--;
        str2.splice(j, 1);
        str1.splice(i, 1);
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
