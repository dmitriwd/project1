class Intro {
    preload(){
        bg = loadImage("./assets/bg.jpg");    }
    setup(){
        
        startButton = createButton('Start');
        startButton.mousePressed(startGame);
        startButton.position(100, 100);

    }

    draw(){
        background(bg);

        
    }
}