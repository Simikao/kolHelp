'use Strict';

const arr = [ 1, 3, 6, 2, 9 ];

const indexedArr = arr.reduce(
    (acc, current, index) => {
        return [...acc, `${index}: ${current}`];
    }, []);


console.log(indexedArr);