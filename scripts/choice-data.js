// This is a collection of all the data for the choices that lead to the next part of the story
// choices constructed in the Choices class in choice.js

export default [
    {
        content:
            "Maybe it’s safer to just start heading straight home, you can find something to nibble on on the way..",
        storyId: "0A",
        targetStoryId: "1B"
    },
    {
        content:
            "Turn around and follow your nose in the direction of the smell, there might be food close by...",
        storyId: "0A",
        targetStoryId: "1A"
    },
    {
        content: "",
        storyId: "1A",
        targetStoryId: "2A"
    },
    {
        content: "",
        storyId: "1B",
        targetStoryId: "2B"
    }
];
