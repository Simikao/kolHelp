// const users = require('./users.js').users;
const gpt = require('./questions-chat-gpt.js').questionsChatGpt;

function organizeData(gpt) {
    // const userList = users.reduce((acc, user) => {
    //     acc.push({id: user.id, name: user.name});
    // }, []);
    function exists(list, el) {
        return list.reduce((acc, current) => {
            if (current === el) {
                return true;
            }
            return acc;
        }, false);
    }
    const attempt1 = gpt.reduce((acc, current) => {
        const name = current.user.name;
        if (!exists(acc, name)){
            acc.push({id: current.user.id, name: name});
        }
        return acc;
    }, [])
        .reduce((acc, person) => {
            const questions = gpt.reduce((acc, question) => {
                if (person.id === question.user.id) {
                    acc.push(question.question);
                }
                return acc;
            }, []);
            acc[person.name] = {
                counter: questions.length,
                questions
            };
            return acc;
        }, {});
    console.log(JSON.stringify(attempt1, null, 2));
}

organizeData(gpt);