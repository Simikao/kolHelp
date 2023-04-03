'use strict';


function sumAllTail(x, acc = 0){
    if (x>0) {
        return sumAllTail(x-1, acc+x);
    } else return acc;
}

function sumAllReg(x){
    if (x>0) {
        return x + sumAllReg(x-1);
    } else return x;
}

console.log(sumAllTail(8));
console.log(sumAllTail(4));
console.log("");
console.log(sumAllReg(8));
console.log(sumAllReg(4));