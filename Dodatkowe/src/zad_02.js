// W pliku potter.js znajduje się tablica postaci z Harry'ego Pottera. Pogrupuj je według „domu” do jakiego przynależą (jeśli wartość house wynosi null postać powinna znaleźć się pod kluczem noHouse). Następnie dla każdego z kluczy pod odpowiednimi wartościami stwórz obiekty, których kluczami są:

// staff – jeśli hogwartsStaff wynosi true
// students – jeśli hogwartsStudent wynosi true
// i/lub none (jeśli obie wartości: hogwartsStaff i hogwartsStudent wynoszą false).

// Pod konkretnym kluczem powinna znaleźć się tablica stringów (name postaci).
// Pamiętaj, aby używać wyłącznie funkcji wbudowanych klasy Array (oprócz funkcji .forEach()), for, foreach i while zdecydowanie odpada.

// // Oczekiwany wynik
// {
//  Gryffindor: {
//      students: ['Harry Potter', 'Hermione Granger', 'Ron Weasley', ... ],
//      staff: [ 'Minerva McGonagall', 'Rubeus Hagrid', 'Remus Lupin' ],
//      none: [ 'Sirius Black', 'Arthur Weasley' ]
// },
//  Slytherin: {
//      students: [ 'Draco Malfoy', 'Vincent Crabbe', 'Gregory Goyle' ],
//      staff: [ 'Severus Snape', 'Horace Slughorn', 'Dolores Umbridge' ],
//      none: [ 'Bellatrix Lestrange', 'Lord Voldemort', 'Lucius Malfoy' ]
// },
//  Ravenclaw: {
//      students: [ 'Cho Chang', 'Luna Lovegood' ]
// },
//  Huffelpuff: {
//      students: [ 'Cedric Diggory' ]
// },
//  noHouse: {
//      none: [ 'Kingsley Shacklebolt' ],
//      staff: [ 'Mrs Norris', 'Argus Filch' ]
// }
// }

const hogwarts = require("./potter.js").hogwartArray;

// const result = hogwarts
//     .map((houseFix) => {
//         if (houseFix.house === '') {
//             houseFix.house = "noHouse"
//         }
//         return houseFix
//     })
//     .reduce((acc, current) => {
//         let obj = {};
//         if (current.house in acc) {
//             obj = acc[current.house];
//         }
//         if (!current.hogwartsStaff && !current.hogwartsStudent) {
//             const list = [];
//             const details = {
//                 "none": list.push(current.name)
//             };
//             return details;
//         } else if (current.hogwartsStaff) {
//             const list = [];
//             const details = {
//                 "staff" : list.push(current.name)
//             };
//             return details;
//         } else {
//             const list = [];
//             const details = {
//                 "student": list.push(current.name)
//             };
//             return details;
//         }
//         obj = {...obj, details}

// }, {})


const groupCharactersByHouse = () => {
const characters = hogwarts.reduce((result, character) => {
    const { name, house, hogwartsStudent, hogwartsStaff } = character;

    const role = hogwartsStaff ? 'staff' : hogwartsStudent ? 'students' : 'none';
    const houseKey = house || 'noHouse';

    if (!result[houseKey]) {
    result[houseKey] = {
        students: [],
        staff: [],
        none: [],
    };
    }

    result[houseKey][role].push(name);

    return result;
}, {});

return characters;
};

// console.log(groupCharactersByHouse());


const result = hogwarts.reduce((acc, current) => {
    const house = current.house.length === 0 ? "noHouse" : current.house;

    acc = acc[house];
    return {...acc};
}, {});

console.log(result);