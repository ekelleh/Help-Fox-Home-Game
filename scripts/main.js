import { Story } from "./story.js";
import { Choice } from "./choice.js";
import storyData from "./story-data.js";
import choiceData from "./choice-data.js";

const beginning = new Story(storyData["0A"].content, "0A");
const choices = [];
let currentStory = beginning;

const createChoices = function() {
    choiceData.forEach(function(choice) {
        console.log(choice);
        choices.push(new Choice(choice.content, choice.storyId, choice.targetStoryId));
    });
};

console.log(beginning);
createChoices();
console.log(choices);

function getChoicesForCurrentStory(story) {
    return choices.filter(element => {
        return story.id === element.story;
    });
}

console.log(getChoicesForCurrentStory(beginning));

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

// Adding an event listener for the choices that calls the render function

function selectChoice() {
    document.querySelectorAll(".choice").forEach(function(choice) {
        choice.addEventListener("click", evt => {
            console.log(evt.target.innerHTML);
        });
    });
}
