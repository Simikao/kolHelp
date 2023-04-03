'use Strict';

// Returns a function
function createAdder(a) {
    return (b) => {
        return b + a;
    };
}

const add10 = createAdder(10);
console.log(add10(5)); // 15
console.log(add10(2)); // 12

// return a = b;
// a = b;
// return a;

function getCounter(min, max) {
    return () => {
        if (min<=max){
            min = min+1;
            return min-1;
        }
    };
}


const f = getCounter(5, 7);
const g = getCounter(5, 7);
// const g = getCounter(5, 3);
// g(); // undefined

console.log(f()); // 5
console.log(f()); // 6
console.log(g()); // 5
console.log(f()); // 7
console.log(f()); // undefined
console.log(f()); // undefined
console.log(f()); // undefined
console.log(f()); // undefined
console.log(f()); // undefined

