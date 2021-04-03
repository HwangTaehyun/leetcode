/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let curr = new ListNode(0);
    let dummyHead = curr;
    while (l1 || l2) {
        if (!l1) {
            curr.next = l2;
            l2 = l2.next;
            curr = curr.next;
            continue;
        }

        if (!l2) {
            curr.next = l1;
            l1 = l1.next;
            curr = curr.next;
            continue;
        }

        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    return dummyHead.next;
};
// @lc code=end
