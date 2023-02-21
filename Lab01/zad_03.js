'use strict'

const arr = [-1,9,3,-3,2,-15,29];
let max = arr[0];
let min = arr[0];
const revArr = [];
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
    if (arr[i] > max){
        max = arr[i];
    }
    if (arr[i] < min){
        min = arr[i];
    }
}
for (let i=(arr.length-1); i>=0; i--){
    revArr.push(arr[i]);
}
console.log("min:", min);
console.log("max:", max);
console.log(revArr);
arr.reverse();
console.log(arr);
