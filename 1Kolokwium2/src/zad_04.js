const getRand = () => {
    return Math.floor(Math.random() * 1000);
};

  const getNum = () => {
    setTimeout(() => {
      (getRand());
    }, getRand() * 2);
};

const table = [getNum, getNum, getNum];

const zliczPoKolei = (funTab, treshhold) => {
    const counter = 0;
    const arr = [];
    const callbackRand = (number) => {
        if (number>treshhold){
            arr.push(number);
        }
        return arr;
    };
    const createrArr = (counter) => {
        if (counter === funTab.length) {
            return callbackRand(funTab[counter]);
        }
        callbackRand(funTab[counter]);
        createrArr(counter+1);
    };
    return createrArr(counter);
};


console.log(zliczPoKolei(table, 0));


const poKolei2 = (funTab, treshold, cb) => {
    return (number) => {
        const nextFunc = (index, previousResult) => {
            if (index >= funTab.length) {
                cb(previousResult);
                return;
            }
            const currentFunc = funTab[index];
            currentFunc(previousResult, result => {
                nextFunc(index + 1, result);
            });
        };
        nextFunc(0, number);
    };
};

poKolei2(table, elem => console.log(elem))(5);