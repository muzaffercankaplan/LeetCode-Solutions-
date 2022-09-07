/* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5. */

var findMedianSortedArrays = function (nums1, nums2) {
  let num = nums1.concat(nums2).sort((a, b) => a - b);
  let l = num.length;
  if (l % 2 === 0) {
    let min = num[l / 2 - 1];
    let max = num[l / 2];
    let mid = (min + max) / 2;
    return mid.toFixed(5);
  }
  return num[Math.ceil(l / 2 - 1)];
};
