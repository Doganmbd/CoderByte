""" 
Permutation Step
Have the function PermutationStep(num) take the num parameter being passed and return the next number greater than num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999).

Examples

Input: 11121
Output: 11211

Input: 41352
Output: 41523 

"""
def PermutationStep(num):

  num_string = str(num)
  if(len(num_string) == 1) :
    return -1
  for i in range(len(num_string) -2 , -1 , -1 ) :
    if num_string[i] < num_string[i + 1] :
      return int(num_string[:i] + num_string[i + 1:] + num_string[i])
  else :
    return -1
''' 
  num_string = list(str(num))
  i = len(num_string) - 2 
  while i >= 0 and num_string[i] >= num_string[i + 1] :
    i -= 1
  if i == -1 :
    return num_string
  j = len(num_string) - 1
  while num_string[j] <= num_string[i] :
    j -= 1
  num_string[i] , num_string[j] = num_string[j] , num_string[i] 
  num_string[i + 1:] = num_string[:i:-1]
  return int("".join(num_string))  '''
  



# keep this function call here 
PermutationStep(11121)