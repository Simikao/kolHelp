// **Zadanie 2.**

// Napisz funkcję:


// const poKolei = (fun1, fun2, fun3, cb) => {
//   // Uzupełnij
// };


// taką, że:

// - jej trzema pierwszymi argumentami są funkcje zwracające promise – możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie `poKolei`
// - funkcja `poKolei` powinna zapewnić, że `fun3` wykona się po `fun2`, które to wykona się zawsze po `fun1`. Wyniki wygenerowane przez `fun1` zostaną przekazane do `fun2`, a wynik `fun2` zostanie przekazany do `fun3`
// - czwartym argumentem jest „callback” `cb`, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez `fun3`
// - jeżeli któryś z promise'ów zakończy się porażką, funkcja ma dalej kontynuować swoje zadanie

const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
const func1 = (n) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1000+n);
        }, getRand() * 3);
    });
};

const func2 = (n) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(1000+n);
        }, getRand() * 3);
    });
};

const func3 = (n) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1000+n);
        }, getRand() * 3);
    });
};

const poKolei = (fun1, fun2, fun3, cb) => {
    const list = [fun1, fun2, fun3];
    return list.reduce((acc, current) => {
        return acc.then((n) => current(n), (n) => current(n));
    }, Promise.resolve(0)).then(cb);
};

poKolei(func1, func2, func3, (x) => x*2).then((result) => console.log(result));