'use Strict';


function isPalindrome(arr){
    const left = [...arr];
    const right = [...arr].reverse();
    if (left.length !== right.length) return false;
    for (let i = 0; i < arr.length; i++){
        if (left[i] !== right[i]){
            return false;
        }
    }
    return true;
}


console.log(isPalindrome("Ala ma kota"));
console.log(isPalindrome("mamam"));
