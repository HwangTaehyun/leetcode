public class Kakao {
  public static int solution(String s) {
    int ret = 0;

    /* abcdefghij/klmnop/qrst/uvwxyz */

    for (int i = 0; i < s.length() - 1; i++) {
      if (i == 0) {
        ret += Math.min(s.charAt(i) - 'A', ('Z' - s.charAt(i)) + 1);
      }
      int l1 = Math.abs(s.charAt(i + 1) - s.charAt(i));
      boolean condition = (s.charAt(i + 1) - s.charAt(i)) < 0;
      int l2 = condition ? (s.charAt(i + 1) - 'A') + 1 + ('Z' - s.charAt(i))
                         : (s.charAt(i) - 'A') + 1 + ('Z' - s.charAt(i + 1));
      /*               (i)th    (i+1)th */
      /* 'Z' 'A'       'D'       'K'       'Z' */
      ret += Math.min(l1, l2);
    }

    return ret;
  }

  public static void main(String[] args) {
    int ans = solution("BDZ");
    System.out.println(ans);
  }
}

