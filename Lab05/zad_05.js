'use Strict';

const wishlist = [
    { name: 'Czajnik', netto: 100 },
    { name: 'Lodówka', netto: 2730 },
    { name: 'Mikrofalówka', netto: 940 },
    { name: 'Mikser', netto: 120 },
    { name: 'Piekarnik', netto: 3100 },
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
];

console.log(wishlist);

const calculateVat = wishlist.reduce(
    (acc, current) => {
        key = current["netto"];
        brutto = key * 1.23;
        return acc+brutto;
    }
, 0);

const nettoPrices = wishlist.reduce(
    (acc, current) => {
        key = current["netto"];
        return [...acc, key]; 
    }, []
);

const priceToStringReduce = wishlist.reduce(
    (acc, current) => {
        keyPrice = current["netto"];
        keyName = current["name"];
        return [...acc, `${keyName}: ${keyPrice}`]
    }
, []);

function priceToString(arr){

}

// const priceToString = func(wishlist, (x) => x.name + ": " + x.netto);


console.log(calculateVat);
console.log(nettoPrices);
console.log(priceToString);
console.log(priceToStringReduce);
