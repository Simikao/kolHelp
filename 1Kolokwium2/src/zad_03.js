const getRand = () => {
    return Math.floor(Math.random() * 1000);
};

const func1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1000);
        }, getRand() * 2);
    });
};

const func2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1000);
        }, getRand() * 2);
    });
};

const porownaj = (fun1, fun2) => {
    const arr = [Promise.resolve(0), Promise.resolve(0)];
    fun1().then((x) => arr[0]=x);
    fun2().then((x) => arr[1]=x);
    Promise.resolve(arr[0]).then((res) => console.log(res));
};

porownaj(func1, func2);