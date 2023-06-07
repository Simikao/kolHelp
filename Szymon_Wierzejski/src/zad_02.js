const questionsList = require("./questions-chat-gpt.js").questionsChatGpt;
const users = require('./users.js').users;

class QuestionService {
    questions;

    constructor(questions) {
        this.questions = questions
    }

    getQuestionById(number) {
        return this.questions.find((el) => el.id === number).question;
    }

    createNewQuestion() {
        this.questions.push({
            id: 21,
            question: "Jakie są najlepsze sposoby na poprawę koncentracji i efektywności w pracy?",
            answer: "Do skutecznych sposobów na poprawę koncentracji i efektywności w pracy należą: wyznaczanie sobie celów, organizacja czasu pracy, przerwy w ciągu dnia, wykonywanie jednego zadania naraz, unikanie rozpraszaczy.",
            timestamp: "2023-08-20T10:30:00",
            user: 4
        })
    }

    deleteQuestion(number) {
        if (this.questions.some((el) => el.id === number)) {
            this.questions.find((el) => el.id === number).map((el) => {})
        } else {
            console.log(`There was no question of id ${number}`);
        }
    }
    
    getQuestionsByUser(userID) {
        return this.questions.filter((el) => el.user === users[userID-1]).map((el) => ({id: el.id, question: el.question}))
    }
}



const result = new QuestionService(questionsList)

console.log(result.getQuestionById(1));

console.log(result.deleteQuestion(343));

console.log(result.getQuestionsByUser(1));