//returns length of a string
function returnLength(word:string): number{ // : number after function paramters define return type
    return word.length;
}

//return length of a string with spaces in beginning and end trimmed
function returnLengthNoSpace(word:string) : number{
    return word.trim().length;
}

//return length of a string using a bool option parameter to decide if returning length of string without spaces at start and end or with.
function returnLengthOptional(word:string, option?:boolean) : number // ? after option makes it an optional variable - not needed to be inputted on call, default is false for boolean
{
    //call functions as function already defined.
    if(option){
        return returnLengthNoSpace(word);
    }else{
        return returnLength(word);
    }
}

//call functions
console.log(returnLength(" test1 "));
console.log(returnLengthNoSpace(" test1 "));
console.log(returnLengthOptional(" test1 ", true));
console.log(returnLengthOptional(" test1 ", false));
console.log(returnLengthOptional(" test1 "));