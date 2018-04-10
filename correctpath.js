
function FindMissingChars(str) {
    var possiblePaths = [''];
    for ( let i = 0; i < str.length; i++) {
        if( str[i] === '?'){
            let placeholder = [];
            possiblePaths.forEach(function(possiblePath){
                placeholder.push(possiblePath + 'u');
                placeholder.push(possiblePath + 'd');
                placeholder.push(possiblePath + 'r');
                placeholder.push(possiblePath + 'l');
            });
            possiblePaths = placeholder;
        }
        else {
                possiblePaths = possiblePaths.map(possiblePath => possiblePath + str[i]);
                // possiblePaths = newPossiblePaths;
            }
    }
    //console.log(possiblePaths);
    return possiblePaths.filter(function(possiblePath){
        let rightCount = possiblePath.match(/[r]/g) === null ? 0 : possiblePath.match(/[r]/g).length;
        let leftCount = possiblePath.match(/[l]/g) === null ? 0: possiblePath.match(/[l]/g).length;
        let upCount = possiblePath.match(/[u]/g) === null ? 0: possiblePath.match(/[u]/g).length;
        let downCount = possiblePath.match(/[d]/g) === null ? 0: possiblePath.match(/[d]/g).length;
        return (rightCount - leftCount === 4) && (downCount - upCount === 4)
        });
    return possiblePaths;
    }

/*********************************************************************/

function CanNavigate(str){
    let startPoint = [0,4];
    let endPoint = [4,0];
    let currentPos = startPoint;
    let visited = {};

    for (let i = 0; i < str.length; i++){
        switch(str[i]) {
            case 'u':
                currentPos[1]+ 1;
                if (currentPos[1] > 4) return false;
                break;
            case 'd':
                currentPos[1]--;
                if (currentPos[1] < 0) return false;
                break;
            case 'r':
                currentPos[0]++;
                if (currentPos[0] > 4) return false;
                break;
            case 'l':
                currentPos[0]--;
                if (currentPos[0] < 0) return false;
                break;
            default:
                break;
        }
        if (visited[currentPos[0] + '-' + currentPos[1]]) {
            return false;
        } else {
            visited[currentPos[0] + '-' + currentPos[1]] = i;
        }
    }
    return (currentPos[0] === 4 && currentPos[1] === 0);
    
    

}    
/*************************************************************************/

function FindCorrectPath(str){
    var validPaths =  FindMissingChars(str);
    for( let validPath of validPaths){
        if (CanNavigate(validPath)){
            return validPath;
            
        }
    }
    console.log(validPaths);
}
/*****************************************************************************/
    
FindCorrectPath("???rrurdr?");