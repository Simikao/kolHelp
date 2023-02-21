'use strict'

const arr = [1, 5, 6, 5, 5, 1, 5];
function countElements(arr){
    let counter = 1;
    const x = arr.shift();
    for (let i=0; i<arr.length; i++){
        if (arr[i] == x){
            counter++;
            arr.splice(i,1);
            i--;
        }
    }
    if (arr.length == 0){
        return console.log(x, "appears only once in the array");
    }
    if (counter == 1) {
        return console.log(x, "appears only once in the array"), countElements(arr);
    }else{
        return console.log(x, "appears", counter, "times in the array"), countElements(arr);
    }
}

countElements(arr);