class Intro {
  setup() {
    startButton = createButton("Start Now");
    startButton.mousePressed(startGame);
    startButton.position(480, 280);
  }

  draw() {
    background(bgIntro);
    startButton.size(80, 80);
  }
}
