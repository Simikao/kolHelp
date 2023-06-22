// Napisz funkcję:

// const grupuj = (funTab1, funTab2, cb) => { ... };

// spełaniającą poniższe warunki:

//     Dwoma pierwszymi argumentami funkcji grupuj są tablice funkcji asynchronicznych zwracające wartość liczbową.
//     Funkcja grupuj powinna zapewnić, że wszystkie funkcje z obu tablic będą wykonywać się „równolegle”.
//     Funkcja grupuj powinna wywoływać funkcję cb, która przyjmuje jako parametr pogrupowane wyniki z wszystkich funkcji w formacie:

//     [
//       [ wynik_funkcji_1_z_funTab1, wynik_funkcji_1_z_funTab2 ],
//       [ wynik_funkcji_2_z_funTab1, wynik_funkcji_2_z_funTab2 ],
//       [ wynik_funkcji_3_z_funTab1, wynik_funkcji_3_z_funTab2 ],
//       [ wynik_funkcji_4_z_funTab1, wynik_funkcji_4_z_funTab2 ],
//       [ wynik_funkcji_5_z_funTab1, wynik_funkcji_5_z_funTab2 ],
//       // ...
//     ]

//     i drukuje je w konsoli w dowolny sposób.
//     Jeżeli liczba funkcji w obu tablicach nie jest równa, to funkcja grupuj powinna uzupełniać brakujące wyniki wartością 0.


function getRand() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random()*5)
        }, Math.random()*1000)
    })
}

const tabl1 = [getRand, getRand]
const tabl2 = [getRand, getRand, getRand]

const grupuj = (t1, t2, cb) => {
    const p1 = Promise.all(t1.reduce((acc, current) => {
        acc.push(current());
        return acc
    }, []))
    const p2 = Promise.all(t2.reduce((acc, current) => {
        acc.push(current());
        return acc
    }, []))

    Promise.all([p1, p2]).then((pp) => {
        const isEmpty = (x) => (typeof x === "undefined")? 0 : x;

        const bigger = (pp[0]>=pp[1])? pp[0] : pp[1];
        const smaller = (pp[0]<pp[1])? pp[0] : pp[1];

        const result = bigger.reduce((acc, current, index) => {
            if (bigger === pp[0]) {
                acc.push([current, isEmpty(smaller[index])])
            } else {
                acc.push([isEmpty(smaller[index]), current])
            }
            return acc;
        }, [])
        cb(result)
    })
}

grupuj(tabl1, tabl2, (result) => console.log(result));