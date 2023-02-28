const cat = { 
    name: 'Filemon', 
    age: 6 
}

cat.description = `kot ma na imię ${cat.name} i ma ${cat.age} lat`;

const catExtra = cat + {breed: "sijamski", colour: "biały"}


console.log(catExtra);
