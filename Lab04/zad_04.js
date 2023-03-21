'use strict'

// const sentence = prompt("Input your sentence: ")

// console.log(input);

const sentence = "ala ma kota!"

const output = ((el) => el.split(' ').sort((a,b) => a.length > b.length ? -1 : 1)[0])(sentence);

console.log(output);






// const test = (() => console.log("a"));
// test();


// (() => console.log("ba"))();