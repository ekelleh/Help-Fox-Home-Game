var sprite_sheet_image;
var sprite_sheet;
var standing_animation;

function preload() {
    console.log("log");
    sprite_sheet = loadSpriteSheet("../sprites/standing.png", 65, 65, 7);
    standing_animation = loadAnimation(sprite_sheet);
}

function setup() {
    console.log("ihan sama");
    createCanvas(240, 240);
}

function draw() {
    console.log("jotain muuta tekstiä");
    clear();
    animation(standing_animation, 120, 120);
}
