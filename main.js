function preload(){
    bg = loadImage("./assets/bg.jpg");
    p5 = loadImage('assets/p5.jpg')
    css = loadImage('assets/css.jpg')
    js = loadImage('assets/js.png')
    bootstrap = loadImage('assets/bootstrap.png')
    ironhackercopy = loadImage('assets/ironhackercopy.png')
};
const game = new Game;
const intro = new Intro;
let level = "Intro"


function setup(){
    createCanvas(900, 600);
    intro.setup();
}

function draw(){
    background('white');
    
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



