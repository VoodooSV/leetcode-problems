/* 
https://leetcode.com/problems/max-consecutive-ones/

485. Max Consecutive Ones
Easy

Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.

    Note:
The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/

// Time complexity: O(N)
// Space complexity : O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let maxLength = 0;
  let currentLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentLength++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 0;
    }
  }

  maxLength = Math.max(maxLength, currentLength);
  return maxLength;
};

// Two pointers
// Time complexity: O(N)
// Space complexity : O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxConsecutiveOnes = function(nums) {
//   let maxLength = 0;
//   let end = 0;
//   while (end < nums.length) {
//     let start = end;
//     // Skip ones
//     while (nums[end] === 1) {
//       end++;
//     }

//     maxLength = Math.max(maxLength, end - start);

//     // Skip zeros
//     while (end < nums.length && nums[end] !== 1) {
//       end++;
//     }
//   }

//   return maxLength;
// };

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
