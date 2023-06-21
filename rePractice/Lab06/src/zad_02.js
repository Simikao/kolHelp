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


const result = obj.reduce((acc, current) => {
    return [...acc, {[current["id"]]: current}];
}, []);


console.log(result);