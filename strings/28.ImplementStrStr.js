/* 
https://leetcode.com/problems/implement-strstr/

28. Implement strStr()
Easy

Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

// Approach 1 (Brute force)
// Time complexity: O(length(haystack) * length(needle))
// Space complexity: O(1)
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) 
        return 0;

    let i = 0;
    while (i < haystack.length) {
        let j = 0;
        while (i+j < haystack.length && j < needle.length && 
            haystack[i+j] === needle[j]) {
            j++;
        }

        if (j === needle.length) 
            return i;

        i++;
    }

    return -1;
};

console.log(strStr("mississippi", "issip"));