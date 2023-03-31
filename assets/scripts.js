//end screen
    //save initials (local storage)


var questionEl = document.getElementById("question");
var buttonEl1 = document.getElementById("button1");
var buttonEl2 = document.getElementById("button2");
var buttonEl3 = document.getElementById("button3");
var buttonEl4 = document.getElementById("button4");
buttonEl1.addEventListener("click",getAnswer);
buttonEl2.addEventListener("click",getAnswer);
buttonEl3.addEventListener("click",getAnswer);
buttonEl4.addEventListener("click",getAnswer);

var questionIndex = 0;
var score = 0;
var livescore = document.getElementById("scoreTracker");
var endScore = document.getElementById("quizScore");

var startButton = document.getElementById("startButton");
var quizContainer = document.getElementById("question-subcontainer");
var endScreen = document.getElementById("end-container");
var header = document.getElementById("header");

var previousAttemptInitials = document.getElementById("previousAttemptInitials");
var storedInitals = localStorage.getItem("initials") + ": " + localStorage.getItem("score");


startButton.addEventListener("click", startQuiz);
function startQuiz() {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    endScreen.style.display = "none";
    livescore.textContent = "Score: " + score.toString();
    liveTime.textContent = "Time: " + time.toString();
    timer();
}


var time = 150
var liveTime = document.getElementById("timer");
function timer() {
    time--;
    liveTime.textContent = "Time: " + time.toString();
    if (time <= 0) {
        endQuiz();
    } else {
        setTimeout(timer, 1000)
    }
}

function endQuiz() {
    quizContainer.style.display = "none";
    endScreen.style.display = "block";
    header.style.display = "none";
    endScore.textContent = "Your Score Is: " + score.toString() + "/10";
    previousAttemptInitials.textContent = storedInitals;
}

function storeScore(){
    var localScore = document.getElementById("initials");
    localStorage.setItem("initials", localScore.value);
    localStorage.setItem("score", score);
    storedInitals = localStorage.getItem("initials") + ": " + localStorage.getItem("score");
    previousAttemptInitials.textContent = storedInitals;
}

var questions = [
    {
        question: "What does the acronym DOM stand for in JavaScript?",
        options: ["Data Object Model", "Document Object Model", "Digital Object Method", "Database Object Module"],
        answer: "Document Object Model"
    },
    {
        question: "Which keyword is used to declare a function in JavaScript?",
        options: ["function", "declare", "func", "method"],
        answer: "function"
    },
    {
        question: "What is the result of the following code: var x = 5; var y = 10; var z = x + y;",
        options: ["15", "'15'", "NaN", "undefined"],
        answer: "15"
    },
    {
        question: "Which statement is used to terminate a loop in JavaScript?",
        options: ["stop", "end", "break", "finish"],
        answer: "break"
    },
    {
        question: "What is the correct syntax for creating a comment in JavaScript?",
        options: ["// ", "<!-- -->", "/*  /", "*  **"],
        answer: "// "
    },
    {
        question: "What is the output of the following code: var x = '5'; var y = 2; var z = x + y;",
        options: ["7", "'7'", "52", "'52'"],
        answer: "52"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["declare", "let", "var", "const"],
        answer: "var"
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: ["pop()", "shift()", "slice()", "splice()"],
        answer: "pop()"
    },
    {
        question: "What is the result of the following code: var x; console.log(x);",
        options: ["0", "null", "undefined", "NaN"],
        answer: "undefined"
    },
    {
        question: "Which statement is used to test a condition in JavaScript?",
        options: ["test", "verify", "if", "check"],
        answer: "if"
    }
   ]


function getQuestion() {
        questionEl.textContent = questions[questionIndex].question
        buttonEl1.textContent = questions[questionIndex].options[0];
        buttonEl2.textContent = questions[questionIndex].options[1];
        buttonEl3.textContent = questions[questionIndex].options[2];
        buttonEl4.textContent = questions[questionIndex].options[3];
    }

function getAnswer(e) {
    var button = e.target;
    console.log(button.innerHTML);
    if (button.innerHTML === questions[questionIndex].answer) {
        score++;
        questionIndex++;
        livescore.textContent = "Score: " + score.toString();
        if (questionIndex === 10) {
            time = 0;
        } else {
            getQuestion();
        }
    } else if (button.innerHTML !== questions[questionIndex].answer) {
        time -= 25;
    }}

getQuestion();

