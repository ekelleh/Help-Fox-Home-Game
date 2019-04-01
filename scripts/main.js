import { Story } from "./story.js"; // export class
import { Choice } from "./choice.js";
import storyData from "./story-data.js"; //export default
import choiceData from "./choice-data.js";

//setting initial values

const beginning = new Story(storyData["0A"].content, "0A");
const choices = [];
let currentStory = beginning;

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
        choiceBox.appendChild(newChoiceBox);
    });
}

function renderEverything() {
    renderStory();
    renderChoices();
    selectChoice();
}

renderEverything();

// Adding an event listener for the choices("buttons") that calls the render choices function
function choiceClickHandler(evt) {
    console.log(evt.target.innerHTML);
}

function addEventListenerForChoice(choice) {
    choice.addEventListener("click", choiceClickHandler);
}

function selectChoice() {
    document.querySelectorAll(".choice").forEach(addEventListenerForChoice);
}

//
