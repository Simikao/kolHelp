'use strict';

const persons = [
    { id: 1, firstName: 'Adam', lastName: 'Nowak' },
    { id: 2, firstName: 'Kamil', lastName: 'Kowalski' },
    { id: 3, firstName: 'Anna', lastName: 'Mazur' },
    { id: 4, firstName: 'Katarzyna', lastName: 'Maj' },
    { id: 5, firstName: 'Jakub', lastName: 'Adamski' }
];

const tmp = persons.map((el) => {
    return {
        label: el.firstName + ' ' + el.lastName,
        value: el
    };
});

const tmp2 = persons.map((el) => ({
        label: el.firstName + ' ' + el.lastName,
        value: el
    }));


console.log(tmp);
console.log(tmp2);

// The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.