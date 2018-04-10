function LetterChanges(str) {
    //let myStr = str.match(/[a-z ' ']/gi);
    let myStr = str.replace(/[a-z]/gi, function(char){
        return (char === 'z' || char === 'Z') ? 'a': String.fromCharCode(char.charCodeAt() + 1);
    });
    let capitalized = myStr.replace(/[a|e|i|o|u]/gi, function(vowel){
        return vowel.toUpperCase();
    });
    
    
    return capitalized;

}

console.log(LetterChanges("fun times!"));