'use strict'

const persons = [
    { name: 'Jan', age: 22 },
    { name: 'Grzegorz', age: 19 },
    { name: 'Halina', age: null },
    { name: 'Agata', age: 24 },
    { name: 'Krzysztof', age: 40 },
    { name: 'Adam', age: 29 }
];

// function sortPerson(dict) {
//     return Object.entries(dict).forEach(([key,value]) => [key,value].filter((key) => key == name));
// }

function sortPerson(dict) {
    const tmp=[];
    dict.filter((a) => a.age !== null).sort((a,b) => a.name > b.name ? 1 : -1).forEach((nam) => tmp.push(nam.name));
    return tmp;
}

console.log(sortPerson(persons));