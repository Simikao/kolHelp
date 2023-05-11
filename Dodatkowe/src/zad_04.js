// Napisz funkcję multiply z dwoma parametrami: x i y, która będzie zwracała funkcję pobierającą jeden parametr z. Zwrócona funkcja powinna wykonać mnożenie x i y z parametrem z oraz zwrócić wynik. Wywołaj funkcję multiply za pomocą jednego wyrażenia.

// // Przykładowe działanie:
// const result = multiply(2, 3)(5);

// console.log(result); // oczekiwany wynik: 30

// multiply : (number, number)


function multiplication(x, y) {
    const mult = x*y;
    // return (z) => mult * z;
    return function(z=1) {
        return mult * z;
    };
}

console.log(multiplication(2, 3)());


function tripleMultiplication(x) {
    return (y) => {
        return (z) => x*y*z;
    };
}


const mult = ((x) => ((y) => ((z) => x * y * z)));
const mult2 = x => y => z => x * y * z;

// ((x) => asdf(  x))(123)
//         adsf(123)

console.log(tripleMultiplication(2)(3)(5));
console.log(((x) => mult(2)(x)(5))(3));
console.log(mult2(2)(3)(5));

// (λz, λy, λx, x * y * z) 2 3 5

((z) => ((y) => ((x) => mult(x)(y)(z))(2))(3))(5);
const wtf = (z => y => x => mult(x)(y)(z))(2)(3)(5);

console.log(wtf);