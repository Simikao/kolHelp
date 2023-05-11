// Przypisz do nowej zmiennej tablicę liczb np.

// [1, 5, 6, 5, 5, 1, 5]

// Następnie wypisz częstotliwość występowania każdego elementu z tablicy. Zwróć uwagę na prawidłową odmianę "2 razy", ale "1 raz".

// // Output:
// 1 występuje 2 razy
// 5 występuje 4 razy
// 6 występuje 1 raz
// 5 występuje 4 razy
// 5 występuje 4 razy
// 1 występuje 2 razy
// 5 występuje 4 razy

// Spróbuj zmodyfikować swoje rozwiązanie tak, aby konkretne wartości i ich częstotliwość były wpisane tylko raz.

const arr = [1, 5, 6, 5, 5, 1, 5];

function counter(arr) {
    const dict = {};
    for (let i=0; i<arr.length; i++){
        const x = arr[i];
        if (!(x in dict)) {
            dict[x] = 0;
        }
        dict[x]++;
        // if (arr[i] in dict) {
        //     dict[arr[i]] += 1;
        // } else {
        //     dict[arr[i]] = 1;
        // }
    }
    return dict;
}

// const x = 5;
// if (dict.)
// dict[x] = dict[x] + 1;


console.log(counter(arr));


