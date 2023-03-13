'use strict'

const cat = { 
    name: 'Filemon', 
    age: 6 
}

cat.description = `kot ma na imię ${cat.name} i ma ${cat.age} lat`;

cat.breed= "sijamski"
cat.colour= "biały"
cat.description += `, jest to kot ${cat.breed} i kolor jego futra to ${cat.colour}`

console.log(cat);
