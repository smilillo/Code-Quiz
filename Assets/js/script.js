let startButton = document.querySelector(".start-button");
let timerEl = document.querySelector(".timer");
let secondsLeft = 75;
let startScreenEl = document.querySelector(".start-screen");

let mainEl = document.querySelector("main");
let questionsEl = document.querySelector(".question-screen");
let questionTextEl = document.querySelector(".question");
let answersEl = document.querySelector(".choices");
let optionABtn = document.querySelector(".btnA");
let optionBBtn = document.querySelector(".btnB");
let optionCBtn = document.querySelector(".btnC");
let optionDBtn = document.querySelector(".btnD");

let finalScoreScreenEl = document.querySelector(".final-score-screen");
let finalScoreEl = document.querySelector(".final-score")
let submitButton = document.querySelector(".submit-button");

let highScoreScreen = document.querySelector(".high-scores-screen");
let goBackBtn = document.querySelector(".go-back-button");
let clearScoresBtn = document.querySelector(".clear-scores");

let questionsArr = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      answer: 'all of the above',
    },
    {
      title: 'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title: 'A very useful tool used during development and debugging for printing content to the debugger is ____.',
      choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
      answer: 'console.log',
    }
]

// startButton.addEventListener("click", startQuiz());

// Hide Start Screen and Show Questions after
function startQuiz() {
  // hide start screen
  startScreenEl.setAttribute('class', 'hide')
  // un-hide questions section
  mainEl.removeAttribute('class', 'hide');
}

// Set Timer
function setTimer() {
    let timerInterval = setInterval(function() {
        secondsLeft --;
        timerEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            finalScore();
        }
    }, 1000);
}

function runQuestions() {
    
    }



function finalScore () {
    clearInterval(timerInterval);
    questionsEl.setAttribute("class", "hide");
    finalScoreScreenEl.removeAttribute("class", "hide");
    finalScore.textContent = "Your final score is " + secondsLeft + ". Enter your initials below: "

    submitButton.addEventListener("click", function () {

    })

}

// object for high scores to store to local storage
//   let highScore = {
//     initialsInput: initialsInput.value;
//     timerCount: timerCount.value;
//   }

//   localStorage.setItem("highScore", JSON.stringify(highScore))

