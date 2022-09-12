/* Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1. */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s.length;

  let obj = {};
  let oddFound = false;
  let result = 0;

  for (let letter of s) {
    obj[letter] = obj[letter] + 1 || 1;
  }

  for (let num of Object.values(obj)) {
    if (num % 2 === 0) result += num;
    else {
      oddFound = true;
      result += num - 1;
    }
  }

  if (oddFound) return result + 1;
  return result;
};
