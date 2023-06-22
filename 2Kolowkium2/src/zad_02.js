const questionsList = require("./questions-chat-gpt.js").questionsChatGpt;
const users = require('./users.js').users;


function usersByMonth(questions, month) {
    if (month < 1 || month > 12) {
        throw new Error("Month outside of scope");
    }
    let counter = 0;
    month -= 1;
    return questions.reduce((acc, current) => {
        if (current.date.getMonth() === month) {
            if (acc.reduce((acc, member) => {
                if (member.user = current.user) {
                    counter++
                }
            })
        )}
            const { id, name, age, gender, location } = current.user;
            console.log(name, age, gender, location, counter);
            // console.log(current);
            // const obj = {
            //     name: current.name,
            //     age: current.age,
            //     location: current.location
            // }
            acc.push({ name, age, gender, location, questionCount: counter });
        }
            return acc;
    }, []);

}

console.log(usersByMonth(questionsList, 1));
usersByMonth(questionsList, 12);