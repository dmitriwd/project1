class Player{
    constructor() {
        this.x = 48;
        this.y = 300;
        this.width = 48;
        this.height = 60;
    };

    moveRight(steps) {
        if (this.x >= 1056 - this.width) {
          return;
        }
        this.x += steps;
      };

    moveLeft(steps) {
        if (this.x <= 0) {
          return;
        }
        this.x -= steps;
    };

    draw(){
      image(ironhack, this.x, this.y);
    }
}