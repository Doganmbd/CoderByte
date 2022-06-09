/* Palindrome
Have the function Palindrome(str) take the str parameter being passed and return the 
string true if the parameter is a palindrome, (the string is the same forward as it is backward) 
otherwise return the string false. For example: "racecar" is also "racecar" backwards. 
Punctuation and numbers will not be part of the string. 

Examples

Input: "never odd or even"
Output: true

Input: "eye"
Output: true

*/

//! Regular Expressions (düzenli ifadeler; kısaca regex veya regexp);  Bir metin içerisinde kalıplar (patterns) kullanarak esnek arama yapmanızı sağlar.

function Palindrome(str) {
    return str.split(' ').join('').split('').reverse().join('') === str.split(' ').join('');
  }

Palindrome("never odd or even")

function Palindrome(str) { 

    // code goes here  
    str = str.replace(/ /g,"").toLowerCase();
    let compareStr = str.split("").reverse().join("");
  
    if(compareStr === str){
      return true;
    }else{
      return false;
    }
  
    return str; 
  
  }
     
  // keep this function call here 
  console.log(Palindrome(readline()));
   