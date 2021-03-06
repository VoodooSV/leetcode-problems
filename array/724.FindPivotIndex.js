/* 
https://leetcode.com/problems/find-pivot-index/

724. Find Pivot Index
Easy

Given an array of integers nums, write a method that returns the "pivot" index of this array.
We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.
If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

Example 1:
Input: nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation: 
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.
 

Example 2:
Input: nums = [1, 2, 3]
Output: -1
Explanation: 
There is no index that satisfies the conditions in the problem statement.

Example 3:
Input: nums = [-1,-1,-1,0,1,1]
Output: 0
Explanation: 
The sum of the numbers to the left of index 0 (nums[0] = -1) is equal to the sum of numbers to the right of index 0 (the sum is equal to ZERO).
Also, 0 is the first index where this occurs.
 
Note:
The length of nums will be in the range [0, 10000].
Each element nums[i] will be an integer in the range [-1000, 1000].
*/

// Time complexity: O(N)
// Space complexity : O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (nums.length < 3) {
        return -1;
    }

    let totalSum = 0;
    nums.forEach(element => { // O(N)
        totalSum += element;
    });

    let leftSum = 0; 
    for (let i = 0; i < nums.length; i++) { // O(N)
        const rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));