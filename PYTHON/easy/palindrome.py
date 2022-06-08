""" Palindrome
Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

Input: "never odd or even"
Output: true

Input: "eye"
Output: true

"""

def Palindrome(str):
    string_no_spaces = str.replace(" ", "")
    if string_no_spaces == string_no_spaces[::-1]:
        return "true"
    return "false"

Palindrome("never odd or even")


def Palindrome2(string):

    if string.lower() == string[::-1].lower():
        return "true"
    else:
        return "false"

Palindrome2("never odd or even")