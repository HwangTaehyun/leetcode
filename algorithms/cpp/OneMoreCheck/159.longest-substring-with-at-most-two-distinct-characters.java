import java.util.*;

class Solution {
  public int lengthOfLongestSubstringTwoDistinct(String s) {
    int n = s.length();

    if (n < 3) {
      return n;
    }

    int left = 0;
    int right = 0;
    int maxLen = 2;

    HashMap<Character, Integer> hashmap = new HashMap<>();

    while (right < n) {
      if (hashmap.size() < 3) {
        hashmap.put(s.charAt(right), right++);
      }

      if (hashmap.size() == 3) {
        int del_idx = Collections.min(hashmap.values());
        hashmap.remove(s.charAt(del_idx));
        left = del_idx + 1;
      }

      maxLen = Math.max(maxLen, right - left - 1);
    }

    return maxLen;
  }
}
