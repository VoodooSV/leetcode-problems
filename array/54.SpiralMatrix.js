/* 
https://leetcode.com/problems/spiral-matrix/

54. Spiral Matrix
Medium

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

// Time complexity: O(M * N)
// Space complexity : O(M * N)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0)
        return [];

    const width = matrix[0].length;
    const height = matrix.length;
    
    let topBoundary = 0;
    let bottomBoundary = height-1;
    let leftBoundary = 0;
    let rightBoundary = width-1;
    
    let dir = 0;
    
    const result = [];
    
    while (result.length < width * height) {
        if (dir === 0) { // right
            for(let i = leftBoundary; i <= rightBoundary; i++) {
                result.push(matrix[topBoundary][i]);
            }
            topBoundary++;
        } else if (dir === 1) { // down
            for (let i = topBoundary; i <= bottomBoundary; i++) {
                result.push(matrix[i][rightBoundary]);
            }
            rightBoundary--;
        } else if (dir === 2) { // left
            for(let i = rightBoundary; i >= leftBoundary; i--) {
                result.push(matrix[bottomBoundary][i]);
            }
            bottomBoundary--;
        } else if (dir === 3) { // top
            for(let i = bottomBoundary; i >= topBoundary; i--) {
                result.push(matrix[i][leftBoundary]);
            }
            leftBoundary++;
        }
        
        dir = (dir + 1) % 4;
    }
    
    return result;
};

console.log(spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]));