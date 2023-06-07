// Napisz funkcję:

// const poKolei = (funTab, cb) => (n) => { ... };

// taką, że:

//     pierwszym argumentem jest tablica funkcji asynchronicznych – załóż, że funkcje te muszą być przygotowane na przyjęcie argumentu n, z którego korzysta funkcja poKolei
//     funkcja poKolei powinna zapewnić, że następna funkcja np. fun2 wykona się zawsze po poprzedniej np. fun1, a wyniki wygenerowane przez fun1 zostaną przekazane do fun2.
//     trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez ostatnią funkcję w tablicy

const getRand = () => {
    return 1000;
    // return Math.floor(Math.random() * 1000);
};
const getNum = (n) => { // : number => Promise<number>
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n + getRand());
        }, getRand() * 3);
    });
};
// const notFunTbl = [getNum, getNum, getNum];

const randomOffset = (n) => new Promise((resolve) => resolve(n + getRand()));
const tabl = [getNum, randomOffset, getNum];

// f1 : number => number
// f1 : number => Promise<number>
// xxx.map(f1).map(f2).map(f3); // this, but where f1,f2,f3 are promises!

const poKolei /* : ... => Promise<number> */ = (funTab, cb) => (n) => {
    // funTab.forEach((el /* : (number) => Promise<number>  */) => el(n));

    // Three questions to ask yourself every time you work with reduce:
    // 1. What object are you *deconstructing*? (i.e. the type of the object)
    // 2. What object do you want to *construct*? (i.e. type of the resulting object)
    // 3. What is the elementary operation that you apply for each element?

    // 1) `funtab` : Array<(number) => Promise<number>>
    // 2) result : Promise<number> ?
    // 3) f : ....then(...)

    return /* : Promise<number> */funTab.reduce((acc /* : Promise<number> */, current /* : number => Promise(number) */) =>
        acc.then(cb).then(current) // return Promise<number>
    , Promise.resolve(n));
    // return idea.then(cb);
    // cb(idea);
};

const myCb = (n) => {
    console.log("myCb", n * 2);
    return n * 2;
};
poKolei(tabl, myCb)(3).then((el) => console.log(el));


const fun1 = (n, cb) => {
    setTimeout(() => {
        const result = n + 1;
        cb(result);
    }, 1000);
};

const fun2 = (n, cb) => {
    setTimeout(() => {
        const result = n * 2;
        cb(result);
    }, 1000);
};

const fun3 = (n, cb) => {
    setTimeout(() => {
        const result = n - 3;
        cb(result);
    }, 1000);
};

//  (kolokwium 2021) Napisz funkcję:
//
// const poKolei = (funTab, cb) => (n) => { ... };
//
// taką, że:
//
//     pierwszym argumentem jest tablica funkcji asynchronicznych – załóż, że funkcje te muszą być przygotowane na przyjęcie argumentu n, z którego korzysta funkcja poKolei
//     funkcja poKolei powinna zapewnić, że następna funkcja np. fun2 wykona się zawsze po poprzedniej np. fun1, a wyniki wygenerowane przez fun1 zostaną przekazane do fun2.
//     trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez ostatnią funkcję w tablicy

const poKolei2 = (funTab, cb) => {
    return (number) => {
        const nextFunc = (index, previousResult) => {
            if (index >= funTab.length) {
                cb(previousResult);
                return;
            }
            const currentFunc = funTab[index];
            currentFunc(previousResult, result => {
                nextFunc(index + 1, result);
            });
        };
        nextFunc(0, number);
    };
};

poKolei2([fun1, fun2, fun3], elem => console.log(elem))(5);


