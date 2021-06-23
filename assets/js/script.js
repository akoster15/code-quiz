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
var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start-button");
var timeCounter = document.getElementById("timecounter");
var titleitem = document.getElementById("title-item");
var myScore = 0;
var currentQuestion;
var nextQuestion;
var questionAnswers = document.querySelector("question_answers");
var count = 50;
var everyScore = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var alert =document.getElementById("alert");
var info = document.getElementById("info");


//Variables for the highscore page
var storedHighScores = JSON.parse(localStorage.getItem("userData"));
var highScoreArea = document.querySelector("#highScoresList");
var backButton = document.querySelector("#back-Button");
var clearButton = document.querySelector("#clearScores");

//Start Button to start the quiz
startButton.addEventListener("click", generateQuiz);

//Function that starts the quiz
function starQuiz(){
    if(storedScores !==null) {
        everyScore = storedScores;
    }
    info.classList.add("d-none")
    startButton.classList.add("d-none")
    timeCounter.classList.remove("d-none")
    quizQuestion.classList.remove("d-none")
    nextQuestion= questions[currentindex]
    
        displayQuestion(nextQuestions)

    startTimer()
}

//Function for quiz timer
function startTimer(){
    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);
}

//Keeps track of the scores
function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}

//displays the question
function displayQuestion(question){
    titleitem.innerText=question.title
    questions.choices.forEach(element => {
        var button = document.createElement("button")
        button.className="btn-rp"
        button.innerText=element
        questionAnswers.appendChild(button)
        button.addEventListener("click", displaynextQuestion)
    });
}

//displays the next question
function displayQuestion(e){
    currentindex++
    if(currentIndex < questions.length){
        correction(e.target.innerText == nextQuestion.answer);
        question
    }
}

//determines if the answer is correct or incorrect
function answerStatus(response){
    if(response){
        alert.innerText= "Correct!";
    }else {
        alert.innerText= "Incorrect!";
        count = count -10;
        timer.innerHTML = count;
    }
    set
}

//ends the quiz when either the timer hits 0 or all the questions have been answered
function endQuiz(){
    myScore.innaText = count
    addscore.classList.remove("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")
}

//displays the high scores for the quiz
function displayScores() {
    if (storedScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < storedHighScores.length; i++) {
            var initials = storedHighScores[i].inits;
            var scores = storedHighScores[i].userScore
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " - " + scores;
            scoreList.appendChild(scoreEntry);
        }
        highScoresArea.appendChild(scoreList);
    }
};

//gives the users the option to go back or clear the scores on the list
displayScores();

backBtn.addEventListener("click", function () {
    location.href = "index.html";
});

clearButton.addEventListener("click", function () {
    highScoresArea.innerHTML = "";
    window.localStorage.clear();

});