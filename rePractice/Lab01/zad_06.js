// Stwórz tablicę zawierają dane różnego typu tj. liczby, wyrazy i wartości logiczne (boolean). Następnie iterując po tablicy dla każdej z wartości wypisz ją oraz jej typ (typeof).

const arr = ["Apple", 3, 0.1, true, -1];

const mappedArr = arr.map((el) => [el, typeof(el)]);

// mappedArr.forEach(x => {
//     console.log(x[0], x[1]);
// });

mappedArr.forEach(([x, y]) => {
    console.log(x, y);
});

arr.map((el) => [el, typeof(el)]).forEach(([x, y]) => console.log(x, y));

arr.forEach((el) => console.log(el, typeof(el)));

