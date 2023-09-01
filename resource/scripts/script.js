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
var testCompleted = false; // Indicates quiz has been completed
var timeRunOut = false; // Indicates time has ran out

var score = document.querySelector("#totalScore");
var noScore = document.querySelector("#ohNoScore");

var submitScore = document.querySelector("#submitScoreButton"); // Submit score button
var gradeSubmitForm = document.querySelector("#gradesubmitForm"); // Scores Submit Form
var submitRestart = document.querySelector(".submitRestart");
var scoreInitials = document.querySelector("#scoreInitials");
var scoresRegistry = []; // Declare empty array - this will hold the grades
var totalScore = 0; // Total Score handler
var viewScoresCount = document.querySelector("#viewscorescount"); // Anchor to load scores page

// Questions area; area, question description, and respective options
var questionArea = document.querySelector("#questionArea");
var questionDes = document.querySelector(".questionDescription");
var questionQ1 = document.querySelector("#q1");
var questionQ2 = document.querySelector("#q2");
var questionQ3 = document.querySelector("#q3");
var questionQ4 = document.querySelector("#q4");

var displayResponse = document.querySelector("#correctOne"); // Retrieve correct answer, included in the object
var responseDisplay = document.querySelector("#responseDisplay"); // Selector - display whether the response is correct or not
const elementsButtons = document.querySelectorAll(".response"); // Select ALL quiz buttons

var counter = 0; // Questions counter
var correctResponse = "";
var sec = 60;

/** Questions array. It contains all the questions we are showing to the user */
var questionsArray = [
  {
    question: "The internet has been around for more time that you think. Search engines are a very important feature of any browser.<br/> <strong>Which one was the first search engine in internet</strong>",
    quiza: "Google", quizb: "Archie", quizc: "Altavista", quizd: "WAIS", answer: "Archie"
  }, {
    question: "An Internet Protocol Version 6 address (IPv6 address) is a numeric label that is used to identify and locate a network interface of a computer<br/><strong>Number of bit used by the IPv6 address</strong>",
    quiza: "32 bit", quizb: "64 bit", quizc: "128 bit", quizd: "256 bit", answer: "128 bit"
  }, {
    question: "A web browser is an application for accessing websites. The purpose of a web browser is to fetch content from the World Wide Web or from local storage and display it on a user's device<br/><strong>Which one is the first web browser invented in 1990</strong>",
    quiza: "Internet Explorer", quizb: "Mosaic", quizc: "Mozilla", quizd: "Nexus", answer: "Nexus"
  }, {
    question: "A programming language is a system of notation for writing computer programs.[1] Most programming languages are text-based formal languages, but they may also be graphical.<br/><strong>Which of the following programming language is used to create programs like applets?</strong>",
    quiza: "COBOL", quizb: "C Language", quizc: "Java", quizd: "BASIC", answer: "Java"
  }, {
    question: "A computer virus is a type of malware that, when executed, replicates itself by modifying other computer programs and inserting its own malicious code into those programs.<br/><strong>First computer virus is known as</strong>",
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

  // Build score object 
  var localScore = {
    initials: scoreInitials.value,
    score: totalScore
  };

  scoresRegistry.push(localScore); // Add new results to the local storage

  // Window: localStorage property - data has no expiration time
  localStorage.setItem("scores", JSON.stringify(scoresRegistry));

  // Return to the main form
  window.location.href = "index.html";
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
      if (sec < 0) { sec = 0; }
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

    // Time has ran out we need to exit. We do a tripple equal to ensure true/false
    if (timeRunOut === true) { return false; }
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
      ProcessCompletedQuiz(totalScore) // Validate Completion special conditions
      clearInterval(timer);
      return;
    }

    // Evaluate the counter we should stop at cero (0) but we validate for less than. in case
    // this is true then we need to stop the counter. Fail the process and display failed message
    if (sec <= 0) {
      questionArea.hidden = true;
      responseDisplay.hidden = true;
      quizInvalid.hidden = false;
      timeRunOut = true; // Indicates time has ran out

      clearInterval(timer);
    }
  }, 1000);
}

/**
 * This function will process the completion of the quiz. The user may have score CERO (0) which
 * force the process not to allow registration of cero scores. When condition is cero then we 
 * offer the option to restart the process
 * @param {*} value - Total Score
 */
function ProcessCompletedQuiz(value) {

  // Process has been completed - no more questions
  questionArea.hidden = true;

  // Reveal Quiz success but do not allow registration of Cero (0)
  quizSuccess.classList.remove("hide-element");

  if (value == 0) {
    gradeSubmitForm.classList.add("hide-element"); // Hide the score form
    submitRestart.classList.remove("hide-element"); // Reveal 
    noScore.hidden = false;
  }
}

/**
 * This function triggers once, when form is loaded. It makes sure the 
 * correct elements are being displayed. It also initializes the variables that will 
 * control the flow. In here we load the information we have in our Local Storage
 */
function Init() {
  introSection.hidden = false; // Present the user the challenge
  questionArea.hidden = true; // hide the questions area
  quizInvalid.hidden = true; // hide the invalid area
  quizSuccess.hidden = true; // hide the success area

  testCompleted = false; // Process initialized - not completed as default
  counter = 0; // Initialize the questions counter

  // Retrieve data from local storage and test if there is data; it pushes into array
  // in case scores exist.
  var scores = JSON.parse(localStorage.getItem("scores"));
  if (scores !== null) {

    // Validate whether we have a single item or an array of objects
    if (Object.prototype.toString.call(scores) !== "[object Array]") {
      scoresRegistry.push(scores); // Initialize the scores array
    } else {
      for (i = 0; i <= scores.length - 1; i++) {
        scoresRegistry.push(scores[i]); // Add scores into array
      }
    }
  }

  // Evaluate the Local Storage object and display number of items. Using ternary conditional
  viewScoresCount.textContent = "View Highscores (" + ((scoresRegistry !== null) ? scoresRegistry.length : "0") + ")";
}

Init();