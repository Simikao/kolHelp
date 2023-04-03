'use strict';

const arr = [10, 'a', 21, true, null, undefined, 1, false, 'b', 2];

function isNull(arr){
    return arr.some((el) => el !== null);
}

function findFirstStr(arr){
    return arr.find((el) => typeof el === 'string');
}

function indexOfTrue(arr){
    return arr.findIndex((el) => el === true);
}

function findAndSortNumbers(arr){
    return arr.filter((el) => typeof el === "number").sort((a, b) => a > b ? 1:-1);
}


function kolos(arr){
    return [arr.some((el) => el !== null), arr.find((el) => typeof el === 'string'), arr.findIndex((el) => el === true), arr.filter((el) => typeof el === "number").sort((a, b) => a > b ? 1:-1), ];
}
console.log(isNull(arr));
console.log(findFirstStr(arr));
console.log(indexOfTrue(arr));
console.log(findAndSortNumbers(arr));
// tmp = [];
// console.log(arr.forEach(el => typeof el).push((el) => el));

// arr.forEach((el) => [console.log(typeof el)])

console.log(kolos(arr));
