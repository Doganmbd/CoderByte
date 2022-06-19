/* 
Searching Challenge
Have the function SearchingChallenge(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter.
Examples
Input: "H3ello9-9"
Output: 4
Input: "One Number*1*"
Output: 0
*/

function SearchingChallenge(str) { 
 
      let len = str.match(/[a-zA-Z]/g ).length ;
      let count = 0 ;
      for(let i = 0 ; i < str.length ; i++) {
        if( +str[i]) {
          count += +str[i] ;
        }
      }
      return Math.round(count/len) 

    }
       
    console.log(SearchingChallenge(readline()));


    /* solution 2 */

    return Math.round(str.match(/[0-9]/g).reduce((i,j) => +i + +j) / str.match(/[a-zA-Z]/g).length )