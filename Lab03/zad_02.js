'use strict'

// function isPositiveEven(number) {
//     n=0;
//     if (number<0) {
//         n=-1;
//     }
//     n+= number%2
//     return n == 0;
// }

function isPositiveEven(number) {
    return (number%2 === 0) && (number>=0);
}
console.log(isPositiveEven(45));
console.log(-4);
console.log(4);