const questions = [{

        question: "Which one of the following is the correct way for calling the JavaScript code?",
        answers: {
            a: "Preprocessor",
            b: "Triggering event",
            c: "RMI",
            d: "Function/Method"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        answers: {
            a: "Global variable ",
            b: "The local element ",
            c: "The two of the above "
        },
        correctAnswer: "b"
    },
    {
        question: "When interpreter encounters an empty statements, what it will do:",
        answers: {
            a: "Shows a Warning",
            b: "Prompts to complete the statement",
            c: "Ignores the statements",
            d: "Ignores the statements"
        },
        correctAnswer: "d"
    }, {
        question: "In JavaScript, what is a block of statement?",
        answers: {
            a: "Conditional block",
            b: "block that combines a number of statements into a single compound statement",
            c: "both conditional block and a single statement",
            d: "block that contains a single statement"
        },
        correctAnswer: "b"
    }, {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    }, {
        question: "Which one of the following also known as Conditional Expression:",
        answers: {
            a: "Alternative to if-else",
            b: "Switch statement",
            c: "if-then-else statement",
            d: "immediate if"
        },
        correctAnswer: "d"
    }, {
        question: "Which type of JavaScript language is ___",
        answers: {
            a: "Object-Oriented",
            b: "Object Base",
            c: "Assembly-language",
            d: "High"
        },
        correctAnswer: "b"
    }
];





var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var shuffledQuestions, currentQuestionIndex
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var score = "0"

startButton.addEventListener('click', startGame)


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    // resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}



function showQuestion(randomQuestion) {
    answerButtonsElement.classList.remove('hide')
    questionElement.innerText = randomQuestion["question"]
    for (const [answerKey, answerText] of Object.entries(randomQuestion["answers"])) {
        console.log(answerKey, answerText);
        const button = document.createElement('button')
        button.innerText = answerText
        button.classList.add('btn')
        if (answerKey === randomQuestion["correctAnswer"]) {
            button.dataset.correctAnswer = true
        } else {
            button.dataset.correctAnswer = false
        }

        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    }


}


function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        (answerButtonsElement.firstChild)
    }

}



function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

    function showQuestion(question) {

    }

}

function selectAnswer() {

}