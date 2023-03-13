'use strict'

const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];

function distinctElements(arr){
    let tmp = [];
    for (const element of arr) {
    if (!tmp.includes(element)) {
        tmp.push(element);
        }
    }
    return tmp
}

function iterateTmp(arr){
    for (const element of arr){
        return element
    }
}
function distinctElements2(arr){
    let tmp = [];
    for (const element of arr) {
        for (let i=0; i<arr.length; i++){
            if (arr[i] !== iterateTmp(tmp));
        }

    }
}

console.log(distinctElements(numbers));