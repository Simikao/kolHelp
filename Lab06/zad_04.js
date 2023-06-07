// W pliku books.js znajduje się tablica książek. Posegreguj podane książki względem gatunku. Jeśli książka posiada więcej gatunków niż jeden, powinna znaleźć się pod każdym z tych gatunków. Dodatkowo usuń wszystkie pola oprócz tytułu i autora. Użyj wyłącznie funkcji wbudowanych, for zdecydowanie odpada.

// const books = require('./books.js').booksArray;

// const result = books.reduce(
//   // Uzupełnij
// )

// console.dir(result, { depth: null });

// // Oczekiwany output
// {
//   'fantasy': [
//     { title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
//     { title: 'Harry Potter', author: 'J.K. Rowling' },
//     // ...
//   ],
//   'fiction': [
//     { title: 'The Borthers Karamazov', author: 'Fyodor Dostoyevsky' },
//     // ...
//   ],
//   // ...
// }


const books = require('./books.js').booksArray;

const result2 = books.reduce((acc, current) => {
    const {genre, title, author} = current;
    // acc[genre] = [];
    if (typeof genre === "string"){
        acc[genre] = [];
    } else {
        genre.forEach((el) => acc[el] = []);
    }
    return acc;
}, {});

console.dir(result2, { depth: null });

const result = books.reduce((acc, current) => {
    const {title, author, genre} = current;
    const book = {title, author};
    if (typeof genre === "string") {
        acc[genre] = (acc[genre]) ? [...acc[genre], book] : [book];
    } else {
        genre.forEach((el) => acc[el] = (acc[el]) ? [...acc[el], book] : [book]);
    }
    return acc;
}, {});

// console.dir(result, { depth: null });
