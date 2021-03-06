/* Roman Numeral Reduction
Have the function RomanNumeralReduction(str) read str which will be a string of roman numerals in decreasing order. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. Your program should return the same number given by str using a smaller set of roman numerals. For example: if str is "LLLXXXVVVV" this is 200, so your program should return CC because this is the shortest way to write 200 using the roman numeral system given above. If a string is given in its shortest form, just return that same string.

Examples

Input: "XXXVVIIIIIIIIII"
Output: L

Input: "DDLL"
Output: MC

*/


function RomanNumeralReduction(str) { 

    let objRomanNumber = {
      "M" : 1000 ,
      "D" : 500 ,
      "C" : 100 ,
      "L" : 50 ,
      "X" : 10 ,
      "V" : 5 ,
      "I" : 1 
    }
  
    let count = 0 ;
  
    for(let i = 0 ; i < str.length ; i ++) {
      const firstNum = objRomanNumber[str[i]] ;
      const secondNum = objRomanNumber[str[i + 1]];
      (firstNum < secondNum) ? (count -= firstNum) : (count += firstNum);
  
    }
  
    let romanStr ="" ;
    for(let i in objRomanNumber) {
      while(count >= objRomanNumber[i]) {
        romanStr += i ;
        count -= objRomanNumber[i]
      } 
    }
  
  
    return romanStr; 
  
  }
     
  // keep this function call here 
  console.log(RomanNumeralReduction(readline()));