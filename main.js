function preload() {
  bgIntro = loadImage("./assets/bg.jpg");
  bgGame = loadImage("./assets/bgGame.jpg");
  player = loadImage("./assets/player.jpg");
  //soundFormats("mp3");
  //gameSong = loadSound("./audio/guns.mp3");

  p5 = loadImage("./assets/p5.jpg");
  css = loadImage("./assets/css.jpg");
  js = loadImage("./assets/js.png");
  bootstrap = loadImage("./assets/bootstrap.png");
  ironhacker = loadImage("./assets/ironhacker.png");
  ironhack = loadImage("./assets/ironhack.png");
  github = loadImage("./assets/github.png");
  mongodb = loadImage("./assets/mongodb.jpeg");
  nodejs = loadImage("./assets/nodejs.jpg");
  react = loadImage("./assets/react.png");
}
const game = new Game();
const intro = new Intro();
let level = "Intro";

function setup() {
  // gameSong.play();
  createCanvas(1056, 643);
  intro.setup();
}

function draw() {
  //gameSong.play();
  background(bgGame);

  if (level === "Intro") {
    intro.draw();
  } else {
    game.draw();
    startButton.hide();
  }
}

function startGame() {
  level = "level1";
}
