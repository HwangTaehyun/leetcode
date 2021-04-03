/*
 * @lc app=leetcode id=953 lang=javascript
 *
 * [953] Verifying an Alien Dictionary
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let orderMap = new Map();
  for (let i = 0; i < order.length; i++) {
    orderMap.set(order[i], i);
  }
  // js label statement
  search: for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];

    for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
      if (word1[j] !== word2[j]) {
        if (orderMap.get(word1[j]) > orderMap.get(word2[j])) {
          return false;
        }
        // search next word
        continue search;
      }
    }

    // 위의 for문을 모두 통과했다는 의미이므로, word1과 word2중 최소 길이만큼은 같다는 의미
    // ex. [apple, app]
    if (word1.length > word2.length) {
      return false;
    }
  }
  return true;
};
// @lc code=end
