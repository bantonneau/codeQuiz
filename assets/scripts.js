// This is a JavaScript file for a quiz game.
// The game consists of ten multiple-choice questions.
// The user has a limited amount of time to answer the questions.
// The score is displayed at the end of the game and can be saved in local storage.

// Get elements from the HTML document
var questionEl = document.getElementById("question");
var buttonEl1 = document.getElementById("button1");
var buttonEl2 = document.getElementById("button2");
var buttonEl3 = document.getElementById("button3");
var buttonEl4 = document.getElementById("button4");
var livescore = document.getElementById("scoreTracker");
var endScore = document.getElementById("quizScore");
var startButton = document.getElementById("startButton");
var quizContainer = document.getElementById("question-subcontainer");
var endScreen = document.getElementById("end-container");
var header = document.getElementById("header");
var previousAttemptInitials = document.getElementById("previousAttemptInitials");
var liveTime = document.getElementById("timer");

// Add event listeners to the answer buttons
buttonEl1.addEventListener("click",getAnswer);
buttonEl2.addEventListener("click",getAnswer);
buttonEl3.addEventListener("click",getAnswer);
buttonEl4.addEventListener("click",getAnswer);

// Set initial values for variables
var questionIndex = 0;
var score = 0;
var storedInitals = localStorage.getItem("initials") + ": " + localStorage.getItem("score");
var time = 150

// Start the quiz when the start button is clicked
startButton.addEventListener("click", startQuiz);
function startQuiz() {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    endScreen.style.display = "none";
    livescore.textContent = "Score: " + score.toString();
    liveTime.textContent = "Time: " + time.toString();
    timer();
}

// Countdown timer function
function timer() {
    time--;
    liveTime.textContent = "Time: " + time.toString();
    if (time <= 0) {
        endQuiz();
    } else {
        setTimeout(timer, 1000)
    }
}

// Display end screen
function endQuiz() {
    quizContainer.style.display = "none";
    endScreen.style.display = "block";
    header.style.display = "none";
    endScore.textContent = "Your Score Is: " + score.toString() + "/10";
    previousAttemptInitials.textContent = storedInitals;
}

// Store the score in local storage when the user submits their initials
function storeScore(){
    var localScore = document.getElementById("initials");
    localStorage.setItem("initials", localScore.value);
    localStorage.setItem("score", score);
    storedInitals = localStorage.getItem("initials") + ": " + localStorage.getItem("score");
    previousAttemptInitials.textContent = storedInitals;
}

// Array of quiz questions
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

//sets the text content of four buttons and a question element with data from an array of objects called questions. The questionIndex variable is used to track which question should be displayed.
function getQuestion() {
        questionEl.textContent = questions[questionIndex].question
        buttonEl1.textContent = questions[questionIndex].options[0];
        buttonEl2.textContent = questions[questionIndex].options[1];
        buttonEl3.textContent = questions[questionIndex].options[2];
        buttonEl4.textContent = questions[questionIndex].options[3];
    }

//called when one of the four buttons is clicked. It checks whether the clicked button's innerHTML matches the answer to the current question 
function getAnswer(e) {
    var button = e.target;
    console.log(button.innerHTML);
    //If the answer is correct, the user's score is incremented, the questionIndex is incremented, and the text content of the livescore element is updated with the new score. If the user has answered all 10 questions, the time variable is set to 0. If the answer is incorrect, the time variable is decremented by 25.
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

//initializes the quiz
getQuestion();

