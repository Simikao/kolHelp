'use strict'

function toArray(x,y){
    let tmp=[]
    if (typeof x === "object" && x !== null){

        tmp.push(...x);
    }else{
        tmp.push(x);
    } 
    if (typeof y === "object" && y !== null){
        tmp.push(...y);
    }else{
        tmp.push(y);
    }
    return tmp;
}


console.log(toArray([1], 2));
console.log(toArray(1, "tekst"));
console.log(toArray("aa", [1, 2]));
console.log(toArray([1], null));