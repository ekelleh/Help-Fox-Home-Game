var sprite_sheet_image;
var sprite_sheet;
var standing_animation;

function preload() {
    sprite_sheet = loadSpriteSheet("../sprites/standing.png", 65, 65, 7);
    standing_animation = loadAnimation(sprite_sheet);
    standing_animation.frameDelay = 20;
}

function setup() {
    createCanvas(240, 240);
}

function draw() {
    clear();
    animation(standing_animation, 120, 120);
}
