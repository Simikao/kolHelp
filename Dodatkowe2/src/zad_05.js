// **Zadanie 1.**


// const process = (wyn1, wyn2) => {
//   // Uzupełnij
// };

// const result = (funTab1, funTab2, func) => {
//   // Uzupełnij
// };

// result(tab1, tab2, process);


// Napisz funkcje `result` spełniającą poniższe warunki:

// - dwoma pierwszymi argumentami funkcji są tablice funkcji asynchronicznych, których rezultatem są wartości liczbowe
// - trzecim argumentem jest funkcja `func` przetwarzające wyniki kolejnych funkcji z tablic `funTab1` i `funTab2`
// - jeżeli tablice nie są równe, to przyjmujemy, że brakująca wartość wynosi 0
// - funkcja `result` powinna zapewnić, że wszystkie funkcje z obu tablic będą wykonywać się "równolegle" i wyświetli je w formacie:

// [
//   wynik_funkcji_func(wynik_funkcji_1_z_funTab1, wynik_funkcji_1_z_funTab2),
//   wynik_funkcji_func(wynik_funkcji_2_z_funTab1, wynik_funkcji_2_z_funTab2),
//   wynik_funkcji_func(wynik_funkcji_3_z_funTab1, wynik_funkcji_3_z_funTab2),
//   wynik_funkcji_func(wynik_funkcji_4_z_funTab1, wynik_funkcji_4_z_funTab2),
//   // ...
// ];

const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
const func = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1000);
        }, getRand() * 3);
    });
};

const tabl = [func, func, func, func];
const tabl2 = [func, func, func];

// const process = (wyn1, wyn2) => {
//     return Promise.all([Promise.all(wyn1), Promise.all(wyn2)]).then(bigTabl => {
//         const res = [];
//         bigTabl.reduce((acc, current) => )
//     }).then(res => console.log(res));
// };

// const result = (funTab1, funTab2, func) => {
//   return func(funTab1.map((el) => el()), funTab2.map((el) => el()));
// };

// console.log(result(tabl, tabl2, process));

const process = (wyn1, wyn2) => {
  return (wyn1 + wyn2);
};

const result = (funTab1, funTab2, func) => {
    let longer = funTab1 >= funTab2 ? funTab1 : funTab2;
    let shorter = funTab1 < funTab2 ? funTab1 : funTab2;
    longer = longer.map(item => item());
    shorter = shorter.map(item => item());

    const tuple = longer.reduce((acc, current, index) => {
        const short = typeof shorter[index] === "undefined" ? Promise.resolve(0) : shorter[index];
        acc.push([current, short]);
        return acc;
    }, []);
    return tuple.map(pair => {
        const [res1, res2] = pair;
        return Promise.all([res1, res2]).then(([res1, res2]) => func(res1, res2));
    });
};

Promise.all(result(tabl, tabl2, process)).then((res) => console.log(res));
