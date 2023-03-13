'use strict'

'use Strict'

function isAnyEven(arr){
    return arr.some(e => e %2 === 0);
}


console.log(isAnyEven([1, 4, 5, 3]));
console.log(isAnyEven([1, 3, 5, 3]));
