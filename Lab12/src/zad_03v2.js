function func1(x = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2 +x);
        }, 2000);
    });
}

function func2(x) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(2 +x);
        }, 2000);
    });
}

function func3(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(3 +x);
        }, 2000);
    });
}

const poKolei = (f1, f2, f3, cb) => {
    f1().then((x) => f2(x), (x) => f2(x))
    .then((x) => f3(x), (x) => f3(x))
    .then((x) => cb(x), (x) => cb(x));
};

poKolei(func1, func2, func3, (x) => console.log(x*2));