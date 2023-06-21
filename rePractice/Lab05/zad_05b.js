const wishlist = [
    { name: 'Czajnik', netto: 100 },
    { name: 'Lodówka', netto: 2730 },
    { name: 'Mikrofalówka', netto: 940 },
    { name: 'Mikser', netto: 120 },
    { name: 'Piekarnik', netto: 3100 },
    { name: 'Zmywarka', netto: 2400 },
    { name: 'Toster', netto: 260 }
  ];

const allBrutto = wishlist.reduce((acc, current) => {
    acc += current.netto*1.23;
    return acc;
}, 0);

console.log(allBrutto);

const justNetto = wishlist.reduce((acc, item) => {
    acc.push(item.netto);
    return acc;
}, []);

console.log(justNetto);

const shoppingList = wishlist.reduce((acc, item) => {
    acc.push(`${item.name}: ${item.netto}`);
    return acc;
}, []);

console.log(shoppingList);

const unnecessary = (list, cb) => {
    return list.reduce((acc, item) => {
        acc.push(cb(item));
        return acc;
    }, []);
};
const newArray = unnecessary(wishlist, (x) => x.name + ": " + x.netto);

console.log(newArray);

const unnecessary2 = (list, cb) => {
    return list.reduce((acc, item) => {
        if (cb(item)) {
            acc.push(`${item.name}: ${item.netto}`);
        }
        return acc;
    }, []);
};

const cheapStuff = unnecessary2(wishlist, (x) => x.netto < 500);

console.log(cheapStuff);

const unnecessary3 = (list, cb) => {
    return list.reduce((acc, item) => {
        if (cb(item)) {
            return item;
        } else {
            return acc;
        }
    }, undefined);
};

console.log(unnecessary3(wishlist, (x) => x.name === 'Mikser'));