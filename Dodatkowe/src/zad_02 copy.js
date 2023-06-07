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

