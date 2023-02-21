'use strict'


const triVar = [3,4,5];

function isTriangle(arr){
    arr.sort()
    if (arr.length > 3){
        return console.log("Too many sides");
    }
    if (arr.length <3){
        return console.log("Not enough sides");
    }
    if( arr[0]+arr[1]>arr[2]){
        console.log("This triangle can be built");
    }else{
        console.log("This triangle cannot be built");
    }
        
}

isTriangle(triVar);