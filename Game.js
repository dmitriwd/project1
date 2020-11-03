class Game {
    constructor(){
        this.arr = [];
        this.player = new Player();
    }

    draw(){
        if (frameCount % 60 === 0) {
            this.arr.push(new ObstacleDownSlow(300, p5));
            this.arr.push(new ObstacleDownFast(700, js));
        }

        if (frameCount % 180 === 0){
            this.arr.push(new ObstacleUpFast(500, css));
            this.arr.push(new ObstacleUpSlow(900, bootstrap));
        }
        
        this.arr.forEach((obstacle, index) => {
            obstacle.draw();
            if (obstacle.y + obstacle.height <= -100) {
              this.arr.splice(index, 1);
            }
        });

        if (keyIsDown(37)) {
            this.player.moveLeft(10);
        }

        if (keyIsDown(39)) {
            this.player.moveRight(10);
        }

        this.player.draw();

        collisioincheck(obstacle)
    }

}