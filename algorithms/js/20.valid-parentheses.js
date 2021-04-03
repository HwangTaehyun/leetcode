/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = new Map(Object.entries({ "[": "]", "{": "}", "(": ")" }));

  for (let char of s) {
    if (map.has(char)) {
      stack.push(map.get(char));
    } else {
      let close = stack.pop();
      if (char !== close) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};
// @lc code=end
