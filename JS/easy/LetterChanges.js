/* 
Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i,o, u) and finally return this modified string.

Examples

Input: "hello*3"
Output: Ifmmp*3

Input: "fun times!"
Output: gvO Ujnft!

*/

/* 
SOLUTION

1-) We will use js charcode and charcodeAt methods
2-) We will convert the expressions in the String to lowercase with toLowerCase.
3-) We will scan the letters with replace and if there is a letter z first, we will convert it to a. If our letter is not the letter z, we will replace it with the next letter using String.fromcharcodeAt().
4-) Finally, we will change the vowels with capital letters.

ÇÖZÜM

1-) js charcode ve charcodeAt metodlarını kullanacaz
2-) string içindeki ifadeleri toLowerCase ile küçük harfe dönüştürecez.
3-) replace ile harfleri tarayacaz ve ilk olarak z harfi varsa a ya dönüştürecez. Eğer harfimiz z değilse String.fromcharcodeAt() kullanarak bir sonraki harf ile değiştirecez.
4-) Son olarak sesli harfleri büyük harfe dönüştürecez.
*/

function LetterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/g , (ch)=> {
        if(ch === "z") return "a" ;
        else return String.fromCharCode(ch.charCodeAt(0) + 1)
    } )
    
    let vowelCapitalize = newStr.replace(/[a|e|i|o|u]/gi , (ch)=> {ch.toUpperCase()} )
    
    return vowelCapitalize
}