function VowelCount(str) {
    return str.match(/[aeiou]/gi)?str.match(/[aeiou]/gi).length:0;
}

VowelCount("hello")