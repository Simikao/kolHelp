// Do zmiennej przypisz dowolną liczbę. Następnie stwórz warunek sprawdzający:

//     1. czy podana liczba jest dodatnia. W zależności od rezultatu wypisz w konsoli odpowiedni komunikat "Liczba jest dodatnia/ujemna"
//     2. czy liczba jest parzysta. W zależności od rezultatu, podobnie jak poprzednio, wypisz odpowiedni komunikat

// Rozwiązanie umieść w pliku zad_02.js.


const number = 3;


// Predicate way
function isPositive(x) {
    return (x>=0)? "positive" : "negative";
}

function isOdd(x) {
    return (x%2===0)? "even" : "odd";
}

function numberCheck(x, pred){
    return `Number ${x} is ${pred(x)}`;
}

console.log(numberCheck(number, isOdd));
console.log(numberCheck(number, isPositive));


// One funciton way
function numberDesc(x){
    let isPositive = "";
    let isEven = "";
    if (x>=0) {
        isPositive = "positive";
    } else {
        isPositive = "negative";
    }
    if (x%2===0) {
        isEven = "even";
    } else {
        isEven = "odd";
    }
    return `Number ${x} is ${isPositive} and ${isEven}`;
}

function numberDesc2(x){
    if (x>=0) {
        if (x%2===0){
            return `Number ${x} is positive and even`;
        } else {
            return `Number ${x} is positive and odd`;
        }
    } else {
        if (x%2===0){
            return `Number ${x} is negative and even`;
        } else {
            return `Number ${x} is negative and odd`;
        }
    }
}

console.log(numberDesc(number));
console.log(numberDesc2(number));


// Arrow anonymous funciton way
const isPositiveArrow = ((x) => (x>=0)? "positive" : "negative");
const isEvenArrow = ((x) => (x%2===0)? "even" : "odd");

function numberCheckArrow(x, pred){
    return `Number ${x} is ${pred(x)}`;
}

console.log(numberCheckArrow(number, isEvenArrow));
console.log(numberCheckArrow(number, isPositiveArrow));