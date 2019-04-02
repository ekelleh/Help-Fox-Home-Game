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
        newChoiceBox.setAttribute("data-target-story-id", element.targetStory);
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
//make click change current story i.e lead to next story part

var audio = new Audio("/sounds/aaj_0276_Harmonica_Riff_10.mp3");
audio.play();

function changeCurrentStory(storyId) {
    currentStory = new Story(storyData[storyId].content, storyId);
    console.log(currentStory);
}

function choiceClickHandler(evt) {
    const targetStoryId = evt.target.getAttribute("data-target-story-id");
    changeCurrentStory(targetStoryId);
    renderEverything();
    audio.play();
}

function addEventListenerForChoice(choice) {
    choice.addEventListener("click", choiceClickHandler);
}

function selectChoice() {
    document.querySelectorAll(".choice").forEach(addEventListenerForChoice);
}

// make Game Won victory page
// make Game over page
// style
// add content
// add animations
// sound
