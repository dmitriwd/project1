class Player{
    constructor() {
        this.x = 60;
        this.y = 487;
        this.width = 120;
        this.height = 222;
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
        rect(this.x, this.y, this.width, this.height);
    }
}