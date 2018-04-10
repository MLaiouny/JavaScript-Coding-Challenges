function AlphabetSoup(str) {
    let myStr = str.split("").sort().join("");
    
    console.log(myStr);
}

AlphabetSoup("coderbyte");