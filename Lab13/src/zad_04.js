// Napisz funkcję:

// const connect = (funTab, fun) => { ... };

// spełaniającą poniższe warunki:

//     Pierwszym argumentem funkcji connect jest tablica funkcji asynchronicznych, zwracających wartość liczbową.
//     Drugim argumentem connect jest funkcja asynchroniczna, której jedynym argumentem jest wartość liczbowa, a wynikiem również wartość liczbowa.
//     Funkcja connect powinna zapewnić, że wszystkie funkcje przekazane w parametrze funTab będą wykonywać się „równolegle”.
//     Funkcja connect powinna zwracać pogrupowane wyniki w formacie:

//     [
//       [ wyn_1, fun(wyn_1) ],
//       [ wyn_2, fun(wyn_2) ],
//       [ wyn_3, fun(wyn_3) ],
//       [ wyn_4, fun(wyn_4) ],
//       [ wyn_5, fun(wyn_5) ],
//       // ....
//     ]

//     gdzie wyn_i oznacza funTab[i]().

function getRand() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random()*30))
        }, Math.random()*1000)
    })
}

const tabl = [getRand, getRand, getRand]

function sugarMe(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random()*2)+x)
        }, Math.random()*2000)
    })
}


const connect = (arr, f) => {
    const promises = arr.reduce((acc, current) => {
        acc.push(current().then((x) => {
            return f(x).then((y) => {
                return [x,y]
            })
        }))
        
        return acc
    }, [])
    console.log(promises);
    // promises.reduce((_, current) => {
    //     Promise.all(current).then((x) => console.log(x))
    // }, null)
    Promise.all(promises).then((x) => console.log(x))
    
}

connect(tabl, sugarMe)