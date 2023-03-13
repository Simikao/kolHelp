'use strict'

'use Strict'

function numberSplit(number){
    let tmp = [];
    x = ~~(number/2);
    y = number - x;
        if (number>0) {
        tmp.push(x,y);       
    }else{
        tmp.push(y,x);
    }
    return tmp;
}

console.log(numberSplit(4));
console.log(numberSplit(11));
console.log(numberSplit(-9));