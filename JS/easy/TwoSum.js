/* 
Two Sum
Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11

If there are no two numbers that sum to the first element in the array, return -1
Examples
Input: [17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]
Output: 6,11 10,7 15,2
Input: [7, 6, 4, 1, 7, -2, 3, 12]
Output: 6,1 4,3
*/

//   shift() metodu dizilerin ilk elemanlarını siler ve döndürür.

function TwoSum(arr) { 

    let first = arr.shift() ;
    let result = []
  
    for (let i = 0 ; i < arr.length ; i++) {
      for (let j = i + 1 ; j < arr.length ; j++ ) {
        if (arr[i] + arr[j] === first ) {
          result.push(`${arr[i].toString()},${arr[j].toString()}`) ;
          break
        }
      }
    }
    return (result.length === 0) ? -1 : result.join(" ")  ;
  
  }

  TwoSum([7, 6, 4, 1, 7, -2, 3, 12]);