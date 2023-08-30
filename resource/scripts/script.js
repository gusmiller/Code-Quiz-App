/*!
* Carleton Bootcamp - 2023
* Copyright 2023 Gustavo Miller
* Licensed under MIT 
* Assignment - 04 Code Quiz
*/

var generateBtn = document.querySelector("#generate"); // Button selector
var resultsDisplay = document.querySelector("#resultsDisplay"); // Results communication area  

// Quiz sections including the intro
var introSection = document.querySelector("#intro");
var quizInvalid = document.querySelector("#quizInvalid");
var quizSuccess = document.querySelector("#quizSuccess");

// Time log selector - display the timer here
var timelog = document.querySelector("#timelog");
var testCompleted = false;

var score = document.querySelector("#totalScore");
var submitScore = document.querySelector("#submitScore");
var scoreInitials = document.querySelector("#scoreInitials");
var scoresControl = []; // Declare empty array - this will hold the grades
var totalScore = 0; // Total Score handler

// Questions area; area, question description, and respective options
var questionArea = document.querySelector("#questionArea");
var questionDes = document.querySelector("#questionDescription");
var questionQ1 = document.querySelector("#q1");
var questionQ2 = document.querySelector("#q2");
var questionQ3 = document.querySelector("#q3");
var questionQ4 = document.querySelector("#q4");

var displayResponse = document.querySelector("#correctOne"); // Retrieve correct answer, included in the object
var responseDisplay = document.querySelector("#responseDisplay"); // Selector - display whether the response is correct or not
const elementsButtons = document.querySelectorAll(".response"); // Select ALL quiz buttons

var counter = 0;
var correctResponse = "";
var sec = 60;

/** Questions array. It contains all the questions we are showing to the user */
var questionsArray = [
  {
    question: "Which one is the first search engine in internet",
    quiza: "Google", quizb: "Archie", quizc: "Altavista", quizd: "WAIS", answer: "Archie"
  }, {
    question: "Number of bit used by the IPv6 address",
    quiza: "32 bit", quizb: "64 bit", quizc: "128 bit", quizd: "256 bit", answer: "128 bit"
  }, {
    question: "Which one is the first web browser invented in 1990",
    quiza: "Internet Explorer", quizb: "Mosaic", quizc: "Mozilla", quizd: "Nexus", answer: "Nexus"
  }, {
    question: "Which of the following programming language is used to create programs like applets?",
    quiza: "COBOL", quizb: "C Language", quizc: "Java", quizd: "BASIC", answer: "Java"
  }, {
    question: "First computer virus is known as",
    quiza: "Rabbit", quizb: "Creeper Virus", quizc: "Elk Cloner", quizd: "SCA Virus", answer: "Creeper Virus"
  }
];

/**
 * This function will trigger the Quiz process. It iterates through all the questions stored
 * in the question array. It presents the questions and possible options. This is while the 
 * process has not been completed.
 */
function startQuiz() {

  // We process while test has not been completed
  if (testCompleted == false) {
    introSection.hidden = true;
    questionArea.hidden = false;

    questionDes.innerHTML = questionsArray[counter].question;
    questionQ1.innerHTML = questionsArray[counter].quiza;
    questionQ2.innerHTML = questionsArray[counter].quizb;
    questionQ3.innerHTML = questionsArray[counter].quizc;
    questionQ4.innerHTML = questionsArray[counter].quizd;

    correctResponse = questionsArray[counter].answer;
  } else {
    score.innerHTML = totalScore;
  }
}

/**
 * This function creates an event listener for the Score Initials; it will uppercase 
 * the keys as the user types
 */
scoreInitials.addEventListener("keyup", function () {
  this.value = this.value.toUpperCase();
})

/**
 * Create an event listener for the button. The process will start the timer and trigger
 * the Quiz process.
 */
generateBtn.addEventListener("click", function () {
  generateBtn.classList.add("hide-element"); //Process started, hide button

  responseDisplay.hidden = false;//This is where results will go

  timer(); // Initiate the timer
  startQuiz(); // Start the quiz
});

/**
 * This event is triggered from the Submit Score form; it makes sure we preventDefault behavior, then
 * it validates if we have other values in array and pushes the new value. NOTE: it does not validate 
 * the initials already exists -not in assignment scope
 */
submitScore.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent a post - prevent form to be rendered

  var scoreArray = [{
    initials: scoreInitials.value,
    score: totalScore
  }];

  scoresControl.push(scoreArray); // Add new results to the local storage

  // Window: localStorage property - data has no expiration time
  localStorage.setItem("scores", JSON.stringify(scoresControl));
})

/**
 * Create an even listener to all the buttons in the response area. In here we validate
 * the response, grant the 25 points for correct answer and penalize 10 seconds when 
 * wrong.
 */
elementsButtons.forEach(function (e) {
  e.addEventListener("click", function () {

    var myResponse = this.innerHTML; //Retrieve option selected from the button innerHTML

    counter++;

    // Validate the selected response and compare with correct one; which is in the object. We 
    // style the display based on the evaluation.
    if (myResponse != correctResponse) {
      resultsDisplay.innerHTML = "Sorry wrong answer!"; // Nah! wrong answer
      resultsDisplay.setAttribute("style", "color:red;"); // Change style to warning
      sec = sec - 10; //Penalize user with 10 seconds
    } else {
      totalScore = totalScore + 20;
      resultsDisplay.innerHTML = "That is correct!"; // Nice! right answer
      resultsDisplay.setAttribute("style", "color:black;"); // Change style to warning
    }

    // Validate if we have completed the last question, this will terminate the
    // counter next time it executes
    if (counter > elementsButtons.length) {
      testCompleted = true; // Test completed
    }

    setTimeout(function () { resultsDisplay.innerHTML = ""; startQuiz(); }, 500);

  });
})

/**
 * This function will start the timer. The timer goes in descending count, when it 
 * reaches cero (0) the process it terminated. 
 */
function timer() {
  var timer = setInterval(function () {
    timelog.hidden = false; // Reveal the timer log on screen
    document.getElementById('timerview').innerHTML = sec; // Display the count using innerHTML

    sec--; // Decrease the counter

    // Validate whether the process has been terminated
    if (testCompleted == true) {
      questionArea.hidden = true;
      quizSuccess.hidden = false;
      clearInterval(timer);
      return;
    }

    // Evaluate the counter we should stop at cero (0) but we validate for less than. in case
    // this is true then we need to stop the counter. Fail the process and display failed message
    if (sec <= 0) {
      questionArea.hidden = true;
      quizInvalid.hidden = false;

      testCompleted == true;
      clearInterval(timer);
      return;
    }
  }, 1000);
}

/**
 * This function triggers once, when form is loaded. It makes sure the 
 * correct elements are being displayed. It also initializes the variables that will 
 * control the flow.
 */
function Init() {
  introSection.hidden = false; // Present the user the challenge
  questionArea.hidden = true; // hide the questions area
  quizInvalid.hidden = true; // hide the invalid area
  quizSuccess.hidden = true; // hide the success area

  testCompleted = false; // Process initialized - not completed as default

  // Retrieve data from local storage and test if there is data; it pushes into array
  // in case scores exist.
  var scores = JSON.parse(localStorage.getItem("scores")); 
  if (scores !== null) {
    scoresControl.push(scores);
  }
}

Init();