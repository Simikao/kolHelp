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
    const arr = [fun1, fun2];
    const arr2 = [0, 0];
    arr.reduce((_, current, index) => {
        current().then((x) => {
            arr2[index]=x;
            if (arr2[0] !== 0 && arr2[1] !== 0) {
                console.log(arr2);
                cb(arr2[0]>=arr2[1]);
            }
        });
    }, []);
    };

// function predicate(list){
//     console.log(list[0]>=list[1]);
// }

porownaj(getRand, getRand2, (result) => console.log(result));