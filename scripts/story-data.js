// this is all the data for the main story - story parts connected through the choices
// story constructed in the Story class in story.js

export default {
    "0A": {
        content:
            "this is the starting point of the story bla bla and then there is more story here and there and everywhere"
    },

    "1A": {
        content: "will lead to victory"
    },

    "1B": {
        content: "will lead to game over"
    },
    "2A": {
        content: "You have won!",
        isGameWon: true
    },
    "2B": {
        content: "you have lost",
        isGameOver: true
    }
};
