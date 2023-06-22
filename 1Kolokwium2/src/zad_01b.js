const axios = require('axios');

const userid = Math.floor(Math.random() * 50);

const data = (id) => {
    const get = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return get.then((x) => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((y) => {
                const arr = y.data.reduce((acc, current) => {
                    // console.log(current);
                    acc.push({postId: current.id, title: current.title, body: current.body});
                    return acc;
                }, []);
                return {userId: x.data.id, name: x.data.name, posts: arr};
            });
    }, () => "Nie znaleziono podanego użytkownika");
};

data(userid).then((x) => console.log(x));