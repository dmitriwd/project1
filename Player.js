class Player{
    constructor() {
        this.x = 40;
        this.y = 467;
        this.width = 30;
        this.height = 60;
    };

    moveRight(steps) {
        if (this.x >= 900 - this.width) {
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