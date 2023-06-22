const axios = require('axios');

const test = axios.get("https://jsonplaceholder.typicode.com/posts");

function getRand() {
    Math.random() * 99;
}

const randArr = [getRand(), getRand(), getRand(), getRand, getRand()];

const testArr = [1, 2, 3, 4, 5];

const result = testArr.reduce((acc, current) => {
    const post = axios.get(`https://jsonplaceholder.typicode.com/posts/${current}`);
    const comments = axios.get(`https://jsonplaceholder.typicode.com/posts/${current}/comments`);
    acc.push({
        entry: post,
        comments
    });
    return acc;
}, []);


// Promise.all(result).then((x) => console.log(x));
console.log(result);

const result2 = result.reduce((_, current) => {
    current.entry.then((x) => {
        current.comments.then((y) => {
            console.log({
                entries: {
                    title: x.data.title,
                    body: x.data.body
                },
                comments: {
                    name: y.data.name,
                    email: y.data.email,
                    body: y.data.body
                }
            });
        });
    });
}, []);