// Tablicę obiektów zmodyfikuj tak, aby znajdujące się w niej obiekty znajdowały się pod ich id jako indeks.

// // Input:
// [
//   { id: 'abc', name: 'Ala' },
//   { id: 'def', name: 'Tomek' },
//   { id: 'ghi', name: 'Jan' }
// ]

// // Output:
// [
//   { abc: { id: 'abc', name: 'Ala' } },
//   { def: { id: 'def', name: 'Tomek' } },
//   { ghi: { id: 'ghi', name: 'Jan' } }
// ]


const obj = [
    { id: 'abc', name: 'Ala' },
    { id: 'def', name: 'Tomek' },
    { id: 'ghi', name: 'Jan' }
];

const input = { id: 'abc', name: 'Ala' };
const output = { [input.id]: {input} };
console.log(output);

// const obj2 = obj.reduce((acc, current) => { return { [current.id]: { current } } }, []);

const obj3 = obj.reduce((acc, current) => ([...acc, { [current['id']]: current }]), []);
console.log(JSON.stringify(obj3));

const obj4 = obj.map((current) => ({ [current['id']]: current }));

console.log(JSON.stringify(obj4));