// const myPromise = new Promise((resolve, reject) =>
//     setTimeout(() => {
//         reject("failure");
//     }, 250)
// );

function myPromise() {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            reject("failure");
        }, 250)
    );
}

const proof = myPromise();


// console.log(proof.then("", (value) => value));
proof.then("", (value) => {
    console.log(value);
    });
proof.catch((err) => {
    // throw new Error(err);
    console.error(err);
    });