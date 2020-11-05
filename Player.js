class Player{
    constructor() {
        this.x = 48;
        this.y = 350;
        this.width = 40;
        this.height = 40;
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