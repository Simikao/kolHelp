// (kolokwium 2021) Napisz funkcję:

// const poKolei = (funTab, cb) => (n) => { ... };

// taką, że:

//     pierwszym argumentem jest tablica funkcji asynchronicznych – załóż, że funkcje te muszą być przygotowane na przyjęcie argumentu n, z którego korzysta funkcja poKolei
//     funkcja poKolei powinna zapewnić, że następna funkcja np. fun2 wykona się zawsze po poprzedniej np. fun1, a wyniki wygenerowane przez fun1 zostaną przekazane do fun2.
//     trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez ostatnią funkcję w tablicy

function getRand(cb, n) {
    setTimeout(() => {
        cb(Math.floor(Math.random()*69 + n));
    }, Math.random()*3000);
}

function getRandPromise(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random()*69 + x));
        }, Math.random()*2000);
    });
}

const tablP = [getRandPromise, getRandPromise, getRandPromise];

const poKoleiP = (funTab, cb) => (n) => {
    funTab.reduce((previous, current) => {
        return previous.then((x) => current(x));
    }, Promise.resolve(n)).then(cb);
};


poKoleiP(tablP, (x) => console.log(x))(5);

const tabl = [getRand, getRand, getRand];

const poKolei = (funTab, cb) => (n) => {
    const counter = 0;
    const smallback = (number) => {

        if (counter === funTab.length) {
            cb(number);
        }
    };

    const summing = (index) => {

    };

};

poKolei(tabl, (x) => console.log(x))(5);