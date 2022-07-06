/* 
Fibonacci Checker
Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.
Examples
Input: 34
Output: yes
Input: 54
Output: no
*/

function FibonacciChecker(num) { 

    if(num === 2 || num ===3) {
      return "yes" ;
    }
    let num1 = 0 ;
    let num2 = 1 ;
    let num3 = 1 ;
    for(let i = 0 ; i < num ; i++) {
      if(num1 === num) {
        return "yes"
      }
      num1 = num2 ;
      num2 = num3 ;
      num3 = num1 + num2
    }
    return "no"
  
  }
     
  // keep this function call here 
FibonacciChecker(34);