// Nie korzystając z Promise.all uzupełnij funkcję razem, która przyjmuje tablicę promise'ów. Funkcja ta ma uruchamiać wszystkie promisy równolegle i po wykonaniu wszystkich, uruchomić funkcję, która została przekazana jako callback.

// razem(promisesTab, callback) {
//   // ...
// }

function getRand() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random()*10))
        }, Math.random()*1000)
    })
}

const tabl = [getRand(), getRand(), getRand()]

const razem = (promisesTab, callback) => {
    const results = [];
    promisesTab.reduce((_, current) => {
        current.then((x) => {
            results.push(x)
            if (results.length === promisesTab.length) {
                callback(results)
            }
        })
    }, null)
}

razem(tabl, (result) => console.log(result));
