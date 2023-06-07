// Napisz funkcję:

// const razemTab = (funTab, cb) => { ... };

// taką, że:

//     pierwszym argumentem jest tablica funkcji asynchronicznych
//     funkcja razemTab powinna zapewnić, że wszystkie funkcje będą wykonywać się „równolegle”, a wyniki przez nie wygenerowane zostaną przekazane – jako tablica [wynik1, wynik2, ...] do funkcji cb.
//     drugim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwróconych przez funkcje.

const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
const getNum = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getRand());
        }, getRand() * 3);
    });
};
// async function foo() {
//     const res = await getNum();
//     console.log("get this many bitches:", res);
// }
// foo();

// function func1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2);
//         }, 2000);
//     });
// }

// function func2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2);
//         }, 1000);
//     });
// }

// function func3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2);
//         }, 3000);
//     });
// }

// getNum   : () => Promise
// getNum() :       Promise
const notFunTbl = [getNum(), getNum(), getNum()];

const razemTab = (funTab, cb) => {
    return Promise.all(funTab).then(cb);
};


// razemTab(notFunTbl, (tbl) => tbl.map((el) => [el, el*2])).then(console.log);
razemTab(notFunTbl, (tbl) => tbl.reduce((acc, current) => [...acc, [current, current*2]], [])).then(console.log);