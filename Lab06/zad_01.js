// (kolokwium 2020) Napisz funkcję, która za pomocą reduce obliczy średnią. Funkcja powinna przyjmować dwa parametry: tablicę obiektów i oznaczenie zmiennej, z której ma być wyliczana średnia.


const arr = [ { x: 4, y: 2}, { x: 1, y: 8 }, { x: 4, y: 2 } ];

function coordAverage(arr, key) {
    // arr.reduce((acc, current) => [...acc, current[key]], []).reduce
    return arr.map((el) => (el[key])).reduce((acc, current) => (acc+current)) / arr.length;
    // arr.reduce((acc, current) => {
    //     avg
    //     [...acc, current[key]]
    // }, []);
}

console.log(coordAverage(arr, 'x'));

