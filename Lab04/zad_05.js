'use strict'

function acc(number){
    return number%2==0;
};

function helloWorld(n, pred){
    if (pred(n)){
        return "Hello World";
    } else {
        return "Goodbye world";
    };

};


console.log(helloWorld(5,acc));
console.log(helloWorld(8,acc));