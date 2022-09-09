/* Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const result = Array.from({ length: 26 }, () => 0);
  let L = 0;
  let R = s1.length;

  if (s1.length > s2.length) return false;

  for (let i in s1) {
    result[s1.charCodeAt(i) - 97]++;
    result[s2.charCodeAt(i) - 97]--;
  }

  while (L < s2.length) {
    if (result.every((cv) => cv === 0)) return true;

    result[s2.charCodeAt(L++) - 97]++;
    result[s2.charCodeAt(R++) - 97]--;
  }

  return false;
};
