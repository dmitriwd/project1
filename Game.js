class Game {
    constructor(){
        this.obstacle = [];
        this.player = new Player();
    }
    
    draw(){
        this.player.draw();

        if (keyIsDown(37)) {
            this.player.moveLeft(5);
          }
        
          if (keyIsDown(39)) {
            this.player.moveRight(5);
          }
        
        if (frameCount % 60 === 0) {
            this.obstacle.push(new ObstacleDownSlow(145, p5));
        }

        if (frameCount % 180 === 0){
          this.obstacle.push(new ObstacleUpSlow(241, css));
      }

        if (frameCount % 80 === 0) {
          this.obstacle.push(new ObstacleDownFast(337, js));
        }

        if (frameCount % 140 === 0){
            this.obstacle.push(new ObstacleUpFast(433, bootstrap));
        }

        
        
        this.obstacle.forEach((obstacle, index) => {
            obstacle.draw();
            if (obstacle.y + obstacle.height <= -100) {
              this.obstacle.splice(index, 1);
            }

            if (this.collisionCheck(obstacle, this.player)) {
              noLoop();
            };
        });
    };



    collisionCheck(obstacle, player){
          if (player.x + player.width < obstacle.x){
          return false;
          }
          if (obstacle.x + obstacle.width < player.x) {
            return false;
          }
          if (player.y > obstacle.y + obstacle.height) {
            return false;
          }
          if (obstacle.y > player.y + player.height) {
            return false;
          }
          return true;     
    }

};
