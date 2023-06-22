const asyncFunc = (n, cb) => {
    setTimeout(() => {
        cb(n * 2);
    }, n * 100);
};

const funTab1 = [
    (n, cb) => asyncFunc(n, cb),
    (n, cb) => asyncFunc(n, cb),
    (n, cb) => asyncFunc(n, cb),
    (n, cb) => asyncFunc(n, cb),
    (n, cb) => asyncFunc(n, cb),
    (n, cb) => asyncFunc(n, cb),
    (n, cb) => asyncFunc(n, cb)
];

const poKolei = (arr, cb) => {
    const arr2 = [];
    const counter = 0;
    const isDone = () => {
        if (counter === arr.length){
            return arr2;
        }
    };
    const worker = (index, previousResult) => {
        if (index === arr.length) {
            cb(arr2);
        }
        arr[index](previousResult, result => {
            arr2.push(result);
            counter++;
            isDone();
            return worker(index+1, result);
        });
    };
    worker(0, 1);
};


const razem = (funTab1, funTab2 cb) => {
    const arr = [funTab1, funTab2]
    arr.reduce((previous, current) => {
        
    }, null)
};

razem(poKolei(funTab1), (x) => console.log(x))