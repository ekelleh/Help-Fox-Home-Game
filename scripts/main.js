import { Story } from "./story.js";
import { Choice } from "./choice.js";
import storyData from "./story-data.js";
import choiceData from "./choice-data.js";

const beginning = new Story(storyData["0A"].content, "0A");
const choices = [];

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
