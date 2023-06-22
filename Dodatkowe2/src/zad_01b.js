// Wykorzystując asynchroniczną funkcję getNum (używającą pomocniczej funkcji getRand):

const getRand = () => {
  return Math.floor(Math.random() * 1000);
};

const getNum = (cb) => {
  setTimeout(() => {
    cb(getRand());
  }, getRand() * 5);
};

// zdefiniuj funkcje, która równolegle uruchamia dim-kopii funkcji getNum, a otrzymane wyniki (liczby) sortuje malejąco i tak otrzymaną tablicę zwraca jako wynik końcowy.

// const asyncSort = (dim) => {
//   // ...
// };

// W rozwiązaniu nie używaj mechanizmu async/await ani Promise'ów.

const asyncSort = (dim) => {
    const arr = [];
    const callback = (number) => {
        arr.push(number);
        if (dim === arr.length) {
            console.log(arr.sort((a, b) => b-a));
        }
    };

    const createArr = (dim) => {
        if (dim === 0) {
            return;
        }
        getNum(callback);
        createArr(dim-1);
    };
    createArr(dim);


};

asyncSort(3);