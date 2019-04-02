// this is all the data for the main story - story parts connected through the choices
// story constructed in the Story class in story.js

export default {
    "0A": {
        content:
            "It is a quiet evening in the city and you want to go home. The only problem is that you are on the wrong side of town, far away from home. This is a big city, especially for a small (however cunning) fox like you. As the sun sets, you start padding east, where you can see the first stars. You want to get home to your cosy little fox hole where you know you have some food stored. You feel hunger grumbling at the bottom of your belly and you feel a faint smell of food coming from somewhere, you:"
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
