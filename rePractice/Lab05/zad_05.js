// Mamy następującą listę zakupów:

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}
const wishlist = [
    { name: 'Czajnik', netto: 100 },
    { name: 'Lodówka', netto: 2730 },
    { name: 'Mikrofalówka', netto: 940 },
    { name: 'Mikser', netto: 120 },
    { name: 'Piekarnik', netto: 3100 },
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
];


// Oblicz całkowity koszt wszystkich produktów (pamiętaj, aby doliczyć podatek VAT 23%).
const priceBrutto = wishlist.reduce((acc, current) => roundToTwo((acc+current.netto)*1.23), 0);
const priceBrutto2 = wishlist.reduce((acc, current) => roundToTwo((acc+current['netto'])*1.23), 0);
console.log(priceBrutto);
console.log(priceBrutto2);

// Zamień tablicę obiektów w tablicę wartości (cen netto).
const justPrices = wishlist.reduce((list, current) => [...list, current.netto], []);
console.log(justPrices);

const justPricesMap = wishlist.map((el) => el.netto);
console.log(justPricesMap);

// Potrzebujemy naszej listy zakupów w formie tablicy stringów, gdzie każdy element to:

// 'nazwa: cena netto'

// Napisz funkcję, która przyjmuje w parametrach tablicę i funkcję, a następnie zwraca przetworzoną tablicę.

// // Przykładowe działanie:
// const newArray = func(wishlist, (x) => x.name + ": " + x.netto);
// console.log(newArray);// wypisanie nowej tablicy

// Uwaga: Pierwotna tablica nie zostaje modyfikowana.
const printFriendlyWishlist = wishlist.reduce((list, current) => [...list, `${current.name}: ${current.netto}`], []);
console.log(printFriendlyWishlist);

// Podobnie, jak w poprzednim zadaniu, stwórz funkcję przyjmującą w parametrach tablicę i funkcję. W zależności od przekazanej funkcje wyfiltruj odpowiednio obiekty (np. tańsze niż 500).
const cheaperStuff = wishlist.reduce((list, current) => (current.netto<500)? [...list, `${current.name}: ${current.netto}`] : [...list], []);
console.log(cheaperStuff);
// const cheaperStuffMap = wishlist.map((el) => {
//     if (el.netto<500) (`${el.name}: ${el.netto}`);
// });
const cheaperStuffMap = wishlist.map((el) => {
    if (el['netto']<500) return (`${el['name']}: ${el['netto']}`);
});
console.log(cheaperStuffMap);

const cheaperStuffFilter = wishlist.filter((el) => el.netto<500).map((el) => `${el['name']}: ${el['netto']}`);
console.log(cheaperStuffFilter);

// Napisz funkcję przyjmującą tablicę i funkcję. W zależności od przekazanej funkcji znajdź obiekt spełniający podany warunek. Zakładamy, że przyjmowana lista zawiera unikalne obiekty. Jeśli danego elementu nie ma w tablicy, zwróć undefined

// // Przykładowe działanie:
// const result = func(wishlist, (x) => x.name === 'Mikser' );
// console.log(result); // wypisanie obiektu
function findPrice(item, list = wishlist) {
    return list.reduce((search, current) => {
        if (current.name === item) {
            console.log(current);
            return current;
        } else {
            return search;
        }
    }, undefined);
}
console.log(findPrice('Mikser'));

function findPriceFind(item, list = wishlist) {
    return list.find((el) => el.name === item);
}
console.log(findPriceFind('Mikrofalówka'));