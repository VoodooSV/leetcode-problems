/* 
https://leetcode.com/problems/plus-one/

66. Plus One
Easy

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

Example 3:
Input: [9,9,9]
Output: [1,0,0,0]
Explanation: The array represents the integer 1000.
*/

// Time complexity: O(N^2)
// Space complexity : O(1)
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     let index = digits.length - 1;

//     while (index >= 0) { // O(N)
//         if (digits[index] === 9) {
//             digits[index] = 0;

//             if (index === 0) {  
//                 digits.unshift(1); // O(N)
//             } 

//             index--;
//         } else {
//             digits[index]++;
//             break;
//         }
//     }

//     return digits;
// };

// Time complexity: O(N)
// Space complexity : O(1)
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let index = digits.length - 1;

    while (index >= 0) { // O(N)
        if (digits[index] === 9) {
            digits[index] = 0;

            index--;
        } else {
            digits[index]++;
            
            return digits;
        }
    }

    // Add headed 1
    digits.unshift(1); // O(N)

    return digits;
};

console.log(plusOne([9,9,9]));