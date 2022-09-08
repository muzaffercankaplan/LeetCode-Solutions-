/*Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length == 0) return true;
  let l1 = 0;
  let l2 = 0;
  while (l1 < s.length && l2 < t.length) {
    if (s.charAt(l1) == t.charAt(l2)) {
      l1++;
    }
    l2++;
    if (l1 == s.length) return true;
  }
  return false;
};
