// Pobierz plik ships.js, a następnie wykorzystując programowanie funkcyjne (i funkcję reduce) uzupełnij poniższe rozwiązanie tak, aby:


// W outpucie uwzględniamy tylko obiekty, które nie zostały zniszczone.
// Kluczem każdego z obiektów w obiekcie powinna być wartość manufacturer.
// Pod każdym kluczem manufacturer powinna znajdować się tablica statków.
// Każdy statek powinien być obiektem zawierającym wysokość statku i maksymalną prędkość.


// // Oczekiwany output:
// {
//     'Corellian Engineering': [
//       { 'Millenium Falcon': { height: 7.8, maximumSpeed: 1200 } }
//     ],
//     'Sienar Fleet Systems': [
//       { 'Tie Fighter': { height: 7.5, maximumSpeed: 1200 } },
//       { 'Lambda class T-4a shuttle': { height: 120, maximumSpeed: 850 } }
//     ],
//     'Kuat Drive Yards': [
//       { 'Executor Star Dreadnought': { height: 345, maximumSpeed: 60000 } },
//       { 'Venator Star Destroyer': { height: 268, maximumSpeed: 975000 } }
//     ],
//   }

// const { shipsArray } = require('./ships');
const shipsArray = require('./ships.js').shipsArray;


// acc : Shipyard -> [Ship -> Details]
// [current.manufacturer]: ...
// shipsArrayw.filter((el) => el.destroyed === false).reduce((acc, current) => ({...acc, {[current.manufacturer]: [{[current.model]: current.height, current.maximumSpeed}]}}), {});


// const result = shipsArray
//     .filter((el) => el.destroyed === false)
//     .reduce((acc, current) => ({ ...acc, [current.manufacturer]: [ [...acc.current.manufacturer], { [current.model]: { 'height': [current.height], 'maximumSpeed': [current.maximumSpeed] } }] }), {});
// console.log(result);

// const result2 = shipsArray
//         .filter((el) => el.destroyed === false)
//     .reduce((acc, current) => ({
//         ...acc, [current.manufacturer]: [
//             { [current.model]: { 'height': [current.height], 'maximumSpeed': [current.maximumSpeed] } }]
//     }), {});
// console.log(result2);
// obj.abc
// obj["abc"]

// { "abc": 123 }

// const keyName = "abcskldfj";
// const obj = { [keyName]: 123 };

const result3 = shipsArray
    .filter((el) => el.destroyed === false)
    .reduce((acc, current) => {
        // Fetch already-existing list of shipyards, if it exists, or default-initialize with [] otherwise.
        let arr = [];
        if (current.manufacturer in acc) {
            arr = acc[current.manufacturer];
        }

        // construct details object, and append to the list of shipyards.
        const details = {
            height: current.height,
            maximumSpeed: current.maximumSpeed,
        };
        arr = [...arr, ({ [current.model]: details })]; // arr.push({ [current.model]: details });

        // modify acc by overwriting old table with our new updated table.
        return { ...acc, [current.manufacturer]: arr };
    }, {});

console.log(result3);