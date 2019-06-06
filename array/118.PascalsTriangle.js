/* 
https://leetcode.com/problems/pascals-triangle/

118. Pascal's Triangle
Easy

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

// Time complexity: O(numRows ^ 2)
// Space complexity : O(numRows ^ 2)
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows < 1)
        return [];

    let result = [[1]];
    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i-1];
        let curRow = [1]; // first "1"
        for(let j = 1; j < i; j++) {
            curRow.push(prevRow[j-1] + prevRow[j]);
        }

        curRow.push(1); // last "1"
        result.push(curRow);
    }

    return result;
};

console.log(generate(5));