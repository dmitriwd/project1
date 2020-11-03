function preload(){
    bgIntro = loadImage('assets/bg.jpeg');
    bgGame = loadImage('assets/bg.jpeg');

    p5 = loadImage('assets/p5.jpg');
    css = loadImage('assets/css.jpg');
    js = loadImage('assets/js.png');
    bootstrap = loadImage('assets/bootstrap.png');
    ironhackercopy = loadImage('assets/ironhackercopy.png');
    ironhack = loadImage('assets/ironhack.png');
    github = loadImage('assets/github.jpeg');
    mongodb = loadImage('assets/mongodb.png');
    nodejs = loadImage('assets/nodejs.jpg');
    react = loadImage('assets/react.png');
};
const game = new Game;
const intro = new Intro;
let level = "Intro"


function setup(){
    createCanvas(1056, 643);
    intro.setup();
}

function draw(){
    
    background(bgGame);
    
    if (level === 'Intro'){
        intro.draw();
    } else {
        game.draw();
        startButton.hide();
    }
}

function startGame(){
    level = 'level1';
}



