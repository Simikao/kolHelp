'use strict'

const arr = ["Apple", 3, 0.1, true, -1];

function whatType(arr){
    for (const element of arr){
        console.log(typeof element);
    }
}

whatType(arr);