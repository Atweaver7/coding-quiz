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
            d: "High",
        },
        correctAnswer: "b"
    },
];





var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var shuffledQuestions, currentQuestionIndex
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var a = "0"
var answerKey = ""
// timer
const startingMinutes = 5;
let time = startingMinutes * 60;
let score = 60
const countdownEl = document.getElementById('timer');


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    setInterval (updateCountdown, 1000);
    

}

function setNextQuestion() {
    resetState()
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
            console.log('true')
        } 
         else {
            button.dataset.correctAnswer = false
            console.log('false')
        }
        
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)


       
    }


}


function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}



function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

    function showQuestion(question) {

    }

}

function selectAnswer(e) {
    // when user clicks - choose that answer
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusclass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusclass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
nextButton.classList.remove('hide')
} else {
    startButton.innerText = 'Reset'
    startButton.classList.remove('hide')
} 

    function setStatusclass(element, correct) {
        clearStatusclass(element)
        if (correct) {
            time - 60
        } else {
            element.classList.add('wrong')
            

        }
    }
    function clearStatusclass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }
 
  }



