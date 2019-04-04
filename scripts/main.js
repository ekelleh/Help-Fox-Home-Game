import { Story } from "./story.js"; // export class
import { Choice } from "./choice.js";
import storyData from "./story-data.js"; //export default
import choiceData from "./choice-data.js";

//setting initial values

const beginning = new Story(storyData["0A"].content, "0A");
const choices = [];
let currentStory = beginning;
const clickSound = new Audio("/sounds/194071__potentjello__buttons-and-knobs-10.wav");
const gameOverSound = new Audio("/sounds/337910__fschaeffer__82churchbells_Game over.wav");
const gettingHomeSound = new Audio("/sounds/aaj_0276_Harmonica_Riff_10.mp3");
let lifeCounter = 3;

//initializing all choices in choice-data.js and adding them to choices array

const createChoices = function() {
    choiceData.forEach(function(choice) {
        choices.push(new Choice(choice.content, choice.storyId, choice.targetStoryId));
    });
};

createChoices();

// create function that returns all choices belonging to a story

function getChoicesForCurrentStory(story) {
    return choices.filter(element => {
        return story.id === element.story;
    });
}

// render functions for placing current story and choices into the game HTML

function renderStory() {
    let storyBox = document.querySelector(".story-box");
    storyBox.innerHTML = currentStory.content;
}

function renderChoices() {
    let choiceBox = document.querySelector(".choice-box");
    choiceBox.innerHTML = "";

    let newChoice = getChoicesForCurrentStory(currentStory);

    newChoice.forEach(function(element) {
        const newChoiceBox = document.createElement("div");
        newChoiceBox.innerHTML = element.content;
        newChoiceBox.classList.add("choice");
        newChoiceBox.setAttribute("data-target-story-id", element.targetStory);
        choiceBox.appendChild(newChoiceBox);
    });
}

function renderEverything() {
    renderStory();
    renderChoices();
    selectChoice();
    gameOverEffects();
    winningSound();
}

renderEverything();

// Adding an event listener for the choices("buttons") that calls the render choices function
//make click change current story i.e lead to next story part

function changeCurrentStory(storyId) {
    const storyDataObject = storyData[storyId];
    const isGameOver = storyDataObject.hasOwnProperty("isGameOver") ? storyDataObject.isGameOver : false;
    const isGameWon = storyDataObject.hasOwnProperty("isGameWon") ? storyDataObject.isGameWon : false;
    currentStory = new Story(storyDataObject.content, storyId, isGameOver, isGameWon);
    console.log(currentStory);
}

function choiceClickHandler(evt) {
    const targetStoryId = evt.target.getAttribute("data-target-story-id");
    changeCurrentStory(targetStoryId);
    renderEverything();
    clickSound.play();
    let emptyHeading = document.querySelector(".story-header");
    emptyHeading.innerHTML = "";
}

function addEventListenerForChoice(choice) {
    choice.addEventListener("click", choiceClickHandler);
}

function selectChoice() {
    document.querySelectorAll(".choice").forEach(addEventListenerForChoice);
}

//adding sound effects

function gameOverEffects() {
    if (currentStory.isGameOver === true) {
        gameOverSound.play();

        let gameOverText = document.querySelector(".story-header");
        gameOverText.innerHTML = "GAME OVER!";
        gameOverText.style.color = "red";
        gameOverText.style.fontSize = "7rem";
        storyHeader.appendChild(gameOverText);
    }
}

function winningSound() {
    if (currentStory.isGameWon === true) {
        gettingHomeSound.play();

        let gameWonText = document.querySelector(".story-header");
        gameWonText.innerHTML = "You Got Home – Have Won!";
        gameWonText.style.color = "#e1dda1";
        gameWonText.style.fontSize = "7rem";
        storyHeader.appendChild(gameWonText);
    }
}

// add animation page "loading"
// make Game Won victory page - add animation?
// add score counter? --> fewer number of choices, the better 'survival rate'
//breadcrumbs?
// timer for the whole game
// life counter
