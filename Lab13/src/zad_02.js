// Napisz funkcję (nie korzystając z mechanizmu async/await ani Promise'ów):

// const razem = (fun1, fun2, cb) => { ... };

// taką, że:

//     jej dwoma pierwszymi argumentami są funkcje asynchroniczne – ponownie możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie razem
//     funkcja razem powinna zapewnić, że fun1 oraz fun2 będą wykonywać się „równolegle”, a wyniki przez nie wygenerowane zostaną przekazane – jako tablica [wynik1, wynik2] do funkcji cb.
//     trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwróconych przez fun1 i fun2.


function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 2000)
    })
}

function func2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 3000)
    })
}

const razem = (f1, f2, cb) => {
    const arr = [f1(), f2()]
    Promise.all(arr).then((x) => cb(x))
}

const razem2 = (f1, f2, cb) => {
    let count = 0
    const results = [];
    [f1(), f2()].reduce((_, current) => {
        current.then((x) => {
            count++
            results.push(x)
            if (count === 2) {
                cb(results)
            }
        })
    }, [])
}

// razem(func1, func2, (x) => x.map((el) => el*2)).then((result) => console.log(result))
razem(func1, func2, (x) => console.log(x))
// razem2(func1, func2, (x) => x.map((el) => el*2)).then((result) => console.log(result))
razem2(func1, func2, (x) => console.log(x))
