class Intro {
    preload(){
        bg = loadImage("./assets/bg.jpg");    }
    setup(){
        
        startButton = createButton('Start');
        startButton.mousePressed(startGame);
        startButton.position(390, 250);

    }

    draw(){
        background(bg);

        
    }
}