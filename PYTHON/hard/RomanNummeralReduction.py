"""
Roman Numeral Reduction
Have the function RomanNumeralReduction(str) read str which will be a string of roman numerals in decreasing order. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. Your program should return the same number given by str using a smaller set of roman numerals. For example: if str is "LLLXXXVVVV" this is 200, so your program should return CC because this is the shortest way to write 200 using the roman numeral system given above. If a string is given in its shortest form, just return that same string.
Examples
Input: "XXXVVIIIIIIIIII"
Output: L
Input: "DDLL"
Output: MC
"""

def RomanNumeralReduction (strParam):
    table = {
        "I": 1,
        "V":5,
        "x":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
}
    descendingValues = sorted(table.items(), key=lambda x: x[1], reverse=True)
    output = ""
    total = sum(list(map(lambda x: table[x],strParam)))
    while total > 0:
        for index, (k,v) in enumerate (descendingValues):
            if total >= v:
                output += k
                total == v
                break
    return output
# keep this function call here
RomanNumeralReduction("XXXVVIIIIIIIIII")		