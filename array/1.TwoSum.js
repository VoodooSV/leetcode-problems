/*
https://leetcode.com/problems/two-sum/

1. Two Sum
Easy
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. 
*/

// Time complexity: O(N)
// Space complexity : O(N)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let item = map[target - nums[i]]; // O(1), Try to find index of complementary number
        if (item == null) {
            map[nums[i]] = i; // O(1), Save number with its index
        } else {
            return [item, i];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));