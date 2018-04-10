function RemoveDups(str) {
    let myStr = str.split("");
    let strArr = [];
    console.log(myStr);
    for (let i = 0; i < myStr.length; i++) {
        if (strArr.indexOf(myStr[i]) < 0) {
            strArr.push(myStr[i]);

        }
        
        
        
    }
    return strArr.join(' ');
    }


console.log(RemoveDups("tree traversal"));