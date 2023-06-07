const questionsList = require("./questions-chat-gpt.js").questionsChatGpt;
const users = require('./users.js').users;


const result = groupQuestionsByUser = () => {
    const userByID = users.reduce((result, person) => {
        const peep = person.id
        

        const questions = questionsList.map((el) => [el.question, el.answer])
        if (!result[peep]) {
            result[peep] = {
                count: 0,
                questions: [],
            }; 
            } else {
                result[peep].count +=1
        }

        result[peep].push(questions)
    })

    return userByID
}


console.log(result());