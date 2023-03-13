'use strict';

// Poniższe fragmenty kodu zostały zakomentowane w celu utrzymania porządku. 
// Odkomentowuj je na bieżąco i zapisuj odpowiedzi w komentarzu. 
// Ostatecznie przed wrzuceniem pliku na repozytorium zakomentowane powinny być tylko dodane odpowiedzi i fragmenty kodu powodujące ewentualne błędy.

// ========================= Zadanie 1 =========================
// Co wypisze funkcja dla każdego z poniższych przypadków?
// Wyjaśnij, dlaczego w niektórych przypadkach wyniki różnią się.

// ========================== UWAGA =============================
// Zapis 
// (impression) ? console.log('A') : console.log('B');
// Jest skróconą wersją:
// if (impression) {
//     console.log('A');
// } else {
//     console.log('B');
// }
// ==============================================================

function isEquals(val_1, val_2) {
    (val_1 == val_2) ? console.log('A') : console.log('B');
    (val_1 === val_2) ? console.log('C') : console.log('D');
}

// == is a loose comparator while === is a strict comparator, the former tends to change datatypes if the elements are of different ones to check if the value is 
// equal while === doesn't change the datatype making the comparssion more... strict

// isEquals(2, '2');
// A D
// isEquals(null, undefined);
// A D, strictly they are not equal but they do give out similar output in the end
// isEquals(undefined, NaN);
// B D, those are not loosely similar either because one is probably a bigger set of unknown than the latter which only says that the value is not a number
// isEquals(['a', 'b', 'c'], ['b', 'c', 'd']);
// B D
// isEquals(0, '');
// A D, I guess 0 is nothing then
// isEquals('0', '');
// B D, however in this instance this is a string and doesn't necessarily have a value/properites of int 0
// isEquals(+0, -0);
// A C, those are intrinsically same values both in arithmatics and in code but for progaramming they may have 
// different behaviours associated with them in different opperations
// isEquals(0, false);
// A D
// isEquals(0, 'false');
// B D, the latter is a string and not a boolean
// isEquals([1, 2], '1,2');
// A D

!!false;
!!true;
!!undefined;
!!null;

// ========================= Zadanie 2 =========================
// Jaki będzie efekt działania poniższego fragmentu kodu?
// Wyjaśnij wynik

const person = {
    firstName: 'Jan',
    lastName: 'Kowalski'
}

console.log(person);
// person = {};
// console.log(person);
// Variable person is assigned as const meaning it cannot be easily overwritten

// ========================= Zadanie 3 =========================
// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

let number = 3;
console.log(number); {
    let number = 4;
    console.log(number);
}
console.log(number);

// Firslty console log on line 76 is called before we move into the undefined function which changes the value of number to 4 however, only in that function
// so when we exit it and call to output the number again it is still 3

// ========================= Zadanie 4 =========================
// Czym się różnią poniższe dwa fragmenty kodu?
// Jak działa operator '...'?

const arr = [1, 2];
const newArr1 = [arr, 3, 4];
console.log(newArr1);
const newArr2 = [...arr, 3, 4];
console.log(newArr2);

// Spread operator '...' can be used if we want to write elements of one object or array into another or if we want to iterate over it into a function

// Co zostanie wyświetlone na ekranie?
// Wyjaśnij wynik

const word = 'javascript';
const arrWord = [...word];
console.log(arrWord);

// String is a specific case of an array so when we use the spread operator for a string it iterates over each element as if it was a list

// ========================= Zadanie 5 =========================
// Zapoznaj się z kodem poniżej. Jaki będzie jego wynik i dlaczego?

var hello = 'Hello world!';
var result = hello / 2;

console.log(result);

console.log(Number.isNaN(result));
console.log(Number.isNaN(hello));

// NaN is a result of trying to do arithmetic operations on a different type, like trying to divide a string in two

// ========================= Zadanie 6 =========================
// Zapoznaj się z przykładami poniżej. Jaka jest różnica między var a let/const?

var car = 'BMW';

function showCar() {
    car = 'Audi';
    // model = 'A5';
    console.log('Great car!');
}

showCar();

console.log(car);
// console.log(model);

// variable 'model' is not defined

// -------

var name = 'Bryan';

function differentName() {
    var name = 'Adam';
    console.log(name);
};

differentName();

console.log(name);

// This problem doesn't seem to not work as intended

// -------

if (true) {
    var a = 2;
}
console.log(a);

if (true) {
    const b = 2;
}
// console.log(b);

// var seems to be able to write variables globally, making it so the variable a is defined outside of the scope of the funciton 
// while variable declared by const only seems to be working withing the scope of the function

// -------

// Dla sprawdzenia działania obu poniższych pętli odkomentuj najpierw jedną, później drugą.
// Jaki będzie rezultat jeśli obie pętle bedą odkomentowane jednocześnie. Wyjaśnij dlaczego.

for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// Notably the variable i still gets incremented after exceeding the limiting paramenters

for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

// Both functions work as expected however, since we definded i with var in the first one that value is then also asigned to i outside
// of the funciton scope and doesn't get overwritten by the let i because that one is only limited to the scope of the function

// -------

// var test = "var1";
// var test = "var2";

// let test2 = "let1";
// let test2 = "let2";

// Variables defined by var can be easily declared anew which may lead to issues in code as one may not notice they overwritten a variable.
// Meanwhile, let cannot be redeclared, throwing an error that the identifier has already been delcared

// ========================= Zadanie 7 =========================
// Do czego używany jest 'use strict' w pierwszej linijce skryptu?


// Indicates that the code should be executed in so-called strict mode. Strict Mode is a safety meassure that makes the compiler less lenient,
// turning prior bad syntax issues into real errors. It makes easier writing more secure code in JavaScript