function returnLength(word) {
    return word.length;
}
function returnLengthNoSpace(word) {
    return word.trim().length;
}
function returnLengthOptional(word, option) {
    if (option) {
        return returnLengthNoSpace(word);
    }
    else {
        return returnLength(word);
    }
}
console.log(returnLength(" test1 "));
console.log(returnLengthNoSpace(" test1 "));
console.log(returnLengthOptional(" test1 ", true));
console.log(returnLengthOptional(" test1 ", false));
