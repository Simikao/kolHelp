function getRand() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5);
        }, Math.random()*2000);
    });
}

function getRand2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(7);
        }, Math.random()*2000);
    });
}

const porownaj = (fun1, fun2, cb) => {
    
    };