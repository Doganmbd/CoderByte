""" 
Triple Double
Have the function TripleDouble(num1,num2) take both parameters being passed, and return 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2. For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter you have the straight triple 999 and you have a straight double, 99, of the same number in the second parameter. If this isn't the case, return 0.

Examples

Input: 465555 & num2 = 5579
Output: 1

Input: 67844 & num2 = 66237
Output: 0
 """
def TripleDouble(num1,num2):

  last1 = str(num1)

  for i in range(0, len(last1) - 2 ) :
    element = list(set(last1[i : i + 3]))

    if len(element) == 1 :
      last2 = str(num2) 
      for j in range ( 0 , len(last2) - 1) :
        elemnt2 = list(set(last2[j : j + 2]))

        if len(elemnt2) == 1 and elemnt2[0] == element[0] :
          return 1 
  return 0

# keep this function call here 
TripleDouble(465555 ,5579)