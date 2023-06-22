function getRand(cb) {
    setTimeout(() => {
        cb(Math.floor(Math.random()*10));
    }, Math.random()*4000);
}

const calculate = ([f1, f2], f3, cb) => {
    const arr = [];
    [f1, f2].reduce((_, current) => {
        current((x) => {
            arr.push(x);
            if (arr.length === 2) {
                // console.log(arr);
                f3(y => {
                    arr.push(y);
                    // console.log(arr);
                    const result = (arr[0]+arr[1])*arr[2];
                    cb(result);
                });

            }
        });

        return current;
    }, []);
};

calculate([getRand, getRand], getRand, (result) => console.log(result));