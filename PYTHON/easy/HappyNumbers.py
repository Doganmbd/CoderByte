""" 
Happy Numbers
Have the function HappyNumbers(num) determine if a number is Happy, which is a number whose sum of the square of the digits eventually converges to 1. Return true if it's a Happy number, otherwise return false.

For example: the number 10 is Happy because 1^2 + 0^2 converges to 1.

Examples

Input: 1
Output: true

Input: 101
Output: false
 """
def HappyNumbers(num):
  res = 0 

  while num > 0 :
    res += (num % 10) ** 2
    num = num // 10

  if res == 1 :
    return "true"
  elif res < 10 :
    return "false" 
  else :
    return HappyNumbers(res)

# keep this function call here 
HappyNumbers(1)