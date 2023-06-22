// Napisz funkcję (nie korzystając z mechanizmu async/await ani Promise'ów):

// const poKolei = (fun1, fun2, cb) => { ... };

// taką, że:

//     jej dwoma pierwszymi argumentami są funkcje asynchroniczne – możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie poKolei
//     funkcja poKolei powinna zapewnić, że fun2 wykona się zawsze po fun1, a wyniki wygenerowane przez fun1 zostaną przekazane do fun2.
//     trzecim argumentem jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez fun2

function func1(x=0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(3 + x)
        }, 2000)
    })
}

function func2(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(4 + x)
        }, 3000)
    })
}

const poKolei = (f1, f2, cb) => {
    return f1().then((x) => f2(x))
        .then((x) => cb(x))
}

poKolei(func1, func2, (x) => x*2).then((result) => console.log(result));