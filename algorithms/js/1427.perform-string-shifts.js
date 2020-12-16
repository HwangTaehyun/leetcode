/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    let cnt = 0;
    shift.forEach((arr) => {
        if (arr[0] === 0) {
            cnt += arr[1];
        } else {
            cnt -= arr[1];
        }
    });

    let modShift = cnt % s.length;
    if (modShift > 0) {
        s = s.slice(modShift) + s.slice(0, modShift);
    } else {
        let i = s.length + modShift;
        s = s.slice(i) + s.slice(0, i);
    }

    return s;
};
