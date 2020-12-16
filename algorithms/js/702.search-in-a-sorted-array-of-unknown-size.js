/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function(reader, target) {
    let left = 0;
    let right = 9999;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        num = reader.get(mid);

        if (num > 9999 || target < num) {
            right = mid - 1;
        } else if (target > num) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
};
