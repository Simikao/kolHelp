// Zsumuj wszystkie elementy w tablicy.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const summedArr = arr.reduce((acc, current) => acc + current, 0);
console.log(summedArr);