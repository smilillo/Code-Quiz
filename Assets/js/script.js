let startButton = document.querySelector(".start-button");
let timerEl = document.querySelector(".timer");
let secondsLeft = 75;
let startScreenEl = document.querySelector(".start-screen");

let mainEl = document.querySelector("main");
let questionsEl = document.querySelector(".question-screen");
let questionTextEl = document.querySelector(".question");
let questionIndex = 0;
let answersEl = document.querySelector(".choices");
let answer = document.querySelector("#answer");

let finalScoreScreenEl = document.querySelector(".final-score-screen");
let finalScoreEl = document.querySelector(".final-score")
let submitButton = document.querySelector(".submit-button");

let highScoreScreen = document.querySelector(".high-scores-screen");
let highscoreListEl = document.querySelector(".score-list");
let highscoreArr = [];
let goBackBtn = document.querySelector(".go-back-button");
let clearScoresBtn = document.querySelector(".clear-scores");

let questionsArr = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: '2',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: '2',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      answer: '3',
    },
    {
      title: 'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: '2',
    },
    {
      title: 'A very useful tool used during development and debugging for printing content to the debugger is ____.',
      choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
      answer: '3',
    }
];




// Set Timer
function setTimer() {
    let timerInterval = setInterval(function() {
        secondsLeft --;
        timerEl.textContent = secondsLeft;

        if(secondsLeft === 0 || questionIndex === questionsArr.length) {
            clearInterval(timerInterval);
            // finalScore();
        }
    }, 1000);
}

// Hide Start Screen and Show Questions after
function startQuiz() {
  // hide start screen
  startScreenEl.setAttribute("class", "hide");
  // un-hide questions section
  mainEl.removeAttribute("class", "hide");
//   questionIndex = 0;
  setTimer();
  runQuestions();
}

// Present Questions after Click Event
function runQuestions() {
    // for ( let i = 0; i < questionsArr[questionIndex].title.length; i++) {
        questionTextEl.textContent = questionsArr[questionIndex].title;
    // }
    for (let i = 0; i < questionsArr[questionIndex].choices.length; i++) {
        let choiceBtn = document.createElement("button");
        choiceBtn.textContent = questionsArr[questionIndex].choices[i];
        // choiceBtn.setAttribute("value", questionsArr[questionIndex].choices[i]);
        choiceBtn.id = (i + 1).toString();
        choiceBtn.addEventListener("click", checkAnswer);
        answersEl.append(choiceBtn);
    }
}


function checkAnswer(event) {
    let userAnswer = event.target.id;
    if (userAnswer === questionsArr[questionIndex].answer) {
        answer.textContent = "Correct!";
    }
    else {
        answer.textContent = "Incorrect";
        secondsLeft -= 10;
    }
    questionIndex++;
    if (questionIndex < questionsArr.length) {
        runQuestions();
    }
}


function finalScore () {
    clearInterval(timerInterval);
    questionsEl.setAttribute("class", "hide");
    finalScoreScreenEl.removeAttribute("class", "hide");
    finalScoreEl.textContent = "Your final score is " + secondsLeft + ". Enter your initials below: "

    submitButton.addEventListener("click", function () {

    })
}

function viewHighScores() {
    let high
}

goBackBtn.addEventListener("click", function() {
    startScreenEl.removeAttribute("class", "hide");
    highScoreScreen.setAttribute("class", "hide");
})

clearScoresBtn.addEventListener("click", function() {
    localStorage.removeItem("");
})

startButton.addEventListener("click", startQuiz);

// object for high scores to store to local storage
//   let highScore = {
//     initialsInput: initialsInput.value;
//     timerCount: timerCount.value;
//   }

//   localStorage.setItem("highScore", JSON.stringify(highScore))

