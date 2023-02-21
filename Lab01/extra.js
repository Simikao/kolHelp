'use strict'

const arr = [-2, -3, 0, 4, 3, -1, 1, 7];

function isPositive(x){
    return x > 0;
}

function isNegative(x){
    return x <0;
}
function countElements(arr, pred){
    let count = 0;
    for (const element of arr){
        if (pred(element)){
            count++
        }
    }
    return count
}

console.log("there is", countElements(arr, isPositive), "positive integers")
console.log("there is", countElements(arr, isNegative), "negative integers")
