/* 
https://leetcode.com/problems/diagonal-traverse/

498. Diagonal Traverse
Medium

Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

Example:
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output:  [1,2,4,7,5,3,6,8,9]
Explanation:
https://assets.leetcode.com/uploads/2018/10/12/diagonal_traverse.png

Note:
The total number of elements of the given matrix will not exceed 10,000.
*/

// Time complexity: O(M * N)
// Space complexity : O(M * N)
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (matrix.length === 0)
        return [];

    let i = 0;
    let j = 0;
    let direction = true; // Up-Right
    const result = [];
    const width = matrix[0].length;
    const height = matrix.length;

    while (i <= height && j <= width) {
        result.push(matrix[i][j]);

        if (i === height - 1 && j === width - 1)
            break;

        if (direction) { // Up-Right
            if (i > 0 && j < width - 1) {
                i--;
                j++;
            } else { // i === 0 || j === width - 1
                direction = !direction; // Down-Left

                if (j === width - 1) { // Check column first for the case when the upper-right corner occur
                    i++;
                } else {
                    j++;
                }
            }
        } else { // Down-Left
            if (i < height - 1 && j > 0) {
                i++;
                j--;
            } else { // i === height - 1 || j === 0
                direction = !direction; // Up-Right

                if (i === height - 1) { // Check row first for the case when the bottom-left corner occur
                    j++;
                } else {
                    i++;
                }
            }
        }
    }

    return result;
};

console.log(findDiagonalOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
]));

// console.log(findDiagonalOrder([
//     [1,2],
//     [3,4]
// ]));

// console.log(findDiagonalOrder([
//     [2,3]
// ]));