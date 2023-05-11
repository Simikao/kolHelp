// Stwórz tablicę zawierającą kilka/kilkanaście różnych liczb - dodatnich i ujemnych, którą przypiszesz do odpowiedniej zmiennej. Następnie:

//     1. wypisz jej wszystkie wartości za pomocą pętli for
//     2. wypisz najmniejszą i największą wartość w tablicy
//     3. odwróć ją, aby pierwsza wartość była ostatnią, a ostatnia pierwszą

// Rozwiązanie umieść w pliku zad_03.js.

const arr = [-1, 9, 3, -3, 2, -15, 29];

// For loop
console.log("");
console.log("For loop");
let min = arr[0];
let max = arr[0];
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
    if (arr[i]<min) min = arr[i];
    if (arr[i]>max) max = arr[i];
}
console.log(`The smallest number is ${min} and the biggest is ${max}`);

// Methods
console.log("");
console.log("ForEach");
arr.forEach((el) => console.log(el));
console.log(arr.map((el) => el));
const tmp = [...arr];
const tmp2 = [...arr];
const minimum = tmp.sort((a, b) => (a > b)? 1 : -1)[0];
const maximum = tmp.sort((a, b) => a > b? -1 : 1)[0];
const reversedArr = tmp2.reverse();
console.log(minimum);
console.log(maximum);
console.log("");
console.log(reversedArr);

// Reduce
// min(a, b)
// const init =
const minOfArr = arr.reduce((minimal, current) => (minimal < current)? minimal : current, Infinity);
console.log(minOfArr);
const maxOfArr = arr.reduce((maximum, current) => (maximum > current)? maximum : current, -Infinity);
console.log(maxOfArr);

// const f = (a, b, c) => ...;
const [mini, maxi] = arr.reduce(([minimum, maximum], current) => [Math.min(current, minimum), Math.max(current, maximum)], [Infinity, -Infinity]);
console.log(mini, maxi);

// Reverse (Reduce flavour)
const reverseReduced = arr.reduce((acc, current) => [current, ...acc], []);
console.log(reverseReduced);