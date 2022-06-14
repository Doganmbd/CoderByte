/* 
AB Check
have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.

examples
Input: "after badly"
Output: false

input: "Laura sobs"
output: true
*/

function ABCheck(str) {
    const arr = str.split("");
    let check = ""

    for (let i = 0; i < arr.length - 4; i++) {
        if(arr[i].toLowerCase() == "a"){
            if(arr[i+4].toLowerCase() == "b"){
                check = "true";
                break;
            }
        }
        else {
            check = false
        }
    }
    return check;

}

ABCheck("Laura sobs");