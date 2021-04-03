/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head) {
        return null;
    }
    let stack = [];
    while (head) {
        stack.push(head.val);
        head = head.next;
    }

    // let mod2Length = Math.floor(stack.length / 2);
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] !== stack[stack.length - 1 - i]) {
            return false;
        }
    }

    return true;
};

/*
var isPalindrome = function (head) {
    let start = head;
    let end = null;
    let length = 0;
    while (head) {
        length++;
        if (!head.next) {
            end = head;
            break;
        } else {
            head.next.prev = head;
            head = head.next;
        }
    }
    let cnt = Math.floor(length / 2);
    while (cnt > 0) {
        if (start.val !== end.val) {
            return false;
        }
        start = start.next;
        end = end.prev;
        cnt--;
    }
    return true;
};
*/
// @lc code=end
