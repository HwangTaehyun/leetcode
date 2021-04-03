/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  let dummyHead = new ListNode(0, null);

  //   head.prev = dummyHead;

  while (head.next) {
    head.next.prev = head;
    head = head.next;
  }

  // ... head.prev.prev head.prev head
  // dummyHead pointing to head
  // dummyHead's next pointing to head.prev
  // dummyHead pointing to head.prev
  // head pointing to head.prev

  // 1.next -> 2
  // 2.next -> 1

  // head.prev(dummy)'s next pointing to head.prev.prev

  // head.prev -> head
  // head.prev -> head.prev.prev

  while (head.prev) {
    console.log("--head--");
    console.log(head);
    console.log("--dummy--");
    console.log(dummyHead);
    dummyHead.val = head.val;
    // head.prev.next = head.prev.prev
    dummyHead.next = head.prev;
    console.log(dummyHead);
    dummyHead = dummyHead.next;
    head = head.prev;
  }

  return temp;
};
// @lc code=end
