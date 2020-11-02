function preload(){
    p5 = loadImage('assets/p5.jpg')
    css = loadImage('assets/css.jpg')
    js = loadImage('assets/js.png')
    bootstrap = loadImage('assets/bootstrap.png')
};
const game = new Game;

function setup(){
    createCanvas(1600, 900);
}

function draw(){
    background('white');
    game.draw();
    
}