const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`We did it`);
    }, 3000);
  });


myPromise.then((value) => {
    console.log(value);
    }
    );
// console.log(result);
// setTimeout(console.log, 5001, result);