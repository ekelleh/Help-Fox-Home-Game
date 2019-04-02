let sequenceAnimation;

function preload() {
    sequenceAnimation = loadAnimation(
        "sprites/tile001.png",
        "sprites/tile002.png",
        "sprites/tile003.png",
        "sprites/tile004.png",
        "sprites/tile005.png",
        "sprites/tile006.png"
    );
}

function setup() {
    var canvas = createCanvas(70, 70);
    canvas.parent("sketch-holder");
}

function draw() {
    clear();
    animation(sequenceAnimation, 35, 35);
}

/**

var sprite_sheet_image;
var sprite_sheet;
var standing_animation;

function preload() {
    sprite_sheet = loadSpriteSheet("../sprites/standing.png", 65, 65, 7);
    standing_animation = loadAnimation(sprite_sheet);
    standing_animation.frameDelay = 30;
}

function setup() {
    createCanvas(240, 240);
}

function draw() {
    clear();
    animation(standing_animation, 120, 120);
}
 */
