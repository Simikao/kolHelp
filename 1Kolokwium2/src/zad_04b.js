function getRand(cb) {
    setTimeout(() => {
        cb(5);
    }, Math.random()*2000);
}

const tabl = [getRand, getRand, getRand];

const zliczPoKolei = (funTab, treshold, cb) => {
    let counter = 0;
    const nextFunc = (index, previousResult) => {
        if (previousResult>= treshold) {
            counter++;
        }
        if (index < funTab.length) {
            const currentFunc = funTab[index];
            currentFunc(result => {
                nextFunc(index + 1, result);
            });
        } else {
            cb(counter);
            return;
        }
    };
    nextFunc(0, 0);
};


const zliczPoKolei2 = (funTab, treshold, cb) => {
    let counter = 0;
    const over = [];
    const isDone = () => {
        if (funTab.length === counter) {
            cb(over.length);
        }
    };
    const worker = (index) => {
        if (index===funTab.length) {
            return;
        }
        funTab[index](result => {
            if (result >= treshold) {
                over.push(result);
            }
            counter++;
            isDone();
            return worker(index+1);
        });
    };
    worker(0);
};


zliczPoKolei2(tabl, 3, (x) => console.log(x));