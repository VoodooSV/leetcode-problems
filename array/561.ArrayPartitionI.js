/* 
https://leetcode.com/problems/array-partition-i/

561. Array Partition I
Easy

Given an array of 2n integers, your task is to group these integers into n pairs of integer, 
say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]
Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

Note:
n is a positive integer, which is in the range of [1, 10000].
All the integers in the array will be in the range of [-10000, 10000].

Good explanation:
https://leetcode.com/problems/array-partition-i/discuss/102170/Java-Solution-Sorting.-And-rough-proof-of-algorithm./140345
I thought it as a dp problem to minimize the Sd:

after sorting the nums into a sorted array a0 <= a1 <= a2 <= .... <= a_(2n-1)
a_(2n-1) apparently is the bigger value of one tuple, let's say (a_i, a_(2n-1));
our goal is choosing a_i from a_0 to a_(2n-2), which will make the a_(2n-1) - a_i as small as possible and the rest (2n-2) numbers will form optimal values as well.
a_i must be a_(2n-2), because, you not only minimize the d_n = a_(2n-1) - a_(2n-2); but also removed the biggest value of the rest (2n-1) number;
..... this reasoning seems to work for me

another one
https://leetcode.com/problems/array-partition-i/discuss/102170/Java-Solution-Sorting.-And-rough-proof-of-algorithm.
*/

// Time complexity: O(n * log(n)) - Quicksort's time complexity
// Space complexity: O(log(n)) - Quicksort's space complexity
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b); // O(n * log(n))

  let result = 0;
  for (let i = 0; i < nums.length; i += 2) {
    result += nums[i];
  }

  return result;
};

console.log(arrayPairSum([6214, -2290, 2833, -7908]));
