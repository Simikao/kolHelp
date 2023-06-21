// Podany jest obiekt

// const cat = {
//   name: 'Filemon',
//   age: 6
// }

// Wypisz w konsoli imię i wiek kota w formacie:

// Kot ma na imię Filemon i ma 6 lat.

const cat = {
  name: 'Filemon',
  age: 6
};
const name = "name";
console.log(`Kot ma an imię ${cat.name} i ma ${cat.age} lat.`);
console.log(`Kot ma an imię ${cat["name"]} i ma ${cat["age"]} lat.`);
console.log(`Kot ma an imię ${cat[name]} i ma ${cat.age} lat.`);


// Stworzony we wcześniejszym zadaniu komunikat przypisz do nowego pola description obiektu cat, a następnie wyświetl w konsoli informacje o kocie odwołując się do stworzonego przed chwilą pola.

cat.description = `Kot ma an imię ${cat[name]} i ma ${cat.age} lat.`;

console.log(cat);

// Do obiektu cat dodaj dwa kolejne pola: breed (rasa) i colour (kolor sierści). Nadaj tym polom dowolne wartości i uzupełnij komunikat z pola description o nowe dane.

cat["breed"] = "rooftop";
cat["colour"] = "prple";

cat.description = cat.description + ` It's breed is ${cat.breed} and colour is ${cat["colour"]}`;

console.log(cat.description);