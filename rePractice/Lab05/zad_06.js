// Wykorzystując plik games.js stwórz tablicę stringów zawierającą tylko 4 pierwsze linki obiektów do zdjęć.

// // Input
// const games = [
//   {
//     title: 'Grand Theft Auto V',
//     year: 2013,
//     imageUrl: 'https://...'
//   },
//   // ..
// ]

// // Output
// ['https://...', 'https://...', 'https://...', 'https://...']

// Plik games.js powinien pozostać bez zmian, a rozwiązanie powinno zostać zawarte w innym pliku. Aby odwołać się do zmiennej z zewnętrzenego pliku na górze swojego rozwiązania umieść: 


const games = require('./games.js').games;