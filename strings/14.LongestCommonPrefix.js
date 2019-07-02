/* 
https://leetcode.com/problems/longest-common-prefix/

14. Longest Common Prefix
Easy

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z. 
*/

// Time complexity: O(len(strs) * maxlen(strs[i]))
// Space complexity: O(maxlen(strs[i]))
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";

  let commonPrefix = "";
  let index = 0; // Start from the first char
  while (index < strs[0].length) {
    const char = strs[0][index];

    let i = 1; // Start from the second word
    while (
      i < strs.length &&
      index < strs[i].length &&
      strs[i][index] === char // Compare char with char in the current word
    ) {
      i++;
    }

    if (i === strs.length) {
      // All words have similar char in the index-position
      commonPrefix += char;
      index++;
    } else return commonPrefix;
  }

  return commonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
