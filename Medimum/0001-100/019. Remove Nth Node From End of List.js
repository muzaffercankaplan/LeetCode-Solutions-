/* Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1] */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let index = 0;
  let l1 = head;
  let l2 = head;
  while (l1 !== null) {
    l1 = l1.next;
    index++;
  }
  l1 = head;
  if (n - index === 0) return head.next;
  else {
    while (n < index && l1 !== null) {
      l2 = l1;
      l1 = l1.next;
      n++;
    }
  }
  if (l1 === null) return null;
  l2.next = l1.next;
  return head;
};
