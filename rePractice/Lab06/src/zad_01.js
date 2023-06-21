// Operując na tablicy liczb, stwórz nową tablicę liczb, w której wszystkie ujemne liczby zostają podniesione do kwadratu.

// [ -5, 4, -2, 4, -5 ] => [ 25, 4, 4, 4, 25 ]

const result = [ -5, 4, -2, 4, -5 ].reduce((acc, current) => {
    acc = [...acc, current*current];
    return acc;
}, []);

console.log(result);