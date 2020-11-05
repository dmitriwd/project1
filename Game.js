class Game {
  constructor() {
    this.obstacle = [];
    this.player = new Player();
    this.arrayOfSayings = [
      "it's most probably a typo!",
      "even senior developers google it!",
      "check stackoverflow!",
      "com'on, try harder!",
      "you can do it!",
    ];
    this.gameOver = false;
    this.counter = 0;
  }

  throwSayings() {
    noLoop();
    clear();
    background(255);
    let randomSaying = this.arrayOfSayings[
      Math.floor(Math.random() * this.arrayOfSayings.length)
    ];
    textSize(48);
    text(randomSaying, 200, 200);
    this.gameOver = false;

    setTimeout(() => {
      this.player.x = 48;
      loop();
    }, 4000);
  }

  drawCounter() {
    let counterBox = `Your trials so far: ${this.counter}`;
    textSize(32);
    text(counterBox, 48, 48);
  }

  draw() {
    this.drawCounter();
    this.player.draw();

    if (keyIsDown(37)) {
      this.player.moveLeft(6);
    }

    if (keyIsDown(39)) {
      this.player.moveRight(6);
    }
    //1
    if (frameCount % 160 === 0) {
      this.obstacle.push(new ObstacleDownSlow(145, p5));
    }
    //2
    if (frameCount % 95 === 0) {
      this.obstacle.push(new ObstacleUpSlow(241, css));
    }
    //3
    if (frameCount % 180 === 0) {
      this.obstacle.push(new ObstacleDownSlow(337, js));
    }
    //4
    if (frameCount % 80 === 0) {
      this.obstacle.push(new ObstacleUpSlow(433, github));
    }
    //5
    if (frameCount % 170 === 0) {
      this.obstacle.push(new ObstacleDownVeryFast(529, bootstrap));
    }
    //6
    if (frameCount % 70 === 0) {
      this.obstacle.push(new ObstacleUpSlow(625, mongodb));
    }
    //7
    if (frameCount % 170 === 0) {
      this.obstacle.push(new ObstacleDownFast(721, nodejs));
    }
    //8
    if (frameCount % 60 === 0) {
      this.obstacle.push(new ObstacleUpFast(817, react));
    }

    this.obstacle.forEach((obstacle, index) => {
      obstacle.draw();
      if (obstacle.y + obstacle.height <= -100) {
        this.obstacle.splice(index, 1);
      }

      if (this.collisionCheck(obstacle, this.player)) {
        this.gameOver = true;
      }
    });

    this.checkForGameOver();
  }

  checkForGameOver() {
    if (this.gameOver) {
      this.throwSayings();
      this.counter++;
      console.log(this.counter);
    }
  }

  collisionCheck(obstacle, player) {
    if (player.x + player.width <= obstacle.x) {
      return false;
    }
    if (obstacle.x + obstacle.width <= player.x) {
      return false;
    }
    if (player.y >= obstacle.y + obstacle.height) {
      return false;
    }
    if (obstacle.y >= player.y + player.height) {
      return false;
    }
    return true;
  }
}
