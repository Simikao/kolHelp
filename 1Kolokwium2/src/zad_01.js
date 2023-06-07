const axios = require('axios');

const userid = Math.floor(Math.random() * 50);


function getUser(id) {
    const user = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    // user.then((value) => {
    //     console.log(value.status);
    // });
    return user.then((all) => all.data, () => console.log(`There is no user of id ${id}`));
    // user.then((res) => console.log(res.status));
}

getUser(userid).then((res) => console.log(res));