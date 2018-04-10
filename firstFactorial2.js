// function FirstFactorial(num) { 
    
//       var factorial = 1;
    
//       for (var i = 1; i <= num; i++) {  
//         // multiply each number between 1 and num  
//         // factorial = 1 * 1 = 1
//         // factorial = 1 * 2 = 2
//         // factorial = 2 * 3 = 6
//         // factorial = 6 * 4 = 24
//         // ...
//         factorial = factorial * i;
//       }
    
//       return factorial;
             
//     }
       

// Second method

function FirstFactorial(num) { 
    
    if (num === 0 || num === 1) {
      return 1;
    }
    else {
         return num * FirstFactorial(num - 1); 
    }      
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  FirstFactorial(readline());