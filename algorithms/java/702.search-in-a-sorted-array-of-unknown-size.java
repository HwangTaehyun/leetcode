/**
 * // This is ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface ArrayReader {
 *     public int get(int index) {}
 * }
 */

class Solution {
    public int search(ArrayReader reader, int target) {
        int begin = 0;
        int end = 9999;
        int mid;
        while (begin <= end) {
            mid = (begin + end) / 2;
            int num = reader.get(mid);

            if (num > 9999 || target < num) {
                end = mid - 1;
            } else if (target > num) {
                begin = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;
    }
}
