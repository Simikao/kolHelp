'use strict'

function unequal(x,y,z){
    return x!==y && y!==z && x!==z;
}

console.log(unequal(1,1,3));
console.log(unequal(1,2,3));
console.log(unequal(1,2,'1'));