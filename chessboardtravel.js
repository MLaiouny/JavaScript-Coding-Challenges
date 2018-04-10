function ChessboardTraveling(str) {
    let begX =str[1];
    let begY = str[3];
    let endX = str[6];
    let endY = str[8];
    let tempX = begX;
    let tempY = begY;
    let count = 0;
    let rightPaths = [];
    let attemptPaths = [];
    myStr = "";

    
    function Travel(){
        count++;
        
        

        if(Math.random() > 0.5) {
            tempX++;
            count++;
            if (tempX > 8){
            tempX--;
            tempY++;
        }
        }
        else {
            tempY++;
            count++;
            if (tempY > 8) {
                tempY--;
                tempX++;
            }
        }
        if (count % 15 == 0){
            tempX = begX;
            tempY = begY;
            attemptPaths = [];
            return Travel();
        }


        attemptPaths.push(tempX + "-" + tempY);
        if ( tempX == endX && tempY == endY) {
            
            console.log("You found one right path");
            myStr = attemptPaths.join('*');
            if(rightPaths.indexOf(myStr) < 0){
                rightPaths.push(myStr);
                attemptPaths = [];
                tempX = begX;
                tempY = begY;
            }
        }
    }

    for ( i = 0; i < 500; i++){
        Travel();
    }
    console.log("Number of paths found: " + rightPaths.length);
    for ( i = 0; i < rightPaths.length; i++){
        console.log(rightPaths[i]);
    }

    // console.log(str);
}

ChessboardTraveling("(2 2)(4 3)"); // The right answer should be 3
// ChessboardTraveling("(1 1)(3 3)"); The right answer should be 6
