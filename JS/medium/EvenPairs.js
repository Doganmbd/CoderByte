/* 
Even Pairs
Have the function EvenPairs(str) take the str parameter being passed and determine if a pair of adjacent even numbers exists anywhere in the string. If a pair exists, return the string true, otherwise return false. For example: if str is "f178svg3k19k46" then there are two even numbers at the end of the string, "46" so your program should return the string true. Another example: if str is "7r5gg812" then the pair is "812" (8 and 12) so your program should return the string true.

Examples

Input: "3gy41d216"
Output: true

Input: "f09r27i8e67"
Output: false


*/





function EvenPairs(str) { 

    let number = str.match(/[0-9]+/g) ;
  
    let result = number.filter(i => (/[02468].*?[02468]/).test(i))
    return result.length > 0
  }
     
  // keep this function call here 

  EvenPairs("3gy41d216")


  /* 
  2.yol

  let str = "f178svg3k19k46";

let buildNum = '';
let counter = 0;
  for (let i = 1; i < str.length; i++) {
    if (isNaN(str[i] % 2)) {
      counter = 0;
    }
    else if (str[i] % 2 !== 0) {
      buildNum += str[i];
    }
    else if (str[i] % 2 === 0) {
      counter++;
    }
    
    if (counter === 2) { return true; } 
  }
  return false;

//Investigate it more!

console.log(str); */