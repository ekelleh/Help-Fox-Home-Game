let sequenceAnimation;
let gameOverAnimation;
let runningAnimation;

function preload() {
    const gameOverSpriteSheet = loadSpriteSheet("sprites/dead.png", 65, 65, 7);
    const runningSpriteSheet = loadSpriteSheet("sprites/run.png", 78, 65, 7);
    sequenceAnimation = loadAnimation(
        "sprites/tile001.png",
        "sprites/tile002.png",
        "sprites/tile003.png",
        "sprites/tile004.png",
        "sprites/tile005.png",
        "sprites/tile006.png"
    );
    gameOverAnimation = loadAnimation(gameOverSpriteSheet);
    gameOverAnimation.frameDelay = 12;
    runningAnimation = loadAnimation(runningSpriteSheet);
}

function setup() {
    var canvas = createCanvas(70, 70);
    canvas.parent("sketch-holder");
}

function draw() {
    clear();
    if (typeof window.gameOver !== "undefined" && window.gameOver) {
        animation(gameOverAnimation, 35, 35);
    } else if (typeof window.loading !== "undefined" && window.loading) {
        animation(runningAnimation, 35, 35);
    } else {
        animation(sequenceAnimation, 35, 35);
    }
}
