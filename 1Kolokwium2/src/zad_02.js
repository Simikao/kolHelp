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
    for (let i = n-1; i<products.length; i++) {
        arr.push(calculateProductValue(products[i], (x) => Promise.resolve(x)));
    }
    (arr.reduce((acc, current) => acc.then((x) => current.then((y) => y+x)), Promise.resolve(0))).then(cb);
};


calculateTotalValue(3, (res) => console.log(res));