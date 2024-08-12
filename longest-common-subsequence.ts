/*
1143. Longest Common Subsequence
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.

Plan:

- Setup DP matrix and algorithm
*/

export function longestCommonSubsequence(text1: string, text2: string): number {
    let result = 0
    let dp: number[][] = []
    dp = dp.fill([1, 2, 3])
    console.log(dp)
    printMatrix(dp)
    return result
}
export function createRandomMatrix(): number[][] {
    let matrix: number[][] = []
    for (let i = 0; i < 3; i++) {
        matrix[i] = []
        for (let j = 0; j < 3; j++) {
            matrix[i][j] = Math.floor(Math.random() * 10)
        }
    }
    return matrix
}
export function printMatrix(matrix: number[][]): void {
    console.log('Matrix:')
    // for (let row of matrix) {
    //     console.log(row)
    // }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i])
    }
}
