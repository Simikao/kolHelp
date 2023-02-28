'use strict'

const array = [ 4, 2, 'a', 'b', 3, 'aa', 'ww', 2, 'ab', -2];

function numbersFirst(arr){
    const tmp=[];
    for (const element of arr){
        if (typeof element === 'number'){
            tmp.push(element);
        }        
    }
    for (const element of arr){
        if (typeof element !== 'number'){
            tmp.push(element);
        }        
    }
    return tmp
}

console.log(numbersFirst(array));