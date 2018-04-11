function isPalindrome(str) {
    const revString = str.split('').reverse().join('');

    return revString === str;
}

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString) * Math.sign(int);

}