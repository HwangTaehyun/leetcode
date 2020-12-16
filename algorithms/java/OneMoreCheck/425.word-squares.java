/*
 * @lc app=leetcode id=425 lang=java
 *
 * [425] Word Squares
 */

// @lc code=start
class Solution {
  public List<List<String>> wordSquares(String[] words) {
    for (String word : words) {
      int len = word.length();
      StringBuffer first = new StringBuffer();
      first.append(word);

      HashMap<Integer, HashSet<String>> map = new ArrayList<>();
      for (int i = 1; i < len; i++) {
        HashSet<String> set = new HashSet<>();
        map.put(i, set);
      }

      Iterator iter = set.iterator(); // Iterator 사용
      for (String word2 : words) {
        if (word2.equals(word)) {
          continue;
        }
        for (int i = 1; i < len; i++) {
          if (first.substring(i, i + 1) == word2.substring(0, 1)) {
            map.get(i).add(iter.next());
            break;
          }
        }
      }

      for (int i = 1; i < len; i++) {
        while (HashSet<String> set : map.get(i)) {
          Iterator it = set.iterator();
          while (it.hasNext()) {
            StringBuffer buf = new StringBuffer();
            buf.append(it.next());
          }
        }
      }
    }
  }
}
// @lc code=end
