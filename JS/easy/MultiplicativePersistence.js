/* 
Multiplicative Persistence
Have the function Multiplicative Persistence (num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number
of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3* 9 = 27 then 2 * 7 = 14 and finally 1
4 = 4 and you stop at 4.

Examples

Input: 4
Output: 0

Input: 25
Output: 2	

SOLUTION                                                            The challenge passes a string but it expects us to do Math on it so it needs to be converted to numbers. I will use the base 10 parameter of the toString() function to convert each entry in the array to a Number. Then I am going to multiply each entry in the array to get a total. I will repeat this until my total is a single digit number. The number of times I multiplied is returned as the answer.    

steps for solution

1) Initialize vars sum and loop
2)Convert str to an array of numbers
3) Loop until the sum of digits in array is a single digit number
4)Return number of loops as answer

*/