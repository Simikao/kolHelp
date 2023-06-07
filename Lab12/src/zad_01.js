/*
Zadanie 1.1

Stwórz projekt i dołącz do niego bibliotekę axios.

Następnie wykonaj zapytanie metodą GET za pomocą dodanej biblioteki pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200).
Jeśli tak - zwróć response, w przeciwnym wypadku - wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/

const axios = require('axios');

const test = axios.get("https://jsonplaceholder.typicode.com/posts");

test.then((value) => {
    console.log(value.status);
});


test.then((value) => {
    // (value.status === 200 )? value : console.error("Oops, something went wrong");
    if (value.status === 200) {
        // console.log(value.data);
        // console.log(value.headers);
        return value;
    } else {
        console.error("Oops, something went wrong");
    }

    })
    .catch((err) => {
        console.error(err);
    });
