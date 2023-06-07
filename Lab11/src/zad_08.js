function multiplyAsync(x, y) {
    return new Promise((resolve, reject) => {
        if (!isNaN(x) && !isNaN(y)) resolve(x*y);
        reject("failure");
    });
}

const multi = multiplyAsync(2, "d");

multi.then((value) => {
    console.log(value);
    })
    .catch((err) => {
        // throw new Error(err);
        console.error(err);
    });


// console.log(result);