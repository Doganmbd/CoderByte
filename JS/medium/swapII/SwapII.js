let alpLower = /[a-z]/;
let alpUpper = /[A-Z]/;
let num = /[0-9]/;
let arr = [];

for(let i = 0; i < str.length; i++){
    if(str.charAt(i).match(alpLower)){
        arr.push(str.charAt(i));
    }
        
    }