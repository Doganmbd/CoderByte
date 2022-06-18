/* 
Have the function wordCount(str) take the str string parameter being passed and return the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated by single spaces.

input : "Hello World"
output : 2

input : "One 22 Three"
output : 3
*/

function wordCount(str) {
    return str === "" ? 0 : str.split(" ").length;
}

wordCount("One 22 Three")