/*!
* Carleton Bootcamp - 2023
* Copyright 2023 Gustavo Miller
* Licensed under MIT 
* Assignment - 04 Code Quiz - Scores form
*/

var scoresArea = document.querySelector(".scoresarea");
var clearScore = document.querySelector("#clearScore");
var noDataSection = document.querySelector("#nodata");
var introSection = document.querySelector("#intro");

/**
 * This event listener applied to the Clear Score Anchor-button will clear the contents 
 * of the Local Storage and return to the index form
 */
clearScore.addEventListener("click", function () {
    localStorage.removeItem("scores")
    window.location.href = "index.html";
})

/**
 * This function triggers once, when form is loaded. Here we retrieve the scores from the Local Storage
 * and display the scores. 
 */
function Init() {
    // Retrieve data from local storage and test if there is data. Iterate through the scores object
    // and display on screen
    var scores = JSON.parse(localStorage.getItem("scores"));

    // Validate there is something
    if (scores !== null) {

        // Validate whether we have a single item or an array of objects
        if (Object.prototype.toString.call(scores)==="[object Array]"){
            for (i = 0; i <= scores.length - 1; i++) {
                var scoreTag = document.createElement("div"); // Create new DIV
                scoreTag.textContent = (i + 1) + ". " + scores[i].initials + " Score " + scores[i].score // Populate new element
    
                scoresArea.appendChild(scoreTag); // Inject Element to DOM
            }
        }else{
            var scoreTag = document.createElement("div"); // Create new DIV
            scoreTag.textContent = "1. " + scores.initials + " Score " + scores.score // Populate new element
            scoresArea.appendChild(scoreTag); // Inject Element to DOM
        }
        
    }else{
        noDataSection.classList.remove("hide-element");
        introSection.classList.add("hide-element")
        clearScore.classList.add("hide-element");
    }
}

Init();