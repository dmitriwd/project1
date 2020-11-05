class Game {
  constructor() {
    this.obstacle = [];
    this.player = new Player();
    this.arrayOfSayings = [
      "The best revenge is massive success.",
      "By seeking and blundering we learn.",
      "Computers are good at following instructions, but not at reading your mind.",
      "Controlling complexity is the essence of computer programming.",
      "Before software can be reusable it first has to be usable.",
      "Deleted code is debugged code. ",
      "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
      "We cannot solve our problems with the same thinking we used when we created them.",
      "There are no short cuts to any place worth going.",
      "A good programmer is someone who always looks both ways before crossing a one-way street.",
      "In theory there is no difference between theory and practice. In practice there is.",
      "Ever Tried. Ever failed. No matter. Try again. Fail again. Fail better.",
      "Who said, that it is gonna be easy?",
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
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
    text(randomSaying, 40, 220, 1000, 400);
    this.gameOver = false;

    setTimeout(() => {
      this.player.x = 48;
      loop();
    }, 4000);
  }

  drawCounter() {
    let counterBox = `Learnings: ${this.counter}`;
    textSize(32);
    text(counterBox, 828, 580);
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
    if (frameCount % 140 === 0) {
      this.obstacle.push(new ObstacleDownSlow(145, p5));
    }
    //2
    if (frameCount % 95 === 0) {
      this.obstacle.push(new ObstacleUpSlow(241, css));
    }
    //3
    if (frameCount % 180 === 0) {
      this.obstacle.push(new ObstacleDownFast(337, js));
    }
    //4
    if (frameCount % 95 === 0) {
      this.obstacle.push(new ObstacleUpSlow(433, github));
    }
    //5
    if (frameCount % 165 === 0) {
      this.obstacle.push(new ObstacleDownVeryFast(529, bootstrap));
    }
    //6
    if (frameCount % 95 === 0) {
      this.obstacle.push(new ObstacleUpFast(625, mongodb));
    }
    //7
    if (frameCount % 170 === 0) {
      this.obstacle.push(new ObstacleDownFast(721, nodejs));
    }
    //8
    if (frameCount % 80 === 0) {
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
