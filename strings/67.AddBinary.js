/* 
https://leetcode.com/problems/add-binary/

67. Add Binary
Easy

Given two binary strings, return their sum (also a binary string).
The input strings are both non-empty and contains only characters 1 or 0.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"
*/

// Time complexity: O(N)
// Space complexity: O(N)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = [];
    let carry = '0'; // a carry is a digit that is transferred from one column of digits to another column of more significant digits
    const aLength = a.length;
    const bLength = b.length;

    let i = 0;
    while (i < Math.max(aLength, bLength)) { // O(N)
        let ones = 0; // '1'-counter
        if (i < aLength && a[aLength - i - 1] === '1') ones++;
        if (i < bLength && b[bLength - i - 1] === '1') ones++;
        if (carry === '1') ones++;

        carry = (ones >= 2) ? '1' : '0';
        result.push((ones % 2) ? '1' : '0');

        i++;
    }

    if (carry === '1') // for possible carry-processing
        result.push('1');

    result = result.reverse(); // O(N)
    return result.join(''); // O(N)
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));