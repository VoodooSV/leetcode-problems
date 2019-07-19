/*
https://leetcode.com/problems/remove-element/

27. Remove Element
Easy

Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:
Given nums = [3,2,2,3], val = 3,
Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0,1,2,2,3,0,4,2], val = 2,
Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
Note that the order of those five elements can be arbitrary.
It doesn't matter what values are set beyond the returned length.

Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

*/

// Minimize swapping operation if value occures very rare in the array
// Time complexity: O(N)
// Space complexity : O(1)
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let p1 = 0;
  let p2 = nums.length;
  while (p1 < p2) {
    if (nums[p1] !== val) {
      p1++;
    } else {
      while (p1 < p2 && nums[p2 - 1] === val) {
        p2--;
      }

      if (p1 < p2) {
        // Swap val-element with non val-element
        nums[p1] = nums[p2 - 1];
        nums[p2 - 1] = val;
      }
    }
  }

  return p2;
};

// Time complexity: O(N)
// Space complexity : O(1)
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//   let p1 = 0;
//   for (let p2 = 0; p2 < nums.length; p2++) {
//     if (nums[p2] !== val) {
//       nums[p1] = nums[p2];
//       p1++;
//     }
//   }

//   return p1;
// };

// const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const nums = [2, 2, 2, 2, 2, 2, 2, 2];
const len = removeElement(nums, 2);
console.log(`New length: ${len}`);
for (let i = 0; i < len; i++) {
  console.log(nums[i]);
}
