class Intro {
    setup(){
        
        startButton = createButton('Start');
        startButton.mousePressed(startGame);
        startButton.position(390, 250);

    }

    draw(){
        background(bgIntro);
        
        
    }
}