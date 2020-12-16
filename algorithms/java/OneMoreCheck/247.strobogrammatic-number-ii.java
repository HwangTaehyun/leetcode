/*
 * @lc app=leetcode id=247 lang=java
 *
 * [247] Strobogrammatic Number II
 */

// @lc code=start
class Solution {
  public check(String s) {
    Stack<Character> stack;
    for (int i = 0; i < s.length(); i++) {
      sta
    }
  }
  public List<String> findStrobogrammatic(int n) {
    List<String> sample = new ArrayList<>(Arrays.asList("1", "8", "6", "9"));
    StringBuffer it1 = new StringBuffer();
    it1.append("1").append("8");
    StringBuffer it2 = new StringBuffer();
    it2.append("11").append("88").append("69").append("96");

    List<String> ret = new ArrayList<>(Arrays.asList(""));

    if (n == 1) {
      StringBuffer buffer = new StringBuffer();
      ret.add("1").add("8");
    }

    if (n == 2) {
      StringBuffer buffer = new StringBuffer();
      ret.add("11").add("88").add("69").add("96");
    }

    if (n % 2 == 1) {
      for (String elem : findStrobogrammatic(n - 1)) {
        StringBuffer buffer = new StringBuffer();
        buffer.append(elem);
        buffer.insert(n / 2, it.substring(0, 1));
        ret.add(buffer);
        StringBuffer buffer = new StringBuffer();
        buffer.append(elem);
        buffer.insert(n / 2, it.substring(1, 2));
        ret.add(buffer);
      }
    } else {
      for (String elem : findStrobogrammatic(n - 2)) {
        StringBuffer buffer = new StringBuffer();
        buffer.append(elem);
        buffer.insert(n / 2, it2.substring(0, 2));
        ret.add(buffer);
        StringBuffer buffer = new StringBuffer();
        buffer.append(elem);
        buffer.insert(n / 2, it2.substring(2, 4));
        ret.add(buffer);
        StringBuffer buffer = new StringBuffer();
        buffer.append(elem);
        buffer.insert(n / 2, it2.substring(4, 6));
        ret.add(buffer);
        StringBuffer buffer = new StringBuffer();
        buffer.append(elem);
        buffer.insert(n / 2, it2.substring(6, 8));
        ret.add(buffer);
      }
    }

    return ret;
  }
}
// @lc code=end
