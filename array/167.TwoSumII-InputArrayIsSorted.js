/* 
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

167. Two Sum II - Input array is sorted

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:
Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.

Example:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

// Using Two-pointers technique
// Time complexity: O(N)
// Space complexity : O(1)
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (right > left) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};

// Using Hashmap
// Time complexity: O(N)
// Space complexity : O(N)
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(numbers, target) {
//   const hashMap = {};
//   for (let i = 0; i < numbers.length; i++) {
//     const index1 = hashMap[target - numbers[i]];
//     if (index1) {
//       return [index1, i + 1];
//     }

//     hashMap[numbers[i]] = i + 1;
//   }
// };

console.log(twoSum([2, 7, 11, 15], 9));
