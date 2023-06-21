// Tablicę obiektów zmodyfikuj tak, aby znajdujące się w niej obiekty znajdowały się pod ich id jako indeks.

// Input:
const arr = [
  { id: 'abc', name: 'Ala' },
  { id: 'def', name: 'Tomek' },
  { id: 'ghi', name: 'Jan' }
];

// Output:
[
  { abc: { id: 'abc', name: 'Ala' } },
  { def: { id: 'def', name: 'Tomek' } },
  { ghi: { id: 'ghi', name: 'Jan' } }
];

const result = arr.reduce((acc, obj) => {
  acc.push({[obj.id]: obj});
  return acc;
}, []);

console.log(result);