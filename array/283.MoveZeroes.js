/* 
https://leetcode.com/problems/move-zeroes/

283. Move Zeroes
Easy

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

// Time complexity: O(N)
// Space complexity : O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let firstZeroItemIndex = -1;
    let currentItemIndex = 0;

    while (currentItemIndex < nums.length && nums[currentItemIndex] !== 0) {
        currentItemIndex++;
    }

    firstZeroItemIndex = currentItemIndex;
    currentItemIndex++;

    while (currentItemIndex < nums.length) {
        if (nums[currentItemIndex] !== 0) {
            nums[firstZeroItemIndex] = nums[currentItemIndex];
            nums[currentItemIndex] = 0;

            firstZeroItemIndex++;
        }

        currentItemIndex++;
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));