""" 
Simple Symbols
Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several characters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.

Examples

Input: "+d+=3=+s+"
Output: true

Input: "f++d+"
Output: false
 """

def SimpleSymbols(strParam):

  count = 0 

  for i in strParam :
    if i.isalpha() :
      if count == len(strParam) - 1 :
        return "false"
      elif strParam[count - 1] == "+" and strParam[count + 1] == "+" and count > 0 and count < len(strParam) - 1 :
        count += 1 
        continue
      else :
        return "false"
    count += 1
  return "true"

# keep this function call here 

SimpleSymbols("f++d+")