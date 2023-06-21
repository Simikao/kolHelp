// Stwórz 4 obiekty person1, person2, person3 i person4, gdzie każdy z nich zawiera dwa pola:

//     name
//     age

// przyjmujące wartości kolejno:

//     Agata, 21
//     Tomasz, 25
//     Alicja, 31
//     Jan, 20

// Stwórz tablicę i dodaj do niej wszystkie stworzone osoby. Następnie stwórz pętle, w której obliczysz:

//     ile łącznie lat mają wspomniane osoby
//     średnią wieku

const person1 = {
    name: "Agata",
    age: 21
};

const person2 = {
    name: "Tomasz",
    age: 25
};

const person3 = {
    name: "Alicja",
    age: 31
};

const person4 = {
    name: "Jan",
    age: 20
};

const people = [person1, person2, person3, person4];

const cumAge = people.reduce((acc, current) => {
    return acc+current.age;
}, 0);

const avAge = people.reduce((acc, current) => {
    acc += (current.age/people.length);
    return acc;
}, 0);

console.log(avAge);
console.log(cumAge);


const splitArray = people.reduce((acc, person) => {
    if (person.age <= avAge) {
        acc[0].push(person.age);
    } else {
        acc[1].push(person.age);
    }
    return acc;
}, [[], []]);


console.log(splitArray);