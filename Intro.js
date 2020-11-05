class Intro {
    setup(){
        
        
        startButton = createButton('Start the Ironhack Simulation!');
        startButton.mousePressed(startGame);
        startButton.position(520, 270);
    
    }

    draw(){
        background(bgIntro);
        startButton.size(80, 80)
    }
}