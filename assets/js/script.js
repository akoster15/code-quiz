//Questions for the quiz
var questions = [
    {
        question: "Which one of these is a Javascript package manager?",
        answers: {
            a: "style.js",
            b: "npm",
            c: "TypeScript",
            d: "Node.js"
        },
        correctAnswer: "b"
    },
    {
        question: "In Javascript, how do you call a function named \"myFunction\"?",
        answers: {
            a: "function myFunction()",
            b: "function = myFunction()",
            c: "function:myFunction()",
            d: "function var myFunction()"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you write \"Hello Word\" in an alert box?",
        answers: {
            a: "msgBox(\"Hello World\")",
            b: "alertBox(\"Hello World\")",
            c: "alert(\"Hello World\")",
            d: "msg(\"Hello World\")"
        },
        correctAnswer: "c"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: {
            a: "*",
            b: "-",
            c: "x",
            d: "="
        },
        correctAnswer: "d"
    }
];

//Rest of variables for the quiz
const startButton = document.querySelector('.start_button');
const quizContainer = document.querySelector('.quiz_container');
const timeText = document.querySelector('.timer .time_left_text');
const timeCount = document.querySelector('.timer .time_left_num');
var myScore = 0;
var currentQuestion;
var nextQuestion;
var timeCount = 50;

//Start Button to start the quiz
startButton.addEventListener("click", generateQuiz);

//Function that starts the quiz
function starQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    btnStart.classList.add("d-none")
    timecounter.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    gametime()
}

function quizTime()