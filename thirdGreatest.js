/* jshint esversion: 6 */

// Write a function that takes a string as parameter and returns the third largest word in the string.

function ThirdGreatest(str) {
  let myArr = str.split(' ');
  let arrSize = myArr.sort(function(a,b) {
    return b.length - a.length;
  })
  console.log(arrSize);
  return arrSize[2];
}

console.log(ThirdGreatest('This is the greatest Animal'));