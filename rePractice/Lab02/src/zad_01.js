const numbers = [4, 3, 5, 1, 3, 2, 21, 1, 65, -43, 9];

const helperReduce2 = (array, comparator) => {
    array.reduce((accumulator, number) => {
        if (number === comparator) {
            return false;
        } else {
            return accumulator;
        }
    }, true);
};

const result = numbers.reduce((acc, current) => {
    // const helperReduce = acc.reduce((accumulator, number) => {
    //     if (number === current) {
    //         return false;
    //     } else {
    //         return accumulator;
    //     }
    // }, true);
    if (helperReduce2(acc, current)) {
        acc.push(current);
    }
    return acc;
}, []);

console.log(result);


