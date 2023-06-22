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
        // console.log(questionObj.question);
        if (questionObj === null) {
            return questionObj;
        } else {
            return questionObj.question;
        }

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
        // if (this.arr[questionId-1]) {
        //     this.arr[questionId-1]["answer"] = correction;
        //     console.log(this.arr[questionId]);
        // }
        this.arr = this.arr.reduce((acc, current) => {
            if (current.id === questionId) {
                current.answer = correction;
            }
            acc.push(current);
            return acc;
        }, []);
    }

    updateQuestion(obj) {
        const keys = ["id", "user", "question"];

        const check = keys.reduce((bool, current) => {
            if (obj[current]) {
                return bool;
            } else return false;
        }, true);
        // function checkHelper(key, obj = obj) {
        //     if (!this.#checkObj(obj, key)) {
        //         console.error("Operacja nie powiodła się");
        //     }
        // }
        if (check && obj.user.id) {
            const ourId = obj.id;
            obj.user = users.reduce((acc, current) => {
                if (obj.user.id === current.id) {
                    return current;
                }
                return acc;
            }, {});
            this.arr = this.arr.reduce((acc, current) => {
                if (current.id === ourId) {
                    current.timestamp = new Date();
                    current.question = obj.question;
                    current.user = obj.user;
                }
                acc.push(current);
                return acc;
            }, []);
            // console.log(this.arr);
        } else {
            console.error("Operacja nie powiodła się");
        }

    }

    deleteQuestion(id) {
        this.arr = this.arr.reduce((acc, current) => {
            if (current.id !== id) {
                acc.push(current);
            }
            return acc;
        }, []);
    }

    getQuestionsByUser(userId) {
        return this.arr.reduce((acc, current) => {
            if (current.user.id === userId) {
                acc.push({
                    id: current.id,
                    question: current.question
                });
            }
            return acc;
        }, []);
    }
}

const test = new QuestionService(gpt);

console.log(test.getQuestionsById(3));
console.log(new Date());
// console.log(gpt[gpt.length-1]);
test.createNewQuestion(3, "aaa");
console.log(gpt.length);
// console.log(gpt);
test.updateAnswer(3, "my answer");
console.log(gpt[2]);

const newQuestion = {
    id: 20,
    question: "aaaaaaaaaaaaa?",
    user: {
        id: 1
    }
};
test.updateQuestion(newQuestion);
console.log(test.getQuestionsByUser(1));
test.updateAnswer(31, "Nowa odpowiedź na pytanie");
console.log(test.getQuestionsById(31));