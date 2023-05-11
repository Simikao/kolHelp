// (poprawa kolokwium 2021) W pliku potter.js znajduje się tablica postaci z Harry'ego Pottera.

//     Pogrupuj je według „domu” do jakiego przynależą (weź pod uwagę tylko osoby oznaczone jako żyjące). Jeśli postać nie ma podanego domu powinna znajdować się pod kluczem "noHouse".
//     Nowy obiekt powinien zawierać jedynie klucze z imieniem i typem. Typ powinien być jedną z wartości: student, staff lub none (jeśli postać nie jest ani nauczycielem ani studentem).

// Pamiętaj, aby używać wyłącznie funkcji wbudowanych klasy Array (oprócz funkcji .forEach()), for, foreach i while zdecydowanie odpada.
// Zadanie rozwiąż uzupełniając poniższy kod, tak aby otrzymać poniżej zaprezentowany wynik.

const hogwarts = require("./potter.js").hogwartArray;

const result = hogwarts
        .filter((el) => el.alive === true)
        .map((houseFix) => {
            if (houseFix.house === '') {
                houseFix.house = "noHouse";
                return houseFix;
            } else {
                return houseFix;
            }
        })
        .reduce((acc, person) => {
            if(!acc.includes(person.house)) {
                acc.push(person.house);
            }
            return acc;
        }, [])
        .reduce((acc, house) => {
            acc[house] = [];
            hogwarts.map(person => {
                if(person.house === house) {
                    const personType = (aPerson) => {
                        if (aPerson.hogwartsStaff === true && aPerson.hogwartsStudent === false) {
                            return "staff";
                        } else if (aPerson.hogwartsStaff === false && aPerson.hogwartsStudent === true) {
                            return "student";
                        } else {
                            return "none";
                        }
                    };
                    acc[house].push({
                        name: person.name,
                        type: personType(person)
                    });
                }
            });
            return acc;
        }, {});

console.log(result);


// const hogwarts = require("./potter.js").hogwartArray;

// // const f = (x) => ({ 'a': 123 });
// // const f = (x) => { if ...  };

// const mages = hogwarts
//     .filter((el) => el.alive === true)
    // .reduce((acc, current) => {
    //     const cośtam = {
    //         'name': [current.name],
    //         // if possible, use if instead ?:
    //         'type': (!current.hogwartsStudent && current.hogwartsStaff) ? "staff" : (current.hogwartsStudent && !current.hogwartsStaff) ? "student" : "none"
    //     };
    //     return {...acc, ...cośtam};
    // }, {});


    // .reduce((acc, current) => {
    //     let obj = {};
    //     if (current.house in acc) {
    //         obj = acc[current.house];
    //     }
    //     const person = {
    //         name: current.name,
    //         type: (!current.hogwartsStaff && !current.hogwartsStudent)? "none" : (current.hogwartsStaff)? "staff" : "student",
    //     };
    //     obj = {...obj,  person}
    //     }
    // })


// console.log(mages);