import { Story } from "./story.js";
import { Choice } from "./choice.js";
import storyData from "./story-data.js";
import choiceData from "./choice-data.js";

const beginning = new Story(storyData["0A"].content, "0A");
const choices = [];
let currentStory = beginning;
renderEverything();

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

function renderStory() {
    let storyBox = document.querySelector(".story-box");
    storyBox.innerHTML = currentStory.content;
}

console.log();
console.log(currentStory.content);
console.log(renderStory());

function renderChoices() {
    let choiceBox = document.querySelector(".choice-box");
    choiceBox.innerHTML = "";

    let newChoice = getChoicesForCurrentStory(currentStory);

    newChoice.forEach(function(element, index) {
        const newChoiceBox = document.createElement("div");
        newChoiceBox.innerHTML = newChoice[index.content];
        newChoiceBox.style.backgroundColor = "#3c6d63";
        newChoiceBox.style.margin = "5px";
        newChoiceBox.style.width = "300px";
        newChoiceBox.style.height = "200px";
        newChoiceBox.style.borderRadius = "20px";
        newChoiceBox.style.padding = "20px";
        newChoiceBox.style.fontSize = "35px";
        choiceBox.appendChild(newChoiceBox);
    });
}
console.log(renderChoices());

/**
  width: 30%;
    height: 200px;
    background-color: #3c6d63;
    border: solid black;
    margin: 5px;
    border-radius: 20px;
 */

function renderEverything() {
    renderStory();
    renderChoices();
}

// tee funktio render joka asettaa nykyisen storyn ja nykyiset choicet HTMLään , ktso pizzat
// render story ja render choices fuktiot jota kutsutaan
// choicea klikkaamalla vaihtuu nykyinen story ja kutsuu render funtkiota

/**
 Haluat, että `renderStory` funktio laittaa sen `currentStory`n contentin sinne sivulla olevaan 
 diviin, jossa se nykyisen storyn teksti näkyy
Ja sit `renderChoices` tekee saman, mutta niille Choice napeille
 */
