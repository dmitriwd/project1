class Intro {
  setup() {
    startButton = createButton("Be a student");
    startButton.mousePressed(startGame);
    startButton.position(520, 270);
  }

  draw() {
    background(bgIntro);
    startButton.size(80, 80);
  }
}
