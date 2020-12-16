class Solution {
    public String stringShift(String s, int[][] shift) {
        StringBuffer ans = new StringBuffer(s);

        int cnt = 0;
        for (int[] arr : shift) {
            if (arr[0] == 0) {
                cnt += arr[1];
            } else {
                cnt -= arr[1];
            }
        }

        int modShift = cnt % s.length();
        System.out.println(modShift);
        if (modShift > 0) {
            ans.append(ans.substring(0, modShift));
            ans.delete(0, modShift);
        } else {
            String sub = ans.substring(ans.length() + modShift, ans.length());
            ans.insert(0, sub);
            ans.delete(ans.length() + modShift, ans.length());
        }
        return ans.toString();
    }
}
