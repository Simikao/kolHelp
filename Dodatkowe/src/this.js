// Przetestuj poniższy kod i odpowiedz na pytania

// 1. Czym jest this?

// 2. Do czego się odwołuje w każdym z przypadków?

// 3. Co wydrukuje w konsoli poniższy kod w każdym z przykładów? 

// 4. Jaki scope ma arrow function? (Na podstawie przykładów 3. i 4.)


// ------------
// Przykład 1.
// ------------

function testThis() {
  console.log(this);
}

// testThis();

function testThis2() {
  "use strict";
  console.log(this);
}

// testThis2();


// ------------
// Przykład 2.
// ------------

const person = {
  name: "Oscar Wilde",
  print() {
    console.log(this.name);

    function a() {
      console.log(this);
    }
    a();
  },
};

// person.print();


// ------------
// Przykład 3.
// ------------

const person3 = {
  name: "Arthur Conan Doyle",
  print() {
    console.log(this);
    const a = () => {
      console.log(this);
    };
    a();
  },
};

// person3.print();


// ------------
// Przykład 4.
// ------------

const person4 = {
  name: "Jan Kowalski",
  print: function() {
    const details = {
      age: 24,
      print1: function() {
        'use strict';
        console.log(this);
      },
      print2: () => {
        'use strict';
        console.log(this);
      }
    }
    details.print1();
    details.print2();
  }
}

// person4.print();