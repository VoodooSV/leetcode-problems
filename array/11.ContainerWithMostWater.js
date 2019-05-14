/* 
https://leetcode.com/problems/container-with-most-water/

11. Container With Most Water
Medium
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). 
Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2. 

Example:
Input: [1,8,6,2,5,4,8,3,7]
Output: 49

Good solutions:
https://leetcode.com/problems/container-with-most-water/discuss/6099/Yet-another-way-to-see-what-happens-in-the-O(n)-algorithm
https://leetcode.com/problems/container-with-most-water/discuss/6099/Yet-another-way-to-see-what-happens-in-the-O(n)-algorithm/236172
*/

// Time complexity: O(N)
// Space complexity : O(1)
var maxArea = function (height) {
    let maxVolume = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        minHeight = Math.min(height[left], height[right]);
        maxVolume = Math.max(maxVolume, minHeight * (right - left));

        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxVolume;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
