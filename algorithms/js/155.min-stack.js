/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.arr = [];
    this.minimumLocation = null;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.arr.push(val);
    if (this.minimumLocation === null) {
        this.minimumLocation = 0;
    }
    if (val < this.arr[this.minimumLocation]) {
        this.minimumLocation = this.arr.length - 1;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (this.arr.length === 1) {
        this.minimumLocation = null;
        return this.arr.pop();
    }

    if (this.minimumLocation === this.arr.length - 1) {
        let min = Infinity;
        for (let i = 0; i < this.arr.length - 1; i++) {
            if (this.arr[i] < min) {
                min = this.arr[i];
                this.minimumLocation = i;
            }
        }
    }

    return this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.arr[this.minimumLocation];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
