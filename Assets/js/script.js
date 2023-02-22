// Start Quiz Screen
let startButton = document.querySelector(".start-button");
let timerEl = document.querySelector(".timer");
let secondsLeft = 75;
let startScreenEl = document.querySelector(".start-screen");

// Quiz Question Screen
let mainEl = document.querySelector("main");
let questionsEl = document.querySelector(".question-screen");
let questionTextEl = document.querySelector(".question");
let questionIndex = 0;
let answersEl = document.querySelector(".choices");
let answer = document.querySelector("#answer");

// Final Score Screen
let finalScoreScreenEl = document.querySelector(".final-score-screen");
let finalScoreEl = document.querySelector(".final-score");
let initialsInput = document.querySelector(".initials-input");
let submitButton = document.querySelector(".submit-button");

// High Score Screen
let highScoreScreen = document.querySelector(".high-scores-screen");
let highscoreListEl = document.querySelector(".score-list");
let highscoreArr = [];
let goBackBtn = document.querySelector(".go-back-button");
let clearScoresBtn = document.querySelector(".clear-scores");

let questionsArr = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: '3',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: '3',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      answer: '4',
    },
    {
      title: 'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: '3',
    },
    {
      title: 'A very useful tool used during development and debugging for printing content to the debugger is ____.',
      choices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
      answer: '4',
    }
];

// Set Timer
function setTimer() {
    let timerInterval = setInterval(function() {
        secondsLeft --;
        timerEl.textContent = secondsLeft;
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time is up!");
            endGame();
        } else if(questionIndex === questionsArr.length) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

// Hide Start Screen, Show Questions, Start Timer
function startQuiz() {
  // hide start screen
  startScreenEl.setAttribute("class", "hide");
  // un-hide questions section
  mainEl.removeAttribute("class", "hide");

  setTimer();
  runQuestions();
}

// Present Questions after Click Event
function runQuestions() {
        questionTextEl.textContent = questionsArr[questionIndex].title;
        answersEl.textContent = "";
    for (let i = 0; i < questionsArr[questionIndex].choices.length; i++) {
        let choiceBtn = document.createElement("button");
        choiceBtn.textContent = questionsArr[questionIndex].choices[i];
        choiceBtn.id = (i + 1).toString();
        choiceBtn.addEventListener("click", checkAnswer);
        answersEl.append(choiceBtn);
    }
}

// Check if Answer Cllcked Matches Correct Answer
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
    } else endGame();
}

// Hide Questions and Show Final Score Screen
function endGame () {
    clearInterval(setTimer);
    mainEl.setAttribute("class", "hide");
    finalScoreScreenEl.removeAttribute("class", "hide");
    finalScoreEl.textContent = "Your final score is " + secondsLeft + ". Enter your initials below: "
}

// Run Submit Score on Click
// submitButton.addEventListener("click", )

// Return to Start Screen when Go Back is Clicked
goBackBtn.addEventListener("click", function() {
    startScreenEl.removeAttribute("class", "hide");
    highScoreScreen.setAttribute("class", "hide");
})

// Clear High Scores List
clearScoresBtn.addEventListener("click", function() {
    localStorage.removeItem("");
})

// Event Listener for Start Button, Starts Quiz
startButton.addEventListener("click", startQuiz);

// object for high scores to store to local storage
//   let highScore = {
//     initialsInput: initialsInput.value;
//     timerCount: timerCount.value;
//   }

//   localStorage.setItem("highScore", JSON.stringify(highScore))

