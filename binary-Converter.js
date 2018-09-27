/* jshint esversion:6 */

// Challenge
// Using the JavaScript language, have the function BinaryConverter(str) return the decimal form of the binary value. For example: if 101 is passed return 5, or if 1000 is passed return 8. 
// Sample Test Cases
// Input:"100101"

// Output:"37"


// Input:"011"

// Output:"3"

function BinaryConverter(str) {
    let myStr = str.split('').reverse();
    let sum = 0;
    for (let i = 0; i < myStr.length; i++) {
      if (myStr[i] == "1") {
        sum = sum + Math.pow(2,i);
      }
    }

  return sum;
}

console.log(BinaryConverter("011"))