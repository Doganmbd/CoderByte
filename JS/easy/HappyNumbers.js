/* 
Happy Numbers
Have the function HappyNumbers(num) determine if a number is Happy, which is a number whose sum of the square of the digits eventually converges to 1. Return true if it's a Happy number, otherwise return false.

For example: the number 10 is Happy because 1^2 + 0^2 converges to 1.
Examples

Input: 1
Output: true

Input: 101
Output: false

 */

function HappyNumbers(num) { 

    if(num === 1 ) return true ;
  
    let x = num   ;
    let y = {x : true}  ;
  
    for (let i = 0 ; i < 1000000 ; i ++) {
      x = x.toString().split("").map( (j)=> Math.pow(j,2) )
      .reduce((a,b)=> a + b) ;
      if (x === 1) return true ;
      if (y[x]) return false ;
      y[x] = true ;
  
    } 
    return false
  
  
  }
     
  // keep this function call here 
  console.log(HappyNumbers(readline()));