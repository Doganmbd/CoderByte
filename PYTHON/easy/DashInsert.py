""" 
Dash Insert
Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Examples

Input: 99946
Output: 9-9-946

Input: 56730
Output: 567-30
 """

def Mbd(strParam):

  return (ord(strParam) & 1 )

def DashInsert(num_str) :
  result = num_str
  x = 0
  while(x < len(num_str) - 1) :
    if(Mbd(num_str[x]) and Mbd(num_str[x + 1])) :
      result = (result[:x + 1] + "-" + result[x + 1:])
      num_str = result
      x += 1
    x += 1
  return result

# keep this function call here 
DashInsert("99946")