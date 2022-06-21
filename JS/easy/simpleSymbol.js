/* 
Simple Symbols
Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several characters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

Examples

Input: "+d+=3=+s+"
Output: true

Input: "f++d+"
Output: false
 */


function SimpleSymbols(str) { 

    let alph = /[a-zA-Z]/ ;
    for (let i = 0 ; i < str.length ; i++) {
      if(alph.test(str[i])) {
        if ((str[i + 1] !== "+") || (str[i - 1] !== "+")) {
          return false
        }
      }
    }
    return true
  
  
  
  
  /* 
    if(str.match(/[^+][A-Za-z][^+]/g)) return false ;
    else if (str.match(/[+][A-Za-z][^+]/g)) return false ;
    else if (str.match(/[^+][A-Za-z][+]/g)) return false ;
    return true 
  */
  
  /* 
    let word = str.split("") ;
    let alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for ( let i = 0 ; i < word.length ; i++ ) {
      if(alph.indexOf(word[i]) != -1 && (word[ i - 1] != "+") || (word[i + 1] != "+")) {
        return false
      }
    }
    return true 
    */