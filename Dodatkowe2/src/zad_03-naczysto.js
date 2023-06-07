const getRand = () => {
    return 1000;
    // return Math.floor(Math.random() * 1000);
};
const getNum = (n) => { // : number => Promise<number>
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n + getRand());
        }, getRand() * 3);
    });
};


const randomOffset = (n) => new Promise((resolve) => resolve(n + getRand()));
const tabl = [getNum, randomOffset, getNum];

const poKolei /* : ... => Promise<number> */ = (funTab, cb) => (n) => {
    const idea /* : Promise<number> */ = funTab.reduce((acc /* : Promise<number> */, current /* : number => Promise(number) */) => {
        return acc.then(n => current(n)); // return Promise<number>
    }, new Promise(resolve => resolve(n)));
    return idea.then(cb);
};

poKolei(tabl, (result) => result*2)(3).then((el) => console.log(el));