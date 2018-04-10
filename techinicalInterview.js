function NoRepeat(str) {
    let obj = {};
    let myStr = str.split("");
    for ( let i = 0; i < myStr.length; i++){
        if (!obj[myStr[i]]){
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]] += 1;
        }
    
}
console.log(obj);
for ( i = 0; i < myStr.length; i++){
    if (obj[str[i]] == 1){
        return str[i];
    }
}
}

console.log(NoRepeat("AABBCCDEEFF"));



function Ispalindrome(str){
    str = str.toLowerCase();
    let str1 = str.match(/[a-z' ']/gi).join(' ');
    //console.log(myStr);
    let str2 = str.match(/[a-z' ']/gi).reverse().join(' ');
    // myStr = myStr.join(' ');
    //newStr = newStr.join(' ');
    console.log(str1);
    console.log(str2);
    if (str1 === str2){
        return true;
    }
    else {
        return false;
    }
     
}

console.log(Ispalindrome("Mom"));