// (poprawa kolokwium 2021) Napisz funkcję:

// const razemTab = (funTab, cb) => { ... };

// taką, że:

//     pierwszym argumentem jest tablica funkcji asynchronicznych
//     funkcja razemTab powinna zapewnić, że wszystkie funkcje będą wykonywać się „równolegle”, a wyniki przez nie wygenerowane zostaną przekazane – jako tablica [wynik1, wynik2, ...] do funkcji cb.
//     drugim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwróconych przez funkcje.

function getRand(cb) {
    setTimeout(() => {
        cb(Math.floor(Math.random()*69));
    }, Math.random()*3000);
}

const tabl = [getRand, getRand, getRand];

const razemTab = (funTab, cb) => {
    const arr = [];
    const smallback = (number) => {
        arr.push(number);
        if (arr.length === funTab.length) {
            cb(arr);
        }
    };

    funTab.reduce((_, current) => {
        current(smallback);
    }, null);
};

razemTab(tabl, (x) => console.log(x));