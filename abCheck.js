// Challenge

// Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 
// Sample Test Cases
// Input:"after badly"

// Output:"false"


// Input:"Laura sobs"

// Output:"true"



/* jshint esversion:6 */

function ABCheck(str) {
    let myStr = str.toLowerCase().split('');
    for (let i = 0; i <= myStr.length - 4; i++) {
      if((myStr[i] === 'a') && (myStr[i + 4] === 'b')) {
        
        return true;
        
      }
      if ((myStr[i] === 'b') && (myStr[i + 3] === 'a')) {
        return true;
      }
    }
    return false;
  }
  
  console.log(ABCheck("lane borrowed");