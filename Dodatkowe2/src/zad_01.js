// Wykorzystując asynchroniczną funkcję getNum (używającą pomocniczej funkcji getRand):

// const getRand = () => {
//   return Math.floor(Math.random() * 1000);
// };

// const getNum = (cb) => {
//   setTimeout(() => {
//     cb(getRand());
//   }, getRand() * 5);
// };

// zdefiniuj funkcje, która równolegle uruchamia dim-kopii funkcji getNum, a otrzymane wyniki (liczby) sortuje malejąco i tak otrzymaną tablicę zwraca jako wynik końcowy.

// const asyncSort = (dim) => {
//   // ...
// };

// W rozwiązaniu nie używaj mechanizmu async/await ani Promise'ów.

// const axios = require('axios');

// const test = axios.get("https://jsonplaceholder.typicode.com/posts");

const getRand = () => {
  return Math.floor(Math.random() * 1000);
};

const getNum = (cb) => {
  setTimeout(() => {
    cb(getRand());
  }, getRand() * 5);
};

// const getNummmm = () => {
//     setTimeout(() => {
//         results.push(getRand());
//         counter++;
//         checkComplete();
//     }, getRand() * 5);
// };


const asyncSort = (dim) => {
    let counter = 0;
    const results = [];

    const checkComplete = () => {
      if (counter === dim) {
        results.sort((a, b) => b - a);
        console.log(results); // Można zmienić na return results, jeśli chcesz zwrócić tablicę wynikową
      }
    };

    for (let i = 0; i < dim; i++) {
      getNum((num) => {
        results.push(num);
        counter++;
        checkComplete();
      });
    }

  };

// Przykładowe użycie
asyncSort(5);

const asyncSort2 = (dim) => {
    const arr = []; // Array of number

    const callbackRand /* : (number) => () */ = (number /* actually just a number */) => {
        arr.push(number);
        if (arr.length === dim) {
            const sorted = arr.sort((a, b) => b - a);
            console.log(sorted);
        }
    };

    // this whole code
    const createArr = (dim) => {
        if (dim === 0) {
            return;
        }
        getNum(callbackRand);
        createArr(dim - 1);
    };
    createArr(dim);
};

asyncSort2(12);