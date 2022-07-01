/* 
First Factorial
Have the function FirstFactorial(num) take the num parameter being passed and return
the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
For the test cases, the range will be between 1 and 18 and the input will always be an integer.

Examples

Input: 4
Output: 24

Input: 8
Output: 40320
*/

function FirstFactorial(num) {
    let fact = 1
    
    for(let i = num ; i >= 1 ; i-- ){
      fact *= i
      }
    
    return fact
    }
  FirstFactorial(4)