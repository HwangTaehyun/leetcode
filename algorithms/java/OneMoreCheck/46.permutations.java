/*
 * @lc app=leetcode id=46 lang=java
 *
 * [46] Permutations
 */

// @lc code=start
class Solution {
  public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> ret = new ArrayList<>();

    // tmp list for status
    List<Integer> tmp = new ArrayList<>();

    backtrack(nums, ret, tmp);

    return ret;
  }

  public void backtrack(int[] nums, List<List<Integer>> ret, List<Integer> tmp) {
    // base case
    if (tmp.size() == nums.length()) {
      // copy
      ret.add(new ArrayList<>(tmp));
      return;
    }

    // recursion
    for (int num : nums) {
      tmp.add(num);
      backtrack(nums, ret, tmp);
      tmp.remove(tmp.size() - 1);
    }
  }
}
// @lc code=end
