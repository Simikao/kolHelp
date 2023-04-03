'use Strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initValue = 0;
const summedArr = arr.reduce(
    ((acc, sum) => acc + sum), initValue
);

console.log(summedArr);