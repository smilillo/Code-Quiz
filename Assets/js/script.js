let startButton = document.querySelector(".start-button");
let timerEl = doscument.querySelector(".timer");
let secondsLeft = 75;

function startQuiz() {
  // hide start screen
  let startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');
  // un-hide questions section
  questionsEl.removeAttribute('class', 'hide');
}

startButton.addEventListener("click", startQuiz());

function runQuestions() {

let questions = [
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


function finalScore () {
    let timerCount = timerCount.value;

}

// object for high scores to store to local storage
//   let highScore = {
//     initialsInput: initialsInput.value;
//     timerCount: timerCount.value;
//   }

//   localStorage.setItem("highScore", JSON.stringify(highScore))
