const products = [
    { name: 'Product 1', price: 10, quantity: 2 },
    { name: 'Product 2', price: 5, quantity: 4 },
    { name: 'Product 3', price: 8, quantity: 3 },
    { name: 'Product 4', price: 12, quantity: 1 },
];


const calculateProductValue = (product, cb) => {
    setTimeout(() => {
        const value = product.price * product.quantity;
        cb(value);
    }, Math.floor(Math.random() * 1000));
};
const calculateTotalValue = (n, cb) => {
    const arr = [];
    // let result = 0;
    const reccuring = (times) => {
        if (times === 0) {
            return;
        }
        calculateProductValue(products[times-1], (x) => {
            arr.push(x);
            if (arr.length === n){
                console.log(arr);
                cb(arr.reduce((acc, current) => {
                    return acc + current;
                }, 0));
            }
        });
        reccuring(times-1);
    };
    reccuring(n);
};

const calculateTotalValuePromise = (n, cb) => {
    function createArr(times, arr = []) {
        if (times === 0) {
            console.log(arr);
            return arr;
        } else {
            arr.push(products[times-1]);
            // console.log(arr);
            createArr(times-1, arr);
        }
    return arr;
    }
    cb(createArr(n));
};

// calculateTotalValue(3, (response) => {
//     console.log('Wynik', response);
// });
calculateTotalValuePromise(3, (response) => {
    console.log('Wynik', response);
});
