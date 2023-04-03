'use Strict';

// kurli
const initValue = 0;

// Krok 1 (map)
console.log([-5, 4, -2, 4, -5].map((el) => {
    if (el<0) {
        return el*el;
    } else {
        return el;
    }
}));

// Krok 2 (reduce sum)
console.log([ -5, 4, -2, 4, -5 ].reduce(
    (acc, currentValue) => acc + currentValue, initValue
));

// Krok 3
const aaaa = [ -5, 4, -2, 4, -5 ].reduce(
    (acc /* <- array! */, currentValue) => {
        if (currentValue<0){
            const sqr = currentValue * currentValue;
            return [...acc, sqr];
        } else {
            return [...acc, currentValue]; // "Do nothing": Given acc = [25, 4, 4], compute next acc' = [25, 4, 4, currentValue]
        }
    }, []
);

console.log(aaaa);