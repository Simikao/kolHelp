// Napisz funkcję (nie korzystając z mechanizmu async/await):

// const poKolei = (fun1, fun2, fun3, cb) => {
//   // Uzupełnij
// };

// taką, że:

//     Jej trzema pierwszymi argumentami są funkcje zwracające promise – możesz założyć, że funkcje te muszą być przygotowane na przyjęcie określonej listy argumentów, z których korzystać będzie poKolei.
//     Funkcja poKolei powinna zapewnić, że fun3 wykona się po fun2, która wykona się zawsze po fun1. Wyniki wygenerowane przez fun1 zostaną przekazane do fun2, a wynik fun2 zostanie przekazany do fun3.
//     Czwartym argumentem funkcji jest „callback” cb, czyli funkcja, której zadaniem jest przetworzenie wyników zwracanych przez fun3.
//     Jeżeli którykolwiek z promise'ów zakończy się porażką, funkcja ma dalej kontynuować swoje zadanie.


const poKolei = (f1, f2, f3, cb) => {
    f1().then((res) => res)
        .catch((err) => err )
        .finally(() => {
            f2().then((resf2) => resf2)
                .catch((err) => err )
                .finally(() => {
                    f3().then((resf3) => resf3)
                        .catch((err) => { console.error(err); } )
                        .finally(cb);
                });
        });
};

function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
}
function funcccc1() { return 2; }

function func2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(data + 2);
        }, 1000);
    });
}

function func3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 3000);
    });
}
function funccccc3() { return 20; }

const mysum = funcccc1() + funccccc3();
console.log(mysum);

// const mysumm = await func1() + await func3();
const mysumPromise =
    func1().then(resfunc1 =>
        func3().then(resfunc3 =>
            resfunc1 + resfunc3));

mysumPromise.then(resres => console.log(resres));


poKolei(func1, func2, func3, (result) => { console.log(result); });