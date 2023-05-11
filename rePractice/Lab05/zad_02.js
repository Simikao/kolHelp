// Operując na tablicy liczb, stwórz nową tablicę liczb, w której wszystkie ujemne liczby zostają podniesione do kwadratu.

const arr = [ -5, 4, -2, 4, -5 ];

const squaredNegatives = arr.reduce((acc, current) => [...acc, (current<0)? current*current : current], []);

console.log(squaredNegatives);


// Map

const mappedArr = arr.map((el) => (el<0)? el*el : el);
console.log(mappedArr);


