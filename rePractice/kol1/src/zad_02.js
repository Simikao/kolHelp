const gpt = require('./questions-chat-gpt.js').questionsChatGpt;
const users = require('./users.js').users;


class QuestionService {

    arr;

    constructor(arr) {
        this.arr = arr;
    }

    getQuestionsById(id) {
        const questionObj = this.arr.reduce((acc, current) => {
            if (current.id === id) {
                return current;
            }
            return acc;
        }, null);
        console.log(questionObj.question);
        return questionObj.question;
    }

    createNewQuestion(userId, questionString = "") {
        // const lastEntry = this.arr.reduce((acc) => {
        //     return acc+1;
        // }, 0);

        if (questionString !== "") {
            const newEntryId = this.arr[this.arr.length-1].id + 1;
            const newEntry = {
                id: newEntryId,
                question: questionString,
                timestamp: new Date(),
                user: users[userId]
            };
            gpt.push(newEntry);
        } else {
            console.error("Operacja nie powiodła się");
        }

    }

    updateAnswer(questionId, correction) {
        if (this.arr[questionId]) {
            this.arr[questionId]["answer"] = correction;
            console.log(this.arr[questionId]);
        }
    }

    updateQuestion(obj) {
        const ourId = obj.id;
        const result = this.arr.reduce((acc, current) => {
            if (current.id === ourId) {
                current = obj;
                return current;
            }
            return acc;
        }, []);
        console.log(this.arr);
    }
}

const test = new QuestionService(gpt);

test.getQuestionsById(3);
console.log(new Date());
// console.log(gpt[gpt.length-1]);
test.createNewQuestion(3, "aaa");
console.log(gpt.length);
// console.log(gpt);
test.updateAnswer(3, "my answer");

// const newQuestion = {
//     id: 20,
//     question: "Jakie są sposoby na poprawę koncentracji i efektywności w pracy?",
//     user: {
//     id: 1
//     }
// };
// test.updateQuestion(newQuestion);