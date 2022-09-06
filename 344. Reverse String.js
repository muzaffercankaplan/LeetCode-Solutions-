/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"] */

// <-- 1st solution -->

var reverseString = function (s) {
  return s.reverse();
};

// <-- 2nd solution -->

var reverseString = function (s) {
  let result = [...s];
  while (s.length) s.pop();
  while (result.length) s.push(result.pop());
};
