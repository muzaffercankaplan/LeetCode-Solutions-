/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true */

var canConstruct = function (ransomNote, magazine) {
  let a = magazine.split("");

  for (let i in ransomNote) {
    if (!a.includes(ransomNote[i])) {
      return false;
    }

    const index = a.indexOf(ransomNote[i]);
    a.splice(index, 1);
  }
  return true;
};
