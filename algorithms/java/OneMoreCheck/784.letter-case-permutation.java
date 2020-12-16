import java.util.ArrayList;
import java.util.List;

class Solution {
  public List<String> letterCasePermutation(String S) {
    if (S.length() == 0) {
      return new ArrayList<>();
    }
    char[] charArray = S.toCharArray();

    List<String> ret = new ArrayList<>();
    int idx = 0;
    backtrack(charArray, ret, idx);

    return ret;
  }

  public void backtrack(char[] charArray, List<String> ret, int idx) {
    // exit case
    if (idx == charArray.length) {
      ret.add(new String(charArray));
    } else {
      // recursion case
      // 'a1c2'
      char c = charArray[idx];
      if (isAlpha(c)) {
        charArray[idx] = Character.toLowerCase(c);
        backtrack(charArray, ret, idx + 1);
        charArray[idx] = Character.toUpperCase(c);
        backtrack(charArray, ret, idx + 1);
      } else {
        backtrack(charArray, ret, idx + 1);
      }
    }
  }

  public boolean isAlpha(char c) {
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
      return true;
    }
    return false;
  }
}
