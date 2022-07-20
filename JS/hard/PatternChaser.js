/* 
Pattern Chaser
Have the function PatternChaser(str) take str which will be a string and return the longest pattern within the string. A pattern for this challenge will be defined as: if at least 2 or more adjacent characters within the string repeat at least twice. So for example "aabecaa" contains the pattern aa, on the other hand "abbbaac" doesn't contain any pattern. Your program should return yes/no pattern/null. So if str were "aabejiabkfabed" the output should be yes abe. If str were "123224" the output should return no null. The string may either contain all characters (a through z only), integers, or both. But the parameter will always be a string type. The maximum length for the string being passed in will be 20 characters. If a string for example is "aa2bbbaacbbb" the pattern is "bbb" and not "aa". You must always return the longest pattern possible.

Examples

Input: "da2kr32a2"
Output: yes a2

Input: "sskfssbbb9bbb"
Output: yes bbb

*/

function FindIndex(str,first,second) {
    let last1 = first + 2 ;
    let last2 = second + 2 ;
  
    let match = "" ;
    while (last1 < last2 && last2 < str.length + 1 && str.slice(first,last1) === str.slice(second,last2)) {
      match = str.slice(first,last1) ;
      last1 += 1 ;
      last2 += 1 ;
    }
    return match
  }
  function PatternChaser(str) { 
    let longestMatch = "" ;
    if(str.length < 5) {
      return "no null"
    }
  
    for (let i = 0 ; i < str.length - 5 ; i++) {
      for (let j = 0 ; j < str.length - 1 ; j++) {
      pattern = FindIndex(str,i,j)
      if(pattern.length > longestMatch.length) {
        longestMatch = pattern
      }
    }
  }
    if(longestMatch.length > 1) {
      return "yes " + longestMatch ;
    }
    else {
      return "no null"
    }
  }
     
  // keep this function call here 
  console.log(PatternChaser(readline()));