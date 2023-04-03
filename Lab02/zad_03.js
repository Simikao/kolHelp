'use strict'
//to be finished

const testArray = [1, 2, null, [4, undefined, 11, 10], 6, [7, null, 0], null, 9]; 
const testArray2 = [1, 2, null, [4, undefined, [11, 10]], 6, [7, null, 0], null, 9]; 

function hasSubArray(arr){
    for (const element of arr){
        if (typeof element === "object" && element !== null){
            console.log(element);
            return [...arr]}
    }
    return [];
}
function annihilateSubArray(arr){
    const tmp=[];
    

}

console.log(annihilateSubArray(testArray));
console.log(annihilateSubArray(testArray2));
console.log([...testArray]);