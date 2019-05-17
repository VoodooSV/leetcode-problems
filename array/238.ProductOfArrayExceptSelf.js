/* 
https://leetcode.com/problems/product-of-array-except-self/ 

238. Product of Array Except Self
Medium

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

// Time complexity: O(N)
// Space complexity : O(N)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* var productExceptSelf1 = function(nums) {
    let output = [];
    let leftProducts = [];
    let rightProducts = [];

    leftProducts[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        leftProducts[i] = leftProducts[i-1] * nums[i-1];        
    }

    rightProducts[nums.length-1] = 1;
    for (let i = nums.length-2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i+1] * nums[i+1];
    }

    for (let i = 0; i < nums.length; i++) {
        output[i] = leftProducts[i] * rightProducts[i];        
    }

    return output;
}; */

// Time complexity: O(N)
// Space complexity : O(1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = [1];
    for (let i = 1; i < nums.length; i++) {
        output[i] = output[i-1] * nums[i-1];
    }

    rightMultiplier = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= rightMultiplier;
        rightMultiplier *= nums[i];
    }

    return output;
};

console.log(productExceptSelf([1,2,3,4]));
