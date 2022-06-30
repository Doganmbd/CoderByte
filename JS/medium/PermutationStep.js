/* 
Permutation Step
Have the function PermutationStep(num) take the num parameter being passed and return the next number greater than num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999).

Examples

Input: 11121
Output: 11211

Input: 41352
Output: 41523
*/

function PermutationStep(num) { 

    let str = num.toString().split("") ;
  
    for(i = str.length - 1 ; i > 0 ; i --) {
      let last = str[i]
      let prev = str[i - 1]
  
      if(last > prev) {
        str[i] = prev ;
        str[i - 1] = last ;
  
        let result = str.splice(i, str.length - 1).sort((a,b) => a - b) ;
        return str.concat(result).join("")
      } 
    }
    return -1
  }
     
PermutationStep(11121);