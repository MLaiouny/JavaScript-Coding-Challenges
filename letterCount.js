/*jshint esversion:6 */

// Challenge
// Using the JavaScript language, have the function LetterCount(str) take the str parameter being 
// passed and return the first word with the greatest number of repeated letters. 
// For example: "Today, is the greatest day ever!" should return greatest because it has 
// 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with 
// repeating letters return -1. Words will be separated by spaces. 
// Sample Test Cases
// Input:"Hello apple pie"

// Output:Hello


// Input:"No words"

// Output:-1

function LetterCount(str) {
    let myStr = str.split(' ');
    let objCount = {};
    let obj = {};
    let myIndex = 0;
    let myNum = 0;
    for (let i = 0; i < myStr.length; i++) {
        for (let j = 0; j < myStr[i].length; j++) {
            if (obj[myStr[i][j]]) {
                obj[myStr[i][j]] += 1;
            } else {
                obj[myStr[i][j]] = 1;
            }
        }
        //console.log(obj);
        let maxNum = 0;

        for (let key in obj) {
            if (obj[key] > maxNum) {
                maxNum = obj[key];

            }

        }
        objCount[i] = maxNum;
        maxNum = 0;

        obj = {};
    }
    // let myNum = 0;

    for (let key in objCount) {
        if (objCount[key] > myNum) {
            myNum = objCount[key];
            myIndex = key;
        }
    }
    if (myNum < 2) {
        return -1;
    } else {
        return myStr[myIndex];
    }


    // return myStr[myIndex];
}

console.log(LetterCount("No words"));