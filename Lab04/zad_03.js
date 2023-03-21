'use strict'

function nestedSum(){
    const otherNumber = 6
    return function(n) {
        return otherNumber+n;
    };
};

console.log(nestedSum()(6));